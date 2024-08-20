---
title: 'Stats'
author: "Zakum"
date: '2024-8-19'
category: 'Game Systems'
caption: 'Breakdown of the player stats in BLUE PROTOCOL.'
bannerImg: "/guides/combat/banner.jpg"
thumbImg: "/guides/combat/thumb.jpg"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import StatsTable from '$lib/components/guides/StatsTable.svelte';
    import BaseStatsConversionTable from '$lib/components/guides/BaseStatsConversionTable.svelte';
    import LevelDifferenceTable from '$lib/components/guides/LevelDifferenceTable.svelte';
    import StaminaConsumptionTable from "$lib/components/guides/StaminaConsumptionTable.svelte";
    import ClassIcon from "$lib/components/ClassIcon.svelte"
    import Formula from "$lib/components/guides/Formula.svelte"
    import { assetUrl } from "$lib/utils";
</script>

## Overview
Each class has various stats that can be altered by equipping and upgrading [Weapons](/guides/weapons-and-plugs) and [Imagine](/guides/imagine). Base Stats in particular have different effects based on whether you are playing a physical class or a magic class.

<StatsTable />

## HP
Hit Points (or Health Points). When your HP reaches 0, your character will be downed and can be resurrected by other players interacting with you. Rescue time is decreased as more players interact with a downed player or through passive effects such as [First Aid](/classes/6/skills#106205).

In dungeons, you will automatically revive after some time if not rescued by others. Dungeons often have **limited revives shared between all party members**—these will not be consumed if the downed player is rescued by party members. If a party member is defeated with 0 lives left, the party will fail the dungeon and be kicked out, forfeiting all rewards.

In fields, you can remain downed and wait for someone to rescue you, or can choose to respawn after a short timer. ~~If you choose to respawn, you will have the Weak debuff, decreasing your Max HP and movement speed.~~

When in fields or free exploration dungeons, **HP will continuously recover over time** while not in combat (1% of max HP every 3 seconds). While sitting (on an object or via an emote), you will recover 5% of max HP every 3 seconds. Visiting **a village with a warp gate** or **sitting near a campfire** will allow you to recover 5% of max HP every second. Natural HP recovery is disabled in dungeons.

HP can be recovered through various means such as consumables, [skills](/guides/combat#skills), [buffs](/guides/combat#buffs--debuffs), suppliers, and [Battle Imagine](/guides/imagine#battle-imagine).

## Stamina
Stamina is consumed when performing certain actions. Certain Skills and Imagine abilities can increase Max Stamina or reduce Stamina Consumption.

<StaminaConsumptionTable />

### Dodge & Perfect Dodge
Dodging provides a brief window of invulnerability, and can be used to cancel some player animations. To perform a **dodge attack**, press the basic attack and class action keys simultaneously after dodging. 

<StickyNote type="note">
    In some patches, it was possible to dodge while mid-air, but this is currently disabled at the time of writing this guide.
</StickyNote>

If an enemy hits you during dodge invulnerability, you will perform a **perfect dodge**, indicated by a blue particle effect. Performing a dodge attack immediately after a perfect dodge will **increase the damage of the dodge attack** and may provide extra benefits such as restoring Shield Gauge (Aegis Fighter) or increasing dodge attack size (Spell Caster). 

| Class | Perfect Dodge Attack Effect |
|-------|-----------------------------|
| <ClassIcon id={12} style="background-color: var(--outline-color)" /> | Increase damage of the dodge attack and recover Shield Gauge |
| <ClassIcon id={21} style="background-color: var(--outline-color)" /> | Increase damage, stagger effect, knockback, and Heat Gauge accumulation of the dodge attack shockwave |
| <ClassIcon id={6} style="background-color: var(--outline-color)" /> | Increase damage of the dodge attack |
| <ClassIcon id={20} style="background-color: var(--outline-color)" /> | Increase damage of the dodge attack and apply Void and Entanglement Marks |
| <ClassIcon id={19} style="background-color: var(--outline-color)" /> | Increase damage and stagger effect of the dodge attack |
| <ClassIcon id={11} style="background-color: var(--outline-color)" /> | Increase damage and size of the dodge attack and recover EP Gauge |
| <ClassIcon id={7} style="background-color: var(--outline-color)" /> | Increase damage of the dodge attack |

### Springboard Jump
A **springboard jump** can be performed while pressing the jump key while in the air. When performed next to an enemy, you will jump off the enemy for added height. Melee classes will jump straight up, and ranged classes will jump backwards. The enemy may stagger/flinch and aggro the player. 

Jumping and Springboard jumping can be used to cancel some skill animations even when no enemy is nearby. 

### Plunge Attack & Elevation Bonus
A **plunge attack** (or assault attack) can be performed by melee classes by pressing the basic attack and class action keys simultaneously while midair. If performed from a high enough altitude, the attack will receive an **elevation bonus**, dealing extra damage and providing extra benefits such as binding enemies (Aegis Fighter) or applying a movement speed down debuff (Heavy Smasher). 

| Class | Elevation Bonus Effect |
|-------|------------------------|
| <ClassIcon id={12} style="background-color: var(--outline-color)" /> | Increase damage of the plunge attack and apply Bind |
| <ClassIcon id={20} style="background-color: var(--outline-color)" /> | Increase size and damage of the plunge attack, increase stagger effect of the plunge attack's second hit, and apply a Burst Mark |
| <ClassIcon id={19} style="background-color: var(--outline-color)" /> | Increase damage of the plunge attack, which gains a second, wide-range hit that applies Reduced Movement Speed |
| <ClassIcon id={7} style="background-color: var(--outline-color)" /> | Increase damage of the dodge attack |

<StickyNote type="tip">
    Springboard jumping provides enough height to grant the elevation bonus.
</StickyNote>

### Rebound
Finally, all classes can utilize **Rebound** (Ukemi) by pressing the dodge key right when you land after getting knocked down. When performed correctly, your character will perform a kip-up to get up faster than usual.

<figure>
    <img src="/guides/combat/ukemi by panke.jpg" alt="Explanation of Ukemi from the in-game handbook">
    <figcaption>Screenshot of the in-game handbook explaining Ukemi (by <a href="https://twitter.com/panke219/status/1643933953190154243" rel="noopener nofollow noreferrer" target="_blank">Panke</a>)</figcaption>
</figure>

Learn more about each class' perfect dodge attack effects, plunge attack, and animation cancels on their [class page](/classes).

## Level
Raising your class level will increase your stats and reduce the effects of equipment **level syncs** (details below). By raising your Adventurer Rank, you can increase the maximum level cap for your character.

The **level difference** between a player and an enemy influences how much **damage and elemental charge** a player will deal and **EXP** they will gain by defeating that enemy. Your attacks will do 0 damage against enemies that are 8 or more levels higher than you (thus you won't be eligible for drops and won't be able to activate certain effects that require hitting an enemy). 

<LevelDifferenceTable />

### Level Sync
All equipment can be worn at any level, however if an item's max level exceeds your class level the item will be level synced down, reducing its stats (besides VIT). Passive lines, plugs, and Battle Imagine skills are unaffected by Level Sync.

Since VIT is not level synced, you will end up with higher HP and defense than usual. 

Level syncs also exist in dungeons, forcefully adjusting all high level players' stats to an appropriate level for the content.

## Battle Score
Battle Score is the rating of a player's equipment. While it doesn't directly convey how powerful a player is, it represents the level of equipment a player is using.

Level and Battle Score are common requirements to entering [Missions](/guides/missions).

## Adventurer Rank
Raising your Adventurer Rank allows you to accept new quests (including continuing the main story quest), raises your maximum level cap, and provides some goodies. To raise your Adventurer Rank, you need to complete a Rank Up [Adventure Board](/guides/adventure-boards). Some ranks also require you to pass an exam (speak to NPC Millie at the Reclamation Bureau).

## Enemy Stats
Enemy HP, ATK, and DEF stats scale based on enemy level. In Missions, these stats are further multiplied by a Mission Scale.

<Formula 
    formula={`
        \\text{Enemy Stat} =
        (\\text{Base Stat} + \\text{Stat Factor} \\times (\\text{Enemy Level} - 1))
        \\times \\text{Mission Scale}
    `}
/>

Other enemy stats:
- EXP: the amount of EXP an enemy gives--different from the amount of EXP you *gain* as a player (based on [level](/guides/stats#level) difference). There is a value at lv1 and lv100, with a curve value to interpolate numbers in between. 
- Drops: item IDs and drop rates/percentages with amounts.
- Elemental Resistance: see [Elements](/guides/elements#elemental-resistance).
- Abnormal Status Resistances: see [Status Ailments](/guides/status-ailments).
- Slash/Thrust/Blow Resistance: every attack is one of these 3 types. Enemies may have 25, 0, or -25 resistance; see [Combat](/guides/combat#damage-formula).
- Race & Characteristics: found in the in-game Adventurer Log and includes things such as Tripod-type, Floating, and Bapharia which are used in [Weapon Special Effect](/guides/equipment#weapon-stats) bonuses such as Tripod Killer G1, Bapharia Killer G2, etc. <!-- Tripod-class, Boar-class? -->

<!-- scale, weight, resist_rate, resist_dot, reaction_leveldiff: currently unknown. reaction can be 0, 1, 2, 3 but also unknown. -->

## Expert Rank
Expert Rank is a system where leveling up each class to 50/60/70/80 grants a passive stat boost to all classes. The stats vary per class.

<img src="/guides/stats/stats-expert-rank.jpg" alt="Expert Rank UI">