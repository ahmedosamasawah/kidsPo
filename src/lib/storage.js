import * as kv from 'idb-keyval'

const SESSION_KEY = 'kids_points_session'
const OFFLINE_QUEUE_KEY = 'offline_queue'
const FAMILY_CACHE_KEY = 'family_cache'
const LAST_SYNC_KEY = 'last_sync'

export async function get_session() {
    try {
        const session = await kv.get(SESSION_KEY)
        return session || null
    } catch {
        return null
    }
}

export async function set_session(session) {
    if (session)
        await kv.set(SESSION_KEY, {
            ...session,
            last_seen: new Date().toISOString(),
        })
    else await kv.del(SESSION_KEY)
}

export async function clear_session() {
    await kv.del(SESSION_KEY)
}

export function create_session(family_id, join_code) {
    return {
        family_id,
        join_code,
        last_seen: new Date().toISOString(),
    }
}

export async function queue_offline_action(action) {
    try {
        const queue = (await kv.get(OFFLINE_QUEUE_KEY)) || []
        queue.push({
            ...action,
            id: Date.now() + Math.random(),
            timestamp: new Date().toISOString(),
            retries: 0,
        })
        await kv.set(OFFLINE_QUEUE_KEY, queue)
        return true
    } catch {
        return false
    }
}

export async function get_offline_queue() {
    try {
        return (await kv.get(OFFLINE_QUEUE_KEY)) || []
    } catch {
        return []
    }
}

export async function remove_from_offline_queue(action_id) {
    try {
        const queue = (await kv.get(OFFLINE_QUEUE_KEY)) || []
        const filtered = queue.filter(action => action.id !== action_id)
        await kv.set(OFFLINE_QUEUE_KEY, filtered)
        return true
    } catch {
        return false
    }
}

export async function clear_offline_queue() {
    try {
        await kv.del(OFFLINE_QUEUE_KEY)
        return true
    } catch {
        return false
    }
}

export async function cache_family_data(family_data) {
    try {
        const cache_entry = {
            ...family_data,
            cached_at: new Date().toISOString(),
        }
        await kv.set(FAMILY_CACHE_KEY, cache_entry)
        return true
    } catch {
        return false
    }
}

export async function get_cached_family_data() {
    try {
        const cached = await kv.get(FAMILY_CACHE_KEY)
        if (!cached) return null

        const cached_time = new Date(cached.cached_at)
        const now = new Date()
        const hours_diff = (now - cached_time) / (1000 * 60 * 60)

        if (hours_diff > 24) {
            await kv.del(FAMILY_CACHE_KEY)
            return null
        }

        return cached
    } catch {
        return null
    }
}

export async function set_last_sync(timestamp = new Date().toISOString()) {
    await kv.set(LAST_SYNC_KEY, timestamp)
}

export async function get_last_sync() {
    try {
        return await kv.get(LAST_SYNC_KEY)
    } catch {
        return null
    }
}

export function is_online() {
    return navigator.onLine
}

export function add_online_listener(callback) {
    window.addEventListener('online', callback)
    window.addEventListener('offline', callback)

    return () => {
        window.removeEventListener('online', callback)
        window.removeEventListener('offline', callback)
    }
}
