<script>
	import { graphql } from "$houdini";
	import Icon from "@iconify/svelte";
	import { userLocale } from "$lib/stores";

	export let entryId;

	export let _DatabaseEntryVariables = () => {
		return {
			id: entryId,
		};
	};

	$: {
		_DatabaseEntryVariables = () => {
			return {
				id: entryId,
			};
		};
	}

	const entry = graphql(`
		query DatabaseEntry($id: String!) @load {
			entry(id: $id) {
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
					desc {
						ja_JP
						en_US
					}
					sourceDesc {
						ja_JP
						en_US
					}
					effectDesc {
						ja_JP
						en_US
					}
				}
				... on Item {
					dungeon_only
					item_level
					item_exp
					adventurer_rank
					no_sale_flag
					price_player_buys
					price_player_sells
				}
			}
		}
	`);
	let detailsCollapsed = true;
</script>

<div class="details-pane">
	<span class="component-label">Details</span>
	<div class="box">
		<article>
			{#if !$entry.fetching}
				<header>
					<img
						src={$entry.data.entry.bapharia.thumb}
						alt=""
						width="64"
						height="64"
					/>
					<h3>
						{$entry.data.entry.bapharia.name[$userLocale]}
						{#if $entry.data.entry.item_level}
							<span>(Lv. {$entry.data.entry.item_level})</span>
						{/if}
					</h3>
					<span
						>{$entry.data.entry.bapharia.category[
							$userLocale
						]}</span
					>
					<span>ID: {$entry.data.entry.id}</span>
					<img
						class="element-img"
						src="/images/elements/UI_IconAttribute_1.png"
						alt=""
						width="32"
						height="32"
					/>
				</header>
				<div class:collapsed={detailsCollapsed}>
					{#if $entry.data.entry.bapharia.desc}
						<h4>Description</h4>
						<p>{$entry.data.entry.bapharia.desc[$userLocale]}</p>
					{/if}
					{#if $entry.data.entry.dungeon_only}
						<div>(Dungeon-only)</div>
					{/if}
					{#if $entry.data.entry.bapharia.sourceDesc}
						<h4>Source</h4>
						<p>
							{$entry.data.entry.bapharia.sourceDesc[$userLocale]}
						</p>
					{/if}
					{#if $entry.data.entry.bapharia.effectDesc}
						<h4>Effect</h4>
						<p>
							{$entry.data.entry.bapharia.effectDesc[$userLocale]}
						</p>
					{/if}
					{#if $entry.data.entry.item_exp}
						<h4>Item EXP</h4>
						<p>{$entry.data.entry.item_exp}</p>
					{/if}
					{#if $entry.data.entry.adventurer_rank}
						<h4>Item EXP</h4>
						<p>{$entry.data.entry.adventurer_rank}</p>
					{/if}
					{#if !$entry.data.entry.no_sale_flag}
						<div>
							Sells for {$entry.data.entry.price_player_sells}
							<img
								src="/UI/Common/UI_CmnMoney1.png"
								alt=""
								width="24"
								height="24"
								style="margin: -7px -4px"
							/>
						</div>
					{/if}
					{#if $entry.data.entry.price_player_buys !== 99999 && $entry.data.entry.price_player_buys !== 1}
						<div>
							Buy for {$entry.data.entry.price_player_buys}
							<img
								src="/UI/Common/UI_CmnMoney1.png"
								alt=""
								width="24"
								height="24"
								style="margin: -7px -4px"
							/>
						</div>
					{/if}
				</div>
			{/if}
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

<style lang="scss">
	.details-pane {
		article {
			border: 1px solid var(--surface2);
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
			border-bottom: none;
			padding: 1rem;
		}

		div.box {
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
