<script>
    import {
        AdventurerRank,
        GeneralInfo
    } from "../../index";
    export let data;
</script>

<GeneralInfo {data} />

{#if data.adventurer_rank > 0}
    <AdventurerRank value={data.adventurer_rank} />
{/if}


