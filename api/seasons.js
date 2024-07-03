import MASTER_SEASON from "$bp_api/japan/master_season.json";
import MASTER_SEASON_PASS from "$bp_api/japan/master_season_pass.json";
import MASTER_SEASON_PASS_SHOPS from "$bp_api/japan/master_season_pass_shops.json";
import MASTER_SEASON_PASS_SHOP_PURCHASE_LIMITS from "$bp_api/japan/master_season_pass_shop_purchase_limits.json";
import SHOP_ITEM_SET from "$bp_api/japan/shop_item_set.json";
import MASTER_SEASON_PASS_REWARD from "$bp_api/japan/master_season_pass_reward.json";
import MASTER_QUEST_DAILY from "$bp_api/japan/master_quest_daily.json";
import MASTER_QUEST_WEEKLY from "$bp_api/japan/master_quest_weekly.json";
import MASTER_QUEST_SEASON from "$bp_api/japan/master_quest_season.json";
import { getText, getAssets, getSources, getCategory, getRewardItemBrief, getReward } from "./utils";
import { getEntry as getItemEntry, getItemSummaries } from "./items";

// TODO: implement season points calculators

function processSeason(season, lang) {
    const name = getText("master_season_text", season.season_name, lang)
    const passes = getSeasonPasses(season, lang)
    // const rewards = getSeasonRewards(season, lang)
    const shop = getSeasonStore(season, lang)

    return {
        text: {
            name,
            category: "Season",
        },
        resolveType: "Season",
        passes,
        // rewards,
        shop,
        ...season,
    }
}

function getSeasonPasses(season, lang) {
    return MASTER_SEASON_PASS.reduce((acc, pass) => {
        if (pass.season_id === season.id) {
            const name = getText("master_season_pass_text", pass.plan_name, lang)
            const desc = getText("master_season_pass_text", pass.description, lang)
            const warning = getText("master_season_pass_text", pass.attention, lang)

            const daily_quests = MASTER_QUEST_DAILY
                .filter(q => (q.season_id === season.id) && (pass.type > 0 || pass.type === q.season_pass_type))
                .map(quest => {
                    return {
                        text: {
                            name: getText("master_quest_auto_order_daily_text", quest.quest_name, lang)
                        },
                        ...quest
                    }
                })
            const weekly_quests = MASTER_QUEST_WEEKLY
                .filter(q => (q.season_id === season.id) && (pass.type > 0 || pass.type === q.season_pass_type))
                .map(quest => {
                    return {
                        text: {
                            name: getText("master_quest_auto_order_weekly_text", quest.quest_name, lang)
                        },
                        ...quest
                    }
                })
            const season_quests = MASTER_QUEST_SEASON
                .filter(q => (q.season_id === season.id) && (pass.type > 0 || pass.type === q.season_pass_type))
                .map(quest => {
                    return {
                        text: {
                            name: getText("master_quest_auto_order_season_text", quest.quest_name, lang)
                        },
                        ...quest
                    }
                })

            acc.push({
                ...pass,
                text: {
                    name,
                    desc,
                    warning
                },
                daily_quests,
                weekly_quests,
                season_quests,
            })
        }
        return acc
    }, [])
}

function getSeasonRewards(season, lang) {
    return MASTER_SEASON_PASS_REWARD.reduce((acc, passReward) => {
        if (passReward.season_id === season.id) {
            const reward = getReward(passReward.id)
            const details = getRewardItemBrief(reward.reward_type, reward.item_id, lang)

            acc.push({
                passType: passReward.type,
                rank: passReward.rank,
                amount: reward.amount,
                rew_id: passReward.id,
                ...details
            })
        }
        return acc
    }, [])
}

function getSeasonStore(season, lang) {
    return MASTER_SEASON_PASS_SHOPS.reduce((acc, shop) => {
        if (shop.season_id === season.id) {
            const shopItem = SHOP_ITEM_SET.find(obj => obj.shop_item_id === shop.shop_item_id)
            const purchaseLimits = MASTER_SEASON_PASS_SHOP_PURCHASE_LIMITS.find(obj => obj.purchase_limit_id === shop.purchase_limit_id)
            // TODO: add limit_count array (when season ends, some items go on sale at a higher stock for 2 extra days, like aromas)

            acc.push({
                ...getRewardItemBrief(shopItem.item_type, shopItem.item_id, lang),
                need_rank: purchaseLimits.need_rank,
                points: purchaseLimits.points,
                amount: shopItem.item_count
            })
        }
        return acc
    }, [])
}

export function getEntry(id, lang) {
    return processSeason(MASTER_SEASON.find(season => season.id == id), lang)
}

export const getSummaries = (lang) => MASTER_SEASON.map(season => {
    return {
        href: `/db/seasons/${season.id}`,
        name: getText("master_season_text", season.season_name, lang),
        jpName: getText("master_season_text", season.season_name, "ja_JP"),
        category: "Season",
    }
})

const seasons = (lang) => MASTER_SEASON.map(season => processSeason(season, lang))

export default seasons;