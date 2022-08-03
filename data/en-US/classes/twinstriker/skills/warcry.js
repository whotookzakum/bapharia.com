// Tactical Skills 4 Top
export const SKILL_AF_WARCRY = {
    title: "Warcry",
    reqPts: ["1","3","6"],
    reqLv: ["4","17","24"],
    text: [
            "Temporarily applies the Super Armor self buff<br>(You will not flinch when hit)", 
            "Increases skill duration", 
            "Reduces skill cooldown"
    ],
    abil: [
        {
            title: "Berserk",
            reqPts: "3",
            reqLv: "30",
            text: "Applies Warcry to self and nearby party members"
        },
        {
            title: "Unbreakable Spirit",
            reqPts: "3",
            reqLv: "30",
            text: "Recover HP when the skill is used"
        }
    ]
}