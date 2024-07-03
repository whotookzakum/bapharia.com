import { getText, getCategory, getAssets } from "./utils";
import MASTER_STAMP_CATEGORY from "$bp_api/japan/master_stamp_category.json";

// TODO: add an array that contains the set that the stamp belongs to, i.e. "set_name" and "set_stamps"

// Note: stamp sets have a "term_id", indicating that they might expire, but it currently appears unused
// Note: en_US names are wrong as of Apr 23 2024
function processStamp(stamp, lang) {
    const name = getText("stamp_text", stamp.name, lang)
    const setName = getText("master_stamp_categories_text", stamp.category_name_text, lang)
    const category = getCategory("Stamp", "default", lang)
    const assets = {
        ...getAssets("stamp", stamp.stamp_id),
        setIcon: getAssets("stampcategory", stamp.category_id).icon
    }

    const { stamp_id, category_id, initial_grant } = stamp

    return {
        stamp_id,
        category_id,
        initial_grant,
        text: {
            name,
            setName,
            category
        },
        assets,
        resolveType: "Stamp",
        name_id: stamp.name // required for getSummaries to get jpName
    }
}

// Note: I use a custom object here combining the parent StampSet and child Stamp
export function getEntry(id, lang) {
    const category = MASTER_STAMP_CATEGORY.find(obj => obj.stamp_data.some(s => s.stamp_id === id))
    const stamp = category.stamp_data.find(obj => obj.stamp_id == id)
    return processStamp({ ...category, ...stamp }, lang)
}

const stamps = (lang) => MASTER_STAMP_CATEGORY.flatMap(cat => cat.stamp_data.map(stamp => getEntry(stamp.stamp_id, lang)))

export const getSummaries = (lang) => stamps(lang).map(stamp => {
    const { assets, text } = stamp
    return {
        href: `/db/stamps/${stamp.stamp_id}`,
        name: text.name,
        jpName: getText("stamp_text", stamp.name_id, "ja_JP"),
        icon: assets.icon,
        iconL: assets.iconL,
        category: "Stamp"
    }
})

export default stamps;