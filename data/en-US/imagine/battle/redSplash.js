export const IMAGINE_BATTLE_RED_SPLASH = { 
    name: "Red Splash",
    type: "Attack type",
    image: "images/map/redsplash.mp4",
    level: "Starting Lv 1~1 (Max Lv: 15)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // 兜割り・赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける。
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Helm Splitter (attack)","effectiveness", "422","166","Summons Red Splash's Imagine<br>who targets and strikes the target's head with its club"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+2",
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
    recipe: ["Red Splash's Idea","Plateau Lily","Highland Fox Nail","15,000"],
    iconSrc: [iElite,iFlower,iCombat],
    amt: ["2","3","1"],
    abilList: ["Damage increase (regular attack)","STR increase", "<br>"],
    tooltipText: ["Red Splash<br>Minster Hills","Gather<br>Soundless Foothills","Highland Fox<br>Divine Haven Hill"],
    tooltipBg: [
        tooltipMinster,
        tooltipSoundless,
        tooltipDivine],
    tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
}