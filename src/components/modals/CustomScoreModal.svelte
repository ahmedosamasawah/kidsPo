{#if child && $ui_store.active_modal === `custom_score_${child.id}`}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
            class="fixed inset-0 bg-black/50 backdrop-blur-lg"
            onclick={close_modal}
            role="button"
            tabindex="-1"
            onkeydown={handle_keydown}
        ></div>

        <div
            class="relative w-full max-w-sm rounded-lg border-2 border-border bg-background p-6 shadow-2xl"
        >
            <div class="mb-6 text-center">
                <h3 class="text-lg font-semibold text-card-foreground">إضافة نقاط مخصصة</h3>
                <p class="mt-1 text-sm text-muted-foreground">
                    {child.name}
                </p>
            </div>

            <div>
                <NumberInput
                    bind:value={custom_value}
                    placeholder="عدد النقاط"
                    min={-99}
                    max={99}
                    default_value={0}
                    class="w-full text-center text-lg"
                />

                <div class="mt-4 flex gap-3">
                    <Button
                        variant="default"
                        onclick={close_modal}
                        class="flex-1 text-black dark:text-white"
                    >
                        إلغاء
                    </Button>
                    <Button
                        onclick={handle_apply}
                        disabled={!custom_value || is_pending}
                        class="flex-1"
                        variant="destructive"
                    >
                        تطبيق
                    </Button>
                </div>
            </div>
        </div>
    </div>
{/if}

<script>
import NumberInput from 'components/src/NumberInput.svelte'

import {Button} from '~/lib/components/ui/button/index.js'
import {validate_score_delta} from '~/lib/models.js'
import {family_actions, ui_actions, ui_store} from '~/stores.svelte.js'

let {child = null} = $props()

let custom_value = $state(0)
let is_pending = $state(false)

function close_modal() {
    ui_actions.set_active_modal(null)
    custom_value = 0
}

async function handle_apply() {
    const delta = custom_value
    if (!validate_score_delta(delta)) {
        return
    }

    is_pending = true
    await family_actions.adjust_score(child.id, delta)
    close_modal()
    is_pending = false
}

function handle_keydown(e) {
    if (e.key === 'Escape') close_modal()
    if (e.key === 'Enter') handle_apply()
}
</script>
