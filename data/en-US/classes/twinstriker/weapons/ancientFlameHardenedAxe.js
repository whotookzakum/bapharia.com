export const WEAPON_TS_ANCIENT_FLAME_HARDENED_AXE = { 
    name: "Ancient Flame-hardened Axe", //古代の火打ち斧
    type: "Axe", //斧（武器）
    icon: "images/crafting/axe4.png",
    image: "images/crafting/axe4L.png",
    level: "Starting Lv 1~4 (Max Lv: 20)", //初期
    element: "images/crafting/fire.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+158",
            /*STR*/"+3",
            /*VIT*/"+4",
            /*DEX*/"+2",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+25",
           ],
    minStats: [
            /*ATK*/"+51",
            /*STR*/"+2",
            /*VIT*/"+3",
            /*DEX*/"+1",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+8",
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