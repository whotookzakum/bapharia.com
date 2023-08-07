<script>
    import {
        Description,
        Recipe,
        Price,
        Stats,
        Abilities,
        TreasureSources,
        Model,
        Sockets,
        Element,
        Class,
        LargeImage
    } from "../../../components";
    export let data;
</script>


{#if data.stats.length > 0}
    <div>
        <Stats
            levelParams={data.stats}
            maxLevel={data.weapon_max_level}
            battleScoreMultiplier={50}
        />
    </div>
{/if}

{#if data.recipe}
    <Recipe recipe={data.recipe} />
    <Sockets data={data.recipe} />
{/if}
{#if data.abilities.length > 0}
    <Abilities abilities={data.abilities} itemType={data.__typename} />
{/if}
{#if data.treasureSources.length > 0}
    <TreasureSources sources={data.treasureSources} />
{/if}
<!-- <Model modelSrc="/fst.glb" posterImg={data.thumb.replace("Weapon", "WeaponL")} /> -->