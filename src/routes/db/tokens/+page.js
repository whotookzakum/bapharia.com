import texts from "$lib/apiext/texts/ja_JP.json";
import tokensData from "$lib/apiext/token.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}

export const load = async () => {

    const tokens = tokensData.map(token => {
        const name = getText("master_token_text", token.name)
        const desc = getText("master_token_text", token.desc)
        const thumb = `/UI/Icon/Token/UI_Icon_${token.id}.png`
    
        return {
            ...token,
            name,
            desc,
            thumb
        }
    })

    return {
        tokens
    }
}