import { json } from '@sveltejs/kit'
import dungeondrops from '../functions/dungeondrops'

export const GET = async () => {
    return json(dungeondrops)
}