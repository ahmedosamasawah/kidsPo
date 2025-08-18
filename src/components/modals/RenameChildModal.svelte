<Modal
    open={$ui_store.active_modal === `rename_child_${child.id}`}
    title="إعادة تسمية الطفل"
    on_close={close_modal}
>
    <NameForm
        bind:name={new_name}
        label="اسم الطفل"
        placeholder="أدخل اسم الطفل"
        field_id="new_name"
        max_length={40}
        validation_message="يجب أن يكون اسم الطفل بين 1-40 حرف"
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
import {validate_child_name} from '~/lib/models.js'
import {family_actions, ui_actions, ui_store} from '~/stores.svelte.js'

import Modal from '../shared/Modal.svelte'
import NameForm from '../shared/NameForm.svelte'

let {child} = $props()

let new_name = $state(child.name)
let loading = $state(false)
let error = $state('')

let is_valid_name = $derived(validate_child_name(new_name))
let is_unchanged = $derived(new_name === child.name)

$effect(() => {
    if ($ui_store.active_modal === `rename_child_${child.id}`) {
        new_name = child.name
        error = ''
        loading = false
    }
})

async function handle_submit(e) {
    e.preventDefault()

    if (!is_valid_name || is_unchanged) return

    loading = true
    error = ''

    await family_actions.update_child(child.id, new_name)
    ui_actions.set_active_modal(null)
    loading = false
}

function close_modal() {
    ui_actions.set_active_modal(null)
}
</script>
