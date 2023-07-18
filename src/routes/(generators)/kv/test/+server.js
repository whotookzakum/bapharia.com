import { json } from '@sveltejs/kit'
import maps from '../functions/maps'

export const GET = async () => {
    return json(maps)
}