import tokensData from "../bp_server/japan/token.json";
import { getText } from "./utils";

// TO DO:
// Try to figure out meaning of the values

const tokens = tokensData.map(token => {
    const name = getText("master_token_text", token.name)
    const desc = getText("master_token_text", token.desc)
    const thumb = getThumbnail(token.id)

    return {
        ...token,
        id: `${token.id}`,
        name,
        desc,
        thumb,
        category: { ja_JP: "トークン", en_US: "Token" },
        entryTypes: ["Token"]
    }
})

function getThumbnail(id) {
    if (id === 149000100 || id === 120000900) {
        return `/UI/Icon/Class/UI_IconClass_Nodata.png`
    }
    return `/UI/Icon/Token/UI_Icon_${id}.png`
}

export default tokens;