import en_US from "../bp_server/english_deepl.json";
import ja_JP from "../bp_server/japan/texts/ja_JP.json";


export function getText(ns, id) {
    const texts = {
        ja_JP,
        en_US
    }
    let result = {};
    Object.keys(texts).forEach(lang => {
        const namespaceObj = texts[lang].find(namespace => namespace.name === ns) || {}
        const textObj = namespaceObj.texts.find(obj => obj.id == id) || {}
        result[lang] = textObj.text || "-"
    })
    return result
}