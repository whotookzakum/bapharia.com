<script>
    import TYPES_TEXT from "$api/utils/categories.json";
    import { userLocale } from "$lib/stores";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import IconMask from "$lib/components/IconMask.svelte";

    export let classId = 12;
    export let index = 0;

    let show = false;
    let open = false;
</script>

<div style="position: relative;">
    <Tooltip
        {show}
        offset={0}
        showTooltipOn={["focus", "focusin"]}
        hideTooltipOn={["tooltip:focusout"]}
        tooltipAriaHidden="false"
        tooltipRole="none"
        tooltipStyle="background: none; backdrop-filter: none; filter: none; padding: 0;"
        placement="bottom-start"
    >
        <button
            class="nav-button p-2"
            style="width: unset; height: unset;"
            aria-label="Open class selector modal"
            aria-live="polite"
            on:click={() => {
                open = !open;
                show = open;
            }}
            on:mouseleave={() => {
                if (!open) show = false;
            }}
            on:mouseenter={() => {
                show = true;
            }}
        >
            <IconMask
                src="/UI/Icon/Class/UI_IconClass_{classId
                    .toString()
                    .padStart(2, '0')}.png"
                style={open ? "background-color: var(--accent1)" : ""}
                width="40"
                height="40"
            />
        </button>
        <svelte:fragment slot="tooltip">
            <div
                class="pt-2"
                role="dialog"
                on:mouseenter={() => {
                    show = true;
                }}
                on:mouseleave={() => {
                    if (!open) show = false;
                }}
            >
                <div class="tooltip-style" style="min-width: 180px">
                    {#each Object.entries(TYPES_TEXT[$userLocale].Class).toSorted( (a, b) => {
                            if (a[1] < b[1]) return -1;
                            if (a[1] > b[1]) return 1;
                            return 0;
                        }, ) as [type, text]}
                        <label
                            class="flex gap-2 items-center hover:underline"
                            class:active={type == classId}
                        >
                            <input
                                type="radio"
                                class="visually-hidden"
                                name="player-{index + 1}-class"
                                value={parseInt(type)}
                                bind:group={classId}
                            />
                            <IconMask
                                src="/UI/Icon/Class/UI_IconClass_{type
                                    .toString()
                                    .padStart(2, '0')}.png"
                                style="background-color: currentColor"
                            />
                            {text}
                        </label>
                    {/each}
                </div>
            </div>
        </svelte:fragment>
    </Tooltip>
</div>

<style lang="scss">
    label {
        color: white;
    }
</style>
