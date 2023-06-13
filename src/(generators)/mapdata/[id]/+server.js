import markerIcons from "./markerIcons.json"
import markerNames from "./markerNames.json"
import markerCategories from "./markerCategories.json"
import mapMetadata from "./mapMetadata.json"
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
    const allMapFiles = import.meta.glob(`../../../bp_client/japan/Content/Maps/**/**/sublevel/*.json`)
    const mapFiles = getMapFiles(allMapFiles, params.id)
    const mapData = await getMapData(mapFiles)
    const mapComponents = getMapComponents(mapData)
    const markers = getMarkers(mapComponents)
    const metadata = mapMetadata[params.id]
    return json({
        ...metadata,
        markers
    })
}

// Returns relevant map files based on the url, i.e. "cty01"
const getMapFiles = (allFiles, id) => {
    return Object.entries(allFiles)
        .reduce((acc, [path, data]) => {
            if (path.includes(id)) acc.push(data)
            return acc
        }, [])
}

// Returns the resolved data from map files
const getMapData = async (mapFiles) => {
    const mapData = await Promise.all(
        mapFiles.map(async (resolver) => {
            const data = await resolver()
            return data.default
        })
    )
    return mapData.flat()
}

// Returns whether a point is excluded for being unused or a duplicated that doesn't need to be marked
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
        id.includes("FreeBuffNpcSpawn")
    ]

    return exclusions.some(val => val === true)
}

// Returns all points in the map data
const getMapComponents = (mapData) => {
    return mapData.filter(point =>
        (point.Type === "SceneComponent" || point.Type === "BrushComponent")
        && point.Properties?.hasOwnProperty("RelativeLocation")
        && !isExcludedPoint(point)
    )
}

const getMarkers = (mapComponents) => {
    return mapComponents.map(point => {
        const id = point.Outer
        const name = getName(id)
        const iconUrl = markerIcons[name.ja_JP]
        const coords = [
            point.Properties.RelativeLocation.X,
            point.Properties.RelativeLocation.Y,
            point.Properties.RelativeLocation.Z,
        ]
        const category = getCategory(id)
        const description = getDescription(id)

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

function getName(id) {
    let result = markerNames.DEFAULT
    Object.keys(markerNames).forEach(key => {
        if (id.includes(key)) result = markerNames[key]
    })
    return result;
}

function getCategory(id) {
    let result = "general";
    // "general": ["Warehouse", "Locker", "LiquidMemory", "RankingBoard", "DyersShop", "Esthe", "Guild", "ImagineShop", "Itemsshop", "Peddler", "Peddller", "ExchangeShop", "Receptionist", "TacticalAbility", "Weaponshop", "Fishing", "WarpPoint", "CraftMachine", "Murrie", "SynthesisShop", "FreeBuff", "Nappo", "TreasureBox", "CampFire", "TrainingArea", "RaidGate", "DungeonEntrance", "BeautySalon", "GeneralStore"]
    Object.entries(markerCategories).forEach(([categoryName, categories]) => {
        if (categories.some(item => id.includes(item))) result = categoryName
    })
    return result;
}

function getDescription(id) {
    if (id.includes("WarpPoint")) {
        return "" // get name from WarpPointName
    }
}