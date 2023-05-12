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
        Class
    } from "./sections";
    export let data;
</script>

<div class="grid">
    {#if data.stats.length > 0}
        <div>
            <Stats
                levelParams={data.stats}
                maxLevel={data.weapon_max_level}
                battleScoreMultiplier={50}
            />
        </div>
    {/if}
    <div>
        <Class imgSrc={data.classImg} />
        <Element imgSrc={data.elementImg} />
        <h4>Misc</h4>
        <Price
            sellPrice={data.price_player_sells}
            buyPrice={data.price_player_buys}
        />
    </div>
</div>
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
<Description text={data.desc} />
<Model modelSrc="/fst.glb" posterImg={data.thumb.replace("Weapon", "WeaponL")} />

<style lang="scss">
    .grid {
        grid-template-columns: 1fr 1fr; 
        gap: 2rem; 
        align-items: flex-start;
    }
</style>