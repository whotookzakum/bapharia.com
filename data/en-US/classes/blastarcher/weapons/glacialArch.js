export const WEAPON_BA_GLACIAL_ARCH = { 
    name: "Glacial Arch", //グレイシャルアーチ
    type: "Bow", //弓（武器）
    icon: "images/crafting/bow6.png",
    image: "",
    level: "Starting Lv 1~6 (Max Lv: 30)", //初期
    element: "images/crafting/ice.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+172",
            /*STR*/"+3",
            /*VIT*/"+4",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+5",
            /*HP*/"+34",
           ],
    minStats: [
            /*ATK*/"+41",
            /*STR*/"+1",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+0",
            /*MND*/"+3",
            /*HP*/"+8",
           ],
    recipe: ["High Performance IC Core","Decorated Goblin's Staff","Driftwood Twig","1,200,000"],
    iconSrc: [iDung,iCombat,iFlower],
    amt: ["7","10","15"],
    tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Goblin Sage<br>Fiel Pond","Gather<br>Fiel Pond"],
    tooltipBg: [
        "",
        tooltipFiel,
        tooltipFiel],
    tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
    eleTooltip: "images/crafting/icetooltip.png"
}