export const IMAGINE_BATTLE_TRICK_ELDER = { 
    name: "Trick Elder",
    type: "Attack type",
    image: "images/map/trickelder.mp4",
    level: "Starting Lv 1~1 (Max Lv: 35)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // エルダークリスタル・トリックエルダーのイマジンを召喚しターゲットに対して氷柱を3発飛ばす
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Elder Crystal (attack)","effectiveness", "741","156","Summons Trick Elder's Imagine<br>who launches 3 icicles at the target"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+6",
            /*INT*/"+5",
            /*HP*/"+32",
            /*VIT*/"+4",
            /*MND*/"+6",
            /*ATK*/"+18",
            /*DEX*/"+6"
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
    recipe: ["Trick Elder's Idea","Dragon Venom","Deep Green Fang's Skin","130,000"],
    iconSrc: [iElite,iFlower,iElite],
    amt: ["3","3","1"],
    abilList: ["Damage increase (long-range)","INT increase", "<br>"],
    tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Dragon Claw Valley [Free Exploration]","Deep Green Fang<br>Andra Basin"],
    tooltipBg: [tooltipFiel,
               tooltipDragonclaw,
               tooltipAndra],
    tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(5.8vw, 11vw)"]
}