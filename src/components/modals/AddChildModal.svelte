<Modal
    open={$ui_store.active_modal === 'add_child'}
    title="إضافة طفل"
    description="إضافة طفل جديد إلى العائلة"
    on_close={close_modal}
>
    <NameForm
        bind:name={child_name}
        label="اسم الطفل"
        placeholder="أدخل اسم الطفل"
        field_id="child_name"
        max_length={40}
        validation_message="يجب أن يكون اسم الطفل بين 1-40 حرف"
        is_valid={is_valid_name}
        bind:loading
        bind:error
        submit_text="إضافة طفل"
        loading_text="جاري الإضافة..."
        show_cancel={true}
        on_submit={handle_submit}
        on_cancel={close_modal}
    />
</Modal>

<script>
import {validate_child_name} from '~/lib/models.js'
import {family_actions, ui_actions, ui_store} from '~/stores.svelte.js'

import Modal from '../shared/Modal.svelte'
import NameForm from '../shared/NameForm.svelte'

let error = $state('')
let loading = $state(false)
let child_name = $state('')

let is_valid_name = $derived(validate_child_name(child_name))

$effect(() => {
    if ($ui_store.active_modal === 'add_child') {
        child_name = ''
        error = ''
        loading = false
    }
})

async function handle_submit(e) {
    e.preventDefault()

    if (!is_valid_name) return

    loading = true
    error = ''

    await family_actions.create_child(child_name.trim())
    ui_actions.set_active_modal(null)
    loading = false
}

function close_modal() {
    ui_actions.set_active_modal(null)
}
</script>
