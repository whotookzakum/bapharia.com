import data from '$functions/maps.js';

export function entries() {
    const routes = data.map(item => {
        return {
            id: item.id
        }
    })
    return routes
}

export const prerender = true;