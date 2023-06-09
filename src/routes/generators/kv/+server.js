import { json } from '@sveltejs/kit'
import { getText } from '../../graphql/functions/utils';
import API_weapons from "../../graphql/bp_server/japan/weapons.json";
import API_weaponStats from "../../graphql/bp_server/japan/weapon_status_levels.json";
import API_craftingRecipes from "../../graphql/bp_server/japan/craft.json";
import API_masterPerkPicks from "../../graphql/bp_server/japan/master_weapon_perk_picks.json";
import API_lotteries from "../../graphql/bp_server/japan/master_reward_lottery_groups.json";
import API_items from "../../graphql/bp_server/japan/items.json";
import API_weaponPerks from "../../graphql/bp_server/japan/weaponperks.json";
import API_perks from "../../graphql/bp_server/japan/perks.json";
import API_treasures from "../../graphql/bp_server/japan/treasures.json";
import API_enemies from "../../graphql/bp_server/japan/enemyparams.json";
import API_tokens from "../../graphql/bp_server/japan/token.json";
import API_stamps from "../../graphql/bp_server/japan/stamps.json";
import API_skills from "../../graphql/bp_server/japan/skill_data.json";
import API_maps from "../../graphql/bp_client/japan/maps.json";
import API_liquidMemories from "../../graphql/bp_server/japan/liquid_memory.json";
import API_accumulationLotteries from "../../graphql/bp_server/japan/liquid_memory_accumulate_lottery_table.json";
import CLIENT_itemIcons from "../../graphql/bp_client/japan/itemicons.json"
import API_imagine from "../../graphql/bp_server/japan/imagine.json";
import API_imagineParams from "../../graphql/bp_server/japan/imagine/param_level.json";
import API_imaginePerks from "../../graphql/bp_server/japan/imagine/perk_pick.json";
import API_imagineRecipes from "../../graphql/bp_server/japan/imagine/recepi.json";
import API_gestures from "../../graphql/bp_server/japan/emotes.json";
import API_adventureBoards from "../../graphql/bp_server/japan/master_adventure_board.json"
import API_costumes from "../../graphql/bp_server/japan/costume.json";
import API_avatars from "../../graphql/bp_server/japan/aestheParts.json";
import CLIENT_avatarIcons from "../../graphql/bp_client/japan/avataricons.json"

const data = {
    API_items, 
    API_enemies,
    API_weapons,
    API_weaponPerks,
    API_weaponStats,
    API_craftingRecipes,
    API_perks,
    API_masterPerkPicks,
    API_treasures,
    API_lotteries,
    API_tokens,
    API_stamps,
    API_maps,
    API_liquidMemories,
    API_skills,
    API_accumulationLotteries,
    CLIENT_itemIcons,
    API_imagine,
    API_imagineParams,
    API_imaginePerks,
    API_imagineRecipes,
    API_gestures,
    API_adventureBoards,
    API_costumes,
    API_avatars,
    CLIENT_avatarIcons
}

export const GET = async () => {
    const formattedData = Object.entries(data).map(([key, value]) => {
        return {
            key,
            value: JSON.stringify(value)
        }
    })

    return json(formattedData)
}