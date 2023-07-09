import dungeonRewardsData from "$bp_server/japan/dungeon_rewards.json";
import rewardsData from "$bp_server/japan/rewards.json"
import maps from "../../../(interactive)/map/maps.json"
import itemsData from "$bp_server/japan/items.json"
import lotteryData from "$bp_server/japan/master_reward_lottery_groups.json"
import { getText } from "./utils";

const dungeons = maps.reduce((acc, map) => {
    if (!map.map_id.includes("dng") && !map.map_id.includes("pat")) return acc

    const rewards = getRewards(map.map_id)

    acc.push({
        ...map,
        rewards
    })
    return acc
}, [])

function getRewards(dungId) {
    const dungeonRewards = 
        dungeonRewardsData
        .filter(reward => reward.dungeon_reward_search_name === dungId)
        .map(reward => {
            const details = rewardsData.find(metadata => metadata.id === reward.reward_id)

            const itemData = itemsData.find(item => item.id === details.item_id)

            let name = {
                en_US: "",
                ja_JP: ""
            }

            if (itemData) {
                name = getText("item_text", itemData.name)
            }

            const lotteries = lotteryData.filter(lotto => lotto.id === details.item_id)

            if (lotteries) {
                const lotteryWithRewards = lotteries[0]?.rewards.map(rewardItem => {
                    const rewardItemData = itemsData.find(item => item.id === rewardItem.item_id)

                    return {
                        ...rewardItem,
                        name: getText("item_text", rewardItemData.name)
                    }
                })

                return {
                    ...reward,
                    details,
                    name,
                    lotteryWithRewards
                }
            }

            return {
                ...reward,
                details,
                name,
                lotteries
            }
        })
    return dungeonRewards
}

export default dungeons