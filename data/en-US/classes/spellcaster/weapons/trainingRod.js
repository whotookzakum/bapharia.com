export const WEAPON_SC_TRAINING_ROD = { 
    name: "Training Rod", //トレーニングロッド
    type: "Staff", //杖（武器）
    icon: "images/crafting/staff1.png",
    image: "",
    level: "Starting Lv 1~1 (Max Lv: 7)", //初期
    element: "",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+78",
            /*STR*/"+0",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+12",
           ],
    minStats: [
            /*ATK*/"+47",
            /*STR*/"+0",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+6",
           ],
    recipe: ["Purchase at weapon shop","<br>","<br>","0"],
    // Icon to show on tooltip
    iconSrc: ["images/map/weapon.png","",""],
    amt: ["","",""],
    tooltipText: ["Weapon Shop<br>Asterleeds","",""],
    tooltipBg: [
        tooltipWepShop,
        "",
        ""],
    // The transformation
    tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
    eleTooltip: ""
}