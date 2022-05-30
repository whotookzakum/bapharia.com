const BATTLE_IMAGINE = [
    // Pink Piglet ピンクウリボ
    { 
        name: "Leitão Rosa",
        type: "Curandeiro",
        image: "images/map/pinkpiglet.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 15)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
        // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Tranquilidade do Leitão (cura)","eficácia", "175","67","Invoca o Imajinn do Leitão Rosa<br>que cria um campo de cura ao redor de si"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Leitão Rosa","Pedra Ondulada","Pele de Leitão","2,000"],
        iconSrc: [iElite,iRock,iCombat],
        amt: ["1","3","1"],
        abilList: ["Aumento de Cura (imajinn de batalha)","Aumento de Cura", "<br>"],
        tooltipText: ["Leitão Rosa<br>Campos Tremecéus","Coleta<br>Campos Tremecéus","Leitão<br>Campos Tremecéus"],
        tooltipBg: [
            tooltipSkyquake,
            tooltipSkyquake,
            tooltipSkyquake],
        tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
    },
    // Ferocious Beast 猛る獣
    { 
        name: "Besta Feroz",
        type: "Suporte",
        image: "images/map/ferociousbeast.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 15)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
        // アクトクライ・猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Grito de Luta (suporte)","eficácia", "150","150","Invoca o Imajinn da Besta Feroz<br>que concede ao invocador um aumento temporário de ATK"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia da Besta Feroz","Grama da Alvorada","Pele de Javali Barulhento","7,000"],
        iconSrc: [iElite,iFlower,iCombat],
        amt: ["2","3","1"],
        abilList: ["Aumento de Fôlego Max","Aumento de DEX", "<br>"],
        tooltipText: ["Besta Feroz<br>Colinas Minster","Coleta<br>Colinas Minster","Javali Barulhento<br>Bacia Andra"],
        tooltipBg: [
            tooltipMinster,
            tooltipMinster,
            tooltipAndra],
        tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
    },
    // Red Splash 赤い飛沫
    { 
        name: "Respingo Vermelho",
        type: "Dano",
        image: "images/map/redsplash.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 15)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // 兜割り・赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける。
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Divisor de Elmo (atk)","eficácia", "422","166","Invoca o Imajinn do Respingo Vermelho<br>que mira e ataca a cabeça do alvo com o seu porrete"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Respingo Vermelho","Lírio do Planalto","Unha da Raposa da Terra Alta","15,000"],
        iconSrc: [iElite,iFlower,iCombat],
        amt: ["2","3","1"],
        abilList: ["Aumento de dano (atk padrão)","Aumento de STR", "<br>"],
        tooltipText: ["Respingo Vermelho<br>Colinas Minster","Coleta<br>Sopé Silencioso","Raposa da Terra Alta<br>Colina do Santuário"],
        tooltipBg: [
            tooltipMinster,
            tooltipSoundless,
            tooltipDivine],
        tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
    },
    // Deep Green Fang 深緑の牙
    { 
        name: "Presa Verde Profundo",
        type: "Dano",
        image: "images/map/deepgreenfang.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 20)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // 猪突猛進・深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Investida Javali (atk)","eficácia", "514","166","Invoca o Imajinn do Presa Verde Profundo<br>que executa um atk de investida direcionado ao centro do alvo"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Presa Verde Profundo","Achigã","Pele de Javali Tirano","17,000"],
        iconSrc: [iElite,iShell,iCombat],
        amt: ["3","3","3"],
        abilList: ["Aumento de dano (suprema)","Aumento de ATK", "<br>"],
        tooltipText: ["Presa Verde Profundo<br>Bacia Andra","Coleta<br>Colinas Minster","Javali Tirano<br>Vale Garra do Dragão [Exploração Livre]"],
        tooltipBg: [
            tooltipAndra,
            tooltipMinster,
            tooltipDragonclaw],
        tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
    },
    // Iron Fang 鉄牙
    { 
        name: "Presa de Ferro",
        type: "Dano",
        image: "images/map/ironfang.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 20)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // マウンテンスロー・鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Arremesso Montanhês (atk)","eficácia", "524","169","Invoca o Imajinn do Presa de Ferro<br>que arremessa seus inimigos ao ar com suas presas gigantes"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Presa de Ferro","Folha de Árvorurso","Juba de Goblin","20,000"],
        iconSrc: [iElite,iFlower,iCombat],
        amt: ["3","3","3"],
        abilList: ["Aumento de dano (curto-alcance)","Aumento de ATK", "<br>"],
        tooltipText: ["Presa de Ferro<br>Bacia Andra","Coleta<br>Colina do Santuário","Goblin<br>Colinas Minster"],
        tooltipBg: [
            tooltipAndra,
            tooltipDivine,
            tooltipMinster],
        tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
    },
    // Flame Prison 炎獄
    { 
        name: "Prisão Fulgor",
        type: "Dano",
        image: "images/map/flamingprison.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 30)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // パワースイング・炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Golpe Poderoso (atk)","eficácia", "710","169","Invoca o Imajinn do Prisão Fulgor<br>que golpeia com seu porrete os inimigos à sua frente"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Prisão Fulgor","Pedra Jaspe","Juba de Goblin Incandescente","86,000"],
        iconSrc: [iElite,iRock,iCombat],
        amt: ["5","3","3"],
        abilList: ["Redução de intervalo (imajinn de batalha)","Aumento de HP Max", "<br>"],
        tooltipText: ["Prisão Fulgor<br>Terraço Vespertino","Coleta<br>Sopé Silencioso","Goblin Incandescente<br>Vale Garra do Dragão [Exploração Livre]"],
        tooltipBg: [
            tooltipCalmEve,
            tooltipSoundless,
            tooltipDragonclaw],
        tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
    },
    // Ferocious Gold 猛る金色
    { 
        name: "Ouro Feroz",
        type: "Dano",
        image: "images/map/ferociousgold.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 30)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // デスタックル・猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Avanço Mortal (atk)","eficácia", "696","166","Invoca o Imajinn do Ouro Feroz<br>que executa um atk de investida em direção ao alvo"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Ouro Feroz","Semente de Nectar","Cauda da Besta Feroz","85,000"],
        iconSrc: [iElite,iFlower,iElite],
        amt: ["5","3","1"],
        abilList: ["Aumento de dano (curto-alcance)","Aumento de ATK", "<br>"],
        tooltipText: ["Ouro Feroz<br>Terraço Vespertino","Coleta<br>Lago Fiel","Besta Feroz<br>Colinas Minster"],
        tooltipBg: [tooltipCalmEve,
                    tooltipFiel,
                    tooltipMinster],
        tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
    },
    // Sapphire Trot サファイアトロット
    { 
        name: "Presa Safira",
        type: "Dano",
        image: "images/map/sapphiretrot.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 20)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // 落石牙・サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Investida de Pedra (atk)","eficácia", "483","156","Invoca o Imajinn do Presa Safira<br>que executa uma investida e morde o alvo"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Trote Safira","Galho de Cedro Andra","Juba de Goblin Ancião","25,000"],
        iconSrc: [iElite,iFlower,iCombat],
        amt: ["3","3","3"],
        abilList: ["Aumento da taxa de Crit","Aumento de DEX", "<br>"],
        tooltipText: ["Presa Safira<br>Colina do Santuário","Coleta<br>Colinas Minster","Goblin Ancião<br>Bacia Andra"],
        tooltipBg: [tooltipDivine,
                    tooltipMinster,
                    tooltipAndra],
        tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
    },
    // Flaming Horns 炎角
    { 
        name: "Chifre Flamejante",
        type: "Dano",
        image: "images/map/flaminghorns.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 20)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // カイザーブラスト・炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Explosão do Imperador (atk)","eficácia", "493","159","Invoca o Imajin do Chifre Flamejante<br>que executa um atk elemental de investida elétrico em direção ao alvo"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Chifre Flamejante","Semente de Blésio","Juba de Goblin Sábio","26,000"],
        iconSrc: [iElite,iFlower,iCombat],
        amt: ["3","3","3"],
        abilList: ["Redução de dano recebido (curto-alcance)","Aumento de DEF", "<br>"],
        tooltipText: ["Chifre Flamejante<br>Colina do Santuário","Coleta<br>Colina do Santuário","Goblin Sábio<br>Sopé Silencioso"],
        tooltipBg: [tooltipDivineLeft,
                   tooltipDivine,
                   tooltipSoundless],
        tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
    },
    // Spooky Goat スプーキーゴート
    { 
        name: "Cabra Sinistra",
        type: "Suporte",
        image: "images/map/spookygoat.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 25)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
        // ゴートヘイスト・スプーキーゴートのイマジンを召喚し召喚者の移動速度を一定時間上昇させる
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Pressa da Cabra (suporte)","eficácia", "130","130","Invoca o Imajinn da Cabra Sinistra<br>que concede ao invocador um aumento temporário de velocidade de movimento"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia da Cabra Sinistra","Galho de Cedro do Crepúsculo","Pele de Javali Tirano Incandescente","45,000"],
        iconSrc: [iElite,iFlower,iCombat],
        amt: ["4","3","3"],
        abilList: ["Aumento de Fôlego Max","Aumento de DEX", "<br>"],
        tooltipText: ["Cabra Sinistra<br>Sopé Silencioso","Coleta<br>Terraço Vespertino","Javali Tirano Incandescente<br>Vale Garra do Dragão [Exploração Livre]"],
        tooltipBg: [tooltipSoundless,
                   tooltipCalmEve,
                   tooltipDragonclaw],
        tooltipIcn: ["transform: translate(2.5vw, 4.9vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
    },
    // Evil Healer 悪しき癒し手
    { 
        name: "Curandeiro Maligno",
        type: "Curandeiro",
        image: "images/map/evilhealer.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 25)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
        // エリアヒール・悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Cura em Área (cura)","eficácia", "267","71","Invoca o Imajinn do Curandeiro Maligno<br>que cura os aliados ao seu redor"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Curandeiro Maligno","Minério de Rimeril","Osso de Ogro","56,000"],
        iconSrc: [iElite,iRock,iCombat],
        amt: ["4","3","3"],
        abilList: ["Aumento de Cura (imajinn de batalha)","Aumento de Cura", "<br>"],
        tooltipText: ["Curandeiro Maligno<br>Sopé Silencioso","Coleta<br>Terraço Vespertino","Ogro<br>Terraço Vespertino"],
        tooltipBg: [tooltipSoundless,
                   tooltipCalmEve,
                   tooltipCalmEve],
        tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
    },
    // Trick Elder トリックエルダー
    { 
        name: "Ancião Trapaceiro",
        type: "Dano",
        image: "images/map/trickelder.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 35)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // エルダークリスタル・トリックエルダーのイマジンを召喚しターゲットに対して氷柱を3発飛ばす
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Cristal Ancião (atk)","eficácia", "741","156","Invoca o Imajinn do Ancião Trapaceiro<br>que lança 3 setas de gelo ao alvo"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Ancião Trapaceiro","Veneno de Dragão","Pele de Presa Verde Profundo","130,000"],
        iconSrc: [iElite,iFlower,iElite],
        amt: ["3","3","1"],
        abilList: ["Aumento de dano (longo-alcance)","Aumento de INT", "<br>"],
        tooltipText: ["Ancião Trapaceiro<br>Lago Fiel","Coleta<br>Vale Garra do Dragão [Exploração Livre]","Presa Verde Profundo<br>Bacia Andra"],
        tooltipBg: [tooltipFiel,
                   tooltipDragonclaw,
                   tooltipAndra],
        tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(5.8vw, 11vw)"]
    },
    // Elder Goblin エルダーゴブリン
    { 
        name: "Goblin Ancião",
        type: "Dano",
        image: "images/map/eldergoblin.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 25)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // ファイアボール・エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Bola de Fogo (atk)","eficácia", "604","166","Invoca o Imajinn do Goblin Ancião<br>que atira uma bola de fogo ao alvo"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Goblin Ancião","Fóssil de Musgo Magna","Pele de Alce Ancião","43,000"],
        iconSrc: [iElite,iRock,iCombat],
        amt: ["4","3","3"],
        abilList: ["Aumento de dano (longo-alcance)","Aumento de INT", "<br>"],
        tooltipText: ["Conjurador Arrogante<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Terraço Vespertino","Alce Ancião<br>Colina do Santuário"],
        tooltipBg: [tooltipDragonclaw,
                   tooltipCalmEve,
                   tooltipDivine],
        tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
    },
    // Goblin ゴブリン
    { 
        name: "Goblin",
        type: "Dano",
        image: "images/map/goblin.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 15)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // ゴブリンスタブ・ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Punhalada do Goblin (atk)","eficácia", "414","163","Invoca o Imajinn do Goblin<br>que perfura o alvo com seu porrete"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Goblin","Minério de Ferro","Cauda da Raposa Terrestre","9,000"],
        iconSrc: [iElite,iRock,iCombat],
        amt: ["2","3","1"],
        abilList: ["Aumento de dano (skill tática 1)","Aumento de STR", "<br>"],
        tooltipText: ["Saqueador do Vale<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Campos Tremecéus","Raposa Terrestre<br>Campos Tremecéus"],
        tooltipBg: [tooltipDragonclaw,
                   tooltipSkyquake,
                   tooltipSkyquake],
        tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
    },
    // Land Fox ランドフォックス
    { 
        name: "Raposa Terrestre",
        type: "Dano",
        image: "images/map/landfox.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 30)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // クラウンストライク・ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Ataque da Coroa(atk)","eficácia", "669","159","Invoca o Imajinn da Raposa Terrestre<br>que executa um salto de atk ao alvo"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia da Raposa Terrestre","Flor Lamusa","Pele de Leitão Rosa","1,500"],
        iconSrc: [iElite,iFlower,iElite],
        amt: ["1","3","1"],
        abilList: ["Aumento de dano Crit","Aumento de DEX", "<br>"],
        tooltipText: ["Tiro-alto<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Campos Tremecéus","Leitão Rosa<br>Campos Tremecéus"],
        tooltipBg: [
            tooltipDragonclaw,
            tooltipSkyquake,
            tooltipSkyquake],
        tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
    },
    // Tyrant Boar タイラントボア
    { 
        name: "Javali Tirano",
        type: "Dano",
        image: "images/map/tyrantboar.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 20)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // 猟犬殺し・タイラントボアのイマジンを召喚しターゲットを頭突きで攻撃する
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Caça Mortal (atk)","eficácia", "504","163","Invoca o Imajinn do Javali Tirano<br>que ataca o alvo com uma cabeçada"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Javali Tirano","Áreia de Prata","Pele de Cabra Chifruda","45,000"],
        iconSrc: [iDung,iRock,iCombat],
        amt: ["2","3","3"],
        abilList: ["Aumento de dano (imajinn de batalha)","Aumento de ATK", "<br>"],
        tooltipText: ["Completar Arena [Rank C]","Coleta<br>Colina do Santuário","Cabra Chifruda<br>Lago Fiel"],
        tooltipBg: [
            tooltipArena,
            tooltipDivine,
            tooltipFiel],
        tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","visibility: hidden"]
    },
    // Horned Goat ホーンゴート
    { 
        name: "Cabra Chifruda",
        type: "Dano",
        image: "images/map/horngoat.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 25)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // ビハインドキック・ホーンゴートのイマジンを召喚しターゲットを後ろ足で蹴り飛ばす
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Coice (atk)","eficácia", "593","163","Invoca o Imajinn da Cabra Chifruda<br>que dá um coice em seus inimigos"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia da Cabra Chifruda","Minério de Prata","<a style='font-size: 1.146vw'>Juba de Goblin Ancião Incandescente</a>","83,000"],
        iconSrc: [iDung,iRock,iCombat],
        amt: ["3","3","3"],
        abilList: ["Redução de dano recebido (longo-alcance)","Aumento de DEF", "<br>"],
        tooltipText: ["Completar Arena [Rank B]","Coleta<br>Lago Fiel","Goblin Ancião Incandescente<br>Vale Garra do Dragão [Exploração Livre]"],
        tooltipBg: [
            tooltipArena,
            tooltipFiel,
            tooltipDragonclaw],
        tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
    },
    // Goblin Sage ゴブリンセージ
    { 
        name: "Goblin Sábio",
        type: "Curandeiro",
        image: "images/map/goblinsage.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 30)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
        // ゴブリンセージの調律・ゴブリンセージのイマジンを召喚し召喚者のHPを回復させる
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Cura do Goblin Ancião (cura)","eficácia", "323","74","Invoca o Imajinn do Goblin Sábio<br>que cura o invocador"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Goblin Sábio","Peixe-espinho","Presa do Trote Safira","120,000"],
        iconSrc: [iDung,iShell,iElite],
        amt: ["5","3","1"],
        abilList: ["Aumento de Cura (imajinn de batalha)","Aumento de Cura", "<br>"],
        tooltipText: ["Completar Arena [Rank A]","Coleta<br>Lago Fiel","Presa Safira<br>Colina do Santuário"],
        tooltipBg: [
            tooltipArena,
            tooltipFiel,
            tooltipDivine],
        tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
    },
    // Kaiser Elk カイザーエルク
    { 
        name: "Alce Imperador",
        type: "Dano",
        image: "images/map/kaiserelk.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 35)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // クラッパーホーン・カイザーエルクのイマジンを召喚しターゲットを角で振り払う
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Chifrada (atk)","eficácia", "756","159","Invoca o Imajinn do Alce Imperador<br>que ataca o alvo com seus chifres"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Alce Imperador","Flor Longan","Juba de Curandeiro Maligno","140,000"],
        iconSrc: [iDung,iFlower,iElite],
        amt: ["7","3","1"],
        abilList: ["Redução de dano recebido (curto-alcance)","Aumento de DEF", "<br>"],
        tooltipText: ["Completar Arena [Rank S]","Coleta<br>Vale Garra do Dragão [Exploração Livre]","Curandeiro Maligno<br>Sopé Silencioso"],
        tooltipBg: [
            tooltipArena,
            tooltipDragonclaw,
            tooltipSoundless],
        tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
    },
    // Raging Kingfang 荒ぶる牙王
    { 
        name: "Presa-rei Furioso",
        type: "Dano",
        image: "images/map/ragingkingfang.mp4",
        level: "Nv Inicial 1~1 (Nv Max: 35)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // タイラントアサルト・荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Investida Tirana (atk)","eficácia", "787","166","Invoca o Imajinn do Presa-rei Furioso<br>que executa uma investida de amplo alcance em direção ao alvo"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Ideia do Presa-rei Furioso","Fóssil de Concha","Osso de Prisão Fulgor","190,000"],
        iconSrc: [iElite,iRock,iElite],
        amt: ["7","3","1"],
        abilList: ["Redução de intervalo (suprema)","Aumento de ATK", "<br>"],
        tooltipText: ["Presa-rei Furioso<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Lago Fiel","Prisão Fulgor<br>Terraço Vespertino"],
        tooltipBg: [
            tooltipDragonclaw,
            tooltipFiel,
            tooltipCalmEve],
        tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
    },
    // Sealed Atrocity 封印されし暴虐
    { 
        name: "Atrocidade Selada",
        type: "Dano",
        image: "",
        level: "Nv Inicial 1~1 (Nv Max: 35)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // アースクエイク
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Terremoto (atk)","eficácia", "802","?","Invoca o Imajinn do Atrocidade Selada<br>que executa um grande atk elemental de Terra centrado ao redor de si"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Obtido como recompensa de Quest", "<br>", "<br>", "0"],
        iconSrc: [iQuest,"",""],
        amt: ["<br>","<br>","<br>"],
        abilList: ["-","<br>", "<br>"],
        tooltipText: ['Completar a Quest "Colete Imajinn de Batalha! #2"<br><br>Após Completar "Colete Imajinn de Batalha! #1", construa Presa Verde Profundo, Presa de Ferro, Trote Safira e Cabra Sinistra',"<br>","<br>"],
        tooltipBg: [
            tooltipFrontier,"",""],
        tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
    },
    // Plidoke プリドーク
    { 
        name: "Plidoke",
        type: "Dano",
        image: "",
        level: "Nv Inicial 1~1 (Nv Max: 35)",
        element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
        cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
        // スライサーアーム・プリドークのイマジンを召喚し前方のターゲットに両手の剣を突き刺す
        skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Braço Cortante (atk)","eficácia", "772","?","Invoca o Imajinn do Plidoke<br>que perfura os inimigos à sua frente com seus braços-espada"],
        ability: ["talento", "????","eficácia", "????"],
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
        recipe: ["Obtido como recompensa de Quest", "<br>", "<br>", "0"],
        iconSrc: [iQuest,"",""],
        amt: ["<br>","<br>","<br>"],
        abilList: ["-","<br>", "<br>"],
        tooltipText: ['Complete a Quest "Colete Imajinn de Batalha! #3"<br><br>Após completar "Colete Imajinn de Batalha! #2", construa ???',"<br>","<br>"],
        tooltipBg: [
            tooltipFrontier,"",""],
        tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
    }
]

export default BATTLE_IMAGINE;