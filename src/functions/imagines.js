import imagineData from "$bp_server/japan/imagine.json";
import imagineParams from "$bp_server/global/imagine/param_level.json";
import imaginePerks from "$bp_server/japan/imagine/perk_pick.json";
import weaponPerks from "$bp_server/japan/weaponperks.json";
import perksData from "$bp_server/japan/perks.json";
import imagineRecipesData from "$bp_server/japan/imagine/recepi.json";
import itemsData from "$bp_server/japan/items.json";
import imagineSkillNames from "$bp_client/japan/Content/Text/ImagineArtsName.json"
import { getText } from "./utils";
import { getItemThumbnail } from "./items";

// TODO Treasure chests that contain imagine
// TODO Season passes that contain imagine
// TODO 3d models
// "attainable from chest, pass, shop, etc"
// TODO Mount imagine

const HEAL_TYPES = [
    131000900, // Pink uribo
    140000200, // Nappo β
    131000200 // Evil Healer
]

const SUPPORT_TYPES = [
    140000000, // Chicken
    131001000, // Raging Beast
    130002300, // Nappo α
    140000100, // Cat
    131000700, // Spooky Goat
    120000400, // Einrain a
    133001000, // Bandit Higma
    120000010 // Feste β
]

const imagines = imagineData.map(imagine => {
    const name = getText("master_imagine_text", imagine.imagine_name)
    const desc = getText("master_imagine_text", imagine.imagine_desc)
    let thumb = `/UI/Icon/Imagine/Battle/UI_Icon_${imagine.id}.png`
    let slotImg;
    if (imagine.imagine_type === 0) {
        thumb = `/UI/Icon/Imagine/Picture/UI_Icon_${imagine.id}.png`
        Object.keys(imagine).filter(key => key.includes("equip_position")).forEach(key => {
            if (imagine[key] === 1) {
                let slotId = key.split("equip_position")[1]
                slotImg = `/UI/MyCharaMenu/UI_MyCharaMenuImagineIcon2_${slotId}.png`
            }
        })
    }
    let elementImg = `/UI/Icon/Attribute/UI_IconAttribute_Empty.png`
    if (imagine.attribute > 0) {
        // Attributes don't match their descriptions, so temporarily using text to find elementImg.
        // elementImg = `/UI/Icon/Attribute/UI_IconAttribute_${imagine.attribute - 1}.png`
        if (desc.ja_JP.includes("火属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_1.png`
        if (desc.ja_JP.includes("雷属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_2.png`
        if (desc.ja_JP.includes("氷属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_3.png`
        if (desc.ja_JP.includes("土属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_4.png`
        if (desc.ja_JP.includes("光属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_5.png`
        if (desc.ja_JP.includes("闇属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_6.png`
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

    const recipe = imagineRecipesData.find(rec => rec.imagin_id === imagine.id)
    if (recipe) {
        recipe.materials = recipe.materials.map(mat => {
            const itemData = itemsData.find(item => item.id === mat.item_id)
            return {
                ...mat,
                id: `${itemData.id}`,
                thumb: getItemThumbnail(mat.item_id),
                name: getText("item_text", itemData.name),
                sourceDesc: getText("item_text", itemData.obtaining_route_detail_id)
            }
        })
    }
    
    if (imagine.imagine_type === 1) {
        imagine.imagineSkill = {
            type: getImagineSkillType(imagine.id),
            name: getImagineSkillName(imagine.imagine_arts)
        }
    }

    return {
        ...imagine,
        id: `${imagine.id}`,
        name,
        desc,
        thumb,
        slotImg,
        elementImg,
        params,
        abilities,
        recipe,
        subcategoryName: getSubcategory(imagine.imagine_type),
        entryTypes: ["Imagine"]
    }
})

function getSubcategory(imagineType) {
    switch (imagineType) {
        case 0:
            return {
                ja_JP: "エンハンスイマジン",
                en_US: "Enhance Imagine"
            }
        case 1:
            return {
                ja_JP: "バトルイマジン",
                en_US: "Battle Imagine"
            }
    }
}

function getImagineSkillName(skillId) {
    const skillObj = imagineSkillNames[0].Properties.TextTable.find(table => table.Id.IdString === skillId)

    if (skillObj) {
        return {
            ja_JP: skillObj.Text,
            en_US: skillObj.Text
        }
    }
}

function getImagineSkillType(imagineId) {
    if (HEAL_TYPES.includes(imagineId)) {
        return {
            ja_JP: "回復型",
            en_US: "Heal",
        }
    }
    else if (SUPPORT_TYPES.includes(imagineId)) {
        return {
            ja_JP: "補助型",
            en_US: "Support",
        }
    }
    return {
        ja_JP: "攻撃型",
        en_US: "Attack",
    }
}

export default imagines;