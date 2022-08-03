export const IMAGINE_INNER_CARCON = { 
    name: "Carcon (mystery)",
    type: "<br>",
    image: "images/crafting/ii6L.png",
    level: "Starting Lv 1~1 (Max Lv: 35)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
    // 
    slot: ["slot","images/crafting/slot3.svg","Mystery"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+0",
            /*INT*/"+6",
            /*HP*/"+32",
            /*VIT*/"+5",
            /*MND*/"+6",
            /*ATK*/"+9",
            /*DEX*/"+5"
           ],
    minStats: [
            /*STR*/"+0",
            /*INT*/"+3",
            /*HP*/"+6",
            /*VIT*/"+2",
            /*MND*/"+3",
            /*ATK*/"+1",
            /*DEX*/"+2"
           ],
    recipe: ["Glowing Goblin's Nail","Pterosaur Fossil","<br>","240,000"],
    iconSrc: [iCombat,iRock,""],
    amt: ["10","35","<br>"],
    abilList: ["ATK increase","STR increase", "DEX increase"],
    tooltipText: ["Glowing Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]","<br>"],
    tooltipBg: [
        tooltipDragonclaw,
        tooltipDragonclaw,""],
    tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
}