const DESCRIPTION_SPELL_CASTER = {
    name: "Spell Caster",
    icon: "images/scicon.svg",
    chart: "images/skills/scchart.png",
    elements:
        '<img src="images/crafting/fire.png" style="filter: brightness(0.1) sepia(1) saturate(5000%) hue-rotate(0)" draggable="false"><img src="images/crafting/lightning.png" style="filter: brightness(0.7) sepia(1) saturate(300%) hue-rotate(15deg)" draggable="false"><img src="images/crafting/ice.png" style="filter: brightness(0.6) sepia(1) saturate(200%) hue-rotate(140deg)" draggable="false">',
    text: '<span style="font-style: italic;">A ranged magician class that deals high burst damage by manipulating the elements.<br></span><span style="position: relative; top: 0.5vw;"><span style="font-weight: bold;">EP Gauge<br></span>Tactical skills consume EP gauge instead of going on cooldown. EP can be charged, but will leave you vulnerable while doing so.</span>', // manifestation (engram)
    video: "images/skills/sc.mp4",
}

const WEAPONS_SPELL_CASTER = [
    // 1 Training Rod
    {
        name: "Training Rod", //トレーニングロッド
        type: "Staff", //杖（武器）
        icon: "images/crafting/staff1.png",
        image: "",
        level: "Starting Lv 1~1 (Max Lv: 7)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+78",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+12",
        ],
        minStats: [
      /*ATK*/ "+47",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+6",
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
    // 2 Ancient Staff
    {
        name: "Ancient Staff", //往古の杖
        type: "Staff", //杖（武器）
        icon: "images/crafting/staff2.png",
        image: "",
        level: "Starting Lv 1~2 (Max Lv: 12)", //初期
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
      /*ATK*/ "+48",
      /*STR*/ "+0",
      /*VIT*/ "+0",
      /*DEX*/ "+2",
      /*INT*/ "+3",
      /*MND*/ "+1",
      /*HP*/ "+5",
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
    // 3 Missionary
    {
        name: "Missionary", //ミショナリー
        type: "Staff", //杖（武器）
        icon: "images/crafting/staff3.png",
        image: "images/crafting/staff3L.png",
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
      /*ATK*/ "+46",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+1",
      /*MND*/ "+3",
      /*HP*/ "+7",
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
    // 4 Blazing Staff
    {
        name: "Blazing Staff", //焼尽の杖
        type: "Staff", //杖（武器）
        icon: "images/crafting/staff4.png",
        image: "",
        level: "Starting Lv 1~4 (Max Lv: 20)", //初期
        element: "images/crafting/fire.png",
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
      /*ATK*/ "+47",
      /*STR*/ "+0",
      /*VIT*/ "+3",
      /*DEX*/ "+1",
      /*INT*/ "+2",
      /*MND*/ "+0",
      /*HP*/ "+6",
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
    // 5 Old Dragon's Staff
    {
        name: "Old Dragon's Staff", //古竜の杖
        type: "Staff", //杖（武器）
        icon: "images/crafting/staff5.png",
        image: "",
        level: "Starting Lv 1~5 (Max Lv: 25)", //初期
        element: "images/crafting/lightning.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+174",
      /*STR*/ "+0",
      /*VIT*/ "+0",
      /*DEX*/ "+4",
      /*INT*/ "+5",
      /*MND*/ "+3",
      /*HP*/ "+26",
        ],
        minStats: [
      /*ATK*/ "+48",
      /*STR*/ "+0",
      /*VIT*/ "+0",
      /*DEX*/ "+2",
      /*INT*/ "+3",
      /*MND*/ "+1",
      /*HP*/ "+5",
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
    // 6 Retribution
    {
        name: "Retribution", //リトリビューション
        type: "Staff", //杖（武器）
        icon: "images/crafting/staff6.png",
        image: "",
        level: "Starting Lv 1~6 (Max Lv: 30)", //初期
        element: "images/crafting/ice.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+195",
      /*STR*/ "+0",
      /*VIT*/ "+4",
      /*DEX*/ "+0",
      /*INT*/ "+3",
      /*MND*/ "+5",
      /*HP*/ "+33",
        ],
        minStats: [
      /*ATK*/ "+46",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+1",
      /*MND*/ "+3",
      /*HP*/ "+7",
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
    // 7 Valeed Rod
    {
        name: "Valeed Rod", //バリードロッド
        type: "Staff", //杖（武器）
        icon: "images/crafting/staff7.png",
        image: "",
        level: "Starting Lv 1~7 (Max Lv: 35)", //初期
        element: "images/crafting/earth.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+224",
      /*STR*/ "+0",
      /*VIT*/ "+6",
      /*DEX*/ "+4",
      /*INT*/ "+5",
      /*MND*/ "+0",
      /*HP*/ "+36",
        ],
        minStats: [
      /*ATK*/ "+47",
      /*STR*/ "+0",
      /*VIT*/ "+3",
      /*DEX*/ "+1",
      /*INT*/ "+2",
      /*MND*/ "+0",
      /*HP*/ "+6",
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

const SKILLS_SPELL_CASTER = [
    // 0 Reg Skill LEFT
    {
        title: "Trinity Shot",
        reqPts: ["0","1","2"],
        reqLv: ["0","6","8"],
        text: [
                "Attack up to 3 times from range using engram bullets<br>Alternate to a knockback attack by pressing a sideways directional key during the 3rd attack", 
                "Alternate to an attack that applies Speed Down by pressing the forward directional key during the 3rd attack", 
                "Apply a Quick Charge self buff by pressing the backwards directional key during the 3rd attack"
        ]
    },
    
    // 1 Reg Skill RIGHT
    {
        title: "Engram Charge",
        reqPts: ["0","2","3"],
        reqLv: ["0","7","9"],
        text: [
                "When activated, recover EP<br>Holding the key down will continuously recover EP", 
                "Increases the amount of EP recovered while holding the key down", 
                "Increases the amount of EP recovered while the skill is active"
        ]
    },
    
    // 2 Tac Skill 1 TOP
    {
        title: "Fire Blast",
        reqPts: ["0","3","6"],
        reqLv: ["0","14","21"],
        text: [
                "A single long range fire elemental attack", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
        ],
        abil: [
            {
                title: "Quick Charge",
                reqPts: "3",
                reqLv: "27",
                text: "Reduces the time required to reach max charge"
            },
            {
                title: "Element Up",
                reqPts: "3",
                reqLv: "27",
                text: "Increases the rate of elemental charge accumulation"
            }
        ]
    },
    
    // 3 Tac Skill 1 BOTTOM
    {
        title: "Flame Grenade",
        reqPts: ["2","3","6"],
        reqLv: ["10","14","21"],
        text: [
                "Launches a fire elemental bomb that explodes on impact", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
        ],
        abil: [
            {
                title: "Burst Plus",
                reqPts: "3",
                reqLv: "27",
                text: "Increases the skill's effective area"
            },
            {
                title: "Ignition",
                reqPts: "3",
                reqLv: "27",
                text: "Increases the rate of elemental charge accumulation"
            }
        ]
    },
    
    // 4 Tac Skill 2 TOP
    {
        title: "",
        reqPts: ["1","3","6"],
        reqLv: ["2","15","22"],
        text: [
                "A lightning elemental attack that hits straight ahead<br>Fires 3 lightning strikes that pierce enemies", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of lightning strikes", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of lightning strikes"],
        abil: [
            {
                title: "Escalation",
                reqPts: "3",
                reqLv: "28",
                text: "Increases EP consumption and skill power"
            },
            {
                title: "EP Saver",
                reqPts: "3",
                reqLv: "28",
                text: "Reduces amount of EP consumed"
            }
        ]
    },
    
    // 5 Tac Skill 2 BOTTOM
    {
        title: "Thunder Mine",
        reqPts: ["2","3","6"],
        reqLv: ["10","15","22"],
        text: [
                "Fire thunder mines that chase down nearby enemies<br>When the mines hit, deals area-of-effect lightning damage", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of thunder mines", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of thunder mines"
        ],
        abil: [
            {
                title: "Spread Out",
                reqPts: "3",
                reqLv: "28",
                text: "Increases the skill's effective area"
            },
            {
                title: "Escalation",
                reqPts: "3",
                reqLv: "28",
                text: "Increases EP consumption and skill power"
            }
        ]
    },
    
    // 6 Tac Skill 3 TOP
    {
        title: "Blizzard",
        reqPts: ["1","3","6"],
        reqLv: ["3","16","23"],
        text: [
                "Summons a gale of ice at the designated spot<br>Applies ice damage to enemies within the skill's range", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill's effective area and duration", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill's effective area and duration"
        ],
        abil: [
            {
                title: "Rapid Charge",
                reqPts: "3",
                reqLv: "29",
                text: "Reduces the time required to reach max charge"
            },
            {
                title: "Long Range",
                reqPts: "3",
                reqLv: "29",
                text: "Increases the skill's effective area"
            }
        ]
    },
    
    // 7 Tac Skill 3 BOTTOM
    {
        title: "Frigid Crush",
        reqPts: ["2","3","6"],
        reqLv: ["10","16","23"],
        text: [
                "Drops an ice block at the designated spot<br>Applies ice damage to enemies within the skill's range", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of ice blocks", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of ice blocks"
        ],
        abil: [
            {
                title: "Wide Range",
                reqPts: "3",
                reqLv: "29",
                text: "Increases the skill's effective area"
            },
            {
                title: "Pierce Cast",
                reqPts: "3",
                reqLv: "29",
                text: "Reduces the skill's effective area but increases skill power"
            }
        ]
    },
    
    // 8 Tac Skill 4 TOP
    {
        title: "Concentration",
        reqPts: ["1","3","6"],
        reqLv: ["4","17","24"],
        text: [
                "Continuously recover EP over a period of time", 
                "Increases skill duration", 
                "Reduces skill cooldown"
        ],
        abil: [
            {
                title: "Regain",
                reqPts: "3",
                reqLv: "30",
                text: "Continuously recover HP over a period of time"
            },
            {
                title: "Energy Charge",
                reqPts: "3",
                reqLv: "30",
                text: "Recover EP when the skill is used"
            }
        ]
    },
    
    // 9 Tac Skill 4 BOTTOM
    {
        title: "Follow Bullet",
        reqPts: ["2","3","6"],
        reqLv: ["10","17","24"],
        text: [
                "Temporarily summons engram bullets that float around you<br>When using a tactical skill, the bullets will fire with the respective element", 
                "Increases skill duration", 
                "Reduces skill cooldown"
        ],
        abil: [
            {
                title: "Element Force",
                reqPts: "3",
                reqLv: "30",
                text: "Increases the damage of the engram bullets"
            },
            {
                title: "Element Escalate",
                reqPts: "3",
                reqLv: "30",
                text: "Increases rate of elemental charge accumulation from the engram bullets "
            }
        ]
    },
    
    // 10 ULT Skill
    {
        title: "Meteor Inferno",
        reqPts: "2",
        reqLv: "5",
        text: "Drops a meteorite at the designated spot"
    },
    
    // 11 Tac Abil 5
    {
        title: "Max EP Increase",
        reqPts: ["2","3","4"],
        reqLv: ["12","19","25"],
        text: [
                "Increases Max EP", 
                "Increases Max EP", 
                "Increases Max EP"
        ]
    },
    
    // 12 Tac Abil 6
    {
        title: "Resolution",
        reqPts: ["2","3","4"],
        reqLv: ["12","19","25"],
        text: [
                "Temporarily grants super armor when beginning to charge a tactical skill<br>The duration of Resolution increases based on its skill level", 
                "Temporarily grants super armor when beginning to charge a tactical skill<br>The duration of Resolution increases based on its skill level", 
                "Temporarily grants super armor when beginning to charge a tactical skill<br>The duration of Resolution increases based on its skill level"
        ]
    }
]