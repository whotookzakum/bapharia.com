import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import fs from "fs"

// Get en_US skill text, but with all the keys of ja_JP
export const GET = async ({ params, url }) => {
    const data = await import(`../../../../api/utils/text.js`)
    const en = Object.entries(data.default.ja_JP.master_skill_data_text)
        .reduce((acc, [key, str]) => {
            const translation = data.default.en_US.master_skill_data_text[key] ?? str
            acc[key] = translation.replaceAll("：", ": ")
            return acc
        }, {})

    const overrideFile = await import(`../../../../api/bp_api/en_US_override.json`)
    fs.writeFileSync(`./api/bp_api/en_US_override.json`, JSON.stringify({ ...overrideFile.default, master_skill_data_text: en }, null, 4))

    return json(en)
}