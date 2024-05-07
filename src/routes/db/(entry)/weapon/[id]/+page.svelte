<script>
    import Sources from "../../Sources.svelte";
import {
        Recipe,
        Stats,
        Abilities,
        TreasureSources,
        GeneralInfo,
    } from "../../index";
    export let data;
    console.log(data);

    
</script>

<GeneralInfo {data} />

<Sources {data} />

{#if data.recipe}
    <!-- <Recipe recipe={data.recipe} /> -->
    <!-- <Sockets data={data.recipe} /> -->
{/if}

<!-- {#if data.stats.length > 0}
    <Stats {data} />
{/if} -->

<!-- <Model modelSrc="/fst.glb" posterImg={data.thumb.replace("Weapon", "WeaponL")} /> -->
