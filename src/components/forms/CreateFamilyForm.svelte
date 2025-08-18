<NameForm
    bind:name
    label="اسم العائلة"
    placeholder="أدخل اسم عائلتك"
    field_id="family-name"
    max_length={60}
    validation_message="يجب أن يكون اسم العائلة بين 2-60 حرف"
    is_valid={is_valid_name}
    bind:loading
    bind:error
    submit_text="إنشاء العائلة"
    loading_text="جاري الإنشاء..."
    full_width={true}
    icon={Users}
    on_submit={handle_submit}
/>

<script>
import {Users} from '@lucide/svelte'
import {getContext} from 'svelte'

import {validate_family_name} from '~/lib/models.js'
import {family_actions} from '~/stores.svelte.js'

import NameForm from '../shared/NameForm.svelte'

const router = getContext('router')

let name = $state('')
let loading = $state(false)
let error = $state('')

let is_valid_name = $derived(validate_family_name(name))

async function handle_submit(e) {
    e.preventDefault()

    if (!is_valid_name) return

    loading = true
    error = ''

    await family_actions.create_family(name.trim())
    router.route('/family')
    loading = false
}
</script>
