// Weapons 
var wepHolderRU = [
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
    



// Map
        // RUSSIAN
        {
            // Asterleeds
            storage: "Склад",
            memorystand: 
                'Стенд Памяти<br><img src="images/liquidmemory%20yellow%20fad459.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Увеличен шанс получения более высокого уровня оружия при крафте.<br><img src="images/liquidmemory%20blue%206ac7cd.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Увеличен опыт при прокачке оружия<br><img src="images/liquidmemory%20red%20db516a.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Сокращенное время сбора<br><img src="images/liquidmemory%20purple%2079389e.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Увеличен шанс выпадения врагов<br><img src="images/liquidmemory%20green%2045b343.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Снижены цены в магазинах NPC',
            imajhouse: "Исследовательский институт Имаджинна",
            classmaster: "Управление Классами",
            wepshop: "Оружейный Магазин",
            potshop: "Магазин Зелий",
            craftmachine: "Машина Для Крафта",
            reconstructor: "Реконструктор Оружия",
            gcshop: "GC Магазин",
            timedquest: "",
            yellow1:
                'Желтые Текучие Воспоминания 1<br><br>Выполни Orvis&#39; Квест<br>"Поспешишь - людей насмешишь" (Ур. 24+)<br><br>Получить 3 Orvis&#39; Забрать у<br>Светящийся Гоблин-Старейшина на<br>Dragonclaw Valley [Свобоное Исследование]',
            green1: 
                'Зеленый Текучие Воспоминания 1<br><br>Выполни Godo&#39;s Квест<br>"Условия обмена на<br>Оминоус Одор" (Lv. 19+)<br><br>Победить Жуткого Козла<br>В Soundless Foothills<br>и доложить Godo',
            blue2: [
                'Синие Текучие Воспоминания 2<br><br>Осмотрите Колесо Корабля Позади<br>Исполнителя На 2 Этаже<br> Павильона У Вращающегося Руля',
            ],
            blue1: 
                'Синие Текучие Воспоминания 1<br><br>Выполни Patty&#39;s Квест<br>"Проблемный ученик" (Lv. 13+)<br><br>Получить Экстра Энграмму<br>(Очистить Столп Божественности<br>[Advanced Survey]) И Принеси это<br>Ханне за столпом',
            red2: 
                'Красные Текучие Воспоминания 2<br><br>Осмотрите бутылки на<br>Стенде Памяти',
            red1: 
                'Красные Текучие Воспоминания 1<br><br>Выполни квест<br>"Добро Пожаловать На Стенд Памяти!" (Ур. 12+)<br><br>Послушай Стенд Памяти<br>Содержащий&#39; Объяснение',
            purple1: 
                'Фиолетовые Текучие Воспоминания 1<br><br>Выполни Луису&#39;s Квест<br>"Спокойный Исследователь&#39;s Последняя работа!" (Ур. 28+)<br><br>Принесите Луису следующее:<br>5 Камней Полнолуния<br>(Calm Eve Terraces/Ночное Время/Высота)<br>5 Sunshine Shells<br>(Fiel Pond/Дневное Время/Река)',
            warpfrontier: 'Врата Перехода<br>Frontiering Station',
            warpcoatofarms: 'Врата Перехода<br>Coat of Arms Plaza',
            warpcitygate: 'Врата Перехода<br>City Gate Square',
            warpbeach: 'Врата Перехода<br>Asterleeds Beach',
            warpport: 'Врата Перехода<br>Asterleeds Port',
            warpinn: 'Врата Перехода<br>The Double-Faced Coin',
            warparena: 'Врата Перехода<br>Revolving Helm Pavilion',
            warpshrine: 'Врата Перехода<br>Arena Entrance',
            warppavilion: 'Врата Перехода<br>Shrine Entrance',
            msq1: 'Main Story Quest 1<br>"В поисках воспоминаний"<br><br>Поговорите С Владельцем <br>Гостиницы На 1 Месте',
            msq2: 'Main Story Quest 2<br>"В поисках воспоминаний"<br><br>Выйти Из Гостиницы',
            msq3: 'Main Story Quest 3<br>"В поисках воспоминаний"<br><br>Купите зелья здоровья для полевых работ',
            msq4: 'Main Story Quest 4<br>"В поисках воспоминаний"<br><br>Поговорите С Фесте в<br>Перед Хранилищем',
            msq5: 'Main Story Quest 5<br>"В поисках воспоминаний"<br><br>Перейти На Площадь Городских Ворот',
            msq6: 'Main Story Quest 6<br>"В поисках воспоминаний"<br><br>Осмотрите Врата Перехода.',
            msq7: 'Main Story Quest 7<br>"В поисках воспоминаний"<br><br>Выйти Из Города',
            msq10: 'Main Story Quest 10<br>"В поисках воспоминаний"<br><br>Вернуться На Пограничную Станцию',
            msq11: 'Main Story Quest 11<br>"В поисках воспоминаний"<br><br>Поговорите С Джейком <br> На Пограничной Станции',
            msq12: 'Main Story Quest 12<br>"Регистрация искателя приключений"<br><br>Поговорите С Мюли На <br> Пограничной Станции',
            msq14: 'Main Story Quest 14<br>"Регистрация искателя приключений"<br><br>Изготовить зелье здоровья <br> для использования в полевых условиях.',
            msq15: 'Main Story Quest 15<br>"Регистрация искателя приключений"<br><br>Доложите Мюли <br> на пограничной станции',
            msq16: 'Main Story Quest 16<br>"Поднимите свой ранг  приключений!"<br><br>Поговорите с Джейком на<br> Пограничной станции <br> (Треб. Ранг приключения 2+)',
            msq17: 'Main Story Quest 17<br>"Поднимите свой ранг  приключений!"<br><br>Поговорите С Фесте<br>',
            msq18: 'Main Story Quest 18<br>"Поднимите свой ранг  приключений!"<br><br>Посетите научно-исследовательский институт  <br><br>',
            msq20: 'Main Story Quest 20<br>"Поднимите свой ранг  приключений!"<br><br>Посетите научно-исследовательский институт  <br><br>',
            msq21: 'Main Story Quest 21<br>"Поднимите свой ранг  приключений!"<br><br>Сделай Внутреннюю Визуализацию <br> "Диранкс (Храбрость)""',
            msq22: 'Main Story Quest 22<br>"Поднимите свой ранг  приключений!"<br><br>Повышение Уровня До 2-го Ранга <br> Приключения  (в меню команд)',
            msq23: 'Main Story Quest 23<br>"Dragonclaw Valley"<br><br>Поговорите С Джейком О <br> Уровень приключения 2 ',
            msq26: 'Main Story Quest 26<br>"Dragonclaw Valley"<br><br>Получите Награды От Джейка <br> На Пограничной Станции',
            msq27: 'Main Story Quest 27<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Поговорите С Владельцем Гостиницы<br>В Двусторонней Монете',
            msq28: 'Main Story Quest 28<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Спросите о &#39;visitors&#39;<br>В Bapharia Shrine',
            asterleedsToSkyquake: "Skyquake Fields",
            asterleedsToSkyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Розавая Свинка<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">Ровнинная Лиса<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw">Цветок Ламузы<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">Железная Руда<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">Рябь Камня<br>',
            
            
            // Asteria Plain
            skyquakeToAsterleeds: "To Asterleeds",
            // 10 things
            skyquakeToAsterleedsTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Врата Перехода<br><img src="images/map/imajinnHouse.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Образ исследовательского института<br><img src="images/map/crafting.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Машина Для Крафта<br><img src="images/map/reconstructor.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Реконструктор Оружия<br><img src="images/map/classmaster.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Управление Классами<br><img src="images/map/liquidmemory.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Стенд Памяти<br><img src="images/map/exchange.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">GC Магазин<br><img src="images/map/potion.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Магазин Зелий<br><img src="images/map/weapon.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Оружейный Магазин<br><img src="images/map/storage.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Склад<br>',
            minsterToDivine: "На холм Божественной гавани",
            // 12 things
            minsterToDivineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Врата Перехода - Larpal<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Сапфировая Рысь<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Пламенные Рога<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Высокогорная Лиса<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw; width: 1.823vw;">Рогатый Баран<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Кайзер Лось<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Дымчатый Мох<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Фрукт Блессио<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Лист Медвежого Дерева<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Ископаемое Из Большого Клыка<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Баха Руда<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Серебристый песок<br>',
            skyquakeName: "Skyquake Fields",
            // 6 things
            skyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Розовая Свинка<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Lamusa Flower<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Ripple Stone<br>',
            expSkyquake1: 'Пункт исследования <br> Skyquake Fields 1',
            expSkyquake2: 'Пункт исследования <br> Skyquake Fields 2',
            expSkyquake3: 'Пункт исследования <br> Skyquake Fields 3',
            expSkyquake4: 'Пункт исследования <br> Skyquake Fields 4',
            expSkyquake5: 'Пункт исследования <br> Skyquake Fields 5',
            emPiglet: 'Элитный Монстр<br>Розовая Свинка',
            
            
            andraName: "Andra Basin",
            // 9 things
            andraTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Темно-Зеленый Клык<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Железный Клык<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Грохочущий Вепрь<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Тиранский Вепрь<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Гоблин<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Гоблин-Старейшина<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Andra Cedar Twig<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Длинная Трава<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Джира Кристалл<br>',
            expAndra1: 'Пункт исследования<br>Andra Basin 1',
            expAndra2: 'Пункт исследования<br>Andra Basin 2',
            expAndra3: 'Пункт исследования<br>Andra Basin 3',
            expAndra4: 'Пункт исследования<br>Andra Basin 4',
            emIronFang: 'Элитный Монстр<br>Железный Клык',
            emDeepGreen: 'Элитный Монстр<br>Темно-Зеленый Клык',
            
            calmName: 'Calm Eve Terraces',
            // 14 things
            calmTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Свирепое Золото<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Пламенный Тюремщик<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин-Старейшина<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Тиранский Вепрь<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Светящийся Тиранский Вепрь<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Ogre<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Sunset Cedar Twig<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Трава Звездной Пыли<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Буль Фрукт<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Фрагмент метеорита<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Ископаемое Магнамосса<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Римериловая Руда<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Камень Полной Луны<br>',
            expCalm1: 'Пункт исследования<br>Calm Eve Terraces 1',
            expCalm2: 'Пункт исследования<br>Calm Eve Terraces 2',
            expCalm3: 'Пункт исследования<br>Calm Eve Terraces 3',
            emFlamePrison: 'Элитный Монстр<br>Пылающяя Тюрма',
            emFerociousGold: 'Элитный Монстр<br>Свирепое Золото',
            
            minsterName: 'Minster Hills',
            // 12 things
            minsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">Dragonclaw Valley<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Врата Перехода - Minsterhorn<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Свирепый Зверь<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Красный Всплеск<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Свинка<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Ровнинная Лиса<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Ранняя трава<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Андра Кедровая веточка<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Железная Руда<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Астериевая Руда<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Астербасс<br>',
            minsterhornName: 'Minsterhorn',
            minsterhornTool: 'npc Milrain<br>npc Stadst<br>npc Feste<br>',
            warpminsterhorn: 'Врата Перехода<br>Minsterhorn',
            expMinster1: "Пункт исследования<br>Minster Hills 1",
            expMinster2: "Пункт исследованияt<br>Minster Hills 2",
            expMinster3: "Пункт исследования<br>Minster Hills 3",
            expMinster4: "Пункт исследования<br>Minster Hills 4",
            expMinster5: "Пункт исследования<br>Minster Hills 5",
            expMinster6: "Пункт исследования<br>Minster Hills 6",
            expMinster7: "Пункт исследования<br>Minster Hills 7",
            expMinster8: "Пункт исследования<br>Minster Hills 8",
            emFerociousBeast: 'Элитный Монстр<br>Свирепый Зверь',
            emRedSplash: 'Элитный Монстр<br>Красный Всплеск',
            
            // 18 things
            dragonclawTool: 'Dragonclaw Valley<br>[Свобоное Исследование]<br><br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Долинный Рейдер<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Высокомерный Фокусник<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Клич<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Бешеный Королевский Клык<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Ровнинный Лис<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Тиранский Вепрь<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Светящийся Тиранский Вепрь<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Elder Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Longan Flower<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Dragon Venom<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Frozen Star Grass<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Пилюд Руда<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Руда плачущего дракона<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Ископаемое птерозавра<br>',
            purple2: 'Purple Liquid Memory 2<br><br>Осмотрите скалы возле открытого <br> утеса в самой глубокой области.<br>(где появляется Бешеный Королевский Клык)',
            msq8: 'Main Story Quest 8<br>"В поисках воспоминаний"<br><br>Идите к руинам на скале',
            msq9: 'Main Story Quest 9<br>"В поисках воспоминаний"<br><br>Иди туда, где ты проснулся',
            msq13: 'Main Story Quest 13<br>"Регистрация искателя приключений"<br><br>Соберите 3 неопознанных <br> растения в Skyquake Fields',
            msq19: 'Main Story Quest 19<br>"Поднимите свой  ранг  приключений!"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Получить кристалл Рейкрида',
            msq24: 'Main Story Quest 24<br>"Dragonclaw Valley"<br><br>Встретьтесь с Джейком в<br>Dragonclaw Valley',
            msq25: 'Main Story Quest 25<br>"Dragonclaw Valley"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Победите монстров в<br>Dragonclaw Valley',
            msq29: 'Main Story Quest 29<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Перейти к Minsterhorn <br> в Minster Hills',
            msq30: 'Main Story Quest 30<br>"What&#39;s a &#39;visitor&#39;..?"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Найдите Священника <br> У Руин Гигантской Башни.<br>В Бассейне Андра',
            msq31: 'Main Story Quest 31<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Сообщите Милрейну',
            msq32: 'Main Story Quest 32<br>"Столп Божественности"<br><br>Поговорите с Фесте после достижения <br> ранга приключения 3.',
            
            
            // Bahamar highlands
            divineToMinster: "К Minster Hills",
            divineToMinsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">Dragonclaw Valley<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Врата Перехода - Minsterhorn<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Свирепый Зверь<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Красный Всплеск<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Свинка<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Равнинная Лиса<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Ранняя Трава<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Андра Кедровая Веточка<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Астериевая Руда<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Asterbass<br>',
            divineName: "Divine Haven Hill",
            divineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Врата Перехода - Larpal<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Sapphire Trot<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Flaming Horns<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Высокогорная Руда<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Рогатый Баран<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Кайзер Лось<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Дымчатый Мох<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Фрукт Блессио<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Листик Медвежего Дерева<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Ископаемое Из Большого Клыка<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Баха Руда<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Серебристый Песок<br>',
            larpalName: 'Ларпал',
            expDivine1: "Пункт исследования<br>Divine Haven Hill 1",
            expDivine2: "Пункт исследования<br>Divine Haven Hill 2",
            expDivine3: "Пункт исследования<br>Divine Haven Hill 3",
            warpLarpal: "Врата Перехода<br>Larpal",
            emFlamingHorns: "Элитный Монстр<br>Пламенные Клыки",
            emSapphireTrot: "Элитный Монстр<br>Сапфировая Рысь",
            
            soundlessName: "Беззвучные Предгорья",
            soundlessTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Жуткий Баран<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Зло Лекарь<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Рогатый Баран<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Высокогорный Лис<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин-Старейшина<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин-мудрец<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Круглая Водросль<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Плато Лилия<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Камень Джаспера<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Камень Ночного Спокойствия<br>',
            bergmahlName: "Бергмал",
            emSpookyGoat: "Элитный Монстр<br>Жуткий Баран",
            emEvilHealer: "Элитный Монстр<br>Зло Целитель",
            expSoundless1: "Пункт исследования<br>Soundless Foothills 1",
            expSoundless2: "Пункт исследования<br>Soundless Foothills 2",
            expSoundless3: "Пункт исследования<br>Soundless Foothills 3",
            
            fielName: "Фил Пруд",
            fielTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Старейшина-Фокусник<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Рогатый-Баран<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Высокогорная Лиса<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Кайзер Лось<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин-Мудрец<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Гоблин-Старейшина<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Речная Ветка<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Аква Цветок<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Семя Нектара<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Водяной Камень Велинг<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Дрожащая медь<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Окаменелая Ракушка<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Рыба-Шип<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Саншайн Ракушка<br>',
            expFiel1: "Пункт исследования<br>Fiel Pond 1",
            expFiel2: "Пункт исследования<br>Fiel Pond 2",
            emTrickElder: "Элитный Монстр<br>Trick Elder",
            yellow2: 'Желтые Текучие Воспоминания 2<br><br>Осмотрите землю между<br>палатками в поселении гоблинов',
            msq33: 'Main Story Quest 33<br>"Pillar of Divinity"<br><br>Перейти к Столпу Божественности<br>на холме Божественной гавани',
            msq34: 'Main Story Quest 34<br>"Pillar of Divinity"<br><br>Провести стратегию<br>встречи в Ларпале',
            msq35: 'Main Story Quest 35<br>"Pillar of Divinity"<br><br>Поговорите с<br>паломники в Бергмале в <br> Безмолвных Предгорьях',
            msq36: 'Main Story Quest 36<br>"Pillar of Divinity"<br><br>Представьте свой значок разрешения<br>стражнику у Столпа',
            msq37: 'Main Story Quest 37<br>"Pillar of Divinity"<br><br>Доберитесь до вершины столба',
            msq38: 'Main Story Quest 38<br>"Pillar of Divinity"<br><br>Сопровождение Аэринс и<br>остальные в Ларпал',
            
            // Toggle titles
            togtextWarp: 'Врата Перехода',
            togtextMSQ: 'Основной Сюжетный Квест',
            togtextImaj: 'Образ Исследовательского Института',
            togtextCraft: 'Машина Для Крафта',
            togtextReconstructor: 'Реконструктор Оружия',
            togtextClass: 'Управление Классами',
            togtextMemory: 'Стенд Памяти',
            togtextExchange: 'Обменник',
            togtextPotshop: 'Магазин Зелий',
            togtextWepshop: 'Оружейный Магазин',
            togtextStorage: 'Склад',
            togtextElite: 'Элитный Монстр',
            togtextDung: 'Вход В Подземелье',
            togtextRaid: 'Вход В Рейд',
            togtextRock: 'Каменный Ресурс',
            togtextPlant: 'Растительный Ресурс',
            togtextOcean: 'Ресурс океана',
            togtextPoint: 'Пункт Исследования',
            togtextLiquid: 'Текучая Память',
            togglesHeader: 'Показать/спрятать',
            
            
            // Search list
            listAndra: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Andra Basin',
            listCalm: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Calm Eve Terraces',
            listMinster: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Minster Hills',
            listMinsterhorn: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Minsterhorn',
            listSkyquake: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Skyquake Fields',
            listAsteria: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 0; width: 1.823vw;">Asteria Plain',
            listBahamar: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 0; width: 1.823vw;">Bahamar Highland',
            listDivine: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Divine Haven Hill',
            listLarpal: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Larpal',
            listFiel: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Fiel Pond',
            listSoundless: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Soundless Foothills',
            listBergmahl: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Bergmahl',
            listAsterleeds: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.7em 0; width: 1.823vw;">Asterleeds<br>',
            searchTitle: 'Поиск на карте или названии местности'
            
            
            
        } 


// Battle Imagine
var biHolderRU = [
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
        },
    ]


// Inner Imagine
var iiHolderRU = [
        
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


