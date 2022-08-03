export const IMAGINE_BATTLE_FEROCIOUS_GOLD = { 
    name: "Ferocious Gold",
    type: "Attack type",
    image: "images/map/ferociousgold.mp4",
    level: "Starting Lv 1~1 (Max Lv: 30)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // デスタックル・猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Death Tackle (attack)","effectiveness", "696","166","Summons Ferocious Gold's Imagine<br>who performs a charge attack towards the target"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+5",
            /*INT*/"+4",
            /*HP*/"+?",
            /*VIT*/"+5",
            /*MND*/"+3",
            /*ATK*/"+18",
            /*DEX*/"+3"
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
    recipe: ["Ferocious Gold's Idea","Nectar Seed","Ferocious Beast's Tail","85,000"],
    iconSrc: [iElite,iFlower,iElite],
    amt: ["5","3","1"],
    abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
    tooltipText: ["Ferocious Gold<br>Calm Eve Terraces","Gather<br>Fiel Pond","Ferocious Beast<br>Minster Hills"],
    tooltipBg: [tooltipCalmEve,
                tooltipFiel,
                tooltipMinster],
    tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
}