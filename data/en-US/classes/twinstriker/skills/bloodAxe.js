// Tactical Skills 4 Bottom
export const SKILL_TS_BLOOD_AXE = {
    title: "Blood Axe",
    reqPts: ["2","3","6"],
    reqLv: ["10","17","24"],
    text: [
            "Temporarily applies an HP Drain self buff<br>(A portion of damage dealt will be restored as HP)", 
            "Increases skill duration", 
            "Reduces skill cooldown"
    ],
    abil: [
        {
            title: "Inspire",
            reqPts: "3",
            reqLv: "30",
            text: "Applies Blood Axe to self and nearby party members"
        },
        {
            title: "Selfish",
            reqPts: "3",
            reqLv: "30",
            text: "Increases the amount of HP recovered when damaging enemies"
        }
    ]
}