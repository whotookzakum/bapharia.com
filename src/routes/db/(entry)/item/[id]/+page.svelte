<script>
    import {
        AdventurerRank,
    } from "../../../components";
    export let data;
</script>


{#if data.adventurer_rank > 0}
    <AdventurerRank value={data.adventurer_rank} />
{/if}


