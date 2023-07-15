<script>
    import { EnemyStats, EnemyDrops, FoundIn } from "./sections";
    export let data;
</script>

<div class="grid">
    <div>
        <EnemyStats levelParams={data.level_params} maxLevel={100} />
    </div>
    <div>
        <FoundIn locations={data.found_in} />
    </div>
</div>
{#if data.found_in.length > 0 && data.found_in.some((location) => location.drops)}
    <EnemyDrops locations={data.found_in} />
{/if}

<style lang="scss">
    .grid {
        grid-template-columns: 1fr 1fr; 
        gap: 2rem; 
        align-items: flex-start;
    }
</style>