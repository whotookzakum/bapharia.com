import { json } from '@sveltejs/kit'
import data from '../functions/skills'

export const GET = async () => {
    return json(data)
}