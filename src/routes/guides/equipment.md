---
title: 'Equipment'
author: 'Zakum'
date: '2022-12-17'
category: 'Game Systems'
caption: 'An overview of all the gear in the world of Regnus.'
featuredImg: '40.png'
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import Video from '$lib/components/Video.svelte';
</script>

This guide covers equippable items that **affect character stats and combat**. For cosmetic items, check [Cosmetics](/guides/cosmetics#cosmetic-items).

## Weapons
Weapons provide stats, have an equipment level, and may have an element. Switching weapon types while in town will automatically change your class.

Weapons can be crafted at the crafting machine found in town. Upon creation, the weapon will have some random values:
- Special effect
- Number of sockets (used for plugs)

<StickyNote type="note">
    The following tables use example values from the Dragon Nail's Edge, a Lv. 10 Aegis Fighter weapon.
</StickyNote>

### Special Effect
The special effect provides bonus damage against a specific type of monster. The bonus damage multiplier is also random within a fixed range depending on crafting success quality.

| Special Effect | Multiplier (Great Success) | Multiplier (Success) | Probability |
|:---------------|----------------------------|----------------------|-------------|
|Ogre Killer     | 11~13%                     | 5~8%                 | 20%         |
|Quad Arm Killer | 11~13%                     | 5~8%                 | 20%         |
|Demihuman Killer| 9~11%                      | 4~7%                 | 60%         |

### Weapon Sockets
Depending on if crafting was a success or a great success, the crafted weapon will have a random number of empty sockets.

| Socket Count | Probability (Great Success) | Probability (Success) |
|:-------------|-----------------------------|-----------------------|
| 1            | 100%                        | 100%                  |
| 2            | 100%                        | 0%                    |
| 3            | 25%                         | 0%                    |
| 4            | 8%                          | 0%                    |

#### Plugs
Plugs are items you can use to strengthen a weapon by attaching them to empty weapon sockets. They can  provide stat bonuses and strengthen specific skills. A plug will randomly be assigned a 1~5★ value when attached, indicating the strength of its effect.

Plugs can be obtained as mission rewards, through the adventure board, and from events.

## Imagine
Imagine are the souls of creatures that inhabit the world of BLUE PROTOCOL. They can be crafted at the Imagine Research Institute in town. 
<!-- > *Imajinn are the embodiment of spiritual elements, such as powerful emotions or thoughts of a living creature.*   -->

<Video 
    title="Imagine System" 
    id="8fOrP_ziOi8?start=55"
    bleed
/>

### Battle Imagine
Battle Imagine grant active skills based on their type: Attack, Heal, or Support (provides buffs). 

When crafted, a battle imagine will randomly have one of the abilities on its potential abilities list. Abilities typically include stat boosts and specific skill boosts.

Equipping a battle imagine will apply its base stats and random ability on your character, and its active skill will become available. Up to 2 battle imagine can be equipped (duplicates allowed) and their cooldowns are independent of each other.

### Enhance Imagine
Enhance Imagine are equippable items that provide passive stat bonuses. 

Like battle imagine, enhance imagine will randomly have one of the potential abilities when crafted.

There are 5 enhance imagine slots, and each shape can only be equipped in their respective slot. Equipping higher tier enhance imagine allows you to increase your Adventurer Rank.

### Mount Imagine
Mount Imagine are rideable creatures useful in traversing the open world.

Mounts have a standard running speed which is faster than player movement. They also have a faster dashing speed which consumes the Dash Gauge. The gauge will recover while not dashing.

<StickyNote type="tip">
    Mount animations will not disrupt your movement. You can mount, dismount, and attack in one fluid motion without pausing!
</StickyNote>

The Land Fox mount imagine can be obtained at Lv. 8 from Studz's side quest in Minsterhorn.