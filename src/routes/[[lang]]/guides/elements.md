---
title: 'Elements'
author: 'Zakum'
date: '2024-8-9'
category: 'Game Systems'
caption: 'Explanation of the elemental system and a list of elemental effects.'
bannerImg: "/guides/elements/banner.jpg"
thumbImg: "/guides/elements/thumb.webp"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import ElementIcon from '$lib/components/ElementIcon.svelte';
    import ElementsTable from '$lib/components/guides/ElementsTable.svelte';
    import EleResistDamageTable from "$lib/components/guides/EleResistDamageTable.svelte";
    import Formula from "$lib/components/guides/Formula.svelte"
    import { assetUrl } from "$lib/utils"
</script>

## The Six Elements
Players can use 6 elements in BLUE PROTOCOL: Fire, Ice, Thunder, Earth, Light, and Dark. They can be utilized through elemental skills, elemental weapons, and elemental [Battle Imagine](/guides/imagine#battle-imagine). Elements influence combat via their status ailments and resistance/weakness.

## Elemental Charge
Attacking with elements will fill the **Elemental Charge gauge** underneath an enemy's health bar. The element that has contributed the *most* elemental charge at any point will be the active element shown on the gauge. Charge can be accumulated even if the element you are using doesn't match the active element.

Filling the gauge to level 1 or 2 will apply an **Elemental Status Ailment** on the target, and level 3 will trigger an **Elemental Burst** and begin **Burst Bonus Time**.

<ElementsTable />

<small class="mt-4 block">
    Earth Lv. 1 and Lv. 2 are part of the buff/debuff category in the damage formula.<br>
    Named Enemies and Raid Bosses take 75% reduced damage from Fire Lv. 1 and Lv. 2.
</small>

<StickyNote type="tip">
    Fire: Level 1 and 2 burn damage is affected by fire resistance at the time that the debuff was applied. After the burn is applied, the damage will not change even if the enemy's fire resistance changes. Aim to apply fire resistance down debuffs before the gauge reaches Level 1 or Level 2.
</StickyNote>

When raising the gauge level, the previous status ailment is replaced by the new one. The active element can change at any point up until level 3, however the status ailment can only change after reaching the next level, i.e. Fire Lv. 1 → Earth Lv. 2.

If the gauge is not sufficiently charged within a certain amount of time, it will reset to 0.

| Gauge Level      | Elemental Charge | Reset Condition                                                            |
|------------------|------------------|----------------------------------------------------------------------------|
| None             | 0-99             | If no charge is accumulated within 60 seconds<br>(20 seconds on players)      |
| Lv. 1            | 100-299          | If the next level is not reached within 60 seconds<br>(20 seconds on players) |
| Lv. 2            | 300-599          | If the next level is not reached within 60 seconds<br>(20 seconds on players) |
| Lv. 3            | 600              | |

### Elemental Charge Accumulation
Elemental Charge accumulation is influenced by your weapon element, skill element, elemental buffs, and the enemy's elemental resistance. The weapon stat "Elemental Attack" does not influence elemental charge. Elemental buffs are additive.

<Formula
    name="chargeAccumFormula"
    style="--slider-max-width: 360px"
    tabs={[{
        label: "Non-elemental Attack",
        value: "non-elemental",
        formula: `
            \\text{Elemental Charge Accumulation} = 
            (7 \\times \\text{Base Multiplier}) 
            \\times \\text{Elemental Resistance}
            \\times \\text{Elemental Buffs}
        `
    },
    {
        label: "Elemental Attack",
        value: "elemental",
        formula: `
            \\text{Elemental Charge Accumulation} = 
            (7 \\times \\text{Base Multiplier} \\times 0.3 \\times \\text{Attack's Elemental Charge}) 
            \\times \\text{Elemental Resistance}
            \\times \\text{Elemental Buffs}
        `
    }]}
/>

<StickyNote type="note">
    Named Enemies, Raid Bosses, and enemies in Missions can have a multiplier that reduces the charge accumulation, i.e. 0.16x accumulation in Survey/Advanced Survey and 0.33x in Rush Battle.
</StickyNote>

### Burst Bonus Time & Burst Finish
Activating an Elemental Burst will trigger *Burst Bonus Time* for **10 seconds**. Players and Battle Imagine will deal increased elemental damage, and Level 2 elemental effects are removed. The damage boost is determined by the element of the attack—**not the element of the burst**—and prioritizes skill element over weapon element.

<table>
    <thead>
        <tr>
            <th>Elements</th>
            <th>Player Damage</th>
            <th>Battle Imagine Damage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="flex gap-2">
                    <ElementIcon id={1} width="36" height="36" />
                    <ElementIcon id={2} width="36" height="36" />
                    <ElementIcon id={5} width="36" height="36" />
                    <ElementIcon id={6} width="36" height="36" />
                </div>
            </td>
            <td>+15%</td>
            <td>+20%</td>
        </tr>
        <tr>
            <td>
                <div class="flex gap-2">
                    <ElementIcon id={3} width="36" height="36" />
                    <ElementIcon id={4} width="36" height="36" />
                </div>
            </td>
            <td>+10%</td>
            <td>+15%</td>
        </tr>
        <tr>
            <td>
                <img src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_Empty.webp")} alt="No element" width="36" height="36">
            </td>
            <td>+0%</td>
            <td>+10%</td>
        </tr>
    </tbody>
</table>

<small>Burst Bonus Time is part of the buff/debuff category in the damage formula.</small>

Alongside Burst Bonus Time, the Elemental Charge gauge will turn into a **Burst Finish Gauge** with a level 1 indicator next to it. Attacking with elements will rapidly fill the gauge. Levels are increased by 1 each time the gauge is filled, up to level 5.

| Gauge Level   | Charge Required | Total Charge Required |
|---------------|-----------------|-----------------------|
| Level 1 → 2   | 30              | 30                    |
| Level 2 → 3   | 30              | 60                    |
| Level 3 → 4   | 40              | 100                   |
| Level 4 → 5   | 40              | 140                   | 

After Burst Bonus Time ends, a **Burst Finish** will occur, dealing damage based on the gauge's level. Some elements will also apply buffs or debuffs after a Burst Finish.

<figure>
    <video src="/guides/elements/burstfinish.mp4" controls preload="none" poster="/guides/elements/burstfinishposter.webp">
        <track kind="captions">
    </video>
    <figcaption>Demonstration of the Elemental Burst and Burst Bonus Time mechanics. The Burst Finish Gauge starts to flash white as Burst Bonus Time comes to an end.</figcaption>
</figure>

<StickyNote type="note">
    After an Elemental Burst Finish (or Elemental Burst on players), there is a 30 second cooldown before Elemental Charge can be accumulated again.
</StickyNote>

<StickyNote type="note">
    Damage from Elemental Bursts and Burst Finishes are unaffected by defense and elemental resistance, so debuffing a target will not increase the damage of these effects. Named Enemies and Raid Bosses take 75% reduced damage from Elemental Bursts and Burst Finishes.
</StickyNote>

## Elemental Resistance
Players and enemies both have elemental resistance values for each element, influencing damage taken and elemental charge buildup. Negative resistance values indicate that the target is weak to that element. 

<Formula
    name="eleResistDmg"
    tabs={[
        {
            label: "Visualize",
            value: "graph",
            component: "EleResistChart"
        },
        {   
            label: "Formula",
            value: "formula",
            formula: `
                \\text{Base Elemental Resistance} \\leq 0:
                \\\\
                \\text{Damage Multiplier} = 1 - (0.04 \\times \\text{Elemental Resistance})
                \\\\
                \\text{Elemental Charge Multiplier} = 1 - (0.04 \\times \\text{Elemental Resistance} \\div 2)
                \\\\ \\text{}
                \\\\
                \\text{Base Elemental Resistance} > 0:
                \\\\
                \\text{Damage Multiplier} = 1 - (0.008 \\times \\text{Elemental Resistance})
                \\\\
                \\text{Elemental Charge Multiplier} = 1 - (0.008 \\times \\text{Elemental Resistance} \\div 2)
            `
        }
    ]}
/>

<small class="mt-4 block accent1">
    Base Elemental Resistance refers to the target's Elemental Resistance before any buffs or debuffs are applied.<br>
    Debuffs that reduce Elemental Resistance are additive to the target's elemental resistance stat.<br>
    <!-- Trinity Shot (-5) + Weakness element (-5) = -10 resistance -->
    The effect on Elemental Charge accumulation is half of that on damage, i.e. +20% damage is +10% elemental charge.<br>
    The dashed lines are theoretical and need testing.
</small>

Elemental Resistance debuffs lose 80% of their potency against a target's resistant element (notice in the formula above that the coefficient gets reduced to 1/5—from 0.04 to 0.008—when the enemy is resistant to the element). 

For example, on an enemy that is weak to fire, using Spell Caster's Trinity Shot debuff would increase fire damage from 120% to 140%. On an enemy that is resistant to fire, Trinity Shot would only increase fire damage from 80% to 84%. This means it is very effective to target an enemy's elemental weakness, and it is exceedingly difficult to overcome their elemental resistance.

<StickyNote type="tip">
    Chevron icons next to your damage number indicate that the enemy has negative resistance against either your weapon or skill element. These icons are also influenced by debuffs that reduce an enemy's elemental resistance.

    <div class="flex">
        <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness1.webp")} alt="Weakness 1" width="48" height="84" />
        <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness2.webp")} alt="Weakness 2" width="48" height="84" /> 
        <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness3.webp")} alt="Weakness 3" width="48" height="84" /> 
    </div>
</StickyNote>

## Weapon-Skill Interaction
Skill element and weapon element **both** factor into your damage in regards to elemental weaknesses. In other words, on an enemy that is weak against fire, you will do more damage using a fire skill + fire weapon than a fire skill + ice weapon. The skill will retain its element (fire) even if equipped with a different element weapon (ice).

If the weapon and skill **elements match**, the weapon's Elemental Attack stat is added to your attack when calculating damage. **Non-elemental skills** will always get this bonus because they **inherit the weapon element**.

Most classes have a set of non-elemental skills if they wish to use their weapon's element.

<StickyNote type="warning">
    Spell Caster's tactical skills are almost entirely elemental, thus they may not be able to utilize certain elements effectively. 
</StickyNote>

If the weapon and skill **elements do not match**, damage from resistance is calculated at a **30/70 ratio of weapon/skill**. In other words, you may only get a portion of the damage increase/decrease mentioned in the [Elemental Resistance section](/guides/combat#elemental-resistance) based on which elements you use. Additionally, Elemental Charge is accumulated for both elements.

<details>
    <summary style="color: purple">Formula Examples</summary>
    <p class="box">
        Enemy resistant to Fire, not resistant to Ice; using Fire Weapon and Ice Skill.<br>
        <code style="color:purple">Fire Weapon (0.8 damage) × (0.3 ratio) + Ice Skill (1.0 damage) × (0.7 ratio) = 0.94</code>
    </p>
    <p class="box">
        Enemy weak to Ice, not resistant to Fire; debuffed to increase damage; using Fire Weapon and Ice Skill<br>
        <code style="color:purple">Fire Weapon (1.2 damage) × (0.3 ratio) + Ice Skill (1.5 damage) × (0.7 ratio) = 1.41</code>
    </p>
</details>

<EleResistDamageTable />