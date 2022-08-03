// Tactical Skills 3 Top
export const SKILL_SC_BLIZZARD = {
    title: "Blizzard",
    reqPts: ["1","3","6"],
    reqLv: ["3","16","23"],
    text: [
            "Summons a gale of ice at the designated spot<br>Applies ice damage to enemies within the skill's range", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill's effective area and duration", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill's effective area and duration"
    ],
    abil: [
        {
            title: "Rapid Charge",
            reqPts: "3",
            reqLv: "29",
            text: "Reduces the time required to reach max charge"
        },
        {
            title: "Long Range",
            reqPts: "3",
            reqLv: "29",
            text: "Increases the skill's effective area"
        }
    ]
}