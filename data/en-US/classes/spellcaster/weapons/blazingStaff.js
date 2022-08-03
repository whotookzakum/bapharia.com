export const WEAPON_SC_BLAZING_STAFF = { 
    name: "Blazing Staff", //焼尽の杖
    type: "Staff", //杖（武器）
    icon: "images/crafting/staff4.png",
    image: "",
    level: "Starting Lv 1~4 (Max Lv: 20)", //初期
    element: "images/crafting/fire.png",
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
            /*ATK*/"+47",
            /*STR*/"+0",
            /*VIT*/"+3",
            /*DEX*/"+1",
            /*INT*/"+2",
            /*MND*/"+0",
            /*HP*/"+6",
           ],
    recipe: ["Bahamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
    iconSrc: [iDung,iCombat,iFlower],
    amt: ["5","20","7"],
    tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Elder Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
    tooltipBg: [
        "",
        tooltipSoundless,
        tooltipSoundless],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: "images/crafting/firetooltip.png"
}