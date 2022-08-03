export const WEAPON_TS_DUAL_RASTER = { 
    name: "Dual Raster", //デュアルラスター
    type: "Axe", //斧（武器）
    icon: "images/crafting/axe3.png",
    image: "images/crafting/axe3L.png",
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
            /*ATK*/"+50",
            /*STR*/"+1",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+3",
            /*HP*/"+9",
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