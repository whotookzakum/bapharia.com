// import mapsData from "../../../(interactive)/map/maps.json";

import mapsData from "$bp_client/japan/Content/Blueprints/Manager/DT_ZoneDB.json"
import mapNamesData from "$bp_client/japan/Content/Text/ZoneName.json"
import EN_ZoneNames from "$bp_client/EN_ZoneNames.json"
import JP_ZoneNames from "$bp_client/JP_ZoneNames.json"
import itemsData from "$bp_server/japan/items.json"
import lotteryData from "$bp_server/japan/master_reward_lottery_groups.json"
import dungeonRewardsData from "$bp_server/japan/dungeon_rewards.json";
import rewardsData from "$bp_server/japan/rewards.json"
import { getText } from "./utils";

// Client's ZoneShortName.json seems bugged, 3030100 comes up as Arena but it should be Gunnetower Ruins

// TO DO:
// TODO notable markers (# of nappos, npcs, enemies, resources, quests, treasure chests)
// TODO dungeon supplies (supply.json)

const maps = Object.values(mapsData[0].Rows).map(mapData => {
    const nameId = mapData.NameTextId
    const id = mapData.Id.replace("_Top", "").replace("_TOP", "")
    const subcategoryId = id.slice(0, 3)
    const subcategoryName = getSubcategory(subcategoryId)
    const name = {
        ja_JP: mapNamesData[0].Properties.TextTable.find(entry => entry.Id.IdNumber === nameId)?.Text || JP_ZoneNames[nameId] || "-",
        en_US: EN_ZoneNames[nameId] || "-"
    }

    return {
        nameId,
        id,
        name,
        thumb: `/UI/Icon/Class/UI_IconClass_Nodata.png`,
        subcategoryId,
        subcategoryName,
        entryTypes: ["GameMap"]
    }
})

export default maps;

export function getMapData(id) {
    return maps.find(map => map.id === id)
}

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