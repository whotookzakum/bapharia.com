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
