// Tactical Skills 1 Top
export const SKILL_AF_SHIELD_CHARGE = {
    title: "Shield Charge",
    reqPts: ["0","3","6"],
    reqLv: ["0","14","21"],
    text: [
            "Rush forward with your shield, stunning all enemies that are hit<br>Can't be used during Guard Break", 
            "Adds the ability to chain an attack after the rush", 
            "Adds the ability to chain up to 2 attacks"
    ],
    abil: [
        {
            title: "Pursuit",
            reqPts: "3",
            reqLv: "27",
            text: "Increase damage of the downward attack"
        },
        {
            title: "Iron Wall",
            reqPts: "3",
            reqLv: "27",
            text: "Temporarily increase your DEF"
        }
    ]
}