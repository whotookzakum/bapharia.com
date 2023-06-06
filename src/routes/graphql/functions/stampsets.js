import stampsData from "../bp_server/japan/stamps.json";
import { getText } from "./utils.js";

const stampSets = stampsData.map(stampSet => {
    const name = getText("master_stamp_categories_text", stampSet.category_name_text)
    return {
        ...stampSet,
        id: `${stampSet.category_id}`,
        name,
        thumb: getThumbnail(),
        category: { ja_JP: "スタンプセット", en_US: "Stamp Set" },
        entryTypes: ["StampSet"]
    }
})

function getThumbnail() {
    return `/UI/Icon/Class/UI_IconClass_Nodata.png`
}

export default stampSets;