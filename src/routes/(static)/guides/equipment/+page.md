---
title: 'Equipment'
author: 'Zakum'
date: '2022-08-03'
---

<script>
    import StickyNote from '../../../../lib/components/StickyNote.svelte';
    import Video from '../../../../lib/components/Video.svelte';
</script>

An overview of all the gear in the world of Regnus.

## 🗡️ Weapons
Weapons can be crafted at the crafting machine found in town. Upon creation, the weapon will have some random values:
- Initial weapon level
- Elemental efficacy
- Bonus damage against a certain monster type
- Number of slots (used for fusion)

See them in detail in this video:

<Video 
    title="RNG aspects of weapon crafting" 
    id="jNDsR4DZkC8"
/>

### Weapon Leveling
Weapons can be leveled up at a crafting machine using EXP crystals. Item drops can also be used, but they give considerably reduced EXP. Leveling up your weapon increases its stats.

Weapon level cannot be increased past your current class' level. A level 20 Blast Archer can only level their bow to Lv 20, even if the weapon's max level is 35.

<StickyNote type="caution">
    A weapon that is a higher level than your current class level cannot be equipped.
</StickyNote>

Let's say you have a Lv 35 Aegis Fighter and a Lv 20 Spell Caster. You can craft and level up a staff on your Aegis Fighter. However, if you level the staff to 25, your Spell Caster won't be able to equip it until class Lv 25.

### Weapon Fusion
Fusion is the process of attaching Battle Imagine to your weapon to provide passive stat boosts. Weapons must have at least one empty slot to be eligible for fusion. Speak to the Weapon Reconstructor in town to begin. 

<StickyNote type="warning">
    There is currently no way to remove a fused battle imagine from a weapon.
</StickyNote>

When performing fusion, the catalyst battle imagine will be consumed and its ability will be applied to your weapon as a passive stat increase. The value of the ability is random, ranging from 1★ to 5★. The number shown in your inventory or at the crafting machine is the 3★ value.

<!-- | Stats | 1★ | 2★ | 3★ | 4★ | 5★ |
|:------|:---|:----|:---|:----|:----|
| STR, INT, DEX, ATK, Stamina, Healing, Healing (B. Imagine) | 16 | 18 | 20 | 22 | 24 |
| DEF, Stamina, Reduce CD (ULT), Healing, Healing (B. Imagine) | 8 | 9 | 10 | 11 | 12 |
| Crit Rate, Reduce Dmg Taken (Melee/Ranged), Damage Up (Melee/Ranged/Regular Attack/B. Imagine/ULT) | 3 | 4 | 5 | 6 | 7 |
| Max HP | | | 100 | | |
| Max HP | | | 150 | | |

Stats may appear in multiple categories depending on the source, i.e. Ferocious Beast gives Stamina +10, while Spooky Goat gives Stamina +20.  
Some stats apply as flat values (STR +20) and some apply as percentages (Reduce Cooldown (ULT) 8%).

#### Reduce Cooldown (ULT) Formula
This ability is applied as a percentage. Formula provided by [Baskmedia](https://baskmedia.jp/bp-ct/).  

    ( Cooldown - Tactical Ability ) × (100 - Imagine Ability) / 100

The default cooldown for ultimates is 60 seconds. The tactical ability **Reduce ULT Cooldown** reduces it by 7 seconds at level 3. Imagine ability can be applied from equipped battle imagine and fused battle imagine (currently unknown if it is multiplicative or additive). 

With these combined, you can reduce your ULT cooldown from 60s to 46.64s (or lower). -->




## 🐈 Imagine
Imagine are the souls of creatures that inhabit the world of BLUE PROTOCOL.
<!-- > *Imajinn are the embodiment of spiritual elements, such as powerful emotions or thoughts of a living creature.*   -->

### Battle Imagine
Battle Imagine provide active abilities to assist you in battle and can be fused into your weapons for passive stat bonuses. They can be crafted at the Imagine Research Institute in town.  

A crafted imagine will randomly take one of the available abilities shown in the crafting menu. For example, Land Fox's available abilities are Crit Damage Increase and DEX Increase.

When a battle imagine is equipped to your character, its ability and stats will be applied to your character, and its active skill will be available. 
<StickyNote type="tip">
    Battle imagine skills have 3 types: Attack, Heal, and Support.
</StickyNote>

Up to 2 battle imagine can be equipped (duplicates allowed) and their cooldowns are independent of each other.

### Inner Imagine
Inner Imagine are equippable artifacts that provide passive stat bonuses. 

Like battle imagine, inner imagine can be crafted at the Imagine Research Institute and will randomly take one of the available abilities shown in the crafting menu.

There are 5 inner imagine slots--they can only be equipped in their respective slots. Equipping higher tier inner imagine allows you to increase your Adventurer Rank.

<Video 
    title="Imagine System" 
    id="8fOrP_ziOi8?start=55"
/>


### Mount Imagine
Mount Imagine are rideable creatures useful in traversing the open world.

Mounts consume energy to travel at a fast pace. During the CBT, a mount would constantly consume energy while active. Mount energy would not passively recover. Once energy reached 0, the mount could not be used until its energy was recharged by visiting Asterleeds.

<StickyNote type="note">
    The mount system is being reworked. There will be a medium speed (faster than running) and a fast speed (consumes energy). There may be other ways to recharge energy as well.
</StickyNote>

The only mount imagine available in past playtests was the Land Fox, obtainable at Lv 8 from Studz's side quest in Minsterhorn.