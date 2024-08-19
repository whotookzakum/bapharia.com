<script>
    import IconMask from "$lib/components/IconMask.svelte";
    import Tooltip from "./FloatingUI/Tooltip.svelte";
    import CLASSES from "../../routes/[[lang]]/classes/[classId]/classes.json"

    export let id = 7;
    export let width = 32;
    export let height = 32;
    export let style = ""

    let text = CLASSES.find(obj => obj.id === id).name
</script>

<Tooltip placement="top" inline wrapperStyle={style} tooltipStyle="width: max-content" tooltipAriaHidden="false">
    <IconMask
        src="/UI/Icon/Class/UI_IconClass_{id.toString().padStart(2, '0')}.webp"
        {width}
        {height}
        {...$$restProps}
    />
    <svelte:fragment slot="tooltip">{text}</svelte:fragment>
</Tooltip>
