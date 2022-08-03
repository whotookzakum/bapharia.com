export const WEAPON_TS_CLIFF_CRUSHER = { 
    name: "Cliff Crusher", //懸崖崩し
    type: "Axe", //斧（武器）
    icon: "images/crafting/axe5.png",
    image: "images/crafting/axe5L.png",
    level: "Starting Lv 1~5 (Max Lv: 25)", //初期
    element: "images/crafting/lightning.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+188",
            /*STR*/"+5",
            /*VIT*/"+0",
            /*DEX*/"+4",
            /*INT*/"+0",
            /*MND*/"+3",
            /*HP*/"+28",
           ],
    minStats: [
            /*ATK*/"+52",
            /*STR*/"+3",
            /*VIT*/"+0",
            /*DEX*/"+2",
            /*INT*/"+0",
            /*MND*/"+1",
            /*HP*/"+7",
           ],
    recipe: ["Firm Dragon Bone Fragment","Ogre Horn","Meteorite Fragment","500,000"],
    iconSrc: [iDung,iCombat,iRock],
    amt: ["6","5","10"],
    tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Ogre<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
    tooltipBg: [
        "",
        tooltipCalmEve,
        tooltipCalmEve],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: "images/crafting/lightningtooltip.png"
}