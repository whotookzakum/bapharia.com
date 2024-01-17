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
</script>

BLUE PROTOCOL has several aspects of combat that contribute to its fast-paced action. Let's take a look at each one.



## 🧮 Stats
Each class has various stats that can be altered by equipping and upgrading [Weapons](/guides/weapons-and-plugs) and [Imagine](/guides/imagine). Base Stats in particular have different effects based on whether you are playing a physical class or a magic class.

<img src="https://cdn.discordapp.com/attachments/862600196704829443/1092825223226732555/image.png" alt="Battle Build page showing stats and loadout">

<StatsTable />

For example, increasing STR on a physical class will increase its ATK as well (will be reflected on the character page). Refer to the table below for the "true value" formulas. **Decimal values will be truncated**.

<BaseStatsConversionTable />

### ❤️ HP

Hit Points (or Health Points). When your HP reaches 0, your character will be downed and can be resurrected by other players interacting with you. Rescue time is decreased as more players interact with a downed player. 

In dungeons, you will automatically revive after some time if not rescued by others. Dungeons may have **limited revives shared between all party members**—these will not be consumed if the downed player is rescued by party members. If a party member is defeated with 0 lives left, the party will fail the dungeon and be kicked out, forfeiting all rewards.

In fields, you can remain downed and wait for someone to rescue you, or can choose to respawn after a short timer. ~~If you choose to respawn, you will have the Weak debuff, decreasing your Max HP and movement speed.~~

When in fields or free exploration dungeons, **HP will continuously recover over time** while not in combat (1% of max HP every 3 seconds). While sitting (on an object or via an emote), you will recover 5% of max HP every 3 seconds. Visiting **a village with a warp gate** or **sitting near a campfire** will allow you to recover 5% of max HP every second. Natural HP recovery is disabled in dungeons.

HP can be recovered through various means such as [skills](/guides/combat#skills), [party chain](/guides/combat#party-chain), [buffs](/guides/combat#abnormal-statuses), suppliers, and [Battle Imagine](/guides/imagine#battle-imagine).

### 🏃‍♀️ Stamina
Stamina is consumed when performing certain actions. Stamina consumption can be reduced by certain skills and Enhance Imagine [abilities](/guides/imagine#abilities-1). Max stamina can be increased by certain skills, such as Heavy Smasher's [passive skill](/classes/19/skills#stamina-up), and Enhance Imagine abilities.

<StaminaConsumptionTable />

Dodging provides a brief window of invulnerability, and can be used to cancel some player animations. To perform a **dodge attack**, press the basic attack and class action keys simultaneously after dodging. 

<StickyNote type="note">
    Dodges cannot be performed in the air.
</StickyNote>

If an enemy hits you during dodge invulnerability, you will perform a **perfect dodge**, indicated by a blue particle effect. Performing a dodge attack immediately after a perfect dodge will **increase the damage of the dodge attack** and may provide extra benefits such as restoring Shield Gauge (Aegis Fighter) or increasing dodge attack size (Spell Caster). 

<!-- TODO: List all perfect dodge attack effects? -->

A **springboard jump** can be performed while pressing the jump key while in the air and near an enemy—you will jump off the enemy for added height. Melee classes will jump straight up, and ranged classes will jump backwards. The enemy will be staggered and aggro the player. 

Jumping and Springboard jumping can be used to cancel some animations even when no enemy is nearby. 

A **plunge attack** (or assault attack) can be performed by melee classes by pressing the basic attack and class action keys simultaneously while midair. If performed from a high enough altitude, the attack will receive an **elevation bonus**, dealing extra damage and providing extra benefits such as binding enemies (Aegis Fighter) or applying a movement speed down debuff (Heavy Smasher). 

<!-- TODO: List all plunge attack effects? -->
<!-- TODO: do ranged classes still have elevation bonus? -->

<StickyNote type="tip">
    Springboard jumping provides enough height to grant the elevation bonus.
</StickyNote>

Finally, all classes can utilize **Rebound** (Ukemi) by pressing the dodge key right when you land after getting knocked down. When performed correctly, your character will get up faster than usual.

<figure>
    <img src="/guides/combat/ukemi by panke.jpg" alt="Explanation of Ukemi from the in-game handbook">
    <figcaption>Screenshot of the in-game handbook explaining Ukemi (by <a href="https://twitter.com/panke219/status/1643933953190154243" rel="noopener nofollow noreferrer" target="_blank">Panke</a>)</figcaption>
</figure>

Learn more about each class' perfect dodge attack effects, plunge attack, and animation cancels on their [class page](/classes).

### 📶 Level
Raising your class level will increase your stats and reduce the effects of equipment **level syncs** (details below). By raising your Adventurer Rank, you can increase the maximum level cap for your character.

The **level difference** between a player and an enemy influences how much **damage** a player will deal and **EXP** they will gain by defeating that enemy. For enemies that are 8 or more levels higher than you, your attacks will do 0 damage (thus you won't be eligible for drops and won't be able to activate certain effects that require hitting an enemy). 

<LevelDifferenceTable />

### 💯 Battle Score
Battle Score is the rating of a player's equipment. While it doesn't directly convey how powerful a player is, it represents the level of equipment a player is using.

| Equipment           | Post-Limit Break Update                       | Pre-Limit Break Update |
|---------------------|-----------------------------------------------|------------------------|
| **Weapon**          | (60 × Item Level) + (160 × Limit Break Level) | 50 × Item Level        |
| **Battle Imagine**  | -                                             | 10 × Item Level        |
| **Enhance Imagine** | (8 × Item Level) + (16 × Limit Break Level)   | 6 × Item Level         |

Level and Battle Score are common requirements to entering [Missions](/guides/missions).

### 😱 Level Sync
If an item's max level exceeds your class level, the item will be level synced down, **reducing all of its stats besides Vitality** to match your class level.
Since VIT is not level synced, you will end up with higher HP and defense than usual. 

Level syncs also exist in dungeons, forcefully adjusting all high level players' stats to an appropriate level for the content.

<StickyNote type="tip">
    Ability Plugs, Abilities (passive skills, Imagine passives), Special Effects (weapon lines), and Skills are not affected by level syncs.
</StickyNote>

### ⚜️ Adventurer Rank
Raising your Adventurer Rank allows you to accept new quests (including continuing the main story quest), raises your maximum level cap, and provides some goodies. To raise your Adventurer Rank, you need to complete a Rank Up [Adventure Board](/guides/adventure-boards). Some ranks also require you to pass an exam (speak to NPC Millie at the Reclamation Bureau).




## 🔥 Elements
Elemental attacks apply abnormal statuses on targets and boost damage output. They can be utilized through elemental skills, weapons with elements, and battle imagine with elements. 

By accumulating elemental charge on an enemy, elemental effects will reach level 1 (debuff), 2 (stronger debuff), 3 (elemental burst) and end with a burst finish.

The full guide, including all elements and their effects, can be viewed [here](/guides/elements).




## 🪄 Skills
Skill loadouts allow the following setup. 

<img src="https://cdn.discordapp.com/attachments/862607211981045781/1092070007413940244/image.png" alt="Twin Striker skills page">

Active skills: 
- 1 basic attack
- 1 class action
- 4 tactical skills
- 1 ultimate skill
- 2 battle imagine

<StickyNote type="tip">
    Basic attacks can have variations that perform different attacks and provide buffs. After leveling up your basic attack, try using it while holding a directional key!
</StickyNote>

Passive skills: 
- 2 class-restricted abilities
- 2 class-shared abilities
- all unlocked base abilites

Learn more about the class actions and class abilities on the [classes page](/classes).

The developers have stated that they prefer to add more skill diversity to existing classes than create new classes that aren't very unique.




## 💪 Buffs & Debuffs
Abnormal statuses that can be applied to players or enemies. Debuffs from elemental effects can be found in the [elements](/guides/combat#-elements) section.

<AbnormalStatusesTable />

## 🗡️ EXP & Drops
When an enemy is defeated, **all players** who dealt at least 1 damage to the enemy will be **eligible to receive full EXP and drops**. In party play, **all party members** will be eligible if at least one of their members dealt at least 1 damage to the enemy.

<StickyNote type="warning">
    Players that are 8 or more levels below the enemy level will not be eligible for rewards, regardless of other party members' levels. 
</StickyNote>

<!-- TODO: be in range of the enemy or in range of the player who defeated it? -->
**In order to receive rewards, players must be within a certain distance of the enemy.**

EXP gain is scaled based on your [level difference](/guides/combat#-level) with the enemy. Enemies in Missions do not give EXP.

**Item drops** are determined on a **per-player** basis. Players may have differing drop rate multipliers (via consumable items and [liquid memories](/guides/liquid-memories)). Item drops go straight to the player's inventory (consumables) or storage (non-consumables). 

For example, if you and I are collecting rare drops in the same party, there may be times where one of us gets the drop and the other doesn't. If I'm using a [G2 Drop-Drop](/db/item/123000110) and you are not, my drop rate for items will be 1.3x and yours will be 1x.

**Treasure chest drops** are determined on a **per-party** basis, using the drop rate of the party member with the highest drop rate. Solo players are considered as being in a party of one. When a chest drops, it is visible to other party members as well. Treasure chests *must be opened* to receive the rewards inside and its **contents are determined on a per-player** basis. 

For example, if you and I are in the same party and I'm using a [G2 Drop-Drop](/db/item/123000110) and you are not, your drop rate for chests will also be 1.3x. In regards to chest contents, an elite monster chest might give you 2 [Idea](/guides/imagine#recipes) while I only get 1 (elite monsters have a 100% chance of dropping a chest, but the chest can contain different rewards).

<!-- TODO: do drop rates stack in dungeons? test 6x drop drops in dungeons -->

## ⚔️ PvP
**There is no player versus player system in BLUE PROTOCOL.** PvP refers to Party vs Party—player party vs enemy AI party. Similar to players, enemies will cooperate and try to take down you and your allies.










## Party Chain
The party chain is a combo count of all party members' hits. As it accumulates, your party gains a slight damage increase. The higher the chain count, the less time you have to successfully perform another attack before the chain ends. The party chain will reset to 0 if no successful attacks are detected before the timer ends.