// import mapsData from "../../../(interactive)/map/maps.json";

import mapsData from "$bp_client/japan/Content/Blueprints/Manager/DT_ZoneDB.json"
import JP_LocationNames from "$bp_client/japan/Content/Text/LocationName.json"
import JP_ZoneNames from "$bp_client/JP_ZoneNames.json" // Manual file because I included some names from CBT
import EN_ZoneNames from "$bp_client/EN_ZoneNames.json"
import EN_LocationNames from "$bp_client/EN_LocationNames.json"
import itemsData from "$bp_server/japan/items.json"
import lotteriesData from "$bp_server/japan/master_reward_lottery_groups.json"
import dungeonRewardsData from "$bp_server/japan/dungeon_rewards.json";
import rewardsData from "$bp_server/japan/rewards.json"
import { getText } from "./utils";

// Client's ZoneShortName.json seems bugged, 3030100 comes up as Arena but it should be Gunnetower Ruins

// TODO notable markers (# of nappos, npcs, enemies, resources, quests, treasure chests)
// TODO dungeon supplies (supply.json)
// TODO dungeon rewards, dungeon stats (max players, revives) DT_map_dungeon.json
// TODO dungeon enemy statuses based on dungeon DT_EnemyBattleStatusBiasByContentIdDB

// Use key instead of mapData.Id because some keys don't match their Ids, like pub0801 !== pat0801
// Can be tested with if (id !== mapData.Id.replace("_Top", "").replace("_TOP", "")) console.log("id", id)
const maps = Object.entries(mapsData[0].Rows).map(([id, mapData]) => {
    const nameId = mapData.NameTextId
    const subcategoryId = id.slice(0, 3)
    const subcategoryName = getSubcategory(subcategoryId)
    const dungeonRewards = getDungeonRewards(id)

    // LocationName uses ids like "cty01", ZoneName uses ids like "100100"
    const name = {
        ja_JP: JP_LocationNames[0].Properties.TextTable.find(entry => entry.Id.IdString === id)?.Text || JP_ZoneNames[nameId] || "-",
        en_US: EN_LocationNames[id] || EN_ZoneNames[nameId] || "-"
    }

    return {
        nameId,
        id,
        name,
        thumb: `/UI/Icon/Class/UI_IconClass_Nodata.png`,
        subcategoryId,
        subcategoryName,
        dungeonRewards,
        entryTypes: ["GameMap"]
    }
})

export default maps;
// used in enemies
export function getMapData(id) {
    return maps.find(map => map.id === id)
}
// used in weapons
export function getMapName(id) {
    const mapData = getMapData(id)
    if (mapData) return mapData.name
    return { ja_JP: "-", en_US: "-" }
}

function getSubcategory(prefix) {
    switch (prefix) {
        case "pat":
        case "dng":
            return {
                ja_JP: "ダンジョン", // 追加調査, 上級調査?
                en_US: "Dungeon"
            }
        case "fld":
            return {
                ja_JP: "フィールド",
                en_US: "Field"
            }
        case "cty":
            return {
                ja_JP: "街",
                en_US: "City"
            }
        case "arn":
            return {
                ja_JP: "闘技場",
                en_US: "Arena"
            }
        case "twr":
            return {
                ja_JP: "塔",
                en_US: "Tower"
            }
        case "rai":
            return {
                ja_JP: "レイド",
                en_US: "Raid"
            }
        case "pub":
            return {
                ja_JP: "自由探索",
                en_US: "Free Exploration"
            }
        case "sce":
            return {
                ja_JP: "セナリオミッション", // 調査?
                en_US: "Story Dungeon"
            }
        case "ins":
            return {
                ja_JP: "インスタンスダンジョン",
                en_US: "Instance Dungeon"
            }
        case "tad":
            return {
                ja_JP: "タイムアタックダンジョン",
                en_US: "Time Attack Dungeon"
            }
        case "sad":
            return {
                ja_JP: "スコアアタックダンジョン",
                en_US: "Score Attack Dungeon"
            }
        // pdg, min, testmap unknown
        default:
            return {
                ja_JP: "マップ",
                en_US: "Map"
            }
    }
}

function getDungeonRewards(mapId) {
    const dungeonRewards = dungeonRewardsData.filter(reward => reward.dungeon_reward_search_name === mapId)

    if (dungeonRewards.length < 1) return

    return dungeonRewards.map(dungeonReward => {
        const rewardDetails = getReward(dungeonReward.reward_id)
        return {
            ...dungeonReward,
            rewardDetails
        }
    })
}

function getReward(id) {
    const rewardData = rewardsData.find(reward => reward.id === id)
    
    if (rewardData.reward_type === 33) {
        rewardData.lotteryDetails = getLottery(rewardData.item_id)
    }
    else {
        rewardData.name = getItemNameById(rewardData.item_id)
    }

    return {
        ...rewardData
    }
}

// Only finds first instance
function getLottery(id) {
    const lotteryData = lotteriesData.find(lotto => lotto.id === id)

    const possibleItems = lotteryData.rewards.map(reward => {
        return {
            ...reward,
            name: getItemNameById(reward.item_id)
        }
    })

    return {
        ...lotteryData,
        rewards: possibleItems
    }
}

function getItemNameById(id) {
    const item = itemsData.find(item => item.id === id)
    return getText("item_text", item?.name)
}