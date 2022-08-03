export const IMAGINE_BATTLE_TYRANT_BOAR = { 
    name: "Tyrant Boar",
    type: "Attack type",
    image: "images/map/tyrantboar.mp4",
    level: "Starting Lv 1~1 (Max Lv: 20)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // 猟犬殺し・タイラントボアのイマジンを召喚しターゲットを頭突きで攻撃する
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Hound Killer (attack)","effectiveness", "504","163","Summons Tyrant Boar<br>who attacks the target with a headbutt"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+4",
            /*INT*/"+3",
            /*HP*/"+22",
            /*VIT*/"+4",
            /*MND*/"+2",
            /*ATK*/"+13",
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
    recipe: ["Tyrant Boar's Idea","Sandsilver","Horn Goat's Fur","45,000"],
    iconSrc: [iDung,iRock,iCombat],
    amt: ["2","3","3"],
    abilList: ["Damage increase (battle imagine)","ATK increase", "<br>"],
    tooltipText: ["Clear Arena [C Rank]","Gather<br>Divine Haven Hill","Horned Goat<br>Fiel Pond"],
    tooltipBg: [
        tooltipArena,
        tooltipDivine,
        tooltipFiel],
    tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","visibility: hidden"]
}