import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';

export const GET = async ({ params, url }) => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    if (dev) {
        const data = await import(`../../../../api/utils/text.js`)
        const lang = url.searchParams.get("lang") ?? "ja_JP"
        return json(await data.allText[lang])
    }
}