import stampsData from "../bp_server/japan/stamps.json";
import { getText, getThumbnail } from "./utils.js";

const stampSets = stampsData.map(stampSet => {
    const name = getText("master_stamp_categories_text", stampSet.category_name_text)
    return {
        ...stampSet,
        id: `${stampSet.category_id}`,
        name,
        thumb: getThumbnail("map"),
        category: { ja_JP: "スタンプセット", en_US: "Stamp Set" },
        entryTypes: ["StampSet"]
    }
})

export default stampSets;