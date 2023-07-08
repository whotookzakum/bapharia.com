<script>
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
    {#await fetchMarkdownPosts() then guides}
        <ReadMore {guides} />
    {/await}
</article>