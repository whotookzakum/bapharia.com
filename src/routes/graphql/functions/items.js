import itemsData from "../bp_server/japan/items.json";
import { getText, getThumbnail, getCategory } from "./utils";

// TO DO:
// Drops from (w/ drop rate)
// Gathered in (w/ drop rate)
// Available in (dungeon/map)
// Used in [recipe]

const items = itemsData.map(item => {
    const name = getText("item_text", item.name)
    const desc = getText("item_text", item.desc)
    const sourceDesc = getText("item_text", item.obtaining_route_detail_id)
    const effectDesc = getText("item_text", item.item_effect_desc_text)
    const thumb = getThumbnail("item", item.category, item.id)
    const category = getCategory("item", item.category)

    return {
        ...item,
        id: `${item.id}`,
        name,
        desc,
        sourceDesc,
        effectDesc,
        thumb,
        category,
        entryTypes: ["Item"]
    }
})

export default items;