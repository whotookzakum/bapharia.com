<script>
	import { databaseQuery } from "$lib/stores";
	const items = [
		{
			id: 7020109,
			name: "Beginner's Axe",
			type: "Weapon",
			imgSrc: "axe1.png",
		},
		{
			id: 11090324,
			name: "Judgement Shield",
			type: "Skill",
			imgSrc: "axe1.png",
		},
		{
			id: 300102,
			name: "Edgerunner's Blade",
			type: "Consumable",
			imgSrc: "axe1.png",
		},
		{
			id: 7020109,
			name: "Beginner's Axe",
			type: "Weapon",
			imgSrc: "axe1.png",
		},
		{
			id: 11090324,
			name: "Judgement Shield",
			type: "Skill",
			imgSrc: "axe1.png",
		},
	];

	let searchParams;
	databaseQuery.subscribe((value) => (searchParams = value));

	$: filteredItems = !searchParams
		? items
		: items.filter((item) => {
				const itemNameMatch = item.name
					.toUpperCase()
					.includes(searchParams.toUpperCase());
				const itemIdMatch = item.id.toString().includes(searchParams);
				if (itemNameMatch || itemIdMatch) {
					return item;
				}
		  });
</script>

<div class="search">
	<label>
		<span class="component-label">Search</span>
		<input
			class="box"
			id="search-box"
			type="text"
			placeholder="Search by item name or id"
			on:input={(e) => databaseQuery.set(e.target.value)}
		/>
	</label>
	<ul id="search-results" class="box">
		{#each filteredItems as item}
			<li class="result">
				<img
					src={`/images/${item.imgSrc}`}
					alt="Item Icon"
					width="64px"
					height="64px"
					loading="lazy"
				/>
				<b>{item.name}</b>
				<span>{item.type}</span>
				<span>ID: {item.id}</span>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.search {
		display: grid;
		gap: 2rem;
		align-content: flex-start;
	}

	#search-box {
		min-width: 30ch;
		width: 100%;
	}

	ul#search-results {
		padding: 0;
		margin: 0;
		display: block;
		max-inline-size: none;
		// min-height: 454px;
	}

	li.result {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 1rem;
		padding: 0.8rem;
		line-height: 1.4;
		max-inline-size: none;

		&:not(:last-child) {
			border-bottom: 1px solid var(--surface3);
		}

		img {
			grid-row: span 3;
		}

		span {
			color: var(--text2);
			font-size: var(--step--1);
		}
	}
</style>
