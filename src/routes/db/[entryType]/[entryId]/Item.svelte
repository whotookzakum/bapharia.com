<script>
    import { userLocale } from "$lib/stores";
    import Tag from "$lib/components/Tag.svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";

    export let iconOnly = false;

    export let thumb = "";
    export let amount = "";
    export let name = "";
    export let source = "";
    export let href = "";
    export let chest = "";
    export let rate = "";
</script>

<Tooltip inline placement="top">
    <a
        href="/"
        class="surface1 hover-surface2 p-2 rounded-lg grid place-items-center relative"
    >
        <Tag
            bg
            style="position: absolute; bottom: 0.25rem; right: 0.25rem; color: var(--text1)"
        >
            {#if amount > 999}
                {amount.toLocaleString()}
            {:else}
                <span>
                    <span aria-hidden="true">x</span>{amount}
                </span>
            {/if}
        </Tag>
        <img src={thumb} alt={name} width="64" height="64" loading="lazy" />
    </a>
    <svelte:fragment slot="tooltip">{name}</svelte:fragment>
</Tooltip>

<!-- {#if iconOnly}
        
    {:else}
        <li class="flex" class:gold={chest}>
            <div class="thumbnail-wrapper">
                <img src={thumb} alt="" width="64" height="64" loading="lazy" />
            </div>
            <div class="grid" style="line-height: 1.6;">
                {#if href}
                    <a {href} class="item-name styled-link"
                        >{amount.toLocaleString()} {name}</a
                    >
                {:else}
                    <span {href} class="item-name"
                        >{amount.toLocaleString()} {name}</span
                    >
                {/if}
                {#if source}
                    <small style="color: var(--text2);">{source}</small>
                {/if}
            </div>
            {#if chest}
                <img
                    class={chest}
                    src="/images/{chest}.png"
                    alt={chest}
                    width="128"
                    height="128"
                />
            {/if}
        </li>
    {/if} -->

<style lang="scss">
    li {
        // background: var(--surface2);
        gap: 1rem;
        align-items: center;
        position: relative;
        z-index: 1;
        max-inline-size: none;
    }

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
