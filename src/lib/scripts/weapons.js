import WEAPONS from "$bp_api/japan/weapons.json";
import ITEMS from "$bp_api/japan/items.json";
import { getAssets, getText, getSources, getEquipmentStats, getCategory } from "./utils";

function processWeapon(weapon, lang) {
    const name = getText("weapon_text", weapon.name, lang)
    const desc = getText("weapon_text", weapon.desc, lang)
    const category = getCategory("Weapon", weapon.is_for_weapon_stickers, lang)
    const assets = {
        ...getAssets("weapon", weapon.id),
        ...getAssets("weapon", weapon.main_weapon_asset_name),
        subweaponModel: getAssets("weapon", weapon.sub_weapon_asset_name).model,
    }
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
        level: weapon.weapon_max_level,
        class: weapon.equip_class,
        element: mapElement(weapon.attribute)
        // adventure rank from crafting?
    }
})

// Correct weapon attribute mappings to element id mappings
function mapElement(attribute) {
    switch (attribute) {
        case 0: return 0; // none -> none
        case 2: return 4; // thunder -> earth
        case 3: return 1; // ice -> fire
        case 4: return 3; // earth -> ice
        case 5: return 2; // light -> thunder
        case 6: return 5; // dark -> light
        case 7: return 6; // n/a -> fire
        default: return 0;
    }
}

const weapons = (lang) => WEAPONS.map(weapon => processWeapon(weapon, lang))

export default weapons;