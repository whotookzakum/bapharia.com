import EMOTES from "./bp_api/japan/emotes.json";
import { getText, getAssets, getCategory, getSources } from "./utils";

function processEmote(emote, lang) {
    const name = getText("master_emote_text", emote.name, lang)
    const assets = getAssets("emote", emote.emote_id)
    const category = getCategory("Emote", "default")

    return {
        text: {
            name,
            category
        },
        assets,
        resolveType: "Emote",
        ...emote
    }
}

export function getEntry(id, lang) {
    return processEmote(EMOTES.find(emote => emote.emote_id == id), lang)
}

export const getSummaries = (lang) => EMOTES.map((emote) => {
    const { icon, iconL } = getAssets("emote", emote.emote_id)
    return {
        href: `/db/emotes/${emote.emote_id}`,
        name: getText("master_emote_text", emote.name, lang),
        jpName: getText("master_emote_text", emote.name, "ja_JP"),
        icon,
        iconL,
        category: "Emote"
    }
})

const emotes = (lang) => EMOTES.map(emote => processEmote(emote, lang))

export default emotes;