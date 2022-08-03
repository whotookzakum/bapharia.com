export const WEAPON_AF_SCALECLAW_SWORD = { 
    name: "Scaleclaw Sword", //鋼の赤刃
    type: "Sword", //剣（武器）
    icon: "images/crafting/sword5.png",
    image: "",
    level: "Starting Lv 1~5 (Max Lv: 25)", //初期
    element: "images/crafting/lightning.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+169",
            /*STR*/"+5",
            /*VIT*/"+0",
            /*DEX*/"+4",
            /*INT*/"+0",
            /*MND*/"+3",
            /*HP*/"+30",
           ],
    minStats: [
            /*ATK*/"+48",
            /*STR*/"+3",
            /*VIT*/"+0",
            /*DEX*/"+2",
            /*INT*/"+0",
            /*MND*/"+1",
            /*HP*/"+8",
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