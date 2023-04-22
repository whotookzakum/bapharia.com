<script>
	import { graphql } from "$houdini";
	import Icon from "@iconify/svelte";
	import Item from "./templates/Item.svelte";
	import Imagine from "./templates/Imagine.svelte";
    import Weapon from "./templates/Weapon.svelte";
    import Costume from "./templates/Costume.svelte";
    import EntrySummary from "./EntrySummary.svelte";
    import Token from "./templates/Token.svelte";
    import StampSet from "./templates/StampSet.svelte";
    import LiquidMemory from "./templates/LiquidMemory.svelte";
    import Skill from "./templates/Skill.svelte";
    import Map from "./templates/Map.svelte";
    import Enemy from "./templates/Enemy.svelte";

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
					recipe {
						adventurer_rank
						price
						materials {
							id
							amount
							name {
								ja_JP
								en_US
							}
							sourceDesc {
								ja_JP
								en_US
							}
						}
					}
				}
				... on Weapon {
					weapon_max_level
					price_player_sells
					price_player_buys
					classImg
					elementImg
					stats {
						level
						attribute_value
						offensive_power
						str
						vit
						dex
						mnd
						int
						defensive_power
						critical_power
					}
					abilities {
						probability
						name {
							ja_JP
							en_US
						}
						big_success_max_value
						big_success_min_value
						success_max_value
						success_min_value
					}
					recipe {
						difficulty
						use_money
						base_ability_rate1
						base_ability_rate2
						base_ability_rate3
						base_ability_rate4
						bonus_rate
						great_success_tokens
						materials {
							id
							need_num
							name {
								ja_JP
								en_US
							}
							sourceDesc {
								ja_JP
								en_US
							}
						}
					}
					treasureSources {
						location {
							id
							name {
								ja_JP
								en_US
							}
						}
						name {
							ja_JP
							en_US
						}
						probability
					}
				}
				... on StampSet {
					stamp_data {
						stamp_id
					}
				}
				... on LiquidMemory {
					bottle_accumulate_limit
					efficacy_parameters {
						desc {
							ja_JP
							en_US
						}
						occurancy_rate
						cost
					}
					accumulate_condition_parameters {
						desc {
							ja_JP
							en_US
						}
						rates {
							accumulate_value
							lottery_rate
						}
					}
				}
				... on Skill {
					classImg
					elementImg
					skillBackgroundImg
					abilities {
						skill_id
						desc {
							ja_JP
							en_US
						}
						skill_mastery_param {
							condition_class_level
						}
					}
					skill_mastery_param {
						condition_class_level
					}
				}
				... on GameMap {
					mapImages
				}
				... on Enemy {
					level_params {
						attack_power
						attack_power_factor
						defence_power
						defence_power_factor
						exp_crv
						exp_lv1
						exp_lv100
						hit_point
						hit_point_factor
					}
					drop_items {
						content_id
						name {
							ja_JP
							en_US
						}
						drop_rate
						item_index
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
					<EntrySummary data={$entry.data.entry} moreDetails />
				</header>
				<div class="entry-details" class:collapsed={detailsCollapsed}>
					{#if $entry.data.entry.__typename === "Item"}
						<Item data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "Imagine"}
						<Imagine data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "Weapon"}
						<Weapon data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "Costume"}
						<Costume data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "Token"}
						<Token data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "StampSet"}
						<StampSet data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "LiquidMemory"}
						<LiquidMemory data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "Skill"}
						<Skill data={$entry.data.entry} />
					{/if}
					<!-- Gestures have no data -->
					{#if $entry.data.entry.__typename === "GameMap"}
						<Map data={$entry.data.entry} />
					{/if}
					{#if $entry.data.entry.__typename === "Enemy"}
						<Enemy data={$entry.data.entry} />
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
		div.box {
			padding: 0;
			overflow: visible;
			border: none;
		}

		article {
			border: 1px solid var(--surface2);
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
			border-bottom: none;
			padding: 1rem;
		}

		header {
			padding-bottom: 1rem;
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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

			&:hover {
				background: var(--surface3);
				color: var(--accent);
			}
		}

		@supports selector(:has(*)) {
			.details-expander:has(:focus-visible) {
				border-radius: 5px;
				background: var(--surface3);
				color: var(--accent);
			}
		}

		@supports not selector(:has(*)) {
			.details-expander:focus-within {
				border-radius: 5px;
				outline: 2px solid var(--accent);
				background: var(--surface3);
				color: var(--accent);
			}
		}
	}
</style>
