<script>
    import _ from "lodash";
    export let data;
</script>

<main>
    <h1>Enemies</h1>
    {#each data.enemies as enemy}
        <div class="box surface">
            <div class="grid">
                <h5>
                    {enemy.name}
                    {#if enemy.is_boss}
                        (Boss)
                    {/if}
                </h5>
                <div>{enemy.enemy_id}</div>
            </div>
            <div>HP {enemy.level_params[0].hit_point}</div>
            <div>HP factor {enemy.level_params[0].hit_point}</div>
            <div>ATK {enemy.level_params[0].attack_power}</div>
            <div>ATK factor {enemy.level_params[0].attack_power_factor}</div>
            <div>DEF {enemy.level_params[0].defence_power}</div>
            <div>DEF factor {enemy.level_params[0].defence_power_factor}</div>
            <div>EXP (Lv. 1) {enemy.level_params[0].exp_lv1}</div>
            <div>EXP (Lv. 100) {enemy.level_params[0].exp_lv100}</div>
            <div>EXP curve {enemy.level_params[0].exp_crv}</div>

            <hr />

            {#each Object.entries(_.groupBy(enemy.drop_items, (drop) => drop.content_id)) as dropArrays}
                <h6>{dropArrays[0]}</h6>
                {#each dropArrays[1] as drop}
                    <div>
                        {drop.name} ({drop.item_index}) {drop.drop_rate / 100}%
                    </div>

                    {#if drop.treasure?.rarity_rate}
                        <ul>
                            {#each drop.treasure?.rarity_rate as chest}
                                <li>
                                    <div>
                                        Rarity {chest.rarity} chest ({chest.rate / 100}%)
                                    </div>
                                    {#each drop.treasure.lot_rate.filter(lot => lot.rarity_min === chest.rarity) as lot}
                                        <div>
                                            {lot.reward_master_id} {lot.rate / 100}%
                                        </div>
                                    {/each}
                                </li>
                            {/each}
                        </ul>
                    {/if}
                {/each}
            {/each}
        </div>
    {/each}
</main>

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

    h6 {
        font-size: inherit;
        margin-top: 0.5rem;
        color: var(--accent);
    }
</style>
