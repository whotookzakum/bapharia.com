// Tactical Skills 1 Bottom
export const SKILL_BA_HYPNO_BLAST = {
    title: "Hypno Blast",
    reqPts: ["2","3","6"],
    reqLv: ["10","14","21"],
    text: [
            "Fire an arrow that puts enemies to sleep, inflicting the Sleep status ailment", 
            "Adds piercing effect", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power"
    ],
    abil: [
        {
            title: "Damage Boost",
            reqPts: "3",
            reqLv: "27",
            text: "Increases skill power, but loses piercing effect"
        },
        {
            title: "Quick Drive",
            reqPts: "3",
            reqLv: "27",
            text: "Reduces the time required to reach max charge"
        }
    ]
}