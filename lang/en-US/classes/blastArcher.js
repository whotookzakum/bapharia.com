const DESCRIPTION_BLAST_ARCHER = {
    name: "Blast Archer",
    icon: "images/baicon.svg",
    chart: "images/skills/bachart.png",
    elements:
        '<img src="images/crafting/earth.png" style="filter: brightness(0.3) sepia(1) saturate(500%) hue-rotate(-25deg)" draggable="false">',
    text: "<span style='font-style: italic;'>A ranged bowman class that specializes in supporting allies and debuffing enemies.<br></span><span style='position: relative; top: 0.5vw;'><span style='font-weight: bold;'>Weakness Targeting<br></span>Manually aim at enemies' weak points to deal additional damage.</span>", // sharp eyes
    video: "images/skills/ba.mp4",
}

const WEAPONS_BLAST_ARCHER = [
    // 1 Hunter Bow
    {
        name: "Hunter Bow", //ハンターボウ
        type: "Bow", //弓（武器）
        icon: "images/crafting/bow1.png",
        image: "images/crafting/bow1L.png",
        level: "Starting Lv 1~1 (Max Lv: 7)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+60",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+12",
        ],
        minStats: [
      /*ATK*/ "+42",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+7",
        ],
        recipe: ["Purchase at weapon shop", "<br>", "<br>", "0"],
        // Icon to show on tooltip
        iconSrc: ["images/map/weapon.png", "", ""],
        amt: ["", "", ""],
        tooltipText: ["Weapon Shop<br>Asterleeds", "", ""],
        tooltipBg: [tooltipWepShop, "", ""],
        // The transformation
        tooltipIcn: [
            "transform: translate(7.2vw, 7.6vw)",
            "visibility: hidden",
            "visibility: hidden",
        ],
        eleTooltip: "",
    },
    // 2 Flashwing Bow
    {
        name: "Flashwing Bow", //閃翼の弓｀
        type: "Bow", //弓（武器）
        icon: "images/crafting/bow2.png",
        image: "images/crafting/bow2L.png",
        level: "Starting Lv 1~2 (Max Lv: 12)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+93",
      /*STR*/ "+4",
      /*VIT*/ "+0",
      /*DEX*/ "+3",
      /*INT*/ "+0",
      /*MND*/ "+2",
      /*HP*/ "+16",
        ],
        minStats: [
      /*ATK*/ "+43",
      /*STR*/ "+3",
      /*VIT*/ "+0",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+1",
      /*HP*/ "+6",
        ],
        recipe: [
            "Dragon Bone Fragment",
            "Rumble Boar Fang",
            "Long Grass",
            "25,000",
        ],
        iconSrc: [iDung, iCombat, iFlower],
        amt: ["3", "10", "5"],
        tooltipText: [
            "Clear Dungeon<br>Dragon Claw Valley [Additional Survey]",
            "Rumble Boar<br>Andra Basin",
            "Gather<br>Andra Basin",
        ],
        tooltipBg: ["", tooltipAndra, tooltipAndra],
        tooltipIcn: [
            "visibility:hidden",
            "visibility: hidden",
            "visibility: hidden",
        ],
        eleTooltip: "",
    },
    // 3 Alpha Genesis
    {
        name: "Alpha Genesis", //アルファジェネシス｀
        type: "Bow", //弓（武器）
        icon: "images/crafting/bow3.png",
        image: "images/crafting/bow3L.png",
        level: "Starting Lv 1~4 (Max Lv: 20)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+?",
      /*STR*/ "+?",
      /*VIT*/ "+?",
      /*DEX*/ "+?",
      /*INT*/ "+?",
      /*MND*/ "+?",
      /*HP*/ "+?",
        ],
        minStats: [
      /*ATK*/ "+41",
      /*STR*/ "+1",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+3",
      /*HP*/ "+8",
        ],
        recipe: ["IC Core", "Horned Goat's Horn", "Smoky Moss", "150,000"],
        iconSrc: [iDung, iCombat, iFlower],
        amt: ["5", "20", "7"],
        tooltipText: [
            "Clear Dungeon<br>Pillar of Divinity [Additional Survey]",
            "Horned Goat<br>Divine Haven Hill",
            "Gather<br>Divine Haven Hill",
        ],
        tooltipBg: ["", tooltipDivine, tooltipDivine],
        tooltipIcn: [
            "visibility:hidden",
            "visibility: hidden",
            "visibility: hidden",
        ],
        eleTooltip: "",
    },
    // 4 Mechanical Firecarved Bow
    {
        name: "Mechanical Firecarved Bow", //機跡の炎刻弓｀
        type: "Bow", //弓（武器）
        icon: "images/crafting/bow4.png",
        image: "",
        level: "Starting Lv 1~4 (Max Lv: 20)", //初期
        element: "images/crafting/fire.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+129",
      /*STR*/ "+3",
      /*VIT*/ "+4",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+24",
        ],
        minStats: [
      /*ATK*/ "+42",
      /*STR*/ "+2",
      /*VIT*/ "+3",
      /*DEX*/ "+1",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+7",
        ],
        recipe: [
            "Bahamar Yellow",
            "Shabby Goblin Staff",
            "Round Water Plant",
            "250,000",
        ],
        iconSrc: [iDung, iCombat, iFlower],
        amt: ["5", "20", "7"],
        tooltipText: [
            "Clear Dungeon<br>Valley of Machines [Survey]",
            "Elder Goblin<br>Soundless Foothills",
            "Gather<br>Soundless Foothills",
        ],
        tooltipBg: ["", tooltipSoundless, tooltipSoundless],
        tooltipIcn: [
            "visibility:hidden",
            "visibility: hidden",
            "visibility: hidden",
        ],
        eleTooltip: "images/crafting/firetooltip.png",
    },
    // 5 Brilliant Thunderwing Bow
    {
        name: "Brilliant Thunderwing Bow", //雷翼の豪弓
        type: "Bow", //弓（武器）
        icon: "images/crafting/bow5.png",
        image: "",
        level: "Starting Lv 1~5 (Max Lv: 25)", //初期
        element: "images/crafting/lightning.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+153",
      /*STR*/ "+5",
      /*VIT*/ "+0",
      /*DEX*/ "+4",
      /*INT*/ "+0",
      /*MND*/ "+3",
      /*HP*/ "+27",
        ],
        minStats: [
      /*ATK*/ "+43",
      /*STR*/ "+3",
      /*VIT*/ "+0",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+1",
      /*HP*/ "+6",
        ],
        recipe: [
            "Firm Dragon Bone Fragment",
            "Glowing Tyrant Boar Fang",
            "Boule Fruit",
            "500,000",
        ],
        iconSrc: [iDung, iCombat, iFlower],
        amt: ["6", "10", "10"],
        tooltipText: [
            "Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]",
            "Glowing Tyrant Boar<br>Calm Eve Terraces",
            "Gather<br>Calm Eve Terraces",
        ],
        tooltipBg: ["", tooltipCalmEve, tooltipCalmEve],
        tooltipIcn: [
            "visibility:hidden",
            "visibility: hidden",
            "visibility: hidden",
        ],
        eleTooltip: "images/crafting/lightningtooltip.png",
    },
    // 6 Glacial Arch
    {
        name: "Glacial Arch", //グレイシャルアーチ
        type: "Bow", //弓（武器）
        icon: "images/crafting/bow6.png",
        image: "",
        level: "Starting Lv 1~6 (Max Lv: 30)", //初期
        element: "images/crafting/ice.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+172",
      /*STR*/ "+3",
      /*VIT*/ "+4",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+5",
      /*HP*/ "+34",
        ],
        minStats: [
      /*ATK*/ "+41",
      /*STR*/ "+1",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+3",
      /*HP*/ "+8",
        ],
        recipe: [
            "High Performance IC Core",
            "Decorated Goblin's Staff",
            "Driftwood Twig",
            "1,200,000",
        ],
        iconSrc: [iDung, iCombat, iFlower],
        amt: ["7", "10", "15"],
        tooltipText: [
            "Clear Dungeon<br>Pillar of Divinity [Advanced Survey]",
            "Goblin Sage<br>Fiel Pond",
            "Gather<br>Fiel Pond",
        ],
        tooltipBg: ["", tooltipFiel, tooltipFiel],
        tooltipIcn: [
            "visibility:hidden",
            "visibility: hidden",
            "visibility: hidden",
        ],
        eleTooltip: "images/crafting/icetooltip.png",
    },
    // 7 Groundrunner's Bow
    {
        name: "Groundrunner's Bow", //地走りの弓
        type: "Bow", //弓（武器）
        icon: "images/crafting/bow7.png",
        image: "",
        level: "Starting Lv 1~7 (Max Lv: 35)", //初期
        element: "images/crafting/earth.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+197",
      /*STR*/ "+5",
      /*VIT*/ "+6",
      /*DEX*/ "+4",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+37",
        ],
        minStats: [
      /*ATK*/ "+42",
      /*STR*/ "+2",
      /*VIT*/ "+3",
      /*DEX*/ "+1",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+7",
        ],
        recipe: [
            "High Quality Bahamar Yellow",
            "Large Goblin Wand",
            "Wailing Dragon Ore",
            "2,450,000",
        ],
        iconSrc: [iDung, iCombat, iRock],
        amt: ["8", "5", "20"],
        tooltipText: [
            "Clear Dungeon<br>Valley of Machines [Advanced Survey]",
            "Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]",
            "Gather<br>Dragon Claw Valley [Free Exploration]",
        ],
        tooltipBg: ["", tooltipDragonclaw, tooltipDragonclaw],
        tooltipIcn: [
            "visibility:hidden",
            "visibility: hidden",
            "visibility: hidden",
        ],
        eleTooltip: "images/crafting/earthtooltip.png",
    }
]

const SKILLS_BLAST_ARCHER = [
    // 0 Reg Skill LEFT
    {
        title: "Arrow Rush",
        reqPts: ["0","1","2"],
        reqLv: ["0","6","8"],
        text: [
                "Chain up to 4 longe ranged attacks using a bow and arrow<br>Perform a 5-way cone shaped attack in front of you by holding the key during the 2nd attack", 
                "Alternate to an earth elemental area attack by holding the key during the 3rd attack", 
                "Hold the key during the first attack to apply a Speed Up status effect to nearby players in front of you"
        ]
    },
    
    // 1 Reg Skill RIGHT
    {
        title: "Slalom Shot",
        reqPts: ["0","2","3"],
        reqLv: ["0","7","9"],
        text: [
                "Consume stamina to attack in a straight line while moving<br>Can't be used with insufficient stamina", 
                "Increases movement distance", 
                "Reduces stamina consumption"
        ]
    },
    
    // 2 Tac Skill 1 TOP
    {
        title: "Strike Arrow",
        reqPts: ["0","3","6"],
        reqLv: ["0","14","21"],
        text: [
                "Fire a high-damage arrow in a straight line", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
        ],
        abil: [
            {
                title: "Concentration",
                reqPts: "3",
                reqLv: "27",
                text: "Reduces the time required to reach max charge"
            },
            {
                title: "Full Power Shot",
                reqPts: "3",
                reqLv: "27",
                text: "Increases skill power but also increases time required to reach max charge"
            }
        ]
    },
    
    // 3 Tac Skill 1 BOTTOM
    {
        title: "Hypno Blast",
        reqPts: ["2","3","6"],
        reqLv: ["10","14","21"],
        text: [
                "Fire an arrow that puts enemies to sleep, inflicting the Sleep status ailment", 
                "Adds piercing effect", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power"
        ],
        abil: [
            {
                title: "Damage Boost",
                reqPts: "3",
                reqLv: "27",
                text: "Increases skill power, but loses piercing effect"
            },
            {
                title: "Quick Drive",
                reqPts: "3",
                reqLv: "27",
                text: "Reduces the time required to reach max charge"
            }
        ]
    },
    
    // 4 Tac Skill 2 TOP
    {
        title: "Stampede Arrow",
        reqPts: ["1","3","6"],
        reqLv: ["2","15","22"],
        text: [
                "Fires 4 homing arrows at nearby enemies", 
                "Number of arrows increases to 6", 
                "Adds the ability to fire an additional arrow straight ahead after the homing arrows"],
        abil: [
            {
                title: "Poisonic",
                reqPts: "3",
                reqLv: "28",
                text: "Applies poison to enemies"
            },
            {
                title: "Penetration",
                reqPts: "3",
                reqLv: "28",
                text: "Adds piercing effect"
            }
        ]
    },
    
    // 5 Tac Skill 2 BOTTOM
    {
        title: "Negative Resonance",
        reqPts: ["2","3","6"],
        reqLv: ["10","15","22"],
        text: [
                "Fire a straight shot arrow<br>If the enemies that are hit have an elemental status ailment, the status ailment will be spread to nearby enemies", 
                "Increases the range that the elemental status ailment can be spread", 
                "Adds the ability to chain an additional attack after the first"
        ],
        abil: [
            {
                title: "Range Attack",
                reqPts: "3",
                reqLv: "28",
                text: "Successfully spreading elemental status ailments will deal additional damage"
            },
            {
                title: "Chain Infection",
                reqPts: "3",
                reqLv: "28",
                text: "Adds piercing effect"
            }
        ]
    },
    
    // 6 Tac Skill 3 TOP
    {
        title: "Lethal Shower",
        reqPts: ["1","3","6"],
        reqLv: ["3","16","23"],
        text: [
                "Rains down arrows at the designated spot<br>Continuously damages enemies within the skill's effective area", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill's effective area and skill power", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases skill's effective area and skill power"
        ],
        abil: [
            {
                title: "Concentrated Rainstorm",
                reqPts: "3",
                reqLv: "29",
                text: "Reduces the skill's effective area but increases skill power"
            },
            {
                title: "Acceleration",
                reqPts: "3",
                reqLv: "29",
                text: "Reduces the time required to reach max charge"
            }
        ]
    },
    
    // 7 Tac Skill 3 BOTTOM
    {
        title: "Dust Force",
        reqPts: ["2","3","6"],
        reqLv: ["10","16","23"],
        text: [
                "Launch an area attack at a designated spot<br>Continuously deals earth elemental damage and strengthens status ailments", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the duration of the damaging area", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the duration of the damaging area"
        ],
        abil: [
            {
                title: "Tempered Agility",
                reqPts: "3",
                reqLv: "29",
                text: "Reduces the time required to reach max charge"
            },
            {
                title: "Delay",
                reqPts: "3",
                reqLv: "29",
                text: "Applies the Speed Down status effect to enemies"
            }
        ]
    },
    
    // 8 Tac Skill 4 TOP
    {
        title: "Healing Arrow",
        reqPts: ["1","3","6"],
        reqLv: ["4","17","24"],
        text: [
                "Generates a healing field at the designated spot", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill's effective area and HP recovery amount", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill's effective area and HP recovery amount"
        ],
        abil: [
            {
                title: "Scale Up",
                reqPts: "3",
                reqLv: "30",
                text: "Increases the skill's effective area"
            },
            {
                title: "Snipe Heal",
                reqPts: "3",
                reqLv: "30",
                text: "Reduces the skill's effective area but increases HP recovery"
            }
        ]
    },
    
    // 9 Tac Skill 4 BOTTOM
    {
        title: "Hunter's Spirit",
        reqPts: ["2","3","6"],
        reqLv: ["10","17","24"],
        text: [
                "Temporarily applies the Quick Interval status effect on yourself<br>(Reduces regular/tactical skill cooldowns)", 
                "Increases skill duration", 
                "Reduces skill cooldown"
        ],
        abil: [
            {
                title: "Signal Flare",
                reqPts: "3",
                reqLv: "30",
                text: "Applies Hunter's Spirit to nearby party members"
            },
            {
                title: "Sharpness",
                reqPts: "3",
                reqLv: "30",
                text: "Temporarily apply the ATK UP status effect"
            }
        ]
    },
    
    // 10 ULT Skill
    {
        title: "Mortal Gravity",
        reqPts: "2",
        reqLv: "5",
        text: "Draw in nearby enemies to the point of impact<br>Continuously damage enemies within the skill's range"
    },
    
    // 11 Tac Abil 5
    {
        title: "Rescue Up",
        reqPts: ["2","3","4"],
        reqLv: ["12","19","25"],
        text: [
                "Reduces the time required to rescue a player", 
                "Reduces the time required to rescue a player", 
                "Reduces the time required to rescue a player"
        ]
    },
    
    // 12 Tac Abil 6
    {
        title: "Recovery Up",
        reqPts: ["2","3","4"],
        reqLv: ["12","19","25"],
        text: [
                "Increases the effect of self-healing actions", 
                "Increases the effect of self-healing actions", 
                "Increases the effect of self-healing actions"
        ]
    }
]