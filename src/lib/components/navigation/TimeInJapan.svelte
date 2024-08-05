<script>
	import Icon from "@iconify/svelte";
	import Tooltip from "../FloatingUI/Tooltip.svelte";
	import { DateTime } from "luxon";

	// TODO: Rewrite as webworker
	// TODO: "Next raids in 3m72s" (w/ push notification reminders), "Next update on"

	let show = true;
	let open = false;

	let timeNow = new Date().getTime();
	setInterval(() => (timeNow += 1000), 1000);

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
</script>

<Tooltip
	{show}
	offset={0}
	tooltipStyle="background: none; backdrop-filter: none; filter: none; padding: 0;"
	showTooltipOn={["focus", "focusin"]}
	hideTooltipOn={["tooltip:focusout"]}
	tooltipAriaHidden="false"
	tooltipRole="none"
>
	<button
		class="nav-button gap-1"
		aria-label="Open time schedule modal"
		aria-live="polite"
		style={open ? "color: var(--accent1)" : ""}
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
		<Icon
			icon="mdi:clock-outline"
			color="var(--accent1); font-size: var(--step-0)"
		/>
		<time>{timeInJST} JST</time>
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
			<div class="grid gap-3 tooltip-style" style="min-width: 280px;">
				<div class="flex justify-between">
					<span>Next raid/defense battle</span>
					<time>1:30:52</time>
				</div>
				
			</div>
		</div>
	</svelte:fragment>
</Tooltip>

<style lang="scss">
	.nav-button {
		font-size: var(--step--1);
		color: var(--text2);
		padding: 0.25rem 1rem;
		height: 44px !important;
		width: unset !important;
		border-radius: 1rem;
	}
</style>
