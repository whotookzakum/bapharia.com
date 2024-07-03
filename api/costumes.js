import COSTUME from "$bp_api/japan/costume.json";
import { getSources, getText, getAssets } from "./utils";

// TODO BPP buy/sell price
// TODO 3d models
// TODO Is dyable 
// TODO Class, gender, level support

const costumes = (lang) => COSTUME.map(costume => {
    const name = getText("costume_text", costume.name, lang)
    const desc = getText("costume_text", costume.desc, lang)
    const costumeType = getCostumeType(costume)
    const thumb = getCostumeThumbnail(costume)
    const sources = getSources(costume, lang, [5])

    return {
        id: costume.id,
        text: {
            name,
            desc
        },
        sources,
        // thumb,
        // costumeType,
        // subcategoryName: getSubcategory(costumeType),
        // entryTypes: ["Costume"],
        // ...costume,
    }
})


export function getCostumeThumbnail(costume) {
    const costumeType = getCostumeType(costume)
    const pathToThumb = getPartsPath(costumeType)
    return `/UI/Icon/Costume/${pathToThumb}/${costume.icon_name}.png`
}

function getCostumeType(costume) {
    return costume.costume_parts_name.slice(0, 3).includes("acc") ? costume.costume_parts_name.slice(0, 7) : costume.costume_parts_name.slice(0, 3)
}

function getPartsPath(type) {
    switch (type) {
        case "hat": return "Hat"
        case "bdl": return "Lower"
        case "udw": return "Underwear"
        case "sho": return "Shoes"
        case "bdu": return "Upper"
        case "glv": return "Glove"
        case "acc_hpb": return "AccessoryHipBack"
        case "acc_hdt": return "AccessoryHeadTop"
        case "acc_hdm": return "AccessoryHeadMid"
        case "acc_hdl": return "AccessoryHeadLow"
        case "acc_hde": return "AccessoryHeadEar"
        case "acc_fng": return "AccessoryFinger"
        case "acc_bdb": return "AccessoryBodyBack"
    }
}

function getSubcategory(type) {
    switch (type) {
        case "hat":
            return {
                ja_JP: "帽子",
                en_US: "Hat"
            }
        case "bdl":
            return {
                ja_JP: "ボトムス",
                en_US: "Bottom"
            }
        case "udw":
            return {
                ja_JP: "下着",
                en_US: "Underwear"
            }
        case "sho":
            return {
                ja_JP: "靴",
                en_US: "Shoes"
            }
        case "bdu":
            return {
                ja_JP: "トップス",
                en_US: "Top"
            }
        case "glv":
            return {
                ja_JP: "手袋",
                en_US: "Gloves"
            }
        case "acc_hpb":
            return {
                ja_JP: "アクセ・腰",
                en_US: "Lower Backwear"
            }
        case "acc_hdt":
            return {
                ja_JP: "アクセ・頭",
                en_US: "Headwear"
            }
        case "acc_hdm":
            return {
                ja_JP: "アクセ・目",
                en_US: "Eyewear"
            }
        case "acc_hdl":
            return {
                ja_JP: "アクセ・頬",
                en_US: "Face Accessory"
            }
        case "acc_hde":
            return {
                ja_JP: "アクセ・耳",
                en_US: "Ear Accessory"
            }
        case "acc_fng":
            return {
                ja_JP: "アクセ・手",
                en_US: "Hand Accessory"
            }
        case "acc_bdb":
            return {
                ja_JP: "アクセ・背中",
                en_US: "Upper Backwear"
            }
        default:
            return { ja_JP: "コスチューム", en_US: "Costume" }
    }
}

export const getSummaries = (lang) => COSTUME.map(costume => {
    const { icon, iconL } = getAssets("costume", costume.id)
    return {
        href: `/db/costumes/${costume.id}`,
        name: getText("costume_text", costume.name, lang),
        jpName: getText("costume_text", costume.name, "ja_JP"),
        icon,
        iconL,
        category: "Costume",
        type: getCostumeType(costume),
        gender: costume.equipable_gender
    }
})

export default costumes