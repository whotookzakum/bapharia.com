import categories from "./categories.json"
import { SUPPORTED_VERSIONS, LANG_CODES } from "../../src/lib/constants"
import en_US_override from "../bp_api/text_overrides/en_US.json"

const langs = {}
const allTextFiles = import.meta.glob("../bp_api/**/texts/*.json", { import: "default" })
const res = await fetch("https://raw.githubusercontent.com/mountaindewritos/BPTranslateFiles/main/loc.json")
const en_machine_translated = await res.json()

// Create { "bno": { "ja_JP": {}, "en_US": {} }, ... } 
for (const { publisher, locales } of SUPPORTED_VERSIONS) {
    langs[publisher] = {};
    for (const locale of locales) {
        const langCode = LANG_CODES[locale]; // "en" → "en_US"
        const isUnofficialTranslation = publisher === "bno" && locale === "en"
        const fileName = isUnofficialTranslation ? "ja_JP" : langCode
        const textFile = await allTextFiles[`../bp_api/${publisher}/texts/${fileName}.json`]();
        langs[publisher][langCode] = textFile.reduce((result, { name, texts }) => {
            result[name] = texts.reduce((acc, { id, text }) => {
                if (isUnofficialTranslation) {
                    // Use the manual translation if available. The key is the original Japanese text, so that changes/additions to translations don't go unnoticed.
                    if (en_US_override[name]) {
                        if (en_US_override[name][id]) {
                            acc[id] = en_US_override[name][id]
                        }
                        // If the namespace exists in the override file, it's likely intended to be manually translated. However, if the entry is missing (the original JP text was modified or newly added), warn the user and fallback to the machine translation.
                        // MountainDewritos' script can sometimes unintentionally delete some keys, so if they are missing, fallback to the original JP text.
                        else {
                            console.log("Manual translation missing:", langCode, name, id)
                            const machineTranslation = en_machine_translated.find(obj => obj.name === name).texts.find(obj => obj.id === id)?.text
                            if (typeof machineTranslation === "undefined") console.log("Machine translation missing:", langCode, name, id)
                            acc[id] = machineTranslation || text
                        }
                    }
                    // Otherwise use the machine translation
                    else {
                        const machineTranslation = en_machine_translated.find(obj => obj.name === name).texts.find(obj => obj.id === id)?.text
                        if (typeof machineTranslation === "undefined") console.log("Machine translation missing:", langCode, name, id)
                        acc[id] = machineTranslation || text
                    }
                }
                else {
                    acc[id] = text;
                }
                return acc;
            }, {});
            return result;
        }, {});
    }
}

export function getText(ns, id, lang, publisher) {
    publisher ??= SUPPORTED_VERSIONS[0].publisher
    lang ??= SUPPORTED_VERSIONS[0].locales[0]
    const langCode = LANG_CODES[lang]
    return langs[publisher][langCode][ns][id]
}

export function getCategory(ns, id, lang) {
    lang ??= SUPPORTED_VERSIONS[0].locales[0]
    const langCode = LANG_CODES[lang]
    return categories[langCode][ns][id] || categories[langCode][ns].default
}

export default langs