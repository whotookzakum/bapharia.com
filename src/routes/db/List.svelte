<script context="module">import {
  scrollSpeed as __scrollSpeed,
  scrollStop as _scrollStop,
  getListIndices
} from "../utils";
const scrollStop = _scrollStop();
const _scrollSpeed = __scrollSpeed();
</script>

<script>export let itemCount;
export let itemSize;
export let height = "100%";
export let width = "100%";
export let stickyIndices = [];
export let overScan = 1;
export let marginLeft = 0;
export let marginTop = 0;
export let layout = "vertical";
export let scrollPosition = 0;
export let scrollBehavior = "auto";
export let getKey = (index) => index;
let list;
let _scrollPosition = scrollPosition;
let headerHeight = 0;
let headerWidth = 0;
let offsetHeight = 0;
let clientHeight = 0;
let offsetWidth = 0;
let clientWidth = 0;
let indices = [];
let manualScroll = false;
let isScrolling = false;
let isScrollingFast = false;
export const scrollToIndex = (index, behavior = scrollBehavior) => {
  scrollTo(
    index * itemSize + (isVertical ? marginTop + headerHeight : marginLeft + headerWidth),
    behavior
  );
};
export const scrollToPosition = (position, behavior = scrollBehavior) => {
  scrollTo(position, behavior);
};
const scrollTo = (direction, behavior = scrollBehavior) => {
  if (list) {
    manualScroll = true;
    list.scrollTo({ [isVertical ? "top" : "left"]: direction, behavior });
    manualScroll = false;
  }
};
const scrollToManual = (scrollPosition2) => {
  if (!manualScroll && !isScrolling) {
    manualScroll = true;
    list.scrollTo({ top: scrollPosition2, behavior: scrollBehavior });
    manualScroll = false;
  }
};
const getItemStyle = (index) => {
  const ixis = index * itemSize;
  return `position: absolute; transform: translate3d(${isVertical ? `${marginLeft}px, ${ixis + marginTop}px` : `${headerWidth + ixis + marginLeft}px, ${marginTop}px`}, 0px); ${itemSizeInternal} will-change: transform;`;
};
const onScroll = (event) => {
  isScrolling = true;
  if (!manualScroll) {
    if (isVertical) {
      _scrollPosition = Math.max(0, event.currentTarget["scrollTop"] - headerHeight);
      scrollPosition = event.currentTarget["scrollTop"];
    } else {
      _scrollPosition = Math.max(0, event.currentTarget["scrollLeft"] - headerWidth);
      scrollPosition = event.currentTarget["scrollLeft"];
    }
    scrollSpeed(_scrollPosition);
  }
  scrollStop(() => {
    isScrolling = false;
  });
};
$:
  isVertical = layout === "vertical";
$:
  innerSize = itemCount * itemSize;
$:
  itemSizeInternal = isVertical ? `height: ${itemSize}px; width: ${marginLeft > 0 ? `${clientWidth - marginLeft}px` : "100%"};` : `height: ${marginTop > 0 ? `${clientHeight - marginTop}px` : "100%"}; width: ${itemSize}px;`;
$:
  size = isVertical ? offsetHeight : offsetWidth;
$:
  if (size) {
    indices = getListIndices(itemCount, itemSize, size, overScan, _scrollPosition);
  }
$:
  if (list) {
    scrollToManual(scrollPosition);
  }
$:
  scrollSpeed = _scrollSpeed(size, {
    fast: () => {
      isScrollingFast = true;
    },
    slow: () => {
      isScrollingFast = false;
    }
  });
</script>

<div
	style:position="relative"
	style:overflow="auto"
	style:height={typeof height === "number" ? `${height}px` : height}
	style:width
	on:scroll={onScroll}
	on:scroll
	bind:this={list}
	bind:offsetHeight
	bind:clientHeight
	bind:offsetWidth
	bind:clientWidth
>
	{#if $$slots.header}
		{#if isVertical}
			<div bind:offsetHeight={headerHeight}>
				<slot name="header" />
			</div>
		{:else}
			<div bind:offsetWidth={headerWidth} style:position="absolute">
				<slot name="header" />
			</div>
		{/if}
	{/if}

	<div
		style:height={isVertical ? `${innerSize}px` : "100%"}
		style:width={!isVertical ? `${innerSize}px` : "100%"}
	>
		{#if stickyIndices.length && indices.length}
			{@const stickyIndex = Math.max(...stickyIndices.filter((i) => i < indices[0]))}

			{#if stickyIndex >= 0}
				<div
					style:position="sticky"
					style:top={isVertical ? `${marginTop}px` : "0px"}
					style:left={isVertical ? "0px" : `${marginLeft}px`}
					style:z-index="1"
				>
					<slot name="item" index={stickyIndex}>Missing template</slot>
				</div>
			{/if}
		{/if}

		{#each indices as index (getKey(index))}
			{@const style = getItemStyle(index)}

			{#if !isScrollingFast || !$$slots.placeholder}
				<slot name="item" {index} {style}>Missing template</slot>
			{:else}
				<slot name="placeholder" {index} {style}>Missing placeholder</slot>
			{/if}
		{/each}
	</div>

	{#if $$slots.footer}
		{#if isVertical}
			<div>
				<slot name="footer" />
			</div>
		{:else}
			<div
				style:position="absolute"
				style:top="0px"
				style:left="{headerWidth + itemCount * itemSize + marginLeft}px"
			>
				<slot name="footer" />
			</div>
		{/if}
	{/if}
</div>
