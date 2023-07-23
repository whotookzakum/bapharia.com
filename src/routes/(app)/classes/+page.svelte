<script>
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import ClassesList from "./ClassesList.svelte";

    export let data;
</script>

<MetaTags
    title="Classes — Bapharia"
    description="Information on all the playable classes in BLUE PROTOCOL, including their skills, unique mechanics, and meta."
/>

<HeroBanner bannerUrl="/guides/classes/banner.webp">
    <h1>Classes</h1>
    <p style:color="var(--text2)" style:margin-top="0">
        Information on all the playable classes in BLUE PROTOCOL, including
        their skills, unique mechanics, and meta.
    </p>
</HeroBanner>

<div class="flex">
    <ClassesList />
    <div class="article-wrapper">
        <article>
            <svelte:component this={data.content} />
        </article>
    </div>
</div>

<style lang="scss">
    .flex {
        flex-direction: row-reverse;
        flex-wrap: wrap;
        column-gap: 2rem;
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
    }

    .article-wrapper {
        flex-grow: 1;
        flex-basis: 35rem;
    }

    article {
        margin: auto;
        width: fit-content;
    }
</style>