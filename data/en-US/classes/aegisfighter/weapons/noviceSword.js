export const WEAPON_AF_NOVICE_SWORD = { 
    name: "Novice Sword", //ノービスソード
    type: "Sword", //剣（武器）
    icon: "images/crafting/sword1.png",
    image: "images/crafting/sword1L.png",
    level: "Starting Lv 1~1 (Max Lv: 7)", //初期
    element: "",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+77",
            /*STR*/"+0",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+14",
           ],
    minStats: [
            /*ATK*/"+47",
            /*STR*/"+0",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+0",
            /*HP*/"+9",
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