export const IMAGINE_BATTLE_KAISER_ELK = { 
    name: "Kaiser Elk",
    type: "Attack type",
    image: "images/map/kaiserelk.mp4",
    level: "Starting Lv 1~1 (Max Lv: 35)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // クラッパーホーン・カイザーエルクのイマジンを召喚しターゲットを角で振り払う
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Clapper Horn (attack)","effectiveness", "756","159","Summons Kaiser Elk's Imagine<br>who attacks enemies with its horns"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+6",
            /*INT*/"+5",
            /*HP*/"+35",
            /*VIT*/"+4",
            /*MND*/"+6",
            /*ATK*/"+19",
            /*DEX*/"+6"
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
    recipe: ["Kaiser Elk's Idea","Longan Flower","Evil Healer's Mane","140,000"],
    iconSrc: [iDung,iFlower,iElite],
    amt: ["7","3","1"],
    abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
    tooltipText: ["Clear Arena [S Rank]","Gather<br>Dragon Claw Valley [Free Exploration]","Evil Healer<br>Soundless Foothills"],
    tooltipBg: [
        tooltipArena,
        tooltipDragonclaw,
        tooltipSoundless],
    tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
}