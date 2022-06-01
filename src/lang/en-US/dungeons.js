const DUNGEONS = [
    // 1 Island In The Sky 虚空の浮島 "Void('s) Island"
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
        rewards: ["", "40,000", "18,000", "1,000"], // Luno, EXP, GC
        rewardsImg: [""],
        description:
            "The mysterious 'Starpulse Crevice' suddenly appears in Bahamar Highland. Adventurers were sent to investigate, but what they saw was...<br><br>・Defeat the massive boss within the time limit<br>・Running out of time will result in a mission failure<br>・Receive bonus rewards by ranking in the top", // バハマール高原に突如現れた謎の「星脈孔」\n調査に向かった冒険者たちが見たものは・・・\n\n・巨大なボスエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・ランキング上位入賞で報酬にボーナス
        // starvein starpulse starchain slit crevice hole crack
        allowance: [
            "Health Potion II",
            "Health Potion III",
            "ATK Up Serum",
            "DEF Up Serum",
            "",
        ],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/health potion iii.png",
            "images/dungeons/atk up serum.png",
            "images/dungeons/def up serum.png",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=a35O6OFwuAE&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=14",
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
        rewards: ["", "40,000", "20,000"], // ?, luno, exp
        rewardsImg: [""],
        description:
            "A competition designed to test the might of adventurers!<br>Those who aim to be the fastest continue to push themselves to the limit.<br><br>[Stage] Dragon Claw Valley<br>・Timer will continue until the boss at the end is defeated<br>・Receive rewards based on clear time<br>・Clear faster than anyone else and aim for the top rankings!", //冒険者の力量を測るために用意されたクリアタイムを競う競技。<br>最速を目指す者たちが、日夜己の限界を挑み続けている。<br><br>【舞台】巨竜の爪痕<br>・最奥部まで進み、ボスエネミー討伐までのタイムを競え<br>・クリアタイムに応じて報酬を獲得<br>・誰よりも早くクリアし、ランキング入りを狙え
        allowance: ["Health Potion II", "", "", "", ""],
        allowanceImgs: ["images/dungeons/health potion ii.png", "", "", ""],
        videoLink: "https://www.youtube.com/watch?v=EdvmzeFmS4Q",
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
        rewards: ["", "40,000", "20,000"], // ?, luno, exp
        rewardsImg: [""],
        // some other rewards for first time ranking in a tier
        description:
            "A competition designed to test the might of adventurers!<br>Those who aim to be the fastest continue to push themselves to the limit.<br><br>[Stage] Dragon Claw Valley<br>・Timer will continue until the boss at the end is defeated<br>・Receive rewards based on clear time<br>・Clear faster than anyone else and aim for the top rankings!", //冒険者の力量を測るために用意されたクリアタイムを競う競技。<br>最速を目指す者たちが、日夜己の限界を挑み続けている。<br><br>【舞台】巨竜の爪痕<br>・最奥部まで進み、ボスエネミー討伐までのタイムを競え<br>・クリアタイムに応じて報酬を獲得<br>・誰よりも早くクリアし、ランキング入りを狙え
        allowance: ["Health Potion II", "", "", "", ""],
        allowanceImgs: ["images/dungeons/health potion ii.png", "", "", ""],
        videoLink: "https://www.youtube.com/watch?v=mMqJ6N0Pwc8",
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
        rewards: ["Kaiser Elk's Idea", "142,000", "64,000", "300"], // Item, Luno, Exp, GC
        rewardsImg: ["images/dungeons/imagine idea.png"],
        description:
            "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
        allowance: ["Health Potion II", "", "", "", ""],
        allowanceImgs: ["images/dungeons/health potion ii.png", "", "", ""],
        videoLink:
            "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12",
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
        rewards: ["Goblin Sage's Idea", "118,200", "53,300", "250"], // Item, Luno, Exp, GC
        rewardsImg: ["images/dungeons/imagine idea.png"],
        description:
            "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
        allowance: ["Health Potion II", "", "", "", ""],
        allowanceImgs: ["images/dungeons/health potion ii.png", "", "", ""],
        videoLink:
            "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12",
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
        rewards: ["Horned Goat's Idea", "83,300", "37,500", "200"], // Item, Luno, Exp, GC
        rewardsImg: ["images/dungeons/imagine idea.png"],
        description:
            "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
        allowance: ["Health Potion II", "", "", "", ""],
        allowanceImgs: ["images/dungeons/health potion ii.png", "", "", ""],
        videoLink:
            "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12",
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
        rewards: ["Tyrant Boar's Idea", "44,600", "20,000", "150"], // Item, Luno, Exp, GC
        rewardsImg: ["images/dungeons/imagine idea.png"],
        description:
            "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
        allowance: ["Health Potion II", "", "", "", ""],
        allowanceImgs: ["images/dungeons/health potion ii.png", "", "", ""],
        videoLink:
            "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12",
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
        rewards: ["High Quality Bahamar Yellow", "132,920", "59,940"], // ?, Luno, Exp
        rewardsImg: ["images/dungeons/high quality bahamar yellow.png"],
        description:
            "[Party Recommended]<br>The burial site of a Bapharian civilization-era city,<br>most of the remains have submerged among the surrounding terrain.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.", // 【パーティ推奨】\nバファリア文明時代の街が埋もれ、\n周辺の地形と一体化してできた遺跡の谷。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
        allowance: ["Health Potion II", "ATK Up Serum", "DEF Up Serum", "", ""],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/atk up serum.png",
            "images/dungeons/def up serum.png",
            "",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=jctyzo_PWaQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=11",
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
        rewards: ["High Performance IC Core", "92,490", "41,650"], // ?, Luno, Exp
        rewardsImg: ["images/dungeons/high performance ic core.png"],
        description:
            "[Party Recommended]<br>One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
        allowance: ["Health Potion II", "ATK Up Serum", "DEF Up Serum", "", ""],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/atk up serum.png",
            "images/dungeons/def up serum.png",
            "",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10",
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
        rewards: ["Firm Dragon Bone Fragment", "59,280", "26,730"],
        rewardsImg: ["images/dungeons/firm dragon bone frag.png"],
        description:
            "[Party Recommended]<br>A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.", // 【パーティ推奨】ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
        allowance: ["Health Potion II", "ATK Up Serum", "", "", ""],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/atk up serum.png",
            "",
            "",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9",
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
        rewards: ["Bahamar Yellow", "38,040", "17,130"], // ?, Luno, Exp
        rewardsImg: ["images/dungeons/bahamar yellow.png"],
        description:
            "[Party Recommended]<br>The burial site of a Bapharian civilization-era city,<br>most of the remains have submerged among the surrounding terrain.<br>The legacy of Bapharia remains through its machines which will attack intruders on sight.", // 【パーティ推奨】\nバファリア文明時代の街が埋もれ、\n周辺の地形と一体化してできた遺跡の谷。\nバファリアの遺産である機械類が今もこの地を守っており、\n侵入者を迎え撃つ。
        allowance: ["Health Potion II", "ATK Up Serum", "DEF Up Serum", "", ""],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/atk up serum.png",
            "images/dungeons/def up serum.png",
            "",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=jctyzo_PWaQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=11",
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
        rewards: ["IC Core", "25,170", "11,310"], // ?, Luno, Exp
        rewardsImg: ["images/dungeons/ic core.png"],
        description:
            "[Party Recommended]<br>One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>On the outside, it remains a magnificent sight to behold.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\nその外観は、どれほどの年月が経っても美しく壮麗なままである。
        allowance: ["Health Potion II", "ATK Up Serum", "DEF Up Serum", "", ""],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/atk up serum.png",
            "images/dungeons/def up serum.png",
            "",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10",
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
        rewards: ["Dragon Bone Fragment", "7,380", "3,280"], // ?, Luno, Exp
        rewardsImg: ["images/dungeons/dragon bone frag.png"],
        description:
            "A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>Waterfalls violently cascading down the cliffs have been said to resemble the fierce power of dragons.", // ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n崖を流れ落ちる滝は迫力に満ちて荒々しく\nそれこそ竜の姿に例えられている。
        allowance: ["Health Potion II", "ATK Up Serum", "", "", ""],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/atk up serum.png",
            "",
            "",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9",
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
        rewards: ["Reikrid Crystal", "1,390", "2,670"], // Reikrid Crystal, 1,390 Luno, 2,670 EXP
        rewardsImg: ["images/dungeons/reikrid crystal.png"],
        description:
            "A tunnel that is the source of Reikrid Crystals.<br>Although mining operations have ceased, the occasional adventurer will come in search of materials.<br>It is said that monsters have started to live here.", // 「レイクリッド結晶」などの産地として使われていた坑道の一角。\nすでに役目を終え、大規模な採掘は行われていないが、\nたまに冒険者が素材を求めてやってくる。\n最近、モンスターが棲みついてしまったらしい。
        allowance: ["Health Potion II", "", "", "", ""], // Dungeon-use Health Potion
        allowanceImgs: ["images/dungeons/health potion ii.png", "", "", ""],
        videoLink: "https://www.youtube.com/watch?v=X06wIcNYhxc",
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
        rewards: ["IC Core", "18,040", "16,230"], // ?, Luno, Exp
        rewardsImg: ["images/dungeons/ic core.png"],
        description:
            "One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>On the outside, it remains a magnificent sight to behold.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\nその外観は、どれほどの年月が経っても美しく壮麗なままである。
        allowance: ["Health Potion II", "ATK Up Serum", "DEF Up Serum", "", ""],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/atk up serum.png",
            "images/dungeons/def up serum.png",
            "",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10",
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
        rewards: ["", "&nbsp", "&nbsp", ""], //none
        rewardsImg: [""],
        description:
            "Ancient ruins that bring memories of the crumbled giant tower to mind.<br>Priest Walkin, who's said to be knowledgeable about 'visitors' set out to investigate the land and hasn't returned.<br>Hopefully nothing bad has happened... ", //崩れ落ちた巨塔を思わせる古代遺跡。<br>『来者』について詳しいという神官ワールキンが<br>ここに調査に赴いたまま、帰ってこないらしい。<br>なにごともなければ良いのだが・・・・・。
        allowance: "", //none
        allowanceImgs: ["", "", "", ""],
        videoLink: "https://youtu.be/I0yaHHpQRpw?t=5670",
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
        rewards: ["Dragon Bone Fragment", "3,770", "6,880"], // ?, Luno, Exp
        rewardsImg: ["images/dungeons/dragon bone frag.png"],
        description:
            "A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>Waterfalls violently cascading down the cliffs have been said to resemble the fierce power of dragons.", // ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n崖を流れ落ちる滝は迫力に満ちて荒々しく\nそれこそ竜の姿に例えられている。
        allowance: ["Health Potion II", "ATK Up Serum", "", "", ""],
        allowanceImgs: [
            "images/dungeons/health potion ii.png",
            "images/dungeons/atk up serum.png",
            "",
            "",
        ],
        videoLink:
            "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9",
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
        rewards: ["Reikrid Crystal", "1,390", "2,670"], // Reikrid Crystal, 1,390 Luno, 2,670 EXP
        rewardsImg: ["images/dungeons/reikrid crystal.png"],
        description:
            "A tunnel that is the source of Reikrid Crystals.<br>Although mining operations have ceased, the occasional adventurer will come in search of materials.<br>It is said that monsters have started to live here.", // 「レイクリッド結晶」などの産地として使われていた坑道の一角。\nすでに役目を終え、大規模な採掘は行われていないが、\nたまに冒険者が素材を求めてやってくる。\n最近、モンスターが棲みついてしまったらしい。
        allowance: ["Health Potion II", "", "", "", ""], // Dungeon-use Health Potion
        allowanceImgs: ["images/dungeons/health potion ii.png", "", "", ""],
        videoLink: "https://www.youtube.com/watch?v=X06wIcNYhxc",
    },
];

export default DUNGEONS;