<script>
    import { EnemyStats, EnemyDrops, FoundIn, Stats } from "../../index";
    export let data;
</script>



{#if data.found_in.length > 0 && data.found_in.some((location) => location.drops)}
    <EnemyDrops locations={data.found_in} />
{/if}

<Stats {data} />