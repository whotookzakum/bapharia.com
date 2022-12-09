<script>
	import SearchResult from './SearchResult.svelte';
	import { databaseQuery } from '../lib/stores';

	const items = [
		{
			id: 7020109,
			name: "Beginner's Axe",
			type: 'Weapon',
			imgSrc: 'axe1.png'
		},
		{
			id: 11090324,
			name: "Judgement Shield",
			type: 'Skill',
			imgSrc: 'axe1.png'
		},
		{
			id: 300102,
			name: "Edgerunner's Blade",
			type: 'Consumable',
			imgSrc: 'axe1.png'
		}
	]

	let searchParams;
	databaseQuery.subscribe(value => searchParams = value)

	$: filteredItems = !searchParams ? items : items.filter(item => {
		const itemNameMatch = item.name.toUpperCase().includes(searchParams.toUpperCase())
		const itemIdMatch = item.id.toString().includes(searchParams)
		if (itemNameMatch || itemIdMatch) {
			return item
		}
	})
</script>

<div id="search-results-wrapper">
	<!-- <label for="search-results">Results</label> -->
	<ul id="search-results">
		{#each filteredItems as item}
			<SearchResult {item} />
		{/each}
	</ul>
</div>

<style lang="scss">
	#search-results-wrapper {
		margin-bottom: 2rem;
	}

	label[for='search-results'] {
		text-transform: uppercase;
		color: var(--text2);
		font-size: var(--step--1);
		display: block;
	}

	ul#search-results {
		padding: 0;
		margin: 0;
		list-style: none;
		margin-top: 0.5rem;
		background: var(--surface2);
		border-radius: 5px;
		box-shadow: 0 2px 10px var(--surface-shadow);
	}
</style>
