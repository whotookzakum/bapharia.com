import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';
import fs from "fs"
import { SUPPORTED_PUBLISHERS, SUPPORTED_LANGS } from "$lib/constants"

export const GET = async ({ params, url }) => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    if (dev) {
        const files = import.meta.glob("../../../../api/*.js", { import: "default", eager: true })

        SUPPORTED_PUBLISHERS.forEach(publisher => {
            SUPPORTED_LANGS.forEach(lang => {
                Object.entries(files).forEach(async ([path, resolver]) => {
                    const fileName = path.split("/").pop().split(".")[0]
                    console.log(`${publisher}/${lang}:`, fileName)
                    if (!fs.existsSync(`./api/json/${publisher}/${lang}`)){
                        fs.mkdirSync(`./api/json/${publisher}/${lang}`, { recursive: true });
                    }
                    fs.writeFileSync(`./api/json/${publisher}/${lang}/${fileName}.json`, JSON.stringify(await resolver(lang)))
                })
            })
        })

        return json({})
    }
}