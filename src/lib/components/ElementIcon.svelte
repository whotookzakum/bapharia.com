<script>
    import Tooltip from "./FloatingUI/Tooltip.svelte";
    import { assetUrl } from "$lib/utils";

    export let id = 1;
    export let width = 32;
    export let height = 32;

    // TODO: Get localized names
    const names = {
        1: "Fire",
        2: "Thunder",
        3: "Ice",
        4: "Earth",
        5: "Light",
        6: "Dark"
    }
</script>

<Tooltip placement="top" inline tooltipStyle="width: max-content" tooltipAriaHidden="false">
    <img src={assetUrl(`/UI/Icon/Attribute/UI_IconAttribute_${id}.webp`)} alt="" {width} {height} {...$$restProps}>
    <svelte:fragment slot="tooltip">{names[id]}</svelte:fragment>
</Tooltip>
