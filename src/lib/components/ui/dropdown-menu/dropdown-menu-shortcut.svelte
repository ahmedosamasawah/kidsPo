<span
    bind:this={ref}
    data-slot="dropdown-menu-shortcut"
    class={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
    {...restProps}
>
    {@render children?.()}
</span>

<script>
import {cn} from '$lib/utils.js'

let {ref = $bindable(null), class: className, children, ...restProps} = $props()
</script>
