{#if !is_online}
    <div
        class="fixed right-0 bottom-0 left-0 z-50 bg-yellow-500 p-2 text-center text-sm font-medium text-black"
    >
        ⚠️ أنت غير متصل بالإنترنت. التغييرات ستُحفظ وتُرسل عند العودة للاتصال
    </div>
{/if}

{#if show_sync_message}
    <div
        class="fixed right-0 bottom-0 left-0 z-50 bg-green-500 p-2 text-center text-sm font-medium text-white"
    >
        ✅ تم مزامنة التغييرات بنجاح
    </div>
{/if}

<script>
let is_online = $state(navigator.onLine)
let _pending_sync_count = $state(0)
let show_sync_message = $state(false)

function update_online_status() {
    is_online = navigator.onLine
}

function handle_service_worker_message(event) {
    if (event.data?.type === 'SYNC_SUCCESS') {
        show_sync_message = true
        setTimeout(() => (show_sync_message = false), 3000)
    }

    if (event.data?.type === 'SYNC_COMPLETE') _pending_sync_count = 0
}

$effect(() => {
    window.addEventListener('online', update_online_status)
    window.addEventListener('offline', update_online_status)

    if ('serviceWorker' in navigator)
        navigator.serviceWorker.addEventListener('message', handle_service_worker_message)

    return () => {
        window.removeEventListener('online', update_online_status)
        window.removeEventListener('offline', update_online_status)

        if ('serviceWorker' in navigator)
            navigator.serviceWorker.removeEventListener('message', handle_service_worker_message)
    }
})
</script>
