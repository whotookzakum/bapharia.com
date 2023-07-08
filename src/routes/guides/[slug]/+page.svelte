<script>
    import "./article.scss";
    import { fetchMarkdownPosts } from "$lib/utils";
    import PageFooter from "$lib/components/PageFooter.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import GuidesList from "./GuidesList.svelte";
    import Toc from "svelte-toc";
    import ReadMore from "./ReadMore.svelte";
    export let data;
    $: formattedDate = new Date(data.meta.date).toLocaleDateString();
</script>

<MetaTags
    title={`${data.meta.title} — Bapharia`}
    description={data.meta.caption}
/>

<main id="main" tabindex="-1" class="layout guide">
    <HeroBanner bannerUrl={data.meta.bannerImg}>
        <h1>{data.meta.title}</h1>
        <p style:color="var(--text2)" style:margin-top="0">
            {data.meta.caption}
        </p>
        <b>By {data.meta.author} • Last Updated {formattedDate}</b>
    </HeroBanner>
    {#await fetchMarkdownPosts() then guides}
        <GuidesList {guides} />
    {/await}
    <Toc
        --toc-padding="1rem 0 0 0"
        --toc-title-padding="0.5rem"
        --toc-title-margin="1rem 0 0.5rem 0"
        --toc-max-height="calc(100vh - 62px - 1rem)"
        --toc-font-size="1rem"
    />
    <article class="grid">
        <svelte:component this={data.content} />
    </article>
    {#await fetchMarkdownPosts() then guides}
        <ReadMore {guides} />
    {/await}
</main>

<style lang="scss">
    .layout {
        --toc-width: 350px;
        --guides-list-width: 250px;
        grid-template-columns: var(--guides-list-width) 1fr var(--toc-width);
        align-items: start;
    }

    article {
        grid-column: 2;
        grid-row: 2;
    }

    @media (max-width: 1400px) {
        .layout {
            --toc-width: 250px;
            --guides-list-width: 250px;
        }
    }

    @media (max-width: 1200px) {
        .layout {
            --toc-width: 0;
        }
    }

    @media (max-width: 900px) {
        .layout {
            --guides-list-width: 0;
            grid-template-columns: 1fr min(calc(100% - 2rem), 38rem) 1fr;
        }

        article {
            grid-row: 3;
            grid-column: 1/-1;
        }
    }
</style>
