export const IMAGINE_BATTLE_SAPPHIRE_TROT = { 
    name: "Sapphire Trot",
    type: "Attack type",
    image: "images/map/sapphiretrot.mp4",
    level: "Starting Lv 1~1 (Max Lv: 20)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // 落石牙・サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Stone Fang Drop (attack)","effectiveness", "483","156","Summons Sapphire Trot's Imagine<br>who lunges at an enemy and bites them"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+3",
            /*INT*/"+4",
            /*HP*/"+19",
            /*VIT*/"+3",
            /*MND*/"+4",
            /*ATK*/"+10",
            /*DEX*/"+4"
           ],
    minStats: [
            /*STR*/"+2",
            /*INT*/"+3",
            /*HP*/"+6",
            /*VIT*/"+2",
            /*MND*/"+3",
            /*ATK*/"+3",
            /*DEX*/"+3"
           ],
    recipe: ["Sapphire Trot's Idea","Andra Cedar Twig","Elder Goblin's Mane","25,000"],
    iconSrc: [iElite,iFlower,iCombat],
    amt: ["3","3","3"],
    abilList: ["Crit rate increase","DEX increase", "<br>"],
    tooltipText: ["Sapphire Trot<br>Divine Haven Hill","Gather<br>Minster Hills","Elder Goblin<br>Andra Basin"],
    tooltipBg: [tooltipDivine,
                tooltipMinster,
                tooltipAndra],
    tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
}