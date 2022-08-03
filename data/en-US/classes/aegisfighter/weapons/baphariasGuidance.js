export const WEAPON_AF_BAPHARIAS_GUIDANCE = { 
    name: "Bapharia's Guidance", //バファリアの標
    type: "Sword", //剣（武器）
    icon: "images/crafting/sword6.png",
    image: "images/crafting/sword6L.png",
    level: "Starting Lv 1~6 (Max Lv: 30)", //初期
    element: "images/crafting/ice.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+190",
            /*STR*/"+3",
            /*VIT*/"+4",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+5",
            /*HP*/"+37",
           ],
    minStats: [
            /*ATK*/"+46",
            /*STR*/"+1",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+3",
            /*HP*/"+10",
           ],
    recipe: ["High Performance IC Core","Kaiser Elk Horn","Shivering Copper","1,200,000"],
    iconSrc: [iDung,iCombat,iRock],
    amt: ["7","15","15"],
    tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Kaiser Elk<br>Fiel Pond","Gather<br>Fiel Pond"],
    tooltipBg: [
        "",
        tooltipFiel,
        tooltipFiel],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: "images/crafting/icetooltip.png"
}