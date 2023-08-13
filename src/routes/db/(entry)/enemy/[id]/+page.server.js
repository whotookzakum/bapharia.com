import data from '../../../../kv/functions/enemies.js';

export function entries() {
    const routes = data.map(item => {
        return {
            id: item.id
        }
    })
    return routes
}

export const prerender = true;



// import { redirect } from '@sveltejs/kit';

// /** @type {import('./$types.js').LayoutServerLoad} */
// export function load({ locals }) {
//     if (!locals.user) {
//         throw redirect(307, 'https://discord.gg/ZKwhn3a4yH');
//     }
// }