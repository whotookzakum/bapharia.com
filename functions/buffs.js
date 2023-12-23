import buffNamesData from "$bp_client/japan/Content/Text/StatusAlimentNotify.json"
import buffIconsData from "$bp_client/japan/Content/Blueprints/UI/FocusTarget/SubWIdget/BufIconDataTable.json"

// TODO used by enemy/npc/class (skill)


const buffs = Object.values(buffIconsData[0].Rows).map((value) => {

    // Texture_5_34B491B44DC57DC82AF78B834FAAF910
    const textureKey = Object.keys(value).filter(key => key.includes("Texture_"))[0]

    // UI_StatusAilment_1017
    const imgName = value[textureKey]?.ObjectPath.replace(".0", "").split("/").pop()

    // 1017
    const id = parseInt(imgName?.replace("UI_StatusAilment_", ""))

    const stringKey = Object.keys(value).filter(key => key.includes("TextID"))[0]
    const textId = value[stringKey]

    const name = getBuffName(textId)

    return {
        textId,
        id,
        name,
    }
})

function getBuffName(textId) {
    const name = {}

    // Japanese text is in "FireLv1_EffectName"
    const looseMatch = buffNamesData[0].Properties.TextTable.find(table => table.Id.IdString.includes(textId) && table.Id.IdString !== textId)
    if (looseMatch) name.ja_JP = looseMatch.Text

    // English text is in "FireLv1"
    const exactMatch = buffNamesData[0].Properties.TextTable.find(table => table.Id.IdString === textId)
    if (exactMatch) name.en_US = exactMatch.Text

    return name
}

export default buffs;