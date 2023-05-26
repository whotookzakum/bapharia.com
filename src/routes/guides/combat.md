---
title: 'Combat'
author: "Zakum"
date: '2023-5-26'
category: 'Game Systems'
caption: 'An overview of all combat-related mechanics.'
bannerImg: "/guides/combat/banner.jpg"
thumbImg: "/guides/combat/thumb.jpg"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
</script>

BLUE PROTOCOL has several aspects of combat that contribute to its fast-paced action. Let's take a look at each one.

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
Skill loadouts allow the following setup:
- 4 tactical skills
- 1 ultimate skill
- 2 battle imagine
- 1 normal attack and 1 subaction
- 2 class-restricted abilities (passive)
- 2 class-shared abilities (passive)

Learn more about the class abilities in the [classes guide](/guides/classes).

The developers have stated that they prefer to add more skill diversity to existing classes than create new classes that aren't very unique.

## ⚙️ Mechanics

### Springboard 
All classes can perform a Springboard leap off of certain enemies when within range. Long-range classes will leap back to create distance, while short-range classes will use it to gain altitude and can follow up with an Aerial Attack.

### Aerial Atttack
Short-range classes can use a normal attack while mid-air with enough altitude and good timing to perform an Aerial Attack. Upon landing, the attack will create a shockwave that knocks down enemies. 

If performed from a higher elevation than the enemy, a debuff will be applied to affected enemies. Aegis Fighters apply Bind, Twin Strikers apply Blind, and Heavy Smashers apply Movement Speed Down through elevated Aerial Attacks.

<StickyNote type="note">
    A mechanic for long-range classes, called Elevation bonus, was implemented internally after closed beta but removed before the network test.
</StickyNote>

### Party Chain
The party chain is a combo count of all party members' hits. As it accumulates, your party gains a slight damage increase. The higher the chain count, the less time you have to successfully perform another attack before the chain ends. The party chain will reset to 0 if no successful attacks are detected before the timer ends.