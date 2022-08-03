export const IMAGINE_BATTLE_PLIDOKE = { 
    name: "Plidoke",
    type: "Attack type",
    image: "",
    level: "Starting Lv 1~1 (Max Lv: 35)",
    element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
    cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
    // スライサーアーム・プリドークのイマジンを召喚し前方のターゲットに両手の剣を突き刺す
    skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Slicer Arm (attack)","effectiveness", "772","?","Summons Plidoke's Imagine<br>who pierces enemies in front of it with its sword arms"],
    ability: ["ability", "????","effectiveness", "????"],
    stats: [/*STR*/"+5",
            /*INT*/"+4",
            /*HP*/"+37",
            /*VIT*/"+6",
            /*MND*/"+4",
            /*ATK*/"+20",
            /*DEX*/"+5"
           ],
    minStats: [
            /*STR*/"+?",
            /*INT*/"+?",
            /*HP*/"+?",
            /*VIT*/"+?",
            /*MND*/"+?",
            /*ATK*/"+?",
            /*DEX*/"+?"
           ],
    recipe: ["Obtained as a Quest Reward", "<br>", "<br>", "0"],
    iconSrc: [iQuest,"",""],
    amt: ["<br>","<br>","<br>"],
    abilList: ["-","<br>", "<br>"],
    tooltipText: ['Complete quest "Collect Battle Imagine! #3"<br><br>After completing "Collect Battle Imagine! #2", craft ???',"<br>","<br>"],
    tooltipBg: [
        tooltipFrontier,"",""],
    tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
}