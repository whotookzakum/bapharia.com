import tokensData from "../japan/token.json";
import { getText, getThumbnail } from "./utils";

const tokens = tokensData.map(token => {
    const name = getText("master_token_text", token.name)
    const desc = getText("master_token_text", token.desc)
    const thumb = getThumbnail("token", "", token.id)

    return {
        ...token,
        id: `${token.id}`,
        name,
        desc,
        thumb,
        category: { ja_JP: "トークン", en_US: "Token" },
        filterGroup: "tokens"
    }
})

export default tokens;