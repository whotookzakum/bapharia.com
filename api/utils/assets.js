import DT_StampDataDB from "../bp_client/japan/Content/Blueprints/Manager/DT_StampDataDB.json"
import DT_StampCategoryDataDB from "../bp_client/japan/Content/Blueprints/Manager/DT_StampCategoryDataDB.json"
import DT_EmotionDB from "../bp_client/japan/Content/Blueprints/Manager/DT_EmotionDB.json"
import DT_WeaponAssetDB_Player from "../bp_client/japan/Content/Blueprints/Weapon/Player/DataTable/DT_WeaponAssetDB_Player.json"
import BufIconDataTable from "../bp_client/japan/Content/Blueprints/UI/FocusTarget/SubWIdget/BufIconDataTable.json"
import IMAGINE from "../bp_api/japan/imagine.json";

// TODO: emote icons are in DT_EmotionDB
// TODO: move imagine equipSlot image finding logic into here
const ASSETS_URL = ""
const icons = {}

console.log("Preparing icon paths...")
const allIconsFiles = import.meta.glob("../bp_client/japan/Content/Blueprints/UI/Icon/*.json", { import: "default", eager: true })
Object.entries(allIconsFiles)
    .forEach(async ([key, value]) => {
        const ns = key.split("/").pop().replace("DB.json", "").replace("Icon", "").replace("DT_", "").toLowerCase()
        const data = value
        icons[ns] =
            Object.entries(data[0].Rows)
                .reduce((acc, [rowId, rowData]) => {
                    acc[rowId] = {}
                    const assetPaths = Object.values(rowData)
                        .map(obj => ASSETS_URL + obj.AssetPathName?.replace("/Game", "").split(".")[0] + ".png")

                    acc[rowId].icon = assetPaths.find(path => path.includes("/UI_Icon"))
                    acc[rowId].iconL = assetPaths.find(path => path.includes("L/") || path.includes("/UI/Icon/Adventureboard"))

                    return acc
                }, {})
    })

icons.stamp = {}
Object.values(DT_StampDataDB[0].Rows)
    .forEach(obj => {
        icons.stamp[obj.Id] = {
            icon: ASSETS_URL + obj.IconTexture.AssetPathName?.replace("/Game", "").split(".")[0] + ".png",
            iconL: ASSETS_URL + obj.Texture.AssetPathName?.replace("/Game", "").split(".")[0] + ".png",
        }
    })

icons.stampcategory = {}
Object.values(DT_StampCategoryDataDB[0].Rows)
    .forEach(obj => {
        icons.stampcategory[obj.CategoryId] = {
            icon: ASSETS_URL + obj.IconTexture.AssetPathName?.replace("/Game", "").split(".")[0] + ".png",
        }
    })

icons.achievement = {
    "0": {
        icon: ASSETS_URL + "/UI/Icon/Achievement/UI_AchievementIcon_5.png"
    },
    "1": {
        icon: ASSETS_URL + "/UI/Icon/Achievement/UI_AchievementIcon_4.png"
    },
    "2": {
        icon: ASSETS_URL + "/UI/Icon/Achievement/UI_AchievementIcon_3.png"
    },
    "3": {
        icon: ASSETS_URL + "/UI/Icon/Achievement/UI_AchievementIcon_2.png"
    },
    "4": {
        icon: ASSETS_URL + "/UI/Icon/Achievement/UI_AchievementIcon_1.png"
    }
}

icons.emote = {}
Object.values(DT_EmotionDB[0].Rows)
    .forEach(obj => {
        icons.emote[obj.Id] = {
            icon: ASSETS_URL + obj.IconTexture?.ObjectPath?.replace("BLUEPROTOCOL/Content", "").split(".")[0] + ".png"
        }
    })

// Buffs can be mapped by either their id "RecoverAttackerWhenRecieveDamage" or icon type "ESBStatusAilmentIconType::Drained"
icons.buff = {}
Object.entries(BufIconDataTable[0].Rows)
    .forEach(([id, obj]) => {
        let iconType, icon, iconL;
        Object.entries(obj).forEach(([key, value]) => {
            if (key.includes("IconType_")) iconType = value.split("::").pop() // "Drained", "Restraint" etc.
            if (key.includes("Texture_")) icon = value?.ObjectPath.replace("BLUEPROTOCOL/Content", "").split(".")[0] + ".png"
            if (key.includes("TextureL_")) iconL = value?.ObjectPath.replace("BLUEPROTOCOL/Content", "").split(".")[0] + ".png"
        })
        icons.buff[id] = { icon, iconL }
        if (iconType) {
            icons.buff[iconType] = { icon, iconL }
        }
    })

// 3D models
const models = {}
models.weapon = {}
Object.entries(DT_WeaponAssetDB_Player[0].Rows)
    .forEach(([key, value]) => {
        // WeaponAsset2 is never used as of 1.05.102
        // WeaponAsset1.WeaponBase links to a metadata JSON
        // WeaponAsset1.ColorList links to a metata JSON containing colors for the item
        const { WeaponAsset1 } = value
        models.weapon[key] = {
            Mesh: WeaponAsset1.Mesh.AssetPathName.split(".")[0] + ".gltf",
        }
    })

export function getAssets(ns, id) {
    let model

    if (ns === "item") {
        // Crown boxes
        if ([185076200, 185076300, 185076600, 185076700].includes(id)) return {
            icon: "/UI/Icon/Item/Consumption/UI_Icon_Itembox_Select.png",
            iconL: "/UI/Icon/ItemL/Consumption/UI_Icon_Itembox_Select.png"
        }
        // Random box for gacha banner outfits and mounts
        if ([185070401, 185069901, 185070001, 185070101, 185070201, 185070301, 185070401].includes(id)) return {
            icon: "/UI/Icon/Item/Consumption/UI_Icon_gashabox_RichRandom.png",
            iconL: "/UI/Icon/ItemL/Consumption/UI_Icon_gashabox_RichRandom.png"
        }
    }

    let slotIcon
    if (ns === "imagine") {
        const imagine = IMAGINE.find(i => i.id === id)
        if (imagine.imagine_type === 0) {
            Object.keys(imagine)
                .filter(key => key.includes("equip_position"))
                .forEach(key => {
                    if (imagine[key] === 1) {
                        let slotId = key.split("equip_position")[1] // Could probably be simplified to id.charAt[2]
                        slotIcon = `/UI/MyCharaMenu/UI_MyCharaMenuImagineIcon2_${slotId}.png`
                    }
                })
        }
    }

    if (models[ns]) {
        model = models[ns][id]
    }

    return {
        ...icons[ns][id],
        model,
        slotIcon,
        // TODO: 3d models, etc (sound effects?)
    }
}

export default {
    icons,
    models
}