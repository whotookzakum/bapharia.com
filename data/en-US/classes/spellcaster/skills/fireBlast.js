// Tactical Skills 1 Top
export const SKILL_SC_FIRE_BLAST = {
    title: "Fire Blast",
    reqPts: ["0","3","6"],
    reqLv: ["0","14","21"],
    text: [
            "A single long range fire elemental attack", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
    ],
    abil: [
        {
            title: "Quick Charge",
            reqPts: "3",
            reqLv: "27",
            text: "Reduces the time required to reach max charge"
        },
        {
            title: "Element Up",
            reqPts: "3",
            reqLv: "27",
            text: "Increases the rate of elemental charge accumulation"
        }
    ]
}