<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";
	import { graphql } from "$houdini";
	import DatabaseDetails from "./DatabaseDetails.svelte";
	import { userLocale } from "$lib/stores";

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

	export let _DatabaseEntriesVariables = () => {
		return {
			searchTerm: userSearchInput || "",
		};
	};

	$: {
		_DatabaseEntriesVariables = () => {
			return {
				searchTerm: userSearchInput || "",
			};
		};
	}

	// Search results
	const entries = graphql(`
		query DatabaseEntries($searchTerm: String) @load {
			entries(searchTerm: $searchTerm) {
				__typename
				id
				name {
					ja_JP
					en_US
				}
				thumb
				category {
					ja_JP
					en_US
				}
			}
		}
	`);
</script>

<h2 id="db">Database</h2>
<div class="db-wrapper">
	<form id="search" class="search-pane">
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
				{#each $entries.data.entries as entry}
					<li>
						<button
							on:click={() => (userSelectedEntryId = entry.id)}
						>
							<img
								src={entry.thumb}
								alt=""
								width="64"
								height="64"
								loading="lazy"
							/>
							<div class="grid">
								<b>{entry.name[$userLocale]}</b>
								<span>{entry.category[$userLocale]}</span>
								<span>ID: {entry.id}</span>
							</div>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</form>
	<DatabaseDetails entryId={userSelectedEntryId || "121000000"} />
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

	.search-pane {
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

		li {
			max-inline-size: none;

			&:not(:last-child) {
				border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			}
		}

		b {
			font-size: initial;
		}

		span {
			color: var(--text2);
		}

		button {
			display: flex;
			align-items: center;
			gap: 0.8rem;
			padding: 0.8rem;
			user-select: auto;
			width: 100%;
			background: none;
			border: none;
			text-align: left;
			line-height: 1.4;

			&:hover,
			&:focus-visible {
				background: var(--surface2);
			}

			&:focus-visible {
				border-radius: 5px;
			}
		}
	}
</style>
