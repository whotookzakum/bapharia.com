export const IMAGINE_BATTLE_SPOOKY_GOAT = { 
    name: "Spooky Goat",
    type: "Support type",
    image: "images/map/spookygoat.mp4",
    level: "Starting Lv 1~1 (Max Lv: 25)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
    // ゴートヘイスト・スプーキーゴートのイマジンを召喚し召喚者の移動速度を一定時間上昇させる
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goat Haste (support)","effectiveness", "130","130","Summons Spooky Goat's Imagine<br>who gives the summoner a temporary movement speed increase"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+3",
            /*INT*/"+4",
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
    recipe: ["Spooky Goat's Idea","Sunset Cedar Twig","Glowing Tyrant Boar Skin","45,000"],
    iconSrc: [iElite,iFlower,iCombat],
    amt: ["4","3","3"],
    abilList: ["Max stamina increase","DEX increase", "<br>"],
    tooltipText: ["Spooky Goat<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Glowing Tyrant Boar<br>Dragon Claw Valley [Free Exploration]"],
    tooltipBg: [tooltipSoundless,
               tooltipCalmEve,
               tooltipDragonclaw],
    tooltipIcn: ["transform: translate(2.5vw, 4.9vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
}