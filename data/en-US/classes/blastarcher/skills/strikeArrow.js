// Tactical Skills 1 Top
export const SKILL_BA_STRIKE_ARROW = {
    title: "Strike Arrow",
    reqPts: ["0","3","6"],
    reqLv: ["0","14","21"],
    text: [
            "Fire a high-damage arrow in a straight line", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
    ],
    abil: [
        {
            title: "Concentration",
            reqPts: "3",
            reqLv: "27",
            text: "Reduces the time required to reach max charge"
        },
        {
            title: "Full Power Shot",
            reqPts: "3",
            reqLv: "27",
            text: "Increases skill power but also increases time required to reach max charge"
        }
    ]
}