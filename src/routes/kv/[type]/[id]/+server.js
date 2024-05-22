import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';

export const GET = async ({ params }) => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    
    if (dev) {
        const allEntries = await import(`../../../../../functions/${params.type}.js`)
        const entry = allEntries.default.find(item => item.id === params.id)
        return json(entry)
    }   
}