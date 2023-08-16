import tokensData from "$bp_server/japan/token.json";
import { getText } from "./utils";

// TODO: Try to figure out meaning of the values

const tokens = tokensData.map(token => {
    const name = getText("master_token_text", token.name)
    const desc = getText("master_token_text", token.desc)
    const thumb = getTokenThumbnail(token.id)

    return {
        ...token,
        id: `${token.id}`,
        name,
        desc,
        thumb,
        subcategoryName: { ja_JP: "トークン", en_US: "Ticket" },
        entryTypes: ["Token"]
    }
})

export function getTokenThumbnail(id) {
    if (id === 120000900) {
        return "/UI/Icon/Token/UI_Icon_120000700.png"
    }
    else if (id === 149000100) {
        return "/UI/Icon/Token/UI_Icon_149000000.png"
    }
    return `/UI/Icon/Token/UI_Icon_${id}.png`
}

export default tokens;