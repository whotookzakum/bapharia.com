export const IMAGINE_BATTLE_HORNED_GOAT = { 
    name: "Horned Goat",
    type: "Attack type",
    image: "images/map/horngoat.mp4",
    level: "Starting Lv 1~1 (Max Lv: 25)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // ビハインドキック・ホーンゴートのイマジンを召喚しターゲットを後ろ足で蹴り飛ばす
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Back Kick (attack)","effectiveness", "593","163","Summons Horned Goat's Imagine<br>who kicks back enemies with its rear legs"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+3",
            /*INT*/"+3",
            /*HP*/"+27",
            /*VIT*/"+4",
            /*MND*/"+5",
            /*ATK*/"+14",
            /*DEX*/"+5"
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
    recipe: ["Horned Goat's Idea","Silver Ore","Glowing Elder Goblin's Mane","83,000"],
    iconSrc: [iDung,iRock,iCombat],
    amt: ["3","3","3"],
    abilList: ["Reduce damage taken (long-range)","DEF increase", "<br>"],
    tooltipText: ["Clear Arena [B Rank]","Gather<br>Fiel Pond","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]"],
    tooltipBg: [
        tooltipArena,
        tooltipFiel,
        tooltipDragonclaw],
    tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
}