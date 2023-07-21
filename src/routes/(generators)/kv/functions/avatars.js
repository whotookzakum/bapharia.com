import avatarsData from "$bp_server/japan/aestheParts.json";
import makeupIconData from "$bp_client/japan/Content/Blueprints/UI/Icon/DT_MakeupIconDB.json"
import chaPartsIconData from "$bp_client/japan/Content/Blueprints/UI/Icon/DT_ChaPartsIconDB.json"

// TODO 3d models

const icons = {}

const iconsDataFiles = [makeupIconData, chaPartsIconData]

iconsDataFiles.forEach(file => {
    Object.entries(file[0].Rows).forEach(([id, data]) => {
        // const imgData = Object.values(data)[0].AssetPathName.replace("/Game", "").split(".")[0]
        let imgData;
        let i = 0;
        while ((imgData === "None" || !imgData) && i < Object.values(data).length) {
            imgData = Object.values(data)[i].AssetPathName.replace("/Game", "").split(".")[0]
            i++;
        }
        icons[id] = `${imgData}.png`
    })
})

const avatars = avatarsData.reduce((acc, avatar) => {
    if (avatar.icon_id === "default") return acc
    // Filter out default clothing options
    if (["hat", "bdu", "glv", "bdl", "sho", "udw"].some(x => avatar.asset_id.includes(x))) return acc

    let thumb = getThumbnail(avatar.icon_id)

    acc.push({
        ...avatar,
        id: `${avatar.icon_id}`,
        name: {
            ja_JP: avatar.asset_id || "-",
            en_US: avatar.asset_id || "-"
        },
        thumb,
        subcategoryName: getSubcategoryName(avatar.parts_icon_type),
        entryTypes: ["AvatarPart"]
    })
    return acc
}, [])

function getThumbnail(id) {
    return icons[id]
}

function getSubcategoryName(category) {
    switch (category) {
        case 0:
            return {
                ja_JP: "顔",
                en_US: "Face"
            }
        case 1:
            return {
                ja_JP: "髪",
                en_US: "Hair"
            }
        case 2:
            return {
                ja_JP: "輪郭",
                en_US: "Contour"
            }
        case 3:
            return {
                ja_JP: "眉",
                en_US: "Eyebrows"
            }
        case 4:
            return {
                ja_JP: "目",
                en_US: "Eyes"
            }
        case 5:
            return {
                ja_JP: "瞳",
                en_US: "Iris"
            }
        case 6:
            return {
                ja_JP: "鼻",
                en_US: "Nose"
            }
        case 7:
            return {
                ja_JP: "口",
                en_US: "Mouth"
            }
        case 8:
            return {
                ja_JP: "ヒゲ",
                en_US: "Beard"
            }
        case 9:
            return {
                ja_JP: "リップ",
                en_US: "Lips"
            }
        case 10:
            return {
                ja_JP: "フィーチャー",
                en_US: "Feature"
            }
        case 11:
            return {
                ja_JP: "ペイント",
                en_US: "Face Paint"
            }
        case 12:
        case 13:
            return {
                ja_JP: "プリセット",
                en_US: "Preset"
            }
        // 14: hat
        // 15: body upper
        // 16: gloves
        // 17: body lower
        // 18: shoes
        // 19: underwear
        case 20:
            return {
                ja_JP: "まつげ",
                en_US: "Eyelashes"
            }
        case 21:
            return {
                ja_JP: "歯",
                en_US: "Teeth"
            }
        case 22:
            return {
                ja_JP: "髪グラデーション",
                en_US: "Hair Gradient"
            }
        default:
            return {
                ja_JP: "アバター部位",
                en_US: "Avatar Part"
            }
    }
}

export default avatars