---
title: 'Equipment'
author: 'Zakum'
date: '2024-8-18'
category: 'Game Systems'
caption: 'All about equipment in BLUE PROTOCOL, including weapons and imagine.'
bannerImg: "/guides/weapons/banner.webp"
thumbImg: "/guides/weapons/thumb.webp"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import YouTube from '$lib/components/YouTube.svelte';
    import Formula from '$lib/components/guides/Formula.svelte';
    import BattleImagineSkillBreakdown from '$lib/components/guides/BattleImagineSkillBreakdown.svelte';
    import { assetUrl } from "$lib/utils";
</script>

<!-- <YouTube 
    title="Weapons and Plugs" 
    id="zcSPxPQwuTo"
    bleed
/> -->

## Overview
Equipment in BLUE PROTOCOL comes in three distinct forms—weapons, Battle Imagine (skills), and Enhance Imagine (armor). All items can be equipped at any level but will <b style="color: var(--color-levelsync)">Level Sync</b> if your class level is lower than the item level, reducing its stats (more details [here](/guides/stats#level-sync)).

<blockquote class="italic text2" style="background: none; border-radius: 0; border-left: solid 6px var(--text3); padding: 0.5rem 1rem">
    Imagine are the embodiment of spiritual elements, such as powerful emotions or thoughts of a living creature.
</blockquote>

<!-- ### Discarding, Dismantling, and Selling Equipment -->
Visit the storage NPC to dismantle your unused equipment for crafting materials or sell them for Luno. They can also be discarded from your inventory or storage.

## Limit Break
Limit Breaking equipment involves consuming duplicate copies of an item for a chance to enhance its stats. The higher the Limit Break level, the more materials needed and the lower the chance. Failing a Limit Break attempt **will not consume the duplicate copies of the item**, but will consume Luno and Fusion Materia (a generic material for Limit Breaking).

As of v1.06.100, the maximum Limit Break level is +5, which requires 1 base copy plus 11 duplicates. The only exception are the EX Battle Imagine which require only 1 base copy plus 5 duplicates.

You can transfer passive lines and ability plugs through the Limit Break system, effectively letting you Limit Break now and optimize later. For example, if I had a 9% damage line on a weapon but later found one with 12% damage, I can simply transfer the 12% line over to my main weapon. Weapons will automatically take the highest socket count out of all of the duplicates and the base copy. 

Additionally, a max Limit Break item can still be fed duplicate copies to transfer passives, plugs, and sockets. Since it is already max Limit Break, the success rate is 100%.

An item that has been Limit Broken will only count as 1 copy if used as a material.

<StickyNote type="tip">
    Attach Ability Plugs on your duplicate weapons and transfer them to your main weapon through Limit Break to avoid having to spend Plug Removal Tickets!
</StickyNote>

Weapons, Battle Imagine, and Enhance Imagine all have tickets that can be used to substitute one copy of the item when Limit Breaking, mainly obtained through gacha, events, the Rose Orb Store, and Season Passes.

<StickyNote type="note">
    Limit Breaking a Battle Imagine to +5 increases the effectiveness and duration of any buffs and debuffs it provides to 1.5 times. This only applies at +5 and is multiplied AFTER the Imagine's Max Level Bonus (explanation below).
</StickyNote>

<StickyNote type="caution">
    Locked items are still be eligible to use as a Limit Break material. You will receive a warning message if you select an item that is locked.
</StickyNote>

## Weapons
Weapons provide stats and often have an element. Switching weapon types will automatically change your class (after completing the Class Master's [quest](/db/quest/SQ101_001)). Base weapons for each class can be purchased from the vendor in Asterleeds.

### Obtaining Weapons
Weapons can be obtained from treasure chests dropped by enemies inside of dungeons. You must successfully clear the entire dungeon to get treasure chest rewards. Specific drop rate information can be found on the [database](/db).

<details class="surface1 p-4 rounded-2xl" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Beyond: Crafting & Great Success</summary>
    <small class="text3 font-semibold">The following section applies to weapons added to the game before the Beyond update (v1.06.000).</small>
    <p>
        Weapons can also be crafted at the Crafting Machine found in town. Their recipes can be acquired through quests and <a href="/guides/adventure-boards">Adventure Boards</a>. 
    </p>
    <p>
        When obtaining a weapon, either through crafting or from a chest, there is a chance of it being a <strong>Great Success</strong>, granting more plug sockets and higher special effect values. When crafting, there are tickets that can boost the Great Success rate. There are also tickets that can guarantee a Great Success, though the amount needed will vary based on the weapon.
    </p>
</details>

## Weapon Stats
Weapons can have an [element](/guides/combat#elements), so you can generate elemental charge even when using non-elemental skills. Both weapon element and skill element are [factors when determining damage](/guides/combat#weapon-skill-interaction). When your weapon element and skill element are the same, the Elemental Attack stat is added to your attack when calculating damage. 

### Legendary weapons and Special Effects
Weapons come with a Normal, Rare, or Legendary rarity that determines which Special Effects it can have. Normal Special Effects are typically stat increases, while Rare introduces some unique mechanics such as perfect dodging to generate a healing AoE. Legendary Special Effects are class-specific bonuses, such as Twin Striker's Moving Master which reduces Stamina consumption when dodging and jumping by up to 100%.

<p>
    A Special Effect typically has two values, though some Normal weapons have one. On Legendary weapons, <img src={assetUrl("/UI/Common/UI_CmnSpecileMain_Num1.webp")} alt="value I" width="16" height="20" class="inline" /> is the effectiveness of whatever bonus the Special Effect gives (i.e. Moving Master), and <img src={assetUrl("/UI/Common/UI_CmnSpecileMain_Num2.webp")} alt="value II" width="16" height="20" class="inline" /> is an attack bonus. Each value is randomly selected from a range of five tiers, such as 60%/70%/80%/90%/100% and 26%/27%/28%/29%/30%, respectively.
</p>

As of v1.06.000, each Legendary line has a 1% chance of dropping, and there are two lines per weapon type. Furthermore, the probability to get a double max roll is 1%. There exist tickets that reroll the Special Effect; tickets that reroll the Special Effect but guarantee the same rarity or higher; tickets that reroll only the values; and tickets that raise both values by 1 tier. 

<details class="surface1 p-4 rounded-2xl" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Beyond: Special Effects</summary>
    <small class="text3 font-semibold">The following section applies to weapons added to the game before the Beyond update (v1.06.000).</small>
    <p>
        Special Effects provide bonus damage to a classification of enemies. For example, a highly sought-after line is Ground Killer G1 which deals 11% bonus damage to all enemies that stand on the ground. The Special Effect on a weapon is randomly determined between a few weapon-specific options and cannot be changed. The bonus damage is randomly determined within a range.
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
    <p style="margin-bottom: 0">
        There are also some Special Effects that only appear on weapons obtained from dungeon treasure chests. For the weapon above, it is a Boar Killer line.
    </p>
</details>

### Limit Break Effect
At max Limit Break, weapons gain a Limit Break Effect which is simply an attack bonus. The value is randomly selected from a range of five tiers: 100/250/400/550/700. Both the Limit Break Effect and Special Effect can be transferred to another weapon via Limit Break.

### Weapon Battle Score
Weapon **Battle Score** can be represented as the following formula:

<Formula
    name="weaponBattleScore"
    tabs={[{
        label: "Formula",
        value: "formula",
        formula: `
            \\text{Weapon Battle Score} = 
            (60 \\times \\text{Item Level}) + 
            (120 \\times \\text{Limit Break Level}) + 
            \\text{Battle Score Modifier} + 
            (\\text{Rarity Coefficient} \\times \\text{Special Effect I Tier}) + 
            (\\text{Rarity Coefficient} \\times \\text{Special Effect II Tier}) + 
            (200 \\times \\text{Limit Break Effect Tier}) + 
            \\text{Battle Score from Plugs}
        `,
        footnote: "Battle Score Modifier: a fixed value assigned to each weapon (?)<br>Rarity Coefficient: based on rarity (normal/rare/legendary)"
    },
    {
        label: "Try it",
        value: "try-it",
        component: "WeaponBattleScore"
    }]}
/>

<details class="surface1 p-4 rounded-2xl" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Beyond: Battle Score</summary>
    <small class="text3 font-semibold">The following section applies to weapons added to the game before the Beyond update (v1.06.000).</small>
    <Formula
        inline
        class="block mt-4 text-center"
        formula={`\\text{Weapon Battle Score} = (60 \\times \\text{Item Level}) + (120 \\times \\text{Limit Break Level})`}
    />
    <p style="margin-bottom: 0">
        Before the Limit Break system was introduced, weapons gave <Formula inline formula={`(50 \\times \\text{Item Level})`} /> Battle Score.
    </p>
</details>

## Ability Plugs
Ability Plugs are weapon attachments that provide stat bonuses (ATK/HP/Stamina, etc.) or strengthen specific skills (cooldown reduction, skill damage, etc.). They are commonly obtained through dungeons, events, Mount Caravan, quests and Adventure Boards.

<Formula
    style="gap: 0"
    formula={`
        \\text{Plug Battle Score} = 
        [(5 \\times \\text{Precision}) + (25 \\times \\text{Grade} - 25)] \\times \\text{Sockets}
    `}
    footnote="For G3 Skill Plugs, set Grade to 5."
/>
<!-- G3 Skill Plugs are treated as the same grade as G5. -->

<StickyNote type="tip">
    The value of attack plugs has diminished considerably since the v1.06.000 update introduced weapons with very high attack. Skill plugs can be efficiently obtained through Rush Battle 3 (G1), Rush Battle 5 (G2), and Rush Battle 7 (G3).
</StickyNote>

Speak to the Weapon Reconstructor to attach plugs to empty sockets by using [Union Paste](/db/items/175100000). The number of empty sockets is determined by probability when obtaining the weapon, and can be increased through Socket Expansion Tickets or Limit Breaking.

| Sockets  | Probability |
|----------|-------------|
| 1        | 75.000%     |
| 2        | 3.750%      | 
| 3        | 12.500%     | 
| 4        | 8.750%      |

<details class="surface1 p-4 rounded-2xl mt-4" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Beyond: Socket Probability</summary>
    <small class="text3 font-semibold">The following section applies to weapons added to the game before the Beyond update (v1.06.000).</small>
    <p>
        The number of empty sockets will be determined by whether the weapon was a Success or a Great Success. Since a Great Success is typically (if not always) 25%, the rates are mostly identical.
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

A plug's effectiveness is based on its grade (G1, G2, etc.) and its precision (1~5★, randomly assigned when attached). [Tuning Tickets](/db/tokens/140000300) randomize the precision of all inserted plugs and [Ability Value Preservation Tickets](/db/tokens/140000400) lock plugs you don't want to reroll. The number of tickets needed will vary based on the weapon.

| Precision | Probability |
|-----------|-------------|
| 5★        | 10%         |
| 4★        | 10%         | 
| 3★        | 20%         | 
| 2★        | 30%         | 
| 1★        | 30%         | 

<StickyNote type="note">
    You cannot attach multiple copies of the same plug into a weapon—they must be different plugs or a different grade, i.e. Desperado G3 and Desperado G2.
</StickyNote>

Plugs can be removed using [Plug Removal Tickets](/db/tokens/140000700), though if you wish to keep the plug, you will need [Plug Retrieval Tickets](/db/tokens/140000900). The number of tickets needed will vary based on the weapon. 

## Battle Imagine
Battle Imagine are equipment that provide base stats, a passive **Ability** (more stats), and an **active skill** to be used in combat. EX Battle Imagine are Battle Imagine of the story characters (such as Feste and Tyris). Players can equip up to 2 Battle Imagine, but they must be different Imagine.

Battle Imagine recipes are unlocked by obtaining the Imagine's "Idea", a crafting material. Ideas drop from their respective Named Enemies in the overworld and can sometimes be found in treasure chests dropped by enemies. Additionally, Named Enemies can drop their pre-crafted Battle Imagine at a low chance. EX Battle Imagine Ideas and Recipes can be obtained through the GC shop, Season Passes, and the BPP store.

## Battle Imagine Stats
Battle Imagine come with a passive Ability that is randomly selected from their possible abilities. Abilities can be flat stat boosts, such as DEX +13, or can be percentage stats, such as Melee Damage +11%. 

Limit Breaking Battle Imagine will increase their base stats, but not the power of their ability.

### Battle Imagine Skills
Every Battle Imagine has either an attack, heal, or support-type skill. Examples including skills that bind or stun, skills that reduce Elemental Resistance, and temporary party buffs. Skills that deal elemental damage have a fixed Elemental Charge value.

Imagine damage and healing are based on a hidden stat referred to as [Skill Effect Value](/guides/combat#damage-formula). Skill Effect Value is subject to level sync—reducing damage and healing—and does not increase through Limit Breaking.

Battle Imagine Skills are subject to various strengthening multiplier, such as when they are not affected by level sync and at +5 Limit Break.

<BattleImagineSkillBreakdown />

The Flare & Frost Demidragon Battle Imagine have a hybrid skill; when the skill button is pressed normally it performs a fire/ice breath attack, and when the skill button is held down it provides the [Imajinn Triggered](/guides/status-ailments#buffs--debuffs) buff.

### Battle Imagine Battle Score
Battle Imagine do not provide battle score, so you are free to switch them out without worrying about being locked out of content.

<details class="surface1 p-4 rounded-2xl" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Limit Break: Battle Score</summary>
    <small class="text3 font-semibold">The following section applies to weapons added to the game before the Limit Break update.</small>
    <Formula
        inline
        class="block mt-4 text-center"
        formula={`\\text{Battle Imagine Battle Score} = 10 \\times \\text{Item Level}`}
    />
</details>

## Awakened Battle Imagine
The Flare Demidragon is the first Awakened Battle Imagine, introduced in v1.07.000. When equipped, your weapon's Limit Break Effect is doubled. The recipe requires far more materials than normal Battle Imagine.

## Enhance Imagine
Enhance Imagine are equippable items that provide base stats and Abilities, similar to armor in other games. They do not alter your character's appearance. Up to 5 Enhance Imagine can be worn, each in their respective, uniquely-shaped slots. 

Enhance Imagine recipes can be acquired through quests and Adventure Boards. After acquiring the recipe, head to the Imagine Research Institute to craft the Imagine.

## Enhance Imagine Stats
Like Battle Imagine, Enhance Imagine each come with a randomly selected Ability from their available abilities list. Post-Beyond update Enhance Imagine abilities have tiers (1-5★) that determine its strength and battle score. Crafting an Enhance Imagine will always result in a middle-tier (3★) ability. Some abilities, such as SP G6, give increased battle score.

Limit Breaking Enhance Imagine will increase their base stats, but not the power of their ability. As of v1.06.100, there is currently no way to alter an Enhance Imagine's ability or ability tier (other than transferring them via Limit Break).

### Enhance Imagine Battle score
Enhance Imagine Battle Score formula is currently unknown.

<details class="surface1 p-4 rounded-2xl" style="max-inline-size: var(--text-length)">
    <summary class="arrow accent2">Pre-Beyond: Battle Score</summary>
    <small class="text3 font-semibold">The following section applies to Enhance Imagine added to the game before the Beyond update (v1.06.000).</small>
    <Formula
        inline
        class="block mt-4 text-center"
        formula={`\\text{Enhance Imagine Battle Score} = (8 \\times \\text{Item Level}) + (16 \\times \\text{Limit Break Level})`}
    />
    <p style="margin-bottom: 0">
        Before the Limit Break system was introduced, Enhance Imagine gave <Formula inline formula={`(6 \\times \\text{Item Level})`} /> Battle Score.
    </p>
</details>

## Mount Imagine
<small class="accent1">Although they do not affect your stats, mounts are still considered Imagine.</small>

Mount Imagine are rideable creatures useful in traversing the open world.

Mounts have a standard running speed which is faster than player movement. They also have a faster dashing speed which consumes energy. Energy will quickly recover while not dashing. Additionally, Mount Drive potions allow your mount to dash without consuming energy for some time.

A free Land Fox mount can be obtained by playing through the main story. More mounts can be acquired in the Exchange Shop and through Gacha/BPP Store.

Mounts can be dispatched to the [Mount Caravan](/guides/mount-caravan) to collect materials, equipment, plugs, and more in the background.