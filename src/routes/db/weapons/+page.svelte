<script>
    export let data;
</script>

<main>
    <h1>Weapons</h1>
    {#each data.weapons as weapon}
        <div class="box surface">
            <div class="flex" style="gap: 0.5rem">
                <img src={weapon.thumb} alt="" />
                <div class="grid">
                    <h5>{weapon.name}</h5>
                    <span>{weapon.id}</span>
                </div>
            </div>
            <div>
                Class: <img
                    src={weapon.classImg}
                    alt=""
                    width="28"
                    height="28"
                />
            </div>
            <div>Lv. {weapon.weapon_max_level}</div>
            <div>
                Sells for {weapon.price_player_sells}
                <img
                    src="/UI/Common/UI_CmnMoney1.png"
                    alt=""
                    width="24"
                    height="24"
                    style="margin: -7px -4px"
                />
            </div>
            {#if weapon.price_player_buys !== 999999999}
                <div>
                    Buy for {weapon.price_player_buys}
                    <img
                        src="/UI/Common/UI_CmnMoney1.png"
                        alt=""
                        width="24"
                        height="24"
                        style="margin: -7px -4px"
                    />
                </div>
            {/if}
            {#if weapon.is_for_weapon_stickers === 0}
                <div>Battle Score {weapon.weapon_max_level * 50}</div>
                <div>
                    Element <img
                        src={weapon.elementImg}
                        alt=""
                        width="24"
                        height="24"
                    />
                    {weapon.stats[weapon.stats.length - 1].attribute_value}
                </div>
                <div>
                    ATK {weapon.stats[weapon.stats.length - 1].offensive_power}
                </div>
                <div>STR {weapon.stats[weapon.stats.length - 1].str}</div>
                <div>VIT {weapon.stats[weapon.stats.length - 1].vit}</div>
                <div>DEX {weapon.stats[weapon.stats.length - 1].dex}</div>
                <div>MND {weapon.stats[weapon.stats.length - 1].mnd}</div>
                <div>INT {weapon.stats[weapon.stats.length - 1].int}</div>
                <div>
                    Crit Damage {weapon.stats[weapon.stats.length - 1]
                        .critical_power}%
                </div>

                {#if weapon.recipe}
                    <hr />
                    <div>
                        Req. Adventurer rank {weapon.recipe.difficulty} to craft
                    </div>
                    {#each weapon.recipe.materials as material}
                        <div>
                            {material.name} x{material.need_num} ({material.source})
                        </div>
                    {/each}
                    <div>
                        LUNO {weapon.recipe.use_money}
                        <img
                            src="/UI/Common/UI_CmnMoney1.png"
                            alt=""
                            width="24"
                            height="24"
                            style="margin: -7px -4px"
                        />
                    </div>
                    <div>Success:</div>
                    <div>1 socket {weapon.recipe.base_ability_rate1}%</div>
                    <div>2 socket {weapon.recipe.base_ability_rate2}%</div>
                    <div>3 socket {weapon.recipe.base_ability_rate3}%</div>
                    <div>4 socket {weapon.recipe.base_ability_rate4}%</div>

                    <div>Great Success ({weapon.recipe.bonus_rate}%):</div>
                    <!-- <div>1 socket {weapon.recipe.bonus_ability_rate1}%</div>
                    <div>2 socket {weapon.recipe.bonus_ability_rate2}%</div>
                    <div>3 socket {weapon.recipe.bonus_ability_rate3}%</div>
                    <div>4 socket {weapon.recipe.bonus_ability_rate4}%</div> -->
                    <div>1 socket 0%</div>
                    <div>2 socket 15%</div>
                    <div>3 socket 50%</div>
                    <div>4 socket 35%</div>
                    <div>
                        Great Success ticket cost: {weapon.recipe
                            .great_success_tokens}
                    </div>
                {/if}

                {#if weapon.abilities.length > 0}
                    <hr />
                    {#each weapon.abilities as ability}
                        <div>
                            {ability.name}
                            Great Success: +{ability.big_success_min_value}% ~ +{ability.big_success_max_value}%;
                            Success: +{ability.success_min_value}% ~ +{ability.success_max_value}%;
                            Probability: {ability.probability}%
                        </div>
                    {/each}
                {/if}

                {#if weapon.treasureSources.length > 0}
                    <hr />
                    {#each weapon.treasureSources as source}
                        <div>
                            {source.name}
                            {source.probability}% {source.location}
                        </div>
                    {/each}
                {/if}
            {/if}
        </div>
    {/each}
</main>

<!-- {#each Object.keys(data) as key}
    {key}
{/each} -->
<style lang="scss">
    main {
        margin: auto;
        max-width: 65ch;
        display: grid;
        gap: 0.5rem;
    }

    h5 {
        margin: 0;
    }
</style>
