import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import fs from "fs"

// Get en_US skill text, but with all the keys of ja_JP
export const GET = async ({ params, url }) => {
    const data = await import(`../../../../api/utils/text.js`)
    const overrideFile = await import(`../../../../api/bp_api/text_overrides/en_US.json`)
    const skills_translation = overrideFile.default.master_skill_data_text

    // If JP string has no manual translation, add it as a key to the translation file.
    Object.values(data.default.bno.ja_JP.master_skill_data_text).forEach(text => {
        if (!skills_translation[text]) skills_translation[text] = ""
    })

    // Sort so that blank strings come first
    const sorted = Object.entries(skills_translation)
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
    fs.writeFileSync(`./api/bp_api/text_overrides/en_US.json`, JSON.stringify({ ...overrideFile.default, master_skill_data_text: skills_translation }, null, 4))

    return json(sorted)
}

// NOTE: This would break compatibility with the English patch, as the in-game text needs ALL of the text translated.
// There may be a way to simplify the file and remove G1-G3 skill descriptions (since G4 includes the text for G1-G3), however ULT skills only have G1, and some passives only go up to G3 as of July 2024, so another method should be used, such as checking if the string exists within another string.
