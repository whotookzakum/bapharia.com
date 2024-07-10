import markerIcons from "./bp_client/markerIcons.json"
import markerNames from "./bp_client/markerNames.json"
import markerCategories from "./bp_client/markerCategories.json"
import mapsDataManual from "./bp_client/maps.json"
import mapsData from "./bp_client/japan/Content/Blueprints/Manager/DT_ZoneDB.json"
import JP_LocationNames from "./bp_client/japan/Content/Text/LocationName.json"
import JP_ZoneNames from "./bp_client/JP_ZoneNames.json" // Manual file because I included some names from CBT
import EN_ZoneNames from "./bp_client/EN_ZoneNames.json"
import EN_LocationNames from "./bp_client/EN_LocationNames.json"
import itemsData from "./bp_api/japan/items.json"
import lotteriesData from "./bp_api/japan/master_reward_lottery_groups.json"
import dungeonRewardsData from "./bp_api/japan/dungeon_rewards.json";
import rewardsData from "./bp_api/japan/rewards.json"
import { getText } from "../utils";

// Client's ZoneShortName.json seems bugged, 3030100 comes up as Arena but it should be Gunnetower Ruins

// TODO notable markers (# of nappos, npcs, enemies, resources, quests, treasure chests)
// TODO dungeon supplies (supply.json)
// TODO dungeon rewards, dungeon stats (max players, revives) DT_map_dungeon.json
// TODO dungeon enemy statuses based on dungeon DT_EnemyBattleStatusBiasByContentIdDB
// TODO: dungeon_ranked_rewards has the bronze/silver/gold star rewards for TA/SA

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


// INTERACTIVE MAP FUNCTIONS ========================================================================================
const allMapFiles = import.meta.glob("../bp_client/japan/Content/Maps/**/**/sublevel/*.json")

export async function getMapWithMarkers(mapId) {
    const mapIdShort = mapId.toLowerCase().replace("cty00", "cty0") // from Cty001 to cty01 to match file names
    const mapBaseData = mapsDataManual.find(map => map.map_id === mapId)
    const markers = getMarkers(mapIdShort)

    return {
        ...mapBaseData,
        markers
    }
}

const getMarkers = async (mapId) => {
    const mapComponents = await getMapComponents(mapId)
    return mapComponents.map(point => {
        const id = point.Outer
        const name = getMarkerName(id)
        const iconUrl = markerIcons[name.ja_JP]
        const coords = [
            point.Properties.RelativeLocation.X,
            point.Properties.RelativeLocation.Y,
            point.Properties.RelativeLocation.Z,
        ]
        const category = getMarkerCategory(id)
        const description = getMarkerDescription(id)

        return {
            // ...point,
            id,
            category,
            name,
            iconUrl,
            coords,
            description
            // TreasureBoxId: point.Properties.TreasureBoxId, // not scene component
            // TreasureBoxTag: point.Properties.TreasureBoxTag // not scene component
        }
    })
}

// Returns all points (SceneComponent, SBWidgetComponent, etc) in the map data
const getMapComponents = async (mapId) => {
    const mapData = await resolveMapFiles(mapId)
    return mapData.filter(point =>
        (point.Type === "SceneComponent" || point.Type === "BrushComponent")
        && point.Properties?.hasOwnProperty("RelativeLocation")
        && !isExcludedPoint(point)
    )
}

// Resolves the data from the functions in map files
const resolveMapFiles = async (mapId) => {
    const mapFiles = await getMapFilesForMap(mapId)
    const mapData = await Promise.all(
        mapFiles.map(async (resolver) => {
            const data = await resolver()
            return data.default
        })
    )
    return mapData.flat()
}

// Returns all client files for a specific map id, i.e. "cty01"
const getMapFilesForMap = (mapId) => {
    return Object.entries(allMapFiles)
        .reduce((acc, [path, data]) => {
            if (path.includes(mapId)) acc.push(data)
            return acc
        }, [])
}


function getMarkerName(id) {
    let result = markerNames.DEFAULT
    Object.keys(markerNames).forEach(key => {
        if (id.includes(key)) result = markerNames[key]
    })
    return result;
}

function getMarkerCategory(id) {
    let result = "general";
    // "general": ["Warehouse", "Locker", "LiquidMemory", "RankingBoard", "DyersShop", "Esthe", "Guild", "ImagineShop", "Itemsshop", "Peddler", "Peddller", "ExchangeShop", "Receptionist", "TacticalAbility", "Weaponshop", "Fishing", "WarpPoint", "CraftMachine", "Murrie", "SynthesisShop", "FreeBuff", "Nappo", "TreasureBox", "CampFire", "TrainingArea", "RaidGate", "DungeonEntrance", "BeautySalon", "GeneralStore"]
    Object.entries(markerCategories).forEach(([categoryName, categories]) => {
        if (categories.some(item => id.includes(item))) result = categoryName
    })
    return result;
}

function getMarkerDescription(id) {
    if (id.includes("WarpPoint")) {
        return "" // get name from WarpPointName
    }
}

// Returns whether a point is excluded (points that are unused on the map or a duplicate that doesn't need to be marked)
const isExcludedPoint = (point) => {
    const id = point.Outer
    const exclusions = [
        id.includes("ChallengeBox"),
        id.includes("ArenaReception"),
        id.includes("SitTarget"),
        id.includes("ReplicatedDungeonWall"),
        id.includes("Spline"),
        id.includes("Utillity"),
        id.includes("TargetPoint"),
        id.includes("IP_"),
        id.includes("DungeonActivator"),
        id.includes("FieldTravel"),
        id.includes("WaterFlow"),
        id.includes("Temple"),
        point.Name.includes("FishingPointLocation"), // in some weird spot
        id.includes("TutorialHelp"),
        id.includes("Box_Collision"),
        id.includes("Bajamar_OP"),
        id.includes("MinimapCaptureVolume"),
        id.includes("Enter_Oasis"),
        id.includes("BP_ENV"),
        id.includes("TC_"),
        id.includes("BlockingVolume"),
        id.includes("SBAutoCreated"),
        // Storages
        id.includes("LockerTarget") && !/LockerTarget\d+_1\b/.test(id),
        // Memory stand at Asterleeds Beach
        id.includes("LiquidMemory_02"),
        // Leaderboards
        id.includes("RankingBoard") && !/RankingBoard\d+-1(?=_\w+$)/.test(id),
        // Guild NPC
        id.includes("Guild_02"),
        // Peddlers
        id.includes("Peddler") && !/Peddler_\d+_[a-zA-Z]\w*_/.test(id),
        id.includes("Peddller") && !/Peddller_\d+_[a-zA-Z]\w*_/.test(id),
        // Crafting Machine
        id.includes("CraftMachine") && id !== "BP_TestCraftMachine2",
        // Fishing Spots
        id.includes("Fishing") && id !== "BP_Fishing16",
        // Quests that aren't the initial starting quest
        (id.includes("CQ") || id.includes("MQ") || id.includes("SQ") || id.includes("EQ")) && !id.includes("start"),
        // Murrie?
        id.includes("EST101_020_020") || id.includes("Npc_AdventurerRank_RankUpBattle_2"),
        // Inn keeper NPC
        id.includes("Npc_Coin_Owner_8"),
        // Chef NPC spawn points
        id.includes("FreeBuffNpcSpawn"),
        // NQ_1002_1_002 has an extra marker
        id.includes("_Gimmick"),
        // ???
        id.includes("Volume"),
        id.includes("SpawnWaveArea"),
        id.includes("SenseChange"),
        id.includes("SpawnAreaDungeon"),
        id.includes("ProcessEnemySpawn"),
        id.includes("Montetnord_OP"),
        id.includes("SBNpcSpawnPoint"),
        id.includes("BattleAreaEnemyCount"),
    ]

    return exclusions.some(val => val === true)
}