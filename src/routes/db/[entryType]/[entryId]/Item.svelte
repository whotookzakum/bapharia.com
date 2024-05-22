<script>
    import { userLocale } from "$lib/stores";

    export let thumb = "";
    export let amount = "";
    export let name = "";
    export let source = "";
    export let href = "";
    export let chest = "";
    export let rate = "";
</script>

<li class="flex" class:gold={chest}>
    <div class="thumbnail-wrapper">
        <img src={thumb} alt="" width="64" height="64" loading="lazy" />
    </div>
    <div class="grid" style="line-height: 1.6;">
        {#if href}
            <a {href} class="item-name styled-link">{amount.toLocaleString()} {name}</a>
        {:else}
            <span {href} class="item-name">{amount.toLocaleString()} {name}</span>
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
