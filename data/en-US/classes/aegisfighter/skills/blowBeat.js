// Tactical Skills 2 Top
export const SKILL_AF_BLOW_BEAT = {
    title: "Blow Beat",
    reqPts: ["1","3","6"],
    reqLv: ["2","15","22"],
    text: [
            "An all-directional shockwave attack centered around yourself<br>Enemies that are hit will be provoked", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill power", 
            "When charged to the max, enemies that are hit will be drawn in towards you"],
    abil: [
        {
            title: "Wide Range",
            reqPts: "3",
            reqLv: "28",
            text: "Increases the skill's effective area"
        },
        {
            title: "Quick Charge",
            reqPts: "3",
            reqLv: "28",
            text: "Reduces the time required to reach max charge"
        }
    ]
}