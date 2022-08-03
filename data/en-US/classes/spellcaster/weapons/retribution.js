export const WEAPON_SC_RETRIBUTION = { 
    name: "Retribution", //リトリビューション
    type: "Staff", //杖（武器）
    icon: "images/crafting/staff6.png",
    image: "",
    level: "Starting Lv 1~6 (Max Lv: 30)", //初期
    element: "images/crafting/ice.png",
    slotCount: ["Slots", "?"], //スロット数
    stats: [/*ATK*/"+195",
            /*STR*/"+0",
            /*VIT*/"+4",
            /*DEX*/"+0",
            /*INT*/"+3",
            /*MND*/"+5",
            /*HP*/"+33",
           ],
    minStats: [
            /*ATK*/"+46",
            /*STR*/"+0",
            /*VIT*/"+2",
            /*DEX*/"+0",
            /*INT*/"+1",
            /*MND*/"+3",
            /*HP*/"+7",
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