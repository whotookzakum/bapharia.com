// Tactical Skills 4 Top
export const SKILL_SC_CONCENTRATION = {
    title: "Concentration",
    reqPts: ["1","3","6"],
    reqLv: ["4","17","24"],
    text: [
            "Continuously recover EP over a period of time", 
            "Increases skill duration", 
            "Reduces skill cooldown"
    ],
    abil: [
        {
            title: "Regain",
            reqPts: "3",
            reqLv: "30",
            text: "Continuously recover HP over a period of time"
        },
        {
            title: "Energy Charge",
            reqPts: "3",
            reqLv: "30",
            text: "Recover EP when the skill is used"
        }
    ]
}