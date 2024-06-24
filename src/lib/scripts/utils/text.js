import categories from "./categories.json"
import en_US_override from "$bp_api/en_US_override.json"

const langs = {}

const allTextsFiles = import.meta.glob("/src/bp_api/**/texts/*.json", { import: "default" })

console.log("Transforming text files into objects...")
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

        // Manual translation overrides
        if (langCode === "en_US") {
            Object.entries(en_US_override).forEach(([ns, valuesObj]) => {
                Object.entries(valuesObj).forEach(([key, value]) => {
                    langs.en_US[ns][key] = value
                })
            })
        }
    })
console.log("Done")

export const allText = langs

export function getText(ns, id, lang) {
    // TEMP: Manual translations
    lang ??= "ja_JP"
    return langs[lang][ns][id] || langs.ja_JP[ns][id] || ""
}

export function getCategory(ns, id, lang) {
    lang ??= "ja_JP"
    if (categories[lang][ns]) return categories[lang][ns][id] || categories[lang][ns].default
    return categories.ja_JP[ns][id] || categories.ja_JP[ns].default
}