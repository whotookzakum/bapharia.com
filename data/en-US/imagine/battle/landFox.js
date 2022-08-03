export const IMAGINE_BATTLE_LAND_FOX = { 
    name: "Land Fox",
    type: "Attack type",
    image: "images/map/landfox.mp4",
    level: "Starting Lv 1~1 (Max Lv: 30)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // クラウンストライク・ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Crown Strike (attack)","effectiveness", "669","159","Summons Land Fox's Imagine<br>who performs a leaping tackle at enemies"],
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
    recipe: ["Land Fox's Idea","Lamusa Flower","Pink Piglet's Skin","1,500"],
    iconSrc: [iElite,iFlower,iElite],
    amt: ["1","3","1"],
    abilList: ["Crit damage increase","DEX increase", "<br>"],
    tooltipText: ["Loudshot<br>Dragon Claw Valley [Free Exploration]","Gather<br>Skyquake Fields","Pink Piglet<br>Skyquake Fields"],
    tooltipBg: [
        tooltipDragonclaw,
        tooltipSkyquake,
        tooltipSkyquake],
    tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
}