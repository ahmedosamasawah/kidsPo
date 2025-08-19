const API_BASE = '/api'

class ApiError extends Error {
    constructor(message, status, response) {
        super(message)
        this.name = 'ApiError'
        this.status = status
        this.response = response
    }
}

async function api_request(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`

    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        })

        const data = await response.json().catch(() => null)

        if (!response.ok) {
            throw new ApiError(
                data?.detail || `Request failed with status ${response.status}`,
                response.status,
                data,
            )
        }

        return data
    } catch (error) {
        if (error instanceof ApiError) throw error
        throw new ApiError('Network error', 0, null)
    }
}

function inject_code(url, code) {
    const separator = url.includes('?') ? '&' : '?'
    return `${url}${separator}code=${encodeURIComponent(code)}`
}

export const api = {
    async create_family(name) {
        return api_request('/families', {
            method: 'POST',
            body: JSON.stringify({name}),
        })
    },

    async get_family_by_code(code) {
        return api_request(`/families/by-code/${encodeURIComponent(code)}`)
    },

    async get_family_details(family_id, code) {
        const url = inject_code(`/families/${family_id}`, code)
        return api_request(url)
    },

    async update_family(family_id, code, name) {
        const url = inject_code(`/families/${family_id}`, code)
        return api_request(url, {
            method: 'PATCH',
            body: JSON.stringify({name}),
        })
    },

    async create_child(family_id, code, name) {
        const url = inject_code(`/families/${family_id}/children`, code)
        return api_request(url, {
            method: 'POST',
            body: JSON.stringify({name}),
        })
    },

    async update_child(family_id, code, child_id, name) {
        const url = inject_code(`/families/${family_id}/children/${child_id}`, code)
        return api_request(url, {
            method: 'PATCH',
            body: JSON.stringify({name}),
        })
    },

    async delete_child(family_id, code, child_id) {
        const url = inject_code(`/families/${family_id}/children/${child_id}`, code)
        return api_request(url, {
            method: 'DELETE',
        })
    },

    async adjust_score(family_id, code, child_id, delta, note = null) {
        const url = inject_code(`/families/${family_id}/children/${child_id}/adjust`, code)
        return api_request(url, {
            method: 'POST',
            body: JSON.stringify({delta, note}),
        })
    },

    async reset_child_score(family_id, code, child_id) {
        const url = inject_code(`/families/${family_id}/reset-one/${child_id}`, code)
        return api_request(url, {
            method: 'POST',
        })
    },

    async reset_all_scores(family_id, code) {
        const url = inject_code(`/families/${family_id}/reset-all`, code)
        return api_request(url, {
            method: 'POST',
        })
    },

    async get_family_history(family_id, code, limit = 50, cursor = null) {
        let url = inject_code(`/families/${family_id}/history`, code)
        url += `&limit=${limit}`
        if (cursor) url += `&cursor=${encodeURIComponent(cursor)}`
        return api_request(url)
    },
}

export {ApiError}
