<script>
    import { fetchMarkdownPosts } from "$lib/utils";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import ReadMore from "./ReadMore.svelte";
    import PagesList from "$lib/components/layout/PagesList.svelte";
    import TableOfContents from "$lib/components/layout/TableOfContents.svelte";
    export let data;
    $: formattedDate = new Date(data.meta.date).toLocaleDateString();
</script>

<MetaTags
    title={`${data.meta.title} — Bapharia`}
    description={data.meta.caption}
    bigImage
    image={data.meta.bannerImg}
/>

<HeroBanner bannerUrl={data.meta.bannerImg}>
    <h1>{data.meta.title}</h1>
    <p style:color="var(--text2)" style:margin-top="0">
        {data.meta.caption}
    </p>
    <b>By {data.meta.author} • Last Updated {formattedDate}</b>
</HeroBanner>

{#await fetchMarkdownPosts() then guides}
    <PagesList links={guides} />
{/await}

<TableOfContents />

<article class="grid">
    <svelte:component this={data.content} />
    {#await fetchMarkdownPosts() then guides}
        <ReadMore {guides} />
    {/await}
</article>