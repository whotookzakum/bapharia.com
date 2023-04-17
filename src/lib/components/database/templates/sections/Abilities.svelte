<script>
    import { userLocale } from "$lib/stores";
    export let abilities;
</script>

{#if abilities[0]?.big_success_max_value}
    <h4>Special Effects</h4>
{:else}
    <h4>Abilities</h4>
{/if}
{#each abilities as ability}
    <div>
        {ability.name[$userLocale]}
        ({ability.probability}%)
        {#if ability.stats}
            <ul>
                {#each ability.stats as stat}
                    {#if stat.value > 0}
                        <li>{stat.name[$userLocale]} {stat.value}</li>
                    {/if}
                {/each}
            </ul>
        {/if}
        {#if ability.big_success_max_value}
            Great Success: +{ability.big_success_min_value}% ~ {ability.big_success_max_value}%;
            Success: +{ability.success_min_value}% ~ {ability.success_max_value}%
        {/if}
    </div>
{/each}
