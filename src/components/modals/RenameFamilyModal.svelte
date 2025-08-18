<Modal
    open={$ui_store.active_modal === 'rename_family'}
    title="إعادة تسمية العائلة"
    on_close={close_modal}
>
    <NameForm
        bind:name={new_name}
        label="اسم العائلة"
        placeholder="أدخل اسم العائلة"
        field_id="new_family_name"
        max_length={60}
        validation_message="يجب أن يكون اسم العائلة بين 2-60 حرف"
        is_valid={is_valid_name}
        {is_unchanged}
        bind:loading
        bind:error
        submit_text="حفظ"
        loading_text="جاري الحفظ..."
        show_cancel={true}
        on_submit={handle_submit}
        on_cancel={close_modal}
    />
</Modal>

<script>
import {validate_family_name} from '~/lib/models.js'
import {family_actions, family_store, ui_actions, ui_store} from '~/stores.svelte.js'

import Modal from '../shared/Modal.svelte'
import NameForm from '../shared/NameForm.svelte'

let new_name = $state($family_store.family?.name || '')
let loading = $state(false)
let error = $state('')

let is_valid_name = $derived(validate_family_name(new_name))
let is_unchanged = $derived(new_name === $family_store.family?.name)

$effect(() => {
    if ($ui_store.active_modal === 'rename_family') {
        new_name = $family_store.family?.name || ''
        error = ''
        loading = false
    }
})

async function handle_submit(e) {
    e.preventDefault()

    if (!is_valid_name || is_unchanged) return

    loading = true
    error = ''

    await family_actions.update_family(new_name)
    ui_actions.set_active_modal(null)
    loading = false
}

function close_modal() {
    ui_actions.set_active_modal(null)
}
</script>
