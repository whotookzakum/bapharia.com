// Tactical Skills 4 Bottom
export const SKILL_SC_FOLLOW_BULLET = {
    title: "Follow Bullet",
    reqPts: ["2","3","6"],
    reqLv: ["10","17","24"],
    text: [
            "Temporarily summons engram bullets that float around you<br>When using a tactical skill, the bullets will fire with the respective element", 
            "Increases skill duration", 
            "Reduces skill cooldown"
    ],
    abil: [
        {
            title: "Element Force",
            reqPts: "3",
            reqLv: "30",
            text: "Increases the damage of the engram bullets"
        },
        {
            title: "Element Escalate",
            reqPts: "3",
            reqLv: "30",
            text: "Increases rate of elemental charge accumulation from the engram bullets "
        }
    ]
}