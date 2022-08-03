export const WEAPON_AF_SHARP_EDGED_SWORD = { 
    name: "Sharp Edged Sword", //鋭刃剣
    type: "Sword", //剣（武器）
    icon: "images/crafting/sword7.png",
    image: "",
    level: "Starting Lv 1~7 (Max Lv: 35)", //初期
    element: "images/crafting/earth.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+218",
            /*STR*/"+5",
            /*VIT*/"+6",
            /*DEX*/"+4",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+41",
           ],
    minStats: [
            /*ATK*/"+47",
            /*STR*/"+2",
            /*VIT*/"+3",
            /*DEX*/"+1",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+9",
           ],
    recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
    iconSrc: [iDung,iCombat,iRock],
    amt: ["8","5","20"],
    tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
    tooltipBg: [
        "",
        tooltipDragonclaw,
        tooltipDragonclaw],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: "images/crafting/earthtooltip.png"
}