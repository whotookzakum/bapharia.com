<script>
	// MVP
	// Get locale from cache if exists
	// If it doesn't exist, default to browser locale
	// Else default to english
	// Selecting an option caches the selected locale
	// List gets updated to show current locale at top

	let selectedLocale = "en-US";

	let locales = [
		{
			name: 'EN',
			code: 'en-US'
		},
		{
			name: 'JA',
			code: 'ja-JP'
		}
	];
</script>

<select id="locale-selector" class="box" bind:value={selectedLocale}>
	{#each locales as locale}
		<option value={locale.code}>{locale.name}</option>
	{/each}
</select>

<style lang="scss">
	#locale-selector {
		background: var(--surface2);
		color: var(--text1);
		border: none;
		font-size: initial;
		padding: 0.5rem;
		// appearance: none;
	}
</style>