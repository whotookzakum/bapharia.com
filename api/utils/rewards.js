import ITEMS from "../bp_api/bno/items.json";
import { getText, getAssets } from "./index";
import REWARDS from "../bp_api/bno/rewards.json"
import RECEPI from "../bp_api/bno/imagine/recepi.json"
import IMAGINE from "../bp_api/bno/imagine.json"
import WEAPONS from "../bp_api/bno/weapons.json"
import COSTUME from "../bp_api/bno/costume.json"
import MOUNT from "../bp_api/bno/mount.json"
import EMOTES from "../bp_api/bno/emotes.json"
import TOKEN from "../bp_api/bno/token.json"
import MASTER_STAMP_CATEGORY from "../bp_api/bno/master_stamp_category.json"

// TODO: Finish cases, such as type 36 (badges) rewarded from achievements

// Returns a reward object
export function getReward(id) {
    return REWARDS.find(reward => reward.id === id)
}

// Returns a brief description of a reward item (name, icon, id, amount)
export function getRewardItemBrief(type, id, lang) {
    let details, name, assets, href, source

    switch (type) {
        case 0: // Luno
            name = getText("Common", 4, lang)
            // "/UI/Icon/Currency/UI_Icon_Currency_01.png" // coin icon
            assets = { icon: "/UI/Icon/Reward/UI_Icon_0.png" } // coin in bag icon
            break
        case 1:
            name = getText("Common", 5, lang)
            assets = { icon: "/UI/Icon/Currency/UI_Icon_Currency_02.png" }
            break
        case 3:
            href = "/db/items/" + id
            details = ITEMS.find(i => i.id === id)
            name = getText("item_text", details.name, lang)
            source = getText("item_text", details.obtaining_route_detail_id, lang)
            assets = getAssets("item", details.id)
            break
        case 4:
            href = "/db/weapons/" + id
            details = WEAPONS.find(wep => wep.id === id)
            name = getText("weapon_text", details.name, lang)
            assets = getAssets("weapon", details.id)
            break
        case 5:
            href = "/db/costumes/" + id
            details = COSTUME.find(cos => cos.id === id)
            name = getText("costume_text", details.name, lang)
            assets = getAssets("costume", details.id)
            break
        case 6:
            href = "/db/imagines/" + id
            details = IMAGINE.find(i => i.id === id)
            name = getText("master_imagine_text", details.imagine_name, lang)
            assets = getAssets("imagine", details.id)
            break
        case 7:
            href = "/db/mounts/" + id
            details = MOUNT.find(m => m.id === id)
            name = getText("master_mount_imagine_text", details.mount_name_text_id, lang)
            assets = getAssets("mountimagine", details.id)
            break
        case 9:
            href = "/db/emotes/" + id
            details = EMOTES.find(e => e.emote_id == id)
            name = getText("master_emote_text", details.name, lang)
            assets = getAssets("emote", details.emote_id)
            break
        case 10:
            href = "/db/stamps/" + id
            const stampSet = MASTER_STAMP_CATEGORY.find(set => set.stamp_data.some(stamp => stamp.stamp_id === id))
            details = stampSet.stamp_data.find(stamp => stamp.stamp_id === id)
            name = getText("stamp_text", details.name, lang)
            assets = getAssets("stamp", details.stamp_id)
            break
        case 11:
            href = "/db/imagines/" + id
            const imagineRecipe = RECEPI.find(r => r.id === id)
            details = IMAGINE.find(imag => imag.id === imagineRecipe.imagin_id)
            // TODO: Append "Recipe" (maybe on client side?)
            name = getText("master_imagine_text", details.imagine_name, lang) + "レシピ"
            assets = getAssets("reward", 11)
            break
        case 17:
            name = "BPP"
            assets = { icon: "/UI/Icon/Currency/UI_Icon_Currency_04.png" }
            break
        case 18:
            name = "無償ローズオーブ"
            // master_mail_format_text 295
            assets = { icon: "/UI/Icon/Currency/UI_Icon_Currency_03.png" }
            break
        case 19:
            href = "/db/tokens/" + id
            details = TOKEN.find(t => t.id === id)
            name = getText("master_token_text", details.name, lang)
            assets = getAssets("token", details.id)
            break
        case 24:
            if (id === 1) name = getText("Common", 11, lang)
            else if (id === 2) name = getText("Common", 12, lang)
            assets = { icon: "/UI/Icon/Reward/UI_Icon_23.png" }
            break
        default:
            return {}
    }

    return {
        id,
        href,
        text: {
            name,
            source
        },
        assets
    }
}