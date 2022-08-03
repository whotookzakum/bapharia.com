// Tactical Skills 1 Bottom
export const SKILL_AF_SUNRISE_CHARGE = {
    title: "Sunrise Charge",
    reqPts: ["2","3","6"],
    reqLv: ["10","14","21"],
    text: [
            "Rush forward with your shield, successful attacks will release small Light elemental explosions<br>Can't be used during Guard Break", 
            "Adds the ability to chain an attack after the rush<br>After the attack, a medium-sized Light elemental explosion will occur", 
            "Adds the ability to chain up to 2 attacks<br>After the attack, a large-sized Light elemental explosion will occur"
    ],
    abil: [
        {
            title: "Deep Cuts",
            reqPts: "3",
            reqLv: "27",
            text: "Increases damage against enemies with elemental status ailments"
        },
        {
            title: "Sunlight",
            reqPts: "3",
            reqLv: "27",
            text: "Increases the rate of elemental charge accumulation"
        }
    ]
}