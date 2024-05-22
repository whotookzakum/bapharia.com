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
</script>

{#if itemType === "Weapon"}
    <div class="table-wrapper">
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
                {#each abilities as ability}
                    <tr>
                        <td>{ability.text.name}</td>
                        <td>
                            {#each ability.stats as stat}
                                {stat.text.name}
                            {/each}
                        </td>
                        <td>
                            {#each ability.stats as stat}
                                +{stat.big_success_min_value}% ~ {stat.big_success_max_value}%
                            {/each}
                         </td>
                        <td>
                            {#each ability.stats as stat}
                                +{stat.success_min_value}% ~ {stat.success_max_value}%
                            {/each}
                        </td>
                        <td>{ability.probability}%</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
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
    table {
        font-size: var(--step--1);
        white-space: nowrap;
        border-radius: 0.5rem;
    }

    thead {
        line-height: normal;
    }
</style>
