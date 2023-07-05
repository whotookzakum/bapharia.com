import { json } from '@sveltejs/kit'
import adventureboards from '../functions/adventureboards'

export const GET = async () => {
    return json(adventureboards)
}