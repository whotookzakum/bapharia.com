import data from '$functions/enemies.js';
import { redirect } from '@sveltejs/kit';

export function entries() {
    const routes = data.map(item => {
        return {
            id: item.id
        }
    })
    return routes
}

export const prerender = true;

export function load({ params }) {
    // Redirect all enemy variants to the main entry id
    const enemyGroup = data.find(enemy => enemy.enemyVariantIds.includes(params.id) && enemy.enemyVariantIds[0] !== params.id)
    if (enemyGroup) {
        throw redirect(308, `/db/enemy/${enemyGroup.enemyVariantIds[0]}`)
    }
}