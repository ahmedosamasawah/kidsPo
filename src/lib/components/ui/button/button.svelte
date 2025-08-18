{#if href}
    <a
        {...restProps}
        bind:this={ref}
        data-slot="button"
        aria-disabled={disabled}
        href={disabled ? undefined : href}
        role={disabled ? 'link' : undefined}
        tabindex={disabled ? -1 : undefined}
        class={cn(button_variants({variant, size}), className)}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        {type}
        {disabled}
        {...restProps}
        bind:this={ref}
        data-slot="button"
        class={cn(button_variants({variant, size}), className)}
    >
        {@render children?.()}
    </button>
{/if}

<script module>
import {tv} from 'tailwind-variants'

import {cn} from '$lib/utils.js'

export const button_variants = tv({
    base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    variants: {
        variant: {
            default:
                'bg-primary text-primary-foreground shadow-sm border border-primary/20  active:bg-primary/95 transition-colors',
            destructive:
                'bg-destructive shadow-xs hover:bg-destructive! active:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white transition-colors',
            outline:
                'bg-background shadow-sm border border-input hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/20 active:bg-accent/80 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-colors',
            secondary:
                'bg-secondary text-secondary-foreground shadow-sm border border-secondary/20 hover:bg-secondary/70 active:bg-secondary/90 transition-colors',
            ghost: 'hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-accent/50 transition-colors',
            link: 'text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-colors',
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
})
</script>

<script>
/**
 * @typedef {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'} ButtonVariant
 * @typedef {'default' | 'sm' | 'lg' | 'icon'} ButtonSize
 * @typedef {'button' | 'submit' | 'reset'} ButtonType
 */

/**
 * @type {{
 *   class?: string,
 *   variant?: ButtonVariant,
 *   size?: ButtonSize,
 *   ref?: HTMLElement | null,
 *   href?: string,
 *   type?: ButtonType,
 *   disabled?: boolean,
 *   children?: any,
 *   [key: string]: any
 * }}
 */
let {
    children,
    type = 'button',
    size = 'default',
    href = undefined,
    disabled = false,
    variant = 'default',
    class: className = '',
    ref = $bindable(null),
    ...restProps
} = $props()
</script>
