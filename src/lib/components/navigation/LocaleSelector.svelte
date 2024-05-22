<script>
	import { userLocale } from "$lib/stores";
	import Icon from "@iconify/svelte";
	import NavButton from "./NavButton.svelte";
	import NavModal from "./NavModal.svelte";

	let showing = false;

	function closeModal(e) {
		$userLocale = e.target.value
		showing = false
	}
</script>

<div style="position: relative;">
	<NavButton
		bind:showing
		ariaLabel="Open language selector"
		tooltip="Language"
	>
		<Icon icon="material-symbols:language" />
	</NavButton>
	
	{#if showing}
		<NavModal
			bind:group={$userLocale}
			inputCallback={closeModal}
			data={[
				{
					title: "English",
					value: "en",
				},
				{
					title: "日本語",
					value: "ja",
				},
			]}
		/>
	{/if}
</div>

<!-- "mingcute:translate-2-line" -->

<!-- <Icon icon="mingcute:translate-2-line" style="font-size: var(--step-4)" color="var(--text3)" /> -->

<!-- <select id="locale-selector" bind:value={$userLocale} class:hide-marker={isCollapsed}>
	{#each locales as locale}
		<option value={locale.code}>{isCollapsed ? locale.shortName : locale.name}</option>
	{/each}
</select> -->

<style lang="scss">
	#locale-selector {
		pointer-events: auto;
		padding: 0.5rem;
		height: 44px;
		min-width: 44px;
		// font-size: var(--step--1);
		background: none;
		border: none;
		border-radius: 5px;
		border: 1px solid transparent;

		&:hover,
		&:focus-visible {
			background: var(--surface2);
		}
	}

	.hide-marker {
		appearance: none;
		text-align: center;
	}
</style>
