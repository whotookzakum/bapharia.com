import texts from "$lib/apiext/texts/ja_JP.json";
import gesturesData from "$lib/apiext/emotes.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}

export const load = async () => {

    const gestures = gesturesData.map(gesture => {
        const name = getText("master_emote_text", gesture.name)
        const thumb = `/UI/Icon/Emote/UI_Emote_${gesture.emote_id}.png`

        return {
            ...gesture,
            name,
            thumb
        }
    })

    return {
        gestures
    }
}