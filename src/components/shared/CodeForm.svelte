<form onsubmit={handle_submit}>
    <div class="space-y-4">
        <div>
            <Label for={field_id}>{label}</Label>
            <Input
                id={field_id}
                bind:value={code}
                {placeholder}
                maxlength={max_length}
                required
                class="mt-1"
            />
        </div>

        <Button
            type="submit"
            variant="destructive"
            class="w-full text-white hover:text-black dark:text-white"
            disabled={loading || !code.trim()}
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
    code = $bindable(''),
    label,
    placeholder,
    field_id,
    max_length,
    loading = $bindable(false),
    error = $bindable(''),
    submit_text,
    loading_text,
    icon = undefined,
    on_submit,
} = $props()

async function handle_submit(e) {
    e.preventDefault()
    if (!code.trim()) return
    await on_submit?.(e)
}
</script>
