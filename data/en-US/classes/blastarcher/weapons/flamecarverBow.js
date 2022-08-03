export const WEAPON_BA_FLAMECARVER_BOW = { 
    name: "Flamecarver Bow", //機跡の炎刻弓｀
    type: "Bow", //弓（武器）
    icon: "images/crafting/bow4.png",
    image: "",
    level: "Starting Lv 1~4 (Max Lv: 20)", //初期
    element: "images/crafting/fire.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+129",
            /*STR*/"+3",
            /*VIT*/"+4",
            /*DEX*/"+2",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+24",
           ],
    minStats: [
            /*ATK*/"+42",
            /*STR*/"+2",
            /*VIT*/"+3",
            /*DEX*/"+1",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+7",
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