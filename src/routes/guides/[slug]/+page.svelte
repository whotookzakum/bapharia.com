<script>
    import "./article.scss";
    import PageFooter from "$lib/components/PageFooter.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import { fetchMarkdownPosts } from "$lib/utils";
    import { page } from "$app/stores";
    export let data;
    $: formattedDate = new Date(data.meta.date).toLocaleDateString();
</script>

<MetaTags
    title={`${data.meta.title} — Bapharia`}
    description={data.meta.caption}
/>

<HeroBanner bannerUrl={data.meta.bannerImg}>
    <h1>{data.meta.title}</h1>
    <p style:color="var(--text2)" style:margin-top="0">{data.meta.caption}</p>
    <b>By {data.meta.author} • Last Updated {formattedDate}</b>
</HeroBanner>

<div class="layout-left grid">
    <nav class="guides-list grid">
        <a href="/guides" class="btn btn-fadein">Back to Guides</a>
        {#await fetchMarkdownPosts() then guides}
            {#each guides as guide}
                <a
                    class="link styled-link"
                    class:active={$page.url.pathname === guide.path}
                    href={guide.path}>{guide.meta.title}</a
                >
            {/each}
        {/await}
    </nav>
    
    <main id="main" tabindex="-1">
        <article class="layout-right grid">
            <svelte:component this={data.content} />
            <div class="scroll-tracker" />
        </article>
    </main>
</div>

<style lang="scss">
    .btn {
        font-size: inherit;
        margin: 1rem;
    }
</style>