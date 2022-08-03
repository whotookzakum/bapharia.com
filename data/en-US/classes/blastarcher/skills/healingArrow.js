// Tactical Skills 4 Top
export const SKILL_BA_HEALING_ARROW = {
    title: "Healing Arrow",
    reqPts: ["1","3","6"],
    reqLv: ["4","17","24"],
    text: [
            "Generates a healing field at the designated spot", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill's effective area and HP recovery amount", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill's effective area and HP recovery amount"
    ],
    abil: [
        {
            title: "Scale Up",
            reqPts: "3",
            reqLv: "30",
            text: "Increases the skill's effective area"
        },
        {
            title: "Snipe Heal",
            reqPts: "3",
            reqLv: "30",
            text: "Reduces the skill's effective area but increases HP recovery"
        }
    ]
}