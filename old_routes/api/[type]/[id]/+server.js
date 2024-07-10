import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';

export const GET = async ({ params, url }) => {
    // const data = await import(`../../../../../api/json/${params.type}.json`)
    // const entries = await data.default
    // const entry = entries.find(e => e.id == params.id || e.skill_id == params.id)
    // return json(entry)

    // if (!dev) {

    // }
    
    if (dev) {
        const lang = url.searchParams.get("lang")
        const file = await import(`../../../../../api/${params.type}.js`)
        const entry = await file.getEntry(params.id, lang)
        return json(entry)
    }
}