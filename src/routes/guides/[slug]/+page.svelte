<script>
    import { fetchMarkdownPosts } from "$lib/utils";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import ReadMore from "./ReadMore.svelte";
    import PagesList from "$lib/components/layout/PagesList.svelte";
    import TableOfContents from "$lib/components/layout/TableOfContents.svelte";
    import { onMount } from "svelte";
    export let data;
    const { metadata, allGuides, html } = data;
    let anchors = []

    onMount(() => {
        const headers = document.querySelectorAll("h2")
        headers.forEach(node => {
            anchors.push({ href: `#${node.id}`, title: node.innerText })
        })
        anchors = anchors
    })

    // $: formattedDate = ;
</script>

<!-- <MetaTags
    title={`${metadata.title} — Bapharia`}
    description={metadata.caption}
    image={metadata.bannerImg}
    bigImage
/> -->

<div class="article-layout">
    <aside class="menu-col">
        <nav>
            <ul class="unstyled-list">
                {#each allGuides as { href, title }}
                    <li>
                        <a {href}>{title}</a>
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>
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
    <article>
        <svelte:component this={html} />
    </article>
    <aside class="toc-col">
        <nav>
            <ol class="unstyled-list">
                {#each anchors as { href, title }}
                    <li>
                        <a {href}>{title}</a>
                    </li>
                {/each}
            </ol>
        </nav>
    </aside>
</div>

<style lang="scss">
    .article-layout {
        max-width: 1450px;
        display: grid;
        grid-template-areas:
            "menu header toc"
            "menu body toc";
    }

    .menu-col {
        grid-area: menu;
    }

    hgroup {
        grid-area: header;
    }

    .toc-col {
        grid-area: toc;
    }

    article {
        grid-area: body;
    }

    hgroup {
        margin-top: 2rem;

        .category {
            color: goldenrod;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.0625em;
            text-transform: uppercase;
        }

        * {
            margin: 0;
            line-height: 1.3;
        }

        p {
            color: var(--text2);
            font-size: 1.3125rem;
        }
    }
</style>
