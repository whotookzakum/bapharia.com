import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';
import adventureboards from "$functions/adventureboards"
import avatars from '$functions/avatarparts.js';
import costumes from '$functions/costumes.js';
import enemies from '$functions/enemies.js';
import gestures from '$functions/gestures.js';
import imagines from '$functions/imagines.js';
import items from '$functions/items.js';
import liquidMemories from '$functions/liquidmemories.js';
import maps from '$functions/maps.js';
import quests from '$functions/quests.js';
import skills from '$functions/skills.js';
import stampSets from '$functions/stampsets.js';
import tokens from '$functions/tokens.js';
import weapons from '$functions/weapons.js';

export const GET = async ({ params }) => {
    const hello = [adventureboards, avatars, costumes, enemies, gestures, imagines, items, liquidMemories, maps, quests, skills, stampSets, tokens, weapons].flat().map(entry => ({
        name: entry.name, thumb: entry.thumb, entryTypes: entry.entryTypes, subcategoryName: entry.subcategoryName, id: entry.id, NAME: "hi"
    }))
    
    return json(hello)
}