---
title: 'Weapons & Plugs'
author: 'Zakum'
date: '2023-4-13'
category: 'Game Systems'
caption: 'All about the weapon and ability plug system.'
featuredImg: '40.png'
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import Video from '$lib/components/Video.svelte';
</script>

<Video 
    title="Imagine System" 
    id="zcSPxPQwuTo"
    bleed
/>

Weapons provide stats, have an equipment level, and may have an element. 

Switching weapon types while in town will automatically change your class (once you have completed the Class Master's quest). Base weapons for each class can be purchased from the vendor in Asterleeds.

Weapons provide **50 &times; (Item Level)** Battle Score, and they will level sync if their max item level is higher than your current class level.

## Crafting
Weapons can be crafted at the Crafting Machine found in town. Their recipes can be acquired through quests and Adventure Boards.

<StickyNote type="tip">
    Weapon Adventure Boards often contain items that help you craft the weapon faster, so be sure to check all their rewards!
</StickyNote>

After learning the recipe, view the required materials at the Crafting Machine and hover over the information icons to see how to get them. Note that there is a minimum Adventurer Rank requirement to craft weapons.

<StickyNote type="tip">
    Use the Wishlist feature to show the crafting materials as a checklist without opening the menu!
</StickyNote>

At the Crafting Machine, view the weapon you want to craft and click the "add to wishlist" button. Then, in your Command Menu > Quests > Wishlist, click the HUD checkbox to display the item where your quests appear in game.

## Weapon Drops
Weapons can also be obtained through treasure chests that drop from dungeon minibosses. You have a chance to obtain the weapon you are *currently farming for* as a drop. In other words, while farming Dragon Claw Valley for materials for a Dragon Nail weapon, you have a small chance to get that Dragon Nail weapon from the miniboss. 

That specific miniboss has a **5%** chance to drop a treasure chest which will guarantee that one of the Dragon Nail weapons, **selected randomly**, are added to the rewards list. You still have to clear the entire dungeon to get the item. 

Specific drop rate information can be found on the [database](/#db).

## Weapon RNG
There are 3 randomly determined aspects regarding weapons.
- Success or Great Success
- Special effect (and it's effectiveness)
- Number of sockets (used for plugs)

### Success or Great Success
When obtaining a weapon, either through crafting or from a chest, there is a chance of it being a Great Success. A great success means you have access to better values for the other 2 randomly determined aspects. 

There are tickets that can boost the Great Success rate when crafting, which is initially **25%**. There are also tickets that can **guarantee a Great Success**, though the number of tickets you need will vary based on the weapon. 

### Special Effect
The special effect is a randomly-selected damage boost against a specific race of enemies. The damage multiplier is also random within fixed ranges—the ranges are determined by success or great success. 

For example, on the Dragon Nail weapons:

| Special Effect | Multiplier (Great Success) | Multiplier (Success) | Probability |
|:---------------|----------------------------|----------------------|-------------|
|Ogre Killer     | +11% ~ +13%                | +5% ~ +8%            | 20%         |
|Quad Arm Killer | +11% ~ +13%                | +5% ~ +8%            | 20%         |
|Demihuman Killer| +9% ~ +11%                 | +4% ~ +7%            | 60%         |

### Weapon Sockets
Sockets are where you attach Ability Plugs into weapons. The number of empty sockets will be determined by whether the weapon was a success or a great success.

| Socket Count | Probability (Great Success) | Probability (Success) |
|:-------------|-----------------------------|-----------------------|
| 1            | 0%                          | 100%                  |
| 2            | 15%                         | 0%                    |
| 3            | 50%                         | 0%                    |
| 4            | 35%                         | 0%                    |

Socket Expansion tickets can be used to open more sockets on a weapon with less than 4 sockets.

#### Ability Plugs
Ability Plugs are items you can use to strengthen a weapon by attaching them to empty weapon sockets. They can  provide stat bonuses and strengthen specific skills. Some Plugs provide passive stat boosts, such as ATK/DEF/STR etc., and some provide skill-enhancing effects. They current come in grades of G1/G2/G3.

Speak to the Weapon Reconstructor NPC to attach Plugs by using Union Paste. Plugs can be obtained as dungeon rewards, through Adventure Boards, and from events. Union Paste is acquired from quests and dungeons.

A plug will randomly be assigned a **1~5★** value when attached, indicating the strength of its effect. Tuning Tickets allow you to keep all your plugs inserted but reroll how many stars they have. There are also Ability Value Preservation Tickets, which lock the stars on an ability of your choice so that it doesn't get rerolled. The number of tickets needed will vary based on the weapon.

Plugs can be removed using Plug Removal Tickets, though if you wish to keep the plug, you will need Plug Retrieval Tickets. The number of tickets needed will vary based on the weapon. 

Plugs do not increase your Battle Score.

## Weapon Elements
Weapons can have an [element](/guides/elements), so when you are using non-elemental skills you will generate elemental charge of your weapon element. You will also do bonus damage to enemies that are weak against that element. 

Elemental skills will take priority over weapon element, so Spell Casters may want to take that into consideration (either when playing with others or deciding on a weapon to craft).