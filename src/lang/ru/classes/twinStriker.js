const DESCRIPTION_TWIN_STRIKER = {}

const WEAPONS_TWIN_STRIKER = [
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
        recipe: ["Высокопроизводительное Ядро ​​IC","Рог Лося Кайзера","Дрожащая медь","1,200,000"],
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
    }
]

const SKILLS_TWIN_STRIKER = []