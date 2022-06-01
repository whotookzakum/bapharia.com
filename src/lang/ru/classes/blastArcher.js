const DESCRIPTION_BLAST_ARCHER = {}

const WEAPONS_BLAST_ARCHER = [
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
    }
]

const SKILLS_BLAST_ARCHER = []