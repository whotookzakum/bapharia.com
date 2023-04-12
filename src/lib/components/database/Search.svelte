<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";

	let searchQuery = $page.url.searchParams.get("search") || "";
	let selectedResult = $page.url.searchParams.get("result") || "";

	$: {
		if (browser) {
			searchQuery
				? $page.url.searchParams.set("search", searchQuery)
				: $page.url.searchParams.delete("search");

			selectedResult
				? $page.url.searchParams.set("result", selectedResult)
				: $page.url.searchParams.delete("result");

			goto(`?${$page.url.searchParams.toString()}`, {
				noScroll: true,
				replaceState: true,
				keepFocus: true,
			});
		}
	}

	const entries = graphql(`
		query MyLists @load {
			items {
				id
				name
			}
		}
	`);

</script>

<form id="search" class="search">
	<div class="grid g-50">
		<label for="search-box" class="component-label">Search</label>
		<input
			class="box"
			id="search-box"
			type="search"
			placeholder="Start typing item name or id"
			bind:value={searchQuery}
		/>
	</div>
	{#if $entries.fetching}
		<div>LOADING</div>
	{:else}
		<ul id="search-results" class="box">
			{#each $entries.data.items as entry}
				<li>
					<button
						class="search-result"
						on:click={() => (selectedResult = entry.id)}
					>
						<img
							src={`/images/axe1.png`}
							alt=""
							width="64"
							height="64"
							loading="lazy"
						/>
						<b>{entry.name}</b>
						<span>Enemy</span>
						<span>ID: {entry.id}</span>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</form>

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

		&:hover,
		&:focus-visible {
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
