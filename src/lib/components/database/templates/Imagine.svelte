<script>
    import {
        Element,
        ImagineSlot,
        Stats,
        BattleScore,
        ImagineSkill,
        Abilities,
        Description
    } from "./sections";

    export let data;
    const isBattleImagine = data.imagine_type === 1;
    const isEnhanceImagine = data.imagine_type === 0;
    // Max level stats for now, but fetching all level stats to add a level selector later
    const levelStats = data.params.find(
        (set) => set.level === data.imagine_max_level
    )
</script>

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
