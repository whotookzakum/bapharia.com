export const WEAPON_AF_RED_STEEL_BLADE = { 
    name: "Red Steel Blade", //鋼の赤刃
    type: "Sword", //剣（武器）
    icon: "images/crafting/sword4.png",
    image: "images/crafting/sword4L.png",
    level: "Starting Lv 1~4 (Max Lv: 20)", //初期
    element: "images/crafting/fire.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+143",
            /*STR*/"+3",
            /*VIT*/"+4",
            /*DEX*/"+2",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+26",
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
    recipe: ["Bahamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
    iconSrc: [iDung,iCombat,iRock],
    amt: ["5","20","7"],
    tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
    tooltipBg: [
        "",
        tooltipSoundless,
        tooltipSoundless],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: "images/crafting/firetooltip.png"
}