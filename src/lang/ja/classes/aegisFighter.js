const DESCRIPTION_AEGIS_FIGHTER = {}

const WEAPONS_AEGIS_FIGHTER = [
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
    }
]

const SKILLS_AEGIS_FIGHTER = []

