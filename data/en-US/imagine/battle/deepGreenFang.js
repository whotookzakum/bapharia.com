export const IMAGINE_BATTLE_DEEP_GREEN_FANG = { 
    name: "Deep Green Fang",
    type: "Attack type",
    image: "images/map/deepgreenfang.mp4",
    level: "Starting Lv 1~1 (Max Lv: 20)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // 猪突猛進・深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Boar Rush (attack)","effectiveness", "514","166","Summons Deep Green Fang's Imagine<br>who performs a charge attack towards the center of the target"],
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
    recipe: ["Deep Green Fang's Idea","Asterbass","Tyrant Boar's Skin","17,000"],
    iconSrc: [iElite,iShell,iCombat],
    amt: ["3","3","3"],
    abilList: ["Damage increase (ultimate)","ATK increase", "<br>"],
    tooltipText: ["Deep Green Fang<br>Andra Basin","Gather<br>Minster Hills","Tyrant Boar<br>Dragon Claw Valley [Free Exploration]"],
    tooltipBg: [
        tooltipAndra,
        tooltipMinster,
        tooltipDragonclaw],
    tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
}