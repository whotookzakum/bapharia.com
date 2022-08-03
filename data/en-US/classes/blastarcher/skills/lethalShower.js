// Tactical Skills 3 Top
export const SKILL_BA_LETHAL_SHOWER = {
    title: "Lethal Shower",
    reqPts: ["1","3","6"],
    reqLv: ["3","16","23"],
    text: [
            "Rains down arrows at the designated spot<br>Continuously damages enemies within the skill's effective area", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill's effective area and skill power", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases skill's effective area and skill power"
    ],
    abil: [
        {
            title: "Concentrated Rainstorm",
            reqPts: "3",
            reqLv: "29",
            text: "Reduces the skill's effective area but increases skill power"
        },
        {
            title: "Acceleration",
            reqPts: "3",
            reqLv: "29",
            text: "Reduces the time required to reach max charge"
        }
    ]
}