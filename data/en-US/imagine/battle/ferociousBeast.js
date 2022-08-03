export const IMAGINE_BATTLE_FEROCIOUS_BEAST = { 
    name: "Ferocious Beast",
    type: "Support type",
    image: "images/map/ferociousbeast.mp4",
    level: "Starting Lv 1~1 (Max Lv: 15)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
    // アクトクライ・猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Act Cry (support)","effectiveness", "150","150","Summons Ferocious Beast's Imagine<br>who gives the summoner a temporary ATK increase"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+3",
            /*INT*/"+4",
            /*HP*/"+16",
            /*VIT*/"+3",
            /*MND*/"+4",
            /*ATK*/"+7",
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
    recipe: ["Ferocious Beast's Idea","Dawngrass","Rumble Boar's Skin","7,000"],
    iconSrc: [iElite,iFlower,iCombat],
    amt: ["2","3","1"],
    abilList: ["Max stamina increase","DEX increase", "<br>"],
    tooltipText: ["Ferocious Beast<br>Minster Hills","Gather<br>Minster Hills","Rumble Boar<br>Andra Basin"],
    tooltipBg: [
        tooltipMinster,
        tooltipMinster,
        tooltipAndra],
    tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
}