<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { graphql } from "$houdini";
	import { userLocale } from "$lib/stores";
	import DatabaseDetails from "./DatabaseDetails.svelte";
	import EntrySummary from "./EntrySummary.svelte";
	import SearchFilters from "./SearchFilters.svelte";
	import debounce from "lodash/debounce";

	let userSearchInput = $page.url.searchParams.get("search");
	$: userSelectedEntryId = $page.url.searchParams.get("result");

	export let _DatabaseEntriesVariables = () => {
		return {
			searchTerm: userSearchInput,
		};
	};

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
		}
	`);

	const placeholderText = {
		ja_JP: "アイテム名かIDで検索",
		en_US: "Start typing item name or id",
	};

	const updateResults = debounce(() => {
		_DatabaseEntriesVariables = () => {
			return {
				searchTerm: userSearchInput
			};
		};
	}, 500);

	const updateUrl = (resultId) => {
		userSearchInput
			? $page.url.searchParams.set("search", userSearchInput)
			: $page.url.searchParams.delete("search");
		
		if (resultId) userSelectedEntryId = resultId
		
		userSelectedEntryId
			? $page.url.searchParams.set("result", userSelectedEntryId)
			: $page.url.searchParams.delete("result");

		// Results are pushed to history, but searches are not.
		// To add searches, create a separate function debouncing goto(). 
		// Without debounce, every letter will be added to history = bad UX.
		// However, as a consequence, the address bar won't update immediately.
		goto(`?${$page.url.searchParams.toString()}`, {
			noScroll: true,
			replaceState: !resultId,
			keepFocus: true,
		});
	}

	const handleSearch = () => {
		updateUrl()
		updateResults()
	};
</script>

<h2 id="db">Database</h2>
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
					on:input={handleSearch}
				/>
				<SearchFilters />
			</div>
		</div>
		{#if !$entries.fetching}
			<div>
				<span class="component-label">Results ({$entries.data.entries.length})</span>
				<ul id="search-results" class="box">
					{#each $entries.data.entries as entry}
						<li>
							<button
								type="button"
								on:click={() => updateUrl(entry.id)}
							>
								<EntrySummary data={entry} />
							</button>
						</li>
					{/each}
				</ul>
			</div>
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
