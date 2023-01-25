<script>
	import { databaseQuery } from "$lib/stores";
	import { page } from "$app/stores";
    import { goto } from "$app/navigation";
	export let items;
	
	// const items = [
	// 	{
	// 		id: 7020109,
	// 		name: "Beginner's Axe",
	// 		type: "Weapon",
	// 		imgSrc: "axe1.png",
	// 	},
	// 	{
	// 		id: 11090324,
	// 		name: "Judgement Shield",
	// 		type: "Skill",
	// 		imgSrc: "axe1.png",
	// 	},
	// 	{
	// 		id: 300102,
	// 		name: "Edgerunner's Blade",
	// 		type: "Consumable",
	// 		imgSrc: "axe1.png",
	// 	},
	// 	{
	// 		id: 7020109,
	// 		name: "Beginner's Axe",
	// 		type: "Weapon",
	// 		imgSrc: "axe1.png",
	// 	},
	// 	{
	// 		id: 11090324,
	// 		name: "Judgement Shield",
	// 		type: "Skill",
	// 		imgSrc: "axe1.png",
	// 	},
	// ];

	// Add a way to query hiragana as well
	
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

	function updateSearchQuery(value) {
		databaseQuery.set(value)

		if (value.length > 0) {
			$page.url.searchParams.set("db", value)
		}
		else {
			$page.url.searchParams.delete("db")
		}
		goto(`?${$page.url.searchParams.toString()}`, { noScroll: true, replaceState: true, keepFocus: true })
		
	}
</script>

<div id="search" class="search">
	<div>
		<label>
			<span class="component-label">Search</span>
			<input
				class="box"
				id="search-box"
				type="text"
				placeholder="Search by item name or id"
				on:input={(e) => updateSearchQuery(e.target.value)}
			/>
		</label>
	</div>
	<ul id="search-results" class="box">
		{#each filteredItems as item}
			<li class="search-result">
				<img
					src={`/images/axe1.png`}
					alt="Item Icon"
					width="64"
					height="64"
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

	li.search-result {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 1rem;
		padding: 0.8rem;
		line-height: 1.4;
		max-inline-size: none;

		&:not(:last-child) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
