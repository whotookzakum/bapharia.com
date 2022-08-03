export const IMAGINE_BATTLE_ELDER_GOBLIN = { 
    name: "Elder Goblin",
    type: "Attack type",
    image: "images/map/eldergoblin.mp4",
    level: "Starting Lv 1~1 (Max Lv: 25)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // ファイアボール・エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Fireball (attack)","effectiveness", "604","166","Summons Elder Goblin's Imagine<br>who blasts one fireball at the target"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+5",
            /*INT*/"+4",
            /*HP*/"+24",
            /*VIT*/"+3",
            /*MND*/"+5",
            /*ATK*/"+13",
            /*DEX*/"+5"
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
    recipe: ["Elder Goblin's Idea","Magna Moss Fossil","Kaiser Elk Fur","43,000"],
    iconSrc: [iElite,iRock,iCombat],
    amt: ["4","3","3"],
    abilList: ["Damage increase (long-range)","INT increase", "<br>"],
    tooltipText: ["Arrogant Conjurer<br>Dragon Claw Valley [Free Exploration]","Gather<br>Calm Eve Terraces","Kaiser Elk<br>Divine Haven Hill"],
    tooltipBg: [tooltipDragonclaw,
               tooltipCalmEve,
               tooltipDivine],
    tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
}