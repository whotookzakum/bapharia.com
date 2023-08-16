import gesturesData from "$bp_server/japan/emotes.json";
import { getText } from "./utils";

const gestures = gesturesData.map(gesture => {
    const name = getText("master_emote_text", gesture.name)
    const thumb = getGestureThumbnail(gesture.emote_id)

    return {
        ...gesture,
        id: gesture.emote_id,
        name,
        thumb,
        subcategoryName: { ja_JP: "ジェスチャー", en_US: "Emote" },
        entryTypes: ["Gesture"]
    }
})

export function getGestureThumbnail(id) {
    return `/UI/Icon/Emote/UI_Emote_${id}.png`
}

export default gestures;