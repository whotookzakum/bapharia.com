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

<span class="visually-hidden">In Japan, it's {timeInJST}</span>
<div class="jst-time" aria-hidden="true">
    {#if isExpanded}
        <Icon icon="mdi:clock-outline" color="var(--accent)" />
        <time>{timeInJST} JST</time>
    {:else}
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