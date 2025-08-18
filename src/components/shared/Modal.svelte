{#if open}
    <div
        class="fixed inset-0 z-50 flex animate-in items-center justify-center p-4 duration-200 fade-in-0"
    >
        <div
            class="fixed inset-0 animate-in bg-black/60 backdrop-blur-sm duration-200 fade-in-0"
            onclick={on_close}
            role="button"
            tabindex="-1"
            onkeydown={handle_keydown}
        ></div>

        <div
            class="glass-strong relative w-full max-w-md animate-in rounded-xl p-6 duration-200 zoom-in-95 slide-in-from-bottom-2"
        >
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-card-foreground">{title}</h3>
                {#if description}
                    <p class="mt-1 text-sm text-muted-foreground">{description}</p>
                {/if}
            </div>

            {@render children?.()}
        </div>
    </div>
{/if}

<script>
let {open = false, title, description = undefined, on_close, children} = $props()

function handle_keydown(e) {
    if (e.key === 'Escape') on_close?.()
}
</script>
