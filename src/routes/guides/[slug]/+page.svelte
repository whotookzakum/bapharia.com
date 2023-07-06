<script>
    import "./article.scss";
    import PageFooter from "$lib/components/PageFooter.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    export let data;
    $: formattedDate = new Date(data.meta.date).toLocaleDateString();
</script>

<MetaTags title={`${data.meta.title} — Bapharia`} description={data.meta.caption} />

<HeroBanner bannerUrl={data.meta.bannerImg}>
    <h1>{data.meta.title}</h1>
    <p style:color="var(--text2)" style:margin-top="0">{data.meta.caption}</p>
    <b>By {data.meta.author} • Last Updated {formattedDate}</b>
</HeroBanner>

<div class="contents">
    <main id="main" tabindex="-1">
        <article class="guide">
            <!-- <img class="bg-img" src={data.meta.bannerImg} alt="" loading="lazy" />
            <header class="guide-header g-50">
                <h1>{data.meta.title}</h1>
                <p class="skip-std" style:color="var(--accent)">By {data.meta.author}</p>
                <p>Last updated {formattedDate}</p>
            </header> -->
            <!-- <p style="color: var(--text2)">&leftarrow; Guides / {data.meta.title}</p> -->
            <svelte:component this={data.content} />
            <PageFooter />
            <div class="scroll-tracker" />
        </article>
    </main>
</div>

<style lang="scss">

</style>
