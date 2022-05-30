const DESCRIPTION_AEGIS_FIGHTER = {
    name: "Aegis Fighter",
    icon: "images/aficon.svg",
    chart: "images/skills/afchart.png",
    elements:
        '<img src="images/crafting/light.png" style="filter: brightness(0.9) sepia(1) saturate(300%) hue-rotate(0)" draggable="false">',
    text: '<span style="font-style: italic;">A melee knight class that has powerful crowd control and tanking abilities.<br></span><span style="position: relative; top: 0.5vw;"><span style="font-weight: bold;">Shield<br></span>Block incoming attacks with your shield, consuming shield gauge. If shield gauge reaches zero, all shield-utilizing skills will be temporarily disabled.</span>', // can also initiate a counterattack // impenetrable/divine defense
    video: "images/skills/af.mp4",
}

const WEAPONS_AEGIS_FIGHTER = [
    // 1 Novice Sword
    {
        name: "Novice Sword", //ノービスソード
        type: "Sword", //剣（武器）
        icon: "images/crafting/sword1.png",
        image: "images/crafting/sword1L.png",
        level: "Starting Lv 1~1 (Max Lv: 7)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+77",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+14",
        ],
        minStats: [
      /*ATK*/ "+47",
      /*STR*/ "+0",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+9",
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
    // 2 Fanged Sword
    {
        name: "Fanged Sword", //爪牙剣
        type: "Sword", //剣（武器）
        icon: "images/crafting/sword2.png",
        image: "images/crafting/sword2L.png",
        level: "Starting Lv 1~2 (Max Lv: 12)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+103",
      /*STR*/ "+4",
      /*VIT*/ "+0",
      /*DEX*/ "+3",
      /*INT*/ "+0",
      /*MND*/ "+2",
      /*HP*/ "+18",
        ],
        minStats: [
      /*ATK*/ "+48",
      /*STR*/ "+3",
      /*VIT*/ "+0",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+1",
      /*HP*/ "+8",
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
    // 3 Tower's Blade
    {
        name: "Tower's Blade", //タワーズブレイド
        type: "Sword", //剣（武器）
        icon: "images/crafting/sword3.png",
        image: "images/crafting/sword3L.png",
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
      /*ATK*/ "?",
      /*STR*/ "+?",
      /*VIT*/ "+?",
      /*DEX*/ "+?",
      /*INT*/ "+?",
      /*MND*/ "+?",
      /*HP*/ "+?",
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
    // 4 Red Steel Blade
    {
        name: "Red Steel Blade", //鋼の赤刃
        type: "Sword", //剣（武器）
        icon: "images/crafting/sword4.png",
        image: "images/crafting/sword4L.png",
        level: "Starting Lv 1~4 (Max Lv: 20)", //初期
        element: "images/crafting/fire.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+143",
      /*STR*/ "+3",
      /*VIT*/ "+4",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+26",
        ],
        minStats: [
      /*ATK*/ "+47",
      /*STR*/ "+2",
      /*VIT*/ "+3",
      /*DEX*/ "+1",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+9",
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
    // 5 Scaleclaw Sword
    {
        name: "Scaleclaw Sword", //鋼の赤刃
        type: "Sword", //剣（武器）
        icon: "images/crafting/sword5.png",
        image: "",
        level: "Starting Lv 1~5 (Max Lv: 25)", //初期
        element: "images/crafting/lightning.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+169",
      /*STR*/ "+5",
      /*VIT*/ "+0",
      /*DEX*/ "+4",
      /*INT*/ "+0",
      /*MND*/ "+3",
      /*HP*/ "+30",
        ],
        minStats: [
      /*ATK*/ "+48",
      /*STR*/ "+3",
      /*VIT*/ "+0",
      /*DEX*/ "+2",
      /*INT*/ "+0",
      /*MND*/ "+1",
      /*HP*/ "+8",
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
    // 6 Bapharia's Guidance
    {
        name: "Bapharia's Guidance", //バファリアの標
        type: "Sword", //剣（武器）
        icon: "images/crafting/sword6.png",
        image: "images/crafting/sword6L.png",
        level: "Starting Lv 1~6 (Max Lv: 30)", //初期
        element: "images/crafting/ice.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+190",
      /*STR*/ "+3",
      /*VIT*/ "+4",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+5",
      /*HP*/ "+37",
        ],
        minStats: [
      /*ATK*/ "+46",
      /*STR*/ "+1",
      /*VIT*/ "+2",
      /*DEX*/ "+0",
      /*INT*/ "+0",
      /*MND*/ "+3",
      /*HP*/ "+10",
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
    // 7 Sharp Edged Sword
    {
        name: "Sharp Edged Sword", //鋭刃剣
        type: "Sword", //剣（武器）
        icon: "images/crafting/sword7.png",
        image: "",
        level: "Starting Lv 1~7 (Max Lv: 35)", //初期
        element: "images/crafting/earth.png",
        slotCount: ["Slots", "?"], //スロット数
        stats: [
      /*ATK*/ "+218",
      /*STR*/ "+5",
      /*VIT*/ "+6",
      /*DEX*/ "+4",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+41",
        ],
        minStats: [
      /*ATK*/ "+47",
      /*STR*/ "+2",
      /*VIT*/ "+3",
      /*DEX*/ "+1",
      /*INT*/ "+0",
      /*MND*/ "+0",
      /*HP*/ "+9",
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

const SKILLS_AEGIS_FIGHTER = [
    // 0 Reg Skill LEFT
    {
        title: "Break Slash",
        reqPts: ["0","1","2"],
        reqLv: ["0","6","8"],
        text: [
                "Normal combo attacks that utilize a sword<br>Alternate to a spin attack by pressing a sideways directional key during the 4th attack", 
                "Adds an attack variation<br>Alternate to a Light elemental attack by pressing the forward directional key during the 3rd attack", 
                "Adds an attack variation<br>Alternate to a DEF UP self buff by pressing the backwards directional key during the 2nd attack"
        ]
    },
    
    // 1 Reg Skill RIGHT
    {
        title: "Shield Guard",
        reqPts: ["0","2","3"],
        reqLv: ["0","7","9"],
        text: [
                "Hold down the key to Guard<br>Holding normal attack while guarding will prepare your sword, and being attacked in this state will initiate a counter attack", 
                "Increases the shield gauge's rate of recovery", 
                "Increases the maximum limit of the shield gauge"
        ]
    },
    
    // 2 Tac Skill 1 TOP
    {
        title: "Shield Charge",
        reqPts: ["0","3","6"],
        reqLv: ["0","14","21"],
        text: [
                "Rush forward with your shield, stunning all enemies that are hit<br>Can't be used during Guard Break", 
                "Adds the ability to chain an attack after the rush", 
                "Adds the ability to chain up to 2 attacks"
        ],
        abil: [
            {
                title: "Pursuit",
                reqPts: "3",
                reqLv: "27",
                text: "Increase damage of the downward attack"
            },
            {
                title: "Iron Wall",
                reqPts: "3",
                reqLv: "27",
                text: "Temporarily increase your DEF"
            }
        ]
    },
    
    // 3 Tac Skill 1 BOTTOM
    {
        title: "Sunrise Charge",
        reqPts: ["2","3","6"],
        reqLv: ["10","14","21"],
        text: [
                "Rush forward with your shield, successful attacks will release small Light elemental explosions<br>Can't be used during Guard Break", 
                "Adds the ability to chain an attack after the rush<br>After the attack, a medium-sized Light elemental explosion will occur", 
                "Adds the ability to chain up to 2 attacks<br>After the attack, a large-sized Light elemental explosion will occur"
        ],
        abil: [
            {
                title: "Deep Cuts",
                reqPts: "3",
                reqLv: "27",
                text: "Increases damage against enemies with elemental status ailments"
            },
            {
                title: "Sunlight",
                reqPts: "3",
                reqLv: "27",
                text: "Increases the rate of elemental charge accumulation"
            }
        ]
    },
    
    // 4 Tac Skill 2 TOP
    {
        title: "Blow Beat",
        reqPts: ["1","3","6"],
        reqLv: ["2","15","22"],
        text: [
                "An all-directional shockwave attack centered around yourself<br>Enemies that are hit will be provoked", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill power", 
                "When charged to the max, enemies that are hit will be drawn in towards you"],
        abil: [
            {
                title: "Wide Range",
                reqPts: "3",
                reqLv: "28",
                text: "Increases the skill's effective area"
            },
            {
                title: "Quick Charge",
                reqPts: "3",
                reqLv: "28",
                text: "Reduces the time required to reach max charge"
            }
        ]
    },
    
    // 5 Tac Skill 2 BOTTOM
    {
        title: "Celestial Pillar",
        reqPts: ["2","3","6"],
        reqLv: ["10","15","22"],
        text: [
                "Summons a pillar of light centered on you<br>Continuously applies Light elemental damage to enemies within the skill's range", 
                "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation", 
                "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation"
        ],
        abil: [
            {
                title: "Starlight",
                reqPts: "3",
                reqLv: "28",
                text: "Increases the rate of Light elemental charge accumulation"
            },
            {
                title: "Instantaneous",
                reqPts: "3",
                reqLv: "28",
                text: "Reduces the duration of the Light pillars and increases hit count"
            }
        ]
    },
    
    // 6 Tac Skill 3 TOP
    {
        title: "Divide Slash",
        reqPts: ["1","3","6"],
        reqLv: ["3","16","23"],
        text: [
                "A slash attack that pierces enemies in front of you", 
                "Adds the ability to slash up to 2 times", 
                "Adds the ability to slash up to 3 times"
        ],
        abil: [
            {
                title: "Tempered Blade",
                reqPts: "3",
                reqLv: "29",
                text: "Increases skill power but slashes no longer pierce enemies"
            },
            {
                title: "Extended Sword",
                reqPts: "3",
                reqLv: "29",
                text: "Increases slash range"
            }
        ]
    },
    
    // 7 Tac Skill 3 BOTTOM
    {
        title: "Crescent Light",
        reqPts: ["2","3","6"],
        reqLv: ["10","16","23"],
        text: [
                "A Light elemental slash attack in the forward direction", 
                "Adds the ability to slash up to 2 times", 
                "Reduces skill cooldown"
        ],
        abil: [
            {
                title: "Moonlight",
                reqPts: "3",
                reqLv: "29",
                text: "Increases rate of elemental charge accumulation"
            },
            {
                title: "Gigablade",
                reqPts: "3",
                reqLv: "29",
                text: "Increases skill power"
            }
        ]
    },
    
    // 8 Tac Skill 4 TOP
    {
        title: "Fortress",
        reqPts: ["1","3","6"],
        reqLv: ["4","17","24"],
        text: [
                "Temporarily apply the Shield Up status effect<br>Can't be used during Guard Break", 
                "Increases skill duration", 
                "Reduces skill cooldown"
        ],
        abil: [
            {
                title: "Unison",
                reqPts: "3",
                reqLv: "30",
                text: "Increases counter attack power while skill is in effect"
            },
            {
                title: "Thorns",
                reqPts: "3",
                reqLv: "30",
                text: "Successful guards while the skill is in effect will cause an explosion, applying Light elemental damage to surrounding enemies"
            }
        ]
    },
    
    // 9 Tac Skill 4 BOTTOM
    {
        title: "Regeneration",
        reqPts: ["2","3","6"],
        reqLv: ["10","17","24"],
        text: [
                "Continuously recover HP over a period of time", 
                "Increases skill duration", 
                "Reduces skill cooldown"
        ],
        abil: [
            {
                title: "Healing Boost",
                reqPts: "3",
                reqLv: "30",
                text: "Increases the HP recovered by Regeneration"
            },
            {
                title: "Fortify",
                reqPts: "3",
                reqLv: "30",
                text: "Recover your shield gauge along with HP"
            }
        ]
    },
    
    // 10 ULT Skill
    {
        title: "Judgement Shield",
        reqPts: "2",
        reqLv: "5",
        text: "A Light elemental shockwave attack that hits an area in front of you<br>Shield Gauge is recovered upon use<br>Successful guards slightly reduce ULT skill cooldown"
    },
    
    // 11 Tac Abil 5
    {
        title: "Shield Gauge Efficiency",
        reqPts: ["2","3","4"],
        reqLv: ["12","19","25"],
        text: [
                "Reduces the amount of shield gauge consumed after a successful block", 
                "Reduces the amount of shield gauge consumed after a successful block", 
                "Reduces the amount of shield gauge consumed after a successful block"
        ]
    },
    
    // 12 Tac Abil 6
    {
        title: "Shield Gauge Recovery Speed",
        reqPts: ["2","3","4"],
        reqLv: ["12","19","25"],
        text: [
                "Increases the recovery rate of the Shield Gauge", 
                "Increases the recovery rate of the Shield Gauge", 
                "Increases the recovery rate of the Shield Gauge"
        ]
    }
]

