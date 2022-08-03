export const WEAPON_AF_TOWERS_BLADE = { 
    name: "Tower's Blade", //タワーズブレイド
    type: "Sword", //剣（武器）
    icon: "images/crafting/sword3.png",
    image: "images/crafting/sword3L.png",
    level: "Starting Lv 1~4 (Max Lv: 20)", //初期
    element: "",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+?",
            /*STR*/"+?",
            /*VIT*/"+?",
            /*DEX*/"+?",
            /*INT*/"+?",
            /*MND*/"+?",
            /*HP*/"+?",
           ],
    minStats: [
            /*ATK*/"?",
            /*STR*/"+?",
            /*VIT*/"+?",
            /*DEX*/"+?",
            /*INT*/"+?",
            /*MND*/"+?",
            /*HP*/"+?",
           ],
    recipe: ["IC Core","Highland Fox Claw","Baha Ore","150,000"],
    iconSrc: [iDung,iCombat,iRock],
    amt: ["5","20","7"],
    tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Highland Fox<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
    tooltipBg: [
        "",
        tooltipDivine,
        tooltipDivine],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: ""
}