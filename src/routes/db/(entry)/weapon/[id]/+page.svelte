<script>
    import {
        Recipe,
        Stats,
        Abilities,
        TreasureSources,
        GeneralInfo,
    } from "../../index";
    export let data;
    console.log(data.newAbilities)
</script>

<GeneralInfo {data} imgSrc={data.thumb.replace("Weapon", "WeaponL")} />

{#if data.recipe}
    <Recipe recipe={data.recipe} />
    <!-- <Sockets data={data.recipe} /> -->
{/if}

{#if data.treasureSources.length > 0}
    <!-- <TreasureSources sources={data.treasureSources} /> -->
{/if}

{#if data.abilities.length > 0}
    <Abilities abilities={data.abilities} itemType="Weapon" />
{/if}

{#if data.stats.length > 0}
    <Stats {data} />
{/if}

<!-- <Model modelSrc="/fst.glb" posterImg={data.thumb.replace("Weapon", "WeaponL")} /> -->
