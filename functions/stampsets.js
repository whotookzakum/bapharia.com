import stampsData from "$bp_server/japan/stamps.json";
import { getText } from "./utils.js";

// TODO: Some stamps have Term Id indicating that they might expire..
// TODO: Thumbnail should be whats used in game to categorize (might be the first icon in a set?)

const stampSets = stampsData.map(stampSet => {
    const name = getText("master_stamp_categories_text", stampSet.category_name_text)
    return {
        ...stampSet,
        id: `${stampSet.category_id}`,
        name,
        thumb: getStampSetThumbnail(stampSet),
        subcategoryName: { ja_JP: "スタンプセット", en_US: "Stamp Set" },
        entryTypes: ["StampSet"]
    }
})

export function getStampSetThumbnail(stampSet) {
    // Not sure about かわいいフェステ、エインレイン
    switch(stampSet.category_id) {
        case 1010: 
            return `/UI/Icon/Stamp/UI_Stamp_30.png`
        default:
            return `/UI/Icon/Stamp/UI_Stamp_${stampSet.stamp_data[0].stamp_id}.png`
    }
}

export default stampSets;