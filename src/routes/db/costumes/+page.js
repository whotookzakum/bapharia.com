import texts from "../../graphql/japan/texts/ja_JP.json";
import costumesData from "../../graphql/japan/costume.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}

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

export const load = async () => {

    const costumes = costumesData.map(costume => {
        const name = getText("costume_text", costume.name)
        const desc = getText("costume_text", costume.desc)
        const pathToThumb = getPartsPath(costume.costume_parts_name)
        const thumb = pathToThumb ? `/UI/Icon/Costume/${pathToThumb}/${costume.icon_name}.png` : ""
    
        return {
            ...costume,
            name,
            desc,
            thumb
        }
    })

    return {
        costumes
    }
}