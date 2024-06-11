<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import GeneralInfo from "./GeneralInfo.svelte";
    import Sources from "./Sources.svelte";
    import Header from "./Header.svelte";

    import PageSeason from "./Page_Season.svelte";

    export let data;
</script>

<MetaTags
    title="{data.text.name} — Bapharia"
    description={data.text.desc ?? "No description available."}
/>
<!-- image={data.assets?.iconL ?? data.assets?.icon} -->

<Header {data} />
<div>
    <GeneralInfo {data} />
    <Sources {data} />
    {#if data.resolveType === "Season"}
        <PageSeason {data} />
    {/if}
</div>
