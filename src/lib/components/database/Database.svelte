<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { graphql } from "$houdini";
	import { userLocale } from "$lib/stores";
	import DatabaseDetails from "./DatabaseDetails.svelte";
	import EntrySummary from "./EntrySummary.svelte";
	import SearchFilters from "./SearchFilters.svelte";
	import debounce from "lodash/debounce";
	import { filterCategoryTypes } from "$lib/stores";
	import Icon from "@iconify/svelte";

	let userSearchInput = $page.url.searchParams.get("search") || "";
	$: userSelectedEntryId = $page.url.searchParams.get("result");

	export let _DatabaseEntriesVariables = () => {
		return {
			searchTerm: userSearchInput,
			categories: JSON.stringify($filterCategoryTypes),
		};
	};

	$: {
		$filterCategoryTypes;
		updateResults();
	}

	const entries = graphql(`
		query DatabaseEntries($searchTerm: String, $categories: String) @load {
			entries(
				searchTerm: $searchTerm
				categories: $categories
				first: 6
				last: 6
			) @paginate(mode: SinglePage) {
				totalResults
				pageInfo {
					endCursor
					hasNextPage
					hasPreviousPage
					startCursor
				}
				edges {
					node {
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
						... on Weapon {
							classImg
							elementImg
							attribute
						}
						... on Skill {
							elementImg
							skillBackgroundImg
							skill_type
						}
						... on Imagine {
							elementImg
						}
					}
					cursor
				}
			}
		}
	`);

	const placeholderText = {
		ja_JP: "アイテム名かIDで検索",
		en_US: "Start typing item name or id",
	};

	const updateResults = () => {
		_DatabaseEntriesVariables = () => {
			return {
				searchTerm: userSearchInput,
				categories: JSON.stringify($filterCategoryTypes),
			};
		};
	};

	const updateResultsDebounced = debounce(() => {
		_DatabaseEntriesVariables = () => {
			return {
				searchTerm: userSearchInput,
			};
		};
	}, 500);

	const updateSearchParam = () => {
		userSearchInput
			? $page.url.searchParams.set("search", userSearchInput)
			: $page.url.searchParams.delete("search");

		// Results are pushed to history, but searches are not.
		// To add searches, create a separate function debouncing goto().
		// Without debounce, every letter will be added to history = bad UX.
		// However, as a consequence, the address bar won't update immediately.
		goto(`?${$page.url.searchParams.toString()}`, {
			noScroll: true,
			replaceState: true,
			keepFocus: true,
		});

		updateResultsDebounced();
	};

	const updateResultParam = (node) => {
		userSelectedEntryId = node.__typename + node.id;
		$page.url.searchParams.set("result", userSelectedEntryId);

		goto(`?${$page.url.searchParams.toString()}`, {
			noScroll: true,
			replaceState: false,
			keepFocus: true,
		});
	};

	const loadPreviousPage = async () => {
		await entries.loadPreviousPage();
		pageNumber--;
	};

	const loadNextPage = async () => {
		await entries.loadNextPage();
		pageNumber++;
	};

	let pageNumber = 1;
	let resultsPerPage = 6;

	$: totalPages = Math.ceil(
		$entries?.data?.entries.totalResults / resultsPerPage
	);

	$: if (pageNumber > totalPages && totalPages > 0) pageNumber = maxPages;
</script>

<div class="db-wrapper">
	<form id="search" class="search-pane">
		<div>
			<label for="search-box" class="component-label">Search</label>
			<div class="box search-and-filters">
				<input
					class="box"
					id="search-box"
					type="search"
					placeholder={placeholderText[$userLocale]}
					bind:value={userSearchInput}
					on:input={updateSearchParam}
				/>
				<SearchFilters />
			</div>
			<div class="page-controls flex g-25">
				<button
					class="flex"
					disabled={!$entries.pageInfo.hasPreviousPage}
					on:click={loadPreviousPage}
				>
					<Icon icon={"mdi:chevron-left"} width="18" height="18" />
				</button>
				<button
					class="flex"
					disabled={!$entries.pageInfo.hasNextPage}
					on:click={loadNextPage}
				>
					<Icon icon={"mdi:chevron-right"} width="18" height="18" />
				</button>
				<span>page {pageNumber} of {totalPages}</span>
				<span />
			</div>
		</div>
		{#if !$entries.fetching}
			<div>
				<span class="component-label"
					>Results ({$entries.data.entries.totalResults})</span
				>
				<ul id="search-results" class="box" role="list">
					{#each $entries.data.entries.edges as entry}
						<li>
							<button
								type="button"
								on:click={() => updateResultParam(entry.node)}
							>
								<EntrySummary
									{userSearchInput}
									data={entry.node}
								/>
							</button>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</form>
	<DatabaseDetails longId={userSelectedEntryId || "Item121000000"} />
</div>

<style lang="scss">
	.db-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.search-and-filters.box {
		padding: 0;
		border: none;
		overflow: visible;

		input.box {
			box-shadow: none;
			border-bottom: unset;
		}

		input.box:not(:focus-visible) {
			border-bottom-left-radius: unset;
			border-bottom-right-radius: unset;
		}
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
		list-style-type: none;
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

		button {
			padding: 0.8rem;
			user-select: auto;
			width: 100%;
			background: none;
			border: none;
			text-align: left;

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
