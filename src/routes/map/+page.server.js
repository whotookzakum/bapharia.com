import { redirect } from '@sveltejs/kit';

/** @type {import('../../(redirects)/map/$types').LayoutServerLoad} */
export function load({ locals }) {
    if (!locals.user) {
        throw redirect(307, '/map/Fld004');
    }
}