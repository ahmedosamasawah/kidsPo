{#if $ui_store.active_modal === `history_${child.id}`}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
            class="fixed inset-0 bg-black/50"
            onclick={close_modal}
            role="button"
            tabindex="-1"
            onkeydown={handle_keydown}
        ></div>

        <div class="relative w-full max-w-lg rounded-lg bg-card p-6 shadow-xl">
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-card-foreground">
                    {child.name} سجل
                </h3>
            </div>

            <div class="max-h-96 space-y-3 overflow-y-auto">
                {#each child_adjustments as adjustment (adjustment.id)}
                    <div class="flex items-center justify-between rounded-lg bg-muted p-3">
                        <div class="flex items-center space-x-3">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                                class:bg-green-100={adjustment.delta > 0}
                                class:text-green-800={adjustment.delta > 0}
                                class:bg-red-100={adjustment.delta < 0}
                                class:text-red-800={adjustment.delta < 0}
                            >
                                {adjustment.delta > 0 ? '+' : ''}{adjustment.delta}
                            </div>
                            <div>
                                {#if adjustment.note}
                                    <div class="text-sm font-medium text-card-foreground">
                                        {adjustment.note}
                                    </div>
                                {/if}
                                <div class="text-xs text-muted-foreground">
                                    {format_arabic_date(adjustment.created_at)}
                                </div>
                            </div>
                        </div>
                    </div>
                {:else}
                    <div class="text-center py-8 text-muted-foreground">لا يوجد سجل بعد</div>
                {/each}
            </div>

            <div class="mt-6 flex justify-end">
                <Button variant="outline" onclick={close_modal}>إغلاق</Button>
            </div>
        </div>
    </div>
{/if}

<script>
import {Button} from '~/lib/components/ui/button/index.js'
import {format_arabic_date} from '~/lib/utils.js'
import {family_store, ui_actions, ui_store} from '~/stores.svelte.js'

let {child} = $props()

let child_adjustments = $derived(
    $family_store.recent_adjustments.filter(adj => adj.child_id === child.id),
)

function close_modal() {
    ui_actions.set_active_modal(null)
}

function handle_keydown(e) {
    if (e.key === 'Escape') close_modal()
}
</script>
