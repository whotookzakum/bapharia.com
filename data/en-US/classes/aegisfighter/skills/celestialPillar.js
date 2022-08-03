// Tactical Skills 2 Bottom
export const SKILL_AF_CELESTIAL_PILLAR = {
    title: "Celestial Pillar",
    reqPts: ["2","3","6"],
    reqLv: ["10","15","22"],
    text: [
            "Summons a pillar of light centered on you<br>Continuously applies Light elemental damage to enemies within the skill's range", 
            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation", 
            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation"
    ],
    abil: [
        {
            title: "Starlight",
            reqPts: "3",
            reqLv: "28",
            text: "Increases the rate of Light elemental charge accumulation"
        },
        {
            title: "Instantaneous",
            reqPts: "3",
            reqLv: "28",
            text: "Reduces the duration of the Light pillars and increases hit count"
        }
    ]
}