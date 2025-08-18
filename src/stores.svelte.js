import {debounce} from 'components/src/util.js'
import * as kv from 'idb-keyval'
import {writable} from 'svelte/store'

import {api} from './lib/api.js'
import {clear_session, get_session, set_session} from './lib/storage.js'

export const appstate = writable({
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
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
})

export const ui_store = writable({
    confirm_dialog: null,
    active_modal: null,
    child_sort: 'name',
    show_history: false,
    pending_operations: new Set(),
    last_action: null,
    undo_timeout: null,
})

let session_value = null
let family_value = null
let ui_value = null

session.subscribe(value => (session_value = value))
family_store.subscribe(value => (family_value = value))
ui_store.subscribe(value => (ui_value = value))

export const family_actions = {
    _backoff_ms: 0,
    _inflight: false,
    _listeners: null,
    _is_polling: false,
    _base_interval: 5000,
    _max_backoff: 120000,
    _poll_timeout_id: null,
    _pending_batches: null,

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
        if (!this._is_polling) return
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
        if (!navigator.onLine) return this._schedule_next_poll(10000)
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
        }))

        session.update(s => ({...s, last_seen: new Date().toISOString()}))
    },

    async load_family() {
        if (!session_value?.family_id || !session_value?.join_code) {
            throw new Error('No active session')
        }

        family_store.update(state => ({...state, loading: true, error: null}))

        try {
            const data = await api.get_family_details(
                session_value.family_id,
                session_value.join_code,
            )

            family_store.update(state => ({
                ...state,
                family: data.family,
                children: data.children,
                recent_adjustments: data.recent_adjustments,
                is_loaded: true,
                loading: false,
                error: null,
            }))

            this.start_polling()
        } catch (error) {
            const status = error?.status ?? error?.response?.status
            if (status === 403 || status === 404) {
                await clear_session()
                session.set({loaded: true, family_id: null, join_code: null, last_seen: null})
            }

            family_store.update(state => ({
                ...state,
                loading: false,
                error: error?.message || 'Failed to load',
                is_loaded: false,
            }))
            throw error
        }
    },

    async create_family(name) {
        const family = await api.create_family(name)
        const session_data = {
            family_id: family.id,
            join_code: family.join_code,
            last_seen: new Date().toISOString(),
        }

        await set_session(session_data)
        session.set({...session_data, loaded: true})

        family_store.set({
            family,
            children: [],
            recent_adjustments: [],
            is_loaded: true,
            error: null,
            loading: false,
        })

        this.start_polling()
        return family
    },

    async join_family(code) {
        const family_info = await api.get_family_by_code(code)
        const data = await api.get_family_details(family_info.id, code)

        const session_data = {
            family_id: family_info.id,
            join_code: code,
            last_seen: new Date().toISOString(),
        }

        await set_session(session_data)
        session.set({...session_data, loaded: true})

        family_store.set({
            family: data.family,
            children: data.children,
            recent_adjustments: data.recent_adjustments,
            is_loaded: true,
            error: null,
            loading: false,
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

        await clear_session()
        session.set({loaded: true, family_id: null, join_code: null, last_seen: null})
        family_store.set({
            family: null,
            children: [],
            recent_adjustments: [],
            is_loaded: false,
            error: null,
            loading: false,
        })
    },

    async create_child(name) {
        if (!session_value?.family_id || !session_value?.join_code) return

        const child = await api.create_child(session_value.family_id, session_value.join_code, name)

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
    },

    async adjust_score(child_id, delta, note = null) {
        if (!session_value?.family_id || !session_value?.join_code) return

        family_store.update(state => ({
            ...state,
            children: state.children.map(child =>
                child.id === child_id ? {...child, score: child.score + delta} : child,
            ),
        }))

        this._batch_adjustment(child_id, delta, note)
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

            if (result.offline && result.queued) return

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
            if (error.response?.offline) return

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
    },

    async reset_all_scores() {
        if (!session_value?.family_id || !session_value?.join_code) return

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
    },

    async update_child(child_id, name) {
        if (!session_value?.family_id || !session_value?.join_code) return

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
    },

    async update_family(name) {
        if (!session_value?.family_id || !session_value?.join_code) return

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
    },

    async reset_child_score(child_id) {
        if (!session_value?.family_id || !session_value?.join_code) return

        const child = family_value.children.find(c => c.id === child_id)
        const previous_score = child?.score || 0

        const result = await api.reset_child_score(
            session_value.family_id,
            session_value.join_code,
            child_id,
        )

        family_store.update(state => ({
            ...state,
            children: state.children.map(child => (child.id === child_id ? result.child : child)),
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

            const timeout = setTimeout(() => {
                ui_store.update(s => ({
                    ...s,
                    last_action: null,
                    undo_timeout: null,
                }))
            }, 10000)

            return {
                ...state,
                last_action: action,
                undo_timeout: timeout,
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
    if (appstate_idb) appstate.set(appstate_idb)

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
