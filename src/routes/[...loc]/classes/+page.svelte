<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import { assetUrl } from "$lib/utils"

    export let data;
    const { html, allClasses } = data;
</script>

<MetaTags
    title="Classes — Bapharia"
    description="Information on all the playable classes in BLUE PROTOCOL, including their skills, unique mechanics, and meta."
    image="/images/banner_classes.png"
    bigImage
/>

<article class="main-pane classes-home-page">
    <hgroup>
        <p class="mini-header">BLUE PROTOCOL</p>
        <h1>Classes</h1>
        <p>
            Information on all the playable classes in BLUE PROTOCOL, including
            their skills, unique mechanics, and meta.
        </p>
    </hgroup>

    <ul class="classes-list grid unstyled-list" role="list">
        {#each allClasses as { href, title, weapon, isNew }}
            <li class="grid box hover outline-focus-within">
                <img
                    src={assetUrl(`/UI/Icon/ClassXL/UI_IconClassXL_${href
                        .split('/')
                        .pop()
                        .padStart(2, '0')}.png`)}
                    alt=""
                    width="96"
                    height="96"
                />
                <a {href} class="styled-link">{title}</a>
                {#if isNew}
                    <Tag
                        isNew
                        style="position: absolute; top: 1rem; left: 1rem;"
                        >New</Tag
                    >
                {/if}
                <span>{weapon}</span>
            </li>
        {/each}
    </ul>

    <img src="/images/_epic.png" alt="" style="order: 4" />
    <!-- <img src="/images/banner_seasonpointscalc.png" alt="" /> -->
    <svelte:component this={html} />
</article>

<style lang="scss">
    img {
        border-radius: 1rem;
    }

    :global(.classes-home-page .toc) {
        order: 3;
    }

    :global(.classes-home-page > *:not(:where(hgroup, .toc, .classes-list))) {
        order: 5;
    }

    .classes-list {
        display: none;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        align-content: start;
        margin-bottom: 2rem;

        img {
            width: 100%;
            height: auto;
            margin-bottom: 0.5rem;
            transition: all 0.2s ease;
        }

        span {
            color: var(--text2);
        }
    }

    li {
        position: relative;
        z-index: 1;
        line-height: 1.6;
        align-content: start;

        *:not(a) {
            pointer-events: none;
        }

        &:hover img {
            transform: scale(1.07);
        }
    }

    a {
        color: var(--accent1);
        font-size: var(--step-2);
        font-weight: 600;
    }

    a::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    li:has(:focus-visible) {
        background: var(--surface2);
    }

    @media (max-width: 850px) {
        .classes-list {
            display: grid;
        }
    }

    @media (max-width: 424px) {
        .classes-list {
            grid-template-columns: 1fr;
            text-align: center;

            img {
                max-width: 96px;
                margin: auto;
            }

            li {
                line-height: 1.4;
            }

            a {
                font-size: var(--step-0);
            }

            span {
                font-size: var(--step--1);
            }
        }
    }
</style>
