---
title: 'Adventure Boards'
author: 'Zakum'
date: '2024-7-22'
category: 'Game Systems'
caption: 'A guide to Adventure Boards, a progression mechanic that provides equipment and Adventurer Ranks.'
bannerImg: "/guides/adventure-boards/board.webp"
thumbImg: "/guides/adventure-boards/thumb.webp"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
</script>

An Adventure Board is a series of tasks, with rewards for each individual task, and a final reward for completing the entire board. For information on specific boards, refer to the [database](/db).

## Types of boards
<figure>
    <img src="/guides/adventure-boards/boards-list.webp" alt="Example of the various types of adventure boards">
    <figcaption>Boards start with a bronze background, turning silver after completing the goal node, and gold after completing every node.</figcaption>
</figure>

**Adventurer Rank boards** mainly provide EXP and gacha tickets (completion reward). They are a prerequisite to increasing your Adventurer Rank, which raises your max level cap and unlocks more Main Story and Side Quests.

**Enhance Imagine boards** mainly provide recipes and crafting materials.

**Weapon boards** mainly provide crafting materials, EXP, and gacha tickets (completion reward).

**Miscellaneous boards** such as the Cat board, provide things such as chat stickers.

**Class boards** mainly provide class talismans, used to purchase Alpha skills.

**Event boards** mainly provide event currency.

<StickyNote type="tip">
    There are achievements that reward a gacha ticket for completing a certain number of boards. Event boards count towards these achievements.
</StickyNote>

## Task Tree
<img src="/guides/adventure-boards/board.webp" alt="Example of an Adventure Board task tree">

Every Adventure Board comes in a unique tree shape, where the tasks along the main path must be completed in order. Tasks that do not have a line connected to them can be completed in parallel, at any time. 

Tasks typically involve defeating enemies, gathering, clearing dungeons, and completing quests. Rewards include recipes, crafting materials, EXP, warehouse abilities, and consumables. 

<StickyNote type="tip">
    Warehouse abilities are permanent passive buffs that increase the amount of drops you get from a specific enemy/gathered resource by 1.
</StickyNote>

### Progress tracking
Previously, an Adventure Board had to be enabled to make progress towards its tasks. In recent versions, most tasks have been changed to be retroactive, meaning that progress will be counted towards tasks even if the board isn't enabled. 

Boards that didn't receive retroactive nodes instead received progress multipliers; for example, defeating 1 enemy would count as defeating 3. 

Note that **some nodes still require the board to be enabled to count progress**--namely, the nodes that require you to clear a dungeon. Click on a board and then click the long rectangular accept button at the top. You can also choose to display it on the in-game HUD to easily track progress on tasks.

<StickyNote type="note">
    Up to 10 boards can be accepted at a time. This has been increased periodically, from 5, to 8, and now 10. Event boards do not count towards this limit.
</StickyNote>

## Obtaining Boards
Adventure Boards can be obtained from treasure chests, dungeons, and completing quests--mainly Key Character Quests, indicated by a quest icon with horns. After unlocking a board, you can accept it from the Quests menu, in the Adventure Boards tab.

### Class Boards
To get these boards, you must complete a quest chain given by your respective class instructor NPC.

![Class NPC locations](https://i.imgur.com/GwhHCvn.png)

- Aegis Fighter: [Quest 1](/db/quests/CQ101_001)・[Quest 2](/db/quests/CQ101_002)・[Quest 3](/db/quests/CQ101_003)・[Quest 4](/db/quests/CQ101_004)・[Quest 5](/db/quests/CQ101_005)・[Quest 6](/db/quests/SQ103_233)
- Blast Archer: [Quest 1](/db/quests/CQ103_001)・[Quest 2](/db/quests/CQ103_002)・[Quest 3](/db/quests/CQ103_003)・[Quest 4](/db/quests/CQ103_004)・[Quest 5](/db/quests/CQ103_005)・[Quest 6](/db/quests/SQ103_235)
- Blitz Lancer: [Quest 1](/db/quests/CQ106_001)・[Quest 2](/db/quests/CQ106_002)・[Quest 3](/db/quests/CQ106_003)・[Quest 4](/db/quests/CQ106_004)・[Quest 5](/db/quests/CQ106_005)・[Quest 6](/db/quests/SQ103_238)
- Heavy Smasher: [Quest 1](/db/quests/CQ105_001)・[Quest 2](/db/quests/CQ105_002)・[Quest 3](/db/quests/CQ105_003)・[Quest 4](/db/quests/CQ105_004)・[Quest 5](/db/quests/CQ105_005)・[Quest 6](/db/quests/SQ103_237)
- Spell Caster: [Quest 1](/db/quests/CQ104_001)・[Quest 2](/db/quests/CQ104_002)・[Quest 3](/db/quests/CQ104_003)・[Quest 4](/db/quests/CQ104_004)・[Quest 5](/db/quests/CQ104_005)・[Quest 6](/db/quests/SQ103_236)
- Twin Striker: [Quest 1](/db/quests/CQ102_001)・[Quest 2](/db/quests/CQ102_002)・[Quest 3](/db/quests/CQ102_003)・[Quest 4](/db/quests/CQ102_004)・[Quest 5](/db/quests/CQ102_005)・[Quest 6](/db/quests/SQ103_234)

Class boards give class talismans, which can be used to purchase [Alpha skills](/guides/combat#skill-variants). While you can only make progress towards the board of **the class you are currently playing**, the talismans can be used on **any** class once obtained.

<StickyNote type="tip">
    It's recommended to get the class boards as soon as possible at level 45, because they take the longest to complete with tasks such as gather 3,000 times and slay 12,000 enemies.
</StickyNote>

The talismans can be spent at the Class Master's shop, which can be unlocked by completing the following quests: 
1. [Quest 1](/db/quests/SQ101_001)
2. [Quest 2](/db/quests/SQ101_146)
3. [Quest 3](/db/quests/SQ101_145)