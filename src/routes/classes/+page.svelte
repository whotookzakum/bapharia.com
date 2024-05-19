<script>
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    // import ClassesList from "./ClassesList.svelte";

    export let data;
    const { html } = data;
</script>

<MetaTags
    title="Classes — Bapharia"
    description="Information on all the playable classes in BLUE PROTOCOL, including their skills, unique mechanics, and meta."
    image="/images/banner_classes.png"
    bigImage
/>

<article class="main-pane">
    <hgroup>
        <p class="mini-header">Class Overview</p>
        <h1>Classes</h1>
        <p>
            Information on all the playable classes in BLUE PROTOCOL, including
            their skills, unique mechanics, and meta.
        </p>
    </hgroup>
    <img src="/images/_epic.png" alt="" />
    <!-- <img src="/images/banner_seasonpointscalc.png" alt="" /> -->
    <svelte:component this={html} />
</article>

<style>
    img {
        border-radius: 1rem;
    }
</style>
