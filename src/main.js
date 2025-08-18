import './css/base.css'
import './util/preinit.js'
import './css/tailwind.css'
import './stores.svelte.js'

import {mount} from 'svelte'

import App from './App.svelte'

mount(App, {target: document.body})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(registration => {
                registration.addEventListener('updatefound', () => {
                    const new_worker = registration.installing
                    new_worker.addEventListener('statechange', () => {
                        if (new_worker.state === 'installed' && navigator.serviceWorker.controller)
                            if (confirm('إصدار جديد متاح! إعادة تحميل للتحديث؟'))
                                window.location.reload()
                    })
                })

                window.addEventListener('online', () => {
                    navigator.serviceWorker.ready.then(registration => {
                        registration.active.postMessage({type: 'SYNC_OFFLINE_DATA'})
                    })
                })
            })
            .catch(error => {
                console.error('ServiceWorker registration failed:', error)
            })
    })
}

if (window.__DEBUG__ && location.hostname !== 'localhost') {
    onerror = (msg, url, ln, col, err) => {
        const loc = [(url || '').replace('https://', ''), ln || '', col || ''].join(':')
        alert([msg, loc, err ? err.stack : '<no stack>'])
    }
    onunhandledrejection = e => {
        if (
            !(e && e.reason && e.reason.stack) ||
            e.reason.stack.includes('TypeError: Failed to fetch')
        )
            return
        alert(e.reason.stack)
    }
}
