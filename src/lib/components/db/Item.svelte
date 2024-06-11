<script>
    import Tag from "$lib/components/Tag.svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";

    export let iconOnly = false;
    export let item;
    export let currency = ""
    const { href = undefined } = item;
</script>

{#if iconOnly}
    <Tooltip inline placement="top">
        <svelte:element
            this={href ? "a" : "span"}
            {href}
            class="surface1 p-2 rounded-lg grid place-items-center relative"
            class:hover-surface2={href}
        >
            {#if item.amount}
                <Tag
                    blur
                    style="position: absolute; bottom: 0.25rem; right: 0.25rem;"
                >
                    {#if item.amount > 999}
                        {item.amount.toLocaleString()}
                    {:else}
                        <span>
                            <span aria-hidden="true">x</span>{item.amount}
                        </span>
                    {/if}
                </Tag>
            {/if}
            {#if item.price}
                <Tag
                    blur
                    style="position: absolute; bottom: 0.25rem; right: 0.25rem;"
                >
                    {#if item.price > 999}
                        {item.price.toLocaleString() + currency}
                    {:else}
                        {item.price + currency}
                    {/if}
                </Tag>
            {/if}
            <img
                src={item.assets.icon}
                alt={item.text.name}
                width="64"
                height="64"
                loading="lazy"
            />
        </svelte:element>
        <svelte:fragment slot="tooltip">{item.text.name}</svelte:fragment>
    </Tooltip>
{:else}
    <div
        class="flex gap-4 items-center relative z-[1] surface1 p-4 rounded-2xl"
    >
        <div class="thumbnail-wrapper">
            <img
                src={item.assets.icon}
                alt=""
                width="64"
                height="64"
                loading="lazy"
            />
        </div>
        <div class="grid" style="line-height: 1.6;">
            <svelte:element
                this={href ? "a" : "span"}
                {href}
                class="item-name styled-link"
            >   
                {#if item.amount}
                    {item.amount > 999 ? item.amount.toLocaleString() : item.amount + "x"}
                {/if}
                {item.text.name}
            </svelte:element>
            {#if item.source}
                <small style="color: var(--text2);">{item.source}</small>
            {/if}
        </div>
        <!-- {#if chest}
            <img
                class={chest}
                src="/images/{chest}.png"
                alt={chest}
                width="128"
                height="128"
            />
        {/if} -->
    </div>
{/if}

<style lang="scss">
    .thumbnail-wrapper {
        position: relative;

        img {
            display: block;
        }
    }

    .item-name {
        font-weight: 600;
    }
</style>
