import ITEMS from "$bp_api/japan/items.json";
import MASTERRECIPERELEASECONDITION from "$bp_api/japan/masterrecipereleasecondition.json"
import REWARDS from "$bp_api/japan/rewards.json"
import MASTER_CRAFT_RECIPE_SETS from "$bp_api/japan/master_craft_recipe_sets.json"
import DUNGEON_REWARDS from "$bp_api/japan/dungeon_rewards"
import DUNGEON_RANKED_REWARDS from "$bp_api/japan/dungeon_ranked_rewards"
import QUESTS from "$bp_api/japan/quests.json"
import MASTER_ADVENTURE_BOARD_PANEL from "$bp_api/japan/master_adventure_board_panel.json"
import MASTER_ADVENTURE_BOARD from "$bp_api/japan/master_adventure_board.json"
import MASTER_SEASON_PASS_REWARD from "$bp_api/japan/master_season_pass_reward.json"
import MASTER_QUEST_BONUS from "$bp_api/japan/master_quest_bonus.json"
import MASTER_MERCHANDISE_COMMODITY from "$bp_api/japan/master_merchandise_commodity.json"
import MASTER_MERCHANDISE_ITEM_SET from "$bp_api/japan/master_merchandise_item_set.json"
import MASTER_MERCHANDISE_COUNTER from "$bp_api/japan/master_merchandise_counter.json"
import MASTER_REWARD_EXTRA_ATTRIBUTES from "$bp_api/japan/master_reward_extra_attributes.json"
import MASTER_REWARD_LOTTERY_GROUPS from "$bp_api/japan/master_reward_lottery_groups.json";
import TREASURES from "$bp_api/japan/treasures.json";
import ENEMYPARAMS from "$bp_api/japan/enemyparams.json";
import TOKEN from "$bp_api/japan/token.json";
import SHOP_ITEM_SET from "$bp_api/japan/shop_item_set.json";
import MASTER_SEASON_PASS_SHOPS from "$bp_api/japan/master_season_pass_shops.json";
import MASTER_SEASON from "$bp_api/japan/master_season.json";
import MASTER_SEASON_PASS_SHOP_PURCHASE_LIMITS from "$bp_api/japan/master_season_pass_shop_purchase_limits.json";
import CURRENCY_SHOP from "$bp_api/japan/currency_shop.json";
import CURRENCY_SHOP_PURCHASE_LIMIT from "$bp_api/japan/currency_shop_purchase_limit.json";
import COIN_SHOP from "$bp_api/japan/coin_shop.json";
import COIN_SHOP_PURCHASE_LIMIT from "$bp_api/japan/coin_shop_purchase_limit.json";
import SHOP_REALMONEY_ITEM from "$bp_api/japan/shop_realmoney_item.json";
import ITEM_BOX from "$bp_api/japan/item_box.json";
import MASTER_RANKING_REWARDS from "$bp_api/japan/master_ranking_rewards.json";
import CRAFT from "$bp_api/japan/craft.json"
import RECEPI from "$bp_api/japan/imagine/recepi.json"
import ACHIEVEMENTS from "$bp_api/japan/achievements.json"
import COUPON from "$bp_api/japan/coupon.json"
import uniqBy from "lodash/uniqBy";
import { getAbilities, getText, getAssets } from "./index";
import gacha from "../gacha";

// Testing links
// http://localhost:5173/items/121000000?lang=en_US
// http://localhost:5173/weapons/106001201?lang=en_US
// http://localhost:5173/imagines/133000800?lang=en_US

// Debugging: List the reward lottery groups that have repeating items
MASTER_REWARD_LOTTERY_GROUPS.forEach((group) => {
    const uniq = uniqBy(group.rewards, reward => reward.item_id)
    const isAllUniq = uniq.length === group.rewards.length
    if (!isAllUniq) console.log("NOT UNIQUE:", group.id, /* group.rewards.map(r => r.item_id) */)
})

// TODO: client: combine TA/SA Ranking Rewards class-specific sources into 1 source 
// TODO: client: combine weapon drop sources (50% chance for current class, 50% for other classes. of which 5%/5% are for the secret line)

// TODO: TA/SA clear rewards like EXP, plugs, GC (301000008 from sad005_ITEM2)

// Source: Crafting
function getCraftingSources(item, lang, rewardTypes) {
    let craftingSources = []
    // Recipes for items/weapons
    if (rewardTypes.some(type => [3, 4].includes(type))) {
        // out_item_type 1: items
        // out_item_type 2: weapons
        craftingSources.push(...CRAFT.filter(recipe => recipe.out_item_id === item.id))
    }
    // Recipes for imagine
    else if (rewardTypes.includes(6)) {
        craftingSources.push(...RECEPI.filter(recipe => recipe.imagin_id === item.id))
    }

    return craftingSources.map(recipe => {
        const materials = recipe.materials.map(mat => {
            const itemData = ITEMS.find(i => i.id === mat.item_id && i.type === mat.item_type)
            return {
                id: mat.item_id,
                text: {
                    name: getText("item_text", itemData.name, lang),
                    source: getText("item_text", itemData.obtaining_route_detail_id, lang)
                },
                assets: {
                    icon: getAssets("item", mat.item_id).icon
                },
                need_num: mat.need_num
            }
        })

        // Sources for the recipe
        const recipeSources = getSources(recipe, lang, [11, 20])

        // Sources for the all the recipe set(s) that the recipe belongs to
        const recipeSets = MASTER_CRAFT_RECIPE_SETS.filter(set => set.recipe_ids.includes(recipe.id))
        recipeSources.push(
            ...recipeSets.map(recipeSet =>
                getSources(recipeSet, lang, [27]).map(src => ({
                    ...src,
                    recipeSetName: getText("master_craft_recipe_set_text", recipeSets[0]?.name, lang)
                }))
            ).flat()
        )

        // Sources for the recipe that involve an unlock condition (i.e. looting an Idea)
        const recipeReleaseConditions = MASTERRECIPERELEASECONDITION
            .filter(obj => obj.released_recipe_id_01 === recipe.id)
            .map(condition => {
                const item = ITEMS.find(i => i.id === condition.item_id)
                return {
                    sourceType: "item (release condition)",
                    id: condition.item_id,
                    text: {
                        name: getText("item_text", item.name, lang),
                        source: getText("item_text", item.obtaining_route_detail_id, lang)
                    },
                    assets: getAssets("item", item.id),
                }
            })
        recipeSources.push(...recipeReleaseConditions)

        // Include the Special Effect/passive Abilities which can depend on the source
        // Weapons: CRAFT[0].killer_perk_pick
        // Imagine: IMAGINE[0].table_id
        const abilities = getAbilities(recipe.killer_perk_pick || item.table_id, lang)

        let assets = {}
        // Imagine
        if (rewardTypes.includes(6)) assets.icon = "/UI/Icon/Reward/UI_Icon_11.png"
        // Item
        else if (rewardTypes.includes(3)) assets.icon = "/UI/Icon/Reward/UI_Icon_20.png"
        // Weapon (guaranteed to be a recipe set?)
        else if (rewardTypes.includes(4)) assets.icon = "/UI/Icon/Reward/UI_Icon_27.png"

        return {
            sourceType: "crafting",
            assets,
            recipe: {
                ...recipe,
                materials
            },
            abilities,
            sources: recipeSources
        }
    })
}

// TODO: Rewrite these to use filter instead of find. a reward could exist in multiple places in a file.
// Source: Reward (boards; quests; dungeons; season passes; bonus quests; TA/SA ranking rewards and gold/silver/bronze evaluation rewards; achievements; mount caravan)
function getRewardSources(item, lang, rewardTypes) {
    return REWARDS
        .filter(reward => rewardTypes.includes(reward.reward_type) && (reward.item_id === item.id))
        .flatMap(reward => {
            const { amount } = reward
            const sources = []

            // Include the Special Effect/passive Abilities which can depend on the source
            const extra_attributes = MASTER_REWARD_EXTRA_ATTRIBUTES.find(data => data.id === reward.extra_attributes_id)
            const abilities = getAbilities(extra_attributes?.perk_pick_id, lang)

            // Source: Rewarded from adventure board
            const boardPanel = MASTER_ADVENTURE_BOARD_PANEL.find(panel => panel.reward_ids.some(rw => rw.reward_id === reward.id))
            if (boardPanel) {
                const board = MASTER_ADVENTURE_BOARD.find(b => b.id === boardPanel.board_id)
                sources.push({
                    sourceType: "board",
                    id: board.id,
                    amount,
                    text: {
                        name: getText("master_adventure_boards_text", board.name, lang),
                    },
                    extra_attributes_id: reward.extra_attributes_id,
                    abilities
                })
            }

             // Source: Rewarded from board completion
             const boardCompletion = MASTER_ADVENTURE_BOARD.find(board => board.complete_reward_id_list.some(rw => rw.reward_id === reward.id))
             if (boardCompletion) {
                 sources.push({
                     sourceType: "board completion",
                     id: boardCompletion.id,
                     amount,
                     text: {
                         name: getText("master_adventure_boards_text", boardCompletion.name, lang),
                     },
                     abilities
                 })
             }

            // Source: Rewarded from quest
            const quest = QUESTS.find(q => q.quest_rewards.some(questReward => questReward.master_rewards_id === reward.id))
            if (quest) {
                sources.push({
                    sourceType: "quest",
                    id: quest.long_id,
                    amount,
                    text: {
                        name: getText(`${quest.source_file}_text`, quest.name, lang),
                    },
                    extra_attributes_id: reward.extra_attributes_id,
                    abilities
                })
            }

            // Source: Rewarded from dungeon
            const dungeon = DUNGEON_REWARDS.find(d => d.reward_id === reward.id)
            if (dungeon) {
                const rankedRewards = DUNGEON_RANKED_REWARDS.find(obj => obj.dungeon_reward_search_name === dungeon.dungeon_reward_search_name)
                sources.push({
                    sourceType: "dungeon",
                    amount,
                    dungeon_reward_search_name: dungeon.dungeon_reward_search_name,
                    text: {},
                    extra_attributes_id: reward.extra_attributes_id,
                    class_type: rankedRewards?.class_type,
                    evaluation: rankedRewards?.evaluation,
                    maximum_value: rankedRewards?.maximum_value,
                    abilities
                })
            }

            // Source: Rewarded from season pass
            const seasonPass = MASTER_SEASON_PASS_REWARD.find(passReward => passReward.reward_id === reward.id)
            if (seasonPass) {
                sources.push({
                    sourceType: "season pass",
                    season: parseInt(seasonPass.season_id.toString().substr(1, 2)) + 1,
                    rank: seasonPass.rank,
                    amount,
                    text: {
                        seasonName: getText("master_season_text", MASTER_SEASON.find(s => s.id === seasonPass.season_id).season_name, lang)
                    },
                    extra_attributes_id: reward.extra_attributes_id,
                    abilities
                })
            }

            // Source: Rewarded from bonus quest
            const bonusQuest = MASTER_QUEST_BONUS.find(b => b.quest_reward_id.some(idObj => idObj.reward_id === reward.id))
            if (bonusQuest) {
                sources.push({
                    sourceType: "bonus quest",
                    id: bonusQuest.quest_id, // or quest_group_id ?
                    amount,
                    text: {
                        name: getText("master_quest_auto_order_bonus_text", bonusQuest.quest_name, lang),
                    },
                    extra_attributes_id: reward.extra_attributes_id,
                    abilities
                })
            }

            // Source: Rewarded from TA/SA ranking
            const ranking = MASTER_RANKING_REWARDS.find(obj => obj.rewards.some(rew => rew.master_rewards_id === reward.id))
            if (ranking) {
                sources.push({
                    sourceType: "TA/SA reward",
                    content_id: ranking.content_id,
                    class_type: ranking.class_type,
                    from_rank: ranking.from_rank,
                    to_rank: ranking.to_rank,
                    amount,
                    abilities
                })
            }

            // Source: Rewarded from achievement
            const achievement = ACHIEVEMENTS.find(ach => ach.achievement_rewards.some(rew => rew.reward_id === reward.id))
            if (achievement) {
                sources.push({
                    sourceType: "achievement",
                    id: achievement.id,
                    amount,
                    text: {
                        name: getText("achievements_text", achievement.name, lang)
                    },
                    assets: getAssets("achievement", achievement.rank),
                    abilities
                })
            }

            // Source: Rewarded from mount caravan
            const caravan = reward.id.startsWith("MC_")
            if (caravan) {
                // CITY CATEGORY: City areas (no nodes) "cty01_3" "cty01_4"
                // FIELD CATEGORY: Fields (has nodes) "dng009_Hard_20_1R_009000"
                // Reward id is something like: "MC_fld001_E_05_1N_00100"
                // fld001_E: selected area
                // 05: 5-hour reward
                // 1N: 1-heart Normal rewards / 1R: 1-heart Random rewards
                // 00100: reward id
                // Note: the reward id doesn't tell us which node the reward belongs to. these are probably mapped on the php server.
                // Example:
                // {
                //     map: "fld001_E",
                //     nodes: [
                //         {
                //             id: "idk",
                //             name: "something",
                //             rewards: [
                //                 "MC_fld001_E_05_1N_00100",
                //                 "MC_fld001_E_05_1N_00200"
                //             ]
                //         }
                //     ]
                // }

                const caravanId = reward.id.replace("MC_", "").split(/_[0-9][0-9]/)[0]
                const mapId = caravanId.split(/_[0-9]/)[0]
                sources.push({
                    sourceType: "mount caravan",
                    id: reward.id,
                    caravanId,
                    mapId,
                    amount,
                    abilities
                })
            }

            const coupon = COUPON.find(obj => obj.reward_id.some(rew => rew.reward_id === reward.id))
            if (coupon) {
                const { use_count } = coupon.reward_id.find(obj => obj.reward_id === reward.id)
                const { id, start_at, end_at } = coupon
                sources.push({
                    sourceType: "coupon",
                    couponId: id,
                    use_count,
                    start_at,
                    end_at,
                    amount,
                    abilities
                })
            }

            if (sources.length < 1) {
                sources.push({
                    ...reward,
                    abilities
                })
            }

            return sources
        })
}

// Source: RNG Reward
// Some lotteries belong to chests, but some don't, so we'll take the reward and pass it through getSources to get all sources for the lottery.
// i.e. Lottery 330000000 rewarded from MQ101_020, which gives Imagine 130000000 (B-ゴブリン)
function getLotterySources(item, lang, rewardTypes) {
    const lotteriesContainingItem = MASTER_REWARD_LOTTERY_GROUPS
        .reduce((acc, obj) => {
            const rewards = obj.rewards.filter(reward => reward.item_id === item.id)
            if (rewardTypes.includes(obj.reward_type) && rewards.length > 0) acc.push({ ...obj, rewards })
            return acc
        }, [])

        const hi = lotteriesContainingItem.flatMap(lottery =>
            lottery.rewards.flatMap(reward =>
                // Duplicate "item_id" as "id" so that it can pass filters
                getSources(({ ...reward, id: reward.item_id }), lang, [33])
                    // Add lotteryId so we know which sources used this getLotterySources function
                    .map(source => ({ lotteryId: lottery.id, ...source }))
            )
        )
        // console.log(lotteriesContainingItem)

    return lotteriesContainingItem.flatMap(lottery =>
        lottery.rewards.flatMap(reward =>
            // Duplicate "item_id" as "id" so that it can pass filters
            getSources(({ ...reward, id: reward.item_id }), lang, [33])
                // Add lotteryId so we know which sources used this getLotterySources function
                .map(source => ({ lotteryId: lottery.id, ...source }))
        )
    )
}

// Source: Enemy Drop (not a chest, but the raw item)
function getEnemyDropSources(item, lang, rewardTypes) {
    return ENEMYPARAMS
        .flatMap(enemy => {
            return enemy.drop_items
                .filter(drop => drop.item_index === item.id)
                .map(drop => {
                    return {
                        sourceType: "enemy drop",
                        enemy_id: enemy.enemy_id,
                        content_id: drop.content_id,
                        text: {
                            name: getText("enemyparam_text", enemy.name_id, lang)
                        },
                        drop_percent: drop.drop_percent,
                        drop_rate: drop.drop_rate,
                        drop_num_lv1: drop.drop_num_lv1,
                        drop_num_lv100: drop.drop_num_lv100,
                        level_min: drop.level_min, // is this based on character level or enemy level?
                        level_max: drop.level_max,
                    }
                })
        })
}

// Source: Treasures (gathering points; chests that yield the raw item (non-RNG); chests that drop from enemies)
const overworldGatheringAndChestsFiles = import.meta.glob("/src/bp_client/japan/Content/Maps/**/*_PU.json", { import: "default", eager: true })
function getTreasureSources(item, lang, rewardTypes) {
    // Filtered the lot_rate down to only have the item that was requested
    const treasuresContainingItem = TREASURES.reduce((acc, treasure) => {
        const lot_rate = treasure.lot_rate.filter(obj => obj.reward_master_id === item.id && rewardTypes.includes(obj.reward_type))
        if (lot_rate.length > 0) acc.push({ ...treasure, lot_rate })
        return acc
    }, [])
    // console.log(treasuresContainingItem.length)

    // TODO: Include the Special Effect/passive Abilities which can depend on the source
    let abilities
    // if (reward) abilities = getAbilities(reward.perk_pick_id, lang)

    return treasuresContainingItem.flatMap(treasure => {
        return treasure.lot_rate.flatMap(lot_obj => {

            const treasureId = treasure.id

            // Chance for the chest to be the appropriate rarity for the drop
            const treasure_rarity_rate = treasure.rarity_rate.reduce((acc2, curr) => {
                if (curr.rarity >= lot_obj.rarity_min && curr.rarity <= lot_obj.rarity_max) acc2 += curr.rate
                return acc2
            }, 0)

            // Chance to drop correct rarity chest * chance to get that specific item in the chest
            const dropRate = (treasure_rarity_rate / 10000) * (lot_obj.rate / 10000)

            // Source: Chest (dropped by enemy)
            const enemyChests = ENEMYPARAMS.reduce((acc, enemy) => {
                enemy.drop_items.forEach(drop => {
                    if (drop.item_index === treasure.id) {
                        const { drop_rate, drop_percent, content_id } = drop
                        acc.push({
                            sourceType: "chest (enemy drop)",
                            text: {
                                name: getText("enemyparam_text", enemy.name_id, lang),
                            },
                            enemy_id: enemy.enemy_id,
                            treasureId,
                            treasure_rarity_rate,
                            content_id,
                            // Chance for enemy to drop the chest
                            drop_rate,
                            drop_percent,
                            dropRate,
                            abilities,
                        })
                    }
                })
                return acc
            }, []).flat()

            const allGatherableNodes = []

            // Source: Overworld Treasure
            const overworldChests = Object.entries(overworldGatheringAndChestsFiles)
                .reduce((acc, [filePath, mapData]) => {
                    mapData.forEach(point => {

                        const nodeId = point.Name
                        const mapId = filePath.split("/")[9].replace("_PU.json", "")

                        // Source: Chest (overworld)
                        if (point.Properties?.TreasureBoxId === treasure.id) {
                            // These chests usually contain 1 guaranteed item, and spawn at a 100% rate
                            acc.push({
                                sourceType: "chest (exploration)",
                                mapId,
                                treasureId,
                                nodeId,
                                dropRate,
                            })
                        }

                        // Source: Gathering
                        else if (point.Properties?.GatherPointId === treasure.id) {
                            // Gathered items are always a treasure with rarity 12 and rate 10000, so the drop rate can simply be directly extracted from the object without any further calculation
                            allGatherableNodes.push({
                                sourceType: "gathering",
                                mapId,
                                treasureId,
                                nodeId,
                                dropRate
                            })
                        }
                    })
                    return acc
                }, [])

            // Condense all gathering nodes to be map-based
            const gatheringSources = uniqBy(allGatherableNodes, obj => obj.mapId)
                .map(({ sourceType, mapId }) => {
                    const thisMapNodes = allGatherableNodes.filter(n => n.mapId === mapId).sort((a, b) => b.rate - a.rate)

                    const nodes = thisMapNodes.reduce((acc, curr) => {
                        if (!acc[curr.rate]) acc[curr.rate] = []
                        acc[curr.rate].push(curr.nodeId)
                        return acc
                    }, {})

                    return {
                        sourceType,
                        mapId,
                        nodes,
                    }
                })

            return [...enemyChests, ...overworldChests, ...gatheringSources]
        })
    })
}

// Source: Item Box
function getItemBoxSources(item, lang, rewardTypes) {
    return ITEM_BOX
        .filter(itemBox => itemBox.item_box_contents.some(boxContent => boxContent.item_type_id === item.id && rewardTypes.includes(boxContent.item_type)))
        .flatMap(itemBox => {
            return itemBox.item_box_contents
                .filter(boxContent => boxContent.item_type_id === item.id && rewardTypes.includes(boxContent.item_type))
                .map(boxContent => {
                    const name = getText("item_text", ITEMS.find(i => i.id === itemBox.id).name, lang)
                    return {
                        sourceType: "item box",
                        item_box_type_id: itemBox.item_box_type_id,
                        boxId: itemBox.id,
                        text: {
                            name
                        },
                        assets: {
                            icon: getAssets("item", itemBox.id).icon
                        },
                        // box 185081500 has "num_of_select_or_lottery": 0, presumably meaning you get everything
                        // box 185000301 is Watcher Box but has "num_of_select_or_lottery": 1, but you should get everything... probably because it's a set box? so going to ignore for now
                        // it probably depends on the "item_box_type_id"
                        // selectionNumber: itemBox.num_of_select_or_lottery,
                        max_num_of_acq: boxContent.max_num_of_acq,
                        min_num_of_acq: boxContent.min_num_of_acq,
                    }
                })
        })
}

// Source: NPC Shop
function getShopSources(item, lang, rewardTypes) {
    return MASTER_MERCHANDISE_ITEM_SET
        .filter(i => rewardTypes.includes(i.item_type) && i.item_id === item.id)
        .map(i => {
            // i.item_type is actually a reward type

            // token_id 0: luno
            // Sale has the currency, price, and dates
            const sale = MASTER_MERCHANDISE_COMMODITY.find(s => s.merchandise_item_id === i.merchandise_item_id)

            // Shop has dates, shop type, and "banner" (probably just the image used in-game like UI_EventShop_200100000)
            const shop = MASTER_MERCHANDISE_COUNTER.find(s => s.id === sale.merchandise_counter_id)

            let sourceType = "shop"
            switch (shop.type) {
                case 1:
                    sourceType = "exchange"
                    break
                case 2:
                    sourceType = "weapon shop"
                    break
                case 3:
                    sourceType = "potion shop"
                    break
                case 4:
                    sourceType = "class token shop"
                    break
                default:
                    sourceType = "shop"
            }

            // Shop and Sale (item) both have dates, which are presumably the same. However, I will use the Sale dates in case the sale for that specific item ends before the shop ends.
            return {
                sourceType,
                price: sale.amount,
                count: i.item_count,
                start_date: sale.start_date,
                end_date: sale.end_date,
                token: {
                    id: sale.token_id,
                    text: {
                        name: sale.token_id === 0 ? getText("Common", 4, lang) : getText("master_token_text", TOKEN.find(t => t.id === sale.token_id)?.name, lang)
                    },
                    assets: sale.token_id === 0 ? {
                        icon: "/UI/Icon/Currency/UI_Icon_Currency_01.png",
                        iconL: "/UI/Icon/Reward/UI_Icon_0.png"
                    } : getAssets("token", sale.token_id)
                }
                // shop,
                // sale
            }

        })
    // Remove null items, caused by token_id === 0
    // .filter(i => i)
}

// Source: Regnus Store
function getRegnusStoreSources(item, lang, rewardTypes) {
    return SHOP_ITEM_SET
        .filter(i => rewardTypes.includes(i.item_type) && i.item_id === item.id)
        .map(itemSet => {

            // Source: Season Points Store
            const seasonPassShops = MASTER_SEASON_PASS_SHOPS
                .filter(shop => shop.shop_item_id === itemSet.shop_item_id)
                .map(shop => {
                    const purchaseLimits = MASTER_SEASON_PASS_SHOP_PURCHASE_LIMITS.find(obj => obj.purchase_limit_id === shop.purchase_limit_id)
                    const { limit_count } = purchaseLimits.limit_count.find(obj => obj.count_type === purchaseLimits.count_type)

                    return {
                        sourceType: "season points store",
                        season: parseInt(shop.season_id.toString().substr(1, 2)) + 1,
                        start_date: shop.start_date,
                        end_date: shop.end_date,
                        points: purchaseLimits.points,
                        need_rank: purchaseLimits.need_rank,
                        limit_count
                        // text: {
                        //     seasonName: getText("master_season_text", MASTER_SEASON.find(s => s.id === seasonPass.season_id).season_name, lang)
                        // },
                    }
                })

            // Source: Rose Orb Store
            const roseOrbShops = CURRENCY_SHOP
                .filter(shop => shop.shop_item_id === itemSet.shop_item_id)
                .map(shop => {
                    // item_name is the name of the sale and does not necessarily correspond to the name of the actual goods

                    const purchaseLimits = CURRENCY_SHOP_PURCHASE_LIMIT.find(obj => obj.purchase_limit_id === shop.purchase_limit_id)
                    const { limit_count } = purchaseLimits.limit_count.find(obj => obj.count_type === purchaseLimits.count_type)

                    return {
                        sourceType: "rose orb store",
                        platform: shop.platform.map(p => p.platform),
                        can_use_coupon: shop.can_use_coupon,
                        mail_format_id: shop.mail_format_id, // whether the item can be forwarded or not "buy_realmoney_shop_nofw" vs "buy_realmoney_shop"
                        start_date: shop.start_date,
                        end_date: shop.end_date,
                        price: purchaseLimits.price,
                        limit_count
                    }
                })

            // Source: Rose Orb Purchase
            // shop_realmoney_item

            // Source: BPP Store
            const bppShops = COIN_SHOP
                .filter(shop => shop.shop_item_id === itemSet.shop_item_id)
                .map(shop => {
                    // item_name is the name of the sale and does not necessarily correspond to the name of the actual goods

                    const purchaseLimits = COIN_SHOP_PURCHASE_LIMIT.find(obj => obj.purchase_limit_id === shop.purchase_limit_id)
                    const { limit_count } = purchaseLimits.limit_count.find(obj => obj.count_type === purchaseLimits.count_type)

                    return {
                        sourceType: "bpp store",
                        platform: shop.platform.map(p => p.platform),
                        mail_format_id: shop.mail_format_id, // "real_goods_serial_code" for real merch (mousepad), otherwise "buy_coin_shop"
                        start_date: shop.start_date,
                        end_date: shop.end_date,
                        price: purchaseLimits.price,
                        limit_count
                    }
                })

            return [...seasonPassShops, ...roseOrbShops, ...bppShops]
        }).flat()
}

// Source: Gacha
// Matches against the official website's gasha.json which has no item ids, so we match by name. Name key and namespace vary per item so only the following items are supported: items, tokens, costumes, and emotes
const GACHA = await gacha()
function getGachaSources(item, lang, rewardTypes) {
    let itemJpName, sources = [];
    if (rewardTypes.includes(19)) itemJpName = getText("master_token_text", item.name, lang)
    else if (rewardTypes.includes(3)) itemJpName = getText("item_text", item.name, lang)
    else if (rewardTypes.includes(5)) itemJpName = getText("costume_text", item.name, lang)
    else if (rewardTypes.includes(9)) itemJpName = getText("master_emote_text", item.name, lang)

    GACHA.forEach(banner => {
        banner.gashaCostumeList.forEach(category => {
            ["itemCsv", "bonusCsv", "roseOrbBonusCsv", "stepupCsv"].forEach(key => {
                if (Array.isArray(category[key])) {
                    category[key].forEach(reward => {
                        const [itemName, amount] = reward.itemName?.split("x") || reward.col_3?.split("x") || ["", "1"]

                        if (itemName.includes(itemJpName)) {
                            sources.push({
                                sourceType: "gacha",
                                gachaName: banner.gashaName,
                                categoryName: category.costumeName,
                                url: banner.url,
                                itemName,
                                amount,
                                rate: reward.rate,
                                step: reward.col_1?.replace("STEP", "")
                            })
                        }
                    })
                }
            })
        })
    })

    return sources
}

export function getSources(item, lang, rewardTypes) {
    return [
        ...getCraftingSources(item, lang, rewardTypes),
        ...getRewardSources(item, lang, rewardTypes),
        ...getLotterySources(item, lang, rewardTypes),
        ...getEnemyDropSources(item, lang, rewardTypes),
        ...getTreasureSources(item, lang, rewardTypes),
        ...getItemBoxSources(item, lang, rewardTypes),
        ...getShopSources(item, lang, rewardTypes),
        ...getRegnusStoreSources(item, lang, rewardTypes),
        ...getGachaSources(item, lang, rewardTypes)
    ]
}