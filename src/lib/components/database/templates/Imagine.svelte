<script>
    import {
        ImagineSlot,
        Stats,
        ImagineSkill,
        Abilities,
        Recipe,
        Price,
        Model,
        LargeImage
    } from "./sections";

    export let data;
    $: isBattleImagine = data.imagine_type === 1;
    $: isEnhanceImagine = data.imagine_type === 0;
</script>

<div
    class="grid"
    style=""
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
    <!-- use BattleL image as poster -->
    <Model modelSrc="/BigMommyDragonTities.glb" posterImg={data.thumb.replace("Battle", "BattleL")} />
{/if}
{#if isEnhanceImagine}
    <h4>Graphic and Scene</h4>
    <LargeImage noHeader imgSrc={data.thumb.replace("Picture", "PictureL")} />
    <LargeImage noHeader imgSrc={data.thumb.replace("Picture", "FullImage")} fullWidth width="1920" height="1080" />
{/if}

<style lang="scss">
    .grid {
        grid-template-columns: 1fr 1fr; 
        gap: 2rem; 
        align-items: flex-start;
    }
</style>