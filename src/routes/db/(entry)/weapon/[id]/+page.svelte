<script>
    import {
        Recipe,
        Stats,
        Abilities,
        TreasureSources,
    } from "../../../components";
    export let data;
</script>

{#if data.recipe}
    <Recipe recipe={data.recipe} />
    <!-- <Sockets data={data.recipe} /> -->
{/if}

{#if data.treasureSources.length > 0}
    <TreasureSources sources={data.treasureSources} />
{/if}

{#if data.abilities.length > 0}
    <Abilities abilities={data.abilities} itemType="Weapon" />
{/if}

{#if data.stats.length > 0}
    <Stats
        levelParams={data.stats}
        maxLevel={data.weapon_max_level}
        battleScoreMultiplier={50}
    />
{/if}

<!-- <Model modelSrc="/fst.glb" posterImg={data.thumb.replace("Weapon", "WeaponL")} /> -->
