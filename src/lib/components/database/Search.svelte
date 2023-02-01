<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import _ from "lodash";
	import { checkStringIncludes } from "$lib/utils/string_utils";
	export let allItems;
	export let selectedItem;

	let searchQuery = $page.url.searchParams.get("db") || "";

	$: searchResults = allItems.filter((item) => {
		const idMatch = checkStringIncludes(item.id, searchQuery);
		const nameMatch = checkStringIncludes(item.name, searchQuery);
		return idMatch || nameMatch;
	});

	function updateUrl() {
		searchQuery
			? $page.url.searchParams.set("db", searchQuery)
			: $page.url.searchParams.delete("db");
		goto(`?${$page.url.searchParams.toString()}`, {
			noScroll: true,
			replaceState: true,
			keepFocus: true,
		});
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
				bind:value={searchQuery}
				on:input={updateUrl}
			/>
		</label>
	</div>
	<ul id="search-results" class="box">
		{#each searchResults as result}
			<li>
				<button class="search-result" on:click={() => selectedItem = result}>
					<img
						src={`/images/axe1.png`}
						alt=""
						width="64"
						height="64"
						loading="lazy"
					/>
					<b>{result.name}</b>
					<span>Enemy</span>
					<span>ID: {result.enemy_id}</span>
				</button>
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
		list-style: none;
		padding: 0;
		margin: 0;
		display: block;
		overflow: visible;
		max-inline-size: none;
		// min-height: 454px;
	}

	button.search-result {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 1rem;
		padding: 0.8rem;
		line-height: 1.4;
		background: none;
		border: none;
		width: 100%;
		text-align: left;

		b {
			font-size: initial;
		}

		& img {
			grid-row: span 3;
		}

		span {
			color: var(--text2);
		}

		&:hover, &:focus-visible {
			background: var(--surface2);
		}

		&:focus-visible {
			border-radius: 5px; // match .box
		}
	}

	li {
		max-inline-size: none;

		&:not(:last-child) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		}
	}
</style>
