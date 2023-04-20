<script>
    import { userLocale } from "$lib/stores";
    export let abilities, itemType;
    console.log(abilities);
</script>

{#if itemType === "Weapon"}
    <h4>Special Effects</h4>
    <table>
        <thead>
            <tr>
                <th>特効</th>
                <th>大成功時の効果値</th>
                <th>成功時の効果値</th>
                <th>確率</th>
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
    <h4>Abilities</h4>
    <table>
        <thead>
            <tr>
                <th>付与アビリティ候補</th>
                <th>効果名</th>
                <th>効果値</th>
                <th>確率</th>
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
