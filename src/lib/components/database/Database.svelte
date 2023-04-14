<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";
	import { graphql } from "$houdini";

	// URL updates
	let userSearchInput = $page.url.searchParams.get("search");
	let userSelectedEntryId = $page.url.searchParams.get("result");
	$: if (browser) {
		userSearchInput
			? $page.url.searchParams.set("search", userSearchInput)
			: $page.url.searchParams.delete("search");

		userSelectedEntryId
			? $page.url.searchParams.set("result", userSelectedEntryId)
			: $page.url.searchParams.delete("result");

		goto(`?${$page.url.searchParams.toString()}`, {
			noScroll: true,
			replaceState: true,
			keepFocus: true,
		});
	}

	// Search results
	const entries = graphql(`
		query MyLists @load {
			items {
				id
				name
			}
		}
	`);

	// Result details
	export let _itemVariables = () => {
		return {
			id: parseInt(userSelectedEntryId) || 121000000,
		};
	};

	$: {
		_itemVariables = () => {
			return {
				id: parseInt(userSelectedEntryId) || 121000000
			};
		};
	}

	const item = graphql(`
		query item($id: Int!) @load {
			item(id: $id) {
				id
				name
			}
		}
	`);
</script>

<h2 id="db">Database</h2>
<div class="db-wrapper">
	<form id="search" class="search">
		<div>
			<label for="search-box" class="component-label">Search</label>
			<input
				class="box"
				id="search-box"
				type="search"
				placeholder="Start typing item name or id"
				bind:value={userSearchInput}
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
							on:click={() => (userSelectedEntryId = entry.id)}
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
	<div>
		<span class="component-label">Details</span>
		<article class="box">
			{#if !$item.fetching}
				<header>
					<img
						src={`/images/axe1.png`}
						alt="Item Icon"
						width="64"
						height="64"
					/>
					<h3>{$item.data.item.name} <span>(Lv. 1)</span></h3>
					<span>Item</span>
					<span>ID: {$item.data.item.id}</span>
					<img
						class="element-img"
						src="/images/elements/UI_IconAttribute_1.png"
						alt="Fire"
						width="32"
						height="32"
					/>
				</header>
			{/if}
			<!-- <div class:collapsed={detailsCollapsed}>
				<Enemy bind:item />
				<Weapon {item} />
			</div>
			<button class="box" on:click={() => detailsCollapsed = !detailsCollapsed}>
				Show {detailsCollapsed ? "more" : "less"}
			</button> -->
		</article>
	</div>
</div>

<style lang="scss">
	.db-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 800px) {
		.db-wrapper {
			grid-template-columns: 1fr;
		}
	}

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
		user-select: inherit;

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

	article {
		display: block;
		width: 100%;
		flex: 1;
		justify-self: center;
	}

	header {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		column-gap: 1rem;
		padding-bottom: 1rem;
		line-height: 1.4;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		position: relative;

		img {
			grid-row: span 3;
		}

		h3 {
			margin: 0;
			font-size: var(--step-1);
		}

		span {
			color: var(--text2);
			font-size: var(--step--1);
		}

		.element-img {
			position: absolute;
			right: 0;
			top: 0;
			opacity: 0.5;
		}
	}

	button {
		background: var(--surface3);
		padding: 0.5rem;
		width: 100%;

		&:hover,
		&:focus-visible {
			filter: brightness(1.2);
		}
	}

	.collapsed {
		max-height: 465px;
		-webkit-mask-image: linear-gradient(black, transparent);
		mask-image: linear-gradient(black 70%, transparent);
	}
</style>
