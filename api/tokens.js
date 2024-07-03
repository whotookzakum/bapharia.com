import TOKEN from "$bp_api/japan/token.json";
import TOKEN_USE from "$bp_api/japan/token_use.json";
import { getAssets, getText, getFile, getCategory, getSources } from "./utils";

// Note: term_id doesn't seem to correspond to anything at this time. doesn't matter too much because the sources of items have shopSources which have end dates of sales.
function processToken(token, lang) {
    const name = getText("master_token_text", token.name, lang)
    const desc = getText("master_token_text", token.desc, lang)
    const category = getCategory("Token", token.category, lang)
    const assets = getAssets("token", token.id)
    const place_to_consume = TOKEN_USE.find(obj => obj.token_id === token.id)?.place_to_consume
    const sources = getSources(token, lang, [17, 18, 19])

    return {
        text: {
            name,
            desc,
            category
        },
        place_to_consume,
        assets,
        sources,
        resolveType: "Token",
        ...token,
    }
}

export function getEntry(id, lang) {
    return processToken(TOKEN.find(tok => tok.id == id), lang)
}

export const getSummaries = (lang) => TOKEN.map(token => {
    const { icon, iconL } = getAssets("token", token.id)
    return {
        href: `/db/tokens/${token.id}`,
        name: getText("master_token_text", token.name, lang),
        jpName: getText("master_token_text", token.name, "ja_JP"),
        icon,
        iconL,
        category: "Token"
    }
})

const tokens = (lang) => TOKEN.map(tok => processToken(tok, lang))

export default tokens;