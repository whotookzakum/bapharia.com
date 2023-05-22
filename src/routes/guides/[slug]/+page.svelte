<script>
    import "./article.scss";
    import PageFooter from "$lib/components/PageFooter.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    export let data;
    const formattedDate = new Date(data.meta.date).toLocaleDateString();
</script>

<MetaTags title={`${data.meta.title} — Bapharia`} description={data.meta.caption} />

<div class="contents">
    <main id="#main" tabindex="-1">
        <article class="guide">
            <img class="bg-img" src={data.meta.bannerImg} alt="" loading="lazy" />
            <header class="guide-header">
                <h1>{data.meta.title}</h1>
                <p>{data.meta.caption}</p>
                <p class="skip-std">
                    By {data.meta.author} <br />
                    Last updated {formattedDate}
                </p>
            </header>
            <svelte:component this={data.content} />
            <PageFooter />
            <div class="scroll-tracker" />
        </article>
    </main>
</div>

<style lang="scss">

</style>
