const BATTLE_IMAGINE = [
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
    }
];

export default BATTLE_IMAGINE;