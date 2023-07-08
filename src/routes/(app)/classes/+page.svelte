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

<div class="grid">
    <div>
        <h2 style:margin-bottom="1rem">Select a class</h2>
        <ClassesList />
    </div>
    <article>
        <svelte:component this={data.content} />
    </article>
</div>

<style lang="scss">
    .grid {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 1rem;
    }

    article {
        margin: auto;
        grid-column: 1;
        grid-row: 1;
    }

    @media (max-width: 1200px) {
        .grid {
            grid-template-columns: min(55ch, 100%);
            margin: auto;
        }

        article {
            grid-row: 2;
        }
    }
</style>