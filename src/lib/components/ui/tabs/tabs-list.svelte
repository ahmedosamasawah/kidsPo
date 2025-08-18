<TabsPrimitive.List
    bind:ref
    data-slot="tabs-list"
    class={cn(
        'inline-flex h-9 w-fit items-center justify-center rounded-lg border border-border bg-muted p-[3px]',
        className,
    )}
    {...restProps}
/>

<script>
import {Tabs as TabsPrimitive} from 'bits-ui'

import {cn} from '$lib/utils.js'

let {ref = $bindable(null), class: className, ...restProps} = $props()
</script>
