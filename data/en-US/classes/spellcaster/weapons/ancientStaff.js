export const WEAPON_SC_ANCIENT_STAFF = { 
    name: "Ancient Staff", //往古の杖
    type: "Staff", //杖（武器）
    icon: "images/crafting/staff2.png",
    image: "",
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
            /*ATK*/"+48",
            /*STR*/"+0",
            /*VIT*/"+0",
            /*DEX*/"+2",
            /*INT*/"+3",
            /*MND*/"+1",
            /*HP*/"+5",
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