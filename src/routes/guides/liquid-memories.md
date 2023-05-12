---
title: 'Liquid Memories'
author: 'Zakum'
date: '2023-5-10'
category: 'Game Systems'
caption: 'Liquid Memories are passive buffs that aid you in combat, crafting, and resource gathering.'
bannerImg: "/guides/liqmem/banner.webp"
thumbImg: "/guides/liqmem/thumb.webp"
---

<!-- TO DO: Quest walkthroughs, Ticket explanations and acquisition methods -->

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import Video from '$lib/components/Video.svelte';
    import LiqMemTable from "./LiqMemTable.svelte";
</script>

<Video 
    title="Imagine System" 
    id="_q31d5P9-R0"
    bleed
/>

## What are Liquid Memories?
Liquid Memories are buffs that assist the player in progression-related tasks. While they don't increase combat prowess, they provide convenient effects that can increase efficiency when collecting materials or selling items.

## How to unlock
After reaching Adventurer Rank 3, complete the quest "Welcome to the Memory Stand!" which can be accepted from the quest receptionist in Asterleeds. 
Afterwards, Liquid Memory bottles can be unlocked through quests (and possibly hidden throughout the world). Check the [map](/map) for the quest locations.

There are up to **three bottles** (M1, M2, M3) for each buff. Unlocking more bottles will increase the buff's duration or effectiveness.

## How to use
You can drink full bottles at the **Memory Stand** for a small fee. Mixing multiple buffs will activate all effects at once. 

Memory durations are either time-based or usage-based. Usage-based memories will be active until they are used up, so you can activate them and have them running in the background.

<StickyNote type="note">
    You can't drink a liquid memory whose effect is already active, even if you have full bottles. You must completely use up the buff before reactivating it. However, the bottles will continue to refill, even if its buff is active.
</StickyNote>

## Refilling Bottles
Each buff has different conditions for refilling. The first bottle of each buff can be filled by simply waiting for 360 minutes to pass (you do not have to be online during this time). Subsequent bottles will require specific actions from the player.

See the table below for a brief overview of the buffs, and click the links to see more details on each liquid memory.

## List of effects
<LiqMemTable />

### Unused Effects
Below are some liquid memory effects that weren't available in the closed beta or network test. It's unknown whether or not these effects will be available in the future or removed.
- Increased chance to get a great success
- Increased chance of more sockets when crafting weapons 
- Increased respawn rate of resources
- Increased EXP gained from enemies
- Increased Luno gained from enemies

## Bottle Acquisition

### Greater harvest when gathering
#### When Life Gives You Memories
**Requires Adv. Rank 3.**  
Accept the quest "When Life Gives You Memories" from the quest receptionist in the Frontiering Station at Asterleeds. Listen to the Memory Stand Attendant's explanation on Liquid Memories to complete. This quest is required to unlock the Memory Stand.

<hr>

### Gathering speed up
#### Apprentice In An Appren-tizzy
**Requires Class Lv. 20.**  
Accept the quest "Apprentice In An Appren-tizzy" from Patti next to the Asterleeds Beach Memory Stand. 
<!-- Speak to Hanna at the Shrine entrance in Asterleeds. Complete Pillar of Divinity (Advanced Survey) to obtain the Engram Collector and give it to Hanna. Report back to Patti to complete. -->

<hr>

### Increased EXP from enemies
#### 次なる成長の試練

<hr>


### Increased enemy drop rate
#### Treasure Chest in Melisos River Basin
Open the treasure chest found in the Northwest region of Melisos River Basin.
![Chest Location](https://cdn.discordapp.com/attachments/1066964551444201473/1097469547176546304/image.png)

#### The Laid-Back Lab's Latest
**Requires Class Lv. 13.**  
Accept the quest "The Laid-Back Lab's Latest" (おっとり研究者の最新作) from Louise in Asterleeds. She can be found up the Northeast stairs by The Revolving Helm Pavillion warp gate. 

Gather 5 Moonstones in Quellmount's Foot (can only be obtained during nighttime) and report back to Louise. Next, gather 5 Sunshine Shells in Fier Highwaters (can only be obtained during daytime) and report back to Louise to complete. <!-- ルイーゼ, 廻る舵輪亭, 空間転送ポータル, 満月石, ニッコウガイ -->

<hr>

### More GC when completing missions
#### 初心、帰りて

### Increased Alliance EXP
#### 再確認は大事

### Cheaper prices from NPC shops

### Reduced luno cost when crafting weapons
#### 幻怪の商人

### Increased profits when selling
#### 見習いには難しい発注

<style lang="scss">

    @for $i from 2 through 10 {
        h3:nth-of-type(#{$i})::before {
            content: '';
            display: inline-block;
            width: 48px;
            height: 48px;
            transform: scale(1.3);
            margin: -0.75rem 0 -0.75rem -0.8rem;
            background-size: cover;
            pointer-events: none;

            @if $i <= 5 {
                background-image: url('/images/liquidMemory/orange.png');
            }
            @if $i > 5 and $i <= 6 {
                background-image: url('/images/liquidMemory/blue.png');
            }
            @if $i > 6 and $i <= 7 {
                background-image: url('/images/liquidMemory/purple.png');
            }
            @if $i > 7 and $i <= 10 {
                background-image: url('/images/liquidMemory/green.png');
            }
        }

        // Color coded Table of Contents
        // Index is 1 lower than above because nth-of-type does not count the h3 "Unused Effects" here, while it does above.
        .toc-item-h3:nth-of-type(#{$i - 1}) {
            @if $i <= 4 {
                color: #ed6f18;
            } 
            @if $i > 4 and $i <= 5 {
                color: #63b3b7;
            }
            @if $i > 5 and $i <= 6 {
                color: #6c3588;
            }
            @if $i > 6 and $i <= 10 {
                color: #419f3f;
            }
        }
    }

    h4 {
        font-size: 1em;
        & + p {
            margin-top: 0;
        }
    }

    .toc-item-h4 {
        color: var(--text1);
        list-style: number;
        margin-left: 1rem;
    }
</style>