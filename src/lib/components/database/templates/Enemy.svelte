<script>
    import { EnemyStats, EnemyDrops } from "./sections";

    export let data;
    console.log(data)
</script>

<EnemyStats levelParams={data.level_params} maxLevel={100} />
<EnemyDrops drops={data.drops} treasure_chests={data.treasure_chests} />