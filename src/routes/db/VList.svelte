<script>
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
    import {
        SCROLL_IDLE,
        getOverscanedRange,
        CHANGE_ITEM_LENGTH,
        createVirtualizer,
        FIX_SCROLL_JUMP,
        GET_ITEM_OFFSET,
        GET_JUMP_COUNT,
        GET_RANGE,
        GET_SCROLL_DIRECTION,
        GET_SCROLL_OFFSET,
        GET_SCROLL_SIZE,
        GET_TOTAL_SIZE,
        GET_VIEWPORT_SIZE,
        IS_ITEM_HIDDEN,
        OBSERVE_ITEM_RESIZE,
        ON_MOUNT,
        ON_UN_MOUNT,
        SCROLL_BY,
        SCROLL_TO,
        SCROLL_TO_INDEX,
    } from "./core";
    import { effect, defaultGetKey, styleToString } from "./utils";
    import ListItem from "./ListItem.svelte";
    import Scrollable from "./Scrollable.svelte";

    export let data;
    export let getKey = defaultGetKey;
    export let overscan = 4;
    export let itemSize = undefined;
    export let shift = false;
    export let horizontal = false;

    let containerRef;

    let rerender = [];

    const dispatchEvent = createEventDispatcher();

    const virtualizer = createVirtualizer(
        data.length,
        itemSize,
        horizontal,
        (v) => {
            rerender = v;
        },
        (offset) => {
            dispatchEvent("scroll", offset);
        },
        () => {
            dispatchEvent("scrollEnd");
        },
    );

    $: range = rerender && virtualizer[GET_RANGE]();
    $: scrollDirection = rerender && virtualizer[GET_SCROLL_DIRECTION]();
    $: totalSize = rerender && virtualizer[GET_TOTAL_SIZE]();
    $: jumpCount = rerender && virtualizer[GET_JUMP_COUNT]();
    $: extendedRange = getOverscanedRange(
        range[0],
        range[1],
        overscan,
        scrollDirection,
        data.length,
    );

    onMount(() => {
        const root = containerRef.parentElement;
        virtualizer[ON_MOUNT](root);
    });
    onDestroy(() => {
        virtualizer[ON_UN_MOUNT]();
    });

    let prevLength = data.length;
    effect(() => {
        if (prevLength === data.length) return;
        virtualizer[CHANGE_ITEM_LENGTH]((prevLength = data.length), shift);
    }, true);

    let prevJumpCount;
    effect(() => {
        if (prevJumpCount === jumpCount) return;
        prevJumpCount = jumpCount;
        virtualizer[FIX_SCROLL_JUMP]();
    });

    let prevRange;
    effect(() => {
        if (prevRange && prevRange[0] === range[0] && prevRange[1] === range[1])
            return;
        prevRange = range;
        dispatchEvent("rangeChange", [range[0], range[1]]);
    });

    /**
     * Get current scrollTop or scrollLeft.
     */
    export const getScrollOffset = virtualizer[GET_SCROLL_OFFSET];
    /**
     * Get current scrollHeight or scrollWidth.
     */
    export const getScrollSize = virtualizer[GET_SCROLL_SIZE];
    /**
     * Get current offsetHeight or offsetWidth.
     */
    export const getViewportSize = virtualizer[GET_VIEWPORT_SIZE];
    /**
     * Scroll to the item specified by index.
     * @param index index of item
     * @param opts options
     */
    export const scrollToIndex = virtualizer[SCROLL_TO_INDEX];
    /**
     * Scroll to the given offset.
     * @param offset offset from start
     */
    export const scrollTo = virtualizer[SCROLL_TO];
    /**
     * Scroll by the given offset.
     * @param offset offset from current position
     */
    export const scrollBy = virtualizer[SCROLL_BY];

    let items;
    $: {
        const [startIndex, endIndex] = extendedRange;
        const newItems = [];
        for (let i = startIndex, j = endIndex; i <= j; i++) {
            newItems.push(data[i]);
        }
        items = newItems;
    }

    const viewportStyle = styleToString({
        display: horizontal ? "inline-block" : "block",
        [horizontal ? "overflow-x" : "overflow-y"]: "auto",
        contain: "strict",
        width: "100%",
        height: "100%",
    });

    const containerStyle = styleToString({
        // contain: "content",
        "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
        flex: "none", // flex style can break layout
        position: "relative",
        visibility: "hidden",
    });

    $: dynamicContainerStyle = styleToString({
        width: horizontal ? totalSize + "px" : "100%",
        height: horizontal ? "100%" : totalSize + "px",
        "pointer-events": scrollDirection !== SCROLL_IDLE ? "none" : "auto",
    });
</script>

<Scrollable {viewportStyle}>
    <div
        bind:this={containerRef}
        style={`${containerStyle} ${dynamicContainerStyle}`}
    >
        {#each items as item, index (getKey(item, index + extendedRange[0]))}
            <ListItem
                index={index + extendedRange[0]}
                offset={rerender &&
                    virtualizer[GET_ITEM_OFFSET](index + extendedRange[0])}
                hide={rerender &&
                    virtualizer[IS_ITEM_HIDDEN](index + extendedRange[0])}
                {horizontal}
                resizer={virtualizer[OBSERVE_ITEM_RESIZE]}
            >
                <slot {item} />
            </ListItem>
        {/each}
    </div>
</Scrollable>
