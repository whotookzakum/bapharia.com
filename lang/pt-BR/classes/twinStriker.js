const DESCRIPTION_TWIN_STRIKER = {}

const WEAPONS_TWIN_STRIKER = [
    // 1 Battle Axe
    { 
        name: "Machado de Batalha", //バトルアックス
        type: "Machado", //斧（武器）
        icon: "images/crafting/axe1.png",
        image: "",
        level: "Nv Inicial 1~1 (Nv Max: 7)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
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
        recipe: ["Compre na loja de armas","<br>","<br>","0"],
        // Icon to show on tooltip
        iconSrc: ["images/map/weapon.png","",""],
        amt: ["","",""],
        tooltipText: ["Loja de Armas<br>Asterleeds","",""],
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
        name: "Corta-névoa", //霧払い
        type: "Machado", //斧（武器）
        icon: "images/crafting/axe2.png",
        image: "images/crafting/axe2L.png",
        level: "Nv Inicial 1~2 (Nv Max: 12)", //初期
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
                /*ATK*/"+52",
                /*STR*/"+3",
                /*VIT*/"+0",
                /*DEX*/"+2",
                /*INT*/"+0",
                /*MND*/"+1",
                /*HP*/"+7",
               ],
        recipe: ["Fragmento de Osso de Dragão","Presa do Javali Barulhento","Grama Alta","25,000"],
        iconSrc: [iDung,iCombat,iFlower],
        amt: ["3","10","5"],
        tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Adicional]","Javali Barulhento<br>Bacia Andra","Coleta<br>Bacia Andra"],
        tooltipBg: [
            "",
            tooltipAndra,
            tooltipAndra],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: ""
    },
    // 3 Dual Raster
    { 
        name: "Lâminas Duplas", //デュアルラスター
        type: "Machado", //斧（武器）
        icon: "images/crafting/axe3.png",
        image: "images/crafting/axe3L.png",
        level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
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
        recipe: ["Núcelo IC","Garra de Raposa da Terra Alta","Minério de Baha","150,000"],
        iconSrc: [iDung,iCombat,iRock],
        amt: ["5","20","7"],
        tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Raposa da Terra Alta<br>Colina do Santuário","Coleta<br>Colina do Santuário"],
        tooltipBg: [
            "",
            tooltipDivine,
            tooltipDivine],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: ""
    },
    // 4 Ancient Flame-hardened Axe
    { 
        name: "Machado Endurecido pela Chama Anciã", //古代の火打ち斧
        type: "Machado", //斧（武器）
        icon: "images/crafting/axe4.png",
        image: "images/crafting/axe4L.png",
        level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
        element: "images/crafting/fire.png",
        slotCount: ["Slots", "?"], //スロット数
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
        recipe: ["Amarelo Bahamar","Porrete gasto de Goblin","Pedra da Noite Tranquila","250,000"],
        iconSrc: [iDung,iCombat,iRock],
        amt: ["5","20","7"],
        tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa]","Goblin<br>Sopé Silencioso","Coleta<br>Sopé Silencioso"],
        tooltipBg: [
            "",
            tooltipSoundless,
            tooltipSoundless],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: "images/crafting/firetooltip.png"
    },
    // 5 Cliff Breaker
    { 
        name: "Quebra-rochas", //懸崖崩し
        type: "Machado", //斧（武器）
        icon: "images/crafting/axe5.png",
        image: "images/crafting/axe5L.png",
        level: "Nv Inicial 1~5 (Nv Max: 25)", //初期
        element: "images/crafting/lightning.png",
        slotCount: ["Slots", "?"], //スロット数
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
        recipe: ["Fragmento Firme de Osso de Dragão","Chifre de Ogro","Fragmento de Meteorito","500,000"],
        iconSrc: [iDung,iCombat,iRock],
        amt: ["6","5","10"],
        tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Ogro<br>Terraço Vespertino","Coleta<br>Terraço Vespertino"],
        tooltipBg: [
            "",
            tooltipCalmEve,
            tooltipCalmEve],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: "images/crafting/lightningtooltip.png"
    },
    // 6 Wild Ice Edge
    { 
        name: "Lâmina do Gelo Selvagem", //アイスエッジワイルド
        type: "Machado", //斧（武器）
        icon: "images/crafting/axe6.png",
        image: "images/crafting/axe6L.png",
        level: "Nv Inicial 1~6 (Nv Max: 30)", //初期
        element: "images/crafting/ice.png",
        slotCount: ["Slots", "?"], //スロット数
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
        recipe: ["Núcleo IC de Alta Performance","Chifre de Alce Ancião","Cobre Oscilante","1,200,000"],
        iconSrc: [iDung,iCombat,iRock],
        amt: ["7","15","15"],
        tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Avançada]","Alce Ancião<br>Lago Fiel","Coleta<br>Lago Fiel"],
        tooltipBg: [
            "",
            tooltipFiel,
            tooltipFiel],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: "images/crafting/icetooltip.png"
    },
    // 7 Ground Edge
    { 
        name: "Lâmina da Terra", //グラウンドエッジ
        type: "Machado", //斧（武器）
        icon: "images/crafting/axe7.png",
        image: "images/crafting/axe7L.png",
        level: "Nv Inicial 1~7 (Nv Max: 35)", //初期
        element: "images/crafting/earth.png",
        slotCount: ["Slots", "?"], //スロット数
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
        recipe: ["Amarelo Bahamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
        iconSrc: [iDung,iCombat,iRock],
        amt: ["8","5","20"],
        tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa Avançada]","Goblin Ancião Incandescente<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Vale Garra do Dragão [Exploração Livre]"],
        tooltipBg: [
            "",
            tooltipDragonclaw,
            tooltipDragonclaw],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: "images/crafting/earthtooltip.png"
    }
]

const SKILLS_TWIN_STRIKER = []