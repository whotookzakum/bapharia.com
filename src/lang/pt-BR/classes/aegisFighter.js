const DESCRIPTION_AEGIS_FIGHTER = {}

const WEAPONS_AEGIS_FIGHTER = [
    // 1 Novice Sword
    { 
        name: "Espada de Novato", //ノービスソード
        type: "Espada", //剣（武器）
        icon: "images/crafting/sword1.png",
        image: "images/crafting/sword1L.png",
        level: "Nv Inicial 1~1 (Nv Max: 7)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
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
    // 2 Fanged Sword
    { 
        name: "Espada com Presas", //爪牙剣
        type: "Espada", //剣（武器）
        icon: "images/crafting/sword2.png",
        image: "images/crafting/sword2L.png",
        level: "Nv Inicial 1~2 (Nv Max: 12)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
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
    // 3 Tower's Blade
    { 
        name: "Lâmina da Torre", //タワーズブレイド
        type: "Espada", //剣（武器）
        icon: "images/crafting/sword3.png",
        image: "images/crafting/sword3L.png",
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
                /*ATK*/"?",
                /*STR*/"+?",
                /*VIT*/"+?",
                /*DEX*/"+?",
                /*INT*/"+?",
                /*MND*/"+?",
                /*HP*/"+?",
               ],
        recipe: ["Núcelo IC","Garra de Raposa da Terra Alta","Minério Baha","150,000"],
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
    // 4 Red Steel Blade
    { 
        name: "Lâmina de Aço Rubro", //鋼の赤刃
        type: "Espada", //剣（武器）
        icon: "images/crafting/sword4.png",
        image: "images/crafting/sword4L.png",
        level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
        element: "images/crafting/fire.png",
        slotCount: ["Slots", "?"], //スロット数
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
    // 5 Scaleclaw Sword
    { 
        name: "Machado da Garra Escamosa", //鋼の赤刃
        type: "Espada", //剣（武器）
        icon: "images/crafting/sword5.png",
        image: "",
        level: "Nv Inicial 1~5 (Nv Max: 25)", //初期
        element: "images/crafting/lightning.png",
        slotCount: ["Slots", "?"], //スロット数
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
    // 6 Bapharia's Guidance
    { 
        name: "Guia de Bapharia", //バファリアの標
        type: "Espada", //剣（武器）
        icon: "images/crafting/sword6.png",
        image: "images/crafting/sword6L.png",
        level: "Nv Inicial 1~6 (Nv Max: 30)", //初期
        element: "images/crafting/ice.png",
        slotCount: ["Slots", "?"], //スロット数
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
    // 7 Sharp Edged Sword
    { 
        name: "Espada da Lâmina Afiada", //鋭刃剣
        type: "Espada", //剣（武器）
        icon: "images/crafting/sword7.png",
        image: "",
        level: "Nv Inicial 1~7 (Nv Max: 35)", //初期
        element: "images/crafting/earth.png",
        slotCount: ["Slots", "?"], //スロット数
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

const SKILLS_AEGIS_FIGHTER = []

