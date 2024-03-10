<script>
    import { userLocale } from "$lib/stores";
    export let abilities, itemType;
    const WEAPON_HEADERS = {
        ability_name: {
            ja_JP: "特効",
            en_US: "Special Effect",
        },
        effect_name: {
            ja_JP: "効果",
            en_US: "Stats",
        },
        great_success_value: {
            ja_JP: "大成功時の効果値",
            en_US: "Value<br><small style='white-space:nowrap'>(Great Success)</small>",
        },
        success_value: {
            ja_JP: "成功時の効果値",
            en_US: "Value<br><small>(Success)</small>",
        },
        probability: {
            ja_JP: "確率",
            en_US: "Probability",
        },
    };

    const IMAGINE_HEADERS = {
        potential_ability: {
            ja_JP: "付与アビリティ候補",
            en_US: "Ability Name",
        },
        effect_name: {
            ja_JP: "効果名",
            en_US: "Effect",
        },
        effect_value: {
            ja_JP: "効果値",
            en_US: "Value",
        },
        probability: {
            ja_JP: "確率",
            en_US: "Probability",
        },
    };

    let uniqueEnemiesThatDrop;

    if (itemType === "Weapon") {
        uniqueEnemiesThatDrop = abilities.reduce((acc, abil) => {
            abil.source_enemies.forEach((enemy) => {
                if (
                    !acc.some(
                        (includedEnemy) =>
                            includedEnemy.enemy_id === enemy.enemy_id,
                    )
                )
                    acc.push(enemy);
            });
            return acc;
        }, []);
    }
</script>

{#if itemType === "Weapon"}
    <div class="flex g-25 weapon-effects-header">
        <h2>Special Effects</h2>
        <select class="box">
            <option value="">From Crafting</option>
        </select>
    </div>
    <table>
        <thead>
            <tr>
                <th>{@html WEAPON_HEADERS.ability_name[$userLocale]}</th>
                <th>{@html WEAPON_HEADERS.effect_name[$userLocale]}</th>
                <th>{@html WEAPON_HEADERS.great_success_value[$userLocale]}</th>
                <th>{@html WEAPON_HEADERS.success_value[$userLocale]}</th>
                <th>{@html WEAPON_HEADERS.probability[$userLocale]}</th>
            </tr>
        </thead>
        <tbody>
            {#each abilities.filter((ability) => ability.source === "crafting") as ability}
                <tr>
                    <td>{ability.name[$userLocale]}</td>
                    <td>
                        {ability.ability_name1[$userLocale]}
                        {#if ability.ability_name2}
                            {ability.ability_name2[$userLocale]}
                        {/if}
                    </td>
                    <td
                        >+{ability.big_success_min_value}% ~ {ability.big_success_max_value}%</td
                    >
                    <td
                        >+{ability.success_min_value}% ~ {ability.success_max_value}%</td
                    >
                    <td>{ability.weight}%</td>
                </tr>
            {/each}
        </tbody>
    </table>

    {#each uniqueEnemiesThatDrop as enemy}
        <h3>
            Dropped from <a href="/db/enemy/{enemy.enemy_id}?map={enemy.mapId}"
                >{enemy.name[$userLocale]}</a
            >
        </h3>
        <table>
            <thead>
                <tr>
                    <th>{@html WEAPON_HEADERS.ability_name[$userLocale]}</th>
                    <th>{@html WEAPON_HEADERS.effect_name[$userLocale]}</th>
                    <th
                        >{@html WEAPON_HEADERS.great_success_value[
                            $userLocale
                        ]}</th
                    >
                    <th>{@html WEAPON_HEADERS.success_value[$userLocale]}</th>
                    <th>{@html WEAPON_HEADERS.probability[$userLocale]}</th>
                </tr>
            </thead>
            <tbody class="golden">
                {#each abilities.filter((ability) => ability.source === "enemyDrop") as ability}
                    <tr>
                        <td>{ability.name[$userLocale]} </td>
                        <td>
                            {ability.ability_name1[$userLocale]}<br />
                            {#if ability.ability_name2}
                                {ability.ability_name2[$userLocale]}
                            {/if}
                        </td>
                        <td
                            >+{ability.big_success_min_value}% ~ {ability.big_success_max_value}%</td
                        >
                        <td
                            >+{ability.success_min_value}% ~ {ability.success_max_value}%</td
                        >
                        <td>{ability.weight}%</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/each}
{/if}

{#if itemType === "Imagine"}
    <h2>Abilities</h2>
    <table>
        <thead>
            <tr>
                <th>{IMAGINE_HEADERS.potential_ability[$userLocale]}</th>
                <th>{IMAGINE_HEADERS.effect_name[$userLocale]}</th>
                <th>{IMAGINE_HEADERS.effect_value[$userLocale]}</th>
                <th>{IMAGINE_HEADERS.probability[$userLocale]}</th>
            </tr>
        </thead>
        <tbody>
            {#each abilities as ability}
                <tr>
                    <td>{ability.name[$userLocale]}</td>
                    <td>
                        {#each ability.stats as stat}
                            {#if stat.value > 0}
                                {stat.name[$userLocale]} <br />
                            {/if}
                        {/each}
                    </td>
                    <td>
                        {#each ability.stats as stat}
                            {#if stat.value > 0}
                                {#if stat.name.ja_JP.includes("ダメージ") || stat.name.ja_JP.includes("会心")}
                                    {stat.value}%
                                {:else}
                                    {stat.value}
                                {/if}
                                <br />
                            {/if}
                        {/each}
                    </td>
                    <td>{ability.probability}%</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}

<style lang="scss">
    thead th {
        background: var(--surface3);
        line-height: normal;
    }

    tbody tr {
        background: var(--surface2);
        border-color: var(--surface3);
    }

    .weapon-effects-header {
        align-items: center;
        justify-content: space-between;
        margin-top: var(--step-5);
        margin-bottom: 0.5rem;

        h2 {
            margin: 0;
        }

        select {
            font-size: var(--step--1);
            font-weight: 600;
            padding: 0.75rem 1rem;
            background: var(--surface3);
            border-radius: 0.5rem;
            
            option {
                font-weight: normal;
            }
        }
    }
</style>
