<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import GeneralInfo from "./GeneralInfo.svelte";
    import Sources from "./Sources.svelte";
    import Header from "./Header.svelte";
    import SeasonRewards from "$lib/components/db/SeasonRewards.svelte";
    import SeasonPassesTable from "$lib/components/db/SeasonPassesTable.svelte";
    import SeasonPointsCalculator from "$lib/components/db/SeasonPointsCalculator.svelte";
    import SeasonPointsStore from "$lib/components/db/SeasonPointsStore.svelte";

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
            <SeasonPassesTable {data} />
            <!-- TODO: add a better visual view, maybe horizontal scroll like in game, maybe a rank range slider -->
            <SeasonRewards {data} />
            <SeasonPointsStore {data} />
            <!-- <SeasonPointsCalculator {data} /> -->
        {/if}
    
</div>
