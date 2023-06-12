<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import "./events.scss";
    export let data;

    // TODO add calendar for events
</script>

<MetaTags title={`Events — Bapharia`} description={`List of all ongoing events in BLUE PROTOCOL.`} />

<h1>Events</h1>
<svelte:component this={data.content} />