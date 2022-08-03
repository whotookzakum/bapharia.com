// Tactical Skills 3 Bottom
export const SKILL_BA_DUST_FORCE = {
    title: "Dust Force",
    reqPts: ["2","3","6"],
    reqLv: ["10","16","23"],
    text: [
            "Launch an area attack at a designated spot<br>Continuously deals earth elemental damage and strengthens status ailments", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the duration of the damaging area", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the duration of the damaging area"
    ],
    abil: [
        {
            title: "Tempered Agility",
            reqPts: "3",
            reqLv: "29",
            text: "Reduces the time required to reach max charge"
        },
        {
            title: "Delay",
            reqPts: "3",
            reqLv: "29",
            text: "Applies the Speed Down status effect to enemies"
        }
    ]
}