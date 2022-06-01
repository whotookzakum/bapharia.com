const DESCRIPTION_SPELL_CASTER = {}

const WEAPONS_SPELL_CASTER = [
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
        recipe: ["Высокопроизводительное Ядро ​​IC","Украшенный посох гоблина","Ветка Сплавного Леса","1,200,000"],
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

const SKILLS_SPELL_CASTER = []