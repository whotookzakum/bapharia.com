// Tactical Skills 4 Bottom
export const SKILL_BA_HUNTERS_SPIRIT = {
    title: "Hunter's Spirit",
    reqPts: ["2","3","6"],
    reqLv: ["10","17","24"],
    text: [
            "Temporarily applies the Quick Interval status effect on yourself<br>(Reduces regular/tactical skill cooldowns)", 
            "Increases skill duration", 
            "Reduces skill cooldown"
    ],
    abil: [
        {
            title: "Signal Flare",
            reqPts: "3",
            reqLv: "30",
            text: "Applies Hunter's Spirit to nearby party members"
        },
        {
            title: "Sharpness",
            reqPts: "3",
            reqLv: "30",
            text: "Temporarily apply the ATK UP status effect"
        }
    ]
}