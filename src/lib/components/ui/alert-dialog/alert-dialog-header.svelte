<div
    bind:this={ref}
    data-slot="alert-dialog-header"
    class={cn('flex flex-col gap-2 text-center sm:text-right', className)}
    {...restProps}
>
    {@render children?.()}
</div>

<script>
import {cn} from '$lib/utils.js'

let {ref = $bindable(null), class: className, children, ...restProps} = $props()
</script>
