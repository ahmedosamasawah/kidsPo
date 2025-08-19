{#if $ui_store.offline_banner_visible || $family_store.is_offline_mode}
    <div class="fixed top-0 right-0 left-0 z-50 bg-orange-500 p-2 text-center text-sm text-white">
        <div class="flex items-center justify-center gap-2">
            <WifiOff class="h-4 w-4" />
            <span>
                {#if $appstate.pending_sync}
                    جاري المزامنة...
                {:else if $family_store.pending_offline_actions > 0}
                    {$family_store.pending_offline_actions} عمليات في انتظار المزامنة
                {:else}
                    وضع عدم الاتصال - سيتم حفظ التغييرات عند الاتصال
                {/if}
            </span>
            {#if $appstate.pending_sync}
                <div
                    class="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                ></div>
            {/if}
        </div>
    </div>
{/if}

<script>
import {WifiOff} from '@lucide/svelte'

import {appstate, family_store, ui_store} from '~/stores.svelte.js'
</script>
