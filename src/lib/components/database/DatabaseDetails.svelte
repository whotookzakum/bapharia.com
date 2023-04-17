<script>
	import { graphql } from "$houdini";
	import Icon from "@iconify/svelte";
	import { userLocale } from "$lib/stores";
    import Item from "./templates/Item.svelte";
    import Imagine from "./templates/Imagine.svelte";

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
				name {
					ja_JP
					en_US
				}
				desc {
					ja_JP
					en_US
				}
				thumb
				category {
					ja_JP
					en_US
				}
				... on Item {
					sourceDesc {
						ja_JP
						en_US
					}
					effectDesc {
						ja_JP
						en_US
					}
					dungeon_only
					item_level
					item_exp
					adventurer_rank
					no_sale_flag
					price_player_buys
					price_player_sells
				}
				... on Imagine {
					imagine_max_level
					price_player_sells
					imagine_type
					imagine_max_level
					slotImg
					elementImg
					params {
						level
						skill
						attribute_value
						offensive_power
						str
						vit
						dex
						mnd
						int
						defensive_power
					}
					abilities {
						probability
						name {
							ja_JP
							en_US
						}
						stats {
							value
							name {
								ja_JP
								en_US
							}
						}
					}
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
						src={$entry.data.entry.thumb}
						alt=""
						width="64"
						height="64"
					/>
					<h3>
						{$entry.data.entry.name[$userLocale]}
						{#if $entry.data.entry.item_level}
							<span>(Lv. {$entry.data.entry.item_level})</span>
						{/if}
						{#if $entry.data.entry.imagine_max_level}
							<span
								>(Lv. {$entry.data.entry
									.imagine_max_level})</span
							>
						{/if}
					</h3>
					<span>{$entry.data.entry.category[$userLocale]}</span>
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
					{#if $entry.data.entry.__typename === "Item"}
						<Item data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "Imagine"}
						<Imagine data={$entry.data.entry} />
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

		h4 {
			margin: 0;
			font-size: var(--step-0);
		}

		p {
			margin: 0;
			line-height: initial;
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
