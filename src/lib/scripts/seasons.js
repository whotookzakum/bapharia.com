import MASTER_SEASON from "$bp_api/japan/master_season.json";
import MASTER_SEASON_PASS from "$bp_api/japan/master_season_pass.json";
import MASTER_SEASON_PASS_REWARD from "$bp_api/japan/master_season_pass_reward.json";
import { getText, getAssets, getSources, getCategory, getRewardItemBrief, getReward } from "./utils";

function processSeason(season, lang) {
    const name = getText("master_season_text", season.season_name, lang)
    const passes = getSeasonPasses(season, lang)
    const rewards = getSeasonRewards(season, lang)

    return {
        text: {
            name,
            category: "Season",
        },
        resolveType: "Season",
        passes,
        rewards,
        ...season,
    }
}

function getSeasonPasses(season, lang) {
    return MASTER_SEASON_PASS.reduce((acc, pass) => {
        if (pass.season_id === season.id) {
            const name = getText("master_season_pass_text", pass.plan_name, lang)
            const desc = getText("master_season_pass_text", pass.description, lang)
            const warning = getText("master_season_pass_text", pass.attention, lang)

            acc.push({
                ...pass,
                text: {
                    name,
                    desc,
                    warning
                }
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

export function getEntry(id, lang) {
    return processSeason(MASTER_SEASON.find(season => season.id == id), lang)
}

export const getSeasonSummaries = (lang) => MASTER_SEASON.map(season => {
    return {
        href: `/db/seasons/${season.id}`,
        name: getText("master_season_text", season.season_name, lang),
        jpName: getText("master_season_text", season.season_name, "ja_JP"),
        category: "Season",
    }
})

const seasons = (lang) => MASTER_SEASON.map(season => processSeason(season, lang))

export default seasons;