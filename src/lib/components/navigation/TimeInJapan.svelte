<script>
	import Icon from "@iconify/svelte";
    export let isExpanded;

    let timeNow = new Date().getTime();
	$: timeInJST = new Date(timeNow).toLocaleDateString([], {
		timeZone: "Asia/Tokyo",
		month: "short",
		// weekday: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		// second: "2-digit",
		hour12: false,
	});

	setInterval(() => (timeNow += 1000), 1000);
</script>

<div class="jst-time">
    {#if isExpanded}
        <Icon icon="mdi:clock-outline" color="var(--accent)" />
        <span class="visually-hidden">In Japan, it's</span>
        <time>{timeInJST} JST</time>
    {:else}
        <span class="visually-hidden">In Japan, it's</span>
        <time style="color: var(--accent)">{timeInJST.split(", ")[1]}</time>
    {/if}
</div>

<style lang="scss">
    .jst-time {
		font-size: var(--step--1);
		color: var(--text2);
		padding: 0.25rem 1rem;
	}	

	:global(.jst-time *) {
		vertical-align: middle;
	}

	:global(.navbar:not(.expanded) .jst-time) {
		margin: 0 auto;
	}
</style>