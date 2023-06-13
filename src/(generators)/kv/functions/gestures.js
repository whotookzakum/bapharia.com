import gesturesData from "$bp_server/japan/emotes.json";
import { getText } from "./utils";

const gestures = gesturesData.map(gesture => {
    const name = getText("master_emote_text", gesture.name)
    const thumb = `/UI/Icon/Emote/UI_Emote_${gesture.emote_id}.png`

    return {
        ...gesture,
        id: gesture.emote_id,
        name,
        thumb,
        category: { ja_JP: "ジェスチャー", en_US: "Emote" },
        entryTypes: ["Gesture"]
    }
})

export default gestures;