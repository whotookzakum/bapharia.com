import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';

export const GET = async ({ params, url }) => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    if (dev) {
        const data = await import(`../../../../api/${params.type}.js`)
        const lang = url.searchParams.get("lang")
        return json(await data.default(lang))
    }
}