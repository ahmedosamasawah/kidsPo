const CACHE_VERSION = 'v1'
const STATIC_CACHE = `kids-points-static-${CACHE_VERSION}`
const API_CACHE = `kids-points-api-${CACHE_VERSION}`
const OFFLINE_QUEUE_KEY = 'kids-points-offline-queue'

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/nuqayah.png'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    )
})

self.addEventListener('activate', event => {
    const current_caches = [STATIC_CACHE, API_CACHE]
    event.waitUntil(
        caches.keys()
            .then(cache_names =>
                 cache_names.filter(cache_name => !current_caches.includes(cache_name))
            )
            .then(caches_to_delete =>
                 Promise.all(caches_to_delete.map(cache_to_delete =>
                     caches.delete(cache_to_delete)
                ))
            )
            .then(() => self.clients.claim())
    )
})

function is_api_request(request) {
    return request.url.includes('/api/')
}

function is_mutation(request) {
    return ['POST', 'PATCH', 'DELETE'].includes(request.method)
}

async function get_offline_queue() {
        const cache = await caches.open(API_CACHE)
        const response = await cache.match(OFFLINE_QUEUE_KEY)

        if (response) {
            const data = await response.json()
            return data.queue || []
        }

    return []
}

async function save_offline_queue(queue) {
        const cache = await caches.open(API_CACHE)
        const response = new Response(JSON.stringify({ queue, updated: Date.now() }), {
            headers: { 'Content-Type': 'application/json' }
        })
        await cache.put(OFFLINE_QUEUE_KEY, response)

}

async function add_to_offline_queue(request_data) {
    const queue = await get_offline_queue()
    queue.push({
        ...request_data,
        id: Date.now() + Math.random(),
        timestamp: Date.now()
    })
    await save_offline_queue(queue)
}

async function process_offline_queue() {
    if (!navigator.onLine) return

    const queue = await get_offline_queue()
    if (queue.length === 0) return

    const successful_requests = []

    for (const item of queue) {
        try {
            const request = new Request(item.url, {
                method: item.method,
                headers: item.headers,
                body: item.body
            })

            const response = await fetch(request)
            if (response.ok) {
                successful_requests.push(item.id)

                self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'SYNC_SUCCESS',
                            data: { request_id: item.id, url: item.url }
                        })
                    })
                })
            }
        } catch (error) {
            console.error('Failed to sync request:', error)
            break
        }
    }

    if (successful_requests.length > 0) {
        const remaining_queue = queue.filter(item => !successful_requests.includes(item.id))
        await save_offline_queue(remaining_queue)

        if (remaining_queue.length === 0) {
            self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({ type: 'SYNC_COMPLETE' })
                })
            })
        }
    }
}

self.addEventListener('online', event => {
    event.waitUntil(process_offline_queue())
})

self.addEventListener('fetch', event => {
    const request = event.request

    if (is_api_request(request)) {
        if (is_mutation(request)) {
            event.respondWith(
                fetch(request.clone())
                    .catch(async error => {
                        if (!navigator.onLine) {
                            const request_data = {
                                url: request.url,
                                method: request.method,
                                headers: Object.fromEntries(request.headers.entries()),
                                body: await request.clone().text()
                            }

                            await add_to_offline_queue(request_data)

                            return new Response(JSON.stringify({
                                offline: true,
                                queued: true,
                                message: 'تم حفظ العملية للمزامنة لاحقاً'
                            }), {
                                status: 200,
                                headers: { 'Content-Type': 'application/json' }
                            })
                        }

                        throw error
                    })
            )
        } else {
            event.respondWith(
                fetch(request)
                    .then(response => {
                        if (response.ok) {
                            const response_to_cache = response.clone()
                            caches.open(API_CACHE).then(cache => {
                                cache.put(request, response_to_cache)
                            })
                        }
                        return response
                    })
                    .catch(() => {
                        return caches.match(request).then(cached_response => {
                            if (cached_response) {
                                return cached_response
                            }

                            return new Response(JSON.stringify({
                                offline: true,
                                message: 'أنت غير متصل. هذه البيانات غير متاحة.'
                            }), {
                                status: 503,
                                headers: { 'Content-Type': 'application/json' }
                            })
                        })
                    })
            )
        }
    } else {
        event.respondWith(
            caches.match(request)
                .then(cached_response => {
                    if (cached_response) {
                        return cached_response
                    }

                    return fetch(request).then(response => {
                        if (response.ok && !request.url.includes('chrome-extension://')) {
                            const response_to_cache = response.clone()
                            caches.open(STATIC_CACHE).then(cache => {
                                cache.put(request, response_to_cache)
                            })
                        }
                        return response
                    })
                })
                .catch(() => {
                    if (request.mode === 'navigate')
                        return caches.match('/')

                    return new Response('غير متاح', { status: 503 })
                })
        )
    }
})

self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SYNC_OFFLINE_DATA')
        event.waitUntil(process_offline_queue())
})
