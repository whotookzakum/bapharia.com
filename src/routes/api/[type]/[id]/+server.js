import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';

export const GET = async ({ params, url }) => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    
    if (dev) {
        const lang = url.searchParams.get("lang")
        const file = await import(`../../../../../scripts/api/${params.type}.js`)
        const entry = await file.getEntry(params.id, lang)
        return json(entry)
    }
}