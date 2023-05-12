import en_US from "../global/texts/en_US.json";
import ja_JP from "../japan/texts/ja_JP.json";
import itemIcons from "../itemicons.json"

export function getText(ns, id) {
    const texts = {
        ja_JP,
        en_US
    }
    let result = {};
    Object.keys(texts).forEach(lang => {
        const namespaceObj = texts[lang].find(namespace => namespace.name === ns) || {}
        const textObj = namespaceObj.texts.find(obj => obj.id == id) || {}
        result[lang] = textObj.text || "-"
    })
    return result
}

export function getCategory(entryType, category) {

    if (entryType === "skill") {
        switch (category) {
            case 0: // LMB
            case 1: // RMB
                return {
                    ja_JP: "ベースアクション",
                    en_US: "Basic Attack"
                }
            case 2: // Tac skill attack
            case 3: // Tac skill attack
            case 4: // Tac skill attack
            case 5:  // Tac skill buff
                return {
                    ja_JP: "タクティカルスキル",
                    en_US: "Tactical Skill",
                }
            case 6:
                return {
                    ja_JP: "ULTスキル",
                    en_US: "Ultimate Attack",
                }
            case 7:
                return {
                    ja_JP: "回避",
                    en_US: "Dodge",
                }
            case 8:
                return {
                    ja_JP: "クラスアビリティ",
                    en_US: "Class Ability",
                }
            case 9:
                return {
                    ja_JP: "ベースアビリティ",
                    en_US: "Base Ability", // All classes
                }
            case 10:
                return {
                    ja_JP: "エリアル攻撃",
                    en_US: "Aerial Attack",
                }
            case 11:
                return {
                    ja_JP: "？？？",
                    en_US: "???",
                }
            case 12:
                return {
                    ja_JP: "踏み台ジャンプ",
                    en_US: "Springboard Jump",
                }
            case 13:
                return {
                    ja_JP: "受け身",
                    en_US: "受け身",
                }
        }
    }

    if (entryType === "map") {
        if (category.includes("dng") || category.includes("Dng")) {
            return {
                ja_JP: "ダンジョン",
                en_US: "Dungeon"
            }
        }
        if (category.includes("fld") || category.includes("Fld")) {
            return {
                ja_JP: "フィールド",
                en_US: "Field"
            }
        }
        if (category.includes("cty") || category.includes("Cty")) {
            return {
                ja_JP: "街",
                en_US: "City"
            }
        }
        if (category.includes("arn") || category.includes("Arn")) {
            return {
                ja_JP: "闘技場",
                en_US: "Arena"
            }
        }
        if (category.includes("twr") || category.includes("Twr")) {
            return {
                ja_JP: "塔",
                en_US: "Tower"
            }
        }
        if (category.includes("rai") || category.includes("Rai")) {
            return {
                ja_JP: "レイド",
                en_US: "Raid"
            }
        }
        // "pat" is still unknown
        return {
            ja_JP: "マップ",
            en_US: "Map"
        }
    }

    if (entryType === "weapon") {
        switch (category) {
            case 0:
                return {
                    ja_JP: "武器",
                    en_US: "Weapon"
                }
            case 1:
                return {
                    ja_JP: "武器スキン",
                    en_US: "Weapon Skin"
                }
        }
    }

    if (entryType === "imagine") {
        switch (category) {
            case 0:
                return {
                    ja_JP: "エンハンスイマジン",
                    en_US: "Augment Echo"
                }
            case 1:
                return {
                    ja_JP: "バトルイマジン",
                    en_US: "Combat Echo"
                }
        }
    }

    if (entryType === "enemy") {
        switch (category) {
            case 1:
                return {
                    ja_JP: "ボスエネミー",
                    en_US: "Boss Enemy"
                }
            default:
                return {
                    ja_JP: "エネミー",
                    en_US: "Enemy"
                }
        }
    }

    if (entryType === "item") {
        switch (category) {
            case 0:
                return {
                    ja_JP: "消費アイテム",
                    en_US: "Consumable"
                }
            case 1:
                return {
                    ja_JP: "売却専用アイテム", // Sell items (fish, luno gems)
                    en_US: "Sell-only item"
                }
            case 2:
                return {
                    ja_JP: "アビリティプラグ",
                    en_US: "Ability Plug"
                }
            case 3:
                return {
                    ja_JP: "汎用素材アイテム", // General purpose item (materials, etc)
                    en_US: "General Item"
                }
            case 4:
                return {
                    ja_JP: "イデア",
                    en_US: "Trace"
                }
            case 5:
                return {
                    ja_JP: "セットボックス",
                    en_US: "Set Box"
                }
            case 6:
                return {
                    ja_JP: "セレクトボックス",
                    en_US: "Selection Box"
                }
            case 7:
                return {
                    ja_JP: "ランダムボックス", // Random Box (random plug..)
                    en_US: "Random Box"
                }
        }
    }
}

export function getThumbnail(entryType, category, id, class_type) {

    if (entryType === "map") {
        return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        return `/UI/Icon/QuestJournal/UI_QuestJournal_Adventure_L.png`
    }

    if (entryType === "enemy") {
        return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        return `/UI/Icon/Unidentified/UI_Icon_Unidentified_0.png`
    }

    if (entryType === "liquidMemory") {
        switch (id) {
            case 12: // increased enemy drop rate
            case 22: // increased enemy exp
            case 10: // faster gathering speed
            case 20: // greater harvest when gathering
                return `/images/liquidMemory/orange.png`
            case 18: // increased alliance exp
                return `/images/liquidMemory/purple.png`
            case 17: // more GC from missions
                return `/images/liquidMemory/blue.png`
            case 21: // reduce luno cost when crafting weapons
            case 19: // increased profits when selling
            case 15: // cheaper prices from npc shops
                return `/images/liquidMemory/green.png`
        }
    }

    if (entryType === "stamp") {
        return `/UI/Icon/Class/UI_IconClass_Nodata.png`
    }

    if (entryType === "item") {
        return itemIcons[id]
        // switch (category) {
        //     case 0: return `/UI/Icon/Item/Consumption/UI_Icon_${id}.png`
        //     case 2: return `/UI/Icon/Item/Material/UI_Icon_Fusion_1.png`
        //     case 4: return `/UI/Icon/Item/EnemyMaterial/UI_Icon_Idea.png`
        //     case 6: return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Select.png`
        //     case 7: return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Random.png`
        //     case 1:
        //     // return `/UI/Icon/Item/Material/UI_Icon_${id}.png`
        //     case 3:
        //     // ``
        //     case 5:
        //     // return `/UI/Icon/Item/Consumption/UI_Icon_gashabox_RichSet_${id}.png`
        //     // return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Set.png`
        //     // return `/UI/Icon/Item/Consumption/UI_Icon_UI_Icon_gashabox_Gesture.png`
        //     // return `/UI/Icon/Item/Consumption/UI_Icon_UI_Icon_gashabox_Stamp.png`
        //     default: return `/UI/Icon/Common/UI_Icon_Empty.png`
        // }
    }

    if (entryType === "skill") {
        // Dummy Action
        if (id === 102) {
            return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        }
        switch (category) {
            case 0: // && skill.is_default_skill
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Main.png`
            case 1: // && skill.is_default_skill
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Sub.png`
            case 2:
            case 3:
            case 4:
            case 5:
                return `/UI/Icon/PlayerSkill/Class${class_type}/UI_PlayerSkill_${id}.png`
            case 6:
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Special.png`
            case 8:
                return `/UI/Icon/PlayerAbility/Class/Class${class_type}/UI_PlayerAbilityC_${id}.png`
            case 9:
                return `/UI/Icon/PlayerAbility/Base/Class${class_type}/UI_PlayerAbilityB_${id}.png`
            case 7: // Dodge
            case 10: // Aerial attack
            case 11: // ???
            case 12: // Springboard jump
            case 13: // Ukemi 
            default:
                return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        }
    }

    if (entryType === "costume") {
        // Pure F Cherry underwear
        if (id.includes("190000405")) {
            return `/UI/Icon/Common/UI_Icon_Empty.png`
        }
        return `/UI/Icon/Costume/${category}/${id}.png`
    }

    if (entryType === "token") {
        if (id === 149000100 || id === 120000900) {
            return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        }
        return `/UI/Icon/Token/UI_Icon_${id}.png`
    }
}