// Tactical Skills 1 Top
export const SKILL_TS_BRUTAL_BLOW = {
    title: "Brutal Blow",
    reqPts: ["0","3","6"],
    reqLv: ["0","14","21"],
    text: [
            "A wide ranged spin attack in the forward direction", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill power", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases skill power"
    ],
    abil: [
        {
            title: "Absorber",
            reqPts: "3",
            reqLv: "27",
            text: "Recover a portion of the damage dealt as HP"
        },
        {
            title: "Fighting Spirit",
            reqPts: "3",
            reqLv: "27",
            text: "Consumes combo gauge when the skill is used to increase skill power"
        }
    ]
}