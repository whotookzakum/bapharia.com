import { json } from '@sveltejs/kit'
import data from '../functions/enemies'

export const GET = async () => {
    return json(data)
}