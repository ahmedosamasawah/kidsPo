<CodeForm
    bind:code
    label="رمز الانضمام"
    placeholder="أدخل رمز الانضمام المكون من 6 أحرف"
    field_id="join-code"
    max_length={6}
    bind:loading
    bind:error
    submit_text="انضم للعائلة"
    loading_text="جاري الانضمام..."
    icon={Key}
    on_submit={handle_submit}
/>

<script>
import {Key} from '@lucide/svelte'
import {getContext} from 'svelte'

import {family_actions} from '~/stores.svelte.js'

import CodeForm from '../shared/CodeForm.svelte'

const router = getContext('router')

let code = $state('')
let loading = $state(false)
let error = $state('')

async function handle_submit(e) {
    e.preventDefault()

    if (!code.trim()) {
        error = 'يرجى إدخال رمز الانضمام'
        return
    }

    loading = true
    error = ''

    try {
        await family_actions.join_family(code.trim().toUpperCase())
        router.route('/family')
    } catch (err) {
        if (err?.status === 404) error = 'لم يتم العثور على العائلة. يرجى التحقق من رمز الانضمام.'
        else error = err?.message || 'حدث خطأ أثناء محاولة الانضمام'
    } finally {
        loading = false
    }
}
</script>
