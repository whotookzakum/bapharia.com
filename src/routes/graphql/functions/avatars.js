import avatarsData from "../bp_server/japan/aestheParts.json";
import avatarIcons from "../bp_client/japan/avataricons.json"

const avatars = avatarsData.reduce((acc, avatar) => {
    if (avatar.icon_id === "default") return acc
    // Filter out default clothing options
    if (["hat", "bdu", "glv", "bdl", "sho", "udw"].some(x => avatar.asset_id.includes(x))) return acc

    // Thumbnails are a combination of ChaParts and MakeupIcon
    let thumb = avatarIcons[avatar.icon_id]

    acc.push({
        ...avatar,
        id: `${avatar.icon_id}`,
        name: {
            ja_JP: avatar.asset_id || "-",
            en_US: avatar.asset_id || "-"
        },
        thumb,
        category: { ja_JP: "アバター部位", en_US: "Avatar Part" },
        entryTypes: ["AvatarPart"]
    })
    return acc
}, [])

export default avatars