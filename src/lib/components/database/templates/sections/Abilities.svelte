<script>
    import { userLocale } from "$lib/stores";
    export let abilities;
</script>

{#if abilities[0]?.big_success_max_value}
    <h4>Special Effects</h4>
{:else}
    <h4>Abilities</h4>
{/if}
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
                    {#if ability.stats}
                        {#each ability.stats as stat}
                            {#if stat.value > 0}
                                {stat.name[$userLocale]} <br />
                            {/if}
                        {/each}
                    {/if}
                </td>
                <td>
                    {#each ability.stats as stat}
                        {#if stat.value > 0}
                            {stat.value} <br />
                        {/if}
                    {/each}
                </td>
                <td>{ability.probability}%</td>
                {#if ability.big_success_max_value}
                    Great Success: +{ability.big_success_min_value}% ~ {ability.big_success_max_value}%;
                    Success: +{ability.success_min_value}% ~ {ability.success_max_value}%
                {/if}
            </tr>
        {/each}
    </tbody>
</table>