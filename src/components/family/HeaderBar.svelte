<header class="glass sticky top-0 z-40 px-4 py-3 sm:py-4">
    <div class="container mx-auto flex items-center justify-between">
        <div class="flex min-w-0 flex-1 items-center gap-3">
            <h1 class="truncate text-lg font-bold text-card-foreground sm:text-xl lg:text-2xl">
                {$family_store.family?.name || 'العائلة'}
            </h1>
            <span class="text-xs whitespace-nowrap text-muted-foreground sm:text-sm">
                {$family_store.children?.length || 0} طفل
            </span>
        </div>

        <div class="flex flex-shrink-0 items-center gap-2 sm:gap-2">
            <Button
                size="sm"
                onclick={toggle_theme}
                class="h-8 w-8 p-2 sm:h-9 sm:w-9"
                variant="ghost"
            >
                {#if $appstate.theme === 'dark'}
                    <Sun class="h-3 w-3 sm:h-4 sm:w-4" />
                {:else}
                    <Moon class="h-3 w-3 sm:h-4 sm:w-4" />
                {/if}
            </Button>

            <Button
                size="sm"
                variant="outline"
                onclick={open_add_child_modal}
                class="hidden sm:flex"
            >
                <Plus class="ml-2 h-4 w-4" />
                إضافة طفل
            </Button>

            <Button
                size="sm"
                onclick={open_add_child_modal}
                class="h-8 w-8 p-2 text-black sm:hidden dark:text-white"
            >
                <Plus class="h-3 w-3" />
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger
                    class="h-8 w-8 rounded-md p-2 text-sm font-medium text-card-foreground hover:bg-muted focus:ring-2 focus:ring-ring focus:outline-none sm:h-9 sm:w-9"
                    aria-label="المزيد من الخيارات"
                >
                    <MoreHorizontal class="h-3 w-3 sm:h-4 sm:w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent portalProps={{}} align="end">
                    <DropdownMenuItem inset={false} onclick={open_history_modal}>
                        السجل
                        <History class="h-4 w-4" />
                    </DropdownMenuItem>
                    <DropdownMenuItem inset={false} onclick={copy_join_code}>
                        نسخ رابط الدعوة
                        <Copy class="h-4 w-4" />
                    </DropdownMenuItem>
                    <DropdownMenuItem inset={false} onclick={open_settings_modal}>
                        الإعدادات
                        <Settings class="h-4 w-4" />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        class="text-destructive focus:text-destructive"
                        inset={false}
                        onclick={handle_reset_all}
                    >
                        إعادة تعيين الكل
                        <RotateCcw class="h-4 w-4" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
</header>

<script>
import {Copy, History, Moon, MoreHorizontal, Plus, RotateCcw, Settings, Sun} from '@lucide/svelte'

import {Button} from '~/lib/components/ui/button/index.js'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '~/lib/components/ui/dropdown-menu/index.js'
import {appstate, family_actions, family_store, ui_actions} from '~/stores.svelte.js'

function handle_reset_all() {
    ui_actions.show_confirm(
        'إعادة تعيين جميع النقاط',
        'هل أنت متأكد من أنك تريد إعادة تعيين نقاط جميع الأطفال إلى الصفر؟ لا يمكن التراجع عن هذا الإجراء.',
        () => family_actions.reset_all_scores(),
    )
}

function open_history_modal() {
    ui_actions.set_active_modal('history')
}

function open_settings_modal() {
    ui_actions.set_active_modal('family_settings')
}

function open_add_child_modal() {
    ui_actions.set_active_modal('add_child')
}

function toggle_theme() {
    appstate.update(state => ({
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
    }))
}

async function copy_join_code() {
    if (!$family_store.family?.join_code) return
    const join_code = $family_store.family.join_code
    const link = new URL(`/join/${join_code}`, location.origin).toString()
    await navigator.clipboard.writeText(link)
}
</script>
