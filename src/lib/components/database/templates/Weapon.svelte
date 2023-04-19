<script>
    import {
        Description,
        Recipe,
        Price,
        BattleScore,
        Element,
        Stats,
        Abilities,
        TreasureSources
    } from "./sections";

    export let data;
    // Max level stats for now, but fetching all level stats to add a level selector later
    $: levelStats = data.stats.find(
        (set) => set.level === data.weapon_max_level
    );
</script>

<Price sellPrice={data.price_player_sells} buyPrice={data.price_player_buys} />
<Description text={data.desc} />
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
<BattleScore value={data.weapon_max_level * 50} />
<Element imgSrc={data.elementImg} value={levelStats.attribute_value} />
<img class="class-icon" src={data.classImg} alt="" width="32" height="32" />
<!-- <Stats values={levelStats} /> -->
<Abilities abilities={data.abilities} />
<TreasureSources sources={data.treasureSources} />