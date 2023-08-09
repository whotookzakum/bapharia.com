<script>
    import { userLocale } from "$lib/stores";

    export let thumb = "";
    export let number = "";
    export let name = "";
    export let source = "";
    export let href = "";
    export let isLuno = false;

    if (isLuno) {
        name = {
            ja_JP: "ルーノ",
            en_US: "Luno"
        }
        thumb = "/UI/Icon/Reward/UI_Icon_0.png"
        href = "/db"
    }
</script>

<li class="flex box">
    <div class="thumbnail-wrapper">
        <img src={thumb} alt="" width="64" height="64" loading="lazy" />
        <span class="floaty" class:luno={isLuno}>{number.toLocaleString()}</span>
    </div>
    <div class="grid">
        <a {href} class="item-name styled-link"
            >{name[$userLocale]}</a
        >
        {#if source}
            <span class="item-source">{source[$userLocale]}</span>
        {/if}
    </div>
</li>

<style lang="scss">
    li {
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

    a.item-name {
        font-size: var(--step-2);
        font-weight: 600;
    }

    .item-source {
        color: var(--text2);
        font-size: var(--step--1);
    }

    .floaty {
        position: absolute;
        right: -8px;
        top: -3px;
        background: linear-gradient(335deg, var(--bg), var(--surface1));
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-weight: 700;
        padding: 0.05rem 0.3rem;
        border-radius: 5px;
        color: var(--accent);

        &.luno {
            font-size: 0.8rem;
            bottom: -10px;
            top: unset;
        }
    }
</style>
