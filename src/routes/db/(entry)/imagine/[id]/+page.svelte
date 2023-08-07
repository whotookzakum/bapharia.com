<script>
    import {
        Stats,
        Abilities,
        Recipe,
        GeneralInfo
    } from "../../index";

    export let data;
</script>

<GeneralInfo {data} />

<Recipe recipe={data.recipe} />

<Abilities abilities={data.abilities} itemType={data.entryTypes[0]} />

<Stats
    levelParams={data.params}
    battleScoreMultiplier={data.imagine_type === 1 ? 10 : 6}
    maxLevel={data.imagine_max_level}
/>