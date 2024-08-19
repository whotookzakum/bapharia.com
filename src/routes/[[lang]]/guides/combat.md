---
title: 'Combat'
author: "Zakum"
date: '2024-8-18'
category: 'Game Systems'
caption: 'An overview of all combat-related mechanics.'
bannerImg: "/guides/combat/banner.jpg"
thumbImg: "/guides/combat/thumb.jpg"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import PartyChainTable from "$lib/components/guides/PartyChainTable.svelte";
    import Formula from "$lib/components/guides/Formula.svelte"
    
    import IconMask from "$lib/components/IconMask.svelte"
    import ClassIcon from "$lib/components/ClassIcon.svelte"
    import { assetUrl } from "$lib/utils";
</script>

## Intro
This guide covers some general aspects of BLUE PROTOCOL's combat systems. **Make sure to also read the [Stats](/guides/stats), [Elements](/guides/elements), [Equipment](/guides/equipment), and [Status Ailments](/guides/status-ailments) guides for a better overall understanding.**

<!-- **Ability** is a common term in the game referring to a passive effect. It's used in Skills to describe passive skills (such as Class-Shared Ability), in [Weapon "Ability" Plugs](/guides/weapons-and-plugs#ability-plugs), in [Battle Imagine and Enhance Imagine](/guides/imagine) (referring to their passive stat line). Just keep in mind that the keyword **Ability = passive**. -->

## Damage Formula
<Formula
    formula={`
        \\text{Total Damage} = 
        \\text{Round}[
            (
                \\text{ATK} + \\text{Elemental ATK} 
                + \\sqrt{\\text{ATK} + \\text{Elemental ATK}} 
                - \\text{Enemy DEF} \\div 2
            ) 
            \\times \\text{Total Skill Damage} 
            \\times (1 + \\text{Crit Damage}) 
            \\times \\text{Elemental Resistance}
            \\times \\text{Rand}(0.97 ～ 1.03) 
            \\times \\text{Various Modifiers} 
        ]
            \\times \\text{Decimal Modifiers}
    `}
    footnote={`Round: decimals are rounded to the nearest integer.<br>ATK: in the case of Battle Imagine skills, a hidden "Skill Effect Value" is used.<br>Elemental ATK: see <a href='/guides/elements#weapon-skill-interaction'>Elements</a>.<br>Total Skill Damage: the skill's base damage (G1) plus any damage increases from skill grade (G2+), calculated per hit (not the sum of all hits).<br>Crit Damage: set to 0 when calculating non-critical hits.<br>Elemental Resistance: see <a href='/guides/elements#elemental-resistance'>Elements</a>.<br>If final damage < 0, set damage to 0; else set damage floor to 1.`}
/>
<!-- If 0 ≤ final damage < 1, set damage to 1.  -->

### Modifiers
Items within the same category are additive, while entire categories themselves are multiplicative with each other.

| Category | Description |
|----------|-------------|
| 1        | Buffs, debuffs, abnormal statuses, burst bonus, damage plugs, special effects, abilites (excluding those related to elemental resistance), excluding modifiers to ATK or modifiers that exist in other categories |
| 2-1      | Tactical Skills: Over-reload, Ignition, Prepare Mode |
| 2-2      | Tactical Skills: Blood Axe β; multiplicative with 2-1 |
| 3        | Combo Gauge (Twin Striker), Vanguard (Aegis Fighter class ability) |
| 4        | Weak Attack (Blast Archer); Follow Up (passive) modifies this multiplier |
| 5        | Weak Point (1.5x damage on enemies that have weak points) |
| 6        | Damage Burst (Spell Caster class-shared ability) |
| 7        | Exaltation (Twin Striker class-shared ability); <b class="accent1">※ Decimal modifier</b> |
| 8        | Party Chain Bonus; <b class="accent1">※ Decimal modifier</b> |
| 9        | Slash, Thrust, Blow Resistance (±2.5%); see [Stats](/guides/stats#enemy-stats) |

<!-- "Extra Modifiers"? -->
Decimal Modifiers are left as decimal values, so they are multiplied *after* most of the damage formula has been rounded.

## Aggro & Combat Status
The battle HUD has an icon whose color indicates your state of aggro. This guide will use the phrasing "in combat" to refer to either of the two states.

| Icon | State |
|------|-------|
| <IconMask src="/UI/HateAlert/UI_HateAlertIcon1.webp" width="80" height="40" style="background: var(--color-sensed)" /> | An enemy is aware of your presence |
| <IconMask src="/UI/HateAlert/UI_HateAlertIcon1.webp" width="80" height="40" style="background: var(--color-targeted)" /> | An enemy is actively targeting you |

When in combat, various actions consume stamina (see [stamina](/guides/stats#stamina)). 

When your weapon is unsheathed, your jump height is reduced and you cannot sprint until you sheathe your weapon. Your weapon can be sheathed by pressing the interact key, summoning a mount, or by initiating sprinting.

## Skills
Skills can be unlocked by leveling up. Learn more about skills on the [classes](/classes) page. 

Skill components include:
- Base Multiplier: affects damage dealt and elemental charge accumulation from weapons
- Power Multiplier: increases damage dealt by multiplying with the Base Multiplier <!-- (does not increase elemental charge) -->
- Elemental Charge value: a fixed number that is added to the skill's Elemental Charge accumulation, unaffected by Base Multiplier
- Cooldown: the timer after casting a skill before it can be used again. 
- Stagger Effect: makes it easier to trigger damage reactions <!-- Not guaranteed to stagger, but MAY stagger based on enemy's resistance. reword to "Has a chance to trigger damage reactions"? Don't know if B-Imagines are probabilty based and skills are guaranteed. -->
- Hit Interval: the time in between hits on multi-hitting skills <!-- ヒットインターバル：ヒット後、次のヒットが可能となるまでの時間。エネミー個々に対するダメージを与える間隔。-->
- Other effects (depends on skill)

<StickyNote type="note">
    Cooldown reduction in BLUE PROTOCOL does not reduce the timer number but rather makes the timer count down faster.
</StickyNote>

<StickyNote type="warning">
    Cooldown reduction is multiplicative, not additive, so it has diminishing returns. For example, using 20% + 15% cooldown reduction on a 20s skill results in 20 * 0.8 * 0.85 = 13.6s. It would be incorrect to add these Cooldown values to 35% before doing the calculation, i.e. 20s * 0.65 = 13s.
</StickyNote>

The developers have stated that they prefer to add more skill diversity to existing classes than create new classes that aren't very unique.

### Skill Variants
After reaching level 50 you can start unlocking Tactical Skills' Alpha and Beta variants. These variants alter how a skill works, such as increasing the number of hits, adding additional buffs/debuffs, and more.

**Alpha skills** can be purchased with class talismans (available from [Class Adventure Boards](/guides/adventure-boards#class-boards)) at the Class Master. To unlock the shop, complete all of his [quests](/db/quests/SQ101_145) (you need to be Level 50 to purchase from the shop).

**Beta skills** have a chance of dropping in Survey, Advanced Survey, and Raid Missions. Only the 8 skills currently equipped on your palette are eligible for beta variant drops.

## EXP & Drops
When an enemy is defeated, **all players** who dealt at least 1 damage to the enemy will **receive full EXP and drops**. In party play, **all party members** receive full EXP and drops if at least one of their members dealt at least 1 damage to the enemy.

<StickyNote type="warning">
    Players that are 8 or more levels below the enemy level will not be eligible for rewards, regardless of other party members' levels.
</StickyNote>

<!-- TODO: swiki says be in range of the enemy. I might've tested it wrong cause our result was be in range of the player who defeated the enemy. -->
<!-- TODO: show image of the ranges of Party Chain, Enemy Drops, and Charlotte α buff range -->
**In order to receive rewards, players must be within a certain distance of the defeated enemy.** The range is slightly larger than Enemy Render Distance 4. The range is irrelevant to Party Chain range.

![Example of drop distance](https://cdn.discordapp.com/attachments/1120727618573058069/1257650153821704192/image.png?ex=66bf2f7a&is=66bdddfa&hm=98b7e51fa7c2da32a2f7fcfc5d2768bef4f204ac02ddcbfaf2f5aca30ab0bb88&)

### EXP
EXP gain is scaled based on your [level difference](/guides/stats#level) with the enemy. Enemies in Missions do not give EXP.

### Items
Item drop rate and contents are determined on a **per-player** basis. Players may have differing drop rate multipliers via consumable items and [liquid memories](/guides/liquid-memories). Consumables and boxes go straight to the player's inventory, and other drops are sent to storage. 

<!-- If you and I are collecting rare drops in the same party, there may be times where one of us gets the drop and the other doesn't. If I'm using a <a href="/db/item/123000110" target="_blank" rel="noopener noreferrer nofollow">G2 Drop-Drop</a> and you are not, my drop rate for items will be 1.3x and yours will be 1x. -->

### Treasure Chests
Treasure chest drop rate is determined on a **per-party** basis, using the drop rate of the party member with the highest drop rate. Solo players are considered as being in a party of one. When a chest drops, it is visible to other party members as well. 

Treasure chest contents are determined on a per-player basis. In Fields and Free Exploration, Treasure chests *must be opened* to receive the rewards inside. You will be notified if your inventory is full (chest contents are not automatically sent to the storage). In Missions, chest do not need to be opened--their contents are automatically added to your clear rewards.

<!-- If you and I are in the same party and I'm using a <a href="/db/item/123000110" target="_blank" rel="noopener noreferrer nofollow">G2 Drop-Drop</a> and you are not, your drop rate for chests will also be 1.3x. In regards to chest contents, an elite monster chest might give you 2 <a href="/guides/imagine#recipes" target="_blank" rel="noopener noreferrer nofollow">Idea</a> while I only get 1 (elite monsters have a 100% chance of dropping a chest, but the chest can contain different rewards). -->

## Party Chain
The party chain is a combo count of all party members' hits. As it accumulates, your deals increased damage and healing. The higher the chain count, the less time you have to successfully perform another attack before the chain ends. The party chain will reset to 0 if no attacks successfully hit an enemy before the timer ends.

If the chain is reset before the first buff is applied (50/250/150 chain; see chart), it can instantly be reinitiated, otherwise there is a 10 second cooldown before starting a new chain. In Raids and Defense Battle, the cooldown is 30 seconds, and Twin Striker's Drain Fever is nullified. 

Party Chain effects are centered on the **party leader**, so if you are too far away from the leader, you won't receive any bonuses. This also means that if 5 players are hitting enemies but the party leader is far away, no one will receive Chain effects. 

When out of range of the party leader, the Party Chain UI will show an icon of a red, broken chain—no icon is shown for the party leader. The radius is 2.33x of Lock-on range, or slightly longer than Render Distance 4, and is increased 5x in Defense Battle.

Damage from most debuffs—such as Fire DoT, Poison, and Laceration—do not count towards the party chain.

<PartyChainTable />

## Parts Destruction
Some enemies have designated parts that can be destroyed, downing the enemy for a brief period. Attacking this point will deal increased damage. This is separate from Blast Archer's [Weak Point Targeting](/classes/6#weak-point-targeting).

## PvP
**There is no player versus player system in BLUE PROTOCOL.** PvP refers to Party vs Party—player party vs enemy AI party. Similar to players, enemies will cooperate and try to take down you and your allies. 

Enemy leaders are indicated by a star **☆** preceeding their name, and they will give orders to other enemies.

## Map Gimmicks
In Missions such as Defense Battle, there exist objects that grant advantages to enemies that can be broken by doing damage to them.

### Commonalities
- HP is set per-location
- Critical hits will work, but the damage text will show non-critical text
- Not considered enemies, so effects that require hitting an enemy will not activate
- Buffs, debuffs, and abnormal statuses cannot be applied
- Buffs and debuffs do not affect damage dealt to them (such as skill damage plugs), except for certain effects that increase damage dealt (multiplicative categories, such as Twin Striker's Ignition)

### Enemy Gates
- Only exists in Defense Battle as of v1.06.100
- While alive, spawns enemies nearby
- After being broken, the enemies that it spawned will continue to be active

### Enemy Strengthening Device
- Exists in certain Missions
- Grants a map-wide, permanent buff to all enemies that disappears after its broken (the buff type and power depends on its location)