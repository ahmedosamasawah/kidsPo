<div
    bind:this={ref}
    data-slot="alert"
    class={cn(alertVariants({variant: variant}), className)}
    {...restProps}
    role="alert"
>
    {@render children?.()}
</div>

<script module>
import {tv} from 'tailwind-variants'

export const alertVariants = tv({
    base: 'relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
    variants: {
        variant: {
            default: 'bg-card text-card-foreground',
            destructive:
                'text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})
</script>

<script>
import {cn} from '$lib/utils.js'

/**
 * @typedef {'default' | 'destructive'} AlertVariant
 */

/**
 * @type {{
 *   ref?: HTMLElement | null,
 *   class?: string,
 *   variant?: AlertVariant,
 *   children?: any,
 *   [key: string]: any
 * }}
 */
let {
    ref = $bindable(null),
    class: className,
    variant = /** @type {AlertVariant} */ ('default'),
    children,
    ...restProps
} = $props()
</script>
