import * as kv from 'idb-keyval'

const SESSION_KEY = 'kids_points_session'

export async function get_session() {
    try {
        const session = await kv.get(SESSION_KEY)
        return session || null
    } catch (error) {
        console.error('Failed to get session:', error)
        return null
    }
}

export async function set_session(session) {
    try {
        if (session) {
            await kv.set(SESSION_KEY, {
                ...session,
                last_seen: new Date().toISOString(),
            })
        } else await kv.del(SESSION_KEY)
    } catch (error) {
        console.error('Failed to set session:', error)
    }
}

export async function clear_session() {
    try {
        await kv.del(SESSION_KEY)
    } catch (error) {
        console.error('Failed to clear session:', error)
    }
}

export function create_session(family_id, join_code) {
    return {
        family_id,
        join_code,
        last_seen: new Date().toISOString(),
    }
}
