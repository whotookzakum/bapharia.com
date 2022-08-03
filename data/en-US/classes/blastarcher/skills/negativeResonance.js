// Tactical Skills 2 Bottom
export const SKILL_BA_NEGATIVE_RESONANCE = {
    title: "Negative Resonance",
    reqPts: ["2", "3", "6"],
    reqLv: ["10", "15", "22"],
    text: [
        "Fire a straight shot arrow<br>If the enemies that are hit have an elemental status ailment, the status ailment will be spread to nearby enemies",
        "Increases the range that the elemental status ailment can be spread",
        "Adds the ability to chain an additional attack after the first"
    ],
    abil: [
        {
            title: "Range Attack",
            reqPts: "3",
            reqLv: "28",
            text: "Successfully spreading elemental status ailments will deal additional damage"
        },
        {
            title: "Chain Infection",
            reqPts: "3",
            reqLv: "28",
            text: "Adds piercing effect"
        }
    ]
}