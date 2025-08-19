const CACHE_NAME = 'kids-points-v1'
const STATIC_CACHE = 'static-v1'
const RUNTIME_CACHE = 'runtime-v1'

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/src/main.js',
    '/src/css/tailwind.css',
    '/src/css/base.css',
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    )
})

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cache_names =>  Promise.all(
                    cache_names
                        .filter(cache_name =>
                            cache_name !== STATIC_CACHE &&
                            cache_name !== RUNTIME_CACHE
                        )
                        .map(cache_name => caches.delete(cache_name))
                )
            )
            .then(() => self.clients.claim())
    )
})

self.addEventListener('fetch', event => {
    const { request } = event
    const url = new URL(request.url)

    if (url.protocol === 'chrome-extension:') return

    if (url.pathname.startsWith('/api/')) {
        event.respondWith(handle_api_request(request))
        return
    }

    if (request.method === 'GET') {
        event.respondWith(handle_static_request(request))
        return
    }
})

async function handle_api_request(request) {
    const cache = await caches.open(RUNTIME_CACHE)

    try {
        const network_response = await fetch(request)

        if (request.method === 'GET' && network_response.ok) {
            const response_clone = network_response.clone()
            await cache.put(request, response_clone)
        }

        return network_response
    } catch (error) {
        if (request.method === 'GET') {
            const cached_response = await cache.match(request)
            if (cached_response) return cached_response
        }

        if (request.method !== 'GET') {
            return new Response(
                JSON.stringify({
                    queued: true,
                    message: 'تم حفظ الطلب. سيتم تنفيذه عند الاتصال بالإنترنت.'
                }),
                {
                    status: 202,
                    headers: { 'Content-Type': 'application/json' }
                }
            )
        }

        throw error
    }
}

async function handle_static_request(request) {
    const cache = await caches.open(STATIC_CACHE)
    const cached_response = await cache.match(request)

    if (cached_response) {
        fetch_and_cache(request, cache)
        return cached_response
    }

    try {
        const network_response = await fetch(request)
        if (network_response.ok) {
            const response_clone = network_response.clone()
            await cache.put(request, response_clone)
        }
        return network_response
    } catch (error) {
        if (request.mode === 'navigate') {
            const fallback = await cache.match('/')
            if (fallback) return fallback
        }
        throw error
    }
}

async function fetch_and_cache(request, cache) {
    const network_response = await fetch(request)
    if (network_response.ok) await cache.put(request, network_response.clone())

}

self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') event.waitUntil(syncQueuedRequests())
})

async function syncQueuedRequests() {
    const db = await openDB()
    const tx = db.transaction(['offline_queue'], 'readwrite')
    const store = tx.objectStore('offline_queue')
    const requests = await store.getAll()

    if (!requests || !Array.isArray(requests)) return
    for (const request_data of requests) {
        const response = await fetch(request_data.url, {
            method: request_data.method,
            headers: request_data.headers,
            body: request_data.body
        })

        if (response.ok) await store.delete(request_data.id)
    }
}

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('kids-points-sw', 1)

        request.onerror = () => reject(request.error)
        request.onsuccess = () => resolve(request.result)

        request.onupgradeneeded = event => {
            const db = event.target.result
            if (!db.objectStoreNames.contains('offline_queue')) {
                const store = db.createObjectStore('offline_queue', {
                    keyPath: 'id',
                    autoIncrement: true
                })
                store.createIndex('timestamp', 'timestamp')
            }
        }
    })
}

self.addEventListener('push', event => {
    if (event.data) {
        const data = event.data.json()
        const options = {
            body: data.body,
            icon: '/icon-192.png',
            badge: '/icon-72.png',
            data: data.data || {}
        }

        event.waitUntil(
            self.registration.showNotification(data.title, options)
        )
    }
})

self.addEventListener('notificationclick', event => {
    event.notification.close()

    event.waitUntil(
        clients.openWindow(event.notification.data.url || '/')
    )
})
