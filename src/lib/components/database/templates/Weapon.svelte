<script>
    import {
        Description,
        Recipe,
        Price,
        Stats,
        Abilities,
        TreasureSources,
        Model,
    } from "./sections";

    export let data;
</script>

<div
    class="grid"
    style="grid-template-columns: 1fr 1fr; gap: 2rem; align-items: flex-start"
>
    <div>
        <Stats
            levelParams={data.stats}
            maxLevel={data.weapon_max_level}
            battleScoreMultiplier={50}
        />
    </div>
    <div>
        <h4>Misc</h4>
        <Price
            sellPrice={data.price_player_sells}
            buyPrice={data.price_player_buys}
        />
    </div>
</div>

{#if data.recipe}
    <Recipe recipe={data.recipe} />
    <h5>Success:</h5>
    <div>1 socket {data.recipe.base_ability_rate1}%</div>
    <div>2 socket {data.recipe.base_ability_rate2}%</div>
    <div>3 socket {data.recipe.base_ability_rate3}%</div>
    <div>4 socket {data.recipe.base_ability_rate4}%</div>
    <h5>Great Success ({data.recipe.bonus_rate}%):</h5>
    <div>1 socket 0%</div>
    <div>2 socket 15%</div>
    <div>3 socket 50%</div>
    <div>4 socket 35%</div>
    <div>Great Success ticket cost: {data.recipe.great_success_tokens}</div>
{/if}
<!-- <Element imgSrc={data.elementImg} value={levelStats.attribute_value} /> -->
<img class="class-icon" src={data.classImg} alt="" width="32" height="32" />

<Abilities abilities={data.abilities} itemType={data.__typename} />
<TreasureSources sources={data.treasureSources} />
<Description text={data.desc} />
<Model />
