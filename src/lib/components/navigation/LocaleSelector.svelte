<script>
	import { userLocale } from "$lib/stores";
	import { browser } from "$app/environment";

	export let isCollapsed = false;

	let locales = [
		{
			name: "English",
			code: "en_US",
			shortName: "EN"
		},
		{
			name: "日本語",
			code: "ja_JP",
			shortName: "JA"
		},
	];
</script>

<select id="locale-selector" bind:value={$userLocale} class:hide-marker={isCollapsed}>
	{#each locales as locale}
		<option value={locale.code}>{isCollapsed ? locale.shortName : locale.name}</option>
	{/each}
</select>

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

		&:hover, &:focus-visible {
			background: var(--surface2);
		}
	}

	.hide-marker {
		appearance: none;
		text-align: center;
	}
</style>
