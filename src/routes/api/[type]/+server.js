import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';
import fs from "fs"

export const GET = async ({ params, url }) => {
    // const data = await import(`../../../../api/json/${params.type}.json`)
    // return json(await data.default)
    // if (!dev) {
    //     if (fs.existsSync(`./api/json/${params.type}.json`)) {
    //         const data = await import(`../../../../api/json/${params.type}.json`)
    //         return json(data.default)
    //     }
    //     else {
    //         const data = await import(`../../../../api/${params.type}.js`)
    //         fs.writeFileSync(`./api/json/${params.type}.json`, JSON.stringify(data.default()))
    //         return json(await data.default(lang))
    //     }
    // }
    if (dev) {
        const data = await import(`../../../../api/${params.type}.js`)
        const lang = url.searchParams.get("lang")
        return json(await data.default(lang))
    }
}