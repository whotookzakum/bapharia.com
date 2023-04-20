<script>
    import {
        ImagineSlot,
        Stats,
        ImagineSkill,
        Abilities,
        Recipe,
        Price,
        Model,
    } from "./sections";

    export let data;
    $: isBattleImagine = data.imagine_type === 1;
    $: isEnhanceImagine = data.imagine_type === 0;
</script>

<div
    class="grid"
    style="grid-template-columns: 1fr 1fr; gap: 2rem; align-items: flex-start"
>
    <div>
        <Stats 
            levelParams={data.params} 
            battleScoreMultiplier={isBattleImagine ? 10 : 6} 
            maxLevel={data.imagine_max_level} 
        />
    </div>
    <div>
        {#if isBattleImagine}
            <!-- Need name and skillType -->
            <ImagineSkill
                desc={data.desc}
            />
        {/if}
        {#if isEnhanceImagine}
            <ImagineSlot imgSrc={data.slotImg} />
        {/if}
        <h4>Misc</h4>
        <Price sellPrice={data.price_player_sells} />
    </div>
</div>
<Recipe recipe={data.recipe} />
<Abilities abilities={data.abilities} itemType={data.__typename} />
{#if isBattleImagine}
    <!-- <Model /> -->
{/if}
{#if isEnhanceImagine}
    <!-- Artwork of the e. imagine -->
{/if}