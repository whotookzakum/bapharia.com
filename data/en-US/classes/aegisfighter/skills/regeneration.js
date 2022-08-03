// Tactical Skills 4 Bottom
export const SKILL_AF_REGENERATION = {
    title: "Regeneration",
    reqPts: ["2","3","6"],
    reqLv: ["10","17","24"],
    text: [
            "Continuously recover HP over a period of time", 
            "Increases skill duration", 
            "Reduces skill cooldown"
    ],
    abil: [
        {
            title: "Healing Boost",
            reqPts: "3",
            reqLv: "30",
            text: "Increases the HP recovered by Regeneration"
        },
        {
            title: "Fortify",
            reqPts: "3",
            reqLv: "30",
            text: "Recover your shield gauge along with HP"
        }
    ]
}