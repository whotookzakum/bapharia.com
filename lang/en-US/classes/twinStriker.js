const DESCRIPTION_TWIN_STRIKER = {
    name: "Twin Striker",
    icon: "images/tsicon.svg",
    chart: "images/skills/tschart.png",
    elements:
        '<img src="images/crafting/fire.png" style="filter: brightness(0.1) sepia(1) saturate(5000%) hue-rotate(0)" draggable="false">',
    text: '<span style="font-style: italic;">A front line melee class that wields axes in both hands.<br></span><span style="position: relative; top: 0.5vw;"><span style="font-weight: bold;">Combo Meter<br></span>Damaging enemies builds combo meter, which increases damage. Meter will reset to 0 if knocked down.</span>', // berserk
    video: "images/skills/ts.mp4",
}

const WEAPONS_TWIN_STRIKER = [
    // 1 Battle Axe
    {
        name: "Battle Axe", //バトルアックス
        type: "Axe", //斧（武器）
        icon: "images/crafting/axe1.png",
        image: "",
        level: "Starting Lv 1~1 (Max Lv: 7)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+85",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+13",
        ],
        minStats: [
      /*ATK*/ "+51",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+8",
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
    // 2 Mist Cutter
    {
        name: "Mist Cutter", //霧払い
        type: "Axe", //斧（武器）
        icon: "images/crafting/axe2.png",
        image: "images/crafting/axe2L.png",
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
      /*ATK*/ "+52",
      /*STR*/ "+3",
      /*VIT*/ "+0",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+1",
      /*HP*/ "+7",
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
    // 3 Dual Raster
    {
        name: "Dual Raster", //デュアルラスター
        type: "Axe", //斧（武器）
        icon: "images/crafting/axe3.png",
        image: "images/crafting/axe3L.png",
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
      /*ATK*/ "+50",
      /*STR*/ "+1",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+3",
      /*HP*/ "+9",
        ],
        recipe: ["IC Core", "Highland Fox Claw", "Baha Ore", "150,000"],
        iconSrc: [iDung, iCombat, iRock],
        amt: ["5", "20", "7"],
        tooltipText: [
            "Clear Dungeon<br>Pillar of Divinity [Additional Survey]",
            "Highland Fox<br>Divine Haven Hill",
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
    // 4 Ancient Flame-hardened Axe
    {
        name: "Ancient Flame-hardened Axe", //古代の火打ち斧
        type: "Axe", //斧（武器）
        icon: "images/crafting/axe4.png",
        image: "images/crafting/axe4L.png",
        level: "Starting Lv 1~4 (Max Lv: 20)", //初期
        element: "images/crafting/fire.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+158",
      /*STR*/ "+3",
      /*VIT*/ "+4",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+25",
        ],
        minStats: [
      /*ATK*/ "+51",
      /*STR*/ "+2",
      /*VIT*/ "+3",
      /*DEX*/ "+1",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+8",
        ],
        recipe: [
            "Bahamar Yellow",
            "Shabby Goblin Club",
            "Calm Nightstone",
            "250,000",
        ],
        iconSrc: [iDung, iCombat, iRock],
        amt: ["5", "20", "7"],
        tooltipText: [
            "Clear Dungeon<br>Valley of Machines [Survey]",
            "Goblin<br>Soundless Foothills",
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
    // 5 Cliff Breaker
    {
        name: "Cliff Breaker", //懸崖崩し
        type: "Axe", //斧（武器）
        icon: "images/crafting/axe5.png",
        image: "images/crafting/axe5L.png",
        level: "Starting Lv 1~5 (Max Lv: 25)", //初期
        element: "images/crafting/lightning.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+188",
      /*STR*/ "+5",
      /*VIT*/ "+0",
      /*DEX*/ "+4",
      /*INT*/ "+0",
      /*MND*/ "+3",
      /*HP*/ "+28",
        ],
        minStats: [
      /*ATK*/ "+52",
      /*STR*/ "+3",
      /*VIT*/ "+0",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+1",
      /*HP*/ "+7",
        ],
        recipe: [
            "Firm Dragon Bone Fragment",
            "Ogre Horn",
            "Meteorite Fragment",
            "500,000",
        ],
        iconSrc: [iDung, iCombat, iRock],
        amt: ["6", "5", "10"],
        tooltipText: [
            "Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]",
            "Ogre<br>Calm Eve Terraces",
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
    // 6 Wild Ice Edge
    {
        name: "Wild Ice Edge", //アイスエッジワイルド
        type: "Axe", //斧（武器）
        icon: "images/crafting/axe6.png",
        image: "images/crafting/axe6L.png",
        level: "Starting Lv 1~6 (Max Lv: 30)", //初期
        element: "images/crafting/ice.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+211",
      /*STR*/ "+3",
      /*VIT*/ "+4",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+5",
      /*HP*/ "+36",
        ],
        minStats: [
      /*ATK*/ "+50",
      /*STR*/ "+1",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+3",
      /*HP*/ "+9",
        ],
        recipe: [
            "High Performance IC Core",
            "Kaiser Elk Horn",
            "Shivering Copper",
            "1,200,000",
        ],
        iconSrc: [iDung, iCombat, iRock],
        amt: ["7", "15", "15"],
        tooltipText: [
            "Clear Dungeon<br>Pillar of Divinity [Advanced Survey]",
            "Kaiser Elk<br>Fiel Pond",
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
    // 7 Ground Edge
    {
        name: "Ground Edge", //グラウンドエッジ
        type: "Axe", //斧（武器）
        icon: "images/crafting/axe7.png",
        image: "images/crafting/axe7L.png",
        level: "Starting Lv 1~7 (Max Lv: 35)", //初期
        element: "images/crafting/earth.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+242",
      /*STR*/ "+5",
      /*VIT*/ "+6",
      /*DEX*/ "+4",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+39",
        ],
        minStats: [
      /*ATK*/ "+51",
      /*STR*/ "+2",
      /*VIT*/ "+3",
      /*DEX*/ "+1",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+8",
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

const SKILLS_TWIN_STRIKER = [
    // 0 Reg Skill LEFT
    {
        title: "Beast Swing",
        reqPts: ["0","1","2"],
        reqLv: ["0","6","8"],
        text: [
                "Normal combo attack that utilizes axes<br>Alternate to a wide range attack by pressing a sideways directional key at the 4th stage", 
                "Adds an attack variation<br>Alternate to a fire elemental attack by pressing the forward directional key during the 3rd attack", 
                "Adds an attack variation<br>Alternate to an ATK UP self buff by pressing the backwards directional key during the 2nd attack"
        ]
    },
    
    // 1 Reg Skill RIGHT
    {
        title: "Axe Tornado",
        reqPts: ["0","2","3"],
        reqLv: ["0","7","9"],
        text: [
                "Perform a spinning attack<br>During the attack you are immune to flinching and incoming damage is reduced", 
                "Enemies are more likely to be knocked back when hit", // Enemies that are hit are more likely to be knocked back... (by successive attacks or only this one..?)
                "Adds the ability to chain a spinning attack after the uppercut" // might be incorrect
        ]
    },
    
    // 2 Tac Skill 1 TOP
    {
        title: "Brutal Blow",
        reqPts: ["0","3","6"],
        reqLv: ["0","14","21"],
        text: [
                "A wide ranged spin attack in the forward direction", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill power", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases skill power"
        ],
        abil: [
            {
                title: "Absorber",
                reqPts: "3",
                reqLv: "27",
                text: "Recover a portion of the damage dealt as HP"
            },
            {
                title: "Fighting Spirit",
                reqPts: "3",
                reqLv: "27",
                text: "Consumes combo gauge when the skill is used to increase skill power"
            }
        ]
    },
    
    // 3 Tac Skill 1 BOTTOM
    {
        title: "Crimson Blow",
        reqPts: ["2","3","6"],
        reqLv: ["10","14","21"],
        text: [
                "A fire elemental spin attack<br>Can hit up to 3 times", 
                "Reduces skill damage but increases maximum hits to 5 and increases the rate of elemental charge accumulation", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation"
        ],
        abil: [
            {
                title: "Rush Up",
                reqPts: "3",
                reqLv: "27",
                text: "Increases the rate of combo gauge accumulation"
            },
            {
                title: "Trance",
                reqPts: "3",
                reqLv: "27",
                text: "Increases the rate of elemental charge accumulation"
            }
        ]
    },
    
    // 4 Tac Skill 2 TOP
    {
        title: "Fall Impact",
        reqPts: ["1","3","6"],
        reqLv: ["2","15","22"],
        text: [
                "A large forward-leap attack<br>Upon landing, shockwaves will damage the surrounding area", 
                "Enemies that are hit are more likely to get knocked down", // will BECOME easier to knock down (by successive hits) ..?
                "Increases the shockwave's effective area and skill power"],
        abil: [
            {
                title: "Overswing",
                reqPts: "3",
                reqLv: "28",
                text: "Increases skill's effective area"
            },
            {
                title: "Fatal Hit",
                reqPts: "3",
                reqLv: "28",
                text: "Increases the damage of the down attack"
            }
        ]
    },
    
    // 5 Tac Skill 2 BOTTOM
    {
        title: "Lava Impact",
        reqPts: ["2","3","6"],
        reqLv: ["10","15","22"],
        text: [
                "A forward-leap attack imbued with fire<br>Causes the ground around the impact to catch on fire, dealing continuous damage", 
                "Leap up to 2 times<br>After both attacks, the ground will catch fire", 
                "Leap up to 3 times<br>After all 3 attacks, the ground will catch fire"
        ],
        abil: [
            {
                title: "Pinpoint Attack",
                reqPts: "3",
                reqLv: "28",
                text: "Decreases the ground fire's size but increases its damage"
            },
            {
                title: "Progress",
                reqPts: "3",
                reqLv: "28",
                text: "Increases the duration of the ground fire"
            }
        ]
    },
    
    // 6 Tac Skill 3 TOP
    {
        title: "Storm Rush",
        reqPts: ["1","3","6"],
        reqLv: ["3","16","23"],
        text: [
                "A wide range 2-hit combo attack to enemies in front of you", 
                "Maximum hits increases to 4", 
                "Maximum hits increases to 6"
        ],
        abil: [
            {
                title: "Violation",
                reqPts: "3",
                reqLv: "29",
                text: "Increases the damage of the down attack"
            },
            {
                title: "Combo Accel",
                reqPts: "3",
                reqLv: "29",
                text: "Increases the rate of combo gauge accumulation"
            }
        ]
    },
    
    // 7 Tac Skill 3 BOTTOM
    {
        title: "Burning Rush",
        reqPts: ["2","3","6"],
        reqLv: ["10","16","23"],
        text: [
                "A 2-hit fire elemental combo attack to enemies in front of you", 
                "Maximum hits increases to 4", 
                "Maximum hits increases to 6"
        ],
        abil: [
            {
                title: "Sensibility",
                reqPts: "3",
                reqLv: "29",
                text: "Increases the rate of elemental charge accumulation"
            },
            {
                title: "Perfection",
                reqPts: "3",
                reqLv: "29",
                text: "Reduces Burning Rush's cooldown if all attacks successfully hit"
            }
        ]
    },
    
    // 8 Tac Skill 4 TOP
    {
        title: "Warcry",
        reqPts: ["1","3","6"],
        reqLv: ["4","17","24"],
        text: [
                "Temporarily applies the Super Armor self buff<br>(You will not flinch when hit)", 
                "Increases skill duration", 
                "Reduces skill cooldown"
        ],
        abil: [
            {
                title: "Berserk",
                reqPts: "3",
                reqLv: "30",
                text: "Applies Warcry to self and nearby party members"
            },
            {
                title: "Unbreakable Spirit",
                reqPts: "3",
                reqLv: "30",
                text: "Recover HP when the skill is used"
            }
        ]
    },
    
    // 9 Tac Skill 4 BOTTOM
    {
        title: "Blood Axe",
        reqPts: ["2","3","6"],
        reqLv: ["10","17","24"],
        text: [
                "Temporarily applies an HP Drain self buff<br>(A portion of damage dealt will be restored as HP)", 
                "Increases skill duration", 
                "Reduces skill cooldown"
        ],
        abil: [
            {
                title: "Inspire",
                reqPts: "3",
                reqLv: "30",
                text: "Applies Blood Axe to self and nearby party members"
            },
            {
                title: "Selfish",
                reqPts: "3",
                reqLv: "30",
                text: "Increases the amount of HP recovered when damaging enemies"
            }
        ]
    },
    
    // 10 ULT Skill
    {
        title: "Vortex Impact",
        reqPts: "2",
        reqLv: "5",
        text: "Lift enemies in front of you, then slam down the area on the ground"
    },
    
    // 11 Tac Abil 5
    {
        title: "Combo Gauge Filler",
        reqPts: ["2","3","4"],
        reqLv: ["12","19","25"],
        text: [
                "Increases the rate at which the Combo Gauge fills", 
                "Increases the rate at which the Combo Gauge fills", 
                "Increases the rate at which the Combo Gauge fills"
        ]
    },
    
    // 12 Tac Abil 6
    {
        title: "Max Combo Gauge Bonus",
        reqPts: ["2","3","4"],
        reqLv: ["12","19","25"],
        text: [
                "Further increases your damage when the combo gauge is full", 
                "Further increases your damage when the combo gauge is full", 
                "Further increases your damage when the combo gauge is full"
        ]
    }
]