{#if $ui_store.active_modal === 'history'}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
            class="fixed inset-0 bg-black/50"
            onclick={close_modal}
            role="button"
            tabindex="-1"
            onkeydown={handle_keydown}
        ></div>

        <div
            class="relative flex max-h-[80vh] w-full max-w-2xl flex-col rounded-lg bg-card p-6 shadow-xl"
        >
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-card-foreground">سجل العائلة</h3>
                <p class="text-sm text-muted-foreground">اخر تعديلات النقاط لجميع الأطفال</p>
            </div>

            <div class="flex-1 space-y-3 overflow-y-auto">
                {#each $family_store.recent_adjustments as adjustment (adjustment.id)}
                    {@const child = $family_store.children.find(c => c.id === adjustment.child_id)}
                    {#if child}
                        <div class="flex items-center justify-between rounded-lg bg-muted p-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
                                    class:bg-green-100={adjustment.delta > 0}
                                    class:text-green-800={adjustment.delta > 0}
                                    class:bg-red-100={adjustment.delta < 0}
                                    class:text-red-800={adjustment.delta < 0}
                                >
                                    {adjustment.delta > 0 ? '+' : ''}{adjustment.delta}
                                </div>
                                <div>
                                    <div class="font-medium text-card-foreground">
                                        {child.name}
                                    </div>
                                    {#if adjustment.note}
                                        <div class="text-sm text-gray-600 dark:text-gray-300">
                                            {adjustment.note}
                                        </div>
                                    {/if}
                                    <div class="text-xs text-gray-500 dark:text-gray-400">
                                        {format_arabic_date(adjustment.created_at)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/if}
                {:else}
                    <div class="text-center py-8 text-gray-500 dark:text-gray-400">
                        لا يوجد سجل بعد
                    </div>
                {/each}
            </div>

            <div class="mt-6 flex justify-end border-t pt-4 dark:border-gray-700">
                <Button variant="outline" onclick={close_modal}>إغلاق</Button>
            </div>
        </div>
    </div>
{/if}

<script>
import {Button} from '~/lib/components/ui/button/index.js'
import {format_arabic_date} from '~/lib/utils.js'
import {family_store, ui_actions, ui_store} from '~/stores.svelte.js'

function close_modal() {
    ui_actions.set_active_modal(null)
}

function handle_keydown(e) {
    if (e.key === 'Escape') close_modal()
}
</script>
