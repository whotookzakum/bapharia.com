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
    import StatsTable from './components/StatsTable.svelte';
    import LevelDifferenceTable from './components/LevelDifferenceTable.svelte';
</script>

BLUE PROTOCOL has several aspects of combat that contribute to its fast-paced action. Let's take a look at each one.

## 💯 Battle Score
Battle Score is the rating of a player's equipment. While it doesn't directly convey how powerful a player is, it represents the level of equipment a player is using.

- Weapons: 50 × (Item Level)
- Battle Imagine: 10 × (Item Level)
- Enhance Imagine: 6 × (Item Level)

If an item's max level exceeds your class level, it will be level synced down, having its stats (including level) reduced.

Battle Score can be one of the requirements to entering [Missions](/guides/missions).

## 🧮 Stats
Stat effects vary between classes. On your battle build screen, the three attack stats are **Attack, Crit Rate, and Crit Damage**. The three defense stats are **Defense, Recovery (HP regen), and (6) Elemental Resistances**. Under that, we have **HP and Stamina**.

<img src="https://cdn.discordapp.com/attachments/862600196704829443/1092825223226732555/image.png" alt="Battle Build page showing stats and loadout">

Additionally, there are 5 base stats--**Strength, Vitality, Dexterity, Intelligence, and Mind**--which boost your attack and defense stats. 

<StatsTable />

<StickyNote type="note">
    It's unknown whether the base stats are supposed to increase your attack and defense stats on the battle build page, or if they are factored into the damage formula afterwards (and thus won't affect those numbers).
</StickyNote>

## 😱 Level Difference 
If the level difference between a player and an enemy is too great, the player will deal reduced damage and receive reduced EXP. For enemies that are 8 or more levels higher than you, your attacks will do 0 damage. 

<LevelDifferenceTable />

Like equipment, dungeons can also level sync down if your level is too low. However, dungeon level sync has a limit and won't go lower than minimum level for that dungeon.

Like equipment, dungeons also have a **level sync** system. If a player is too low level, enemy level (and stats) will be reduced. If a player is too high level, the player's level (and stats) will be reduced. There are minimum restrictions on enemy level sync--for example, in Pillar of Divinity (Survey), enemies will not sync lower than level 12.

## ⚔️ PvP
**There is no player versus player system in BLUE PROTOCOL.** PvP refers to Party vs Party--player party vs enemy AI party. Similar to players, enemies will cooperate and try to take down you and your allies.

## 🗡️ EXP & Drops
All parties with a member that dealt at least 1 damage to a monster will receive full EXP and drops. If you and I are in separate parties and we both hit the same monster, **everyone** in both of our parties will get full rewards.

## 🏃‍♀️ Stamina
Stamina is consumed when sprinting, jumping, or dodging while being targeted by an enemy. 

Dodging provides a brief window of invulnerability, and can be used to cancel some player animations. Attacking right after dodging will seamlessly transition you into a Dodge Attack.

### Perfect Dodge
Dodging with excellent timing will grant you class-unique bonuses and buffs indicated by a blue particle effect. <!-- Increased damage, guaranteed crit? -->

## 🔥 Elements
Elemental attacks apply abnormal statuses on targets and boost damage output. They can be utilized through elemental skills, weapons with elements, and battle imagine with elements. 

By accumulating elemental charge on an enemy, elemental effects will reach level 1 (debuff), 2 (stronger debuff), 3 (elemental burst) and end with a burst finish.

The full guide, including all elements and their effects, can be viewed [here](/guides/elements).

## 💪 Buffs & Debuffs
Abnormal statuses that can be applied to players or enemies. Check out the list [here](/guides/abnormal-statuses).

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

Learn more about the class actions and class abilities in the [classes guide](/guides/classes).

The developers have stated that they prefer to add more skill diversity to existing classes than create new classes that aren't very unique.

## ⚙️ Mechanics

### Springboard 
All classes can perform a Springboard leap off of certain enemies when within range. Long-range classes will leap back to create distance, while short-range classes will use it to gain altitude and can follow up with an Aerial Attack.

### Quick Recover
All classes can utilize Ukemi, or Quick Recover by pressing the dodge key with good timing after getting knocked down. When performed correctly, your character will get up faster than usual.

<figure>
    <img src="/guides/combat/ukemi by panke.jpg" alt="Explanation of Ukemi from the in-game handbook">
    <figcaption>Screenshot of the in-game handbook explaining Ukemi (by <a href="https://twitter.com/panke219/status/1643933953190154243" rel="noopener nofollow noreferrer" target="_blank">Panke</a>)</figcaption>
</figure>


### Aerial Atttack
Short-range classes can use a normal attack while mid-air with enough altitude and good timing to perform an Aerial Attack. Upon landing, the attack will create a shockwave that knocks down enemies. 

If performed from a higher elevation than the enemy, a debuff will be applied to affected enemies. Aegis Fighters apply Bind, Twin Strikers apply Blind, and Heavy Smashers apply Movement Speed Down through elevated Aerial Attacks.

<StickyNote type="note">
    A mechanic for long-range classes, called Elevation bonus, was implemented internally after closed beta but removed before the network test.
</StickyNote>

### Party Chain
The party chain is a combo count of all party members' hits. As it accumulates, your party gains a slight damage increase. The higher the chain count, the less time you have to successfully perform another attack before the chain ends. The party chain will reset to 0 if no successful attacks are detected before the timer ends.

## 🪦 Character states
### Defeated
When your HP reaches 0, your character will be downed and can be resurrected by other players interacting with you. Rescue time is decreased as more players interact with a downed player.

In dungeons, you will automatically revive after some time if not rescued by others. Dungeons may have limited revives shared between all party members--these will not be consumed if the downed player is rescued by party members.

In fields, you can remain downed and wait for someone to rescue you, or can choose to respawn after a short timer. If you choose to respawn, you will have the Weak debuff, decreasing your Max HP and movement speed.

### Health Regen
Health will automatically regenerate in fields when out of combat, and will regenerate faster when sitting. Being near a campfire greatly increases health regen, and stacks with sitting.