import ACHIEVEMENTS from "$bp_api/japan/achievements.json";
import REWARDS from "$bp_api/japan/rewards.json";
import { getText, getAssets, getSources, getCategory, getRewardItemBrief } from "./utils";

// TODO: Get the achievement categories from in game
// large_category = the big category (collapsable)
// middle_category = the subcategory (gray box)
function processAchievement(achievement, lang) {
    const name = getText("achievements_text", achievement.name, lang)
    const desc = getText("achievements_text", achievement.desc, lang)
    const category = getCategory("Achievement", "default")
    const assets = getAssets("achievement", achievement.rank)
    const achievement_rewards = achievement.achievement_rewards.map(({ reward_id }) => {
        const { reward_type, item_id, amount } = REWARDS.find(r => r.id === reward_id)
        return {
            reward_id,
            reward_type,
            item_id,
            amount,
            ...getRewardItemBrief(reward_type, item_id, lang)
        }
    })
    if (achievement.title_flag) assets.titleIcon = getAssets("reward", 14).icon
    const sources = getSources(achievement, lang, [14])

    return {
        text: {
            name,
            desc,
            category
        },
        assets,
        sources,
        resolveType: "Achievement",
        ...achievement,
        achievement_rewards
    }
}

export function getEntry(id, lang) {
    return processAchievement(ACHIEVEMENTS.find(ach => ach.id == id), lang)
}

export const getSummaries = (lang) => ACHIEVEMENTS.map(achievement => {
    const { icon, iconL } = getAssets("achievement", achievement.rank)
    return {
        href: `/db/achievements/${achievement.id}`,
        name: getText("achievements_text", achievement.desc, lang),
        jpName: getText("achievements_text", achievement.desc, "ja_JP"),
        icon,
        iconL,
        category: "Achievement"
    }
})

const achievements = (lang) => ACHIEVEMENTS.map(ach => processAchievement(ach, lang))

export default achievements;