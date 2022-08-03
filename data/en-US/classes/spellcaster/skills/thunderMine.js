// Tactical Skills 2 Bottom
export const SKILL_SC_THUNDER_MINE = {
    title: "Thunder Mine",
    reqPts: ["2","3","6"],
    reqLv: ["10","15","22"],
    text: [
            "Fire thunder mines that chase down nearby enemies<br>When the mines hit, deals area-of-effect lightning damage", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of thunder mines", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of thunder mines"
    ],
    abil: [
        {
            title: "Spread Out",
            reqPts: "3",
            reqLv: "28",
            text: "Increases the skill's effective area"
        },
        {
            title: "Escalation",
            reqPts: "3",
            reqLv: "28",
            text: "Increases EP consumption and skill power"
        }
    ]
}