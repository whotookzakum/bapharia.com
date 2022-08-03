export const IMAGINE_BATTLE_EVIL_HEALER = { 
    name: "Evil Healer",
    type: "Heal type",
    image: "images/map/evilhealer.mp4",
    level: "Starting Lv 1~1 (Max Lv: 25)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
    // エリアヒール・悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Area Heal (heal)","effectiveness", "267","71","Summons Evil Healer's Imagine<br>who heals the HP allies around it"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+5",
            /*INT*/"+4",
            /*HP*/"+22",
            /*VIT*/"+4",
            /*MND*/"+2",
            /*ATK*/"+13",
            /*DEX*/"+2"
           ],
    minStats: [
            /*STR*/"+3",
            /*INT*/"+2",
            /*HP*/"+6",
            /*VIT*/"+1",
            /*MND*/"+3",
            /*ATK*/"+3",
            /*DEX*/"+3"
           ],
    recipe: ["Evil Healer's Idea","Rimeril Ore","Ogre Bone","56,000"],
    iconSrc: [iElite,iRock,iCombat],
    amt: ["4","3","3"],
    abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
    tooltipText: ["Evil Healer<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Ogre<br>Calm Eve Terraces"],
    tooltipBg: [tooltipSoundless,
               tooltipCalmEve,
               tooltipCalmEve],
    tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
}