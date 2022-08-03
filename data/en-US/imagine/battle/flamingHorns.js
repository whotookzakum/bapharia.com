export const IMAGINE_BATTLE_FLAMING_HORNS = { 
    name: "Flaming Horns",
    type: "Attack type",
    image: "images/map/flaminghorns.mp4",
    level: "Starting Lv 1~1 (Max Lv: 20)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // カイザーブラスト・炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Kaiser Blast (attack)","effectiveness", "493","159","Summons Flaming Horns' Imagine<br>who performs a Lightning elemental charge attack towards the target"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+2",
            /*INT*/"+3",
            /*HP*/"+23",
            /*VIT*/"+2",
            /*MND*/"+4",
            /*ATK*/"+12",
            /*DEX*/"+4"
           ],
    minStats: [
            /*STR*/"+1",
            /*INT*/"+2",
            /*HP*/"+7",
            /*VIT*/"+1",
            /*MND*/"+3",
            /*ATK*/"+4",
            /*DEX*/"+3"
           ],
    recipe: ["Flaming Horns' Idea","Blesio Nut","Goblin Sage's Mane","26,000"],
    iconSrc: [iElite,iFlower,iCombat],
    amt: ["3","3","3"],
    abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
    tooltipText: ["Flaming Horns<br>Divine Haven Hill","Gather<br>Divine Haven Hill","Goblin Sage<br>Soundless Foothills"],
    tooltipBg: [tooltipDivineLeft,
               tooltipDivine,
               tooltipSoundless],
    tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
}