// Tactical Skills 2 Top
export const SKILL_SC_LIGHTNING = {
    title: "Lightning",
    reqPts: ["1","3","6"],
    reqLv: ["2","15","22"],
    text: [
            "A lightning elemental attack that hits straight ahead<br>Fires 3 lightning strikes that pierce enemies", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of lightning strikes", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of lightning strikes"],
    abil: [
        {
            title: "Escalation",
            reqPts: "3",
            reqLv: "28",
            text: "Increases EP consumption and skill power"
        },
        {
            title: "EP Saver",
            reqPts: "3",
            reqLv: "28",
            text: "Reduces amount of EP consumed"
        }
    ]
}