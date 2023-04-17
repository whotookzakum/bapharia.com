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

	// Bugged: blocks link navigation since its reacting to page.url updates as well
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
				... on Weapon {
					classImg
					attribute
				}
			}
		}
	`);

	function getAttributeImg(value) {
		switch (value) {
			case 6:
				return 5;
			case 5:
				return 2;
			case 4:
				return 3;
			case 3:
				return 1;
			case 2:
				return 4;
			case 7:
				return 6;
		}
	}
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
								<div class="skip-std">
									{entry.name[$userLocale]}
								</div>
								<div class={`${entry.__typename}`}>
									{entry.category[$userLocale]}
								</div>
								<div class="entry-id">ID: {entry.id}</div>
							</div>
							<div class="extra-icons">
								<!-- {#if entry.classImg}
									<img
										src={entry.classImg}
										alt=""
										width="32"
										height="32"
									/>
								{/if} -->
								{#if entry.attribute > 0}
									<img
										src={`/images/elements/UI_IconAttribute_${getAttributeImg(
											entry.attribute
										)}.png`}
										alt=""
										width="32"
										height="32"
									/>
								{/if}
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
			position: relative;
			max-inline-size: none;

			&:not(:last-child) {
				border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			}
		}

		.entry-id {
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
			// font-weight: 100;

			&:hover,
			&:focus-visible {
				background: var(--surface2);
			}

			&:focus-visible {
				border-radius: 5px;
			}
		}
	}

	.extra-icons {
		position: absolute;
		opacity: 0.4;
		display: flex;
		top: 0.8rem;
		right: 0.8rem;
	}
</style>
