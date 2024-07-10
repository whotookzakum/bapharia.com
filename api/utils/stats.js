import MASTER_WEAPON_PERK_PICKS from "../bp_api/japan/master_weapon_perk_picks.json";
import WEAPONPERKS from "../bp_api/japan/weaponperks.json";
import PERKS from "../bp_api/japan/perks.json"
import PERK_PICK from "../bp_api/japan/imagine/perk_pick.json";
import WEAPON_STATUS_LEVELS from "../bp_api/japan/weapon_status_levels.json";
import IMAGINE_PARAM_LEVEL from "../bp_api/japan/imagine/param_level.json";
import MASTER_WEAPON_STATUSADD_BYSTACKBOOSTS from "../bp_api/japan/master_weapon_statusadd_bystackboosts.json";
import { getText } from "./index"

export function getAbilities(tableId, lang) {
    if (!tableId || tableId === "none") return
    return [...PERK_PICK, ...MASTER_WEAPON_PERK_PICKS]
        .filter(perkOption => perkOption.table_id === tableId)
        .map(perkOption => {

            const weaponPerk = WEAPONPERKS.find(obj => obj.id === perkOption.imagine_perk_id || obj.id === perkOption.perk_id) // The ability line, "ストラテジストG3"
            if (!weaponPerk) return {} // TODO: Fix v1.06.000 stats

            const name = getText("weapon_perk_text", weaponPerk.name, lang)
            const perk = PERKS.find(obj => obj.id === weaponPerk.perk_id) // The stats provided by the ability, "耐久力アップ +13" "知力アップ +13"

            const stats = Object.keys(perk)
                .reduce((acc, key) => {
                    if (key.includes("ability_name")) {
                        const name = getText("perk_text", perk[key], lang)

                        // Crafted weapon perks
                        if (name && perkOption.success_min_value) {
                            const { success_min_value, success_max_value, big_success_min_value, big_success_max_value } = perkOption
                            acc.push({ text: { name }, success_min_value, success_max_value, big_success_min_value, big_success_max_value })
                        }

                        // Imagine perks
                        // value2 is unused--it's always 0
                        const value1 = weaponPerk[`ability_parts${key.charAt(key.length - 1)}_value1`]

                        if (value1 > 0) {
                            acc.push({ text: { name }, value1 })
                        }
                    }
                    return acc
                }, [])

            return {
                text: {
                    name
                },
                abilityId: weaponPerk.id, // "ストラテジストG3"
                perkId: perk.id, // "耐久力アップ +13" "知力アップ +13"
                probability: perkOption.weight || perkOption.imagine_perk_rate,
                stats
            }
        })
}

// If returnAsObject is true, the result will be returned as an object, where the keys are the provided keys, and each value is an array with the stat values.
// If returnAsObject is false, the result will be an array of objects, where each object contains the stats for that level.
export function getEquipmentStats(id, keys, returnAsObject = false) {
    const stats = [...WEAPON_STATUS_LEVELS, ...IMAGINE_PARAM_LEVEL].filter(statData => statData.pattern_id == id)

    if (returnAsObject) {
        return stats.reduce((acc, curr) => {
            keys.forEach(key => {
                if (!acc[key]) acc[key] = []
                acc[key].push(curr[key])
            })

            return acc
        }, {})
    }

    return stats
}

export function getLimitBreakStats(id, keys) {
    const stats = [...MASTER_WEAPON_STATUSADD_BYSTACKBOOSTS]
        .filter(obj => obj.pattern_id == id)
        .map(obj => {
            return Object.entries(obj).reduce((acc, [key, value]) => {
                const statKey = key.replace("add_", "")
                if (keys.includes(statKey)) acc[statKey] = value
                return acc
            }, {})
        })

    return stats
}