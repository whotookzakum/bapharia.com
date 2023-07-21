import { json } from '@sveltejs/kit'
import data from '../functions/quests'

export const GET = async () => {
    return json(data)
}