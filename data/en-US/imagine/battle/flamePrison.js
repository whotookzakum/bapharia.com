export const IMAGINE_BATTLE_FLAME_PRISON = { 
    name: "Flame Prison",
    type: "Attack type",
    image: "images/map/flamingprison.mp4",
    level: "Starting Lv 1~1 (Max Lv: 30)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // パワースイング・炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Power Swing (attack)","effectiveness", "710","169","Summons Flame Prison's Imagine<br>who swings its club to enemies in front of it"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+5",
            /*INT*/"+3",
            /*HP*/"+31",
            /*VIT*/"+4",
            /*MND*/"+3",
            /*ATK*/"+19",
            /*DEX*/"+4"
           ],
    minStats: [
            /*STR*/"+3",
            /*INT*/"+1",
            /*HP*/"+7",
            /*VIT*/"+2",
            /*MND*/"+1",
            /*ATK*/"+5",
            /*DEX*/"+2"
           ],
    recipe: ["Flame Prison's Idea","Jasper Stone","Glowing Goblin's Mane","86,000"],
    iconSrc: [iElite,iRock,iCombat],
    amt: ["5","3","3"],
    abilList: ["Reduce cooldown (battle imagine)","Max HP increase", "<br>"],
    tooltipText: ["Flame Prison<br>Calm Eve Terraces","Gather<br>Soundless Foothills","Glowing Goblin<br>Dragon Claw Valley [Free Exploration]"],
    tooltipBg: [
        tooltipCalmEve,
        tooltipSoundless,
        tooltipDragonclaw],
    tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
}