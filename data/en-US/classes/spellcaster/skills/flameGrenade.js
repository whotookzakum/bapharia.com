// Tactical Skills 1 Bottom
export const SKILL_SC_FLAME_GRENADE = {
    title: "Flame Grenade",
    reqPts: ["2","3","6"],
    reqLv: ["10","14","21"],
    text: [
            "Launches a fire elemental bomb that explodes on impact", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
    ],
    abil: [
        {
            title: "Burst Plus",
            reqPts: "3",
            reqLv: "27",
            text: "Increases the skill's effective area"
        },
        {
            title: "Ignition",
            reqPts: "3",
            reqLv: "27",
            text: "Increases the rate of elemental charge accumulation"
        }
    ]
}