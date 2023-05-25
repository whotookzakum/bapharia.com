import costumesData from "../bp_server/japan/costume.json";
import { getText, getThumbnail } from "./utils";

function getPartsPath(name) {
    if (name.includes("hat")) return "Hat"
    if (name.includes("bdl")) return "Lower"
    if (name.includes("udw")) return "Underwear"
    if (name.includes("sho")) return "Shoes"
    if (name.includes("bdu")) return "Upper"
    if (name.includes("glv")) return "Glove"
    if (name.includes("acc_hpb")) return "AccessoryHipBack"
    if (name.includes("acc_hdt")) return "AccessoryHeadTop"
    if (name.includes("acc_hdm")) return "AccessoryHeadMid"
    if (name.includes("acc_hdl")) return "AccessoryHeadLow"
    if (name.includes("acc_hde")) return "AccessoryHeadEar"
    if (name.includes("acc_fng")) return "AccessoryFinger"
    if (name.includes("acc_bdb")) return "AccessoryBodyBack"
    else return
}

const costumes = costumesData.map(costume => {
    const name = getText("costume_text", costume.name)
    const desc = getText("costume_text", costume.desc)
    const pathToThumb = getPartsPath(costume.costume_parts_name)
    const thumb = getThumbnail("costume", pathToThumb, costume.icon_name)

    return {
        ...costume,
        id: `${costume.id}`,
        name,
        desc,
        thumb,
        category: { ja_JP: "コスチューム", en_US: "Costume" },
        entryTypes: ["Costume"]
    }
})

export default costumes