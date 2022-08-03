export const WEAPON_BA_BRILLIANT_THUNDERWING_BOW = { 
    name: "Brilliant Thunderwing Bow", //雷翼の豪弓
    type: "Bow", //弓（武器）
    icon: "images/crafting/bow5.png",
    image: "",
    level: "Starting Lv 1~5 (Max Lv: 25)", //初期
    element: "images/crafting/lightning.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+153",
            /*STR*/"+5",
            /*VIT*/"+0",
            /*DEX*/"+4",
            /*INT*/"+0",
            /*MND*/"+3",
            /*HP*/"+27",
           ],
    minStats: [
            /*ATK*/"+43",
            /*STR*/"+3",
            /*VIT*/"+0",
            /*DEX*/"+2",
            /*INT*/"+0",
            /*MND*/"+1",
            /*HP*/"+6",
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