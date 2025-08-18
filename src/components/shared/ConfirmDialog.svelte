<AlertDialog open={!!$ui_store.confirm_dialog}>
    <AlertDialogContent class="" portalProps={{}}>
        <AlertDialogHeader class="">
            <AlertDialogTitle class="text-black dark:text-white">
                {$ui_store.confirm_dialog?.title}
            </AlertDialogTitle>
            <AlertDialogDescription class="">
                {$ui_store.confirm_dialog?.message}
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter class="">
            <AlertDialogCancel
                class="text-black dark:text-white"
                variant="default"
                onclick={() => {
                    $ui_store.confirm_dialog?.on_cancel?.()
                    ui_actions.hide_confirm()
                }}
            >
                إلغاء
            </AlertDialogCancel>
            <AlertDialogAction
                variant="destructive"
                class="hover:text-black dark:hover:text-white"
                onclick={() => {
                    $ui_store.confirm_dialog?.on_confirm?.()
                    ui_actions.hide_confirm()
                }}
            >
                تأكيد
            </AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
</AlertDialog>

<script>
import {ui_actions, ui_store} from '~/stores.svelte.js'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '$lib/components/ui/alert-dialog/index.js'
</script>
