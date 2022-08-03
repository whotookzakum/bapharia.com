export const WEAPON_SC_OLD_DRAGONS_STAFF = { 
    name: "Old Dragon's Staff", //古竜の杖
    type: "Staff", //杖（武器）
    icon: "images/crafting/staff5.png",
    image: "",
    level: "Starting Lv 1~5 (Max Lv: 25)", //初期
    element: "images/crafting/lightning.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+174",
            /*STR*/"+0",
            /*VIT*/"+0",
            /*DEX*/"+4",
            /*INT*/"+5",
            /*MND*/"+3",
            /*HP*/"+26",
           ],
    minStats: [
            /*ATK*/"+48",
            /*STR*/"+0",
            /*VIT*/"+0",
            /*DEX*/"+2",
            /*INT*/"+3",
            /*MND*/"+1",
            /*HP*/"+5",
           ],
    recipe: ["Firm Dragon Bone Fragment","Glowing Tyrant Boar Fang","Boule Fruit","500,000"],
    iconSrc: [iDung,iCombat,iFlower],
    amt: ["6","10","10"],
    tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
    tooltipBg: [
        "",
        tooltipCalmEve,
        tooltipCalmEve],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: "images/crafting/lightningtooltip.png"
}