import {debounce} from 'components/src/util.js'
import * as kv from 'idb-keyval'
import {writable} from 'svelte/store'

import {api} from './lib/api.js'
import {
    add_online_listener,
    cache_family_data,
    clear_session,
    get_cached_family_data,
    get_offline_queue,
    get_session,
    is_online,
    queue_offline_action,
    remove_from_offline_queue,
    set_last_sync,
    set_session,
} from './lib/storage.js'

export const appstate = writable({
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    is_online: navigator.onLine,
    is_pwa_installed: window.matchMedia('(display-mode: standalone)').matches,
    pending_sync: false,
})

export const session = writable({
    loaded: false,
    family_id: null,
    join_code: null,
    last_seen: null,
})

export const family_store = writable({
    family: null,
    children: [],
    recent_adjustments: [],
    is_loaded: false,
    error: null,
    loading: false,
    is_offline_mode: false,
    pending_offline_actions: 0,
})

export const ui_store = writable({
    confirm_dialog: null,
    active_modal: null,
    child_sort: 'name',
    show_history: false,
    pending_operations: new Set(),
    last_action: null,
    undo_timeout: null,
    offline_banner_visible: false,
})

let session_value = null
let family_value = null
let ui_value = null
let appstate_value = null

session.subscribe(value => (session_value = value))
family_store.subscribe(value => (family_value = value))
ui_store.subscribe(value => (ui_value = value))
appstate.subscribe(value => (appstate_value = value))

console.log(appstate_value)

add_online_listener(() => {
    const is_online = navigator.onLine
    appstate.update(state => ({...state, is_online: is_online}))

    if (is_online) {
        ui_store.update(state => ({...state, offline_banner_visible: false}))
        family_actions.sync_offline_actions()
    } else ui_store.update(state => ({...state, offline_banner_visible: true}))
})

export const family_actions = {
    _backoff_ms: 0,
    _inflight: false,
    _listeners: null,
    _is_polling: false,
    _base_interval: 5000,
    _max_backoff: 120000,
    _poll_timeout_id: null,
    _pending_batches: null,
    _temp_id_mapping: new Map(),

    async clean_orphaned_actions() {
        const queue = await get_offline_queue()
        const temp_ids_in_queue = new Set()
        const orphaned_actions = []

        queue.forEach(action => {
            if (action.type === 'create_child' && action.temp_id)
                temp_ids_in_queue.add(action.temp_id)
        })

        queue.forEach(action => {
            if (action.type === 'adjust_score' && action.child_id?.startsWith('temp_')) {
                if (!temp_ids_in_queue.has(action.child_id)) orphaned_actions.push(action)
            }
        })

        for (const action of orphaned_actions) await remove_from_offline_queue(action.id)

        await this._update_pending_count()
    },

    async sync_offline_actions() {
        if (!is_online()) return

        appstate.update(state => ({...state, pending_sync: true}))

        try {
            const queue = await get_offline_queue()
            if (queue.length === 0) {
                await this._update_pending_count()
                return
            }

            const create_actions = queue.filter(action => action.type === 'create_child')
            const other_actions = queue.filter(action => action.type !== 'create_child')

            for (const action of create_actions) {
                await this._execute_offline_action(action)
                await remove_from_offline_queue(action.id)
            }

            const sorted_other_actions = other_actions.sort((a, b) => {
                const priority = {
                    update_child: 1,
                    adjust_score: 2,
                    delete_child: 3,
                    reset_all_scores: 4,
                    update_family: 5,
                }
                return (priority[a.type] || 10) - (priority[b.type] || 10)
            })

            for (const action of sorted_other_actions) {
                try {
                    const result = await this._execute_offline_action(action)

                    if (!result?.skipped) await remove_from_offline_queue(action.id)
                    else await remove_from_offline_queue(action.id)
                } catch (error) {
                    if (error.status === 404 && action.child_id?.startsWith('temp_'))
                        await remove_from_offline_queue(action.id)
                }
            }

            await this.refresh_family_silent()
            await set_last_sync()
        } catch (error) {
            console.error('[Sync] Failed to sync offline actions:', error)
        } finally {
            appstate.update(state => ({...state, pending_sync: false}))
            this._update_pending_count()
        }
    },

    async _execute_offline_action(action) {
        if (!session_value?.family_id || !session_value?.join_code) return

        switch (action.type) {
            case 'create_child': {
                const result = await api.create_child(
                    session_value.family_id,
                    session_value.join_code,
                    action.name,
                )

                if (action.temp_id) this._temp_id_mapping.set(action.temp_id, result.id)

                return result
            }
            case 'adjust_score': {
                let child_id = action.child_id

                if (child_id?.startsWith('temp_')) {
                    const real_id = this._temp_id_mapping.get(child_id)
                    if (real_id) child_id = real_id
                    else return {skipped: true}
                }

                return await api.adjust_score(
                    session_value.family_id,
                    session_value.join_code,
                    child_id,
                    action.delta,
                    action.note,
                )
            }
            case 'update_child': {
                let child_id = action.child_id

                if (child_id?.startsWith('temp_')) {
                    const real_id = this._temp_id_mapping.get(child_id)
                    if (real_id) child_id = real_id
                    else return {skipped: true}
                }

                return await api.update_child(
                    session_value.family_id,
                    session_value.join_code,
                    child_id,
                    action.name,
                )
            }
            case 'delete_child': {
                let child_id = action.child_id

                if (child_id?.startsWith('temp_')) {
                    const real_id = this._temp_id_mapping.get(child_id)
                    if (real_id) child_id = real_id
                    else return {skipped: true}
                }

                return await api.delete_child(
                    session_value.family_id,
                    session_value.join_code,
                    child_id,
                )
            }
            case 'reset_all_scores':
                return await api.reset_all_scores(session_value.family_id, session_value.join_code)
            case 'update_family':
                return await api.update_family(
                    session_value.family_id,
                    session_value.join_code,
                    action.name,
                )
            default:
                throw new Error(`Unknown action type: ${action.type}`)
        }
    },

    async _update_pending_count() {
        const queue = await get_offline_queue()
        family_store.update(state => ({
            ...state,
            pending_offline_actions: queue.length,
        }))
    },

    start_polling() {
        if (this._is_polling) return
        this._is_polling = true
        this._backoff_ms = 0

        const on_visibility_or_focus = () => {
            if (!this._is_polling) return

            if (document.visibilityState === 'visible') this._schedule_next_poll(0)
            else if (this._poll_timeout_id) {
                clearTimeout(this._poll_timeout_id)
                this._poll_timeout_id = null
            }
        }
        const on_online = () => this._schedule_next_poll(0)

        this._listeners = {
            on_online,
            on_visibility_or_focus,
        }

        document.addEventListener('visibilitychange', on_visibility_or_focus)
        window.addEventListener('focus', on_visibility_or_focus)
        window.addEventListener('online', on_online)

        this._schedule_next_poll(0)
    },

    stop_polling() {
        this._is_polling = false
        if (this._poll_timeout_id) {
            clearTimeout(this._poll_timeout_id)
            this._poll_timeout_id = null
        }

        if (this._listeners) {
            document.removeEventListener('visibilitychange', this._listeners.on_visibility_or_focus)
            window.removeEventListener('focus', this._listeners.on_visibility_or_focus)
            window.removeEventListener('online', this._listeners.on_online)
            this._listeners = null
        }
    },

    _schedule_next_poll(delay_ms = null) {
        if (!this._is_polling || !is_online()) return
        if (this._poll_timeout_id) clearTimeout(this._poll_timeout_id)

        if (document.visibilityState !== 'visible') return

        const slow_factor = 1
        const base = this._base_interval * slow_factor
        const jitter = Math.floor(Math.random() * 400)
        const ms = delay_ms ?? Math.max(1000, base + jitter + this._backoff_ms)

        this._poll_timeout_id = setTimeout(() => this._poll_once(), ms)
    },

    async _poll_once() {
        if (!session_value?.family_id || !session_value?.join_code || !family_value?.is_loaded) {
            return this._schedule_next_poll()
        }
        if (!is_online()) return this._schedule_next_poll(10000)
        if (document.visibilityState !== 'visible') return
        if (this._inflight) return this._schedule_next_poll(1000)

        this._inflight = true
        try {
            await this.refresh_family_silent()
            this._backoff_ms = 0
        } catch (error) {
            const status = error?.status ?? error?.response?.status
            if (status === 403 || status === 404) {
                await clear_session()
                session.set({loaded: true, family_id: null, join_code: null, last_seen: null})
                this.stop_polling()
            } else this._backoff_ms = Math.min(this._max_backoff, (this._backoff_ms || 2000) * 2)
        } finally {
            this._inflight = false
            this._schedule_next_poll()
        }
    },

    async refresh_family_silent() {
        if (!session_value?.family_id || !session_value?.join_code) return

        const data = await api.get_family_details(session_value.family_id, session_value.join_code)

        family_store.update(state => ({
            ...state,
            family: data.family,
            children: data.children,
            recent_adjustments: data.recent_adjustments,
            is_loaded: true,
            error: null,
            is_offline_mode: false,
        }))

        await cache_family_data(data)
        session.update(s => ({...s, last_seen: new Date().toISOString()}))
    },

    async load_family() {
        if (!session_value?.family_id || !session_value?.join_code)
            throw new Error('No active session')

        family_store.update(state => ({...state, loading: true, error: null}))

        try {
            let data = null

            if (is_online()) {
                data = await api.get_family_details(
                    session_value.family_id,
                    session_value.join_code,
                )
                await cache_family_data(data)
            } else {
                data = await get_cached_family_data()
                if (!data) throw new Error('لا توجد بيانات محفوظة للاستخدام دون اتصال')
            }

            family_store.update(state => ({
                ...state,
                family: data.family,
                children: data.children,
                recent_adjustments: data.recent_adjustments,
                is_loaded: true,
                loading: false,
                error: null,
                is_offline_mode: !is_online(),
            }))

            await this._update_pending_count()

            if (is_online()) {
                this.start_polling()
                await this.sync_offline_actions()
            }
        } catch (error) {
            const status = error?.status ?? error?.response?.status
            if (status === 403 || status === 404) {
                await clear_session()
                session.set({loaded: true, family_id: null, join_code: null, last_seen: null})
            }

            family_store.update(state => ({
                ...state,
                loading: false,
                error: error?.message || 'فشل في تحميل البيانات',
                is_loaded: false,
            }))
            throw error
        }
    },

    async create_family(name) {
        if (!is_online()) throw new Error('يتطلب إنشاء عائلة جديدة الاتصال بالإنترنت')

        const family = await api.create_family(name)
        const session_data = {
            family_id: family.id,
            join_code: family.join_code,
            last_seen: new Date().toISOString(),
        }

        await set_session(session_data)
        session.set({...session_data, loaded: true})

        const family_data = {
            family,
            children: [],
            recent_adjustments: [],
        }

        await cache_family_data(family_data)

        family_store.set({
            ...family_data,
            is_loaded: true,
            error: null,
            loading: false,
            is_offline_mode: false,
            pending_offline_actions: 0,
        })

        this.start_polling()
        return family
    },

    async join_family(code) {
        if (!is_online()) throw new Error('يتطلب الانضمام لعائلة الاتصال بالإنترنت')

        const family_info = await api.get_family_by_code(code)
        const data = await api.get_family_details(family_info.id, code)

        const session_data = {
            family_id: family_info.id,
            join_code: code,
            last_seen: new Date().toISOString(),
        }

        await set_session(session_data)
        session.set({...session_data, loaded: true})

        await cache_family_data(data)

        family_store.set({
            family: data.family,
            children: data.children,
            recent_adjustments: data.recent_adjustments,
            is_loaded: true,
            error: null,
            loading: false,
            is_offline_mode: false,
            pending_offline_actions: 0,
        })

        this.start_polling()
        return data.family
    },

    async leave_family() {
        this.stop_polling()

        if (this._pending_batches) {
            for (const [, batch] of this._pending_batches)
                if (batch?.timeout_id) clearTimeout(batch.timeout_id)

            this._pending_batches.clear()
        }

        this._temp_id_mapping.clear()

        await clear_session()
        session.set({loaded: true, family_id: null, join_code: null, last_seen: null})
        family_store.set({
            family: null,
            children: [],
            recent_adjustments: [],
            is_loaded: false,
            error: null,
            loading: false,
            is_offline_mode: false,
            pending_offline_actions: 0,
        })
    },

    async create_child(name) {
        if (!session_value?.family_id || !session_value?.join_code) return

        if (is_online()) {
            const child = await api.create_child(
                session_value.family_id,
                session_value.join_code,
                name,
            )

            family_store.update(state => ({
                ...state,
                children: [...state.children, child],
                family: {
                    ...state.family,
                    stats: {
                        ...state.family.stats,
                        children_count: state.family.stats.children_count + 1,
                    },
                },
            }))

            return child
        } else {
            const temp_id = `temp_${Date.now()}`
            const temp_child = {
                id: temp_id,
                family_id: session_value.family_id,
                name: name.trim(),
                score: 0,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            }

            const action = {type: 'create_child', name, temp_id}
            await queue_offline_action(action)

            family_store.update(state => ({
                ...state,
                children: [...state.children, temp_child],
                is_offline_mode: true,
            }))

            await this._update_pending_count()
            return temp_child
        }
    },

    async adjust_score(child_id, delta, note = null) {
        if (!session_value?.family_id || !session_value?.join_code) return

        family_store.update(state => ({
            ...state,
            children: state.children.map(child =>
                child.id === child_id ? {...child, score: child.score + delta} : child,
            ),
        }))

        if (is_online()) this._batch_adjustment(child_id, delta, note)
        else {
            const action = {type: 'adjust_score', child_id, delta, note}
            await queue_offline_action(action)
            await this._update_pending_count()
        }
    },

    _batch_adjustment(child_id, delta, note) {
        if (!this._pending_batches) this._pending_batches = new Map()

        const existing_batch = this._pending_batches.get(child_id)
        if (existing_batch) {
            existing_batch.total_delta += delta
            clearTimeout(existing_batch.timeout_id)
        } else
            this._pending_batches.set(child_id, {
                total_delta: delta,
                note,
                timeout_id: null,
            })

        const batch = this._pending_batches.get(child_id)
        batch.timeout_id = setTimeout(() => {
            this._flush_batch(child_id)
        }, 500)
    },

    async _flush_batch(child_id) {
        if (!this._pending_batches?.has(child_id)) return

        const batch = this._pending_batches.get(child_id)
        this._pending_batches.delete(child_id)

        const flush_operation_id = `adjust_${child_id}_flush_${Date.now()}`
        ui_store.update(state => ({
            ...state,
            pending_operations: new Set([...state.pending_operations, flush_operation_id]),
        }))

        try {
            const result = await api.adjust_score(
                session_value.family_id,
                session_value.join_code,
                child_id,
                batch.total_delta,
                batch.note,
            )

            family_store.update(state => ({
                ...state,
                children: state.children.map(child =>
                    child.id === child_id ? result.child : child,
                ),
                recent_adjustments: [result.adjustment, ...state.recent_adjustments.slice(0, 49)],
                family: {
                    ...state.family,
                    stats: {
                        ...state.family.stats,
                        adjustments_count: state.family.stats.adjustments_count + 1,
                    },
                },
            }))

            ui_actions.set_last_action({
                type: 'adjust_score',
                data: {child_id, delta: batch.total_delta, note: batch.note},
            })
        } catch (error) {
            family_store.update(state => ({
                ...state,
                children: state.children.map(child =>
                    child.id === child_id
                        ? {...child, score: child.score - batch.total_delta}
                        : child,
                ),
            }))
            throw error
        } finally {
            ui_store.update(state => {
                const new_operations = new Set(state.pending_operations)
                new_operations.delete(flush_operation_id)
                return {...state, pending_operations: new_operations}
            })
        }
    },

    async delete_child(child_id) {
        if (!session_value?.family_id || !session_value?.join_code) return

        const child_to_delete = family_value.children.find(c => c.id === child_id)
        if (!child_to_delete) return

        if (is_online()) {
            family_store.update(state => ({
                ...state,
                children: state.children.filter(child => child.id !== child_id),
            }))

            try {
                await api.delete_child(session_value.family_id, session_value.join_code, child_id)

                family_store.update(state => ({
                    ...state,
                    family: {
                        ...state.family,
                        stats: {
                            ...state.family.stats,
                            children_count: state.family.stats.children_count - 1,
                        },
                    },
                }))
            } catch (error) {
                family_store.update(state => ({
                    ...state,
                    children: [...state.children, child_to_delete].sort((a, b) =>
                        a.name.localeCompare(b.name),
                    ),
                }))
                throw error
            }
        } else {
            const action = {type: 'delete_child', child_id}
            await queue_offline_action(action)

            family_store.update(state => ({
                ...state,
                children: state.children.filter(child => child.id !== child_id),
                is_offline_mode: true,
            }))

            await this._update_pending_count()
        }
    },

    async reset_all_scores() {
        if (!session_value?.family_id || !session_value?.join_code) return

        if (is_online()) {
            const original_children = [...family_value.children]

            family_store.update(state => ({
                ...state,
                children: state.children.map(child => ({...child, score: 0})),
            }))

            try {
                const result = await api.reset_all_scores(
                    session_value.family_id,
                    session_value.join_code,
                )

                family_store.update(state => ({
                    ...state,
                    children: result.children,
                    recent_adjustments: [
                        ...result.adjustments,
                        ...state.recent_adjustments.slice(0, 50 - result.adjustments.length),
                    ],
                    family: {
                        ...state.family,
                        stats: {
                            ...state.family.stats,
                            adjustments_count:
                                state.family.stats.adjustments_count + result.adjustments.length,
                        },
                    },
                }))

                return result
            } catch (error) {
                family_store.update(state => ({
                    ...state,
                    children: original_children,
                }))
                throw error
            }
        } else {
            const action = {type: 'reset_all_scores'}
            await queue_offline_action(action)

            family_store.update(state => ({
                ...state,
                children: state.children.map(child => ({...child, score: 0})),
                is_offline_mode: true,
            }))

            await this._update_pending_count()
        }
    },

    async update_child(child_id, name) {
        if (!session_value?.family_id || !session_value?.join_code) return

        if (is_online()) {
            const child = await api.update_child(
                session_value.family_id,
                session_value.join_code,
                child_id,
                name,
            )

            family_store.update(state => ({
                ...state,
                children: state.children.map(c => (c.id === child_id ? child : c)),
            }))

            return child
        } else {
            const action = {type: 'update_child', child_id, name}
            await queue_offline_action(action)

            family_store.update(state => ({
                ...state,
                children: state.children.map(child =>
                    child.id === child_id
                        ? {...child, name: name.trim(), updated_at: new Date().toISOString()}
                        : child,
                ),
                is_offline_mode: true,
            }))

            await this._update_pending_count()
            return family_value.children.find(c => c.id === child_id)
        }
    },

    async update_family(name) {
        if (!session_value?.family_id || !session_value?.join_code) return

        if (is_online()) {
            const family = await api.update_family(
                session_value.family_id,
                session_value.join_code,
                name,
            )

            family_store.update(state => ({
                ...state,
                family,
            }))

            return family
        } else {
            const action = {type: 'update_family', name}
            await queue_offline_action(action)

            family_store.update(state => ({
                ...state,
                family: {...state.family, name},
                is_offline_mode: true,
            }))

            await this._update_pending_count()
            return {...family_value.family, name}
        }
    },

    async reset_child_score(child_id) {
        if (!session_value?.family_id || !session_value?.join_code) return

        const child = family_value.children.find(c => c.id === child_id)
        const previous_score = child?.score || 0

        if (is_online()) {
            const result = await api.reset_child_score(
                session_value.family_id,
                session_value.join_code,
                child_id,
            )

            family_store.update(state => ({
                ...state,
                children: state.children.map(child =>
                    child.id === child_id ? result.child : child,
                ),
                recent_adjustments: result.adjustment
                    ? [result.adjustment, ...state.recent_adjustments.slice(0, 49)]
                    : state.recent_adjustments,
                family: {
                    ...state.family,
                    stats: {
                        ...state.family.stats,
                        adjustments_count: result.adjustment
                            ? state.family.stats.adjustments_count + 1
                            : state.family.stats.adjustments_count,
                    },
                },
            }))

            if (previous_score !== 0) {
                ui_actions.set_last_action({
                    type: 'reset_child',
                    data: {child_id, previous_score},
                })
            }

            return result
        } else {
            if (previous_score !== 0)
                await this.adjust_score(child_id, -previous_score, 'إعادة تعيين إلى 0')

            return {child: {...child, score: 0}, adjustment: null}
        }
    },
}

export const ui_actions = {
    show_confirm(title, message, on_confirm, on_cancel = null) {
        ui_store.update(state => ({
            ...state,
            confirm_dialog: {title, message, on_confirm, on_cancel},
        }))
    },

    hide_confirm() {
        ui_store.update(state => ({
            ...state,
            confirm_dialog: null,
        }))
    },

    set_active_modal(modal) {
        ui_store.update(state => ({
            ...state,
            active_modal: modal,
        }))
    },

    set_last_action(action) {
        ui_store.update(state => {
            if (state.undo_timeout) clearTimeout(state.undo_timeout)

            const timeout_id = setTimeout(() => {
                ui_store.update(s => ({
                    ...s,
                    last_action: null,
                    undo_timeout: null,
                }))
            }, 10000)

            return {
                ...state,
                last_action: action,
                undo_timeout: timeout_id,
            }
        })
    },

    async undo_last_action() {
        const last_action = ui_value?.last_action
        if (!last_action) return

        switch (last_action.type) {
            case 'adjust_score':
                await family_actions.adjust_score(
                    last_action.data.child_id,
                    -last_action.data.delta,
                    'تراجع: ' + (last_action.data.note || 'تعديل النقاط'),
                )
                break
            case 'reset_child':
                await family_actions.adjust_score(
                    last_action.data.child_id,
                    last_action.data.previous_score,
                    'تراجع: إعادة تعيين إلى 0',
                )
                break
        }

        ui_store.update(state => ({
            ...state,
            last_action: null,
            undo_timeout: state.undo_timeout ? (clearTimeout(state.undo_timeout), null) : null,
        }))
    },
}
;(async function init() {
    const appstate_idb = await kv.get('appstate')
    if (appstate_idb) appstate.set({...appstate_idb, is_online: navigator.onLine})

    const stored_session = await get_session()
    session.set({
        loaded: true,
        family_id: stored_session?.family_id || null,
        join_code: stored_session?.join_code || null,
        last_seen: stored_session?.last_seen || null,
    })

    if (stored_session?.family_id) await family_actions.load_family()

    appstate.subscribe(state =>
        document.documentElement.classList.toggle('dark', state.theme === 'dark'),
    )

    appstate.subscribe(debounce(data => kv.set('appstate', data), 200))
})()
