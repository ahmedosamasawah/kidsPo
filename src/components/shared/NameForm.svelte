<form onsubmit={handle_submit}>
    <div class="space-y-4">
        <div>
            <Label for={field_id}>{label}</Label>
            <Input
                id={field_id}
                bind:value={name}
                {placeholder}
                maxlength={max_length}
                required
                class="mt-1"
            />
            {#if name && !is_valid}
                <p class="mt-1 text-xs text-red-600">
                    {validation_message}
                </p>
            {/if}
        </div>

        <div class="flex justify-end gap-3">
            {#if show_cancel}
                <Button type="button" variant="outline" onclick={on_cancel}>إلغاء</Button>
            {/if}
            <Button
                type="submit"
                variant="destructive"
                disabled={loading || !is_valid || is_unchanged}
                class={full_width ? 'w-full text-white hover:text-black dark:text-white' : ''}
            >
                {#if loading}
                    <Spinner size="small" />
                    {loading_text}
                {:else}
                    {#if icon}
                        {@const IconComponent = icon}
                        <IconComponent class="mr-2 h-4 w-4" />
                    {/if}
                    {submit_text}
                {/if}
            </Button>
        </div>

        {#if error}
            <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        {/if}
    </div>
</form>

<script>
import {Alert, AlertDescription} from '~/lib/components/ui/alert/index.js'
import {Button} from '~/lib/components/ui/button/index.js'
import {Input} from '~/lib/components/ui/input/index.js'
import {Label} from '~/lib/components/ui/label/index.js'

import Spinner from './Spinner.svelte'

let {
    name = $bindable(''),
    label,
    placeholder,
    field_id,
    max_length,
    validation_message,
    is_valid,
    is_unchanged = false,
    loading = $bindable(false),
    error = $bindable(''),
    submit_text,
    loading_text,
    show_cancel = false,
    full_width = false,
    icon = undefined,
    on_submit,
    on_cancel = undefined,
} = $props()

async function handle_submit(e) {
    e.preventDefault()
    if (!is_valid || is_unchanged) return
    await on_submit?.(e)
}
</script>
