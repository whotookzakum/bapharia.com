<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import GeneralInfo from "./GeneralInfo.svelte";
    import Sources from "./Sources.svelte";
    import Header from "./Header.svelte";
    import Stats from "./Stats.svelte";
    import SeasonPassRewards from "$lib/components/db/SeasonPassRewards.svelte";
    import SeasonPassesTable from "$lib/components/db/SeasonPassesTable.svelte";
    import SeasonPointsCalculator from "$lib/components/db/SeasonPointsCalculator.svelte";
    import SeasonPointsStore from "$lib/components/db/SeasonPointsStore.svelte";
    import { page } from "$app/stores";

    export let data;
</script>

<!-- image={data.assets?.iconL ?? data.assets?.icon} -->

{#key $page.url.pathname}
    <!-- <MetaTags
        title="{data.text.name} — Bapharia"
        description={data.text.desc ?? "No description available."}
    /> -->

    <Header {data} />
    <div class="pb-8">
        <GeneralInfo {data} />
        <Sources {data} />

        {#if data.resolveType === "Season"}
            <SeasonPassesTable {data} />
            <!-- TODO: add a better visual view, maybe horizontal scroll like in game, maybe a rank range slider -->
            <SeasonPassRewards {data} />
            <SeasonPointsStore {data} />
            <!-- <SeasonPointsCalculator {data} /> -->
        {/if}

        {#if data.stats}
            <Stats {data} />
        {/if}
    </div>
{/key}
