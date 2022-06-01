const DESCRIPTION_AEGIS_FIGHTER = {}

const WEAPONS_AEGIS_FIGHTER = [
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
    }
]

const SKILLS_AEGIS_FIGHTER = []