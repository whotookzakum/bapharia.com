<script>
    import Item from "$lib/components/db/Item.svelte";
    import SeasonRewards from "$lib/components/db/SeasonRewards.svelte";
    import SeasonPassesTable from "../../../../lib/components/db/SeasonPassesTable.svelte";
    import SeasonPointsCalculator from "../../../../lib/components/db/SeasonPointsCalculator.svelte";
    import SeasonPointsStore from "../../../../lib/components/db/SeasonPointsStore.svelte";

    export let data;
</script>



<SeasonPassesTable {data} />

<!-- TODO: add a better visual view, maybe horizontal scroll like in game, maybe a rank range slider -->
<SeasonRewards {data} />


<SeasonPointsStore {data} />

<SeasonPointsCalculator {data} />


