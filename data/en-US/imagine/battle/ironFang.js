export const IMAGINE_BATTLE_IRON_FANG = { 
    name: "Iron Fang",
    type: "Attack type",
    image: "images/map/ironfang.mp4",
    level: "Starting Lv 1~1 (Max Lv: 20)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // マウンテンスロー・鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Mountain Throw (attack)","effectiveness", "524","169","Summons Iron Fang's Imagine<br>who throws enemies into the air with its large fangs"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+4",
            /*INT*/"+3",
            /*HP*/"+22",
            /*VIT*/"+4",
            /*MND*/"+2",
            /*ATK*/"+13",
            /*DEX*/"+2"
           ],
    minStats: [
            /*STR*/"+3",
            /*INT*/"+2",
            /*HP*/"+7",
            /*VIT*/"+3",
            /*MND*/"+1",
            /*ATK*/"+4",
            /*DEX*/"+1"
           ],
    recipe: ["Iron Fang's Idea","Beartree Leaf","Goblin Mane","20,000"],
    iconSrc: [iElite,iFlower,iCombat],
    amt: ["3","3","3"],
    abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
    tooltipText: ["Iron Fang<br>Andra Basin","Gather<br>Divine Haven Hill","Goblin<br>Minster hills"],
    tooltipBg: [
        tooltipAndra,
        tooltipDivine,
        tooltipMinster],
    tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
}