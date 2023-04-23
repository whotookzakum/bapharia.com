<script>
    import { EnemyStats, EnemyDrops } from "./sections";
    export let data;
</script>

<EnemyStats levelParams={data.level_params} maxLevel={100} />
{#if data.found_in.length > 0 && data.found_in.some((location) => location.drops)}
    <EnemyDrops locations={data.found_in} />
{/if}
