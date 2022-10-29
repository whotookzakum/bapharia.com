<!-- <script>
	import { createEventDispatcher } from 'svelte';
	export let value;
	const dispatch = createEventDispatcher();
	function handleLocaleChange(event) {
		event.preventDefault();
		dispatch('locale-changed', event.target.value);
	}
</script>

<div class="locale-selector">
	<div class="select">
		<select value={value} on:change={handleLocaleChange}>
			<option value="en">English</option>
			<option value="ja">日本語</option>
		</select>
	</div>
</div> -->
<script>
	// MVP
	// Get locale from cache if exists
	// If it doesn't exist, default to browser locale
	// Else default to english
	// Selecting an option caches the selected locale
	// List gets updated to show current locale at top

	let lang = 'en';

	let localeItems = [
		{
			lng: 'English',
			localeCode: 'en'
		},
		{
			lng: '日本語',
			localeCode: 'ja'
		},
		{
			lng: 'Português',
			localeCode: 'br-pt'
		},
		{
			lng: 'Deustch',
			localeCode: 'de'
		},
		{
			lng: 'Pусский',
			localeCode: 'ru'
		},
		{
			lng: 'Français',
			localeCode: 'fr'
		},
		{
			lng: '한국어',
			localeCode: 'kr'
		},
		{
			lng: '中文',
			localeCode: 'cn'
		}
	];

	function handleClick(e) {
		updateListOrder(e);
		updateLocale(e);
	}

	function updateListOrder(e) {
		const clickedItemValue = e.target.dataset.value;
		const localeItem = localeItems.find((item) => item.localeCode === clickedItemValue);
		const index = localeItems.indexOf(localeItem);
		if (index > -1) {
			localeItems.splice(index, 1);
			localeItems.unshift(localeItem);
			localeItems = localeItems;
		}
	}

	function updateLocale(e) {}

	let isOpen = false;
</script>

<menu class="locale-selector" class:show={isOpen} on:click={() => (isOpen = !isOpen)}>
	{#each localeItems as item (item.localeCode)}
		<li>
			<button on:click={(e) => handleClick(e)} data-value={item.localeCode} aria-label={item.lng}>
				{item.lng}
			</button>
		</li>
	{/each}
</menu>

<style lang="scss">
	.locale-selector {
		--font-height: 21px;
		--spacing: var(--space-3xs);

		list-style: none;
		margin: 0;
		padding: 0;
		height: calc(var(--font-height) + var(--spacing) * 2);
		overflow: hidden;

		&.show {
			overflow: visible;
		}

		button {
			border: none;
			font: inherit;
			background: none;
			padding: var(--spacing) 0;

			&:hover {
				color: var(--accent);
			}
		}
	}
</style>