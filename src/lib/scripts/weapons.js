import WEAPONS from "$bp_api/japan/weapons.json";
import ITEMS from "$bp_api/japan/items.json";
import { getAssets, getText, getSources, getEquipmentStats, getCategory } from "./utils";

function processWeapon(weapon, lang) {
    const name = getText("weapon_text", weapon.name, lang)
    const desc = getText("weapon_text", weapon.desc, lang)
    const category = getCategory("Weapon", weapon.is_for_weapon_stickers, lang)
    const assets = getAssets("weapon", weapon.id)
    const stats = getEquipmentStats(weapon.id, ["attribute_value", "offensive_power", "str", "vit", "dex", "mnd", "int", "critical_power"])
    // For weapon skins, get the source of the weapon skin item
    const sources = weapon.is_for_weapon_stickers
        ? getSources(ITEMS.find(item => item.weapon_sticker.appearance_weapon_id == weapon.id), lang, [3])
        : getSources(weapon, lang, [4])

    // remove legacy stats
    delete weapon.enhance_status_total
    delete weapon.enhance_status_ap
    delete weapon.enhance_status_hp
    delete weapon.enhance_status_str
    delete weapon.enhance_status_vit
    delete weapon.enhance_status_dex
    delete weapon.enhance_status_int
    delete weapon.enhance_status_mnd

    return {
        text: {
            name,
            desc,
            category,
        },
        assets,
        stats,
        sources,
        resolveType: "Weapon",
        ...weapon,
    }
}

export function getEntry(id, lang) {
    return processWeapon(WEAPONS.find(weapon => weapon.id == id), lang)
}

export const getWeaponSummaries = (lang) => WEAPONS.map(weapon => {
    const { icon, iconL } = getAssets("weapon", weapon.id)
    return {
        href: `/db/weapons/${weapon.id}`,
        name: getText("weapon_text", weapon.name, lang),
        jpName: getText("weapon_text", weapon.name, "ja_JP"),
        icon,
        iconL,
        category: "Weapon",
        type: weapon.is_for_weapon_stickers,
        class: weapon.equip_class,
        element: weapon.attribute
    }
})

const weapons = (lang) => WEAPONS.map(weapon => processWeapon(weapon, lang))

export default weapons;