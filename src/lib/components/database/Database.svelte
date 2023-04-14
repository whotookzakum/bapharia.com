<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";
	import { graphql } from "$houdini";
	import Icon from "@iconify/svelte";

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
				bapharia {
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
				id: parseInt(userSelectedEntryId) || 121000000,
			};
		};
	}

	const item = graphql(`
		query item($id: Int!) @load {
			item(id: $id) {
				id
				bapharia {
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
		}
	`);

	let userLocale = "ja_JP";
	userLocale = "en_US";

	let detailsCollapsed = true;
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
				{#each $entries.data.items as entry}
					<li>
						<button
							on:click={() => (userSelectedEntryId = entry.id)}
						>
							<img
								src={entry.bapharia.thumb}
								alt=""
								width="64"
								height="64"
								loading="lazy"
							/>
							<div class="grid">
								<b>{entry.bapharia.name[userLocale]}</b>
								<span
									>{entry.bapharia.category[userLocale]}</span
								>
								<span>ID: {entry.id}</span>
							</div>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</form>
	<div class="details-pane">
		<span class="component-label">Details</span>
		<div class="box">
			<article>
				{#if !$item.fetching}
					<header>
						<img
							src={$item.data.item.bapharia.thumb}
							alt="Item Icon"
							width="64"
							height="64"
						/>
						<h3>
							{$item.data.item.bapharia.name[userLocale]}
							<span>(Lv. 1)</span>
						</h3>
						<span
							>{$item.data.item.bapharia.category[
								userLocale
							]}</span
						>
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
				<div class:collapsed={detailsCollapsed}>

				</div>
			</article>
			<label class="details-expander">
				<Icon
					icon={detailsCollapsed ? "mdi:arrow-down" : "mdi:arrow-up"}
					width="18"
					height="18"
					style="margin-top:3px"
				/>
				<input
					type="checkbox"
					class="visually-hidden"
					bind:checked={detailsCollapsed}
				/>
			</label>
		</div>
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

	.details-pane {
		article {
			border: 1px solid var(--surface2);
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
			border-bottom: none;
			padding: 1rem;
		}

		.box {
			padding: 0;
			overflow: visible;
			border: none;
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

		.collapsed {
			max-height: 465px;
			-webkit-mask-image: linear-gradient(black, transparent);
			mask-image: linear-gradient(black 70%, transparent);
		}

		.details-expander {
			background: var(--surface2);
			border: 1px solid var(--surface3); // or just border-top
			display: block;
			text-align: center;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;

			&:hover,
			&:has(:focus-visible) {
				background: var(--surface3);
				color: var(--accent);
			}

			&:has(:focus-visible) {
				border-radius: 5px;
			}
		}
	}
</style>