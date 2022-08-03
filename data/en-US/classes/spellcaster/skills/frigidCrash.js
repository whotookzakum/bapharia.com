// Tactical Skills 3 Bottom
export const SKILL_SC_FRIGID_CRASH = {
    title: "Frigid Crash",
    reqPts: ["2","3","6"],
    reqLv: ["10","16","23"],
    text: [
            "Drops an ice block at the designated spot<br>Applies ice damage to enemies within the skill's range", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of ice blocks", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of ice blocks"
    ],
    abil: [
        {
            title: "Wide Range",
            reqPts: "3",
            reqLv: "29",
            text: "Increases the skill's effective area"
        },
        {
            title: "Pierce Cast",
            reqPts: "3",
            reqLv: "29",
            text: "Reduces the skill's effective area but increases skill power"
        }
    ]
}