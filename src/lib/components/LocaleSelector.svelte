<script>
	import { userLocale } from "$lib/stores";
	import { browser } from "$app/environment";

	let selectedLocale, cachedLocale, browserLocale;

	if (browser) { 
		// Get locale from cache
		selectedLocale = localStorage.getItem("user-locale")
		// console.log("locale: " + selectedLocale)
	}

	$: if (browser) {
		// Set new locale when changed
		localStorage.setItem("user-locale", selectedLocale);
		userLocale.set(selectedLocale);
		// console.log("locale updated: " + selectedLocale)
	}

	let locales = [
		{
			name: "English",
			code: "en_US",
		},
		{
			name: "日本語",
			code: "ja_JP",
		},
	];
</script>

<svelte:head>
	<script>
		// Check if any locale is cached, else cache the browser locale
		cachedLocale = localStorage.getItem("user-locale")
		if (!cachedLocale) {
			browserLocale = navigator.language.includes("ja") ? "ja_JP" : "en_US"
			localStorage.setItem("user-locale", browserLocale)
			// console.log("no cached locale.. caching browser locale: " + browserLocale)
		}
	</script>
</svelte:head>

<select id="locale-selector" class="box hover" bind:value={selectedLocale}>
	ITS
	{#each locales as locale}
		<option value={locale.code}>{locale.name}</option>
	{/each}
</select>

<style lang="scss">
	#locale-selector {
		
		padding: 0.5rem;
		height: 44px;
		min-width: 44px;
		// appearance: none;
	}
</style>
