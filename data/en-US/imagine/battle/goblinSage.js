export const IMAGINE_BATTLE_GOBLIN_SAGE = { 
    name: "Goblin Sage",
    type: "Heal type",
    image: "images/map/goblinsage.mp4",
    level: "Starting Lv 1~1 (Max Lv: 30)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
    // ゴブリンセージの調律・ゴブリンセージのイマジンを召喚し召喚者のHPを回復させる
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Sage's Tuning (heal)","effectiveness", "323","74","Summons Goblin Sage's Imagine<br>who heals the HP of the summoner"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+5",
            /*INT*/"+4",
            /*HP*/"+28",
            /*VIT*/"+3",
            /*MND*/"+5",
            /*ATK*/"+16",
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
    recipe: ["Goblin Sage's Idea","Spike Fish","Sapphire Trot's Fang","120,000"],
    iconSrc: [iDung,iShell,iElite],
    amt: ["5","3","1"],
    abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
    tooltipText: ["Clear Arena [A Rank]","Gather<br>Fiel Pond","Sapphire Trot<br>Divine Haven Hill"],
    tooltipBg: [
        tooltipArena,
        tooltipFiel,
        tooltipDivine],
    tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
}