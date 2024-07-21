---
title: 'Combat'
author: "Zakum"
date: '2023-6-5'
category: 'Game Systems'
caption: 'An overview of all combat-related mechanics.'
bannerImg: "/guides/combat/banner.jpg"
thumbImg: "/guides/combat/thumb.jpg"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import StatsTable from '$lib/components/guides/StatsTable.svelte';
    import BaseStatsConversionTable from '$lib/components/guides/BaseStatsConversionTable.svelte';
    import LevelDifferenceTable from '$lib/components/guides/LevelDifferenceTable.svelte';
    import StaminaConsumptionTable from "$lib/components/guides/StaminaConsumptionTable.svelte";
    import AbnormalStatusesTable from "$lib/components/guides/AbnormalStatusesTable.svelte";
    import PartyChainTable from "$lib/components/guides/PartyChainTable.svelte";
    import ElementsTable from "$lib/components/guides/ElementsTable.svelte";
    import EleResistDamageTable from "$lib/components/guides/EleResistDamageTable.svelte";
    import { assetUrl } from "$lib/utils";
</script>

BLUE PROTOCOL has several aspects of combat that contribute to its fast-paced action.

## Precursor

The UI has an aggro icon whose color indicates <span style="color: orange">when enemies have sensed your presence</span> and <span style="color: red">when they are actively engaging you</span>.

<div><img src={assetUrl("/UI/HateAlert/UI_HateAlertIcon1.png")} alt="aggro indicator" width="80" height="40"></div>

For the purposes of this guide, **being in combat** will refer to when a player has their weapon out (unsheathed and in a combatative stance), and **being targeted** will refer to either scenario that you have aggro. 

When targed, various actions consume stamina and when in combat your jump height is reduced and you cannot sprint (you must sheathe your weapon). Your weapon can be sheathed by pressing the interact key, summoning a mount, or by initiating sprinting.

**Ability** is a common term in the game referring to a passive effect. It's used in Skills to describe passive skills (such as Class-Shared Ability), in [Weapon "Ability" Plugs](/guides/weapons-and-plugs#ability-plugs), in [Battle Imagine and Enhance Imagine](/guides/imagine) (referring to their passive stat line). Just keep in mind that the keyword **Ability = passive**.

## Stats
Each class has various stats that can be altered by equipping and upgrading [Weapons](/guides/weapons-and-plugs) and [Imagine](/guides/imagine). Base Stats in particular have different effects based on whether you are playing a physical class or a magic class.

<img src="https://cdn.discordapp.com/attachments/862600196704829443/1092825223226732555/image.png" alt="Battle Build page showing stats and loadout">

<StatsTable />

For example, increasing STR on a physical class will increase its ATK as well (will be reflected on the character page). Refer to the table below for the "true value" formulas. **Decimal values will be truncated**.

<BaseStatsConversionTable />

### HP
Hit Points (or Health Points). When your HP reaches 0, your character will be downed and can be resurrected by other players interacting with you. Rescue time is decreased as more players interact with a downed player. 

In dungeons, you will automatically revive after some time if not rescued by others. Dungeons may have **limited revives shared between all party members**—these will not be consumed if the downed player is rescued by party members. If a party member is defeated with 0 lives left, the party will fail the dungeon and be kicked out, forfeiting all rewards.

In fields, you can remain downed and wait for someone to rescue you, or can choose to respawn after a short timer. ~~If you choose to respawn, you will have the Weak debuff, decreasing your Max HP and movement speed.~~

When in fields or free exploration dungeons, **HP will continuously recover over time** while not in combat (1% of max HP every 3 seconds). While sitting (on an object or via an emote), you will recover 5% of max HP every 3 seconds. Visiting **a village with a warp gate** or **sitting near a campfire** will allow you to recover 5% of max HP every second. Natural HP recovery is disabled in dungeons.

HP can be recovered through various means such as [skills](/guides/combat#skills), [party chain](/guides/combat#party-chain), [buffs](/guides/combat#buffs--debuffs), suppliers, and [Battle Imagine](/guides/imagine#battle-imagine).

### Stamina
Stamina is consumed when performing certain actions. Stamina consumption can be reduced by certain skills and Enhance Imagine [abilities](/guides/imagine#abilities-1). Max stamina can be increased by certain skills, such as Heavy Smasher's [passive skill](/classes/19/skills#119501), and Enhance Imagine abilities.

<StaminaConsumptionTable />

Dodging provides a brief window of invulnerability, and can be used to cancel some player animations. To perform a **dodge attack**, press the basic attack and class action keys simultaneously after dodging. 

<StickyNote type="note">
    Dodges cannot be performed in the air.
</StickyNote>

If an enemy hits you during dodge invulnerability, you will perform a **perfect dodge**, indicated by a blue particle effect. Performing a dodge attack immediately after a perfect dodge will **increase the damage of the dodge attack** and may provide extra benefits such as restoring Shield Gauge (Aegis Fighter) or increasing dodge attack size (Spell Caster). 

<!-- TODO: List all perfect dodge attack effects? -->

A **springboard jump** can be performed while pressing the jump key while in the air and near an enemy—you will jump off the enemy for added height. Melee classes will jump straight up, and ranged classes will jump backwards. The enemy will be staggered and aggro the player. 

Jumping and Springboard jumping can be used to cancel some animations even when no enemy is nearby. 

A **plunge attack** (or assault attack) can be performed by melee classes by pressing the basic attack and class action keys simultaneously while midair. If performed from a high enough altitude, the attack will receive an **elevation bonus**, dealing extra damage and providing extra benefits such as binding enemies (Aegis Fighter) or applying a movement speed down debuff (Heavy Smasher). 

<!-- TODO: List all elevated plunge attack effects? -->

<StickyNote type="tip">
    Springboard jumping provides enough height to grant the elevation bonus.
</StickyNote>

Finally, all classes can utilize **Rebound** (Ukemi) by pressing the dodge key right when you land after getting knocked down. When performed correctly, your character will get up faster than usual.

<figure>
    <img src="/guides/combat/ukemi by panke.jpg" alt="Explanation of Ukemi from the in-game handbook">
    <figcaption>Screenshot of the in-game handbook explaining Ukemi (by <a href="https://twitter.com/panke219/status/1643933953190154243" rel="noopener nofollow noreferrer" target="_blank">Panke</a>)</figcaption>
</figure>

Learn more about each class' perfect dodge attack effects, plunge attack, and animation cancels on their [class page](/classes).

### Level
Raising your class level will increase your stats and reduce the effects of equipment **level syncs** (details below). By raising your Adventurer Rank, you can increase the maximum level cap for your character.

The **level difference** between a player and an enemy influences how much **damage and elemental charge** a player will deal and **EXP** they will gain by defeating that enemy. For enemies that are 8 or more levels higher than you, your attacks will do 0 damage (thus you won't be eligible for drops and won't be able to activate certain effects that require hitting an enemy). 

<LevelDifferenceTable />

### Battle Score
Battle Score is the rating of a player's equipment. While it doesn't directly convey how powerful a player is, it represents the level of equipment a player is using.

| Equipment           | Post-Limit Break Update                       | Pre-Limit Break Update |
|---------------------|-----------------------------------------------|------------------------|
| **Weapon**          | (60 × Item Level) + (160 × Limit Break Level) | 50 × Item Level        |
| **Battle Imagine**  | -                                             | 10 × Item Level        |
| **Enhance Imagine** | (8 × Item Level) + (16 × Limit Break Level)   | 6 × Item Level         |

Level and Battle Score are common requirements to entering [Missions](/guides/missions).

### Level Sync
If an item's max level exceeds your class level, the item will be level synced down, **reducing all of its stats besides Vitality** to match your class level.
Since VIT is not level synced, you will end up with higher HP and defense than usual. 

Level syncs also exist in dungeons, forcefully adjusting all high level players' stats to an appropriate level for the content.

<StickyNote type="tip">
    Ability Plugs, Abilities (passive skills, Imagine passives), Special Effects (weapon lines), and Skills are not affected by level syncs.
</StickyNote>

### Adventurer Rank
Raising your Adventurer Rank allows you to accept new quests (including continuing the main story quest), raises your maximum level cap, and provides some goodies. To raise your Adventurer Rank, you need to complete a Rank Up [Adventure Board](/guides/adventure-boards). Some ranks also require you to pass an exam (speak to NPC Millie at the Reclamation Bureau).

## Elements
Players and enemies can use 6 elements in BLUE PROTOCOL: Fire, Ice, Thunder, Earth, Light, and Dark. They can be utilized through elemental skills, weapons, and [Battle Imagine](/guides/imagine#battle-imagine). Elements influence combat via **Elemental Effects** and **Elemental Resistance**.

### Elemental Charge
Attacking with elements will fill the **Elemental Charge gauge** underneath an enemy's health bar. Filling it to level 1 (100 charge), level 2 (300 charge), or level 3 (600 charge) will apply an **Elemental Effect** on the enemy, based on which element has contributed the most charge. 

<StickyNote type="note">
    Charge is accumulated even if you are using a different element.
</StickyNote>

The active element (shown on the gauge) can <a href="https://www.youtube.com/live/K6euuPFx5wg?feature=share&t=7704" target="_blank" rel="noreferrer noopener nofollow">change between levels</a>, though the active debuff will remain until replaced at the next level, or the gauge resets. The condition to prevent the gauge from resetting is determined by the current gauge level.

| Gauge Level | Time limit extension condition |
|-------------|-----------------|
| Lv. 0       | Accumulate **any amount of charge** within 60 seconds (20 seconds on players)  |
| Lv. 1+      | Reach the **next charge level** within 60 seconds (20 seconds on players)      |

Elemental Charge is accumulated for both your weapon and skill elements (at some ratio).

Enemies in Missions, Raids, and Elite Monsters have a multiplier that reduces the accumulation rate of elemental charge, i.e. 0.16x for Survey/Advenaced Survey and 0.33x for Rush Battle.

<details>
    <summary style="color: purple">Elemental Accumulation Formula</summary>
    <div>
        <p style="padding-top: 0">Non-elemental Action:</p>
        <code style="line-height: 2; color: purple">(Base Multiplier × 7) × Elemental Resistance × Elemental Buff</code>
        <p>Elemental Action:</p>
        <code style="line-height: 2; color: purple">(Base Multiplier × 7 × 0.3 + Element's Accumulation Value) × Elemental Resistance × Elemental Buff</code>
        <p>The stat "Elemental Attack" found on weapons does not influence Elemental Charge accumulation.</p>
        <p>Elemental Resistance (including from buffs/debuffs) does influence Elemental Charge accumulation, but the ratio is different from elemental damage.</p>
        <p>Elemental buffs also influence Elemental Charge accumulation, but similar to resistance, it's not clear if the formula is different from that for damage.</p>
        <p>The relationship between Elemental Resistance and Elemental buffs are currently unknown, so they are currently listed separately. It's possible that enemy resistance and player buffs are in the same category and thus additive.</p>
    </div>
</details>

### Elemental Effects
At level 1 and 2, a debuff is applied, with level 2 being a stronger version. Level 3 triggers an **Elemental Burst**, which deals considerable damage and begins **Burst Bonus Time**.

<ElementsTable />

<StickyNote type="tip">
    Fire: Level 1 and 2 burn damage is affected by fire resistance at the time that the debuff was applied. After the burn is applied, the damage will not change even if the enemy's fire resistance changes. Aim to apply fire resistance down debuffs before the gauge reaches Level 1 or Level 2.
</StickyNote>
<StickyNote type="tip">
    Players can hit frozen and petrified allies to help free them faster.
</StickyNote>

<!-- TODO: confirm reduced effects? -->
**The effects of Level 1 and 2 Fire are reduced by 75% against Elite Monsters and Raid Bosses.**

### Burst Bonus Time
Activating an Elemental Burst will trigger *Burst Bonus Time* for **10 seconds**. Players and Battle Imagine will deal increased elemental damage, and Level 2 elemental effects are removed. The damage boost is determined by the element of the attack (prioritizing skill element).

<table>
    <thead>
        <tr>
            <th>Elements</th>
            <th>Player Damage</th>
            <th>Battle Imagine Damage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_1.png")} alt="Fire" width="36" height="36">
                <img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_2.png")} alt="Thunder" width="36" height="36">
                <img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_5.png")} alt="Light" width="36" height="36">
                <img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_6.png")} alt="Dark" width="36" height="36">
            </td>
            <td>+15%</td>
            <td>+20%</td>
        </tr>
        <tr>
            <td>
                <img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_3.png")} alt="Ice" width="36" height="36">
                <img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_4.png")} alt="Earth" width="36" height="36">
            </td>
            <td>+10%</td>
            <td>+15%</td>
        </tr>
        <tr>
            <td>
                <img src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_Empty.png")} alt="No element" width="36" height="36">
            </td>
            <td>+0%</td>
            <td>+10%</td>
        </tr>
    </tbody>
</table>

<small>Burst Bonus Time is part of the buff/debuff category in the damage formula.</small>

<details style="margin-top: 1rem">
    <summary style="color: purple">Example</summary>
    <table>
        <thead>
            <tr>
                <th>Weapon Element</th>
                <th>Skill Element</th>
                <th>Damage Increase</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_3.png")} alt="Ice" width="36" height="36"></td>
                <td><img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_1.png")} alt="Fire" width="36" height="36"></td>
                <td>15%</td>
            </tr>
            <tr>
                <td><img src={assetUrl("/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_3.png")} alt="Ice" width="36" height="36"></td>
                <td><img src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_Empty.png")} alt="Non-elemental" width="36" height="36"></td>
                <td>10%</td>
            </tr>
            <tr>
                <td><img src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_Empty.png")} alt="Non-elemental" width="36" height="36"></td>
                <td><img src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_Empty.png")} alt="Non-elemental" width="36" height="36"></td>
                <td>0%</td>
            </tr>
        </tbody>
        <caption style="text-align: left">(During burst bonus time)</caption>
    </table>
</details>

A **Burst Finish Gauge** will appear with a level 1 indicator next to it. Attacking with elements will rapidly fill the gauge. Levels are increased by 1 each time the gauge is filled, up to level 5.

| Gauge Level | Charge Required for next level | Total Charge Required |
|-------------|--------------------------------|-----------------------|
| Level 1→2   | 30                             | 30                    |
| Level 2→3   | 30                             | 60                    |
| Level 3→4   | 40                             | 100                   |
| Level 4→5   | 40                             | 140                   | 

After Burst Bonus Time ends, a **Burst Finish** will occur, dealing damage based on the gauge's level. Some elements will also apply buffs or debuffs after a Burst Finish (see table above).

<figure>
    <video src="/guides/elements/burstfinish.mp4" controls preload="none" poster="/guides/elements/burstfinishposter.webp">
        <track kind="captions">
    </video>
    <figcaption>Demonstration of the Elemental Burst and Burst Bonus Time mechanics. The Burst Finish Gauge starts to flash white as Burst Bonus Time comes to an end.</figcaption>
</figure>

<StickyNote type="note">
    After an Elemental Burst Finish (or Elemental Burst on players), there is a 30 second cooldown before you can start filling the gauge again.
</StickyNote>

<!-- TODO: confirm reduced effects? -->
Elemental Burst and Burst Finish damage is not affected by defense or elemental resistance. **The effects of Burst and Burst Finish are reduced by 75% against Elite Monsters and Raid Bosses.**

### Elemental Resistance
Players and enemies both have elemental resistance for each element, influencing damage taken and elemental charge buildup. Negative resistance values indicate that the target is weak to that element. 

<StickyNote type="note">
    There is a limit on how much you can reduce elemental resistance using debuffs. The max damage gains are +50% damage for targets weak against the element and +10% for targets resistant to the element.
</StickyNote>

| Resistance level | Damage | Elemental charge | Damage (max) | Ele. charge (max) |
|----------|---------------------|--------------------------------------------|---------------|----|
| **Weakness** | <span style="color: green">+20%</span> | <span style="color: green">+10%</span> | <span style="color: green">+50%</span> | ? |
| **Resistant** | <span style="color: red">-20%</span> | <span style="color: red">-10%</span>  | <span style="color: green">+10%</span> | ? |
| **Resistant (Elemental-type enemy)** | <span style="color: red">-40%</span> | <span style="color: red">-20%</span> | ? | ? |
<!-- TODO: Need a row for Weakness (Elemental-type enemy)? do they have any substantial value for ele weakness? -->

Debuffs that reduce Elemental Resistance are additive to the target's elemental resistance stat. When debuffing an element that the target is resistant to, **the debuff's potency will be reduced to 20%**.

<details>
    <summary style="color: purple">Example</summary>
    <p class="box">
        On an enemy weak to Fire, applying Fire Resist Down (small) will result in +20% → <strong>+40%</strong> damage.<br>
        On an enemy resistant to Fire, applying Fire Resist Down (small) will result in -20% → <strong>-16%</strong> damage.
    </p>
</details>

Chevron icons next to your damage number indicate that the enemy is weak against an element (affected by debuffs as well).

<div class="flex">
    <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness1.png")} alt="Weakness 1" width="48" height="84" />
    <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness2.png")} alt="Weakness 2" width="48" height="84" /> 
    <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness3.png")} alt="Weakness 3" width="48" height="84" /> 
</div>

<details>
    <summary style="color: purple">Elemental-Resistance-to-Damage Formula</summary>
    <p class="box">
        If target's Elemental Resistance &lt; 0 (weakness)<br>
        <code style="color:purple">Damage Multiplier = ( 1 - Elemental Resistance × 0.04 )</code><br>
        If target's Elemental Resistance &gt; 0 (resistant)<br>
        <code style="color:purple">Damage Multiplier = ( 1 - Elemental Resistance × 0.008 )</code><br>
        <br>
        From this formula, we can derive that Spell Caster's Trinity Shot (applies All Ele Resist Down (Small)) and normal (non-elemental) enemies' weakness element value is -5, normal enemies' resistant element value is +25, and elemental enemies' resistant value is +50.<br>
        <br>
        Ex: An enemy weak to Fire (-5) with Trinity Shot debuffs (-5), attacked by a fire weapon and fire skill:<br>
        <code style="color:purple">( 1 - ( -10 × 0.04 ) ) = 1.4</code>
    </p>
</details>

### Weapon-Skill Interaction
Skill element and weapon element **both** factor into your damage in regards to elemental weaknesses. In other words, on an enemy that is weak against fire, you will do more damage using a fire skill + fire weapon than a fire skill + ice weapon. The skill will retain its element (fire) even if equipped with a different element weapon (ice).

If the weapon and skill **elements match**, the weapon's Elemental Attack stat is added to your attack when calculating damage. **Non-elemental skills** will always get this bonus because they **inherit the weapon element**.

Most classes have a set of non-elemental skills if they wish to use their weapon's element.

<StickyNote type="warning">
    Spell Caster's tactical skills are almost entirely elemental, thus they may not be able to utilize certain elements effectively. 
</StickyNote>

If the weapon and skill **elements do not match**, damage from resistance is calculated at a **30/70 ratio of weapon/skill**. In other words, you may only get a portion of the damage increase/decrease mentioned in the [Elemental Resistance section](/guides/combat#elemental-resistance) based on which elements you use. Additionally, Elemental Charge is accumulated for both elements.

<details>
    <summary style="color: purple">Formula Examples</summary>
    <p class="box">
        Enemy resistant to Fire, not resistant to Ice; using Fire Weapon and Ice Skill.<br>
        <code style="color:purple">Fire Weapon (0.8 damage) × (0.3 ratio) + Ice Skill (1.0 damage) × (0.7 ratio) = 0.94</code>
    </p>
    <p class="box">
        Enemy weak to Ice, not resistant to Fire; debuffed to increase damage; using Fire Weapon and Ice Skill<br>
        <code style="color:purple">Fire Weapon (1.2 damage) × (0.3 ratio) + Ice Skill (1.5 damage) × (0.7 ratio) = 1.41</code>
    </p>
</details>

<EleResistDamageTable />

## Skills
Skills can be unlocked by leveling up. You can equip the following: 

Active skills: 
- 1 basic attack
- 1 class action (subaction)
- 8 tactical skills
- 1 ultimate skill
- 2 battle imagine
- 2 (passive) class-restricted abilities
- 2 (passive) class-shared abilities
- all unlocked base abilities

<img src="https://cdn.discordapp.com/attachments/862607211981045781/1092070007413940244/image.png" alt="Twin Striker skills page">

<StickyNote type="tip">
    Basic attacks can have variations that perform different attacks and provide buffs. After leveling up your basic attack, try using it while holding a directional key!
</StickyNote>

Learn more about the class actions and class abilities on the [classes page](/classes).

The developers have stated that they prefer to add more skill diversity to existing classes than create new classes that aren't very unique.

### Skill Variants
At G3+, skills have three variations: Normal, Alpha, and Beta variants. These variants slightly alter how a skill works, such as increasing the number of hits, adding additional buffs/debuffs, and more.

**Alpha skills** can be purchased with class talismans (available from [Class Adventure Boards](/guides/adventure-boards#class-boards)) at the Class Master. To unlock the shop, complete all of his [quests](/db/quests/SQ101_145) (you need to be Level 50 to purchase from the shop).

**Beta skills** have a chance of dropping in **Survey & Advanced Survey Missions** after you reach **level 50**. Only the skills that you currently have equipped on your palette will be eligible for a beta skill drop. The drop rates are notoriously low.

## Buffs & Debuffs
Abnormal statuses that can be applied to players or enemies. Debuffs from elemental effects can be found in the [elements](/guides/combat#elements) section.

<AbnormalStatusesTable />

## EXP & Drops
When an enemy is defeated, **all players** who dealt at least 1 damage to the enemy will be **eligible to receive full EXP and drops**. In party play, **all party members** will be eligible if at least one of their members dealt at least 1 damage to the enemy.

<StickyNote type="warning">
    Players that are 8 or more levels below the enemy level will not be eligible for rewards, regardless of other party members' levels. 
</StickyNote>

<!-- TODO: be in range of the enemy or in range of the player who defeated it? -->
**In order to receive rewards, players must be within a certain distance of the enemy.**

EXP gain is scaled based on your [level difference](/guides/combat#level) with the enemy. Enemies in Missions do not give EXP.

**Item drops** are determined on a **per-player** basis. Players may have differing drop rate multipliers (via consumable items and [liquid memories](/guides/liquid-memories)). Item drops go straight to the player's inventory (consumables) or storage (non-consumables). 

<details>
    <summary style="color: purple">Example</summary>
    <p class="box">
        If you and I are collecting rare drops in the same party, there may be times where one of us gets the drop and the other doesn't. If I'm using a <a href="/db/item/123000110" target="_blank" rel="noopener noreferrer nofollow">G2 Drop-Drop</a> and you are not, my drop rate for items will be 1.3x and yours will be 1x.
    </p>
</details>

**Treasure chest drops** are determined on a **per-party** basis, using the drop rate of the party member with the highest drop rate. Solo players are considered as being in a party of one. When a chest drops, it is visible to other party members as well. Treasure chests *must be opened* to receive the rewards inside and its **contents are determined on a per-player** basis. 

<details>
    <summary style="color: purple">Example</summary>
    <p class="box">
        If you and I are in the same party and I'm using a <a href="/db/item/123000110" target="_blank" rel="noopener noreferrer nofollow">G2 Drop-Drop</a> and you are not, your drop rate for chests will also be 1.3x. In regards to chest contents, an elite monster chest might give you 2 <a href="/guides/imagine#recipes" target="_blank" rel="noopener noreferrer nofollow">Idea</a> while I only get 1 (elite monsters have a 100% chance of dropping a chest, but the chest can contain different rewards).
    </p>
</details>
<!-- TODO: do drop rates stack in dungeons? test 6x drop drops in dungeons -->

## Party Chain
<!-- TODO: confirm that party chain affects healing? -->
The party chain is a combo count of all party members' hits. As it accumulates, your party gains a slight increase in damage and self-healing effects. The higher the chain count, the less time you have to successfully perform another attack before the chain ends. The party chain will reset to 0 if no successful attacks are detected before the timer ends.

If the chain is reset while over 50 hits, there will be a 10 second cooldown before starting another chain. Otherwise, the chain can instantly be reinitiated.

Raids require higher chain count for some effects because there are more players. In raids, if the chain is reset while over 250 hits, the cooldown will be 30 seconds.  

If you are too far away from the party leader, you won't receive party chain effects. (Needs confirmation if its based on distance from party leader or between any/all party members).

Elemental damage-over-time debuffs do not count towards the party chain.

<PartyChainTable />

## Parts Destruction
Some enemies have designated parts that can be destroyed, downing the enemy for a brief period. Attacking this point will deal increased damage. This is separate from Blast Archer's [Weak Point Targeting](/classes/6#weak-point-targeting).

## PvP
**There is no player versus player system in BLUE PROTOCOL.** PvP refers to Party vs Party—player party vs enemy AI party. Similar to players, enemies will cooperate and try to take down you and your allies. 

Enemy leaders will be indicated by a star **☆** preceeding their name, and they will give orders to other enemies.