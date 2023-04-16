import texts from "../../graphql/global/texts/en_US.json";
import imagineData from "../../graphql/japan/imagine.json";
import imagineParams from "../../graphql/japan/imagine/param_level.json";
import imaginePerks from "../../graphql/japan/imagine/perk_pick.json";
import weaponPerks from "../../graphql/japan/weaponperks.json";
import perksData from "../../graphql/japan/perks.json";
import recipesData from "../../graphql/japan/imagine/recepi.json";
import itemsData from "../../graphql/japan/items.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}

export const load = async () => {

    const imagines = imagineData.map(imagine => {
        const name = getText("master_imagine_text", imagine.imagine_name)
        const desc = getText("master_imagine_text", imagine.imagine_desc)
        let thumb = `/UI/Icon/Imagine/Battle/UI_Icon_${imagine.id}.png`
        let slot;
        if (imagine.imagine_type === 0) {
            thumb = `/UI/Icon/Imagine/Picture/UI_Icon_${imagine.id}.png`
            Object.keys(imagine).filter(key => key.includes("equip_position")).forEach(key => {
                if (imagine[key] === 1) {
                    let slotId = key.split("equip_position")[1]
                    slot = `/UI/MyCharaMenu/UI_MyCharaMenuImagineIcon2_${slotId}.png`
                }
            })
        }
        let element = `/UI/Icon/Attribute/UI_IconAttribute_Empty.png`
        if (imagine.attribute > 0) {
            // Attributes don't match their descriptions, so temporarily using text to find element.
            // element = `/UI/Icon/Attribute/UI_IconAttribute_${imagine.attribute - 1}.png`
            if (desc.includes("火属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_1.png`
            if (desc.includes("雷属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_2.png`
            if (desc.includes("氷属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_3.png`
            if (desc.includes("土属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_4.png`
            if (desc.includes("光属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_5.png`
            if (desc.includes("闇属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_6.png`
        }
        const params = imagineParams.filter(item => item.pattern_id === imagine.param_type)
        const abilities = imaginePerks.filter(perk => perk.table_id === imagine.table_id).map(imaginePerk => {
            const weaponPerkData = weaponPerks.find(perk => perk.id === imaginePerk.imagine_perk_id)
            const name = getText("weapon_perk_text", weaponPerkData.name)

            let stats = []
            for (let i = 0; i < 2; i++) {
                let perkData = perksData.find(perk => perk.id === weaponPerkData.perk_id)
                let id = perkData[`ability_name${i + 1}`]
                let statName = getText("perk_text", id)
                if (statName) {
                    stats.push(
                        {
                            name: statName,
                            value: weaponPerkData[`ability_parts${i + 1}_value1`]
                        }
                    )
                }
            }
            
            return {
                probability: imaginePerk.imagine_perk_rate,
                name,
                stats
            }
        })
        
        const recipe = recipesData.find(rec => rec.imagin_id === imagine.id)
        recipe.materials = recipe.materials.map(mat => {
            const itemData = itemsData.find(item => item.id === mat.item_id)
            return {
                ...mat,
                name: getText("item_text", itemData.name),
                source: getText("item_text", itemData.obtaining_route_detail_id)
            }
        })
        
        return {
            ...imagine,
            name,
            desc,
            thumb,
            slot,
            element,
            params,
            // Skill name and skill type on client?
            abilities,
            recipe
        }
    })

    return {
        imagines
    }
}