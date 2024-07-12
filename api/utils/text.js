import categories from "./categories.json"
import en_US_override from "../bp_api/en_US_override.json"

const overrides = {
    en_US: en_US_override
}
const langs = {}
// TODO: Rewrite to use English patch en_US file
const allTextsFiles = import.meta.glob(".././bp_api/**/texts/*.json", { import: "default" })

console.log("Loading localizations...")
Object.entries(allTextsFiles)
    .filter(([key, value]) => key.match(/^(?!.*ja_JP).*global.*/) || key.match(/^(?=.*japan)(?=.*ja_JP).*$/))
    .forEach(async ([key, value]) => {
        const langCode = key.split("/").pop().replace(".json", "")
        const data = await value()
        langs[langCode] = data.reduce((acc, obj) => {
            acc[obj.name] = obj.texts.reduce((a, c) => {
                a[c.id] = c.text
                return a
            }, {})
            return acc
        }, {})


        // For other languages, use ja_JP as base.
        // TODO: Rewrite to accept 'publisher' param. There is an edge case where JP description is updated by EN is unchanged, causing a mismatch. For example, a skill description might be updated in BNO en_US, but not in AGS en_US.
        if (langCode !== "ja_JP") {
            const jpTextFile = await allTextsFiles["../bp_api/global/texts/ja_JP.json"]()
            console.log(jpTextFile.length)
            // Object.entries(jpTextFile.default).forEach(([ns, valuesObj]) => {
            //     console.log(ns)
            // })
            Object.entries(en_US_override).forEach(([ns, valuesObj]) => {
                Object.entries(valuesObj).forEach(([key, value]) => {
                    langs.en_US[ns][key] = value
                })
            })
        }
    })

export function getText(ns, id, lang) {
    lang ??= "ja_JP"
    if (!lang.includes("_")) lang = { en: "en_US", ja: "ja_JP" }[lang]
    return langs[lang][ns][id] || langs.ja_JP[ns][id] || ""
}

export function getCategory(ns, id, lang) {
    lang ??= "ja_JP"
    if (!lang.includes("_")) lang = { en: "en_US", ja: "ja_JP" }[lang]
    if (categories[lang][ns]) return categories[lang][ns][id] || categories[lang][ns].default
    return categories.ja_JP[ns][id] || categories.ja_JP[ns].default
}

export default langs