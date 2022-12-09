---
title: 'Combat'
author: "Zakum"
date: 'August 3, 2022'
category: 'Game Systems'
caption: 'A brief overview of all mechanics related to combat in BLUE PROTOCOL.'
featuredImg: 'test.png'
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
</script>

BLUE PROTOCOL has several aspects of combat that contribute to its fast-paced action. Let's take a look at each one.

### ⚔️ PvP
There is no player versus player system in BLUE PROTOCOL. PvP refers to Party vs Party--player party vs enemy AI party. Similar to players, enemies will cooperate and try to take down you and your allies.

### 🗡️ EXP & Drops Distribution
All parties with a member that dealt at least 1 damage to a monster will receive full EXP and drops. If you and I are in separate parties and we both hit the same monster, **everyone** in both of our parties will get full rewards.

### 🏃‍♀️ Stamina
Stamina will be consumed when sprinting or dodging *while within an enemy's aggro range*. Dodging can be used to cancel most attack animations.

### 🔥 Elements
Elemental attacks apply abnormal statuses on targets and boost damage output. They can be utilized through elemental skills and weapons with elements. View all the elements [here](/guides/elements).

<StickyNote type="warning">
    The following model is not fully tested and may contain inaccuracies. There are major unknowns listed below.
</StickyNote>

Using elements on an enemy causes elemental charge to accumulate. For simplicity, let's use the number 100. 

When elemental charge exceeds 100 on an enemy, a debuff will be applied. The debuff is determined by the element that contributed the most charge towards reaching 100. So if we had Fire +40, Earth +30, and Ice +30, the Fire debuff would be applied. Attacking with different elements will still build elemental charge, but only one debuff will take effect.

Unknown/untested aspects:  
- Can the debuff's element change between levels, or is it permanently determined at level 1? If it can change, are subsequent levels based on total charge or individual level charge?
- Does elemental charge overflow into the next level, or does it start at 0 for each level?
- How is debuff and burst effect damage calculated when multiple players are attacking the same enemy?
- What is the interaction between elemental skills and weapon elements?

### 💪 Buffs & Debuffs
Abnormal statuses that can be applied to players or enemies. Check out the list [here](/guides/abnormal-statuses).

### 🪄 Skills
You can assign **4 tactical skills, 3 tactical abilities, 1 ultimate skill, and any amount of permanent skills**. View these on the interactive skill builder. The development team has stated that they prefer to add more skill diversity rather than a bunch of new classes.

### ⚙️ Mechanics
**Assault Attack** Melee classes receive a damage bonus and enemy knockdown when dropping onto enemies from high ground.
**Dodge Attack** Attack right after dodging will allow a seamless transition into the attack animation.
**Perfect Dodge** Dodging with excellent timing will grant you class-unique bonuses and buffs indicated by a blue particle effect.

<StickyNote type="note">
    Elevation bonus was implemented internally, but removed before the network test.
</StickyNote>