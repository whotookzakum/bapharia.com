import iconUrls from "./iconUrls.json"
import { json } from '@sveltejs/kit'

function getName(id) {
    if (id.includes("SynthesisShop")) {
        return {
            ja_JP: "武器改造師",
            en_US: "Weapon Reconstructor"
        }
    }
    if (id.includes("LockerTarget") || id.includes("Warehouse")) {
        return {
            ja_JP: "倉庫",
            en_US: "Storage"
        }
    }
    if (id.includes("LiquidMemory")) {
        return {
            ja_JP: "メモリスタンド",
            en_US: "Memory Stand"
        }
    }
    if (id.includes("WarpPoint")) {
        return {
            ja_JP: "空間転送ポータル",
            en_US: "Warp Gate"
        }
    }
    if (id.includes("RankingBoard")) {
        return {
            ja_JP: "ランキングボード",
            en_US: "Ranking Board"
        }
    }
    if (id.includes("DyersShop")) {
        return {
            ja_JP: "カラーリングショップ",
            en_US: "Dyeworker"
        }
    }
    if (id.includes("Esthe")) {
        return {
            ja_JP: "エステサロン",
            en_US: "Beauty Salon"
        }
    }
    if (id.includes("Guild")) {
        return {
            ja_JP: "チーム",
            en_US: "Guild"
        }
    }
    if (id.includes("ImagineShop")) {
        return {
            ja_JP: "イマジン研究所",
            en_US: "Echoforge"
        }
    }
    if (id.includes("Itemsshop")) {
        return {
            ja_JP: "道具屋",
            en_US: "Item Shop"
        }
    }
    if (id.includes("Peddler") || id.includes("ExchangeShop")) {
        return {
            ja_JP: "Peddler", // GC交換所
            en_US: "Peddler" // GC Shop
        }
    }
    if (id.includes("Receptionist")) {
        return {
            ja_JP: "Quest Receptionist",
            en_US: "Quest Receptionist"
        }
    }
    if (id.includes("TacticalAbility")) {
        return {
            ja_JP: "クラスマスター",
            en_US: "Class Master"
        }
    }
    if (id.includes("Weaponshop")) {
        return {
            ja_JP: "武器屋",
            en_US: "Weapon Shop"
        }
    }
    if (id.includes("ChallengeBox")) {
        return {
            ja_JP: "CHALLENGE BOX",
            en_US: "CHALLENGE BOX"
        }
    }
    if (id.includes("ArenaReception")) {
        return {
            ja_JP: "ARENA RECEPTION",
            en_US: "ARENA RECEPTION"
        }
    }
    if (id.includes("CraftMachine")) {
        return {
            ja_JP: "転球練成儀",
            en_US: "Spheromutator"
        }
    }
    if (id.includes("Fishing")) {
        return {
            ja_JP: "釣り場",
            en_US: "Fishing Spot"
        }
    }
    if (id.includes("CQ")) {
        return {
            ja_JP: "クラスクエスト",
            en_US: "Class Quest"
        }
    }
    if (id.includes("MQ")) {
        return {
            ja_JP: "メインクエスト",
            en_US: "Main Quest"
        }
    }
    if (id.includes("Npc_Murrie")) {
        return {
            ja_JP: "ミューリィ",
            en_US: "Millie"
        }
    }
    if (id.includes("SQ")) {
        return {
            ja_JP: "サブクエスト",
            en_US: "Sub Quest"
        }
    }

    // Don't know for sure
    if (id.includes("EQ")) {
        return {
            ja_JP: "eクエスト",
            en_US: "E Quest"
        }
    }

    if (id.includes("TQ")) {
        return {
            ja_JP: "tクエスト",
            en_US: "T Quest"
        }
    }

    // Past cty01

    if (id.includes("Mineral")) {
        if (id.includes("Fix")) {
            return {
                ja_JP: "鉱石（固定）",
                en_US: "Mineral (Fixed)"
            }
        }
        return {
            ja_JP: "鉱石",
            en_US: "Mineral"
        }
    }

    if (id.includes("Plant")) {
        if (id.includes("Fix")) {
            return {
                ja_JP: "植物（固定）",
                en_US: "Plant (Fixed)"
            }
        }
        return {
            ja_JP: "植物",
            en_US: "Plant"
        }
    }

    if (id.includes("Aquatic")) {
        if (id.includes("Fix")) {
            return {
                ja_JP: "水棲（固定）",
                en_US: "Aquatic (Fixed)"
            }
        }
        return {
            ja_JP: "水棲",
            en_US: "Aquatic"
        }
    }

    if (id.includes("FreeBuff")) {
        return {
            ja_JP: "Chef",
            en_US: "Chef"
        }
    }

    if (id.includes("Nappo")) {
        return {
            ja_JP: "ナッポ",
            en_US: "Nappo"
        }
    }


    return {
        ja_JP: "-",
        en_US: "-"
    }
}

function getCategory(id) {
    if (
        id.includes("Warehouse") ||
        id.includes("Locker") ||
        id.includes("LiquidMemory") ||
        id.includes("RankingBoard") ||
        id.includes("DyersShop") ||
        id.includes("Esthe") ||
        id.includes("Guild") ||
        id.includes("ImagineShop") ||
        id.includes("Itemsshop") ||
        id.includes("Peddler") ||
        id.includes("ExchangeShop") ||
        id.includes("Receptionist") ||
        id.includes("TacticalAbility") ||
        id.includes("Weaponshop") ||
        id.includes("Fishing") ||
        id.includes("WarpPoint") ||
        id.includes("CraftMachine") || 
        id.includes("Murrie") ||
        id.includes("SynthesisShop") ||
        id.includes("FreeBuff") ||
        id.includes("Nappo")
    ) {
        return "general"
    }
    else if (
        id.includes("MQ") ||
        id.includes("SQ") ||
        id.includes("EQ") ||
        id.includes("TQ") ||
        id.includes("CQ")
    ) {
        return "quest"
    }
    else if (id.includes("Mineral")) {
        return "mineral"
    }
    else if (id.includes("Plant")) {
        return "plant"
    }
    else if (id.includes("Aquatic")) {
        return "aquatic"
    }
}

export const GET = async () => {
    const allDataFiles = import.meta.glob(`../../graphql/bp_client/japan/maps/fld001t/*.json`)
    const iterableDataFiles = Object.values(allDataFiles)

    const allData = await Promise.all(
        iterableDataFiles.map(async (resolver) => {
            const data = await resolver()
            return data.default
        })
    )

    const allSceneComponents =
        allData
            .flat()
            .filter(point => point.Type === "SceneComponent" && point.Properties?.hasOwnProperty("RelativeLocation"))

    const allMarkers = allSceneComponents.map(point => {
        const id = point.Outer

        // Exclude unused points
        const unused = [
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
            point.Name.includes("FishingPointLocation") // in some weird spot
        ]

        // Duplicates that don't need to be marked
        const duplicates = [
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

        const exclusions = unused.concat(duplicates)
        if (exclusions.some(val => val === true)) return

        const name = getName(id)
        const iconUrl = iconUrls[name.ja_JP]
        const coords = [
            point.Properties.RelativeLocation.X,
            point.Properties.RelativeLocation.Y,
            point.Properties.RelativeLocation.Z,
        ]
        const category = getCategory(id)

        return {
            // ...point,
            id,
            category,
            name,
            iconUrl,
            coords,
            // TreasureBoxId: point.Properties.TreasureBoxId, // not scene component
            // TreasureBoxTag: point.Properties.TreasureBoxTag // not scene component
        }
    }).filter(point => point) // use .reduce instead?

    return json(allMarkers)
}