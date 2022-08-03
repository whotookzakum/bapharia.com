export const WEAPON_AF_FANGED_SWORD = { 
    name: "Fanged Sword", //爪牙剣
    type: "Sword", //剣（武器）
    icon: "images/crafting/sword2.png",
    image: "images/crafting/sword2L.png",
    level: "Starting Lv 1~2 (Max Lv: 12)", //初期
    element: "",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+103",
            /*STR*/"+4",
            /*VIT*/"+0",
            /*DEX*/"+3",
            /*INT*/"+0",
            /*MND*/"+2",
            /*HP*/"+18",
           ],
    minStats: [
            /*ATK*/"+48",
            /*STR*/"+3",
            /*VIT*/"+0",
            /*DEX*/"+2",
            /*INT*/"+0",
            /*MND*/"+1",
            /*HP*/"+8",
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