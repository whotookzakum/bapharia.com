---
title: 'Elements'
author: 'Zakum'
date: '2023-5-15'
category: 'Game Systems'
caption: 'Explanation of the elemental system and a list of elemental effects.'
bannerImg: "/guides/elements/banner.jpg"
thumbImg: "/guides/elements/thumb.webp"
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
    import ElementsTable from './ElementsTable.svelte';
</script>

There are 6 elements that can be utilized in combat; fire, ice, lightning, earth, light, and dark.

<ElementsTable />

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