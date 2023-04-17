<script>
    import { userLocale } from "$lib/stores";
    export let abilities;
</script>

{#each abilities as ability}
    <div>
        {ability.name[$userLocale]}
        ({ability.probability}%)
        <ul>
            {#each ability.stats as stat}
                {#if stat.value > 0}
                    <li>{stat.name[$userLocale]} {stat.value}</li>
                {/if}
            {/each}
        </ul>
    </div>
{/each}
