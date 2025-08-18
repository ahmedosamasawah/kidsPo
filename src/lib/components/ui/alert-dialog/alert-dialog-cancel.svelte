<AlertDialogPrimitive.Cancel
    bind:ref
    data-slot="alert-dialog-cancel"
    class={cn(button_variants({variant: variant}), className)}
    {...restProps}
/>

<script>
import {AlertDialog as AlertDialogPrimitive} from 'bits-ui'

import {button_variants} from '$lib/components/ui/button/index.js'
import {cn} from '$lib/utils.js'

let {ref = $bindable(null), class: className, variant = 'outline', ...restProps} = $props()
</script>
