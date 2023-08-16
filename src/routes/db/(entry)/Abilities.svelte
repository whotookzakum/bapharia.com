<script>
    import { userLocale } from "$lib/stores";
    export let abilities, itemType;
    const WEAPON_HEADERS = {
        "effect_name": {
            ja_JP: "特効",
            en_US: "Effect"
        },
        "great_success_value": {
            ja_JP: "大成功時の効果値",
            en_US: "Value (Great Success)"
        },
        "success_value": {
            ja_JP: "成功時の効果値",
            en_US: "Value (Success)"
        },
        "probability": {
            ja_JP: "確率",
            en_US: "Probability"
        },
    }

    const IMAGINE_HEADERS = {
        "potential_ability": {
            ja_JP: "付与アビリティ候補",
            en_US: "Ability Name"
        },
        "effect_name": {
            ja_JP: "効果名",
            en_US: "Effect"
        },
        "effect_value": {
            ja_JP: "効果値",
            en_US: "Value"
        },
        "probability": {
            ja_JP: "確率",
            en_US: "Probability"
        },
    }
</script>

{#if itemType === "Weapon"}
    <h2>Special Effects</h2>
    <table>
        <thead>
            <tr>
                <th>{WEAPON_HEADERS.effect_name[$userLocale]}</th>
                <th>{WEAPON_HEADERS.great_success_value[$userLocale]}</th>
                <th>{WEAPON_HEADERS.success_value[$userLocale]}</th>
                <th>{WEAPON_HEADERS.probability[$userLocale]}</th>
            </tr>
        </thead>
        <tbody>
            {#each abilities as ability}
                <tr>
                    <td>{ability.name[$userLocale]}</td>
                    <td
                        >+{ability.big_success_min_value}% ~ {ability.big_success_max_value}%</td
                    >
                    <td
                        >+{ability.success_min_value}% ~ {ability.success_max_value}%</td
                    >
                    <td>{ability.probability}%</td>
                </tr>
            {/each}
        </tbody>
    </table>
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