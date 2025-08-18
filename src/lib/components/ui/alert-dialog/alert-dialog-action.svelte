<AlertDialogPrimitive.Action
    bind:ref
    data-slot="alert-dialog-action"
    class={cn(button_variants({variant: variant}), className)}
    {...restProps}
/>

<script>
import {AlertDialog as AlertDialogPrimitive} from 'bits-ui'

import {button_variants} from '$lib/components/ui/button/index.js'
import {cn} from '$lib/utils.js'

let {ref = $bindable(null), class: className, variant = 'default', ...restProps} = $props()
</script>
