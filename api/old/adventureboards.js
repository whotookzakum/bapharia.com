// TODO tasks & their rewards
// TODO where to get board (chest, quest)

// TODO Recommended board quests (in the same map) (panels[0].quest.quest_achievement_condition.map_id)
// TODO Search quests by description and return boards

import { getText, icons } from "../utils"
import boardData from "$bp_api/japan/master_adventure_board.json"
import boardPanelsData from "$bp_api/japan/master_adventure_board_panel.json"
import boardQuestsData from "$bp_api/japan/master_adventure_board_quest.json"

const adventureboards = () => boardData.map(board => {
    const name = getText("master_adventure_boards_text", board.name)
    const desc = getText("master_adventure_boards_text", board.desc)
    const category = getCategory(board.board_type)
    // const panels = getPanels(board.id)
    const thumb = icons.adventureboards[board.id]?.iconL

    return {
        ...board,
        name,
        desc,
        category,
        // panels


        // temp
        thumb,
        entryTypes: ["dummy"],
        subcategoryName: "None",
        name: {
            ja_JP: getText("master_adventure_boards_text", board.name, "ja_JP"),
            en_US: getText("master_adventure_boards_text", board.name, "en_US")
        }
    }
})

function getCategory(category) {
    switch (category) {
        case 0:
            return {
                ja_JP: "一般ボード",
                en_US: "General Adventure Board"
            }
        case 2:
            return {
                ja_JP: "冒険者ランクボード",
                en_US: "Adventurer Rank Board"
            }
    }
}

function getPanels(boardId) {
    return boardPanelsData.filter(panel => panel.board_id === boardId).map(panel => {
        const quest = boardQuestsData.find(quest => quest.id === panel.id)
        // condition_type 20 = kill
        // complete_value = amount

        if (quest) {
            quest.name = getText("master_adventure_board_quests_text", quest.quest_name)
            Object.keys(quest.name).forEach(lang => {
                quest.name[lang] = `${quest.name[lang]} x${quest.quest_achievement_condition.complete_value}`
            })
        }

        return {
            ...panel,
            quest
        }
    })
} 

export default adventureboards;