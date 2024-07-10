import AESTHEPARTS from "./bp_api/japan/aestheParts.json";
import { getCategory, getAssets } from "./utils"

// TODO 3d models
// Note: edit_type indicates whether it can be selected only during character creation (0), only in the beauty salon (1), or in both (2).
function processAvatar(avatar, lang) {
    const category = getCategory("AvatarPart", avatar.parts_icon_type, lang)
    const name = `${category} ${avatar.icon_id}` // Or avatar.asset_id
    let assets;
    switch (avatar.parts_icon_type) {
        case 9:
        case 10:
        case 11:
            assets = getAssets("makeup", avatar.icon_id)
            break
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            if (avatar.asset_id.includes("naked") && avatar.icon_id === "default") {
                assets = getAssets("chaparts", avatar.asset_id)
            }
            else {
                assets = getAssets("costume", avatar.icon_id)
            }
            break
        default:
            assets = getAssets("chaparts", avatar.icon_id)
    }

    return {
        text: {
            name,
            category
        },
        assets,
        ...avatar,
    }
}

export function getEntry(id, lang) {
    return processAvatar(AESTHEPARTS.find(avatar => avatar.id == id), lang)
}

export const getSummaries = (lang) => AESTHEPARTS.map(avatar => {
    const category = getCategory("AvatarPart", avatar.parts_icon_type, lang)
    const name = `${category} ${avatar.icon_id}` // Or avatar.asset_id
    const { icon, iconL } = getAssets("chaparts", avatar.icon_id)
    return {
        href: `/db/avatarparts/${avatar.id}`,
        name,
        jpName: "",
        icon,
        iconL,
        category: "AvatarPart",
        type: avatar.parts_icon_type,
        gender: avatar.gender,
    }
})

const avatars = (lang) => AESTHEPARTS.map(avatar => processAvatar(avatar, lang))

export default avatars;