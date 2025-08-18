<DropdownMenuPrimitive.Group bind:ref data-slot="dropdown-menu-group" {...restProps} />

<script>
import {DropdownMenu as DropdownMenuPrimitive} from 'bits-ui'

let {ref = $bindable(null), ...restProps} = $props()
</script>
