const DESCRIPTION_SPELL_CASTER = {}

const WEAPONS_SPELL_CASTER = [
    // 1 Training Rod
    { 
        name: "Cajado de Treinamento", //トレーニングロッド
        type: "Cajado", //杖（武器）
        icon: "images/crafting/staff1.png",
        image: "",
        level: "Nv Inicial 1~1 (Nv Max: 7)", //初期
        element: "",
        slotCount: ["Slots", "?"], //スロット数
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
    // 2 Ancient Staff
    { 
        name: "Cajado Ancião", //往古の杖
        type: "Cajado", //杖（武器）
        icon: "images/crafting/staff2.png",
        image: "",
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
                /*ATK*/"+48",
                /*STR*/"+0",
                /*VIT*/"+0",
                /*DEX*/"+2",
                /*INT*/"+3",
                /*MND*/"+1",
                /*HP*/"+5",
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
    // 3 Missionary
    { 
        name: "Missionário", //ミショナリー
        type: "Cajado", //杖（武器）
        icon: "images/crafting/staff3.png",
        image: "images/crafting/staff3L.png",
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
                /*ATK*/"+46",
                /*STR*/"+0",
                /*VIT*/"+2",
                /*DEX*/"+0",
                /*INT*/"+1",
                /*MND*/"+3",
                /*HP*/"+7",
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
    // 4 Blazing Staff
    { 
        name: "Cajado Ardente", //焼尽の杖
        type: "Cajado", //杖（武器）
        icon: "images/crafting/staff4.png",
        image: "",
        level: "Nv Inicial 1~4 (Nv Max: 20)", //初期
        element: "images/crafting/fire.png",
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
                /*ATK*/"+47",
                /*STR*/"+0",
                /*VIT*/"+3",
                /*DEX*/"+1",
                /*INT*/"+2",
                /*MND*/"+0",
                /*HP*/"+6",
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
    // 5 Old Dragon's Staff
    { 
        name: "Cajado Antigo do Dragão", //古竜の杖
        type: "Cajado", //杖（武器）
        icon: "images/crafting/staff5.png",
        image: "",
        level: "Nv Inicial 1~5 (Nv Max: 25)", //初期
        element: "images/crafting/lightning.png",
        slotCount: ["Slots", "?"], //スロット数
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
    // 6 Retribution
    { 
        name: "Retribuição", //リトリビューション
        type: "Cajado", //杖（武器）
        icon: "images/crafting/staff6.png",
        image: "",
        level: "Nv Inicial 1~6 (Nv Max: 30)", //初期
        element: "images/crafting/ice.png",
        slotCount: ["Slots", "?"], //スロット数
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
    // 7 Valeed Rod
    { 
        name: "Cajado Valeed", //バリードロッド
        type: "Cajado", //杖（武器）
        icon: "images/crafting/staff7.png",
        image: "",
        level: "Nv Inicial 1~7 (Nv Max: 35)", //初期
        element: "images/crafting/earth.png",
        slotCount: ["Slots", "?"], //スロット数
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

const SKILLS_SPELL_CASTER = []