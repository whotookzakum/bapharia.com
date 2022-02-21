// Class Pages
var classDescriptions = [

    // ENGLISH
    [
        // AEGIS FIGHTER
        {
            name: "Aegis Fighter",
            icon: "images/aficon.svg",
            chart: "images/skills/afchart.png",
            elements: '<img src="images/crafting/light.png" style="filter: brightness(0.9) sepia(1) saturate(300%) hue-rotate(0)" draggable="false">',
            text: '<span style="font-style: italic;">A melee knight class that has powerful crowd control and tanking abilities.<br></span><span style="position: relative; top: 0.5vw;"><span style="font-weight: bold;">Shield<br></span>Block incoming attacks with your shield, consuming shield gauge. If shield gauge reaches zero, all shield-utilizing skills will be temporarily disabled.</span>', // can also initiate a counterattack // impenetrable/divine defense
            video: "images/skills/af.mp4"
        },
        // TWIN STRIKER
        {
            name: "Twin Striker",
            icon: "images/tsicon.svg",
            chart: "images/skills/tschart.png",
            elements: '<img src="images/crafting/fire.png" style="filter: brightness(0.1) sepia(1) saturate(5000%) hue-rotate(0)" draggable="false">',
            text: '<span style="font-style: italic;">A front line melee class that wields axes in both hands.<br></span><span style="position: relative; top: 0.5vw;"><span style="font-weight: bold;">Combo Meter<br></span>Damaging enemies builds combo meter, which increases damage. Meter will reset to 0 if knocked down.</span>', // berserk
            video: "images/skills/ts.mp4"
        },
        // BLAST ARCHER
        {
            name: "Blast Archer",
            icon: "images/baicon.svg",
            chart: "images/skills/bachart.png",
            elements: '<img src="images/crafting/earth.png" style="filter: brightness(0.3) sepia(1) saturate(500%) hue-rotate(-25deg)" draggable="false">',
            text: "<span style='font-style: italic;'>A ranged bowman class that specializes in supporting allies and debuffing enemies.<br></span><span style='position: relative; top: 0.5vw;'><span style='font-weight: bold;'>Weakness Targeting<br></span>Manually aim at enemies' weak points to deal additional damage.</span>", // sharp eyes
            video: "images/skills/ba.mp4"
        },
        // SPELL CASTER
        {
            name: "Spell Caster",
            icon: "images/scicon.svg",
            chart: "images/skills/scchart.png",
            elements: '<img src="images/crafting/fire.png" style="filter: brightness(0.1) sepia(1) saturate(5000%) hue-rotate(0)" draggable="false"><img src="images/crafting/lightning.png" style="filter: brightness(0.7) sepia(1) saturate(300%) hue-rotate(15deg)" draggable="false"><img src="images/crafting/ice.png" style="filter: brightness(0.6) sepia(1) saturate(200%) hue-rotate(140deg)" draggable="false">',
            text: '<span style="font-style: italic;">A ranged magician class that deals high burst damage by manipulating the elements.<br></span><span style="position: relative; top: 0.5vw;"><span style="font-weight: bold;">EP Gauge<br></span>Tactical skills consume EP gauge instead of going on cooldown. EP can be charged, but will leave you vulnerable while doing so.</span>', // manifestation (engram)
            video: "images/skills/sc.mp4"
        }
    ]
    
    // JAPANESE
    
    
    // BRAZILIAN PORTUGUESE
    
    
    // RUSSIAN
    

]

// Weapon list
var wepHolder = [
    
    // ENGLISH
    [
        // 1 Novice Sword
        { 
            name: "Novice Sword", //ノービスソード
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword1.png",
            image: "images/crafting/sword1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+77",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+14",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Battle Axe
        { 
            name: "Battle Axe", //バトルアックス
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe1.png",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+85",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+13",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Hunter Bow
        { 
            name: "Hunter Bow", //ハンターボウ
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow1.png",
            image: "images/crafting/bow1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+60",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Training Rod
        { 
            name: "Training Rod", //トレーニングロッド
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff1.png",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+78",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+103",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+18",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+93",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+16",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            recipe: ["IC Core","Highland Fox Claw","Baha Ore","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Highland Fox<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["IC Core","Highland Fox Claw","Baha Ore","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Highland Fox<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["IC Core","Horned Goat's Horn","Smoky Moss","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Horned Goat<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["IC Core","Horned Goat's Horn","Smoky Moss","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Horned Goat<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
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
            stats: [/*ATK*/"+143",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Bahamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
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
            stats: [/*ATK*/"+158",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+25",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Bahamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
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
            stats: [/*ATK*/"+129",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+24",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Bahamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Elder Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
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
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Bahamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Elder Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
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
            stats: [/*ATK*/"+169",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+30",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["Firm Dragon Bone Fragment","Ogre Horn","Meteorite Fragment","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Ogre<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
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
            stats: [/*ATK*/"+188",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+28",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["Firm Dragon Bone Fragment","Ogre Horn","Meteorite Fragment","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Ogre<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
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
            stats: [/*ATK*/"+153",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+27",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["Firm Dragon Bone Fragment","Glowing Tyrant Boar Fang","Boule Fruit","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
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
            stats: [/*ATK*/"+174",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+3",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["Firm Dragon Bone Fragment","Glowing Tyrant Boar Fang","Boule Fruit","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
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
            stats: [/*ATK*/"+190",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+10",
                   ],
            recipe: ["High Performance IC Core","Kaiser Elk Horn","Shivering Copper","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Kaiser Elk<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
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
            stats: [/*ATK*/"+211",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["High Performance IC Core","Kaiser Elk Horn","Shivering Copper","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Kaiser Elk<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
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
            stats: [/*ATK*/"+172",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+34",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["High Performance IC Core","Decorated Goblin's Staff","Driftwood Twig","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Goblin Sage<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
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
            stats: [/*ATK*/"+195",
                    /*STR*/"+0",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+3",
                    /*MND*/"+5",
                    /*HP*/"+33",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["High Performance IC Core","Decorated Goblin's Staff","Driftwood Twig","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Goblin Sage<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
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
            stats: [/*ATK*/"+218",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+41",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
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
            stats: [/*ATK*/"+242",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+39",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
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
            stats: [/*ATK*/"+197",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
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
            stats: [/*ATK*/"+224",
                    /*STR*/"+0",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+0",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
 
    ],
    
    // JAPANESE
    [
        // 1 Novice Sword
        { 
            name: "ノービスソード", //
            type: "剣（武器）", //
            icon: "images/crafting/sword1.png",
            image: "images/crafting/sword1L.png",
            level: "初期 Lv 1~1 (Max Lv: 7)", //
            element: "",
            slotCount: ["スロット数", "?"], //
            stats: [/*ATK*/"+77",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+14",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["武器屋で購入","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["武器屋<br>アステルリーズ","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Battle Axe
        { 
            name: "バトルアックス", //
            type: "斧（武器）", //
            icon: "images/crafting/axe1.png",
            image: "",
            level: "初期 Lv 1~1 (Max Lv: 7)", //
            element: "",
            slotCount: ["スロット数", "?"], //
            stats: [/*ATK*/"+85",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+13",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["武器屋で購入","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["武器屋<br>アステルリーズ","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Hunter Bow
        { 
            name: "ハンターボウ", //
            type: "弓（武器）", //
            icon: "images/crafting/bow1.png",
            image: "images/crafting/bow1L.png",
            level: "初期 Lv 1~1 (Max Lv: 7)", //
            element: "",
            slotCount: ["スロット数", "?"], //
            stats: [/*ATK*/"+60",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["武器屋で購入","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["武器屋<br>アステルリーズ","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Training Rod
        { 
            name: "トレーニングロッド", //
            type: "杖（武器）", //
            icon: "images/crafting/staff1.png",
            image: "",
            level: "初期 Lv 1~1 (Max Lv: 7)", //
            element: "",
            slotCount: ["スロット数", "?"], //
            stats: [/*ATK*/"+78",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["武器屋で購入","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["武器屋<br>アステルリーズ","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 2 Fanged Sword
        { 
            name: "爪牙剣", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword2.png",
            image: "images/crafting/sword2L.png",
            level: "初期 Lv 1~2 (Max Lv: 12)", //
            element: "",
            slotCount: ["スロット数", "?"], //
            stats: [/*ATK*/"+103",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+18",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["竜骨の欠片","ランブルボアの牙","長毛草","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・追加調査","ランブルボア<br>アンドラ盆地","採取<br>アンドラ盆地"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Mist Cutter
        { 
            name: "霧払い", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe2.png",
            image: "images/crafting/axe2L.png",
            level: "初期 Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["竜骨の欠片","ランブルボアの牙","長毛草","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・追加調査","ランブルボア<br>アンドラ盆地","採取<br>アンドラ盆地"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Flashwing Bow
        { 
            name: "閃翼の弓", //｀
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow2.png",
            image: "images/crafting/bow2L.png",
            level: "初期 Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+93",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+16",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["竜骨の欠片","ランブルボアの牙","長毛草","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・追加調査","ランブルボア<br>アンドラ盆地","採取<br>アンドラ盆地"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Ancient Staff
        { 
            name: "往古の杖", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff2.png",
            image: "",
            level: "初期 Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["竜骨の欠片","ランブルボアの牙","長毛草","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・追加調査","ランブルボア<br>アンドラ盆地","採取<br>アンドラ盆地"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 3 Tower's Blade
        { 
            name: "タワーズブレイド", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword3.png",
            image: "images/crafting/sword3L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            recipe: ["集積コア","ハイランドフォックスの爪","バハ鉱石","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・追加調査","ハイランドフォックス<br>神の見守る丘","採取<br>神の見守る丘"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Dual Raster
        { 
            name: "デュアルラスター", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe3.png",
            image: "images/crafting/axe3L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["集積コア","ハイランドフォックスの爪","バハ鉱石","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・追加調査","ハイランドフォックス<br>神の見守る丘","採取<br>神の見守る丘"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Alpha Genesis
        { 
            name: "アルファジェネシス", //
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow3.png",
            image: "images/crafting/bow3L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["集積コア","ホーンゴートの角","煙霧苔","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・追加調査","ホーンゴート<br>神の見守る丘","採取<br>神の見守る丘"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Missionary
        { 
            name: "ミショナリー", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff3.png",
            image: "images/crafting/staff3L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["集積コア","ホーンゴートの角","煙霧苔","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・追加調査","ホーンゴート<br>神の見守る丘","採取<br>神の見守る丘"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 4 Red Steel Blade
        { 
            name: "鋼の赤刃", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword4.png",
            image: "images/crafting/sword4L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+143",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["バハマールイエロー","粗末なゴブリンの棍棒","静夜鉱","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・調査","ゴブリン<br>鎮まりの山麓","採取<br>鎮まりの山麓"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Ancient Flame-hardened Axe
        { 
            name: "古代の火打ち斧", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe4.png",
            image: "images/crafting/axe4L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+158",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+25",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["バハマールイエロー","粗末なゴブリンの棍棒","静夜鉱","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・調査","ゴブリン<br>鎮まりの山麓","採取<br>鎮まりの山麓"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Mechanical Firecarved Bow
        { 
            name: "機跡の炎刻弓", //｀
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow4.png",
            image: "",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+129",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+24",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["バハマールイエロー","粗末なゴブリンの杖","丸水草","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・調査","エルダーゴブリン<br>鎮まりの山麓","採取<br>鎮まりの山麓"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Blazing Staff
        { 
            name: "焼尽の杖", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff4.png",
            image: "",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["バハマールイエロー","粗末なゴブリンの杖","丸水草","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・調査","エルダーゴブリン<br>鎮まりの山麓","採取<br>鎮まりの山麓"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        
        // 5 Scaleclaw Sword
        { 
            name: "鱗爪剣", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword5.png",
            image: "",
            level: "初期 Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+169",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+30",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["堅固な竜骨の欠片","オーガの角","隕鉄の欠片","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・上級調査","オーガ<br>夕凪の段丘","採取<br>夕凪の段丘"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Cliff Breaker
        { 
            name: "懸崖崩し", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe5.png",
            image: "images/crafting/axe5L.png",
            level: "初期 Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+188",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+28",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["堅固な竜骨の欠片","オーガの角","隕鉄の欠片","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・上級調査","オーガ<br>夕凪の段丘","採取<br>夕凪の段丘"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Brilliant Thunderwing Bow
        { 
            name: "雷翼の豪弓", //
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow5.png",
            image: "",
            level: "初期 Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+153",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+27",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["堅固な竜骨の欠片","タイラントボア・グロウの牙","ブールの実","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・上級調査","タイラントボア・グロウ<br>夕凪の段丘","採取<br>夕凪の段丘"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Old Dragon's Staff
        { 
            name: "古竜の杖", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff5.png",
            image: "",
            level: "初期 Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+174",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+3",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["堅固な竜骨の欠片","タイラントボア・グロウの牙","ブールの実","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・上級調査","タイラントボア・グロウ<br>夕凪の段丘","採取<br>夕凪の段丘"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        
        // 6 Bapharia's Guidance
        { 
            name: "バファリアの標", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword6.png",
            image: "images/crafting/sword6L.png",
            level: "初期 Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+190",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+10",
                   ],
            recipe: ["高性能集積コア","カイザーエルクの角","冷震鋼","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・上級調査","カイザーエルク<br>フィエル嶺水池","採取<br>フィエル嶺水池"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Wild Ice Edge
        { 
            name: "アイスエッジワイルド", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe6.png",
            image: "images/crafting/axe6L.png",
            level: "初期 Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+211",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["高性能集積コア","カイザーエルクの角","冷震鋼","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・上級調査","カイザーエルク<br>フィエル嶺水池","採取<br>フィエル嶺水池"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Glacial Arch
        { 
            name: "グレイシャルアーチ", //
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow6.png",
            image: "",
            level: "初期 Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+172",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+34",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["高性能集積コア","装飾されたゴブリンの杖","流木の杖","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・上級調査","ゴブリンセージ<br>フィエル嶺水池","採取<br>フィエル嶺水池"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Retribution
        { 
            name: "リトリビューション", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff6.png",
            image: "",
            level: "初期 Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+195",
                    /*STR*/"+0",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+3",
                    /*MND*/"+5",
                    /*HP*/"+33",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["高性能集積コア","装飾されたゴブリンの杖","流木の杖","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・上級調査","ゴブリンセージ<br>フィエル嶺水池","採取<br>フィエル嶺水池"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        
        
        // 7 Sharp Edged Sword
        { 
            name: "鋭刃剣", //鋭刃剣
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword7.png",
            image: "",
            level: "初期 Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+218",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+41",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["上質なバハマールイエロー","大きなゴブリンの杖","哭竜鉱","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・上級調査","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Ground Edge
        { 
            name: "グラウンドエッジ", //グラウンドエッジ
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe7.png",
            image: "images/crafting/axe7L.png",
            level: "初期 Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+242",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+39",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["上質なバハマールイエロー","大きなゴブリンの杖","哭竜鉱","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・上級調査","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Groundrunner's Bow
        { 
            name: "地走りの弓", //地走りの弓
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow7.png",
            image: "",
            level: "初期 Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+197",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["上質なバハマールイエロー","大きなゴブリンの杖","哭竜鉱","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・上級調査","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Valeed Rod
        { 
            name: "バリードロッド", //バリードロッド
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff7.png",
            image: "",
            level: "初期 Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["スロット数", "?"], //スロット数
            stats: [/*ATK*/"+224",
                    /*STR*/"+0",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+0",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["上質なバハマールイエロー","大きなゴブリンの杖","哭竜鉱","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・上級調査","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        }
    
    ],
    
    // BRAZILIAN PORTUGUES
    [
        // 1 Novice Sword
        { 
            name: "Espada de Novato", //ノービスソード
            type: "Espada", //剣（武器）
            icon: "images/crafting/sword1.png",
            image: "images/crafting/sword1L.png",
            level: "Nv Inicial 1~1 (Nv Max: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+77",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+14",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Compre na loja de armas","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Loja de Armas<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Battle Axe
        { 
            name: "Machado de Batalha", //バトルアックス
            type: "Machado", //斧（武器）
            icon: "images/crafting/axe1.png",
            image: "",
            level: "Nv Inicial 1~1 (Nv Max: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+85",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+13",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Compre na loja de armas","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Loja de Armas<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Hunter Bow
        { 
            name: "Arco de Caça", //ハンターボウ
            type: "Arco", //弓（武器）
            icon: "images/crafting/bow1.png",
            image: "images/crafting/bow1L.png",
            level: "Nv Inicial 1~1 (Nv Max: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+60",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Compre na loja de armas","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Loja de Armas<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Training Rod
        { 
            name: "Cajado de Treinamento", //トレーニングロッド
            type: "Cajado", //杖（武器）
            icon: "images/crafting/staff1.png",
            image: "",
            level: "Nv Inicial 1~1 (Nv Max: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+78",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Compre na loja de armas","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Loja de Armas<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 2 Fanged Sword
        { 
            name: "Espada com Presas", //爪牙剣
            type: "Espada", //剣（武器）
            icon: "images/crafting/sword2.png",
            image: "images/crafting/sword2L.png",
            level: "Nv Inicial 1~2 (Nv Max: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+103",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+18",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["Fragmento de Osso de Dragão","Presa do Javali Barulhento","Grama Alta","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Adicional]","Javali Barulhento<br>Bacia Andra","Coleta<br>Bacia Andra"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Mist Cutter
        { 
            name: "Corta-névoa", //霧払い
            type: "Machado", //斧（武器）
            icon: "images/crafting/axe2.png",
            image: "images/crafting/axe2L.png",
            level: "Nv Inicial 1~2 (Nv Max: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["Fragmento de Osso de Dragão","Presa do Javali Barulhento","Grama Alta","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Adicional]","Javali Barulhento<br>Bacia Andra","Coleta<br>Bacia Andra"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Flashwing Bow
        { 
            name: "Arco da Asa Brilhante", //閃翼の弓｀
            type: "Arco", //弓（武器）
            icon: "images/crafting/bow2.png",
            image: "images/crafting/bow2L.png",
            level: "Nv Inicial 1~2 (Nv Max: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+93",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+16",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["Fragmento de Osso de Dragão","Presa do Javali Barulhento","Grama Alta","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Adicional]","Javali Barulhento<br>Bacia Andra","Coleta<br>Bacia Andra"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Ancient Staff
        { 
            name: "Cajado Ancião", //往古の杖
            type: "Cajado", //杖（武器）
            icon: "images/crafting/staff2.png",
            image: "",
            level: "Nv Inicial 1~2 (Nv Max: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["Fragmento de Osso de Dragão","Presa do Javali Barulhento","Grama Alta","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Adicional]","Javali Barulhento<br>Bacia Andra","Coleta<br>Bacia Andra"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 3 Tower's Blade
        { 
            name: "Lâmina da Torre", //タワーズブレイド
            type: "Espada", //剣（武器）
            icon: "images/crafting/sword3.png",
            image: "images/crafting/sword3L.png",
            level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            recipe: ["Núcelo IC","Garra de Raposa da Terra Alta","Minério Baha","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Raposa da Terra Alta<br>Colina do Santuário","Coleta<br>Colina do Santuário"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Dual Raster
        { 
            name: "Lâminas Duplas", //デュアルラスター
            type: "Machado", //斧（武器）
            icon: "images/crafting/axe3.png",
            image: "images/crafting/axe3L.png",
            level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["Núcelo IC","Garra de Raposa da Terra Alta","Minério de Baha","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Raposa da Terra Alta<br>Colina do Santuário","Coleta<br>Colina do Santuário"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Alpha Genesis
        { 
            name: "Gênesis Alfa", //アルファジェネシス｀
            type: "Arco", //弓（武器）
            icon: "images/crafting/bow3.png",
            image: "images/crafting/bow3L.png",
            level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["Núcelo IC","Chifre de Cabra Chifruda","Musgo Defumado","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Cabra Chifruda<br>Colina do Santuário","Coleta<br>Colina do Santuário"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Missionary
        { 
            name: "Missionário", //ミショナリー
            type: "Cajado", //杖（武器）
            icon: "images/crafting/staff3.png",
            image: "images/crafting/staff3L.png",
            level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["Núcelo IC","Chifre de Cabra Chifruda","Musgo Defumado","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Cabra Chifruda<br>Colina do Santuário","Coleta<br>Colina do Santuário"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 4 Red Steel Blade
        { 
            name: "Lâmina de Aço Rubro", //鋼の赤刃
            type: "Espada", //剣（武器）
            icon: "images/crafting/sword4.png",
            image: "images/crafting/sword4L.png",
            level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+143",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Amarelo Bahamar","Porrete gasto de Goblin","Pedra da Noite Tranquila","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa]","Goblin<br>Sopé Silencioso","Coleta<br>Sopé Silencioso"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Ancient Flame-hardened Axe
        { 
            name: "Machado Endurecido pela Chama Anciã", //古代の火打ち斧
            type: "Machado", //斧（武器）
            icon: "images/crafting/axe4.png",
            image: "images/crafting/axe4L.png",
            level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+158",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+25",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Amarelo Bahamar","Porrete gasto de Goblin","Pedra da Noite Tranquila","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa]","Goblin<br>Sopé Silencioso","Coleta<br>Sopé Silencioso"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Mechanical Firecarved Bow
        { 
            name: "Arco Mecânico Talhado em Fogo", //機跡の炎刻弓｀
            type: "Arco", //弓（武器）
            icon: "images/crafting/bow4.png",
            image: "",
            level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+129",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+24",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Amarelo Bahamar","Cajado gasto de Goblin","Planta Circular Aquática","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa]","Goblin Ancião<br>Sopé Silencioso","Coleta<br>Sopé Silencioso"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Blazing Staff
        { 
            name: "Cajado Ardente", //焼尽の杖
            type: "Cajado", //杖（武器）
            icon: "images/crafting/staff4.png",
            image: "",
            level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Amarelo Bahamar","Cajado gasto de Goblin","Planta Circular Aquática","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa]","Goblin Ancião<br>Sopé Silencioso","Coleta<br>Sopé Silencioso"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        
        // 5 Scaleclaw Sword
        { 
            name: "Machado da Garra Escamosa", //鋼の赤刃
            type: "Espada", //剣（武器）
            icon: "images/crafting/sword5.png",
            image: "",
            level: "Nv Inicial 1~5 (Nv Max: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+169",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+30",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["Fragmento Firme de Osso de Dragão","Chifre de Ogro","Fragmento de Meteorito","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Ogro<br>Terraço Vespertino","Coleta<br>Terraço Vespertino"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Cliff Breaker
        { 
            name: "Quebra-rochas", //懸崖崩し
            type: "Machado", //斧（武器）
            icon: "images/crafting/axe5.png",
            image: "images/crafting/axe5L.png",
            level: "Nv Inicial 1~5 (Nv Max: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+188",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+28",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["Fragmento Firme de Osso de Dragão","Chifre de Ogro","Fragmento de Meteorito","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Ogro<br>Terraço Vespertino","Coleta<br>Terraço Vespertino"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Brilliant Thunderwing Bow
        { 
            name: "Arco Brilhante da Asa do Trovão", //雷翼の豪弓
            type: "Arco", //弓（武器）
            icon: "images/crafting/bow5.png",
            image: "",
            level: "Nv Inicial 1~5 (Nv Max: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+153",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+27",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["Fragmento Firme de Osso de Dragão","<a style='font-size: 1.146vw'>Presa de Javali Tirano Incandescente</a>","Fruta Baule","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Javali Tirano Ancião<br>Terraço Vespertino","Coleta<br>Terraço Vespertino"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Old Dragon's Staff
        { 
            name: "Cajado Antigo do Dragão", //古竜の杖
            type: "Cajado", //杖（武器）
            icon: "images/crafting/staff5.png",
            image: "",
            level: "Nv Inicial 1~5 (Nv Max: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+174",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+3",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["Fragmento Firme de Osso de Dragão","<a style='font-size: 1.146vw'>Presa de Javali Tirano Incandescente</a>","Fruta Baule","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Javali Tirano Ancião<br>Terraço Vespertino","Coleta<br>Terraço Vespertino"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        
        // 6 Bapharia's Guidance
        { 
            name: "Guia de Bapharia", //バファリアの標
            type: "Espada", //剣（武器）
            icon: "images/crafting/sword6.png",
            image: "images/crafting/sword6L.png",
            level: "Nv Inicial 1~6 (Nv Max: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+190",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+10",
                   ],
            recipe: ["Núcleo IC de Alta Performance","Chifre de Alce Ancião","Cobre Oscilante","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Avançada]","Alce Ancião<br>Lago Fiel","Coleta<br>Lago Fiel"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Wild Ice Edge
        { 
            name: "Lâmina do Gelo Selvagem", //アイスエッジワイルド
            type: "Machado", //斧（武器）
            icon: "images/crafting/axe6.png",
            image: "images/crafting/axe6L.png",
            level: "Nv Inicial 1~6 (Nv Max: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+211",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["Núcleo IC de Alta Performance","Chifre de Alce Ancião","Cobre Oscilante","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Avançada]","Alce Ancião<br>Lago Fiel","Coleta<br>Lago Fiel"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Glacial Arch
        { 
            name: "Arco Glacial", //グレイシャルアーチ
            type: "Arco", //弓（武器）
            icon: "images/crafting/bow6.png",
            image: "",
            level: "Nv Inicial 1~6 (Nv Max: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+172",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+34",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["Núcleo IC de Alta Performance","Cajado decorado de Goblin","Galho de Madeira Flutuante","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Avançada]","Goblin Sábio<br>Lago Fiel","Coleta<br>Lago Fiel"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Retribution
        { 
            name: "Retribuição", //リトリビューション
            type: "Cajado", //杖（武器）
            icon: "images/crafting/staff6.png",
            image: "",
            level: "Nv Inicial 1~6 (Nv Max: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+195",
                    /*STR*/"+0",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+3",
                    /*MND*/"+5",
                    /*HP*/"+33",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["Núcleo IC de Alta Performance","Cajado decorado de Goblin","Galho de Madeira Flutuante","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Avançada]","Goblin Sábio<br>Lago Fiel","Coleta<br>Lago Fiel"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        
        
        // 7 Sharp Edged Sword
        { 
            name: "Espada da Lâmina Afiada", //鋭刃剣
            type: "Espada", //剣（武器）
            icon: "images/crafting/sword7.png",
            image: "",
            level: "Nv Inicial 1~7 (Nv Max: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+218",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+41",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Amarelo Bahamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa Avançada]","Goblin Ancião Incandescente<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Vale Garra do Dragão [Exploração Livre]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Ground Edge
        { 
            name: "Lâmina da Terra", //グラウンドエッジ
            type: "Machado", //斧（武器）
            icon: "images/crafting/axe7.png",
            image: "images/crafting/axe7L.png",
            level: "Nv Inicial 1~7 (Nv Max: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+242",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+39",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Amarelo Bahamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa Avançada]","Goblin Ancião Incandescente<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Vale Garra do Dragão [Exploração Livre]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Groundrunner's Bow
        { 
            name: "Arco do Correventos", //地走りの弓
            type: "Arco", //弓（武器）
            icon: "images/crafting/bow7.png",
            image: "",
            level: "Nv Inicial 1~7 (Nv Max: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+197",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Amarelo Bahamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa Avançada]","Goblin Ancião Incandescente<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Vale Garra do Dragão [Exploração Livre]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Valeed Rod
        { 
            name: "Cajado Valeed", //バリードロッド
            type: "Cajado", //杖（武器）
            icon: "images/crafting/staff7.png",
            image: "",
            level: "Nv Inicial 1~7 (Nv Max: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+224",
                    /*STR*/"+0",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+0",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Amarelo Bahamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa Avançada]","Goblin Ancião Incandescente<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Vale Garra do Dragão [Exploração Livre]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        }
          
    ],
    
    // RUSSIAN
    [
        // 1 Novice Sword
        { 
            name: "Меч новичка", //ノービスソード
            type: "Меч", //剣（武器）
            icon: "images/crafting/sword1.png",
            image: "images/crafting/sword1L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 7)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+77",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+14",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Покупается в оружейном магазине","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Оружейный магазин<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Battle Axe
        { 
            name: "Боевой топор", //バトルアックス
            type: "Топор", //斧（武器）
            icon: "images/crafting/axe1.png",
            image: "",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 7)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+85",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+13",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Покупается в оружейном магазине","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Оружейный магазин<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Hunter Bow
        { 
            name: "Охотничий лук", //ハンターボウ
            type: "Лук", //弓（武器）
            icon: "images/crafting/bow1.png",
            image: "images/crafting/bow1L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 7)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+60",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Покупается в оружейном магазине","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Оружейный магазин<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Training Rod
        { 
            name: "Тренировочный посох", //トレーニングロッド
            type: "Посох", //杖（武器）
            icon: "images/crafting/staff1.png",
            image: "",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 7)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+78",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Покупается в оружейном магазине","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Оружейный магазин<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 2 Fanged Sword
        { 
            name: "Клыкастый меч", //爪牙剣
            type: "Меч", //剣（武器）
            icon: "images/crafting/sword2.png",
            image: "images/crafting/sword2L.png",
            level: "Начиная с 1 ~ 2 уровня (Макс. ур.: 12)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+103",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+18",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["Фрагмент Драконий Кости","Клык Грохочущего Вепря","Длинная Трава","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Очистить Подземелье<br>Dragonclaw Valley [Additional Survey]","Грохочущий Вепрь<br>Andra Basin","Собирать<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Mist Cutter
        { 
            name: "Туманорез", //霧払い
            type: "Топор", //斧（武器）
            icon: "images/crafting/axe2.png",
            image: "images/crafting/axe2L.png",
            level: "Начиная с 1 ~ 2 уровня (Макс. ур.: 12)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["Фрагмент Драконий Кости","Клык Грохочущего Вепря","Длинная Трава","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Очистить подземелье<br>Dragonclaw Valley [Additional Survey]","Грохочущий Вепрь<br>Andra Basin","Собирать<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Flashwing Bow
        { 
            name: "Лук Светокрылых", //閃翼の弓｀
            type: "лук", //弓（武器）
            icon: "images/crafting/bow2.png",
            image: "images/crafting/bow2L.png",
            level: "Начиная с 1 ~ 2 уровня (Макс. ур.: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+93",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+16",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["Фрагмент Драконий Кости","Клык Грохочущего Вепря","Длинная Трава","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Очистить Подземелье<br>Dragonclaw Valley [Additional Survey]","Грохочущий Вепрь<br>Andra Basin","Собирать<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Ancient Staff
        { 
            name: "Древний Посох", //往古の杖
            type: "Посох", //杖（武器）
            icon: "images/crafting/staff2.png",
            image: "",
            level: "Начиная с 1 ~ 2 уровня (Макс. ур.: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["Фрагмент Драконий Кости","Клык Грохочущего Вепря","Длинная Трава","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Очистить Подземелье<br>Dragonclaw Valley [Additional Survey]","Грохочущий Вепрь<br>Andra Basin","Собирать<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 3 Tower's Blade
        { 
            name: "Клинок Башни", //タワーズブレイド
            type: "Меч", //剣（武器）
            icon: "images/crafting/sword3.png",
            image: "images/crafting/sword3L.png",
            level: "Начиная с 1 ~ 4 уровня (Макс. ур.: 20)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            recipe: ["Ядро IC","Коготь Горной Лисы","Руда Баха","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Очистить Подземелье<br>Pillar of Divinity [Additional Survey]","Горная Лиса<br>Divine Haven Hill","Собирать<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Dual Raster
        { 
            name: "Двойной Растр", //デュアルラスター
            type: "Топор", //斧（武器）
            icon: "images/crafting/axe3.png",
            image: "images/crafting/axe3L.png",
            level: "Начиная с 1 ~ 4 уровня (Макс. ур.: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["Ядро IC","Коготь Горной Лисы","Руда Баха","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Очистить Подземелье<br>Pillar of Divinity [Additional Survey]","Горная Лиса<br>Divine Haven Hill","Собирать<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Alpha Genesis
        { 
            name: "Альфа-генезис", //アルファジェネシス｀
            type: "Лук", //弓（武器）
            icon: "images/crafting/bow3.png",
            image: "images/crafting/bow3L.png",
            level: "Начиная с 1 ~ 4 уровня (Макс. ур.: 20)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["Ядро IC","Рог Рогатого Козла","Дымчатый Мох","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Очистить Подземелье<br>Pillar of Divinity [Additional Survey]","Рогатый козел<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Missionary
        { 
            name: "Missionary", //ミショナリー
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff3.png",
            image: "images/crafting/staff3L.png",
            level: "Начиная с 1 ~ 4 уровня (Макс. ур.: 20)", //初期
            element: "",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["Ядро IC","Рог Рогатого Козла","Дымчатый Мох","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Очистить Подземелье<br>Pillar of Divinity [Additional Survey]","Рогатый Козел<br>Divine Haven Hill","Собирать<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 4 Red Steel Blade
        { 
            name: "Красный Стальной Клинок", //鋼の赤刃
            type: "Меч", //剣（武器）
            icon: "images/crafting/sword4.png",
            image: "images/crafting/sword4L.png",
            level: "Начиная с 1 ~ 4 уровня (Макс. ур.: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+143",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Желтый Багамар","Потертая Дубина Гоблина","Ночной Камень Спокойствия","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Очистить Подземелье<br>Mechanical Ruin Valley [Survey]","Гоблин<br>Soundless Foothills","Собирать<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Ancient Flame-hardened Axe
        { 
            name: "Древний Закаленный Огнем Топор", //古代の火打ち斧
            type: "Топор", //斧（武器）
            icon: "images/crafting/axe4.png",
            image: "images/crafting/axe4L.png",
            level: "Начиная с 1 ~ 4 уровня (Макс. ур.: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+158",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+25",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Желтый Багамар","Потертая Дубина Гоблина","Ночной Камень Спокойствия","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Очистить Подземелье<br>Mechanical Ruin Valley [Survey]","Гоблин<br>Soundless Foothills","Собирать<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Mechanical Firecarved Bow
        { 
            name: "Механический огнерезной лук", //機跡の炎刻弓｀
            type: "Лук", //弓（武器）
            icon: "images/crafting/bow4.png",
            image: "",
            level: "Начиная с 1 ~ 4 уровня (Макс. ур.: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+129",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+24",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Желтый Багамар","Потертая Дубина Гоблина","Круглая Водоросль","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Очистить Подземелье<br>Mechanical Ruin Valley [Survey]","Старейшина Гоблинов<br>Soundless Foothills","Собирать<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Blazing Staff
        { 
            name: "Пылающий Посох", //焼尽の杖
            type: "Посох", //杖（武器）
            icon: "images/crafting/staff4.png",
            image: "",
            level: "Начиная с 1 ~ 4 уровня (Макс. ур.: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Желтый Багамар","Потертая Дубина Гоблина","Круглая Водоросль","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Очистить Подземелье<br>Mechanical Ruin Valley [Survey]","Старейшина Гоблинов<br>Soundless Foothills","Собирать<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        
        // 5 Scaleclaw Sword
        { 
            name: "Чешуйчатый Меч-Коготь", //鋼の赤刃
            type: "Меч", //剣（武器）
            icon: "images/crafting/sword5.png",
            image: "",
            level: "Начиная с 1 ~ 5 уровня (Макс. ур.: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+169",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+30",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["Прочный Фрагмент Драконий Кости","Рог Огра","Фрагмент Метеорита","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Очистить подземелье<br>Dragonclaw Valley [Advanced Survey]","Огр<br>Calm Eve Terraces","Собирать<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Cliff Breaker
        { 
            name: "Разрушитель Скал", //懸崖崩し
            type: "Топор", //斧（武器）
            icon: "images/crafting/axe5.png",
            image: "images/crafting/axe5L.png",
            level: "Начиная с 1 ~ 5 уровня (Макс. ур.: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+188",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+28",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["Прочный Фрагмент Драконий Кости","Рог Огра","Фрагмент Метеорита","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Очистить подземелье<br>Dragonclaw Valley [Advanced Survey]","Огр<br>Calm Eve Terraces","Собирать<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Brilliant Thunderwing Bow
        { 
            name: "Сверкающий Лук Громокрыла", //雷翼の豪弓
            type: "Лук", //弓（武器）
            icon: "images/crafting/bow5.png",
            image: "",
            level: "Начиная с 1 ~ 5 уровня (Макс. ур.: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+153",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+27",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["Прочный Фрагмент Драконий Кости","Светящийся Клык Вепря-Тирана","Boule Fruit","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Очистить подземелье<br>Dragonclaw Valley [Advanced Survey]","Светящийся Вепрь-Тиран<br>Calm Eve Terraces","Собирать<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Old Dragon's Staff
        { 
            name: "Посох Старого Дракона", //古竜の杖
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff5.png",
            image: "",
            level: "Начиная с 1 ~ 5 уровня (Макс. ур.: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+174",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+3",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["Прочный Фрагмент Драконий Кости","Светящийся Клык Вепря-Тирана","Буль Фрукт","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Очистить подземелье<br>Dragonclaw Valley [Advanced Survey]","Светящийся Вепрь-Тиран<br>Calm Eve Terraces","Собирать<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        
        // 6 Bapharia's Guidance
        { 
            name: "Руководство Бафарии", //バファリアの標
            type: "Меч", //剣（武器）
            icon: "images/crafting/sword6.png",
            image: "images/crafting/sword6L.png",
            level: "Начиная с 1 ~ 6 уровня (Макс. ур.: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+190",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+10",
                   ],
            recipe: ["Высокопроизводительное Ядро IC","Рог Лося Кайзера","Дрожащая медь","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Очистить подземелье<br>Pillar of Divinity [Advanced Survey]","Лось Кайзер<br>Fiel Pond","Собирать<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Wild Ice Edge
        { 
            name: "Неистовое Ледяное Лезвие", //アイスエッジワイルド
            type: "Топор", //斧（武器）
            icon: "images/crafting/axe6.png",
            image: "images/crafting/axe6L.png",
            level: "Начиная с 1 ~ 6 уровня (Макс. ур.: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+211",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["Высокопроизводительное Ядро IC","Рог Лося Кайзера","Дрожащая медь","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Очистить подземелье<br>Pillar of Divinity [Advanced Survey]","Лось Кайзер<br>Fiel Pond","Собирать<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Glacial Arch
        { 
            name: "Ледовая Дуга", //グレイシャルアーチ
            type: "Лук", //弓（武器）
            icon: "images/crafting/bow6.png",
            image: "",
            level: "Начиная с 1 ~ 6 уровня (Макс. ур.: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+172",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+34",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["Высокопроизводительное Ядро IC","Украшенный посох гоблина","Ветка Сплавного Леса","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Очистить подземелье<br>Pillar of Divinity [Advanced Survey]","Гоблин-Мудрец<br>Fiel Pond","Собирать<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Retribution
        { 
            name: "Возмездие", //リトリビューション
            type: "Посох", //杖（武器）
            icon: "images/crafting/staff6.png",
            image: "",
            level: "Начиная с 1 ~ 6 уровня (Макс. ур.: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+195",
                    /*STR*/"+0",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+3",
                    /*MND*/"+5",
                    /*HP*/"+33",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["Высокопроизводительное Ядро IC","Украшенный посох гоблина","Ветка Сплавного Леса","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Очистить подземелье<br>Pillar of Divinity [Advanced Survey]","Гоблин-Мудрец<br>Fiel Pond","Собирать<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        
        
        // 7 Sharp Edged Sword
        { 
            name: "Меч С Острым Лезвием", //鋭刃剣
            type: "Меч", //剣（武器）
            icon: "images/crafting/sword7.png",
            image: "",
            level: "Начиная с 1 ~ 7 уровня (Макс. ур.: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+218",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+41",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Высококачественный Желтый Багамар","Большой Жезл Гоблина","Руда Плачущего Дракона","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Очистить подземелье<br>Mechanical Ruin Valley [Advanced Survey]","Пылающий Гоблин-Старейшина<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Dragonclaw Valley [Свобоное Исследование]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Ground Edge
        { 
            name: "Лезвие Земли", //グラウンドエッジ
            type: "Топор", //斧（武器）
            icon: "images/crafting/axe7.png",
            image: "images/crafting/axe7L.png",
            level: "Начиная с 1 ~ 7 уровня (Макс. ур.: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+242",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+39",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Высококачественный Желтый Багамар","Большой Жезл Гоблина","Руда Плачущего Дракона","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Очистить подземелье<br>Mechanical Ruin Valley [Advanced Survey]","Пылающий Гоблин-Старейшина<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Dragonclaw Valley [Свобоное Исследование]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Groundrunner's Bow
        { 
            name: "Лук Бегущего по земле", //地走りの弓
            type: "Лук", //弓（武器）
            icon: "images/crafting/bow7.png",
            image: "",
            level: "Начиная с 1 ~ 7 уровня (Макс. ур.: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+197",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Высококачественный Желтый Багамар","Большой Жезл Гоблина","Руда Плачущего Дракона","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Очистить подземелье<br>Mechanical Ruin Valley [Advanced Survey]","Пылающий Гоблин-Старейшина<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Dragonclaw Valley [Свобоное Исследование]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Valeed Rod
        { 
            name: "Валидовый Посох", //バリードロッド
            type: "Посох", //杖（武器）
            icon: "images/crafting/staff7.png",
            image: "",
            level: "Начиная с 1 ~ 7 уровня (Макс. ур.: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Ячейки", "?"], //スロット数
            stats: [/*ATK*/"+224",
                    /*STR*/"+0",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+0",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Высококачественный Желтый Багамар","Большой Жезл Гоблина","Руда Плачущего Дракона","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Очистить подземелье<br>Mechanical Ruin Valley [Advanced Survey]","Пылающий Гоблин-Старейшина<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Dragonclaw Valley [Свобоное Исследование]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        }
    ]
    
]

// Battle Imajinn
var biHolder = [
    
    // ENGLISH
    [
        // Pink Piglet ピンクウリボ
        { 
            name: "Pink Piglet",
            type: "Heal type",
            image: "images/map/pinkpiglet.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Piglet's Tranquility (heal)","effectiveness", "175","67","Summons Pink Piglet's Imagine<br>who creates a healing field around itself"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+18",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+9",
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
            recipe: ["Pink Piglet's Idea","Ripple Stone","Piglet Skin","2,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["1","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Pink Piglet<br>Skyquake Fields","Gather<br>Skyquake Fields","Piglet<br>Skyquake Fields"],
            tooltipBg: [
                tooltipSkyquake,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Ferocious Beast 猛る獣
        { 
            name: "Ferocious Beast",
            type: "Support type",
            image: "images/map/ferociousbeast.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // アクトクライ・猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Act Cry (support)","effectiveness", "150","150","Summons Ferocious Beast's Imagine<br>who gives the summoner a temporary ATK increase"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Ferocious Beast's Idea","Dawngrass","Rumble Boar's Skin","7,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Ferocious Beast<br>Minster Hills","Gather<br>Minster Hills","Rumble Boar<br>Andra Basin"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,
                tooltipAndra],
            tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
        },
        // Red Splash 赤い飛沫
        { 
            name: "Red Splash",
            type: "Attack type",
            image: "images/map/redsplash.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 兜割り・赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける。
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Helm Splitter (attack)","effectiveness", "422","166","Summons Red Splash's Imagine<br>who targets and strikes the target's head with its club"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
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
            recipe: ["Red Splash's Idea","Plateau Lily","Highland Fox Nail","15,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Damage increase (regular attack)","STR increase", "<br>"],
            tooltipText: ["Red Splash<br>Minster Hills","Gather<br>Soundless Foothills","Highland Fox<br>Divine Haven Hill"],
            tooltipBg: [
                tooltipMinster,
                tooltipSoundless,
                tooltipDivine],
            tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Deep Green Fang 深緑の牙
        { 
            name: "Deep Green Fang",
            type: "Attack type",
            image: "images/map/deepgreenfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 猪突猛進・深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Boar Rush (attack)","effectiveness", "514","166","Summons Deep Green Fang's Imagine<br>who performs a charge attack towards the center of the target"],
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
            recipe: ["Deep Green Fang's Idea","Asterbass","Tyrant Boar's Skin","17,000"],
            iconSrc: [iElite,iShell,iCombat],
            amt: ["3","3","3"],
            abilList: ["Damage increase (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Deep Green Fang<br>Andra Basin","Gather<br>Minster Hills","Tyrant Boar<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                tooltipAndra,
                tooltipMinster,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Iron Fang 鉄牙
        { 
            name: "Iron Fang",
            type: "Attack type",
            image: "images/map/ironfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // マウンテンスロー・鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Mountain Throw (attack)","effectiveness", "524","169","Summons Iron Fang's Imagine<br>who throws enemies into the air with its large fangs"],
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
            recipe: ["Iron Fang's Idea","Beartree Leaf","Goblin Mane","20,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Iron Fang<br>Andra Basin","Gather<br>Divine Haven Hill","Goblin<br>Minster hills"],
            tooltipBg: [
                tooltipAndra,
                tooltipDivine,
                tooltipMinster],
            tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
        },
        // Flame Prison 炎獄
        { 
            name: "Flame Prison",
            type: "Attack type",
            image: "images/map/flamingprison.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // パワースイング・炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Power Swing (attack)","effectiveness", "710","169","Summons Flame Prison's Imagine<br>who swings its club to enemies in front of it"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+3",
                    /*HP*/"+31",
                    /*VIT*/"+4",
                    /*MND*/"+3",
                    /*ATK*/"+19",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+2"
                   ],
            recipe: ["Flame Prison's Idea","Jasper Stone","Glowing Goblin's Mane","86,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["5","3","3"],
            abilList: ["Reduce cooldown (battle imagine)","Max HP increase", "<br>"],
            tooltipText: ["Flame Prison<br>Calm Eve Terraces","Gather<br>Soundless Foothills","Glowing Goblin<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipSoundless,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Ferocious Gold 猛る金色
        { 
            name: "Ferocious Gold",
            type: "Attack type",
            image: "images/map/ferociousgold.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // デスタックル・猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Death Tackle (attack)","effectiveness", "696","166","Summons Ferocious Gold's Imagine<br>who performs a charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+?",
                    /*VIT*/"+5",
                    /*MND*/"+3",
                    /*ATK*/"+18",
                    /*DEX*/"+3"
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
            recipe: ["Ferocious Gold's Idea","Nectar Seed","Ferocious Beast's Tail","85,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["5","3","1"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Ferocious Gold<br>Calm Eve Terraces","Gather<br>Fiel Pond","Ferocious Beast<br>Minster Hills"],
            tooltipBg: [tooltipCalmEve,
                        tooltipFiel,
                        tooltipMinster],
            tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
        },
        // Sapphire Trot サファイアトロット
        { 
            name: "Sapphire Trot",
            type: "Attack type",
            image: "images/map/sapphiretrot.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 落石牙・サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Stone Fang Drop (attack)","effectiveness", "483","156","Summons Sapphire Trot's Imagine<br>who lunges at an enemy and bites them"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+19",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+10",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Sapphire Trot's Idea","Andra Cedar Twig","Elder Goblin's Mane","25,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Crit rate increase","DEX increase", "<br>"],
            tooltipText: ["Sapphire Trot<br>Divine Haven Hill","Gather<br>Minster Hills","Elder Goblin<br>Andra Basin"],
            tooltipBg: [tooltipDivine,
                        tooltipMinster,
                        tooltipAndra],
            tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
        },
        // Flaming Horns 炎角
        { 
            name: "Flaming Horns",
            type: "Attack type",
            image: "images/map/flaminghorns.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // カイザーブラスト・炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Kaiser Blast (attack)","effectiveness", "493","159","Summons Flaming Horns' Imagine<br>who performs a Lightning elemental charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+23",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+12",
                    /*DEX*/"+4"
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
            recipe: ["Flaming Horns' Idea","Blesio Nut","Goblin Sage's Mane","26,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Flaming Horns<br>Divine Haven Hill","Gather<br>Divine Haven Hill","Goblin Sage<br>Soundless Foothills"],
            tooltipBg: [tooltipDivineLeft,
                       tooltipDivine,
                       tooltipSoundless],
            tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Spooky Goat スプーキーゴート
        { 
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
        },
        // Evil Healer 悪しき癒し手
        { 
            name: "Evil Healer",
            type: "Heal type",
            image: "images/map/evilhealer.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // エリアヒール・悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Area Heal (heal)","effectiveness", "267","71","Summons Evil Healer's Imagine<br>who heals the HP allies around it"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
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
            recipe: ["Evil Healer's Idea","Rimeril Ore","Ogre Bone","56,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Evil Healer<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Ogre<br>Calm Eve Terraces"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipCalmEve],
            tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
        },
        // Trick Elder トリックエルダー
        { 
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
        },
        // Elder Goblin エルダーゴブリン
        { 
            name: "Elder Goblin",
            type: "Attack type",
            image: "images/map/eldergoblin.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ファイアボール・エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Fireball (attack)","effectiveness", "604","166","Summons Elder Goblin's Imagine<br>who blasts one fireball at the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+24",
                    /*VIT*/"+3",
                    /*MND*/"+5",
                    /*ATK*/"+13",
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
            recipe: ["Elder Goblin's Idea","Magna Moss Fossil","Kaiser Elk Fur","43,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Arrogant Conjurer<br>Dragon Claw Valley [Free Exploration]","Gather<br>Calm Eve Terraces","Kaiser Elk<br>Divine Haven Hill"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipCalmEve,
                       tooltipDivine],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Goblin ゴブリン
        { 
            name: "Goblin",
            type: "Attack type",
            image: "images/map/goblin.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ゴブリンスタブ・ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Stab (attack)","effectiveness", "414","163","Summons Goblin's Imagine<br>who stabs the target with its club"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
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
            recipe: ["Goblin's Idea","Iron Ore","Land Fox Tail","9,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["2","3","1"],
            abilList: ["Damage increase (tactical skill 1)","STR increase", "<br>"],
            tooltipText: ["Valley Raider<br>Dragon Claw Valley [Free Exploration]","Gather<br>Skyquake Fields","Land Fox<br>Skyquake Fields"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipSkyquake,
                       tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Land Fox ランドフォックス
        { 
            name: "Land Fox",
            type: "Attack type",
            image: "images/map/landfox.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // クラウンストライク・ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Crown Strike (attack)","effectiveness", "669","159","Summons Land Fox's Imagine<br>who performs a leaping tackle at enemies"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Land Fox's Idea","Lamusa Flower","Pink Piglet's Skin","1,500"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["1","3","1"],
            abilList: ["Crit damage increase","DEX increase", "<br>"],
            tooltipText: ["Loudshot<br>Dragon Claw Valley [Free Exploration]","Gather<br>Skyquake Fields","Pink Piglet<br>Skyquake Fields"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
        },
        // Tyrant Boar タイラントボア
        { 
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
        },
        // Horned Goat ホーンゴート
        { 
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
        },
        // Goblin Sage ゴブリンセージ
        { 
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
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "Kaiser Elk",
            type: "Attack type",
            image: "images/map/kaiserelk.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // クラッパーホーン・カイザーエルクのイマジンを召喚しターゲットを角で振り払う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Clapper Horn (attack)","effectiveness", "756","159","Summons Kaiser Elk's Imagine<br>who attacks enemies with its horns"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+35",
                    /*VIT*/"+4",
                    /*MND*/"+6",
                    /*ATK*/"+19",
                    /*DEX*/"+6"
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
            recipe: ["Kaiser Elk's Idea","Longan Flower","Evil Healer's Mane","140,000"],
            iconSrc: [iDung,iFlower,iElite],
            amt: ["7","3","1"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [S Rank]","Gather<br>Dragon Claw Valley [Free Exploration]","Evil Healer<br>Soundless Foothills"],
            tooltipBg: [
                tooltipArena,
                tooltipDragonclaw,
                tooltipSoundless],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
        },
        // Raging Kingfang 荒ぶる牙王
        { 
            name: "Raging Kingfang",
            type: "Attack type",
            image: "images/map/ragingkingfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // タイラントアサルト・荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Tyrant Assault (attack)","effectiveness", "787","166","Summons Raging Kingfang's Imagine<br>who performs a wide-range charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+34",
                    /*VIT*/"+6",
                    /*MND*/"+4",
                    /*ATK*/"+20",
                    /*DEX*/"+4"
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
            recipe: ["Raging Kingfang's Idea","Shell Fossil","Flame Prison's Bone","190,000"],
            iconSrc: [iElite,iRock,iElite],
            amt: ["7","3","1"],
            abilList: ["Reduce cooldown (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Raging Kingfang<br>Dragon Claw Valley [Free Exploration]","Gather<br>Fiel Pond","Flame Prison<br>Calm Eve Terraces"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipFiel,
                tooltipCalmEve],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
        },
        // Sealed Atrocity 封印されし暴虐
        { 
            name: "Sealed Atrocity",
            type: "Attack type",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // アースクエイク
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Earthquake (attack)","effectiveness", "802","?","Summons Sealed Atrocity's Imagine<br>who performs a large Earth elemental attack with centered around itself"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+35",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+21",
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
            tooltipText: ['Complete quest "Collect Battle Imagine! #2"<br><br>After completing "Collect Battle Imagine! #1", craft Deep Green Fang, Iron Fang, Sapphire Trot, and Spooky Goat',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Plidoke プリドーク
        { 
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
        },
    ],
    
    // JAPANESE
    [
        // Pink Piglet ピンクウリボ
        { 
            name: "ピンクウリボ",
            type: "回復タイプ",
            image: "images/map/pinkpiglet.mp4",
            level: "初期 Lv 1~1 (Max Lv: 15)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ウリボの安らぎ / 回復タイプ","効果値", "175","67","ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+18",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+9",
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
            recipe: ["ピンクウリボのイデア","波紋石","ウリボの毛皮","2,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["1","3","1"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["ピンクウリボ<br>海鳴りの草原","採取<br>海鳴りの草原","ウリボ<br>海鳴りの草原"],
            tooltipBg: [
                tooltipSkyquake,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Ferocious Beast 猛る獣
        { 
            name: "猛る獣",
            type: "補助タイプ",
            image: "images/map/ferociousbeast.mp4",
            level: "初期 Lv 1~1 (Max Lv: 15)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;アクトクライ / 補助タイプ","効果値", "150","150","猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["猛る獣のイデア","あかつき草","ランブルボアの毛皮","7,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["最大STアップ","器用さアップ", "<br>"],
            tooltipText: ["猛る獣<br>ミンスター丘陵","採取<br>ミンスター丘陵","ランブルボア<br>アンドラ盆地"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,
                tooltipAndra],
            tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
        },
        // Red Splash 赤い飛沫
        { 
            name: "赤い飛沫",
            type: "攻撃タイプ",
            image: "images/map/redsplash.mp4",
            level: "初期 Lv 1~1 (Max Lv: 15)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;兜割り / 攻撃タイプ","効果値", "422","166","赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
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
            recipe: ["赤い飛沫のイデア","高原ユリ","ハイランドフォックスの爪","15,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["ダメージアップ・通常攻撃","筋力アップ", "<br>"],
            tooltipText: ["赤い飛沫<br>ミンスター丘陵","採取<br>鎮まりの山麓","ハイランドフォックス<br>神の見守る丘"],
            tooltipBg: [
                tooltipMinster,
                tooltipSoundless,
                tooltipDivine],
            tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Deep Green Fang 深緑の牙
        { 
            name: "深緑の牙",
            type: "攻撃タイプ",
            image: "images/map/deepgreenfang.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;猪突猛進 / 攻撃タイプ","効果値", "514","166","深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["深緑の牙のイデア","アステルバス","タイラントボアの毛皮","17,000"],
            iconSrc: [iElite,iShell,iCombat],
            amt: ["3","3","3"],
            abilList: ["ダメージアップ・ULT","攻撃力アップ", "<br>"],
            tooltipText: ["深緑の牙<br>アンドラ盆地","採取<br>ミンスター丘陵","タイラントボア<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                tooltipAndra,
                tooltipMinster,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Iron Fang 鉄牙
        { 
            name: "鉄牙",
            type: "攻撃タイプ",
            image: "images/map/ironfang.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;マウンテンスロー / 攻撃タイプ","効果値", "524","169","S鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["鉄牙のイデア","ベアツリーの葉","ゴブリンのたてがみ","20,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["ダメージアップ・近接","攻撃力アップ", "<br>"],
            tooltipText: ["鉄牙<br>アンドラ盆地","採取<br>神の見守る丘","ゴブリン<br>ミンスター丘陵"],
            tooltipBg: [
                tooltipAndra,
                tooltipDivine,
                tooltipMinster],
            tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
        },
        // Flame Prison 炎獄
        { 
            name: "炎獄",
            type: "攻撃タイプ",
            image: "images/map/flamingprison.mp4",
            level: "初期 Lv 1~1 (Max Lv: 30)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;パワースイング / 攻撃タイプ","効果値", "710","169","炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+3",
                    /*HP*/"+31",
                    /*VIT*/"+4",
                    /*MND*/"+3",
                    /*ATK*/"+19",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+2"
                   ],
            recipe: ["炎獄のイデア","碧玉","ゴブリン・グロウのたてがみ","86,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["5","3","3"],
            abilList: ["インターバル短縮・Bイマジン","最大HPアップ", "<br>"],
            tooltipText: ["炎獄<br>夕凪の段丘","採取<br>鎮まりの山麓","ゴブリン・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipSoundless,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Ferocious Gold 猛る金色
        { 
            name: "猛る金色",
            type: "攻撃タイプ",
            image: "images/map/ferociousgold.mp4",
            level: "初期 Lv 1~1 (Max Lv: 30)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;デスタックル / 攻撃タイプ","効果値", "696","166","猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+?",
                    /*VIT*/"+5",
                    /*MND*/"+3",
                    /*ATK*/"+18",
                    /*DEX*/"+3"
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
            recipe: ["猛る金色のイデア","甘露の種","猛る獣の尾","85,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["5","3","1"],
            abilList: ["ダメージアップ・近接","筋力アップ", "<br>"],
            tooltipText: ["猛る金色<br>夕凪の段丘","採取<br>フィエル嶺水地","猛る獣<br>ミンスター丘陵"],
            tooltipBg: [tooltipCalmEve,
                        tooltipFiel,
                        tooltipMinster],
            tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
        },
        // Sapphire Trot サファイアトロット
        { 
            name: "サファイアトロット",
            type: "攻撃タイプ",
            image: "images/map/sapphiretrot.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;落石牙 / 攻撃タイプ","効果値", "483","156","サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+19",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+10",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["サファイアトロットのイデア","アンドラ杉の小枝","エルダーゴブリンのたてがみ","25,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["会心率アップ","器用さアップ", "<br>"],
            tooltipText: ["サファイアトロット<br>神の見守る丘","採取<br>ミンスター丘陵","エルダーゴブリン<br>アンドラ盆地"],
            tooltipBg: [tooltipDivine,
                        tooltipMinster,
                        tooltipAndra],
            tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
        },
        // Flaming Horns 炎角
        { 
            name: "炎角",
            type: "攻撃タイプ",
            image: "images/map/flaminghorns.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;カイザーブラスト / 攻撃タイプ","効果値", "493","159","炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+23",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+12",
                    /*DEX*/"+4"
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
            recipe: ["炎角のイデア","ブレシオの実","ゴブリンセージのたてがみ","26,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["被ダメージ軽減・近接","防御アップ", "<br>"],
            tooltipText: ["炎角<br>神の見守る丘","採取<br>神の見守る丘","ゴブリンセージ<br>鎮まりの山麓"],
            tooltipBg: [tooltipDivineLeft,
                       tooltipDivine,
                       tooltipSoundless],
            tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Spooky Goat スプーキーゴート
        { 
            name: "スプーキーゴート",
            type: "補助タイプ",
            image: "images/map/spookygoat.mp4",
            level: "初期 Lv 1~1 (Max Lv: 25)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ゴートヘイスト / 補助タイプ","効果値", "130","130","スプーキーゴートのイマジンを召喚し召喚者の移動速度を一定時間上昇させる"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["スプーキーゴートのイデア","斜陽杉の小枝","タイラントボア・グロウの毛皮","45,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["4","3","3"],
            abilList: ["最大STアップ","器用さアップ", "<br>"],
            tooltipText: ["スプーキーゴート<br>鎮まりの山麓","採取<br>夕凪の段丘","タイラントボア・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipDragonclaw],
            tooltipIcn: ["transform: translate(2.5vw, 4.9vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Evil Healer 悪しき癒し手
        { 
            name: "悪しき癒し手",
            type: "回復タイプ",
            image: "images/map/evilhealer.mp4",
            level: "初期 Lv 1~1 (Max Lv: 25)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;エリアヒール / 回復タイプ","効果値", "267","71","悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
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
            recipe: ["悪しき癒し手のイデア","リメリル鉱石","オーガの骨","56,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["悪しき癒し手<br>鎮まりの山麓","採取<br>夕凪の段丘","オーガ<br>夕凪の段丘"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipCalmEve],
            tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
        },
        // Trick Elder トリックエルダー
        { 
            name: "トリックエルダー",
            type: "攻撃タイプ",
            image: "images/map/trickelder.mp4",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;エルダークリスタル / 攻撃タイプ","効果値", "741","156","トリックエルダーのイマジンを召喚しターゲットに対して氷柱を3発飛ばす"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["トリックエルダーのイデア","ドラゴンヴェノム","深緑の牙の毛皮","130,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["3","3","1"],
            abilList: ["ダメージアップ・遠隔","知力アップ", "<br>"],
            tooltipText: ["トリックエルダー<br>フィエル嶺水地","採取<br>巨竜の爪痕・自由探索","深緑の牙<br>アンドラ盆地"],
            tooltipBg: [tooltipFiel,
                       tooltipDragonclaw,
                       tooltipAndra],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(5.8vw, 11vw)"]
        },
        // Elder Goblin エルダーゴブリン
        { 
            name: "エルダーゴブリン",
            type: "攻撃タイプ",
            image: "images/map/eldergoblin.mp4",
            level: "初期 Lv 1~1 (Max Lv: 25)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ファイアボール / 攻撃タイプ","効果値", "604","166","エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+24",
                    /*VIT*/"+3",
                    /*MND*/"+5",
                    /*ATK*/"+13",
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
            recipe: ["エルダーゴブリンのイデア","マグナ苔の化石","カイザーエルクの毛皮","43,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["ダメージアップ・遠隔","知力アップ", "<br>"],
            tooltipText: ["図に乗った魔術師<br>巨竜の爪痕・自由探索","採取<br>夕凪の段丘","カイザーエルク<br>神の見守る丘"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipCalmEve,
                       tooltipDivine],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Goblin ゴブリン
        { 
            name: "ゴブリン",
            type: "攻撃タイプ",
            image: "images/map/goblin.mp4",
            level: "初期 Lv 1~1 (Max Lv: 15)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ゴブリンスタブ / 攻撃タイプ","効果値", "414","163","ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
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
            recipe: ["ゴブリンのイデア","鉄功績","ランドフォックスの尾","9,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["2","3","1"],
            abilList: ["ダメージアップ・T1","筋力アップ", "<br>"],
            tooltipText: ["谷荒らし<br>巨竜の爪痕・自由探索","採取<br>海鳴りの草原","ランドフォックス<br>海鳴りの草原"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipSkyquake,
                       tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Land Fox ランドフォックス
        { 
            name: "ランドフォックス",
            type: "攻撃タイプ",
            image: "images/map/landfox.mp4",
            level: "初期 Lv 1~1 (Max Lv: 30)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;クラウンストライク / 攻撃タイプ","効果値", "669","159","ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["ランドフォックス","ラムサの花","ピンクウリボの毛皮","1,500"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["1","3","1"],
            abilList: ["会心力アップ","器用さアップ", "<br>"],
            tooltipText: ["ラウドシャウト<br>巨竜の爪痕・自由探索","採取<br>海鳴りの草原","ピンクウリボ<br>海鳴りの草原"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
        },
        // Tyrant Boar タイラントボア
        { 
            name: "タイラントボア",
            type: "攻撃タイプ",
            image: "images/map/tyrantboar.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;猟犬殺し / 攻撃タイプ","効果値", "504","163","タイラントボアのイマジンを召喚しターゲットを頭突きで攻撃する"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["タイラントボアのイデア","砂銀","ホーンゴートの毛皮","45,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["2","3","3"],
            abilList: ["ダメージアップ・バトルイマジン","攻撃力アップ", "<br>"],
            tooltipText: ["闘技場・ランクC","採取<br>神の見守る丘","ホーンゴート<br>フィエル嶺水地"],
            tooltipBg: [
                tooltipArena,
                tooltipDivine,
                tooltipFiel],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","visibility: hidden"]
        },
        // Horned Goat ホーンゴート
        { 
            name: "ホーンゴート",
            type: "攻撃タイプ",
            image: "images/map/horngoat.mp4",
            level: "初期 Lv 1~1 (Max Lv: 25)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ビハインドキック / 攻撃タイプ","効果値", "593","163","ホーンゴートのイマジンを召喚しターゲットを後ろ足で蹴り飛ばす"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ホーンゴートのイデア","銀鉱石","エルダーゴブリン・グロウのたてがみ","83,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["3","3","3"],
            abilList: ["被ダメージ軽減・遠隔","防御アップ", "<br>"],
            tooltipText: ["闘技場・ランクB","採取<br>フィエル嶺水地","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Goblin Sage ゴブリンセージ
        { 
            name: "ゴブリンセージ",
            type: "回復タイプ",
            image: "images/map/goblinsage.mp4",
            level: "初期 Lv 1~1 (Max Lv: 30)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ゴブリンセージの調律 / 回復タイプ","効果値", "323","74","ゴブリンセージのイマジンを召喚し召喚者のHPを回復させる"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ゴブリンセージのイデア","スパイクフィッシュ","サファイアトロットの牙","120,000"],
            iconSrc: [iDung,iShell,iElite],
            amt: ["5","3","1"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["闘技場・ランクA","採取<br>フィエル嶺水地","サファイアトロット<br>神の見守る丘"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDivine],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "カイザーエルク",
            type: "攻撃タイプ",
            image: "images/map/kaiserelk.mp4",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;クラッパーホーン / 攻撃タイプ","効果値", "756","159","カイザーエルクのイマジンを召喚しターゲットを角で振り払う"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+35",
                    /*VIT*/"+4",
                    /*MND*/"+6",
                    /*ATK*/"+19",
                    /*DEX*/"+6"
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
            recipe: ["カイザーエルクのイデア","竜眼の花","悪しき癒し手のたてがみ","140,000"],
            iconSrc: [iDung,iFlower,iElite],
            amt: ["7","3","1"],
            abilList: ["被ダメージ軽減・近接","防御アップ", "<br>"],
            tooltipText: ["闘技場・ランクS","採取<br>巨竜の爪痕・自由探索","悪しき癒し手<br>鎮まりの山麓"],
            tooltipBg: [
                tooltipArena,
                tooltipDragonclaw,
                tooltipSoundless],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
        },
        // Raging Kingfang 荒ぶる牙王
        { 
            name: "荒ぶる牙王",
            type: "攻撃タイプ",
            image: "images/map/ragingkingfang.mp4",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;タイラントアサルト / 攻撃タイプ","効果値", "787","166","荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+34",
                    /*VIT*/"+6",
                    /*MND*/"+4",
                    /*ATK*/"+20",
                    /*DEX*/"+4"
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
            recipe: ["荒ぶる牙王のイデア","貝の化石","炎獄の骨","190,000"],
            iconSrc: [iElite,iRock,iElite],
            amt: ["7","3","1"],
            abilList: ["インターバル短縮・ULT","攻撃力アップ", "<br>"],
            tooltipText: ["荒ぶる牙王<br>巨竜の爪痕・自由探索","採取<br>フィエル嶺水地","炎獄<br>夕凪の段丘"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipFiel,
                tooltipCalmEve],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
        },
        // Sealed Atrocity 封印されし暴虐
        { 
            name: "封印されし暴虐",
            type: "攻撃タイプ",
            image: "",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;アースクエイク / 攻撃タイプ","効果値", "802","?","封印されし暴虐のイマジンを召喚し封印されし暴虐を中心に広範囲に土属性の攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+35",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+21",
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
            recipe: ["クエストの報酬で入手", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['「バトルイマジンの収集２」をクリア<br><br>「バトルイマジンの収集１」を完了させたら深緑の牙、鉄牙、サファイアトロット、スプーキーゴートのイマジンをクラフト',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Plidoke プリドーク
        { 
            name: "プリドーク",
            type: "攻撃タイプ",
            image: "",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;スライサーアーム / 攻撃タイプ","効果値", "772","?","プリドークのイマジンを召喚し前方のターゲットに両手の剣を突き刺す"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["クエストの報酬で入手", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['「バトルイマジンの収集３」をクリア<br><br>After completing "「バトルイマジンの収集２」を完了させたら???、???、???、???のイマジンをクラフト',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
    ],
    
    // BRAZILIAN PORTUGUESE
    [
        // Pink Piglet ピンクウリボ
        { 
            name: "Leitão Rosa",
            type: "Curandeiro",
            image: "images/map/pinkpiglet.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 15)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Tranquilidade do Leitão (cura)","eficácia", "175","67","Invoca o Imajinn do Leitão Rosa<br>que cria um campo de cura ao redor de si"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+18",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+9",
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
            recipe: ["Ideia do Leitão Rosa","Pedra Ondulada","Pele de Leitão","2,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["1","3","1"],
            abilList: ["Aumento de Cura (imajinn de batalha)","Aumento de Cura", "<br>"],
            tooltipText: ["Leitão Rosa<br>Campos Tremecéus","Coleta<br>Campos Tremecéus","Leitão<br>Campos Tremecéus"],
            tooltipBg: [
                tooltipSkyquake,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Ferocious Beast 猛る獣
        { 
            name: "Besta Feroz",
            type: "Suporte",
            image: "images/map/ferociousbeast.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 15)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // アクトクライ・猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Grito de Luta (suporte)","eficácia", "150","150","Invoca o Imajinn da Besta Feroz<br>que concede ao invocador um aumento temporário de ATK"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Ideia da Besta Feroz","Grama da Alvorada","Pele de Javali Barulhento","7,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Aumento de Fôlego Max","Aumento de DEX", "<br>"],
            tooltipText: ["Besta Feroz<br>Colinas Minster","Coleta<br>Colinas Minster","Javali Barulhento<br>Bacia Andra"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,
                tooltipAndra],
            tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
        },
        // Red Splash 赤い飛沫
        { 
            name: "Respingo Vermelho",
            type: "Dano",
            image: "images/map/redsplash.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 15)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // 兜割り・赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける。
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Divisor de Elmo (atk)","eficácia", "422","166","Invoca o Imajinn do Respingo Vermelho<br>que mira e ataca a cabeça do alvo com o seu porrete"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
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
            recipe: ["Ideia do Respingo Vermelho","Lírio do Planalto","Unha da Raposa da Terra Alta","15,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Aumento de dano (atk padrão)","Aumento de STR", "<br>"],
            tooltipText: ["Respingo Vermelho<br>Colinas Minster","Coleta<br>Sopé Silencioso","Raposa da Terra Alta<br>Colina do Santuário"],
            tooltipBg: [
                tooltipMinster,
                tooltipSoundless,
                tooltipDivine],
            tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Deep Green Fang 深緑の牙
        { 
            name: "Presa Verde Profundo",
            type: "Dano",
            image: "images/map/deepgreenfang.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // 猪突猛進・深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Investida Javali (atk)","eficácia", "514","166","Invoca o Imajinn do Presa Verde Profundo<br>que executa um atk de investida direcionado ao centro do alvo"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Ideia do Presa Verde Profundo","Achigã","Pele de Javali Tirano","17,000"],
            iconSrc: [iElite,iShell,iCombat],
            amt: ["3","3","3"],
            abilList: ["Aumento de dano (suprema)","Aumento de ATK", "<br>"],
            tooltipText: ["Presa Verde Profundo<br>Bacia Andra","Coleta<br>Colinas Minster","Javali Tirano<br>Vale Garra do Dragão [Exploração Livre]"],
            tooltipBg: [
                tooltipAndra,
                tooltipMinster,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Iron Fang 鉄牙
        { 
            name: "Presa de Ferro",
            type: "Dano",
            image: "images/map/ironfang.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // マウンテンスロー・鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Arremesso Montanhês (atk)","eficácia", "524","169","Invoca o Imajinn do Presa de Ferro<br>que arremessa seus inimigos ao ar com suas presas gigantes"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Ideia do Presa de Ferro","Folha de Árvorurso","Juba de Goblin","20,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Aumento de dano (curto-alcance)","Aumento de ATK", "<br>"],
            tooltipText: ["Presa de Ferro<br>Bacia Andra","Coleta<br>Colina do Santuário","Goblin<br>Colinas Minster"],
            tooltipBg: [
                tooltipAndra,
                tooltipDivine,
                tooltipMinster],
            tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
        },
        // Flame Prison 炎獄
        { 
            name: "Prisão Fulgor",
            type: "Dano",
            image: "images/map/flamingprison.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 30)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // パワースイング・炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Golpe Poderoso (atk)","eficácia", "710","169","Invoca o Imajinn do Prisão Fulgor<br>que golpeia com seu porrete os inimigos à sua frente"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+3",
                    /*HP*/"+31",
                    /*VIT*/"+4",
                    /*MND*/"+3",
                    /*ATK*/"+19",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+2"
                   ],
            recipe: ["Ideia do Prisão Fulgor","Pedra Jaspe","Juba de Goblin Incandescente","86,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["5","3","3"],
            abilList: ["Redução de intervalo (imajinn de batalha)","Aumento de HP Max", "<br>"],
            tooltipText: ["Prisão Fulgor<br>Terraço Vespertino","Coleta<br>Sopé Silencioso","Goblin Incandescente<br>Vale Garra do Dragão [Exploração Livre]"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipSoundless,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Ferocious Gold 猛る金色
        { 
            name: "Ouro Feroz",
            type: "Dano",
            image: "images/map/ferociousgold.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 30)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // デスタックル・猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Avanço Mortal (atk)","eficácia", "696","166","Invoca o Imajinn do Ouro Feroz<br>que executa um atk de investida em direção ao alvo"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+?",
                    /*VIT*/"+5",
                    /*MND*/"+3",
                    /*ATK*/"+18",
                    /*DEX*/"+3"
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
            recipe: ["Ideia do Ouro Feroz","Semente de Nectar","Cauda da Besta Feroz","85,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["5","3","1"],
            abilList: ["Aumento de dano (curto-alcance)","Aumento de ATK", "<br>"],
            tooltipText: ["Ouro Feroz<br>Terraço Vespertino","Coleta<br>Lago Fiel","Besta Feroz<br>Colinas Minster"],
            tooltipBg: [tooltipCalmEve,
                        tooltipFiel,
                        tooltipMinster],
            tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
        },
        // Sapphire Trot サファイアトロット
        { 
            name: "Presa Safira",
            type: "Dano",
            image: "images/map/sapphiretrot.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // 落石牙・サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Investida de Pedra (atk)","eficácia", "483","156","Invoca o Imajinn do Presa Safira<br>que executa uma investida e morde o alvo"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+19",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+10",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Ideia do Trote Safira","Galho de Cedro Andra","Juba de Goblin Ancião","25,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Aumento da taxa de Crit","Aumento de DEX", "<br>"],
            tooltipText: ["Presa Safira<br>Colina do Santuário","Coleta<br>Colinas Minster","Goblin Ancião<br>Bacia Andra"],
            tooltipBg: [tooltipDivine,
                        tooltipMinster,
                        tooltipAndra],
            tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
        },
        // Flaming Horns 炎角
        { 
            name: "Chifre Flamejante",
            type: "Dano",
            image: "images/map/flaminghorns.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // カイザーブラスト・炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Explosão do Imperador (atk)","eficácia", "493","159","Invoca o Imajin do Chifre Flamejante<br>que executa um atk elemental de investida elétrico em direção ao alvo"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+23",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+12",
                    /*DEX*/"+4"
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
            recipe: ["Ideia do Chifre Flamejante","Semente de Blésio","Juba de Goblin Sábio","26,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Redução de dano recebido (curto-alcance)","Aumento de DEF", "<br>"],
            tooltipText: ["Chifre Flamejante<br>Colina do Santuário","Coleta<br>Colina do Santuário","Goblin Sábio<br>Sopé Silencioso"],
            tooltipBg: [tooltipDivineLeft,
                       tooltipDivine,
                       tooltipSoundless],
            tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Spooky Goat スプーキーゴート
        { 
            name: "Cabra Sinistra",
            type: "Suporte",
            image: "images/map/spookygoat.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 25)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // ゴートヘイスト・スプーキーゴートのイマジンを召喚し召喚者の移動速度を一定時間上昇させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Pressa da Cabra (suporte)","eficácia", "130","130","Invoca o Imajinn da Cabra Sinistra<br>que concede ao invocador um aumento temporário de velocidade de movimento"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Ideia da Cabra Sinistra","Galho de Cedro do Crepúsculo","Pele de Javali Tirano Incandescente","45,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["4","3","3"],
            abilList: ["Aumento de Fôlego Max","Aumento de DEX", "<br>"],
            tooltipText: ["Cabra Sinistra<br>Sopé Silencioso","Coleta<br>Terraço Vespertino","Javali Tirano Incandescente<br>Vale Garra do Dragão [Exploração Livre]"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipDragonclaw],
            tooltipIcn: ["transform: translate(2.5vw, 4.9vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Evil Healer 悪しき癒し手
        { 
            name: "Curandeiro Maligno",
            type: "Curandeiro",
            image: "images/map/evilhealer.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 25)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // エリアヒール・悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Cura em Área (cura)","eficácia", "267","71","Invoca o Imajinn do Curandeiro Maligno<br>que cura os aliados ao seu redor"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
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
            recipe: ["Ideia do Curandeiro Maligno","Minério de Rimeril","Osso de Ogro","56,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Aumento de Cura (imajinn de batalha)","Aumento de Cura", "<br>"],
            tooltipText: ["Curandeiro Maligno<br>Sopé Silencioso","Coleta<br>Terraço Vespertino","Ogro<br>Terraço Vespertino"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipCalmEve],
            tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
        },
        // Trick Elder トリックエルダー
        { 
            name: "Ancião Trapaceiro",
            type: "Dano",
            image: "images/map/trickelder.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // エルダークリスタル・トリックエルダーのイマジンを召喚しターゲットに対して氷柱を3発飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Cristal Ancião (atk)","eficácia", "741","156","Invoca o Imajinn do Ancião Trapaceiro<br>que lança 3 setas de gelo ao alvo"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Ideia do Ancião Trapaceiro","Veneno de Dragão","Pele de Presa Verde Profundo","130,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["3","3","1"],
            abilList: ["Aumento de dano (longo-alcance)","Aumento de INT", "<br>"],
            tooltipText: ["Ancião Trapaceiro<br>Lago Fiel","Coleta<br>Vale Garra do Dragão [Exploração Livre]","Presa Verde Profundo<br>Bacia Andra"],
            tooltipBg: [tooltipFiel,
                       tooltipDragonclaw,
                       tooltipAndra],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(5.8vw, 11vw)"]
        },
        // Elder Goblin エルダーゴブリン
        { 
            name: "Goblin Ancião",
            type: "Dano",
            image: "images/map/eldergoblin.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 25)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // ファイアボール・エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Bola de Fogo (atk)","eficácia", "604","166","Invoca o Imajinn do Goblin Ancião<br>que atira uma bola de fogo ao alvo"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+24",
                    /*VIT*/"+3",
                    /*MND*/"+5",
                    /*ATK*/"+13",
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
            recipe: ["Ideia do Goblin Ancião","Fóssil de Musgo Magna","Pele de Alce Ancião","43,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Aumento de dano (longo-alcance)","Aumento de INT", "<br>"],
            tooltipText: ["Conjurador Arrogante<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Terraço Vespertino","Alce Ancião<br>Colina do Santuário"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipCalmEve,
                       tooltipDivine],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Goblin ゴブリン
        { 
            name: "Goblin",
            type: "Dano",
            image: "images/map/goblin.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 15)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // ゴブリンスタブ・ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Punhalada do Goblin (atk)","eficácia", "414","163","Invoca o Imajinn do Goblin<br>que perfura o alvo com seu porrete"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
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
            recipe: ["Ideia do Goblin","Minério de Ferro","Cauda da Raposa Terrestre","9,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["2","3","1"],
            abilList: ["Aumento de dano (skill tática 1)","Aumento de STR", "<br>"],
            tooltipText: ["Saqueador do Vale<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Campos Tremecéus","Raposa Terrestre<br>Campos Tremecéus"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipSkyquake,
                       tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Land Fox ランドフォックス
        { 
            name: "Raposa Terrestre",
            type: "Dano",
            image: "images/map/landfox.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 30)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // クラウンストライク・ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Ataque da Coroa(atk)","eficácia", "669","159","Invoca o Imajinn da Raposa Terrestre<br>que executa um salto de atk ao alvo"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Ideia da Raposa Terrestre","Flor Lamusa","Pele de Leitão Rosa","1,500"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["1","3","1"],
            abilList: ["Aumento de dano Crit","Aumento de DEX", "<br>"],
            tooltipText: ["Tiro-alto<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Campos Tremecéus","Leitão Rosa<br>Campos Tremecéus"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
        },
        // Tyrant Boar タイラントボア
        { 
            name: "Javali Tirano",
            type: "Dano",
            image: "images/map/tyrantboar.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // 猟犬殺し・タイラントボアのイマジンを召喚しターゲットを頭突きで攻撃する
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Caça Mortal (atk)","eficácia", "504","163","Invoca o Imajinn do Javali Tirano<br>que ataca o alvo com uma cabeçada"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Ideia do Javali Tirano","Áreia de Prata","Pele de Cabra Chifruda","45,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["2","3","3"],
            abilList: ["Aumento de dano (imajinn de batalha)","Aumento de ATK", "<br>"],
            tooltipText: ["Completar Arena [Rank C]","Coleta<br>Colina do Santuário","Cabra Chifruda<br>Lago Fiel"],
            tooltipBg: [
                tooltipArena,
                tooltipDivine,
                tooltipFiel],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","visibility: hidden"]
        },
        // Horned Goat ホーンゴート
        { 
            name: "Cabra Chifruda",
            type: "Dano",
            image: "images/map/horngoat.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 25)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // ビハインドキック・ホーンゴートのイマジンを召喚しターゲットを後ろ足で蹴り飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Coice (atk)","eficácia", "593","163","Invoca o Imajinn da Cabra Chifruda<br>que dá um coice em seus inimigos"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Ideia da Cabra Chifruda","Minério de Prata","<a style='font-size: 1.146vw'>Juba de Goblin Ancião Incandescente</a>","83,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["3","3","3"],
            abilList: ["Redução de dano recebido (longo-alcance)","Aumento de DEF", "<br>"],
            tooltipText: ["Completar Arena [Rank B]","Coleta<br>Lago Fiel","Goblin Ancião Incandescente<br>Vale Garra do Dragão [Exploração Livre]"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Goblin Sage ゴブリンセージ
        { 
            name: "Goblin Sábio",
            type: "Curandeiro",
            image: "images/map/goblinsage.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 30)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // ゴブリンセージの調律・ゴブリンセージのイマジンを召喚し召喚者のHPを回復させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Cura do Goblin Ancião (cura)","eficácia", "323","74","Invoca o Imajinn do Goblin Sábio<br>que cura o invocador"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Ideia do Goblin Sábio","Peixe-espinho","Presa do Trote Safira","120,000"],
            iconSrc: [iDung,iShell,iElite],
            amt: ["5","3","1"],
            abilList: ["Aumento de Cura (imajinn de batalha)","Aumento de Cura", "<br>"],
            tooltipText: ["Completar Arena [Rank A]","Coleta<br>Lago Fiel","Presa Safira<br>Colina do Santuário"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDivine],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "Alce Imperador",
            type: "Dano",
            image: "images/map/kaiserelk.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // クラッパーホーン・カイザーエルクのイマジンを召喚しターゲットを角で振り払う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Chifrada (atk)","eficácia", "756","159","Invoca o Imajinn do Alce Imperador<br>que ataca o alvo com seus chifres"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+35",
                    /*VIT*/"+4",
                    /*MND*/"+6",
                    /*ATK*/"+19",
                    /*DEX*/"+6"
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
            recipe: ["Ideia do Alce Imperador","Flor Longan","Juba de Curandeiro Maligno","140,000"],
            iconSrc: [iDung,iFlower,iElite],
            amt: ["7","3","1"],
            abilList: ["Redução de dano recebido (curto-alcance)","Aumento de DEF", "<br>"],
            tooltipText: ["Completar Arena [Rank S]","Coleta<br>Vale Garra do Dragão [Exploração Livre]","Curandeiro Maligno<br>Sopé Silencioso"],
            tooltipBg: [
                tooltipArena,
                tooltipDragonclaw,
                tooltipSoundless],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
        },
        // Raging Kingfang 荒ぶる牙王
        { 
            name: "Presa-rei Furioso",
            type: "Dano",
            image: "images/map/ragingkingfang.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // タイラントアサルト・荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Investida Tirana (atk)","eficácia", "787","166","Invoca o Imajinn do Presa-rei Furioso<br>que executa uma investida de amplo alcance em direção ao alvo"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+34",
                    /*VIT*/"+6",
                    /*MND*/"+4",
                    /*ATK*/"+20",
                    /*DEX*/"+4"
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
            recipe: ["Ideia do Presa-rei Furioso","Fóssil de Concha","Osso de Prisão Fulgor","190,000"],
            iconSrc: [iElite,iRock,iElite],
            amt: ["7","3","1"],
            abilList: ["Redução de intervalo (suprema)","Aumento de ATK", "<br>"],
            tooltipText: ["Presa-rei Furioso<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Lago Fiel","Prisão Fulgor<br>Terraço Vespertino"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipFiel,
                tooltipCalmEve],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
        },
        // Sealed Atrocity 封印されし暴虐
        { 
            name: "Atrocidade Selada",
            type: "Dano",
            image: "",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // アースクエイク
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Terremoto (atk)","eficácia", "802","?","Invoca o Imajinn do Atrocidade Selada<br>que executa um grande atk elemental de Terra centrado ao redor de si"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+35",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+21",
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
            recipe: ["Obtido como recompensa de Quest", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Completar a Quest "Colete Imajinn de Batalha! #2"<br><br>Após Completar "Colete Imajinn de Batalha! #1", construa Presa Verde Profundo, Presa de Ferro, Trote Safira e Cabra Sinistra',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Plidoke プリドーク
        { 
            name: "Plidoke",
            type: "Dano",
            image: "",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // スライサーアーム・プリドークのイマジンを召喚し前方のターゲットに両手の剣を突き刺す
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Braço Cortante (atk)","eficácia", "772","?","Invoca o Imajinn do Plidoke<br>que perfura os inimigos à sua frente com seus braços-espada"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Obtido como recompensa de Quest", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete a Quest "Colete Imajinn de Batalha! #3"<br><br>Após completar "Colete Imajinn de Batalha! #2", construa ???',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
    ],
    
    // RUSSIAN
    [
        // Pink Piglet ピンクウリボ
        { 
            name: "Розовая Свинка",
            type: "Целитель",
            image: "images/map/pinkpiglet.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 15)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Спокойствие Свинки (лечение)","Эффективность", "175","67","Призывает розовую свинью <br> который создает вокруг себя лечебное поле."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+18",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+9",
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
            recipe: ["Сущность Розовой Свинки","Волнистый Камень","Шкура Свиньи","2,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["1","3","1"],
            abilList: ["Повышенное исцеление (В Бою)","Повышенное исцеление ", "<br>"],
            tooltipText: ["Розовая Свинка<br>Skyquake Fields","Собирать<br>Skyquake Fields","Свинка<br>Skyquake Fields"],
            tooltipBg: [
                tooltipSkyquake,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Ferocious Beast 猛る獣
        { 
            name: "Свирепый Зверь",
            type: "Поддержка",
            image: "images/map/ferociousbeast.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 15)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // アクトクライ・猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Боевой Клич (поддержка)","Эффективность", "150","150","Призывает свирепого зверя<br>который дает призывателю, временное увеличение урона."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Сущность Свирепого Зверя","Ранняя Трава","Шкура Грохочущего Кабана","7,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Увеличение Максимальной Выносливости","Увеличение DEX", "<br>"],
            tooltipText: ["Свирепый Зверь<br>Minster Hills","Собирать<br>Minster Hills","Грохочущий Вепрь<br>Andra Basin"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,
                tooltipAndra],
            tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
        },
        // Red Splash 赤い飛沫
        { 
            name: "Красный всплеск",
            type: "Атакующий",
            image: "images/map/redsplash.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 15)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // 兜割り・赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける。
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Дробитель Шлемов (Атака)","Эффективность", "422","166","Призывает Красного Всплеска<br> который нацеливается своей дубинкой и ударяет цель в ​​голову."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
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
            recipe: ["Образ Красного Всплеска","Равнинная Лилия","Коготь Высокогорной Лисы","15,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Увеличение урона (регулярная атака)","Увеличение STR", "<br>"],
            tooltipText: ["Красный Всплеск<br>Minster Hills","Собирать<br>Soundless Foothills","Высокогорная Лиса<br>Divine Haven Hill"],
            tooltipBg: [
                tooltipMinster,
                tooltipSoundless,
                tooltipDivine],
            tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Deep Green Fang 深緑の牙
        { 
            name: "Темно-зеленый клык",
            type: "Атакующий",
            image: "images/map/deepgreenfang.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 20)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // 猪突猛進・深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Рывок Вепря(Атака)","Эффективность", "514","166","Призывает Темно-Зеленого Клыка<br>который делает рывок в указанное направление."],
            ability: ["Способность", "????","Эффективность", "????"],
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
            recipe: ["Сущность Темно-Зеленого Клыка","Астербасс","Шкура Тирана Вепря","17,000"],
            iconSrc: [iElite,iShell,iCombat],
            amt: ["3","3","3"],
            abilList: ["Увеличение Урона (Ультимейт)","Увеличение ATK", "<br>"],
            tooltipText: ["Темно-Зеленый Клык<br>Andra Basin","Собирать<br>Minster Hills","Тиранский Вепрь<br>Dragonclaw Valley [Свобоное Исследование]"],
            tooltipBg: [
                tooltipAndra,
                tooltipMinster,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Iron Fang 鉄牙
        { 
            name: "Железный Клык",
            type: "Атакующий",
            image: "images/map/ironfang.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 20)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // マウンテンスロー・鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Горный бросок (атака)","Эффективность", "524","169","Призывает Железного Клыка<br>который подбрасывает врагов в воздух, своими большими клыками."],
            ability: ["Способность", "????","Эффективность", "????"],
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
            recipe: ["Сущность Железного Клыка","Лист Медвежего Дерева","Гоблинская Грива","20,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Увеличение урона (с близкого расстояния)","Увеличение ATK", "<br>"],
            tooltipText: ["Железный Клык<br>Andra Basin","Собирать<br>Divine Haven Hill","Гоблин<br>Minster hills"],
            tooltipBg: [
                tooltipAndra,
                tooltipDivine,
                tooltipMinster],
            tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
        },
        // Flame Prison 炎獄
        { 
            name: "Пламенный Тюремщик",
            type: "Атакующий",
            image: "images/map/flamingprison.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 30)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // パワースイング・炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Мощное Колебание (Атака)","Эффективность", "710","169","Вызывает образ Пламенного Тюремщика,<br>который размахивает дубинкой по врагам перед собой."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+3",
                    /*HP*/"+31",
                    /*VIT*/"+4",
                    /*MND*/"+3",
                    /*ATK*/"+19",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+2"
                   ],
            recipe: ["Сущность Пламенного Тюремщика","Яшменный Камень","Пылающяя Грива Гоблина","86,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["5","3","3"],
            abilList: ["Уменьшает время перезарядки (В Бою)","Увеличение Максимального HP", "<br>"],
            tooltipText: ["Пламенный Тюремщик<br>Calm Eve Terraces","Собирать<br>Soundless Foothills","Пылающий Гоблин<br>Dragonclaw Valley [Свобоное Исследование]"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipSoundless,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Ferocious Gold 猛る金色
        { 
            name: "Свирепое Золото",
            type: "Атакующий",
            image: "images/map/ferociousgold.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 30)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // デスタックル・猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Естественный Отбор(Атака)","Эффективность", "696","166","Призывает Свирепого Золота<br>который атакует цель."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+?",
                    /*VIT*/"+5",
                    /*MND*/"+3",
                    /*ATK*/"+18",
                    /*DEX*/"+3"
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
            recipe: ["Сущность Свирепого Золота","Семя нектара","Хвост Свирепого Зверя","85,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["5","3","1"],
            abilList: ["Увеличение урона (с близкого расстояния)","Увеличение ATK", "<br>"],
            tooltipText: ["Свирепое Золото<br>Calm Eve Terraces","Собирать<br>Fiel Pond","Свирепый Зверь<br>Minster Hills"],
            tooltipBg: [tooltipCalmEve,
                        tooltipFiel,
                        tooltipMinster],
            tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
        },
        // Sapphire Trot サファイアトロット
        { 
            name: "Сапфировая рысь",
            type: "Атакующий",
            image: "images/map/sapphiretrot.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 20)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // 落石牙・サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Падение каменного клыка","Эффективность", "483","156","Призывает сапфировой рыси<br>которая прыгает на врага на нося урон."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+19",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+10",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Сущность Сапфировой Рыси","Андра Кедровая Веточка","Грива Гоблина-Старейшины","25,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Повышение Шанса Критеческого Удара","Увеличение DEX", "<br>"],
            tooltipText: ["Сапфировая рысь<br>Divine Haven Hill","Собирать<br>Minster Hills","Гоблин-Старейшина<br>Andra Basin"],
            tooltipBg: [tooltipDivine,
                        tooltipMinster,
                        tooltipAndra],
            tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
        },
        // Flaming Horns 炎角
        { 
            name: "Пылающие Рога",
            type: "Атакующий",
            image: "images/map/flaminghorns.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 20)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // カイザーブラスト・炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Молния Кайзера(Атака)","Эффективность", "493","159","Призывает пылающих рогов <br> которые выполняют атаку элементальным зарядом молниия, в направлении цели."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+23",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+12",
                    /*DEX*/"+4"
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
            recipe: ["Сущность Пылающего Рога","Орех Блезио","Грива гоблина-мудреца","26,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Уменьшить получаемый урон (с близкого расстояния)","Увеличение DEF", "<br>"],
            tooltipText: ["Пылающий Рог<br>Divine Haven Hill","Собирать<br>Divine Haven Hill","Гоблин-Мудрец<br>Soundless Foothills"],
            tooltipBg: [tooltipDivineLeft,
                       tooltipDivine,
                       tooltipSoundless],
            tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Spooky Goat スプーキーゴート
        { 
            name: "Жуткий Баран",
            type: "Поддержка",
            image: "images/map/spookygoat.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 25)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // ゴートヘイスト・スプーキーゴートのイマジンを召喚し召喚者の移動速度を一定時間上昇させる
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Спешка Барана (Поддержка)","Эффективность", "130","130","Призывает Жуткого Барана <br> который дает призывателю временное увеличение скорости передвижения."],
            ability: ["Способность", "????","Эффективность", "????"],
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
            recipe: ["Сущность Жуткого Барана","Закатная Кедровая Веточка","Светящаяся Шкура Тиранского Кабана","45,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["4","3","3"],
            abilList: ["Увеличение максимальной выносливости","Увеличение DEX", "<br>"],
            tooltipText: ["Жуткая Баран<br>Soundless Foothills","Собирать<br>Calm Eve Terraces","Светящийся Тиранский Вепрь<br>Dragonclaw Valley [Свобоное Исследование]"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipDragonclaw],
            tooltipIcn: ["transform: translate(2.5vw, 4.9vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Evil Healer 悪しき癒し手
        { 
            name: "Зло Целитель",
            type: "Лекарь",
            image: "images/map/evilhealer.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 25)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // エリアヒール・悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Исцеление По Области(Лечение)","Эффективность", "267","71","Вызывает Образ Зло Целителя<br>который лечит окружающих HP союзников."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
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
            recipe: ["Сущность Зле Целителя","Римериловая Руда","Кость Огра","56,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Повышенное Исцеление (В Бою)","Повышенное Исцеление", "<br>"],
            tooltipText: ["Зло Целитель<br>Soundless Foothills","Собирать<br>Calm Eve Terraces","Огр<br>Calm Eve Terraces"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipCalmEve],
            tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
        },
        // Trick Elder トリックエルダー
        { 
            name: "Старейшина Трюкач",
            type: "Атакующий",
            image: "images/map/trickelder.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // エルダークリスタル・トリックエルダーのイマジンを召喚しターゲットに対して氷柱を3発飛ばす
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Древний Кристалл (Ктака)","Эффективность", "741","156","Вызывает Образ Старейшина Трюкач <br> который запускает 3 сосульки в цель."],
            ability: ["Способность", "????","Эффективность", "????"],
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
            recipe: ["Сущность Старейшина Трюкач","Драконий Яд","Шкура Темно-Зеленого Клыка","130,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["3","3","1"],
            abilList: ["Увеличение Урона (Дальняя Дистанция)","Увеличение INT", "<br>"],
            tooltipText: ["Старейшина Трюкач<br>Fiel Pond","Собирать<br>Dragonclaw Valley [Свобоное Исследование]","Клык Темно-зеленого<br>Andra Basin"],
            tooltipBg: [tooltipFiel,
                       tooltipDragonclaw,
                       tooltipAndra],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(5.8vw, 11vw)"]
        },
        // Elder Goblin エルダーゴブリン
        { 
            name: "Гоблин-Старейшина",
            type: "Атакующий",
            image: "images/map/eldergoblin.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 25)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // ファイアボール・エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Огненный шар (Атака)","Эффективность", "604","166","Призывает Гоблина-Старейшины <br> который стреляет в цель, огненным снарядом."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+24",
                    /*VIT*/"+3",
                    /*MND*/"+5",
                    /*ATK*/"+13",
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
            recipe: ["Сущность Гоблин-Старейшина","Ископаемое Великого Мха","Мех Кайзер Лося","43,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Увеличение урона (Дальняя Дистанция)","Увеличение INT", "<br>"],
            tooltipText: ["Высокомерный Aокусник<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Calm Eve Terraces","Кайзер Лось<br>Divine Haven Hill"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipCalmEve,
                       tooltipDivine],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Goblin ゴブリン
        { 
            name: "Гоблин",
            type: "Атакующий",
            image: "images/map/goblin.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 15)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // ゴブリンスタブ・ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Удар Гоблина (Атака)","Эффективность", "414","163","Призывает Гоблина <br> который атакует цель своей дубинкой."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
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
            recipe: ["Сущность Гоблина","Железная Руда","Хвость Ровнинной Лисы","9,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["2","3","1"],
            abilList: ["Увеличение урона (Тактическое Умение 1)","Увеличение STR", "<br>"],
            tooltipText: ["Доллиный Рейдер<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Skyquake Fields","Ровнинная Лиса<br>Skyquake Fields"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipSkyquake,
                       tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Land Fox ランドフォックス
        { 
            name: "Ровнинная Лиса",
            type: "Атакующий",
            image: "images/map/landfox.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 30)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // クラウンストライク・ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Коронный Удар(Атака)","Эффективность", "669","159","Призывает Ровнинную Лису <br> которая выполняет атаку в прыжке."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Сущность Ровнинной Лисы","Цветок Ламузы","Шкура Розовой Свинки","1,500"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["1","3","1"],
            abilList: ["Увеличение Критического Урона","Увеличение DEX", "<br>"],
            tooltipText: ["Громкий Выстрел<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Skyquake Fields","Розовая Свинка<br>Skyquake Fields"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
        },
        // Tyrant Boar タイラントボア
        { 
            name: "Тиран Вепрь",
            type: "Атакующий",
            image: "images/map/tyrantboar.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 20)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // 猟犬殺し・タイラントボアのイマジンを召喚しターゲットを頭突きで攻撃する
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Убийца Гончих (атака)","Эффективность", "504","163","Призывает Тирана Вепря, который атакует цель ударом головой."],
            ability: ["Способность", "????","Эффективность", "????"],
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
            recipe: ["Сущность Тирана Вепря ","Серебристый Песок","Мех Рогатого Козла","45,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["2","3","3"],
            abilList: ["Увеличение Урона (В Бою)","Увеличение ATK", "<br>"],
            tooltipText: ["Очистить Арену [ранг C]","Собирать<br>Divine Haven Hill","Рогатый Козел<br>Fiel Pond"],
            tooltipBg: [
                tooltipArena,
                tooltipDivine,
                tooltipFiel],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","visibility: hidden"]
        },
        // Horned Goat ホーンゴート
        { 
            name: "Рогатый Козел",
            type: "Атакующий",
            image: "images/map/horngoat.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 25)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // ビハインドキック・ホーンゴートのイマジンを召喚しターゲットを後ろ足で蹴り飛ばす
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Удар Задними Ногами(Атака)","Эффективность", "593","163","Вызывает Образ Рогатого Козла <br> который отбрасывает врагов задними ногами."],
            ability: ["Способность", "????","Эффективность", "????"],
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
            recipe: ["Сущность Рогатого Козла","Серебряная руда","Светящаяся Грива Гоблина-Старейшину","83,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["3","3","3"],
            abilList: ["Уменьшить Получаемый Урон (На Большом Расстоянии)","Увеличение DEF", "<br>"],
            tooltipText: ["Очистить арену [B ранг]","Собирать<br>Fiel Pond","Светящийся Гоблин-Старейшина<br>Dragonclaw Valley [Свобоное Исследование]"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Goblin Sage ゴブリンセージ
        { 
            name: "Гоблин-Мудрец",
            type: "Лекарь",
            image: "images/map/goblinsage.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 30)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // ゴブリンセージの調律・ゴブリンセージのイマジンを召喚し召喚者のHPを回復させる
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Тюнинг гоблина-мудреца(Лечение)","Эффективность", "323","74","Призывает Гоблина-Мудреца <br> который восстанавливает здоровье призывателю."],
            ability: ["Способность", "????","Эффективность", "????"],
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
            recipe: ["Сущность Гоблина-Мудреца","Рыба-Шип","Клык Сапфировой Рыси","120,000"],
            iconSrc: [iDung,iShell,iElite],
            amt: ["5","3","1"],
            abilList: ["Повышенное Исцеление (В Бою)","Повышенное Исцеление", "<br>"],
            tooltipText: ["Очистить арену [ранг А]","Собирать<br>Fiel Pond","Сапфировая Рысь<br>Divine Haven Hill"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDivine],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "Кайзер Лось",
            type: "Атакующий",
            image: "images/map/kaiserelk.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // クラッパーホーン・カイザーエルクのイマジンを召喚しターゲットを角で振り払う
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Клаппер Рог (атака)","Эффективность", "756","159","Призывает Кайзера Лося <br> которое атакует врагов своими рогами."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+35",
                    /*VIT*/"+4",
                    /*MND*/"+6",
                    /*ATK*/"+19",
                    /*DEX*/"+6"
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
            recipe: ["Сущность Кайзера Лося","Цветок Лонгана","Грива Зло Лекаря","140,000"],
            iconSrc: [iDung,iFlower,iElite],
            amt: ["7","3","1"],
            abilList: ["Уменьшает Получаемый Урон (С Близкого Расстояния)","Увеличение DEF", "<br>"],
            tooltipText: ["Очистить Арену [Ранг S]","Собирать<br>Dragonclaw Valley [Свобоное Исследование]","Зло Лекарь<br>Soundless Foothills"],
            tooltipBg: [
                tooltipArena,
                tooltipDragonclaw,
                tooltipSoundless],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
        },
        // Raging Kingfang 荒ぶる牙王
        { 
            name: "Бешеный Королевский Клык",
            type: "Атакующий",
            image: "images/map/ragingkingfang.mp4",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // タイラントアサルト・荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Нападение Тирана (Атака)","Эффективность", "787","166","Призывает Бешеного Королевского Клыка <br> который выполняет зарядовую атаку, на широком радиусе действия в направлении цели."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+34",
                    /*VIT*/"+6",
                    /*MND*/"+4",
                    /*ATK*/"+20",
                    /*DEX*/"+4"
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
            recipe: ["Сущночть Бешеного Королевского Клыка ","Окаменелая Ракушка","Кость Пламенной Тюрьмы","190,000"],
            iconSrc: [iElite,iRock,iElite],
            amt: ["7","3","1"],
            abilList: ["Уменьшить Время Восстановления (ультимейт)","Увеличение ATK", "<br>"],
            tooltipText: ["Бешеный Королевский Клык<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Fiel Pond","Пламенная Тюрма<br>Calm Eve Terraces"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipFiel,
                tooltipCalmEve],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
        },
        // Sealed Atrocity 封印されし暴虐
        { 
            name: "Запечатанное Зло",
            type: "Атакующий",
            image: "",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // アースクエイク
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Землетрясение (Атака)","Эффективность", "802","?","Призывает Запечатанного Зла <br> который выполняет мощную атаку, земного элементаля с центром вокруг себя."],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+35",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+21",
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
            recipe: ["Получено В Качестве Награды За Квест", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ["Выполните квест «В Бою! №2.<br><br>После выполнения «В Бою! # 1», Скрафти Темно-Зеленый Клык,Железный Клык,Сапфировая Рысь,Пугающий Баран","<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Plidoke プリドーク
        { 
            name: "Плидок",
            type: "Атакующий",
            image: "",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;30 сек"],
            // スライサーアーム・プリドークのイマジンを召喚し前方のターゲットに両手の剣を突き刺す
            skill: ["Навык","&nbsp;&nbsp;&nbsp;&nbsp;Рука-слайсер (атака)","Эффективность", "772","?","Призывает Плидока <br> который пронзает врагов перед собо, своими руками-мечами."],
            ability: ["Способность", "????","Эффективность", "????"],
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
            recipe: ["Получено в качестве награды за квест", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Завершите квест «В Бою! # 3» <br><br> После выполнения «Собери В Бою! # 2» создайте ???',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
    ]
    
]

// Inner Imajinn
var iiHolder = [
    
    // ENGLISH
    [
        // Dyranks/Dylanx
        { 
            name: "Dyranks (courage)",
            type: "<br>",
            image: "images/crafting/ii1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Courage"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+12",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+1"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["Reikrid Crystal","<br>","<br>","1,000"],
            iconSrc: [iDung,"",""],
            amt: ["1","<br>","<br>"],
            abilList: ["Max HP increase","<br>", "<br>"],
            tooltipText: ["Clear Dungeon<br>Reikrid Tunnels","<br>","<br>"],
            tooltipBg: [
                tooltipSkyquake,"",""],
            tooltipIcn: ["transform: translate(11.4vw, 4.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Corjun/Corsion
        { 
            name: "Corjun (mystery)",
            type: "<br>",
            image: "images/crafting/ii2L.png",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mystery"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+5",
                    /*HP*/"+20",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+6",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["Land Fox Nail","Asterium Ore","<br>","9,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["8","15","<br>"],
            abilList: ["ATK increase","<br>", "<br>"],
            tooltipText: ["Land Fox<br>Minster Hills","Gather<br>Minster Hills","<br>"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Mipect
        { 
            name: "Mipect (hope)",
            type: "<br>",
            image: "images/crafting/ii3L.png",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Hope"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+3",
                    /*HP*/"+25",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["Goblin Nail","Jira Crystal","<br>","10,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","10","<br>"],
            abilList: ["Max Stamina increase","<br>", "<br>"],
            tooltipText: ["Goblin<br>Andra Basin","Gather<br>Andra Basin","<br>"],
            tooltipBg: [
                tooltipAndra,
                tooltipAndra,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Proxyx/Procsyx
        { 
            name: "Proxyx (courage)",
            type: "<br>",
            image: "images/crafting/ii4L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Courage"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+0",
                    /*HP*/"+36",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+13",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["Horned Goat Bone","Smoky Moss","<br>","60,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["12","20","<br>"],
            abilList: ["Max HP increase","VIT increase", "STR increase"],
            tooltipText: ["Horned Goat<br>Soundless Foothills","Gather<br>Divine Haven Hill","<br>"],
            tooltipBg: [
                tooltipSoundless,
                tooltipDivine,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Latepect/Latepecht
        { 
            name: "Latepect (hope)",
            type: "<br>",
            image: "images/crafting/ii5L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Hope"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+4",
                    /*HP*/"+38",
                    /*VIT*/"+6",
                    /*MND*/"+5",
                    /*ATK*/"+11",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["Large Fang Fossil","<br>","<br>","85,000"],
            iconSrc: [iRock,"",""],
            amt: ["25","<br>","<br>"],
            abilList: ["Max Stamina increase","INT increase", "MND increase"],
            tooltipText: ["Gather<br>Divine Haven Hill","<br>","<br>"],
            tooltipBg: [
                tooltipDivine,"",""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Carcon
        { 
            name: "Carcon (mystery)",
            type: "<br>",
            image: "images/crafting/ii6L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mystery"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+6",
                    /*HP*/"+32",
                    /*VIT*/"+5",
                    /*MND*/"+6",
                    /*ATK*/"+9",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["Glowing Goblin's Nail","Pterosaur Fossil","<br>","240,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","35","<br>"],
            abilList: ["ATK increase","STR increase", "DEX increase"],
            tooltipText: ["Glowing Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]","<br>"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipDragonclaw,""],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
        },
        // Parbury
        { 
            name: "Parbury (ambition)",
            type: "<br>",
            image: "images/crafting/ii7L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot4.svg","Ambition"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+34",
                    /*VIT*/"+4",
                    /*MND*/"+0",
                    /*ATK*/"+12",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+0",
                    /*ATK*/"+2",
                    /*DEX*/"+3"
                   ],
            recipe: ["Glowing Tyrant Boar's Fang","Stardust Grass","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["DEF increase","DEX increase", "VIT increase"],
            tooltipText: ["Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces","<br>"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipCalmEve, ""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Sanak'ta
        { 
            name: "Sanak'ta (affection)",
            type: "<br>",
            image: "images/crafting/ii8L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot5.svg","Affection"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+5",
                    /*HP*/"+30",
                    /*VIT*/"+0",
                    /*MND*/"+6",
                    /*ATK*/"+10",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+2",
                    /*HP*/"+5",
                    /*VIT*/"+0",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+3"
                   ],
            recipe: ["Trick Elder's Nail","Welling Water Stone","<br>","900,000"],
            iconSrc: [iElite,iRock,""],
            amt: ["1","50","<br>"],
            abilList: ["Healing increase","MND increase", "INT increase"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Fiel Pond","<br>"],
            tooltipBg: [
                tooltipFiel,
                tooltipFiel,""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ],
    
    // JAPANESE
    [
        // Dyranks/Dylanx
        { 
            name: "ディランクス (勇気)",
            type: "<br>",
            image: "images/crafting/ii1L.png",
            level: "初期 Lv 1~1 (Max Lv: 7)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot1.svg","勇気"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+12",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+1"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["レイクリッド結晶","<br>","<br>","1,000"],
            iconSrc: [iDung,"",""],
            amt: ["1","<br>","<br>"],
            abilList: ["最大HPアップ","<br>", "<br>"],
            tooltipText: ["ダンジョンクリア<br>レイクリッド坑道","<br>","<br>"],
            tooltipBg: [
                tooltipSkyquake,"",""],
            tooltipIcn: ["transform: translate(11.4vw, 4.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Corjun/Corsion
        { 
            name: "コージュン (神秘)",
            type: "<br>",
            image: "images/crafting/ii2L.png",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot3.svg","神秘"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+5",
                    /*HP*/"+20",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+6",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["ランドフォックスの爪","アステリウム鉱石","<br>","9,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["8","15","<br>"],
            abilList: ["攻撃力アップ","<br>", "<br>"],
            tooltipText: ["ランドフォックス<br>ミンスター丘陵","採取<br>ミンスター丘陵","<br>"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Mipect
        { 
            name: "ミペクト (希望)",
            type: "<br>",
            image: "images/crafting/ii3L.png",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot2.svg","Hope"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+3",
                    /*HP*/"+25",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["ゴブリンの爪","ジラ輝石","<br>","10,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","10","<br>"],
            abilList: ["最大STアップ","<br>", "<br>"],
            tooltipText: ["ゴブリン<br>アンドラ盆地","採取<br>アンドラ盆地","<br>"],
            tooltipBg: [
                tooltipAndra,
                tooltipAndra,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Proxyx/Procsyx/Prokythyx
        { 
            name: "プロキシクス (勇気)",
            type: "<br>",
            image: "images/crafting/ii4L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot1.svg","勇気"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+0",
                    /*HP*/"+36",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+13",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["ホーンゴートの骨","煙霧苔","<br>","60,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["12","20","<br>"],
            abilList: ["最大HPアップ","耐久力アップ", "筋力アップ"],
            tooltipText: ["ホーンゴート<br>鎮まりの山麓","採取<br>神の見守る丘","<br>"],
            tooltipBg: [
                tooltipSoundless,
                tooltipDivine,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Latepect/Latepecht
        { 
            name: "ラテペクト (希望)",
            type: "<br>",
            image: "images/crafting/ii5L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot2.svg","Hope"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+4",
                    /*HP*/"+38",
                    /*VIT*/"+6",
                    /*MND*/"+5",
                    /*ATK*/"+11",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["大牙の化石","<br>","<br>","85,000"],
            iconSrc: [iRock,"",""],
            amt: ["25","<br>","<br>"],
            abilList: ["最大STアップ","知力アップ", "精神力アップ"],
            tooltipText: ["採取<br>神の見守る丘","<br>","<br>"],
            tooltipBg: [
                tooltipDivine,"",""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Carcon
        { 
            name: "カーコン (神秘)",
            type: "<br>",
            image: "images/crafting/ii6L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot3.svg","神秘"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+6",
                    /*HP*/"+32",
                    /*VIT*/"+5",
                    /*MND*/"+6",
                    /*ATK*/"+9",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["ゴブリン・グロウの爪","翼竜の化石","<br>","240,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","35","<br>"],
            abilList: ["攻撃力アップ","筋力アップ", "器用さアップ"],
            tooltipText: ["ゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索","<br>"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipDragonclaw,""],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
        },
        // Parbury
        { 
            name: "パルブリー (野心)",
            type: "<br>",
            image: "images/crafting/ii7L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot4.svg","Ambition"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+34",
                    /*VIT*/"+4",
                    /*MND*/"+0",
                    /*ATK*/"+12",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+0",
                    /*ATK*/"+2",
                    /*DEX*/"+3"
                   ],
            recipe: ["タイラントボア・グロウの大牙","星屑草","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["防御アップ","器用さアップ", "耐久力アップ"],
            tooltipText: ["タイラントボア・グロウ<br>夕凪の段丘","採取<br>夕凪の段丘","<br>"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipCalmEve, ""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Sanak'ta
        { 
            name: "サナクッタ (慈愛)",
            type: "<br>",
            image: "images/crafting/ii8L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot5.svg","Affection"],
            ability: ["アビリティ名", "????","効果値", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+5",
                    /*HP*/"+30",
                    /*VIT*/"+0",
                    /*MND*/"+6",
                    /*ATK*/"+10",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+2",
                    /*HP*/"+5",
                    /*VIT*/"+0",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+3"
                   ],
            recipe: ["トリックエルダーの爪","湧水石","<br>","900,000"],
            iconSrc: [iElite,iRock,""],
            amt: ["1","50","<br>"],
            abilList: ["回復力アップ","精神力アップ", "知力アップ"],
            tooltipText: ["トリックエルダー<br>フィエル嶺水地","採取<br>フィエル嶺水地","<br>"],
            tooltipBg: [
                tooltipFiel,
                tooltipFiel,""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ],
    
    // BRAZILIAN PORTUGUESE
    [
        // Dyranks/Dylanx
        { 
            name: "Dyranks (coragem)",
            type: "<br>",
            image: "images/crafting/ii1L.png",
            level: "Nv Inicial 1~1 (Nv Max: 7)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Coragem"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+12",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+1"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["Cristal Reikrid","<br>","<br>","1,000"],
            iconSrc: [iDung,"",""],
            amt: ["1","<br>","<br>"],
            abilList: ["Aumento de HP Max","<br>", "<br>"],
            tooltipText: ["Complete a Masmorra<br>Túneis Reikrid","<br>","<br>"],
            tooltipBg: [
                tooltipSkyquake,"",""],
            tooltipIcn: ["transform: translate(11.4vw, 4.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Corjun/Corsion
        { 
            name: "Corjun (mistério)",
            type: "<br>",
            image: "images/crafting/ii2L.png",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mistério"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+5",
                    /*HP*/"+20",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+6",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["Unha de Raposa Terrestre","Minério de Asterium","<br>","9,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["8","15","<br>"],
            abilList: ["Aumento de ATK","<br>", "<br>"],
            tooltipText: ["Raposa Terrestre<br>Colinas Minster","Coleta<br>Colinas Minster","<br>"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Mipect
        { 
            name: "Mipect (esperança)",
            type: "<br>",
            image: "images/crafting/ii3L.png",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Esperança"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+3",
                    /*HP*/"+25",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["Unha de Goblin","Cristal Jira","<br>","10,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","10","<br>"],
            abilList: ["Aumento de Fôlego Max","<br>", "<br>"],
            tooltipText: ["Goblin<br>Bacia Andra","Coleta<br>Bacia Andra","<br>"],
            tooltipBg: [
                tooltipAndra,
                tooltipAndra,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Proxyx/Procsyx
        { 
            name: "Proxyx (coragem)",
            type: "<br>",
            image: "images/crafting/ii4L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Coragem"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+0",
                    /*HP*/"+36",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+13",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["Osso de Cabra Chifruda","Musgo Defumado","<br>","60,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["12","20","<br>"],
            abilList: ["Aumento de HP Max","Aumento de VIT", "Aumento de STR"],
            tooltipText: ["Cabra Chifruda<br>Sopé Silencioso","Coleta<br>Colina do Santuário","<br>"],
            tooltipBg: [
                tooltipSoundless,
                tooltipDivine,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Latepect/Latepecht
        { 
            name: "Latepect (esperança)",
            type: "<br>",
            image: "images/crafting/ii5L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Esperança"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+4",
                    /*HP*/"+38",
                    /*VIT*/"+6",
                    /*MND*/"+5",
                    /*ATK*/"+11",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["Fóssil de Presa Grande","<br>","<br>","85,000"],
            iconSrc: [iRock,"",""],
            amt: ["25","<br>","<br>"],
            abilList: ["Aumento de Fôlego Max","Aumento de INT", "Aumento de MND"],
            tooltipText: ["Coleta<br>Colina do Santuário","<br>","<br>"],
            tooltipBg: [
                tooltipDivine,"",""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Carcon
        { 
            name: "Carcon (mistério)",
            type: "<br>",
            image: "images/crafting/ii6L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mistério"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+6",
                    /*HP*/"+32",
                    /*VIT*/"+5",
                    /*MND*/"+6",
                    /*ATK*/"+9",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["Unha de Goblin Incandescente","Fóssil de Pterossauro","<br>","240,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","35","<br>"],
            abilList: ["Aumento de ATK","Aumento de STR", "Aumento de DEX"],
            tooltipText: ["Goblin Incandescente<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Vale Garra do Dragão [Exploração Livre]","<br>"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipDragonclaw,""],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
        },
        // Parbury
        { 
            name: "Parbury (ambição)",
            type: "<br>",
            image: "images/crafting/ii7L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot4.svg","Ambição"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+34",
                    /*VIT*/"+4",
                    /*MND*/"+0",
                    /*ATK*/"+12",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+0",
                    /*ATK*/"+2",
                    /*DEX*/"+3"
                   ],
            recipe: ["<a style='font-size: 1.146vw'><a style='font-size: 1.146vw'>Presa de Javali Tirano Incandescente</a></a>","Grama de Poeira Estelar","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["Aumento de DEF","Aumento de DEX", "Aumento de VIT"],
            tooltipText: ["Javali Tirano Incandescente<br>Terraço Vespertino","Coleta<br>Terraço Vespertino","<br>"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipCalmEve, ""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Sanak'ta
        { 
            name: "Sanak'ta (afeto)",
            type: "<br>",
            image: "images/crafting/ii8L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot5.svg","Afeto"],
            ability: ["talento", "????","eficácia", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+5",
                    /*HP*/"+30",
                    /*VIT*/"+0",
                    /*MND*/"+6",
                    /*ATK*/"+10",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+2",
                    /*HP*/"+5",
                    /*VIT*/"+0",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+3"
                   ],
            recipe: ["Unha de Ancião Trapaceiro","Pedra das Águas de Nascente","<br>","900,000"],
            iconSrc: [iElite,iRock,""],
            amt: ["1","50","<br>"],
            abilList: ["Aumento de Cura","Aumento de MND", "Aumento de INT"],
            tooltipText: ["Ancião Trapaceiro<br>Lago Fiel","Coleta<br>Lago Fiel","<br>"],
            tooltipBg: [
                tooltipFiel,
                tooltipFiel,""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ],
    
    // RUSSIAN
    [
        // Dyranks/Dylanx
        { 
            name: "Дайранкс (Храбрость)",
            type: "<br>",
            image: "images/crafting/ii1L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 7)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // 
            slot: ["Ячейка","images/crafting/slot1.svg","Храбрость"],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+12",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+1"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["Рейкрид Кристалл","<br>","<br>","1,000"],
            iconSrc: [iDung,"",""],
            amt: ["1","<br>","<br>"],
            abilList: ["Увеличение Максимального HP","<br>", "<br>"],
            tooltipText: ["Очистить Подземелье<br>Reikrid Tunnels","<br>","<br>"],
            tooltipBg: [
                tooltipSkyquake,"",""],
            tooltipIcn: ["transform: translate(11.4vw, 4.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Corjun/Corsion
        { 
            name: "Корджун (Мистика)",
            type: "<br>",
            image: "images/crafting/ii2L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 20)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // 
            slot: ["Ячейка","images/crafting/slot3.svg","Мистика"],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+5",
                    /*HP*/"+20",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+6",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["Коготь Ровнинной Лисы","Руда Астериума","<br>","9,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["8","15","<br>"],
            abilList: ["Учеличение ATK","<br>", "<br>"],
            tooltipText: ["Ровнинная Лиса<br>Minster Hills","Собирать<br>Minster Hills","<br>"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Mipect
        { 
            name: "Мипект (Надежда)",
            type: "<br>",
            image: "images/crafting/ii3L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 20)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // 
            slot: ["Ячейка","images/crafting/slot2.svg","Надежда"],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+3",
                    /*HP*/"+25",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["Гоблинский Коготь","Джира Кристал","<br>","10,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","10","<br>"],
            abilList: ["Увеличение Максимальной Выносливости","<br>", "<br>"],
            tooltipText: ["Гоблин<br>Andra Basin","Собирать<br>Andra Basin","<br>"],
            tooltipBg: [
                tooltipAndra,
                tooltipAndra,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Proxyx/Procsyx
        { 
            name: "Проксис(Храбрость)",
            type: "<br>",
            image: "images/crafting/ii4L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // 
            slot: ["Ячейка","images/crafting/slot1.svg","Courage"],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+0",
                    /*HP*/"+36",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+13",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["Кость Рогатого Козла","Дымчатый Мох","<br>","60,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["12","20","<br>"],
            abilList: ["Увеличение Максиального HP ","Увеличение VIT", "Увеличение STR"],
            tooltipText: ["Рогатый Козел<br>Soundless Foothills","Собирать<br>Divine Haven Hill","<br>"],
            tooltipBg: [
                tooltipSoundless,
                tooltipDivine,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Latepect/Latepecht
        { 
            name: "Латепект (Надежда)",
            type: "<br>",
            image: "images/crafting/ii5L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // 
            slot: ["Ячейка","images/crafting/slot2.svg","Надежда"],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+4",
                    /*HP*/"+38",
                    /*VIT*/"+6",
                    /*MND*/"+5",
                    /*ATK*/"+11",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["Ископаемое Из Клыка Фазила","<br>","<br>","85,000"],
            iconSrc: [iRock,"",""],
            amt: ["25","<br>","<br>"],
            abilList: ["Увеличение Максимальной Выносливости","Увеличение INT", "Увеличение MND"],
            tooltipText: ["Собирать<br>Divine Haven Hill","<br>","<br>"],
            tooltipBg: [
                tooltipDivine,"",""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Carcon
        { 
            name: "Каркон(Мистика)",
            type: "<br>",
            image: "images/crafting/ii6L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // 
            slot: ["Ячейка","images/crafting/slot3.svg","Мистика"],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+6",
                    /*HP*/"+32",
                    /*VIT*/"+5",
                    /*MND*/"+6",
                    /*ATK*/"+9",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["Светящийся Гоблинский Коготь","Ископаемое Птерозавра","<br>","240,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","35","<br>"],
            abilList: ["Увеличение ATK","Увеличение STR", "Увеличение DEX"],
            tooltipText: ["Светящийся Гоблин<br>Dragonclaw Valley [Свобоное Исследование]","Собирать<br>Dragonclaw Valley [Свобоное Исследование]","<br>"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipDragonclaw,""],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
        },
        // Parbury
        { 
            name: "Парбери (Амбиции)",
            type: "<br>",
            image: "images/crafting/ii7L.png",
            level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // 
            slot: ["Ячейка","images/crafting/slot4.svg","Ambition"],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+34",
                    /*VIT*/"+4",
                    /*MND*/"+0",
                    /*ATK*/"+12",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+0",
                    /*ATK*/"+2",
                    /*DEX*/"+3"
                   ],
            recipe: ["Светящийся Клык Тирана Вепря","Трава Звездной Пыли","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["Увеличение DEF","Увеличение DEX", "Увеличение VIT"],
            tooltipText: ["Светящийся Тиранский Вепрь<br>Calm Eve Terraces","Собирать<br>Calm Eve Terraces","<br>"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipCalmEve, ""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Sanak'ta
        { 
            name: "Санак'ята (Привязанность)",
            type: "<br>",
            image: "images/crafting/ii8L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
            // 
            slot: ["Ячейка","images/crafting/slot5.svg","Affection"],
            ability: ["Способность", "????","Эффективность", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+5",
                    /*HP*/"+30",
                    /*VIT*/"+0",
                    /*MND*/"+6",
                    /*ATK*/"+10",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+2",
                    /*HP*/"+5",
                    /*VIT*/"+0",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+3"
                   ],
            recipe: ["Коготь Трюкача-Старейшины","Камень Воды Веллинг","<br>","900,000"],
            iconSrc: [iElite,iRock,""],
            amt: ["1","50","<br>"],
            abilList: ["Увеличение исцеления","Увеличение MND", "Увеличение INT"],
            tooltipText: ["Трюкач-Старейшина<br>Fiel Pond","Собирать<br>Fiel Pond","<br>"],
            tooltipBg: [
                tooltipFiel,
                tooltipFiel,""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ]

]

// Trivia
var triviaHolder = [
        { // 1
            category: "Technical",
            question: "What is the general name of the company that publishes Blue Protocol?",
            choice: ["Square ENIX", "Bandai Namco", "Sega", "EA"],
            answer: ["Bandai Namco"]
        },
        { // 2
            category: "Technical",
            question: "What is the name of the development team responsible for Blue Protocol?",
            choice: ["Project Blue", "Project Blue Sky" , "Bandai Namco","Project Sky Blue"],
            answer: ["Project Sky Blue"]
        },
        { // 3
            category: "Technical",
            question: "Who is the executive producer of Blue Protocol?",
            choice: ["Soukichi Shimooka" ,"Keisuke Fukuzaki","Takahiro Suzuki", "Kazuto Kirigaya"],
            answer: ["Takahiro Suzuki"]
        },
        { // 4
            category: "Class",
            question: "What was the 5th class added to the game?",
            choice: ["Aegis Fighter", "Twin Striker", "Heavy Smasher", "Spell Caster"],
            answer: ["Heavy Smasher"]
        },
        { // 5
            category: "Lore",
            question: "What is the name of the Aegis Fighter class instructor?",
            choice: ["Lily", "Korz", "Manuel", "Seila"],
            answer: ["Korz"]
        },
        { // 6
            category: "Lore",
            question: "What is the name of the Twin Striker class instructor?",
            choice: ["Manuel", "Lily", "Seila", "Korz"],
            answer: ["Manuel"]
        },
        { // 7
            category: "Lore",
            question: "What is the name of the Blast Archer class instructor?",
            choice: ["Korz", "Lily", "Manuel", "Seila"],
            answer: ["Lily"]
        },
        { // 8
            category: "Lore",
            question: "What is the name of the Spell Caster class instructor?",
            choice: ["Korz", "Manuel", "Seila", "Lily"],
            answer: ["Seila"]
        },
        { // 9
            category: "Class",
            question: "Perfection is an ability for which Twin Striker skill?",
            choice: ["Blood Axe", "Storm Rush", "Burning Rush", "Vortex Impact"],
            answer: ["Burning Rush"]
        },
        { // 10
            category: "Class",
            question: "What class uses the skill War Cry?",
            choice: ["Aegis Fighter", "Twin Striker", "Blast Archer", "Spell Caster"],
            answer: ["Twin Striker"]
        },
        { // 11
            category: "Class",
            question: "What class uses the skill Negative Resonance?",
            choice: ["Blast Archer", "Spell Caster", "Aegis Fighter", "Twin Striker"],
            answer: ["Blast Archer"]
        },
        { // 12
            category: "Class",
            question: "Acceleration is an ability for which Blast Archer skill?",
            choice: ["Charge Arrow", "Riesel Shower", "Hunter Spirit", "Arrow Rush"],
            answer: ["Riesel Shower"]
        },
        { // 13
            category: "Class",
            question: "Blast Archer’s backward + regular attack 1 key results in what?",
            choice: ["Healing Boost Buff", "Movement Speed Buff", "Attack Buff", "Attack Speed Buff"],
            answer: ["Movement Speed Buff"]
        },
        { // 14
            category: "Class",
            question: "Which Spell Caster ability has the same name for two skills?",
            choice: ["Escalation","Element Escalate", "EP Save", "Rapid Charge"],
            answer: ["Escalation"]
        },
        { // 15
            category: "Class",
            question: "Which class uses the skill Engram Charge?",
            choice: ["Aegis Fighter", "Spell Caster", "Twin Striker", "Blast Archer"],
            answer: ["Spell Caster"]
        },
        { // 16
            category: "Class",
            question: "Starlight is an ability for which Aegis Fighter skill?",
            choice: ["Regeneration","Sunrise Charge","Judgement Shield","Celestial Pillar"],
            answer: ["Celestial Pillar"]
        },
        { // 17
            category: "Story",
            question: "Which story character do you meet after defeating an Avalitia for the first time?",
            choice: ["Jake", "Einrain", "Merlouf", "Aerinse"],
            answer: ["Merlouf"]
        },
        { // 18
            category: "Story",
            question: "What is the name of the NPC that gives you a mount imajinn?",
            choice: ["Roger","Dean","Studs","Quinn"],
            answer: ["Studs"]
        },
        { // 19
            category: "Story",
            question: "What is the name of the inn that you wake up in after meeting Feste for the first time?",
            choice: ["The Double-Faced Coin", "Black Masked Inn", "Hunter's Breeze", "The Highland Inn"],
            answer: ["The Double-Faced Coin"]
        },
        { // 20
            category: "Story",
            question: "Who is the self-proclaimed “best of the best” adventurer?",
            choice: ["Einrain", "Jake", "Main Character", "Aerinse"],
            answer: ["Jake"]
        },
        { // 21
            category: "Story",
            question: "What is the name of the mysterious girl at the Bapharia Shrine?",
            choice: ["Aylin", "Sophia", "Einrain", "Aerinse"],
            answer: ["Einrain"]
        },
        { // 22
            category: "Story",
            question: "What are you, the player, referred to as by some characters in the story?",
            choice: ["Adventurer","Visitor", "Traveler", "Leaper"],
            answer: ["Visitor"]
        },
        { // 23
            category: "Story",
            question: "What is Aenrinse’s bodyguard’s name?",
            choice: ["Jake", "Einrain", "Feste", "Tyris"],
            answer: ["Tyris"]
        },
        { // 24
            category: "Story",
            question: "What is the name of the NPC at Minsterhorn who tells you to go to the Pillar of Divinity?",
            choice: ["Jake", "Milene", "Merlouf", "Feste"],
            answer: ["Milene"]
        },
        { // 25
            category: "Story",
            question: "What is the name of the girl in charge of Adventurer Registration at the Frontiering Station?",
            choice: ["Milene", "Murrie", "Melrouf", "Einrain"], // Melrophe :/
            answer: ["Murrie"]
        },
        { // 26
            category: "Lore",
            question: "What’s the name of the  town that you start in?",
            choice: ["Bapharia ", "Asterleeds", "Salamzart", "Lapenta"],
            answer: ["Asterleeds"]
        },
        { // 27
            category: "Lore",
            question: "What is the desert-themed town called?",
            choice: ["Ul'dah", "Salamzart", "Death Valley", "Durango"],
            answer: ["Salamzart"]
        },
        { // 28
            category: "Gameplay",
            question: "Which color liquid memory increases enemy drop rate?",
            choice: ["Yellow" , "Red" ,  "Purple" , "Green"],
            answer: ["Purple"]
        },
        { // 29
            category: "Gameplay",
            question: "What is the max amount of attachment slots a weapon can have?",
            choice: ["3", "6", "4" , "5"],
            answer: ["4"]
        },
        { // 30
            category: "Gameplay",
            question: "Which element has “high damage explosion” as a burst effect?",
            choice: ["Light","Dark","Ice","Earth"],
            answer: ["Light"]
        },
        { // 31
            category: "Gameplay",
            question: "How many waves does Arena [S Rank] have?",
            choice: ["30", "100", "25", "70"],
            answer: ["25"]
        },
        { // 32
            category: "Gameplay",
            question: "What is the name for the highest level dungeon difficulty?",
            choice:  ["Final Survey", "Ultra Survey", "Additional Survey", "Advanced Survey"],
            answer: ["Advanced Survey"]
        },
        { // 33
            category: "Gameplay",
            question: "What is the name of the boss in Valley of Machines?",
            choice: ["Quad Arm", "Reanimated Terror", "Ancient Android", "Demon Bhor"],
            answer: ["Quad Arm"]
        },
        { // 34
            category: "Gameplay",
            question: "What zone is the town Larpal in?",
            choice: ["Asterleeds", "Fiel Pond", "Andra Basin", "Divine Haven Hill"],
            answer: ["Divine Haven Hill"]
        },
        { // 35
            category: "Gameplay",
            question: "What is the first zone outside of Asterleeds called?",
            choice: ["Divine Haven Hill", "Skyquake Fields", "Andra Basin", "Soundless Foothills"],
            answer: ["Skyquake Fields"]
        },
        { // 36
            category: "Gameplay",
            question: "What zone is the dungeon Dragon Claw Valley [Free Exploration] found in?",
            choice: ["Salamzart", "Minster Hills", "Skyquake fields", "Fiel Pond"],
            answer: ["Minster Hills"]
        },
        { // 37
            category: "Lore",
            question: "What is the world of BLUE PROTOCOL called?",
            choice: ["Asteria", "Bahamar", "Regnus", "Prectus"],
            answer: ["Regnus"]
        },
        { // 38
            category: "Gameplay",
            question: "How many warp portals are in Asterleeds?",
            choice: ["6", "7", "8", "9"],
            answer: ["9"]
        },
        { // 39
            category: "Class",
            question: "Which class has the highest base attack on their weapons?",
            choice: ["Heavy Smasher", "Aegis Fighter", "Spell Caster", "Twin Striker"],
            answer: ["Twin Striker"]
        },
        { // 40
            category: "Gameplay",
            question: "What is the default amount of stamina?",
            choice: ["200", "100", "150", "70"],
            answer: ["100"]
        },
        { // 41
            category: "Gameplay",
            question: "How often do most elite monsters spawn?",
            choice: ["15 minutes", "10 minutes", "7 minutes", "30 minutes"],
            answer: ["15 minutes"]
        },
        { // 42
            category: "Gameplay",
            question: "What is the name of the level 18 raid boss?",
            choice: ["Fiel", "Demidragon", "Undead Prince", "Hydra"],
            answer: ["Demidragon"]
        },
        { // 43
            category: "Gameplay",
            question: "What is the max party size?",
            choice: ["3", "5", "6", "4"],
            answer: ["6"]
        },
        { // 44
            category: "Gameplay",
            question: "How many players can be in a raid?",
            choice: ["15","30","40","20"],
            answer: ["20"]
        },
        { // 45
            category: "Class",
            question: "Which class can equip the weapon Bapharia's Guidance?",
            choice: ["Blast Archer", "Aegis Fighter", "Spell caster", "Twin Striker"],
            answer: ["Aegis Fighter"]
        },
        { // 46
            category: "Class",
            question: "Which class has no heal skills?",
            choice: ["Twin Striker", "Spell Caster", "Aegis Fighter", "Blast Archer"],
            answer: ["Spell Caster"]
        },
        { // 47
            category: "Gameplay",
            question: "What is the strongest battle imajinn called?",
            choice: ["Sealed Tyranny", "Eternal Rage", "Red Splash", "Iron Fangs"],
            answer: ["Sealed Tyranny"]
        },
        { // 48
            category: "Gameplay",
            question: "How many healer-type battle imajinn are there?",
            choice: ["4", "2", "8", "3"],
            answer: ["3"]
        },
        { // 49
            category: "Technical",
            question: "What year did the development of BLUE PROTOCOL begin?",
            choice: ["2014", "2016", "2020", "2021"],
            answer: ["2014"]
        },
        { // 50
            category: "Gameplay",
            question: "How many character voice options can you choose from during character creation?",
            choice: ["7", "1", "5", "3"],
            answer: ["3"]
        },
        { // 51
            category: "Class",
            question: "Which class is often considered the biggest support role?",
            choice: ["Spell Caster", "Blast Archer", "Twin Striker", "Aegis fighter"],
            answer: ["Blast Archer"]
        },
        { // 52
            category: "Gameplay",
            question: "How many Permanent Skills & Tactical Abilities are the same for each class?",
            choice: ["17", "13", "14", "15"],
            answer: ["14"]
        },
        { // 53
            category: "Gameplay",
            question: "How many different inner imajinn slots are there?",
            choice: ["5", "3", "6", "8"],
            answer: ["5"]
        },
        { // 54
            category: "Gameplay",
            question: "How many accessory slots are confirmed by the developers?",
            choice: ["5", "8", "7", "10"],
            answer: ["7"]
        },
        { // 55
            category: "Gameplay",
            question: "How much stamina does evasion consume?",
            choice: ["20", "25", "15", "30"],
            answer: ["25"]
        },
    ]

// Dungeon List
var dungHolder = [

    // ENGLISH
    [

        // 1 Island In The Sky 虚空の浮島
        {
            name: "Island of the Void", //
            type: "RAID BATTLE",
            // difficulty
            diff: "",
            reqBS: "10+",
            timer: "30:00",
            ptSize: "20",
            imgSrc: "images/dungeons/raid_island.png",
            headerSrc: "images/dungeons/header_raid.png",
            allowSrc: "images/dungeons/allowance_raid.png",
            clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["","40,000","18,000","1,000"], // Luno, EXP, GC
            rewardsImg: [""],
            description: "The mysterious 'Starpulse Crevice' suddenly appears in Bahamar Highland. Adventurers were sent to investigate, but what they saw was...<br><br>・Defeat the massive boss within the time limit<br>・Running out of time will result in a mission failure<br>・Receive bonus rewards by ranking in the top", // バハマール高原に突如現れた謎の「星脈孔」\n調査に向かった冒険者たちが見たものは・・・\n\n・巨大なボスエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・ランキング上位入賞で報酬にボーナス
            // starvein starpulse starchain slit crevice hole crack
            allowance: ["Health Potion II", "Health Potion III", "ATK Up Serum","DEF Up Serum",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/health potion iii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png"],
            videoLink: "https://www.youtube.com/watch?v=a35O6OFwuAE&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=14"
        },

        // 2 Time attack party
        {
            name: "Time Attack | party",
            type: "DUNGEON",
            diff: "",
            reqBS: "19+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/ta_party.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Rush to defeat the boss within the time limit!", // 制限時間内にすばやくボスエネミーを討伐せよ！
            rewards: ["","40,000","20,000"], // ?, luno, exp
            rewardsImg: [""],
            description: "A competition designed to test the might of adventurers!<br>Those who aim to be the fastest continue to push themselves to the limit.<br><br>[Stage] Dragon Claw Valley<br>・Timer will continue until the boss at the end is defeated<br>・Receive rewards based on clear time<br>・Clear faster than anyone else and aim for the top rankings!", //冒険者の力量を測るために用意されたクリアタイムを競う競技。<br>最速を目指す者たちが、日夜己の限界を挑み続けている。<br><br>【舞台】巨竜の爪痕<br>・最奥部まで進み、ボスエネミー討伐までのタイムを競え<br>・クリアタイムに応じて報酬を獲得<br>・誰よりも早くクリアし、ランキング入りを狙え
            allowance: ["Health Potion II", "","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
            videoLink: "https://www.youtube.com/watch?v=EdvmzeFmS4Q"
        },

        // 3 Time attack solo
        {
            name: "Time Attack | solo",
            type: "DUNGEON",
            diff: "",
            reqBS: "19+",
            timer: "30:00",
            ptSize: "1",
            imgSrc: "images/dungeons/ta_solo.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Rush to defeat the boss within the time limit!", // 制限時間内にすばやくボスエネミーを討伐せよ！
            rewards: ["","40,000","20,000"], // ?, luno, exp
            rewardsImg: [""],
            // some other rewards for first time ranking in a tier
            description: "A competition designed to test the might of adventurers!<br>Those who aim to be the fastest continue to push themselves to the limit.<br><br>[Stage] Dragon Claw Valley<br>・Timer will continue until the boss at the end is defeated<br>・Receive rewards based on clear time<br>・Clear faster than anyone else and aim for the top rankings!", //冒険者の力量を測るために用意されたクリアタイムを競う競技。<br>最速を目指す者たちが、日夜己の限界を挑み続けている。<br><br>【舞台】巨竜の爪痕<br>・最奥部まで進み、ボスエネミー討伐までのタイムを競え<br>・クリアタイムに応じて報酬を獲得<br>・誰よりも早くクリアし、ランキング入りを狙え
            allowance: ["Health Potion II", "","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
            videoLink: "https://www.youtube.com/watch?v=mMqJ6N0Pwc8"
        },

        // 4 Arena S
        {
            name: "Arena | S rank",
            type: "ARENA",
            diff: "",
            reqBS: "28+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/arena_s.png",
            headerSrc: "images/dungeons/header_arena.png",
            allowSrc: "images/dungeons/allowance_arena.png",
            clearCondition: "Defeat 100 enemies!", //100体のエネミーを討伐せよ！
            rewards: ["Kaiser Elk's Idea","142,000","64,000","300"], // Item, Luno, Exp, GC
            rewardsImg: ["images/dungeons/imagine idea.png"],
            description: "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
            allowance: ["Health Potion II", "","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
            videoLink: "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12"
        },

        // 5 Arena A
        {
            name: "Arena | A rank",
            type: "ARENA",
            diff: "",
            reqBS: "23+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/arena_a.png",
            headerSrc: "images/dungeons/header_arena.png",
            allowSrc: "images/dungeons/allowance_arena.png",
            clearCondition: "Defeat 75 enemies!", //75体のエネミーを討伐せよ！
            rewards: ["Goblin Sage's Idea","118,200","53,300","250"], // Item, Luno, Exp, GC
            rewardsImg: ["images/dungeons/imagine idea.png"],
            description: "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
            allowance: ["Health Potion II", "","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
            videoLink: "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12"
        },

        // 6 Arena B
        {
            name: "Arena | B rank",
            type: "ARENA",
            diff: "",
            reqBS: "18+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/arena_b.png",
            headerSrc: "images/dungeons/header_arena.png",
            allowSrc: "images/dungeons/allowance_arena.png",
            clearCondition: "Defeat 50 enemies!", //50体のエネミーを討伐せよ！
            rewards: ["Horned Goat's Idea","83,300","37,500","200"], // Item, Luno, Exp, GC
            rewardsImg: ["images/dungeons/imagine idea.png"],
            description: "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
            allowance: ["Health Potion II", "","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
            videoLink: "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12"
        },

        // 7 Arena C
        {
            name: "Arena | C rank",
            type: "ARENA",
            diff: "",
            reqBS: "11+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/arena_c.png",
            headerSrc: "images/dungeons/header_arena.png",
            allowSrc: "images/dungeons/allowance_arena.png",
            clearCondition: "Defeat 25 enemies!", //25体のエネミーを討伐せよ！
            rewards: ["Tyrant Boar's Idea","44,600","20,000","150"], // Item, Luno, Exp, GC
            rewardsImg: ["images/dungeons/imagine idea.png"],
            description: "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
            allowance: ["Health Potion II", "","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
            videoLink: "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12"
        },

        // 8 Mecha Hard
        {
            name: "Valley of Machines",
            type: "DUNGEON",
            diff: "advanced survey",
            reqBS: "25+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_mecha%20advanced.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["High Quality Bahamar Yellow","132,920","59,940"], // ?, Luno, Exp
            rewardsImg: ["images/dungeons/high quality bahamar yellow.png"],
            description: "[Party Recommended]<br>The burial site of a Bapharian civilization-era city,<br>most of the remains have submerged among the surrounding terrain.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.",　// 【パーティ推奨】\nバファリア文明時代の街が埋もれ、\n周辺の地形と一体化してできた遺跡の谷。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
            allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
            videoLink: "https://www.youtube.com/watch?v=jctyzo_PWaQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=11"
        },

        // 9 Pillar Hard
        {
            name: "Pillar of Divinity",
            type: "DUNGEON",
            diff: "advanced survey",
            reqBS: "20+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_pillar%20advanced.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["High Performance IC Core","92,490","41,650"], // ?, Luno, Exp
            rewardsImg: ["images/dungeons/high performance ic core.png"],
            description: "[Party Recommended]<br>One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
            allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
            videoLink: "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10"
        },

        // 10 Dragon Hard
        {
            name: "Dragon Claw Valley",
            type: "DUNGEON",
            diff: "advanced survey",
            reqBS: "14+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_dragonclaw%20advanced.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["Firm Dragon Bone Fragment","59,280","26,730"],
            rewardsImg: ["images/dungeons/firm dragon bone frag.png"],
            description: "[Party Recommended]<br>A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.", // 【パーティ推奨】ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
            allowance: ["Health Potion II", "ATK Up Serum","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","",""],
            videoLink: "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9"
        },

        // 11 Mecha Easy
        {
            name: "Valley of Machines",
            type: "DUNGEON",
            diff: "survey",
            reqBS: "10+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_mecha%20survey.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["Bahamar Yellow","38,040","17,130"], // ?, Luno, Exp
            rewardsImg: ["images/dungeons/bahamar yellow.png"],
            description: "[Party Recommended]<br>The burial site of a Bapharian civilization-era city,<br>most of the remains have submerged among the surrounding terrain.<br>The legacy of Bapharia remains through its machines which will attack intruders on sight.",　// 【パーティ推奨】\nバファリア文明時代の街が埋もれ、\n周辺の地形と一体化してできた遺跡の谷。\nバファリアの遺産である機械類が今もこの地を守っており、\n侵入者を迎え撃つ。
            allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
            videoLink: "https://www.youtube.com/watch?v=jctyzo_PWaQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=11"
        },

        // 12 Pillar Med
        {
            name: "Pillar of Divinity",
            type: "DUNGEON",
            diff: "additional survey",
            reqBS: "8+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_pillar%20additional.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["IC Core","25,170","11,310"], // ?, Luno, Exp
            rewardsImg: ["images/dungeons/ic core.png"],
            description: "[Party Recommended]<br>One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>On the outside, it remains a magnificent sight to behold.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\nその外観は、どれほどの年月が経っても美しく壮麗なままである。
            allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
            videoLink: "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10"
        },

        // 13 Dragon Med
        {
            name: "Dragon Claw Valley",
            type: "DUNGEON",
            diff: "additional survey",
            reqBS: "3+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_dragonclaw%20additional.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["Dragon Bone Fragment","7,380","3,280"], // ?, Luno, Exp
            rewardsImg: ["images/dungeons/dragon bone frag.png"],
            description: "A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>Waterfalls violently cascading down the cliffs have been said to resemble the fierce power of dragons.", // ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n崖を流れ落ちる滝は迫力に満ちて荒々しく\nそれこそ竜の姿に例えられている。
            allowance: ["Health Potion II", "ATK Up Serum","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","",""],
            videoLink: "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9"
        },

        // 14 Reikrid Med
        {
            name: "Reikrid Tunnels",
            type: "DUNGEON",
            diff: "additional survey",
            reqBS: "1+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_reikrid.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["Reikrid Crystal","1,390","2,670"], // Reikrid Crystal, 1,390 Luno, 2,670 EXP
            rewardsImg: ["images/dungeons/reikrid crystal.png"],
            description: "A tunnel that is the source of Reikrid Crystals.<br>Although mining operations have ceased, the occasional adventurer will come in search of materials.<br>It is said that monsters have started to live here.", // 「レイクリッド結晶」などの産地として使われていた坑道の一角。\nすでに役目を終え、大規模な採掘は行われていないが、\nたまに冒険者が素材を求めてやってくる。\n最近、モンスターが棲みついてしまったらしい。
            allowance: ["Health Potion II", "","","",""], // Dungeon-use Health Potion
            allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
            videoLink: "https://www.youtube.com/watch?v=X06wIcNYhxc"
        },

        // 15 Pillar Easy
        {
            name: "Pillar of Divinity",
            type: "DUNGEON",
            diff: "",
            reqBS: "6+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_pillar%20additional.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Reach the top floor!", //最上階へ到達せよ！
            rewards: ["IC Core","18,040","16,230"], // ?, Luno, Exp
            rewardsImg: ["images/dungeons/ic core.png"],
            description: "One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>On the outside, it remains a magnificent sight to behold.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\nその外観は、どれほどの年月が経っても美しく壮麗なままである。
            allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
            videoLink: "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10"
        },

        // 16 Giant Tower Easy
        {
            name: "Giant Tower Ruins",
            type: "DUNGEON",
            diff: "",
            reqBS: "1+",
            timer: "5:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_giant%20tower%20ruins.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat all enemies within the time limit!", //　制限時間内に全てのエネミーを討伐せよ！
            rewards: ["","&nbsp","&nbsp",""], //none
            rewardsImg: [""],
            description: "Ancient ruins that bring memories of the crumbled giant tower to mind.<br>Priest Walkin, who's said to be knowledgeable about 'visitors' set out to investigate the land and hasn't returned.<br>Hopefully nothing bad has happened... ", //崩れ落ちた巨塔を思わせる古代遺跡。<br>『来者』について詳しいという神官ワールキンが<br>ここに調査に赴いたまま、帰ってこないらしい。<br>なにごともなければ良いのだが・・・・・。
            allowance: "", //none
            allowanceImgs: ["","","",""],
            videoLink: "https://youtu.be/I0yaHHpQRpw?t=5670"
        },

        // 17 Dragon Easy
        {
            name: "Dragon Claw Valley",
            type: "DUNGEON",
            diff: "",
            reqBS: "2+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_dragonclaw%20additional.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the powerful enemy!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["Dragon Bone Fragment","3,770","6,880"], // ?, Luno, Exp
            rewardsImg: ["images/dungeons/dragon bone frag.png"],
            description: "A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>Waterfalls violently cascading down the cliffs have been said to resemble the fierce power of dragons.", // ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n崖を流れ落ちる滝は迫力に満ちて荒々しく\nそれこそ竜の姿に例えられている。
            allowance: ["Health Potion II", "ATK Up Serum","","",""],
            allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","",""],
            videoLink: "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9"
        },

        // 18 Reikrid Easy
        {
            name: "Reikrid Tunnels",
            type: "DUNGEON",
            diff: "",
            reqBS: "1+",
            timer: "30:00",
            ptSize: "6",
            imgSrc: "images/dungeons/dungeon_reikrid.png",
            headerSrc: "images/dungeons/header_dungeon.png",
            allowSrc: "images/dungeons/allowance_dungeon.png",
            clearCondition: "Defeat the powerful enemy!", //制限時間内にボスエネミーを討伐せよ！
            rewards: ["Reikrid Crystal","1,390","2,670"], // Reikrid Crystal, 1,390 Luno, 2,670 EXP
            rewardsImg: ["images/dungeons/reikrid crystal.png"],
            description: "A tunnel that is the source of Reikrid Crystals.<br>Although mining operations have ceased, the occasional adventurer will come in search of materials.<br>It is said that monsters have started to live here.", // 「レイクリッド結晶」などの産地として使われていた坑道の一角。\nすでに役目を終え、大規模な採掘は行われていないが、\nたまに冒険者が素材を求めてやってくる。\n最近、モンスターが棲みついてしまったらしい。
            allowance: ["Health Potion II", "","","",""], // Dungeon-use Health Potion
            allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
            videoLink: "https://www.youtube.com/watch?v=X06wIcNYhxc"
        }

    ],
    
    // JAPANESE
    [],
    
    // PORTUGUESE
    [],
    
    // RUSSIAN
    [],

]
