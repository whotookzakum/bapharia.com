export const WEAPON_TS_MIST_CUTTER = { 
    name: "Mist Cutter", //霧払い
    type: "Axe", //斧（武器）
    icon: "images/crafting/axe2.png",
    image: "images/crafting/axe2L.png",
    level: "Starting Lv 1~2 (Max Lv: 12)", //初期
    element: "",
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
            /*ATK*/"+52",
            /*STR*/"+3",
            /*VIT*/"+0",
            /*DEX*/"+2",
            /*INT*/"+0",
            /*MND*/"+1",
            /*HP*/"+7",
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