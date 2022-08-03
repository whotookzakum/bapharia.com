// Tactical Skills 2 Bottom
export const SKILL_TS_LAVA_IMPACT = {
    title: "Lava Impact",
    reqPts: ["2","3","6"],
    reqLv: ["10","15","22"],
    text: [
            "A forward-leap attack imbued with fire<br>Causes the ground around the impact to catch on fire, dealing continuous damage", 
            "Leap up to 2 times<br>After both attacks, the ground will catch fire", 
            "Leap up to 3 times<br>After all 3 attacks, the ground will catch fire"
    ],
    abil: [
        {
            title: "Pinpoint Attack",
            reqPts: "3",
            reqLv: "28",
            text: "Decreases the ground fire's size but increases its damage"
        },
        {
            title: "Progress",
            reqPts: "3",
            reqLv: "28",
            text: "Increases the duration of the ground fire"
        }
    ]
}