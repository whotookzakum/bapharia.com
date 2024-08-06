---
title: 'Elements'
author: 'Zakum'
date: '2023-5-26'
category: 'Game Systems'
caption: 'Explanation of the elemental system and a list of elemental effects.'
bannerImg: "/guides/elements/banner.jpg"
thumbImg: "/guides/elements/thumb.webp"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import ElementsTable from '$lib/components/guides/ElementsTable.svelte';
    import { assetUrl } from "$lib/utils"
</script>

## The Six Elements
Players can use 6 elements in BLUE PROTOCOL: Fire, Ice, Thunder, Earth, Light, and Dark. They can be utilized through elemental skills, elemental weapons, and elemental [Battle Imagine](/guides/imagine#battle-imagine).

### Elemental Charge
Attacking with elements will fill the Elemental Charge gauge underneath an enemy's health bar. Filling it past the level 1, 2, or 3 threshold will apply an **Elemental Effect** on the enemy. The gauge will be depleted over time.

<StickyNote type="note">
    Elemental charge is accumulated regardless of the element you are currently using, so all players can contribute towards the gauge.
</StickyNote>

The active element that shows on the gauge is determined by which element has contributed the most charge. The active element can <a href="https://www.youtube.com/live/K6euuPFx5wg?feature=share&t=7704" target="_blank" rel="noreferrer noopener nofollow">change between levels</a>, though the active debuff will remain until replaced.

It's currently unknown whether a weapon's Elemental Power stat influences how fast elemental charge is built, or if its simply for damage against enemies with elemental weaknesses.

### Effects
At level 1 and 2, a debuff is applied, with level 2 being a stronger version. Level 3 triggers an *Elemental Burst*, which deals considerable damage and immobilizes the target.

<ElementsTable />

<StickyNote type="tip">
    Enemies will also use elements to apply debuffs on players. If players get affected by the Ice or Earth Elemental Bursts, other players can hit them to help free them faster.
</StickyNote>

## Burst Bonus Time
Activating an Elemental Burst will trigger *Burst Bonus Time* for 10 seconds. Players and Battle Imagine will deal increased damage. 

Additionally, a **Burst Finish Gauge** will appear with a level 1 indicator next to it. Attacking with elements will rapidly fill the gauge. Levels are increased by 1 each time the gauge is filled, up to level 5. 

<StickyNote type="tip">
    The Burst Finish Gauge will start to flash white faster and faster as Burst Bonus Time comes to an end!
</StickyNote>

<!-- <figure>
    <YouTube src="/guides/elements/burstfinish.mp4" controls preload="none" poster="/guides/elements/burstfinishposter.webp">
        <track kind="captions">
    </video>
    <figcaption>Demonstration of the Elemental Burst and Burst Bonus Time mechanics.</figcaption>
</figure> -->

### Burst Finish
After Burst Bonus Time ends, a **Burst Finish** will occur, dealing massive damage determined by the level that was reached on the Burst Finish Gauge. Some elements will also apply buffs or debuffs after a Burst Finish.

## Elemental Weakness
Attacking with the element that an enemy is weak against will allow you to do increased damage, indicated by an icon next to your damage numbers. The icon has 3 versions, denoting how effective the damage increase is.

<div class="flex">
    <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness1.webp")} alt="Weakness 1" width="48" height="84" />
    <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness2.webp")} alt="Weakness 2" width="48" height="84" /> 
    <img src={assetUrl("/UI/DamageUI/UI_DamageUIWeakness3.webp")} alt="Weakness 3" width="48" height="84" /> 
</div>

It's currently unknown what the damage multipliers are, or how they can be derived from an enemy's elemental weakness.

## Weapon-Skill interaction
When using both an elemental weapon and an elemental skill, the skill's element will be prioritized. Most classes have a set of non-elemental skills if they want to use their weapon's element. However, Spell Caster players may want to consider that all of their tactical skills are elemental--they may be unable to use certain elements.

<!-- エネミーに属性攻撃を与えるたびに属性値が蓄積していき、\n一定量を超えると最も多い属性の属性状態異常を起こします。\n（異なる属性の攻撃を当てても、属性値は蓄積します）\n属性状態異常はLv1、Lv2、バーストの3段階で\n段階が進むほど効果も高まります。

武器の中には属性を持っているものがあります。\nエネミーの弱点属性と武器の属性が合致すると\nダメージ表記が変わり、与ダメージが増えていることが分かります。\n弱点属性を突くことで素早く敵を倒すことができるので、\n武器の属性も意識してみましょう。

属性蓄積値を蓄積させてバーストを発生させると、\n一定時間バーストボーナスタイムとなります。\nボーナスタイム中は与ダメージがアップする状態となり、さらに\nバトルイマジンの与ダメージがよりアップするボーナスもあり\nバトルイマジンで効率よくダメージを与えることができます。\n\nまた、バーストボーナスタイム中は属性蓄積値を蓄積することで\nバーストフィニッシュゲージを増加します。\n一定以上ゲージが溜まるとバーストフィニッシュレベルがアップし\nバーストボーナスフィニッシュした時の効果を大きくできます。\nバーストフィニッシュレベルを上げて大ダメージも狙いましょう！ -->