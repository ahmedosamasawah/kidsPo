{#if size === 'small'}
    <div
        class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-primary"
    ></div>
{:else}
    <div class="flex flex-col items-center justify-center gap-3">
        <div
            class="animate-spin rounded-full border-2 border-muted border-t-primary {sizes[size]}"
        ></div>
        {#if text}
            <p class="text-sm text-muted-foreground">{text}</p>
        {/if}
    </div>
{/if}

<script>
let {size = 'md', text = 'جاري التحميل...'} = $props()

const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
}
</script>
