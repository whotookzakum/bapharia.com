---
title: 'Elements'
author: 'Zakum'
date: '2022-12-17'
category: 'Game Systems'
caption: 'Explanation of the elemental system and a list of elemental effects.'
bannerImg: "/guides/elements/banner.jpg"
thumbImg: "/guides/elements/thumb.webp"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
</script>

<style>
    img {
        margin: 0;
    }
    table {
        font-size: 1rem;
    }
</style>

There are 6 elements that can be utilized in combat; fire, ice, lightning, earth, light, and dark.

<table class="full-bleed">
	<thead>
		<th colspan="2">Element</th>
		<th>Level 1 & 2</th>
		<th>Level 3 (elemental burst)</th>
        <th>Burst Finish</th>
	</thead>
	<tbody>
		<tr>
			<td>Fire</td>
            <td style="display: flex">
                <img src="/images/StatusAilment/UI_StatusAilment_1000.png" alt="Fire debuff 1">
                <img src="/images/StatusAilment/UI_StatusAilment_1001.png" alt="Fire debuff 2">
                <img src="/images/StatusAilment/UI_StatusAilment_1002.png" alt="Fire burst">
            </td>
			<td>Damage over time</td>
            <td>Knockdown</td>
			<td>Deals heavy damage</td>
		</tr>
        <tr>
			<td>Ice</td>
            <td style="display: flex">
                <img src="/images/StatusAilment/UI_StatusAilment_1003.png" alt="Ice debuff 1">
                <img src="/images/StatusAilment/UI_StatusAilment_1004.png" alt="Ice debuff 2">
                <img src="/images/StatusAilment/UI_StatusAilment_1005.png" alt="Ice burst">
            </td>
			<td>Reduced movement speed</td>
            <td>Freezes target</td>
			<td>Deals damage</td>
		</tr>
        <tr>
			<td>Lightning</td>
            <td style="display: flex">
                <img src="/images/StatusAilment/UI_StatusAilment_1006.png" alt="Lightning debuff 1">
                <img src="/images/StatusAilment/UI_StatusAilment_1007.png" alt="Lightning debuff 2">
                <img src="/images/StatusAilment/UI_StatusAilment_1008.png" alt="Lightning burst">
            </td>
			<td>Low chance to disrupt actions</td>
            <td>Knockdown</td>
			<td>Deals damage and paralyzes target</td>
		</tr>
        <tr>
			<td>Earth</td>
            <td style="display: flex">
                <img src="/images/StatusAilment/UI_StatusAilment_1009.png" alt="Earth debuff 1">
                <img src="/images/StatusAilment/UI_StatusAilment_1010.png" alt="Earth debuff 2">
                <img src="/images/StatusAilment/UI_StatusAilment_1011.png" alt="Earth burst">
            </td>
			<td>Receive increased damage</td>
			<td>Petrifies target</td>
            <td>Deals damage</td>
		</tr>
        <tr>
			<td>Light</td>
            <td style="display: flex">
                <img src="/images/StatusAilment/UI_StatusAilment_1012.png" alt="Light debuff 1">
                <img src="/images/StatusAilment/UI_StatusAilment_1013.png" alt="Light debuff 2">
                <img src="/images/StatusAilment/UI_StatusAilment_1014.png" alt="Light burst">
            </td>
			<td>Deal reduced damage</td>
			<td>Knockdown</td>
            <td>Deals damage and grants HP regen to nearby players</td>
		</tr>
        <tr>
			<td>Dark</td>
            <td style="display: flex">
                <img src="/images/StatusAilment/UI_StatusAilment_1015.png" alt="Dark debuff 1">
                <img src="/images/StatusAilment/UI_StatusAilment_1016.png" alt="Dark debuff 2">
                <img src="/images/StatusAilment/UI_StatusAilment_1017.png" alt="Dark burst">
            </td>
			<td>Attacks may miss</td>
			<td>Knockdown</td>
            <td>Deals damage and inflicts life steal against target</td>
		</tr>
	</tbody>
</table>

## Elemental Charge
Attacking with elemental weapons, battle imagine, or skills will accumulate elemental charge on an enemy, indicated by the gauge under their health. When charged past level thresholds, **elemental effects** will be applied. The elemental charge gauge will be depleted over time.

<!-- Elemental charge is accumulated regardless of the element of the weapon, skill, or imagine you are using in combat, so all players can contribute towards the gauge. -->

## Elemental Effects
Elemental effects have 3 levels. At level 1, the element's respective status effect will be applied on the target. Level 2 strengthens the debuff from level 1. Level 3 triggers an elemental burst.

Enemies will also use elements to apply status effects on players. If players get affected by ice or earth elemental bursts (which will immobilize them) other players can hit them to help free them faster.

## Burst Finish
Attacking during the elemental burst will charge the **burst finish** gauge, up to a max of 5 stages. After some time has elapsed, the burst finish will trigger as long as at least one stage of the gauge was filled. Its effectiveness is determined by the highest stage it was charged to.

<StickyNote type="tip">
    When an enemy reaches elemental burst (level 3), all players should attack it as much as possible!
</StickyNote>

<!-- Element is applied => charge to level 1 => charge to level 2 => charge to level 3 (burst) & charge burst finish => burst finish damage -->

<!-- ## Closing notes
<StickyNote type="warning">
    The following are my <strong>unconfirmed</strong> thoughts on element mechanics.
</StickyNote>

It seems that the element is permanently determined by the first hit on an enemy. Also, it would make sense that skills override weapon elements, i.e. fireblast would apply fire even when using a lightning weapon, because most classes have a non-elemental set of skills. If weapon overrode skill, then the fire abilities on twin striker couldn't be utilized effectively with a lightning weapon. -->