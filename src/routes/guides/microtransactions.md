---
title: 'Microtransactions'
author: "Zakum"
date: '2023-2-23'
category: 'Game Systems'
caption: "About features that are available when spending real-life money."
featuredImg: '4.png'
---

<script>
    import StickyNote from "$lib/components/StickyNote.svelte";
    import RoseOrbPacks from "./RoseOrbPacks.svelte";
    import PlatformOptions from "./PlatformOptions.svelte";
    import CurrencyOptions from "./CurrencyOptions.svelte";
</script>

## Rose Orbs
Rose orbs are the paid currency in BLUE PROTOCOL. They expire 5 months after you purchase them, on the last day of the month.

<StickyNote type="note">
    There are payment limits based on age.<br />
    Ages 0~15: limit 5,000<br />
    Ages 16~17: limit 20,000<br />
    Ages 18~999: limit 9,999,999
</StickyNote>

The packs in the Japanese version are as follows:

<CurrencyOptions />
<PlatformOptions />

<RoseOrbPacks />

### Release Sales
These deals will be available when the game releases. They can be purchased one time during the sale period.

<RoseOrbPacks releaseSales />