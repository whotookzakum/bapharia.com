import texts from "$lib/apiext/texts/ja_JP.json";
import stampsData from "$lib/apiext/stamps.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}

export const load = async () => {

    const stampSets = stampsData.map(stampSet => {
        const name = getText("master_stamp_categories_text", stampSet.category_name_text)
        

        return {
            ...stampSet,
            name
        }
    })

    return {
        stampSets
    }
}