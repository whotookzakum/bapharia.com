import costumesData from "$bp_server/japan/costume.json";
import { getText } from "./utils";

// TODO BPP buy/sell price
// TODO 3d models
// TODO Is dyable 
// TODO Class, gender, level support

const costumes = costumesData.map(costume => {
    const name = getText("costume_text", costume.name)
    const desc = getText("costume_text", costume.desc)
    const costumeType = costume.costume_parts_name.slice(0, 3).includes("acc") ? costume.costume_parts_name.slice(0, 7) : costume.costume_parts_name.slice(0, 3)
    const pathToThumb = getPartsPath(costumeType)
    const thumb = getThumbnail(pathToThumb, costume.icon_name)

    return {
        ...costume,
        id: `${costume.id}`,
        name,
        desc,
        thumb,
        costumeType,
        subcategoryName: getSubcategory(costumeType),
        entryTypes: ["Costume"]
    }
})

function getThumbnail(dir, id) {
    return `/UI/Icon/Costume/${dir}/${id}.png`
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

export default costumes