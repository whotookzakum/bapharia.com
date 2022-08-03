export const WEAPON_SC_MISSIONARY = { 
    name: "Missionary", //ミショナリー
    type: "Staff", //杖（武器）
    icon: "images/crafting/staff3.png",
    image: "images/crafting/staff3L.png",
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
            /*ATK*/"+46",
            /*STR*/"+0",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+1",
            /*MND*/"+3",
            /*HP*/"+7",
           ],
    recipe: ["IC Core","Horned Goat's Horn","Smoky Moss","150,000"],
    iconSrc: [iDung,iCombat,iFlower],
    amt: ["5","20","7"],
    tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Horned Goat<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
    tooltipBg: [
        "",
        tooltipDivine,
        tooltipDivine],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: ""
}