// Tactical Skills 4 Top
export const SKILL_AF_FORTRESS = {
    title: "Fortress",
    reqPts: ["1","3","6"],
    reqLv: ["4","17","24"],
    text: [
            "Temporarily grants  Shield Up status effect<br>Can't be used during Guard Break", 
            "Increases skill duration", 
            "Reduces skill cooldown"
    ],
    abil: [
        {
            title: "Unison",
            reqPts: "3",
            reqLv: "30",
            text: "Increases counter attack power while skill is in effect"
        },
        {
            title: "Thorns",
            reqPts: "3",
            reqLv: "30",
            text: "Successful guards while the skill is in effect will cause an explosion, applying Light elemental damage to surrounding enemies"
        }
    ]
}