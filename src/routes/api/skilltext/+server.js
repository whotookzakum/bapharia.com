import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import fs from "fs"

// Get en_US skill text, but with all the keys of ja_JP
export const GET = async ({ params, url }) => {
    const data = await import(`../../../../api/utils/text.js`)
    const overrideFile = await import(`../../../../api/bp_api/text_overrides/en_US.json`)

    // Get all possible strings from JP and assign them as keys, with the values being the manual translation, if it exists.
    const translation = Object.values(data.default.bno.ja_JP.master_skill_data_text).reduce((acc, key) => {
        const manualTranslation = overrideFile.default.master_skill_data_text[key]
        acc[key] = manualTranslation ?? ""
        return acc
    }, {})

    // Sort so that blank strings come first
    const sorted = Object.entries(translation)
        .sort(([_, valueA], [__, valueB]) => {
            if (valueA === '' && valueB !== '') return -1;
            if (valueA !== '' && valueB === '') return 1;
            return 0;
        })
        .reduce((acc, [key, value]) => {
            acc[key] = value
            return acc
        }, {})

    // Overwrite existing en_US override file with the new one, adding any missing Japanese keys.
    fs.writeFileSync(`./api/bp_api/text_overrides/en_US.json`, JSON.stringify({ ...overrideFile.default, master_skill_data_text: translation }, null, 4))

    return json(sorted)
}

// NOTE: This would break compatibility with the English patch, as the in-game text needs ALL of the text translated.
// There may be a way to simplify the file and remove G1-G3 skill descriptions (since G4 includes the text for G1-G3), however ULT skills only have G1, and some passives only go up to G3 as of July 2024, so another method should be used, such as checking if the string exists within another string.
