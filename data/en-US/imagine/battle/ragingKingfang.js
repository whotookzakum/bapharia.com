export const IMAGINE_BATTLE_RAGING_KINGFANG = { 
    name: "Raging Kingfang",
    type: "Attack type",
    image: "images/map/ragingkingfang.mp4",
    level: "Starting Lv 1~1 (Max Lv: 35)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // タイラントアサルト・荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Tyrant Assault (attack)","effectiveness", "787","166","Summons Raging Kingfang's Imagine<br>who performs a wide-range charge attack towards the target"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+6",
            /*INT*/"+5",
            /*HP*/"+34",
            /*VIT*/"+6",
            /*MND*/"+4",
            /*ATK*/"+20",
            /*DEX*/"+4"
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
    recipe: ["Raging Kingfang's Idea","Shell Fossil","Flame Prison's Bone","190,000"],
    iconSrc: [iElite,iRock,iElite],
    amt: ["7","3","1"],
    abilList: ["Reduce cooldown (ultimate)","ATK increase", "<br>"],
    tooltipText: ["Raging Kingfang<br>Dragon Claw Valley [Free Exploration]","Gather<br>Fiel Pond","Flame Prison<br>Calm Eve Terraces"],
    tooltipBg: [
        tooltipDragonclaw,
        tooltipFiel,
        tooltipCalmEve],
    tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
}