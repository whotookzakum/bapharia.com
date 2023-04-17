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
    $: levelStats = data.params.find(
        (set) => set.level === data.imagine_max_level
    )
</script>

<Price sellPrice={data.price_player_sells} />
{#if isBattleImagine}
    <ImagineSkill value={levelStats.skill} />
    <BattleScore value={data.imagine_max_level * 10} />
{/if}
{#if isEnhanceImagine}
    <ImagineSlot imgSrc={data.slotImg} />
    <BattleScore value={data.imagine_max_level * 6} />
{/if}
<Stats values={levelStats} />
<Element imgSrc={data.elementImg} value={levelStats.attribute_value} />
<Abilities abilities={data.abilities} />
<Description text={data.desc} />
<Recipe recipe={data.recipe} />

