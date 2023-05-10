---
title: 'Combat'
author: "Zakum"
date: '2022-12-18'
category: 'Game Systems'
caption: 'An overview of all combat mechanics.'
bannerImg: "/guides/combat/banner.jpg"
thumbImg: "/guides/combat/thumb.jpg"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
</script>

BLUE PROTOCOL has several aspects of combat that contribute to its fast-paced action. Let's take a look at each one.

## ⚔️ PvP
There is no player versus player system in BLUE PROTOCOL. PvP refers to Party vs Party--player party vs enemy AI party. Similar to players, enemies will cooperate and try to take down you and your allies.

## 🗡️ EXP & Drops
All parties with a member that dealt at least 1 damage to a monster will receive full EXP and drops. If you and I are in separate parties and we both hit the same monster, **everyone** in both of our parties will get full rewards.

## 🏃‍♀️ Stamina
Stamina will be consumed when sprinting or dodging *while within an enemy's aggro range*. Dodging can be used to cancel most player animations.

## 🔥 Elements
Elemental attacks apply abnormal statuses on targets and boost damage output. They can be utilized through elemental skills, weapons with elements, and battle imagine with elements. 

By accumulating elemental charge on an enemy, elemental effects will reach level 1 (debuff), 2 (stronger debuff), 3 (elemental burst) and end with a burst finish.

The full guide, including all elements and their effects, can be viewed [here](/guides/elements).

## 💪 Buffs & Debuffs
Abnormal statuses that can be applied to players or enemies. Check out the list [here](/guides/abnormal-statuses).

## 🪄 Skills
Skill loadouts allow the following setup:
- 4 tactical skills
- 1 ultimate skill
- 2 battle imagine
- 2 basic attack
- 2 class-specific abilities (passive)
- 2 class-shared abilities (passive)

The developers have stated that they prefer to add more skill diversity to existing classes than create new classes that aren't very unique.

## ⚙️ Mechanics
### Assault Attack
Melee classes receive a damage bonus and enemy knockdown when dropping onto enemies from high ground. 

<StickyNote type="note">
    Elevation bonus was implemented for ranged classes internally, but removed before the network test.
</StickyNote>

### Dodge Attack
Attack right after dodging will allow a seamless transition into the attack animation.

### Perfect Dodge
Dodging with excellent timing will grant you class-unique bonuses and buffs indicated by a blue particle effect.

### Party Chain
The party chain is a combo count of all party members hits. As it accumulates, your party gains a slight damage increase. The higher the chain count, the less time you have to successfully perform another attack before the chain ends, resetting to 0.