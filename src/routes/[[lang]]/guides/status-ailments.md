---
title: 'Status Ailments'
author: "Zakum"
date: '2023-6-5'
category: 'Game Systems'
caption: 'An explanation of the Buffs, Debuffs, and Abnormal Statuses in BLUE PROTOCOL.'
bannerImg: "/guides/combat/banner.jpg"
thumbImg: "/guides/combat/thumb.jpg"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import AbnormalStatusesTable from "$lib/components/guides/AbnormalStatusesTable.svelte";
    import Formula from "$lib/components/guides/Formula.svelte"
</script>

## Status Ailments
Status Ailments come in three categories--buffs, debuffs, and abnormal statuses--and can be applied to both players and enemies. Elemental status ailments can be found in the [elements](/guides/elements) guide.

## Buffs & Debuffs
When a buff or debuff is applied, the attack that applies the debuff is not affected the debuff. If resistance is altered, the UI will show an indicator as if the debuff is already applied, however the damage will be calculated before the debuff is applied.

<AbnormalStatusesTable />

## Abnormal Statuses
Abnormal statuses are separate from debuffs and are subject to enemy Resistance and Immunity.

Enemies have a resistance to each abnormal status (Sleep Resistance, Bind Resistance, etc.) that affects its success rate. Additionally, enemies and players will temporarily gain an increased resistance to some abnormal statuses that are repeatedly applied on them. If an abnormal status is unsuccessful, the UI will show *Resist*, and if the enemy has become completely immune to that abnormal status, the UI will show *Immune*.

<!-- https://note.com/h1t5uj1_/n/n2a81ae30954f says that level difference can affect resistance, but swiki has no mention of this. It's possible OP was unaware of base resistance values. -->

<AbnormalStatusesTable type={-2} />

Blast Archer's [Resonance Shot β](/classes/6/skills#618) will spread only a portion of the abnormal statuses above. Some abnormal statuses can only be applied by enemies, traps, and map mechanics (Skill Locked, Fatigue, Item Locked, Nappo, and Fear).

Enemy attacks may inflict abnormal statuses either at a specific probability or with guaranteed effect. Players can equip special equipment, such as Anti-Paralysis and Anti-Stun Enhance Imagine, to negate these status effects.

### Stun, Sleep, Paralyzed, Blind, Skill Locked, Fatigue, Item Locked, Bind, Fear
Each time one of these statuses are sucessfully applied, the target's resistance to it is increased for 60 seconds. Some enemies have a higher base resistance, so they will become immune to the abnormal status sooner.

<!-- Tested on 赤い飛沫 who has 50 sleep resistance; the second sleep showed Immune. Used +50% sleep chance and it was appliable 3 times before resist (100%/50%/25%). May want to test a +100% chance on an enemy with 100 resist to stun or sleep. -->

<Formula
    name="abnormalStatusResistanceTable"
    tabs={[
        {
            label: "Table",
            value: "table",
            component: "AbnormalStatusResistanceTable",
            footnote: "Common enemy resistance values include 0, 20, 50, 80, and 999, and common ability values are 50% and 100%."
        },
        {
            label: "Formula",
            value: "formula",
            formula: `\\text{Abnormal Status Success Rate} = 1 - (\\text{Status Resistance} \\div 100) + \\text{Ability}`,
            footnote: "Certain Imagine Abilities can boost the success rate of applying and resisting abnormal statuses.<br>When calculating for players who have resistance E-imagines, multiply Ability by -1."
        }
    ]}
/>

Attempts to reapply an abnormal status before it runs out will always fail. If you manage to apply an abnormal status for the 4th or more time, the effect will immediately end.

### Poison, Nappo, HP Leak
Repeatedly applying these abnormal statuses does not increase enemy resistance to them. If resistance (such as Anti-Nappo E-imagines) causes the success rate to be 0%, the target is Immune.

### Targeted
Guaranteed to be applied every time without increasing Targeted Resistance. The abnormal status will always apply, but if the enemy has Targeted Resistance, they may ignore being provoked and proceed to target players at will.
<!-- Debuff always applies. Provocation can be ignored *when the abnormal status is applied*, meaning continuing to attack after provoking may still be able to take aggro.  -->

#### Stagger
Some attacks that apply Targeted also Stagger enemies. Stagger is not the same as Targeted, so Targeted Resistance does not apply nor does it increase.
<!-- TODO: Needs confirmation: Since Targeted is guaranteed to be applied, the Stagger is guaranteed to work (if it passes the conditions below), unlike Battle Imagines which only have a chance to Stagger(?). OneCard says the AF staggers are 100%, but we need to test Battle Imagine staggers. -->

<!-- According to ses: https://ses-bp.hatenablog.com/entry/2024/03/01/165522 the interrupt (AF staggers?) work even against bosses that are immune to stagger. -->

<!-- TODO: Elaborate on damage reaction resistances? resist_thrust/slash/blow are resistances against damage in the damage formula, but do they also play a role here, or is it just the generic "reaction" and "reaction_leveldiff" enemyparams? -->
<!-- Not all actions can be interrupted, especially bosses that are in a powered-up state -->
Stagger ignores most enemy Damage Reaction resistances, forcefully interrupting most enemy actions. Successfully staggering an enemy grants an invisible "Stagger Resistance" abnormal status that lasts 30 seconds.

Stagger will be not be applied if the enemy has 3 Stagger Resistances, if the enemy is already undergoing a Damage Reaction, or if the enemy is unable to be interrupted (such as during Stun).

Each Stagger Resistance is a separate abnormal status, not resetting the duration of the previous Stagger Resistance. Staggering one time will apply one Stagger Resistance (30s), and Staggering a second time will apply a second Stagger Resistance (30s), their durations tracked individually. In other words, spacing your Staggers out every 10 seconds will allow you to use them endlessly without them being nullified.

Since Stagger Resistance is considered an abnormal status, damage increases against enemies with abnormal statuses will take effect. 