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
        const [first, second] = params.path.split("/")
        const id = second && parseInt(second)
        
        if (id) {
            const file = await import(`../../../../api/${first}.js`)
            const entry = await file.getEntry(id)
            return json(entry)
        }
        
        else if (second) {
            const file = await import(`../../../../api/${first}/${second}.js`)
            return json(await file.default())
        }

        const file = await import(`../../../../api/${first}.js`)
        return json(await file.default())
    }
}