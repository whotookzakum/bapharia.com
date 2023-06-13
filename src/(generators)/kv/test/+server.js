import { json } from '@sveltejs/kit'
import quests from '../functions/quests'

export const GET = async () => {
    return json(quests)
}