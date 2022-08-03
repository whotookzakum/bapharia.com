// Tactical Skills 1 Bottom
export const SKILL_TS_CRIMSON_BLOW = {
    title: "Crimson Blow",
    reqPts: ["2","3","6"],
    reqLv: ["10","14","21"],
    text: [
            "A fire elemental spin attack<br>Can hit up to 3 times", 
            "Reduces skill damage but increases maximum hits to 5 and increases the rate of elemental charge accumulation", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation"
    ],
    abil: [
        {
            title: "Rush Up",
            reqPts: "3",
            reqLv: "27",
            text: "Increases the rate of combo gauge accumulation"
        },
        {
            title: "Trance",
            reqPts: "3",
            reqLv: "27",
            text: "Increases the rate of elemental charge accumulation"
        }
    ]
}