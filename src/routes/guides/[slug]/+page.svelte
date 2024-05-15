<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    export let data;
    $: ({ metadata, allGuides, html } = data);
</script>

<MetaTags
    title={`${metadata.title} — Bapharia`}
    description={metadata.caption}
    image={metadata.bannerImg}
    bigImage
/>

<div class="article-layout">
    <aside class="menu">
        <nav class>
            <ul class="unstyled-list">
                {#each allGuides as { href, title }}
                    <li>
                        <a
                            {href}
                            class="styled-link"
                            class:active-link={$page.url.pathname.includes(
                                href,
                            )}>{title}</a
                        >
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>

    <!-- <aside class="toc-col">
        <nav>
            <ol class="unstyled-list">
                {#each anchors as { href, title }}
                    <li>
                        <a {href}>{title}</a>
                    </li>
                {/each}
            </ol>
        </nav>
    </aside> -->
    <article>
        <hgroup>
            <p class="category">{metadata.category}</p>
            <h1>{metadata.title}</h1>
            <p>{metadata.caption}</p>
            <!-- <b
                >By {metadata.author}・Last updated {new Date(
                    metadata.date,
                ).toLocaleDateString()}</b
            > -->
        </hgroup>
        <svelte:component this={html} />
    </article>
</div>

<style lang="scss">
    @mixin small-text {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.0625em;
        text-transform: uppercase;
        color: var(--text3);
    }

    :global(article p) {
        line-height: 1.75;
        font-size: 1.25rem;
        letter-spacing: 0.02em;
        max-inline-size: 60ch;
        text-wrap: pretty;
    }

    .article-layout {
        max-width: 1450px;
        display: grid;
        grid-template-columns: 220px auto;
        margin-top: 5rem;
        gap: 3rem;
    }

    .menu {
        position: sticky;
        top: calc(62px + 5rem);
        align-self: start;

        ul::before {
            content: "Guides";
            @include small-text;
        }

        a:not(:hover) {
            color: var(--text2);
        }

        a {
            // display: flex;
            font-size: 1.125rem;
            letter-spacing: 0.02em;

            // padding: 0.125rem 0.25rem;
        }
    }

    .active-link {
        color: var(--link) !important;
        font-weight: bold;
    }

    :global(.toc) {
        grid-column: 2;
        grid-row: 1/-1;
        align-self: start;
        min-width: 30ch;
        position: sticky;
        top: calc(62px + 5rem);
        font-size: 1.125rem;
        letter-spacing: 0.02em;
    }

    :global(.toc ol::before) {
        content: "Contents";
        @include small-text;
    }

    :global(.toc ol) {
        // border-left: 1px solid rgba(128 128 128 / 0.2);
        // gap: 0.5rem;
    }

    :global(.toc a) {
        // display: flex;

        // padding: 0.25rem 0;
    }

    :global(.toc li:first-of-type a) {
        color: var(--link);
        // border-left: 1px solid var(--link);
        // margin-left: -1px;
        font-weight: bold;
    }

    article {
        display: grid;
        grid-template-columns: 1fr 220px;
        grid-template-rows: auto auto;
        column-gap: 3rem;
    }

    :global(article > *:not(.toc)) {
        grid-column: 1;
    }

    hgroup {
        margin-bottom: 2rem;

        h1 {
            margin-bottom: 0.5rem;
            line-height: normal;
        }

        p {
            color: var(--text3);
            line-height: 1.5;
            margin: 0;
        }

        .category {
            color: var(--accent3);
            line-height: unset;
            margin-bottom: 2px;
        }
    }

    .category {
        @include small-text;
    }
</style>
