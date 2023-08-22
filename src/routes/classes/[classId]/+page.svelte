<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Stats from "./Stats.svelte";
    export let data;
</script>

<MetaTags
    title={`${data.meta.title} — Bapharia`}
    description={`All about the ${data.meta.title} class in BLUE PROTOCOL—unique mechanics, stats, skills, recommended loadouts, and more!`}
/>

<Stats />
<svelte:component this={data.content} />

<style lang="scss">
    :global(.difficulty-box) {
        align-items: center;
        width: fit-content;
    }

    :global(.difficulty-box *:not(span)) {
        color: goldenrod;
        font-size: 20px;
    }

    :global(.difficulty-box span) {
        margin-right: 1rem;
        font-size: var(--step-3);
        font-weight: 800;
    }
</style>
