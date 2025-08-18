{#if $ui_store.active_modal === 'family_settings'}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
            class="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onclick={close_modal}
            role="button"
            tabindex="-1"
            onkeydown={handle_keydown}
        ></div>

        <div
            class="relative w-full max-w-md rounded-lg border-2 border-border bg-card p-6 shadow-2xl"
        >
            <div class="mb-6">
                <h3 class="text-lg font-semibold text-card-foreground">الإعدادات</h3>
            </div>

            <div class="space-y-4">
                <div class="rounded-lg bg-muted p-4">
                    <div class="mb-2">
                        <Label>رمز الانضمام</Label>
                        <div class="mt-1 flex items-center gap-2">
                            <Input
                                readonly
                                value={formatted_code}
                                class="bg-background text-center font-mono"
                            />
                            <div class="flex items-center gap-2">
                                <Button variant="outline" size="sm" onclick={copy_join_link}>
                                    {#if copied}
                                        <Check class="h-4 w-4" />
                                    {:else}
                                        <Copy class="h-4 w-4" />
                                    {/if}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs text-muted-foreground">
                        شارك رابط الدعوة مع أفراد العائلة لينضموا مباشرة
                    </p>
                </div>

                <div class="space-y-2">
                    <Button
                        variant="outline"
                        class="w-full justify-start text-black dark:text-white"
                        onclick={open_rename_modal}
                    >
                        <Edit class="ml-2 h-4 w-4" />
                        إعادة تسمية العائلة
                    </Button>

                    <Button
                        variant="destructive"
                        class="w-full justify-start"
                        onclick={handle_leave_family}
                    >
                        <LogOut class="ml-2 h-4 w-4" />
                        مغادرة العائلة
                    </Button>
                </div>

                <div class="flex justify-end">
                    <Button
                        variant="outline"
                        class="text-black dark:text-white"
                        onclick={close_modal}
                    >
                        إغلاق
                    </Button>
                </div>
            </div>
        </div>
    </div>
{/if}

<RenameFamilyModal />

<script>
import {Check, Copy, Edit, LogOut} from '@lucide/svelte'
import {getContext} from 'svelte'

import {Button} from '~/lib/components/ui/button/index.js'
import {Input} from '~/lib/components/ui/input/index.js'
import {Label} from '~/lib/components/ui/label/index.js'
import {format_join_code_display} from '~/lib/models.js'
import {family_actions, family_store, ui_actions, ui_store} from '~/stores.svelte.js'

import RenameFamilyModal from './RenameFamilyModal.svelte'

const router = getContext('router')

let formatted_code = $derived(
    $family_store.family ? format_join_code_display($family_store.family.join_code) : '',
)

let copied = $state(false)

async function copy_join_link() {
    if (!$family_store.family?.join_code) return
    const join_code = $family_store.family.join_code
    const link = new URL(`/join/${join_code}`, location.origin).toString()
    try {
        await navigator.clipboard.writeText(link)
        copied = true
        setTimeout(() => (copied = false), 1200)
    } catch {
        copied = false
    }
}

function handle_leave_family() {
    ui_actions.set_active_modal(null)
    ui_actions.show_confirm(
        'مغادرة العائلة',
        'هل أنت متأكد من أنك تريد مغادرة هذه العائلة؟ ستحتاج إلى رمز الانضمام للانضمام مرة أخرى.',
        async () => {
            await family_actions.leave_family()
            router.route('/')
        },
    )
}

function close_modal() {
    ui_actions.set_active_modal(null)
}

function open_rename_modal() {
    ui_actions.set_active_modal(null)
    ui_actions.set_active_modal('rename_family')
}

function handle_keydown(e) {
    if (e.key === 'Escape') close_modal()
}
</script>
