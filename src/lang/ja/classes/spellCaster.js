const DESCRIPTION_SPELL_CASTER = {}

const WEAPONS_SPELL_CASTER = [
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
]

const SKILLS_SPELL_CASTER = []