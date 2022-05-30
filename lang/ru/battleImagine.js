const BATTLE_IMAGINE = [
    // Pink Piglet ピンクウリボ
    { 
        name: "Розовая Свинка",
        type: "Целитель",
        image: "images/map/pinkpiglet.mp4",
        level: "Начиная с 1 ~ 1 уровня (Макс. ур.: 15)",
        element: ["Элемент &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["Перезарядка","&nbsp;&nbsp;&nbsp;&nbsp;60 сек"],
        // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Спокойствие Свинки (лечение)","Эффективность", "175","67","Призывает образ розовой свинки <br> который создает вокруг себя лечебное поле."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Боевой Клич (поддержка)","Эффективность", "150","150","Призывает образ свирепого зверя<br>который дает призывателю временное увеличение ATK."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Дробитель Шлемов (Атака)","Эффективность", "422","166","Призывает Образ Красного Всплеска<br> который нацеливается и ударяет цель своей дубинкой в ​​голову."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Рывок Вепря(Атака)","Эффективность", "514","166","Призывает Образ Темно-Зеленого Клыка<br>который делает рывок в центр прицела."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Горный бросок (атака)","Эффективность", "524","169","Призывает Образ Железного Клыка<br>который подбрасывает врагов в воздух своими большими клыками."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Мощное Колебание (Атака)","Эффективность", "710","169","Вызывает образ Пламенного Тюремщика,<br>который размахивает дубинкой по врагам перед собой."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Естественный Отбор(Атака)","Эффективность", "696","166","Призывает Образ Свирепого Золота<br>который атакует цель."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Падение каменного клыка","Эффективность", "483","156","Призывает Образ сапфировой рыси<br>который бросается на врага и кусает его."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Молния Кайзера(Атака)","Эффективность", "493","159","Призывает образ пылающих рогов <br> которые выполняют атаку элементальным зарядом молнии в направлении цели."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Спешка Барана (Поддержка)","Эффективность", "130","130","Призывает Образ Жуткого Барана <br> который дает призывателю временное увеличение скорости передвижения."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Исцеление По Области(Лечение)","Эффективность", "267","71","Вызывает Образ Зло Целителя<br>который лечит окружающих HP союзников."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Древний Кристалл (Ктака)","Эффективность", "741","156","Вызывает Образ Старейшина Трюкач <br> который запускает 3 сосульки в цель."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Огненный шар (Атака)","Эффективность", "604","166","Призывает Образ Гоблина-Старейшины <br> который стреляет в цель одним огненным шаром."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Удар Гоблина (Атака)","Эффективность", "414","163","Призывает Образ Гоблина <br> который поражает цель своей дубинкой."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Коронный Удар(Атака)","Эффективность", "669","159","Призывает Образ Ровнинной Лисы <br> который выполняет прыжок во врагов."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Убийца Гончих (атака)","Эффективность", "504","163","Призывает Образ Тирана Вепря, который атакует цель ударом головой."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Удар Задними Ногами(Атака)","Эффективность", "593","163","Вызывает Образ Рогатого Козла <br> который отбрасывает врагов задними ногами."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Тюнинг гоблина-мудреца(Лечение)","Эффективность", "323","74","Призывает Образ Гоблина-Мудреца <br> который восстанавливает здоровье призывателю."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Клаппер Рог (атака)","Эффективность", "756","159","Призывает Образ Кайзера Лося <br> которое атакует врагов своими рогами."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Нападение Тирана (Атака)","Эффективность", "787","166","Призывает Образ Бешеного Королевского Клыка <br> который выполняет зарядовую атаку на широком радиусе действия в направлении цели."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Землетрясение (Атака)","Эффективность", "802","?","Призывает Образ Запечатанного Зла <br> который выполняет мощную атаку земного элементаля с центром вокруг себя."],
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
        skill: ["Умение","&nbsp;&nbsp;&nbsp;&nbsp;Рука-слайсер (атака)","Эффективность", "772","?","Призывает Образ Плидока <br> который пронзает врагов перед собой своими руками-мечами."],
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
    }
];

export default BATTLE_IMAGINE;