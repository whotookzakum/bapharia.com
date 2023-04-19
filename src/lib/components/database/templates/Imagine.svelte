<script>
    import {
        Element,
        ImagineSlot,
        Stats,
        BattleScore,
        ImagineSkill,
        Abilities,
        Description,
        Recipe,
        Price
    } from "./sections";

    export let data;
    $: isBattleImagine = data.imagine_type === 1;
    $: isEnhanceImagine = data.imagine_type === 0;
    // Max level stats for now, but fetching all level stats to add a level selector later
    $: currentLevel = data.imagine_max_level
    $: levelStats = data.params.find(
        (set) => set.level === currentLevel
    )
</script>

<Price sellPrice={data.price_player_sells} />
{#if isBattleImagine}
    <Stats values={levelStats} battleScore={currentLevel * 10} />
{/if}
{#if isEnhanceImagine}
    <ImagineSlot imgSrc={data.slotImg} />
    <Stats values={levelStats} battleScore={currentLevel * 6} />
{/if}
<Recipe recipe={data.recipe} />
<Abilities abilities={data.abilities} />
<Description text={data.desc} />


