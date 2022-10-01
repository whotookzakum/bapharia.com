---
layout: ../../layouts/Article.astro
title: 'Gear'
date: '2022-08-03'
---

An overview of all the gear in the world of Regnus.

### Fusion
Fusion is the process of attaching Battle Imagine to your weapon to provide passive stat boosts. 

Speak to the **Weapon Reconstructor** NPC to begin. Weapons must have 1~4 empty slots to be eligible for fusion. **There is currently no method to remove fused battle imagine from weapons.**

The catalyst battle imagine will be consumed, and one of its **Abilities** (selected randomly) will be applied to your weapon. The value of the chosen Ability is random, ranging from 1★ to 5★. You can check the 3★ value when viewing a battle imagine in the crafting menu or in your inventory.

| Stats | 1★ | 2★ | 3★ | 4★ | 5★ |
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

With these combined, you can reduce your ULT cooldown from 60s to 46.64s (or lower).