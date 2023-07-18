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
        subcategoryName: { ja_JP: "アバター部位", en_US: "Avatar Part" },
        entryTypes: ["AvatarPart"]
    })
    return acc
}, [])

function getThumbnail(id) {
    return icons[id]
}

export default avatars