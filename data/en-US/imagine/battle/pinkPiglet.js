export const IMAGINE_BATTLE_PINK_PIGLET = { 
    name: "Pink Piglet",
    type: "Heal type",
    image: "images/map/pinkpiglet.mp4",
    level: "Starting Lv 1~1 (Max Lv: 15)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
    // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Piglet's Tranquility (heal)","effectiveness", "175","67","Summons Pink Piglet's Imagine<br>who creates a healing field around itself"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+4",
            /*INT*/"+3",
            /*HP*/"+18",
            /*VIT*/"+4",
            /*MND*/"+2",
            /*ATK*/"+9",
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
    recipe: ["Pink Piglet's Idea","Ripple Stone","Piglet Skin","2,000"],
    iconSrc: [iElite,iRock,iCombat],
    amt: ["1","3","1"],
    abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
    tooltipText: ["Pink Piglet<br>Skyquake Fields","Gather<br>Skyquake Fields","Piglet<br>Skyquake Fields"],
    tooltipBg: [
        tooltipSkyquake,
        tooltipSkyquake,
        tooltipSkyquake],
    tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
}