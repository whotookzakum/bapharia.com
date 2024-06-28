<script>
    import MetaTags from '$lib/components/MetaTags.svelte';

    export let data;
</script>

<MetaTags
    title={`Changelog — Bapharia`}
    description={`List of site updates.`}
/>

<h1>Changelog</h1>
<svelte:component this={data.content} />

<style lang="scss">
    @media (max-width: 1150px) {
        h1 {
            margin-top: var(--nav-height);
        }
    }
</style>