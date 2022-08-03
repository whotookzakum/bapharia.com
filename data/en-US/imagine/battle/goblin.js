export const IMAGINE_BATTLE_GOBLIN = { 
    name: "Goblin",
    type: "Attack type",
    image: "images/map/goblin.mp4",
    level: "Starting Lv 1~1 (Max Lv: 15)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // ゴブリンスタブ・ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Stab (attack)","effectiveness", "414","163","Summons Goblin's Imagine<br>who stabs the target with its club"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+4",
            /*INT*/"+3",
            /*HP*/"+17",
            /*VIT*/"+2",
            /*MND*/"+4",
            /*ATK*/"+8",
            /*DEX*/"+4"
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
    recipe: ["Goblin's Idea","Iron Ore","Land Fox Tail","9,000"],
    iconSrc: [iElite,iRock,iCombat],
    amt: ["2","3","1"],
    abilList: ["Damage increase (tactical skill 1)","STR increase", "<br>"],
    tooltipText: ["Valley Raider<br>Dragon Claw Valley [Free Exploration]","Gather<br>Skyquake Fields","Land Fox<br>Skyquake Fields"],
    tooltipBg: [tooltipDragonclaw,
               tooltipSkyquake,
               tooltipSkyquake],
    tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
}