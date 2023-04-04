<script>
    export let data;
</script>

<main>
    <h1>Imagine</h1>
    {#each data.imagines as imagine}
        <div class="box surface">
            <div class="flex" style="gap: 0.5rem">
                <img src={imagine.thumb} alt="" />
                <div class="grid">
                    <h5>{imagine.name}</h5>
                    <span>{imagine.id}</span>
                </div>
            </div>
            <div>Lv. {imagine.imagine_max_level}</div>
            <div>
                Sells for {imagine.price_player_sells} 
                <img src="/UI/Common/UI_CmnMoney1.png" alt="" width="24" height="24" style="margin: -7px -4px">
            </div>
            {#if imagine.slot}
                <div>Slot: <img src={imagine.slot} alt="" width="32" height="32"></div>
            {/if}
            
            {#if imagine.imagine_type === 0}
                <div>Battle Score {imagine.imagine_max_level * 6}</div>
            {:else}
                <div>Battle Score {imagine.imagine_max_level * 10}</div>
            {/if}

            <div>Element: <img src={imagine.element} alt="" width="24" height="24"> {imagine.params[imagine.params.length - 1].attribute_value}</div>
            <div>ATK {imagine.params[imagine.params.length - 1].offensive_power}</div>
            <div>DEF {imagine.params[imagine.params.length - 1].defensive_power}</div>
            <div>STR {imagine.params[imagine.params.length - 1].str}</div>
            <div>VIT {imagine.params[imagine.params.length - 1].vit}</div>
            <div>DEX {imagine.params[imagine.params.length - 1].dex}</div>
            <div>MND {imagine.params[imagine.params.length - 1].mnd}</div>
            <div>INT {imagine.params[imagine.params.length - 1].int}</div>
            <div>STR {imagine.params[imagine.params.length - 1].str}</div>
            
            <hr>
            {#each imagine.abilities as ability}
                <div>
                    {ability.name} {ability.probability}%
                    {#each ability.stats as stat}
                        {stat.name} {stat.value}
                    {/each}
                </div>
            {/each}

            <hr>
            <div>Req. Adventurer rank {imagine.recipe.adventurer_rank} to craft</div>
            {#each imagine.recipe.materials as material}
                <div>{material.name} x{material.amount} ({material.source})</div>
            {/each}
            <div>LUNO {imagine.recipe.price}</div>
            
            <hr>
            <div>Skill Power: {imagine.params[imagine.params.length - 1].skill}</div>
            <div>{imagine.desc}</div>
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
