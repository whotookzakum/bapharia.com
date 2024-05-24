import AESTHEPARTS from "$bp_api/japan/aestheParts.json";
import { getCategory, getAssets } from "./utils"

// TODO 3d models
// Note: edit_type indicates whether it can be selected only during character creation (0), only in the beauty salon (1), or in both (2).
function processAvatar(avt, lang) {
    const category = getCategory("AvatarPart", avt.parts_icon_type, lang)
    const name = `${category} ${avt.icon_id}` // Or avatar.asset_id
    let assets;
    switch (avt.parts_icon_type) {
        case 9:
        case 10:
        case 11:
            assets = getAssets("makeup", avt.icon_id)
            break
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            if (avt.asset_id.includes("naked") && avt.icon_id === "default") {
                assets = getAssets("chaparts", avt.asset_id)
            }
            else {
                assets = getAssets("costume", avt.icon_id)
            }
            break
        default:
            assets = getAssets("chaparts", avt.icon_id)
    }

    return {
        text: {
            name,
            category
        },
        assets,
        ...avt,
    }
}

export function getEntry(id, lang) {
    return processAvatar(AESTHEPARTS.find(avt => avt.id == id), lang)
}

const avatars = (lang) => AESTHEPARTS.map(avt => processAvatar(avt, lang))

export default avatars;