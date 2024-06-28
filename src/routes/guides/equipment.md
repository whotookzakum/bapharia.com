---
title: 'Equipment'
author: 'Zakum'
date: '2024-6-27'
category: 'Game Systems'
caption: 'All about equipment in BLUE PROTOCOL, including weapons and imagine.'
bannerImg: "/guides/weapons/banner.webp"
thumbImg: "/guides/weapons/thumb.webp"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import YouTube from '$lib/components/YouTube.svelte';
</script>

<!-- <YouTube 
    title="Weapons and Plugs" 
    id="zcSPxPQwuTo"
    bleed
/> -->

## Weapons
Weapons provide stats and often have an element. Switching weapon types will automatically change your class (once you have completed the Class Master's [quest](/db/quest/SQ101_001)). Base weapons for each class can be purchased from the vendor in Asterleeds.

### Obtaining Weapons
Weapons can be obtained from treasure chests dropped by enemies inside of dungeons. You must successfully clear the entire dungeon to get treasure chest rewards. Specific drop rate information can be found on the [database](/db).

<details class="surface1 p-4 rounded-2xl" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Beyond: Crafting & Great Success</summary>
    <small class="text3 font-semibold">The following section applies to weapons added to the game before the Beyond update (v1.06.000).</small>
    <p>
        Weapons can be crafted at the Crafting Machine found in town. Their recipes can be acquired through quests and <a href="/guides/adventure-boards">Adventure Boards</a>. 
    </p>
    <p>
        When obtaining a weapon, either through crafting or from a chest, there is a chance of it being a <strong>Great Success</strong>, granting more plug sockets and higher special effect values. When crafting, there are tickets that can boost the Great Success rate. There are also tickets that can guarantee a Great Success, though the amount needed will vary based on the weapon.
    </p>
</details>

### Weapon Stats
Weapons can have an [element](/guides/combat#elements), so you can generate elemental charge even when using non-elemental skills. You will also do bonus damage to enemies that are weak against that element. When your weapon element and skill element are the same, the Elemental Attack stat is added to your attack when calculating damage. Both weapon element and skill element are [factors when determining damage](/guides/combat#weapon-skill-interaction).

Weapon Battle Score is determined by Special Effect (both rarity and values) and Limit Break. Formula TBD.

<details class="surface1 p-4 rounded-2xl" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Beyond: Battle Score & Special Effects</summary>
    <small class="text3 font-semibold">The following section applies to weapons added to the game before the Beyond update (v1.06.000).</small>
    <p>
        Weapons provide <strong>50 &times; (Item Level)</strong> Battle Score, and they will level sync if their max item level is higher than your current class level.
    </p>
    <p>
        Special Effects provide bonus damage to a classification of enemies. For example, a highly sought-after line is Grand Killer G1 (Ground Killer) which deals 11% bonus damage to all enemies that stand on the ground. The Special Effect on a weapon is randomly determined between a few weapon-specific options and cannot be changed. The bonus damage is randomly determined within a range.
    </p>
    <table>
        <caption style="caption-side: bottom;">
            Special Effects for <a href="/db/weapons/106001201">Pyroclastic Bow</a>.<br>Demihuman Killer applies to a broader range of enemies and thus has lower values.
        </caption>
        <thead>
            <tr>
                <th>Special Effect</th>
                <th>Great Success Value</th>
                <th>Success Value</th>
                <th>Probability</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Golem Killer G1</td>
                <td>+11% ~ +13%</td>
                <td>+5% ~ +8%</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Goblin Killer G1</td>
                <td>+11% ~ +13%</td>
                <td>+5% ~ +8%</td>
                <td>40%</td>
            </tr>
            <tr>
                <td>Demihuman Killer G1</td>
                <td>+9% ~ +11%</td>
                <td>+4% ~ +7%</td>
                <td>40%</td>
            </tr>
        </tbody>
    </table>
    <p>
        There are also some Special Effects that only appear on weapons obtained from dungeon treasure chests. For the weapon above, it is a Boar Killer line.
    </p>
</details>

You can use the Limit Break system to transfer Special Effects from one weapon to another of the same type.

### Ability Plugs
Ability Plugs are weapon attachments that provide stat bonuses (ATK/HP/Stamina, etc.) and strengthen specific skills (cooldown reduction, skill damage, etc.). Speak to the [Weapon Reconstructor](/map) to attach plugs to empty sockets by using [Union Paste](/db/items/175100000). The number of empty sockets is determined by probability.

| Sockets  | Probability |
|----------|-------------|
| 1        | 0%         |
| 2        | 0%         | 
| 3        | 0%         | 
| 4        | 0%         |

<details class="surface1 p-4 rounded-2xl" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Beyond: Socket Probability</summary>
    <small class="text3 font-semibold">The following section applies to weapons added to the game before the Beyond update (v1.06.000).</small>
    <p>
        The number of empty sockets will be determined by whether the weapon was a Success or a Great Success. Socket Expansion tickets can be used to open more sockets on a weapon with less than 4 sockets.
    </p>
    <table>
        <caption style="caption-side: bottom">
            Example weapon: <a href="/db/weapons/106001201">Pyroclastic Bow</a>.
        </caption>
        <thead>
            <tr>
                <th>Socket Count</th>
                <th>Probability (Great Success)</th>
                <th>Probability (Success)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>0%</td>
                <td>100%</td>
            </tr>
            <tr>
                <td>2</td>
                <td>15%</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>50%</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>4</td>
                <td>35%</td>
                <td>0%</td>
            </tr>
        </tbody>
    </table>
</details>

A plug will randomly be assigned a **1~5★** value when attached, indicating the strength of its effect. [Tuning Tickets](/db/tokens/140000300) randomize the values of all inserted plugs—use [Ability Value Preservation Tickets](/db/tokens/140000400) to lock plugs you don't want to reroll. The number of tickets needed will vary based on the weapon.

| Precision | Probability |
|-----------|-------------|
| 5★        | 10%         |
| 4★        | 10%         | 
| 3★        | 20%         | 
| 2★        | 30%         | 
| 1★        | 30%         | 

Plugs can be removed using [Plug Removal Tickets](/db/tokens/140000700), though if you wish to keep the plug, you will need [Plug Retrieval Tickets](/db/tokens/140000900). The number of tickets needed will vary based on the weapon. You can use the Limit Break system to transfer plugs from one weapon to another of the same type (this removes the need to consume tickets when re-plugging).

~~Plugs do not increase your Battle Score.~~



### Weapon Limit Break