// Tactical Skills 2 Top
export const SKILL_TS_FALL_IMPACT = {
    title: "Fall Impact",
    reqPts: ["1","3","6"],
    reqLv: ["2","15","22"],
    text: [
            "A large forward-leap attack<br>Upon landing, shockwaves will damage the surrounding area", 
            "Enemies that are hit are more likely to get knocked down", // will BECOME easier to knock down (by successive hits) ..?
            "Increases the shockwave's effective area and skill power"],
    abil: [
        {
            title: "Overswing",
            reqPts: "3",
            reqLv: "28",
            text: "Increases skill's effective area"
        },
        {
            title: "Fatal Hit",
            reqPts: "3",
            reqLv: "28",
            text: "Increases the damage of the down attack"
        }
    ]
}