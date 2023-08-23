import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';

export const GET = async ({ params }) => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    
    if (dev) {
        const data = await import(`../../../../functions/${params.id}.js`)
        return json(data.default)
    }
}