<script>
    import { LMAccumulation, LMEffects } from "../../../components";
    export let data;
</script>

<LMEffects levels={data.efficacy_parameters} />
<LMAccumulation
    params={data.accumulate_condition_parameters}
    limit={data.bottle_accumulate_limit}
/>
