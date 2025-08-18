<div class="space-y-2">
    {#each sorted_children as child, index (child.id)}
        <div
            class="{get_card_style(
                index + 1,
            )} animate-slide-in flex items-center gap-4 rounded-xl p-4 animate-slide-in-{(index %
                5) +
                1}"
            animate:flip={{duration: 400}}
        >
            <div
                class="glass flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-card-foreground"
            >
                {get_rank_display(index + 1)}
            </div>

            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between">
                    <h3 class="truncate text-lg font-semibold text-card-foreground">
                        {child.name}
                    </h3>
                    <div class="text-2xl font-bold text-primary">
                        {child.score}
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <button
                    use:repeat_click={() => handle_adjust(child.id, -1)}
                    disabled={is_pending(child.id)}
                    class="glass inline-flex h-8 w-8 items-center justify-center rounded-md text-card-foreground transition-all hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
                >
                    <Minus class="h-4 w-4" />
                </button>

                <button
                    use:repeat_click={() => handle_adjust(child.id, 1)}
                    disabled={is_pending(child.id)}
                    class="gradient-primary inline-flex h-8 w-8 items-center justify-center rounded-md text-primary-foreground transition-all hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
                >
                    <Plus class="h-4 w-4" />
                </button>

                <DropdownMenu>
                    <DropdownMenuTrigger
                        class="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                        aria-label="Edit {child.name}"
                    >
                        <MoreVertical class="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent portalProps={{}}>
                        <DropdownMenuItem
                            inset={false}
                            onclick={() => open_custom_score_modal(child.id)}
                        >
                            إضافة نقاط مخصصة
                            <Calculator class="h-4 w-4" />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem inset={false} onclick={() => open_rename_modal(child.id)}>
                            إعادة تسمية الطفل
                            <Edit class="h-4 w-4" />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            inset={false}
                            onclick={() => open_history_modal(child.id)}
                        >
                            عرض السجل
                            <History class="h-4 w-4" />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            class="text-destructive focus:text-destructive"
                            inset={false}
                            onclick={() => handle_delete(child)}
                        >
                            حذف الطفل
                            <Trash2 class="h-4 w-4" />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <!-- {#if is_pending(child.id)}
                <div class="absolute inset-0 flex items-center justify-center bg-background/50">
                    <div
                        class="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"
                    ></div>
                </div>
            {/if} -->
        </div>
    {/each}
</div>

<script>
import {Calculator, Edit, History, Minus, MoreVertical, Plus, Trash2} from '@lucide/svelte'
import {flip} from 'svelte/animate'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '~/lib/components/ui/dropdown-menu/index.js'
import {repeat_click} from '~/lib/repeat_click.js'
import {family_actions, family_store, ui_actions, ui_store} from '~/stores.svelte.js'

let adjusting_children = $state(new Set())
let stable_order = []

let sorted_children = $derived.by(() => {
    const children = [...$family_store.children]

    if (adjusting_children.size === 0) {
        const sorted = children.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score

            return a.name.localeCompare(b.name)
        })
        stable_order = sorted.map(child => child.id)
        return sorted
    }

    return stable_order.map(id => children.find(child => child.id === id)).filter(Boolean)
})

function get_rank_display(rank) {
    return rank
}

function get_card_style(rank) {
    switch (rank) {
        case 1:
            return 'glass-card-first transition-all duration-300'
        case 2:
            return 'glass-card-second transition-all duration-300'
        case 3:
            return 'glass-card-third transition-all duration-300'
        default:
            return 'glass-card transition-all duration-300'
    }
}

function is_pending(child_id) {
    return [...$ui_store.pending_operations].some(
        op => op.startsWith(`adjust_${child_id}_`) && op.includes('_flush'),
    )
}

async function handle_adjust(child_id, delta) {
    adjusting_children.add(child_id)
    adjusting_children = new Set(adjusting_children)

    await family_actions.adjust_score(child_id, delta)

    setTimeout(() => {
        if (!is_pending(child_id)) {
            adjusting_children.delete(child_id)
            adjusting_children = new Set(adjusting_children)
        }
    }, 1000)
}

function handle_delete(child) {
    ui_actions.show_confirm(
        `حذف ${child.name}`,
        `هل أنت متأكد من أنك تريد حذف ${child.name}؟ هذا الإجراء لا يمكن التراجع عنه وسيحذف جميع النقاط والسجلات الخاصة به.`,
        async () => {
            await family_actions.delete_child(child.id)
        },
    )
}

function open_rename_modal(child_id) {
    ui_actions.set_active_modal(`rename_child_${child_id}`)
}

function open_history_modal(child_id) {
    ui_actions.set_active_modal(`history_${child_id}`)
}

function open_custom_score_modal(child_id) {
    ui_actions.set_active_modal(`custom_score_${child_id}`)
}
</script>
