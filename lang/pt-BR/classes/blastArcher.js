const DESCRIPTION_BLAST_ARCHER = {}

const WEAPONS_BLAST_ARCHER = [
    // 1 Hunter Bow
    { 
        name: "Arco de Caça", //ハンターボウ
        type: "Arco", //弓（武器）
        icon: "images/crafting/bow1.png",
        image: "images/crafting/bow1L.png",
        level: "Nv Inicial 1~1 (Nv Max: 7)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
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
    // 2 Flashwing Bow
    { 
        name: "Arco da Asa Brilhante", //閃翼の弓｀
        type: "Arco", //弓（武器）
        icon: "images/crafting/bow2.png",
        image: "images/crafting/bow2L.png",
        level: "Nv Inicial 1~2 (Nv Max: 12)", //初期
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
    // 3 Alpha Genesis
    { 
        name: "Gênesis Alfa", //アルファジェネシス｀
        type: "Arco", //弓（武器）
        icon: "images/crafting/bow3.png",
        image: "images/crafting/bow3L.png",
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
                /*ATK*/"+41",
                /*STR*/"+1",
                /*VIT*/"+2",
                /*DEX*/"+0",
                /*INT*/"+0",
                /*MND*/"+3",
                /*HP*/"+8",
               ],
        recipe: ["Núcelo IC","Chifre de Cabra Chifruda","Musgo Defumado","150,000"],
        iconSrc: [iDung,iCombat,iFlower],
        amt: ["5","20","7"],
        tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Cabra Chifruda<br>Colina do Santuário","Coleta<br>Colina do Santuário"],
        tooltipBg: [
            "",
            tooltipDivine,
            tooltipDivine],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: ""
    },
    // 4 Mechanical Firecarved Bow
    { 
        name: "Arco Mecânico Talhado em Fogo", //機跡の炎刻弓｀
        type: "Arco", //弓（武器）
        icon: "images/crafting/bow4.png",
        image: "",
        level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
        element: "images/crafting/fire.png",
        slotCount: ["Slots", "?"], //スロット数
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
        recipe: ["Amarelo Bahamar","Cajado gasto de Goblin","Planta Circular Aquática","250,000"],
        iconSrc: [iDung,iCombat,iFlower],
        amt: ["5","20","7"],
        tooltipText: ["Complete a Masmorra<br>Vale da Ruína Mecânica [Pesquisa]","Goblin Ancião<br>Sopé Silencioso","Coleta<br>Sopé Silencioso"],
        tooltipBg: [
            "",
            tooltipSoundless,
            tooltipSoundless],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: "images/crafting/firetooltip.png"
    },
    // 5 Brilliant Thunderwing Bow
    { 
        name: "Arco Brilhante da Asa do Trovão", //雷翼の豪弓
        type: "Arco", //弓（武器）
        icon: "images/crafting/bow5.png",
        image: "",
        level: "Nv Inicial 1~5 (Nv Max: 25)", //初期
        element: "images/crafting/lightning.png",
        slotCount: ["Slots", "?"], //スロット数
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
        recipe: ["Fragmento Firme de Osso de Dragão","<a style='font-size: 1.146vw'>Presa de Javali Tirano Incandescente</a>","Fruta Baule","500,000"],
        iconSrc: [iDung,iCombat,iFlower],
        amt: ["6","10","10"],
        tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Javali Tirano Ancião<br>Terraço Vespertino","Coleta<br>Terraço Vespertino"],
        tooltipBg: [
            "",
            tooltipCalmEve,
            tooltipCalmEve],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: "images/crafting/lightningtooltip.png"
    },
    // 6 Glacial Arch
    { 
        name: "Arco Glacial", //グレイシャルアーチ
        type: "Arco", //弓（武器）
        icon: "images/crafting/bow6.png",
        image: "",
        level: "Nv Inicial 1~6 (Nv Max: 30)", //初期
        element: "images/crafting/ice.png",
        slotCount: ["Slots", "?"], //スロット数
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
        recipe: ["Núcleo IC de Alta Performance","Cajado decorado de Goblin","Galho de Madeira Flutuante","1,200,000"],
        iconSrc: [iDung,iCombat,iFlower],
        amt: ["7","10","15"],
        tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Avançada]","Goblin Sábio<br>Lago Fiel","Coleta<br>Lago Fiel"],
        tooltipBg: [
            "",
            tooltipFiel,
            tooltipFiel],
        tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
        eleTooltip: "images/crafting/icetooltip.png"
    },
    // 7 Groundrunner's Bow
    { 
        name: "Arco do Correventos", //地走りの弓
        type: "Arco", //弓（武器）
        icon: "images/crafting/bow7.png",
        image: "",
        level: "Nv Inicial 1~7 (Nv Max: 35)", //初期
        element: "images/crafting/earth.png",
        slotCount: ["Slots", "?"], //スロット数
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
    },
]

const SKILLS_BLAST_ARCHER = []