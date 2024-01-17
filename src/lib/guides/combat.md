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
</script>

BLUE PROTOCOL has several aspects of combat that contribute to its fast-paced action. Let's take a look at each one.

- in combat vs being targeted vs being targeted (and the timers on them)
- "Ability" refers to passive



## 🧮 Stats
Each class has various stats that can be altered by equipping and upgrading [Weapons](/guides/weapons-and-plugs) and [Imagine](/guides/imagine). Base Stats in particular have different effects based on whether you are playing a physical class or a magic class.

<img src="https://cdn.discordapp.com/attachments/862600196704829443/1092825223226732555/image.png" alt="Battle Build page showing stats and loadout">

<StatsTable />

For example, increasing STR on a physical class will increase its ATK as well (will be reflected on the character page). Refer to the table below for the "true value" formulas. **Decimal values will be truncated**.

<BaseStatsConversionTable />

### ❤️ HP
Hit Points (or Health Points). When your HP reaches 0, your character will be downed and can be resurrected by other players interacting with you. Rescue time is decreased as more players interact with a downed player. 

In dungeons, you will automatically revive after some time if not rescued by others. Dungeons may have **limited revives shared between all party members**—these will not be consumed if the downed player is rescued by party members. If a party member is defeated with 0 lives left, the party will fail the dungeon and be kicked out, forfeiting all rewards.

In fields, you can remain downed and wait for someone to rescue you, or can choose to respawn after a short timer. ~~If you choose to respawn, you will have the Weak debuff, decreasing your Max HP and movement speed.~~

When in fields or free exploration dungeons, **HP will continuously recover over time** while not in combat (1% of max HP every 3 seconds). While sitting (on an object or via an emote), you will recover 5% of max HP every 3 seconds. Visiting **a village with a warp gate** or **sitting near a campfire** will allow you to recover 5% of max HP every second. Natural HP recovery is disabled in dungeons.

HP can be recovered through various means such as [skills](/guides/combat#skills), [party chain](/guides/combat#party-chain), [buffs](/guides/combat#abnormal-statuses), suppliers, and [Battle Imagine](/guides/imagine#battle-imagine).

### 🏃‍♀️ Stamina
Stamina is consumed when performing certain actions. Stamina consumption can be reduced by certain skills and Enhance Imagine [abilities](/guides/imagine#abilities-1). Max stamina can be increased by certain skills, such as Heavy Smasher's [passive skill](/classes/19/skills#stamina-up), and Enhance Imagine abilities.

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

### 📶 Level
Raising your class level will increase your stats and reduce the effects of equipment **level syncs** (details below). By raising your Adventurer Rank, you can increase the maximum level cap for your character.

The **level difference** between a player and an enemy influences how much **damage and elemental charge** a player will deal and **EXP** they will gain by defeating that enemy. For enemies that are 8 or more levels higher than you, your attacks will do 0 damage (thus you won't be eligible for drops and won't be able to activate certain effects that require hitting an enemy). 

<LevelDifferenceTable />

### 💯 Battle Score
Battle Score is the rating of a player's equipment. While it doesn't directly convey how powerful a player is, it represents the level of equipment a player is using.

| Equipment           | Post-Limit Break Update                       | Pre-Limit Break Update |
|---------------------|-----------------------------------------------|------------------------|
| **Weapon**          | (60 × Item Level) + (160 × Limit Break Level) | 50 × Item Level        |
| **Battle Imagine**  | -                                             | 10 × Item Level        |
| **Enhance Imagine** | (8 × Item Level) + (16 × Limit Break Level)   | 6 × Item Level         |

Level and Battle Score are common requirements to entering [Missions](/guides/missions).

### 😱 Level Sync
If an item's max level exceeds your class level, the item will be level synced down, **reducing all of its stats besides Vitality** to match your class level.
Since VIT is not level synced, you will end up with higher HP and defense than usual. 

Level syncs also exist in dungeons, forcefully adjusting all high level players' stats to an appropriate level for the content.

<StickyNote type="tip">
    Ability Plugs, Abilities (passive skills, Imagine passives), Special Effects (weapon lines), and Skills are not affected by level syncs.
</StickyNote>

### ⚜️ Adventurer Rank
Raising your Adventurer Rank allows you to accept new quests (including continuing the main story quest), raises your maximum level cap, and provides some goodies. To raise your Adventurer Rank, you need to complete a Rank Up [Adventure Board](/guides/adventure-boards). Some ranks also require you to pass an exam (speak to NPC Millie at the Reclamation Bureau).








<!-- https://blueprotocol.swiki.jp/index.php?%E3%83%90%E3%83%88%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0#fb0adbfc -->

## 🔥 Elements
Players can use 6 elements in BLUE PROTOCOL: Fire, Ice, Thunder, Earth, Light, and Dark. They can be utilized through elemental skills, weapons, and [Battle Imagine](/guides/imagine#battle-imagine).

When using a neutral (non-elemental) skill, the skill will inherit the element of your weapon. 

That being said, skill element and weapon element *both* factor into your damage in regards to elemental weaknesses. In other words, on an enemy that is weak against fire, you will do more damage using a fire skill + fire weapon than a fire skill + ice weapon. Elemental weaknesses are explained in detail below.

### Elemental Charge
Attacking with elements will fill the Elemental Charge gauge underneath an enemy's health bar. Filling it past the level 1, 2, or 3 threshold will apply an **Elemental Effect** on the enemy, based on which element has contributed the most charge. If not filled to the next level within a certain amount of time, the gauge will reset.

The active element can <a href="https://www.youtube.com/live/K6euuPFx5wg?feature=share&t=7704" target="_blank" rel="noreferrer noopener nofollow">change between levels</a>, though the active debuff will remain until replaced, or the elemental charge gauge resets.

<StickyNote type="note">
    Elemental charge is accumulated regardless of the element you are currently using, so all players can contribute towards the gauge.
</StickyNote>

<!-- It's currently unknown whether a weapon's Elemental Power stat influences how fast elemental charge is built, or if its simply for damage against enemies with elemental weaknesses. -->

### Elemental Effects
At level 1 and 2, a debuff is applied, with level 2 being a stronger version. Level 3 triggers an **Elemental Burst**, which deals considerable damage and begins **Burst Bonus Time**.

<ElementsTable />

<StickyNote type="tip">
    Enemies will also use elements to apply debuffs on players. If players get affected by the Ice or Earth Elemental Bursts, other players can hit them to help free them faster.
</StickyNote>

### Burst Bonus Time
Activating an Elemental Burst will trigger *Burst Bonus Time* for **10 seconds**. Players and Battle Imagine will deal increased damage, and elemental effects are removed.

A **Burst Finish Gauge** will appear with a level 1 indicator next to it. Attacking with elements will rapidly fill the gauge. Levels are increased by 1 each time the gauge is filled, up to level 5.

After Burst Bonus Time ends, a **Burst Finish** will occur, dealing damage based on the gauge's level. Some elements will also apply buffs or debuffs after a Burst Finish (see table above).

<figure>
    <video src="/guides/elements/burstfinish.mp4" controls preload="none" poster="/guides/elements/burstfinishposter.webp">
        <track kind="captions">
    </video>
    <figcaption>Demonstration of the Elemental Burst and Burst Bonus Time mechanics. The Burst Finish Gauge starts to flash white as Burst Bonus Time comes to an end.</figcaption>
</figure>

## Elemental Weakness
Attacking with the element that an enemy is weak against will allow you to do increased damage, indicated by an icon next to your damage numbers. The icon has 3 versions, denoting how effective the damage increase is.

<div class="flex">
    <img src="/UI/DamageUI/UI_DamageUIWeakness1.png" alt="Weakness 1" width="48" height="84" />
    <img src="/UI/DamageUI/UI_DamageUIWeakness2.png" alt="Weakness 2" width="48" height="84" /> 
    <img src="/UI/DamageUI/UI_DamageUIWeakness3.png" alt="Weakness 3" width="48" height="84" /> 
</div>

It's currently unknown what the damage multipliers are, or how they can be derived from an enemy's elemental weakness.

## Weapon-Skill interaction
When using both an elemental weapon and an elemental skill, the skill's element will be prioritized. Most classes have a set of non-elemental skills if they want to use their weapon's element. However, Spell Caster players may want to consider that all of their tactical skills are elemental--they may be unable to use certain elements.

<!-- エネミーに属性攻撃を与えるたびに属性値が蓄積していき、一定量を超えると最も多い属性の属性状態異常を起こします。（異なる属性の攻撃を当てても、属性値は蓄積します）属性状態異常はLv1、Lv2、バーストの3段階で段階が進むほど効果も高まります。

武器の中には属性を持っているものがあります。エネミーの弱点属性と武器の属性が合致するとダメージ表記が変わり、与ダメージが増えていることが分かります。弱点属性を突くことで素早く敵を倒すことができるので、武器の属性も意識してみましょう。

属性蓄積値を蓄積させてバーストを発生させると、一定時間バーストボーナスタイムとなります。ボーナスタイム中は与ダメージがアップする状態となり、さらにバトルイマジンの与ダメージがよりアップするボーナスもありバトルイマジンで効率よくダメージを与えることができます。また、バーストボーナスタイム中は属性蓄積値を蓄積することでバーストフィニッシュゲージを増加します。一定以上ゲージが溜まるとバーストフィニッシュレベルがアップしバーストボーナスフィニッシュした時の効果を大きくできます。バーストフィニッシュレベルを上げて大ダメージも狙いましょう！ -->







## 🪄 Skills
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

### 📈 Skill Variants
G3 Skills have three variations: Normal, Alpha, and Beta variants. These variants slightly alter how a skill works, such as increasing the number of hits, adding additional buffs/debuffs, and more.

G3 **Alpha skills** can be purchased with class tokens at the Class Master. To unlock his shop, you need to be **Adventure Rank 9** and **Class Level 45** and complete all of his quests. To *purchase* from the shop, you need to be Level 50. 

The class tokens can be obtained from tasks in the **Class Adventure Boards**. To get these boards, you must complete a quest chain given by your respective "class instructor" NPC. Below are links to the **final** quest in the quest chain—you can follow the prerequisites backwards to find where to start.

- [Blast Archer class board quest line](/db/quest/SQ103_235)
- [Twin Striker class board quest line](/db/quest/SQ103_234)
- [Spell Caster class board quest line](/db/quest/SQ103_236)
- [Aegis Fighter class board quest line](/db/quest/SQ103_233)
- [Heavy Smasher class board quest line](/db/quest/SQ103_237)
- [Blitz Lancer class board quest line](/db/quest/SQ103_238)

<StickyNote type="tip">
    It's recommended to get the class boards as soon as possible after reaching level 45 for maximum efficiency.
</StickyNote>

<StickyNote type="caution">
    You can NOT make progress towards a class board on a different class.
</StickyNote>

The class tokens can be collected on one class and used on another.

G3 **Beta skills** have a chance of dropping in **Survey & Advanced Survey Missions** after you reach **level 50**. Only the skills that you currently have equipped on your palette will be eligible for a beta skill drop. The drop rates are notoriously low.

## 💪 Buffs & Debuffs
Abnormal statuses that can be applied to players or enemies. Debuffs from elemental effects can be found in the [elements](/guides/combat#-elements) section.

<AbnormalStatusesTable />

## 🗡️ EXP & Drops
When an enemy is defeated, **all players** who dealt at least 1 damage to the enemy will be **eligible to receive full EXP and drops**. In party play, **all party members** will be eligible if at least one of their members dealt at least 1 damage to the enemy.

<StickyNote type="warning">
    Players that are 8 or more levels below the enemy level will not be eligible for rewards, regardless of other party members' levels. 
</StickyNote>

<!-- TODO: be in range of the enemy or in range of the player who defeated it? -->
**In order to receive rewards, players must be within a certain distance of the enemy.**

EXP gain is scaled based on your [level difference](/guides/combat#-level) with the enemy. Enemies in Missions do not give EXP.

**Item drops** are determined on a **per-player** basis. Players may have differing drop rate multipliers (via consumable items and [liquid memories](/guides/liquid-memories)). Item drops go straight to the player's inventory (consumables) or storage (non-consumables). 

For example, if you and I are collecting rare drops in the same party, there may be times where one of us gets the drop and the other doesn't. If I'm using a [G2 Drop-Drop](/db/item/123000110) and you are not, my drop rate for items will be 1.3x and yours will be 1x.

**Treasure chest drops** are determined on a **per-party** basis, using the drop rate of the party member with the highest drop rate. Solo players are considered as being in a party of one. When a chest drops, it is visible to other party members as well. Treasure chests *must be opened* to receive the rewards inside and its **contents are determined on a per-player** basis. 

For example, if you and I are in the same party and I'm using a [G2 Drop-Drop](/db/item/123000110) and you are not, your drop rate for chests will also be 1.3x. In regards to chest contents, an elite monster chest might give you 2 [Idea](/guides/imagine#recipes) while I only get 1 (elite monsters have a 100% chance of dropping a chest, but the chest can contain different rewards).

<!-- TODO: do drop rates stack in dungeons? test 6x drop drops in dungeons -->

## ⚔️ PvP
**There is no player versus player system in BLUE PROTOCOL.** PvP refers to Party vs Party—player party vs enemy AI party. Similar to players, enemies will cooperate and try to take down you and your allies. 

Enemy leaders will be indicated by a star **☆** preceeding their name, and they will give orders to other enemies.

<!-- TODO: confirm that party chain affects healing? -->
## ♾️ Party Chain
The party chain is a combo count of all party members' hits. As it accumulates, your party gains a slight increase in damage and self-healing effects. The higher the chain count, the less time you have to successfully perform another attack before the chain ends. The party chain will reset to 0 if no successful attacks are detected before the timer ends.

If the chain is reset while over 50 hits, there will be a 10 second cooldown before starting another chain. Otherwise, the chain can instantly be reinitiated.

Raids require higher chain count for some effects because there are more players. In raids, if the chain is reset while over 250 hits, the cooldown will be 30 seconds. 

If you are too far away from the party leader, you won't receive party chain effects. (Needs confirmation if its based on distance from party leader or between any/all party members).

Elemental damage-over-time debuffs do not count towards the party chain.

<!-- TODO: なお、ツインストライカーのクラスアビリティ「ドレインフィーバー」は影響を受けない。 -->
<PartyChainTable />

## 🎯 Parts Destruction
Some enemies have designated parts that can be destroyed, downing the enemy for a brief period. Attacking this point will deal increased damage. This is separate from Blast Archer's [Weak Point Targeting](/classes/6#weak-point-targeting).