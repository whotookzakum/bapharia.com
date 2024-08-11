---
title: 'Combat'
author: "Zakum"
date: '2023-6-5'
category: 'Game Systems'
caption: 'An overview of all combat-related mechanics.'
bannerImg: "/guides/combat/banner.jpg"
thumbImg: "/guides/combat/thumb.jpg"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import StatsTable from '$lib/components/guides/StatsTable.svelte';
    import BaseStatsConversionTable from '$lib/components/guides/BaseStatsConversionTable.svelte';
    import LevelDifferenceTable from '$lib/components/guides/LevelDifferenceTable.svelte';
    import StaminaConsumptionTable from "$lib/components/guides/StaminaConsumptionTable.svelte";
    import AbnormalStatusesTable from "$lib/components/guides/AbnormalStatusesTable.svelte";
    import PartyChainTable from "$lib/components/guides/PartyChainTable.svelte";
    
    import IconMask from "$lib/components/IconMask.svelte"
    import ClassIcon from "$lib/components/ClassIcon.svelte"
    import { assetUrl } from "$lib/utils";
</script>

## Intro
This guide covers some general aspects of BLUE PROTOCOL's combat systems. **Make sure to also read the [Stats](/guides/stats) and [Elements](/guides/elements) guides for a better overall understanding.**

<!-- **Ability** is a common term in the game referring to a passive effect. It's used in Skills to describe passive skills (such as Class-Shared Ability), in [Weapon "Ability" Plugs](/guides/weapons-and-plugs#ability-plugs), in [Battle Imagine and Enhance Imagine](/guides/imagine) (referring to their passive stat line). Just keep in mind that the keyword **Ability = passive**. -->

## Aggro & Combat Status
The battle HUD has an icon whose color indicates your state of aggro. This guide will use the phrasing "in combat" to refer to either of the two states.

| Icon | State |
|------|-------|
| <IconMask src="/UI/HateAlert/UI_HateAlertIcon1.webp" width="80" height="40" style="background: var(--color-sensed)" /> | An enemy is aware of your presence |
| <IconMask src="/UI/HateAlert/UI_HateAlertIcon1.webp" width="80" height="40" style="background: var(--color-targeted)" /> | An enemy is actively targeting you |

When in combat, various actions consume stamina (see [stamina](/guides/stats#stamina)). 

When your weapon is unsheathed, your jump height is reduced and you cannot sprint until you sheathe your weapon. Your weapon can be sheathed by pressing the interact key, summoning a mount, or by initiating sprinting.

## Skills
Skills can be unlocked by leveling up. You can equip the following: 

Active skills: 
- 1 basic attack
- 1 class action (subaction)
- 8 tactical skills
- 1 ultimate skill
- 2 battle imagine
- 2 (passive) class-restricted abilities
- 2 (passive) class-shared abilities
- all unlocked base abilities

<img src="https://cdn.discordapp.com/attachments/862607211981045781/1092070007413940244/image.png" alt="Twin Striker skills page">

<StickyNote type="tip">
    Basic attacks can have variations that perform different attacks and provide buffs. After leveling up your basic attack, try using it while holding a directional key!
</StickyNote>

Learn more about the class actions and class abilities on the [classes page](/classes).

The developers have stated that they prefer to add more skill diversity to existing classes than create new classes that aren't very unique.

### Skill Variants
At G3+, skills have three variations: Normal, Alpha, and Beta variants. These variants slightly alter how a skill works, such as increasing the number of hits, adding additional buffs/debuffs, and more.

**Alpha skills** can be purchased with class talismans (available from [Class Adventure Boards](/guides/adventure-boards#class-boards)) at the Class Master. To unlock the shop, complete all of his [quests](/db/quests/SQ101_145) (you need to be Level 50 to purchase from the shop).

**Beta skills** have a chance of dropping in **Survey & Advanced Survey Missions** after you reach **level 50**. Only the skills that you currently have equipped on your palette will be eligible for a beta skill drop. The drop rates are notoriously low.

## Buffs & Debuffs
Abnormal statuses that can be applied to players or enemies. Debuffs from elemental effects can be found in the [elements](/guides/combat#elements) section.

<AbnormalStatusesTable />

## EXP & Drops
When an enemy is defeated, **all players** who dealt at least 1 damage to the enemy will be **eligible to receive full EXP and drops**. In party play, **all party members** will be eligible if at least one of their members dealt at least 1 damage to the enemy.

<StickyNote type="warning">
    Players that are 8 or more levels below the enemy level will not be eligible for rewards, regardless of other party members' levels. 
</StickyNote>

<!-- TODO: be in range of the enemy or in range of the player who defeated it? -->
**In order to receive rewards, players must be within a certain distance of the enemy.**

EXP gain is scaled based on your [level difference](/guides/combat#level) with the enemy. Enemies in Missions do not give EXP.

**Item drops** are determined on a **per-player** basis. Players may have differing drop rate multipliers (via consumable items and [liquid memories](/guides/liquid-memories)). Item drops go straight to the player's inventory (consumables) or storage (non-consumables). 

<details>
    <summary style="color: purple">Example</summary>
    <p class="box">
        If you and I are collecting rare drops in the same party, there may be times where one of us gets the drop and the other doesn't. If I'm using a <a href="/db/item/123000110" target="_blank" rel="noopener noreferrer nofollow">G2 Drop-Drop</a> and you are not, my drop rate for items will be 1.3x and yours will be 1x.
    </p>
</details>

**Treasure chest drops** are determined on a **per-party** basis, using the drop rate of the party member with the highest drop rate. Solo players are considered as being in a party of one. When a chest drops, it is visible to other party members as well. Treasure chests *must be opened* to receive the rewards inside and its **contents are determined on a per-player** basis. 

<details>
    <summary style="color: purple">Example</summary>
    <p class="box">
        If you and I are in the same party and I'm using a <a href="/db/item/123000110" target="_blank" rel="noopener noreferrer nofollow">G2 Drop-Drop</a> and you are not, your drop rate for chests will also be 1.3x. In regards to chest contents, an elite monster chest might give you 2 <a href="/guides/imagine#recipes" target="_blank" rel="noopener noreferrer nofollow">Idea</a> while I only get 1 (elite monsters have a 100% chance of dropping a chest, but the chest can contain different rewards).
    </p>
</details>
<!-- TODO: do drop rates stack in dungeons? test 6x drop drops in dungeons -->

## Party Chain
<!-- TODO: confirm that party chain affects healing? -->
The party chain is a combo count of all party members' hits. As it accumulates, your party gains a slight increase in damage and self-healing effects. The higher the chain count, the less time you have to successfully perform another attack before the chain ends. The party chain will reset to 0 if no successful attacks are detected before the timer ends.

If the chain is reset while over 50 hits, there will be a 10 second cooldown before starting another chain. Otherwise, the chain can instantly be reinitiated.

Raids require higher chain count for some effects because there are more players. In raids, if the chain is reset while over 250 hits, the cooldown will be 30 seconds.  

If you are too far away from the party leader, you won't receive party chain effects. (Needs confirmation if its based on distance from party leader or between any/all party members).

Elemental damage-over-time debuffs do not count towards the party chain.

<PartyChainTable />

## Parts Destruction
Some enemies have designated parts that can be destroyed, downing the enemy for a brief period. Attacking this point will deal increased damage. This is separate from Blast Archer's [Weak Point Targeting](/classes/6#weak-point-targeting).

## PvP
**There is no player versus player system in BLUE PROTOCOL.** PvP refers to Party vs Party—player party vs enemy AI party. Similar to players, enemies will cooperate and try to take down you and your allies. 

Enemy leaders will be indicated by a star **☆** preceeding their name, and they will give orders to other enemies.