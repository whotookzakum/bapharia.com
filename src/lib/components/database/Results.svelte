<script>
	import { databaseQuery } from '$lib/stores';

	const items = [
		{
			id: 7020109,
			name: "Beginner's Axe",
			type: 'Weapon',
			imgSrc: 'axe1.png'
		},
		{
			id: 11090324,
			name: 'Judgement Shield',
			type: 'Skill',
			imgSrc: 'axe1.png'
		},
		{
			id: 300102,
			name: "Edgerunner's Blade",
			type: 'Consumable',
			imgSrc: 'axe1.png'
		},
		{
			id: 7020109,
			name: "Beginner's Axe",
			type: 'Weapon',
			imgSrc: 'axe1.png'
		},
		{
			id: 11090324,
			name: 'Judgement Shield',
			type: 'Skill',
			imgSrc: 'axe1.png'
		}
	];

	let searchParams;
	databaseQuery.subscribe((value) => (searchParams = value));

	$: filteredItems = !searchParams
		? items
		: items.filter((item) => {
				const itemNameMatch = item.name.toUpperCase().includes(searchParams.toUpperCase());
				const itemIdMatch = item.id.toString().includes(searchParams);
				if (itemNameMatch || itemIdMatch) {
					return item;
				}
		  });
</script>

<div id="search-results-wrapper">
	<h3 class="component-label">Results</h3>
	<dl id="search-results" class="box" style="flex: 1;">
		{#each filteredItems as item}
			<div class="result">
				<img src={`/images/${item.imgSrc}`} alt="Item Icon" width="64px" height="64px" />
				<div class="result-text">
					<dt>{item.name}</dt>
					<dd>{item.type}</dd>
					<dd>ID: {item.id}</dd>
				</div>
			</div>
		{/each}
	</dl>
</div>

<style lang="scss">
	dl#search-results {
		padding: 0;
		margin: 0;
		grid-column: span 2;
	}

	.result {
		display: flex;
		align-items: center;
		padding: 0.8rem;
		gap: 0.8rem;
		line-height: 1.4;

		&:not(:last-child) {
			border-bottom: 1px solid var(--surface3);
		}

		dd {
			margin: 0;
			color: var(--text2);
			font-size: var(--step--1);
		}
	}
</style>
