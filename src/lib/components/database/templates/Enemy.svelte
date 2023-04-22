<script>
    import { EnemyStats, EnemyDrops } from "./sections";

    export let data;
</script>

<EnemyStats levelParams={data.level_params} maxLevel={100} />
<EnemyDrops drops={data.drops} />