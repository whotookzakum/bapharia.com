<script>
    import ModelViewer from "$lib/components/ModelViewer.svelte";
    import {
        Element,
        ImagineSlot,
        Stats,
        BattleScore,
        ImagineSkill,
        Abilities,
        Recipe,
        Price,
    } from "./sections";

    export let data;
    $: isBattleImagine = data.imagine_type === 1;
    $: isEnhanceImagine = data.imagine_type === 0;
    // Max level stats for now, but fetching all level stats to add a level selector later
    $: currentLevel = data.imagine_max_level;
    $: battleScore =
        data.imagine_type === 1 ? currentLevel * 10 : currentLevel * 6;
    $: levelStats = data.params.find((set) => set.level === currentLevel);
</script>

<div
    class="grid"
    style="grid-template-columns: 1fr 1fr; gap: 2rem; align-items: flex-start"
>
    <div>
        <Stats values={levelStats} {battleScore} />
    </div>
    <div>
        {#if isBattleImagine}
            <ImagineSkill
                name={{ ja_JP: "猟犬殺し", en_US: "Hound Hunter" }}
                skillType="attack"
                desc={data.desc}
            />
        {/if}
        {#if isEnhanceImagine}
            <ImagineSlot imgSrc={data.slotImg} />
        {/if}
    </div>
</div>
<Recipe recipe={data.recipe} />
<Abilities abilities={data.abilities} />
<!-- <Price sellPrice={data.price_player_sells} /> -->
{#if isBattleImagine}
    <h4>Model</h4>
    <ModelViewer />
{/if}
