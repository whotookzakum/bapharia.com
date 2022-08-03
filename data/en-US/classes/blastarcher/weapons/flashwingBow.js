export const WEAPON_BA_FLASHWING_BOW = { 
    name: "Flashwing Bow", //閃翼の弓｀
    type: "Bow", //弓（武器）
    icon: "images/crafting/bow2.png",
    image: "images/crafting/bow2L.png",
    level: "Starting Lv 1~2 (Max Lv: 12)", //初期
    element: "",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+93",
            /*STR*/"+4",
            /*VIT*/"+0",
            /*DEX*/"+3",
            /*INT*/"+0",
            /*MND*/"+2",
            /*HP*/"+16",
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
    recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
    iconSrc: [iDung,iCombat,iFlower],
    amt: ["3","10","5"],
    tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
    tooltipBg: [
        "",
        tooltipAndra,
        tooltipAndra],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: ""
}