<script>
	import Icon from "@iconify/svelte";
    export let isExpanded = true;

	// TODO: Rewrite as webworker
	// TODO: "Next raids in 3m72s" (w/ push notification reminders), "Next update on"

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

<div class="jst-time text2 hover-surface1 hover-text1 items-center flex gap-1 rounded-2xl">
    {#if isExpanded}
        <Icon icon="mdi:clock-outline" color="var(--accent1)" />
        <time>{timeInJST} JST</time>
    {:else}
        <time style="color: var(--accent1)">{timeInJST.split(", ")[1]}</time>
    {/if}
</div>

<style lang="scss">
    .jst-time {
		font-size: var(--step--1);
		padding: 0.25rem 1rem;
		height: 44px;
	}	

	:global(.navbar-wrapper:not(.expanded) .jst-time) {
		margin: 0 auto;
		text-align: center;
	}

	@media (max-width: 1150px) {
		.jst-time {
			padding-inline: 0 !important;
		}
	}
</style>