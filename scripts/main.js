jQuery(document).ready(function ($) {
    
    $(document).keydown(function (event) {
        if (event.keyCode == 123) { // Prevent F12
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I     
            return false;
        }
    });
    
    
    var currentLang = 0;
    
    // Check for language switch
    $(document).keydown(function (event) {
        
        // keydown J
        if (event.keyCode == 74) {
            currentLang = 1;
        }
        // keydown E
        if (event.keyCode == 69) {
            currentLang = 0;
        }
        // keydown P 
        if (event.keyCode == 80) {
            currentLang = 2;
        }
        switchLang(currentLang);

    });
    
    function switchLang(lang) {
        
        // JAPANESE
        if (lang == 1) {
           
            // Footer hint JP
            $(".langHint").html("J を押すと日本語、E を押すと英語、P を押すとポルトガル語に設定");
            $(".langHint").css("font-size","0.729vw");
            
            // Change crafting and imajinn text regardless of current page
            wepHolder = wepHolderJP;
            biHolder = biHolderJP;
            iiHolder = iiHolderJP;
            if (listHolder == biHolderJP || listHolder == biHolderEN || listHolder == biHolderBR) {
                biHolder = biHolderJP;
                iiHolder = iiHolderJP;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderJP || listHolder == iiHolderEN || listHolder == iiHolderBR) {
                biHolder = biHolderJP;
                iiHolder = iiHolderJP;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("攻撃力 &nbsp;");
            $(".w-infoEle").html("<br>属性");
            $(".w-slotCount").html("スロット数 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("バトル<br>イマジン");
            $(".iiSelector>p").html("インナー<br>イマジン");
            $(".biSelector").css("font-size","0.599vw");
            $(".iiSelector").css("font-size","0.599vw");
            // Crafting and Imajinn 
            $(".reqItemHeader").html("必要アイテム &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;必要数");
            $(".reqLunoHeader").html("必要ルーノ");
            $(".abilityHeader").html("付与アビリティ候補");
            $(".statStr").html("筋力");
            $(".statInt").html("知力");
            $(".statHp").html("最大HP");
            $(".statVit").html("耐久力");
            $(".statMnd").html("精神力");
            $(".statAtk").html("攻撃力");
            $(".statDex").html("器用さ");
            $(".statStr").css("font-size","0.677vw");
            $(".statInt").css("font-size","0.729vw");
            $(".statHp").css("font-size","0.729vw");
            $(".statVit").css("font-size","0.729vw");
            $(".statMnd").css("font-size","0.729vw");
            $(".statAtk").css("font-size","0.729vw");
            $(".statDex").css("font-size","0.729vw");
            $(".matItem").css("font-size","1.146vw");
            $(".levelToggle>p").html("レベル");
            $(".levelToggle>p").css("font-size","0.599vw");
            $(".listItem-reqAR").html("冒険ﾗﾝｸ");

            // Map JP
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn JP
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder); 
            }
        
            // Crafting JP
            if (currentPage == "#craftingContainer") {
                
                listWeapons(wepHolder);
                dispWeapon(wepHolder);
            }

            
        }
        
        // ENGLISH
        else if (lang == 0) {

            // Footer hint EN
            $(".langHint").html("press e for english&nbsp;&nbsp;&nbsp;&nbsp;j for japanese&nbsp;&nbsp;&nbsp;&nbsp;p for portuguese");
            $(".langHint").css("font-size","0.833vw");
            
            // Change crafting and imajinn text regardless of current page
            wepHolder = wepHolderEN;
            biHolder = biHolderEN;
            iiHolder = iiHolderEN;
            if (listHolder == biHolderEN || listHolder == biHolderJP || listHolder == biHolderBR) {
                biHolder = biHolderEN;
                iiHolder = iiHolderEN;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolder || listHolder == iiHolderJP || listHolder == iiHolderBR) {
                biHolder = biHolderEN;
                iiHolder = iiHolderEN;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("attack &nbsp;");
            $(".w-infoEle").html("<br>element");
            $(".w-slotCount").html("slots &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("Battle<br>Imagine");
            $(".iiSelector>p").html("Inner<br>Imagine");
            $(".biSelector").css("font-size","0.6775vw");
            $(".iiSelector").css("font-size","0.6775vw");
            // Crafting and Imajinn
            $(".reqItemHeader").html("Required items &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount");
            $(".reqLunoHeader").html("Req. luno");
            $(".abilityHeader").html("Possible abilities");
            $(".statStr").html("str");
            $(".statInt").html("int");
            $(".statHp").html("max hp");
            $(".statVit").html("vit");
            $(".statMnd").html("mnd");
            $(".statAtk").html("atk");
            $(".statDex").html("dex");
            $(".statStr").css("font-size","1.05vw");
            $(".statInt").css("font-size","1.05vw");
            $(".statHp").css("font-size","1.05vw");
            $(".statVit").css("font-size","1.05vw");
            $(".statMnd").css("font-size","1.05vw");
            $(".statAtk").css("font-size","1.05vw");
            $(".statDex").css("font-size","1.05vw");
            $(".levelToggle>p").html("Level");
            $(".listItem-reqAR").html("Req. AR");
            $(".matItem").css("font-size","1.25vw");
            
            
            // Map EN
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn EN
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder);
            }

            // Crafting EN
            if (currentPage == "#craftingContainer") {
                listWeapons(wepHolder);
                dispWeapon(wepHolder);
            }
            
   
        }
        
        // BRAZILIAN PORTUGUESE
        else if (lang == 2) { 
            // Footer hint EN
            $(".langHint").html("pressione e para inglês&nbsp;&nbsp;&nbsp;&nbsp;j para japonesas&nbsp;&nbsp;&nbsp;&nbsp;p para português");
            $(".langHint").css("font-size","0.833vw");
            
            // Change crafting and imajinn text regardless of current page
            wepHolder = wepHolderBR;
            biHolder = biHolderBR;
            iiHolder = iiHolderBR;
            if (listHolder == biHolderEN || listHolder == biHolderJP || listHolder == biHolderBR) {
                biHolder = biHolderBR;
                iiHolder = iiHolderBR;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderEN || listHolder == iiHolderJP || listHolder == iiHolderBR) {
                biHolder = biHolderBR;
                iiHolder = iiHolderBR;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("ataque &nbsp;");
            $(".w-infoEle").html("<br>elemento");
            $(".w-slotCount").html("slots &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("Imajinn<br>de Batalha");
            $(".iiSelector>p").html("Imajinn<br>Interno");
            $(".biSelector").css("font-size","0.6775vw");
            $(".iiSelector").css("font-size","0.6775vw");
            // Crafting and Imajinn
            $(".reqItemHeader").html("Itens Necessários &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qnt.");
            $(".reqLunoHeader").html("Luno Nec.");
            $(".abilityHeader").html("Possíveis talentos");
            $(".statStr").html("str");
            $(".statInt").html("int");
            $(".statHp").html("max hp");
            $(".statVit").html("vit");
            $(".statMnd").html("mnd");
            $(".statAtk").html("atk");
            $(".statDex").html("dex");
            $(".statStr").css("font-size","1.05vw");
            $(".statInt").css("font-size","1.05vw");
            $(".statHp").css("font-size","1.05vw");
            $(".statVit").css("font-size","1.05vw");
            $(".statMnd").css("font-size","1.05vw");
            $(".statAtk").css("font-size","1.05vw");
            $(".statDex").css("font-size","1.05vw");
            $(".levelToggle>p").html("Nivel");
            $(".listItem-reqAR").html("Nec. AR");
            $(".matItem").css("font-size","1.25vw");
            
            
            // Map EN
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn EN
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder);
            }

            // Crafting EN
            if (currentPage == "#craftingContainer") {
                listWeapons(wepHolder);
                dispWeapon(wepHolder);
            }
        
        }
        
        
        
    }
    
    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    // NAVIGATION
    
    // Save current page and close pages
    var firstPage = true;
    var currentPage;
    function closePages() {
        
        $("#contentViewer").css({"display": "none"});
        
        if (currentPage == "#mapContainer") {
            closeWorldMap();
        }
        else if (currentPage == "#ImajinnContainer") {
            closeImajinn();
        }
        else if (currentPage == "#craftingContainer") {
            closeCrafting();
        }
        else if (currentPage == "#guideContainer") {
            closeGuide();
        }
        
    }
    
    var imajInitial = true;
    var mapInitial = true;
    
    // Menu buttons open page when clicked
    $("img.navicon").click(function() {
        // There's probably a cleaner way to do this like:
        // 1.   if (this != .classButton) { bg-default opacity 1 }
        //      if (this = .classButton) { bg-default opacity 0 }
        // 2.   if (buttonClicked = currentBg) { don't fade } else { fade }
        //      (way too many conditionals to find buttonClicked and currentBg)
        // But this works for now
        var bg = $("#bg-default");
        var bgaf = $("#bg-af");
        var bgts = $("#bg-ts");
        var bgba = $("#bg-ba");
        var bgsc = $("#bg-sc");
        var bghs = $("#bg-hs");    
        
        // Remove the initial fade in effect for bg-default
        bg.removeClass("bg-default-animation");
        
        // Fade out current bg
        bgaf.stop().animate({opacity: '0'});
        bgts.stop().animate({opacity: '0'});
        bgba.stop().animate({opacity: '0'});
        bgsc.stop().animate({opacity: '0'});
        bghs.stop().animate({opacity: '0'});
        bg.stop().animate({opacity: '0'});
        
        switchLang(currentLang);
        
        // Fade in selected page bg
        if ($(this).is("#buttonTwin")){
            bgts.stop().animate({opacity: '1'});
        } 
        else if ($(this).is("#buttonAegis")) {
            bgaf.stop().animate({opacity: '1'});
            
        }
        else if ($(this).is("#buttonBlast")) {
            bgba.stop().animate({opacity: '1'}); 
            
        }
        else if ($(this).is("#buttonSpell")) {
            bgsc.stop().animate({opacity: '1'});
            
        }
        else if ($(this).is("#buttonHeavy")) {
            bghs.stop().animate({opacity: '1'});
            
        }
        else {
            // Change BG to default one
            if (bg.css("background-image") != "url(images/0.png)") {
                bg.stop().animate({opacity: '1'});
            }
            // WORLD MAP
            if ($(this).is("#buttonWorldMap") && currentPage !== "#mapContainer") {
                // Close open page
                closePages();
                currentPage = "#mapContainer";
                openWorldMap();
            }
            // IMAJINN
            if ($(this).is("#buttonImajinn") && currentPage !== "#ImajinnContainer") {
                // Close open page
                closePages();
                currentPage = "#ImajinnContainer";
                if (imajInitial == true) {
                    listHolder = biHolder;
                }
                openImajinn();
            }
            // GUIDE
            if ($(this).is("#buttonGuide") && currentPage != "#guideContainer") {
                closePages();
                currentPage = "#guideContainer";
                openGuide();
            }
            // CRAFTING
            if ($(this).is("#buttonCrafting") && currentPage != "#craftingContainer") {
                // Close open page
                closePages();
                currentPage = "#craftingContainer";
                openCrafting();
            }

        }
    });
    
    
    
    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    // GAME GUIDE
    
    var currentGuide = ".liqMemPage";
    // Initial button is automatically highlighted
    $(".guideLiqMem").addClass("guideSelected");
    
    
    $(".guideMenuButton").click(function(){
        
        // Reset button highlights when click
        $(".guideMenuButton").removeClass("guideSelected");
        // Add button highlight to clicked button
        $(this).addClass("guideSelected");
        // Hide the current page
        $(currentGuide).css("display","none");
        
        if ($(this).is(".guideLiqMem")) {
            currentGuide = ".liqMemPage";
        }
        if ($(this).is(".guideCombat")) {
            currentGuide = ".combatPage";
        }
        if ($(this).is(".guideElements")) {
            currentGuide = ".elementsPage";
        }
        if ($(this).is(".guideDungeons")) {
            currentGuide = ".dungeonsPage";
        }
        if ($(this).is(".guideRaids")) {
            currentGuide = ".raidsPage";
        }
        if ($(this).is(".guideBuffs")) {
            currentGuide = ".buffsPage";
        }
        if ($(this).is(".guideProgression")) {
            currentGuide = ".progressionPage";
        }
        if ($(this).is(".guideStory")) {
            currentGuide = ".storyPage";
        }
        if ($(this).is(".guideOptions")) {
            currentGuide = ".optionsPage";
        }
        
        openGuide();
        
    });
    
    
    function openGuide() {
        $("#guideContainer").css("display","block");
        
        $(currentGuide).css("display","block");
        
    }
    
    function closeGuide() {
        $("#guideContainer").css("display","none");
    }
    
    
    // Bubbles
    // Change to click if too much visual noise. Requires removing .bubble:active 
    $(".bubble").mouseenter(function(){
        var color;
        if ($(this).is(".x7")) {
            color = "#2e0021";
        }
        if ($(this).is(".x6")) {
            color = "#262626";
        }
        if ($(this).is(".x5")) {
            color = "#170021";
        }
        if ($(this).is(".x4")) {
            color = "#002026";
        }
        if ($(this).is(".x3")) {
            color = "#262600";
        }
        if ($(this).is(".x2")) {
            color = "#2b0000";
        }
        if ($(this).is(".x1")) {
            color = "#031400";
        }
        
        $(".liqMemPage").animate({
            backgroundColor: color
        },300);
        
    });
    
    
    
    
    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    // CRAFTING 
    
    // Material Icons
    var iLuno = "images/map/luno.svg";
    var iFlower = "images/map/flower2.svg";
    var iRock = "images/map/rock2.svg";
    var iCombat = "images/map/combat2.svg";
    var iShell = "images/map/shell2.svg";
    var iElite = "images/map/elitemonster.png";
    var iQuest = "images/map/quest2.png";
    var iDung = "images/map/dungeon2.png";
    
    // Tooltip Backgrounds
    var tooltipSkyquake = "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw";
    var tooltipMinster = "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw";
    var tooltipAndra = "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw";
    var tooltipDragonclaw = "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw";
    var tooltipDivine = "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw";
    var tooltipArena = "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw";
    var tooltipFiel = "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw";
    var tooltipFrontier = "url(images/map/moveAsterleeds.jpg) no-repeat -22.917vw -7.292vw/55.25vw";
    var tooltipCalmEve = "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw";
    var tooltipSoundless = "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw";
    var tooltipDivineLeft = "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -80px/39.25vw";
    var tooltipWepShop = "url(images/map/moveAsterleeds.jpg) no-repeat -42.4vw -17.2vw/80.25vw";
    
    // Crafting selector variables
    var wIndex = 0;
    var wepLvSelector = 0;
    var wListName = $(".wlistItem-name");//name
    var wType = $(".wlistItem-type");//type
    var wIcon = $(".wlistItem-icon");//icon
    var wName = $(".w-infoName");
    var wImg = $(".w-infoImg");//image, change the src
    var wLevel = $(".w-infoLv");//level
    var wEleImg = $(".w-infoEleImg");//element
    // Slots currently all "?" var wSlots = $(".w-slotCount");
    var wStats = $(".w-infoStatVal");//stats
    var wmat = $(".wmatItem");
    var wmatIcon = $(".wmatIcon");
    var wmatCount = $(".wmatCount");
    var wluno = $(".wreqLuno");
    var eleDesc = $(".eleTooltip");
    
    //recipe
    //amt
    //tooltipText
    //tooltipBG
    //tooltipIcn
    
    // Weapon list
    var wepHolderEN = [
        // 1 Novice Sword
        { 
            name: "Novice Sword", //ノービスソード
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword1.png",
            image: "images/crafting/sword1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
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
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
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
            name: "Battle Axe", //バトルアックス
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe1.png",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
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
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
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
            name: "Hunter Bow", //ハンターボウ
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow1.png",
            image: "images/crafting/bow1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
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
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
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
            name: "Training Rod", //トレーニングロッド
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff1.png",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
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
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
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
            name: "Fanged Sword", //爪牙剣
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword2.png",
            image: "images/crafting/sword2L.png",
            level: "Starting Lv 1~2 (Max Lv: 12)", //初期
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
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragonclaw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Mist Cutter
        { 
            name: "Mist Cutter", //霧払い
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe2.png",
            image: "images/crafting/axe2L.png",
            level: "Starting Lv 1~2 (Max Lv: 12)", //初期
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
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragonclaw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Flashwing Bow
        { 
            name: "Flashwing Bow", //閃翼の弓｀
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow2.png",
            image: "images/crafting/bow2L.png",
            level: "Starting Lv 1~2 (Max Lv: 12)", //初期
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
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragonclaw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Ancient Staff
        { 
            name: "Ancient Staff", //往古の杖
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff2.png",
            image: "",
            level: "Starting Lv 1~2 (Max Lv: 12)", //初期
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
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragonclaw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 3 Tower's Blade
        { 
            name: "Tower's Blade", //タワーズブレイド
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword3.png",
            image: "images/crafting/sword3L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
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
            recipe: ["IC Core","Highland Fox Claw","Baja Ore","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Highland Fox<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Dual Raster
        { 
            name: "Dual Raster", //デュアルラスター
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe3.png",
            image: "images/crafting/axe3L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
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
            recipe: ["IC Core","Highland Fox Claw","Baja Ore","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Highland Fox<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Alpha Genesis
        { 
            name: "Alpha Genesis", //アルファジェネシス｀
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow3.png",
            image: "images/crafting/bow3L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
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
            recipe: ["IC Core","Horned Goat's Horn","Smoky Moss","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Horned Goat<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
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
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
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
            recipe: ["IC Core","Horned Goat's Horn","Smoky Moss","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Horned Goat<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 4 Red Steel Blade
        { 
            name: "Red Steel Blade", //鋼の赤刃
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword4.png",
            image: "images/crafting/sword4L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
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
            recipe: ["Bajamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Mechanical Ruin Valley [Survey]","Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Ancient Flame-hardened Axe
        { 
            name: "Ancient Flame-hardened Axe", //古代の火打ち斧
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe4.png",
            image: "images/crafting/axe4L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
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
            recipe: ["Bajamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Mechanical Ruin Valley [Survey]","Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Mechanical Firecarved Bow
        { 
            name: "Mechanical Firecarved Bow", //機跡の炎刻弓｀
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow4.png",
            image: "",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
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
            recipe: ["Bajamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Mechanical Ruin Valley [Survey]","Elder Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Blazing Staff
        { 
            name: "Blazing Staff", //焼尽の杖
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff4.png",
            image: "",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
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
            recipe: ["Bajamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Mechanical Ruin Valley [Survey]","Elder Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        
        // 5 Scaleclaw Sword
        { 
            name: "Scaleclaw Sword", //鋼の赤刃
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword5.png",
            image: "",
            level: "Starting Lv 1~5 (Max Lv: 25)", //初期
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
            recipe: ["Firm Dragon Bone Fragment","Ogre Horn","Meteorite Fragment","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Clear Dungeon<br>Dragonclaw Valley [Advanced Survey]","Ogre<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Cliff Breaker
        { 
            name: "Cliff Breaker", //懸崖崩し
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe5.png",
            image: "images/crafting/axe5L.png",
            level: "Starting Lv 1~5 (Max Lv: 25)", //初期
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
            recipe: ["Firm Dragon Bone Fragment","Ogre Horn","Meteorite Fragment","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Clear Dungeon<br>Dragonclaw Valley [Advanced Survey]","Ogre<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Brilliant Thunderwing Bow
        { 
            name: "Brilliant Thunderwing Bow", //雷翼の豪弓
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow5.png",
            image: "",
            level: "Starting Lv 1~5 (Max Lv: 25)", //初期
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
            recipe: ["Firm Dragon Bone Fragment","Glowing Tyrant Boar Fang","Boule Fruit","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Clear Dungeon<br>Dragonclaw Valley [Advanced Survey]","Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Old Dragon's Staff
        { 
            name: "Old Dragon's Staff", //古竜の杖
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff5.png",
            image: "",
            level: "Starting Lv 1~5 (Max Lv: 25)", //初期
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
            recipe: ["Firm Dragon Bone Fragment","Glowing Tyrant Boar Fang","Boule Fruit","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Clear Dungeon<br>Dragonclaw Valley [Advanced Survey]","Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        
        // 6 Bapharia's Guidance
        { 
            name: "Bapharia's Guidance", //バファリアの標
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword6.png",
            image: "images/crafting/sword6L.png",
            level: "Starting Lv 1~6 (Max Lv: 30)", //初期
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
            recipe: ["High Performance IC Core","Kaiser Elk Horn","Shivering Copper","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Kaiser Elk<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Wild Ice Edge
        { 
            name: "Wild Ice Edge", //アイスエッジワイルド
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe6.png",
            image: "images/crafting/axe6L.png",
            level: "Starting Lv 1~6 (Max Lv: 30)", //初期
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
            recipe: ["High Performance IC Core","Kaiser Elk Horn","Shivering Copper","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Kaiser Elk<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Glacial Arch
        { 
            name: "Glacial Arch", //グレイシャルアーチ
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow6.png",
            image: "",
            level: "Starting Lv 1~6 (Max Lv: 30)", //初期
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
            recipe: ["High Performance IC Core","Decorated Goblin's Staff","Driftwood Twig","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Goblin Sage<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Retribution
        { 
            name: "Retribution", //リトリビューション
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff6.png",
            image: "",
            level: "Starting Lv 1~6 (Max Lv: 30)", //初期
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
            recipe: ["High Performance IC Core","Decorated Goblin's Staff","Driftwood Twig","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Goblin Sage<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        
        
        // 7 Sharp Edged Sword
        { 
            name: "Sharp Edged Sword", //鋭刃剣
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword7.png",
            image: "",
            level: "Starting Lv 1~7 (Max Lv: 35)", //初期
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
            recipe: ["High Quality Bajamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Mechanical Ruin Valley [Advanced Survey]","Glowing Elder Goblin<br>Dragonclaw Valley [Free Exploration]","Gather<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Ground Edge
        { 
            name: "Ground Edge", //グラウンドエッジ
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe7.png",
            image: "images/crafting/axe7L.png",
            level: "Starting Lv 1~7 (Max Lv: 35)", //初期
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
            recipe: ["High Quality Bajamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Mechanical Ruin Valley [Advanced Survey]","Glowing Elder Goblin<br>Dragonclaw Valley [Free Exploration]","Gather<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Groundrunner's Bow
        { 
            name: "Groundrunner's Bow", //地走りの弓
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow7.png",
            image: "",
            level: "Starting Lv 1~7 (Max Lv: 35)", //初期
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
            recipe: ["High Quality Bajamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Mechanical Ruin Valley [Advanced Survey]","Glowing Elder Goblin<br>Dragonclaw Valley [Free Exploration]","Gather<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Valeed Rod
        { 
            name: "Valeed Rod", //バリードロッド
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff7.png",
            image: "",
            level: "Starting Lv 1~7 (Max Lv: 35)", //初期
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
            recipe: ["High Quality Bajamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Mechanical Ruin Valley [Advanced Survey]","Glowing Elder Goblin<br>Dragonclaw Valley [Free Exploration]","Gather<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        
        
        
    ]
    var wepHolderJP = [
        // 1 Novice Sword
        { 
            name: "ノービスソード", //
            type: "剣（武器）", //
            icon: "images/crafting/sword1.png",
            image: "images/crafting/sword1L.png",
            level: "初期 Lv 1~1 (Max Lv: 7)", //
            element: "",
            slotCount: ["スロット数", "?"], //
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
            recipe: ["武器屋で購入","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["武器屋<br>アステルリーズ","",""],
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
            name: "バトルアックス", //
            type: "斧（武器）", //
            icon: "images/crafting/axe1.png",
            image: "",
            level: "初期 Lv 1~1 (Max Lv: 7)", //
            element: "",
            slotCount: ["スロット数", "?"], //
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
            recipe: ["武器屋で購入","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["武器屋<br>アステルリーズ","",""],
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
            name: "ハンターボウ", //
            type: "弓（武器）", //
            icon: "images/crafting/bow1.png",
            image: "images/crafting/bow1L.png",
            level: "初期 Lv 1~1 (Max Lv: 7)", //
            element: "",
            slotCount: ["スロット数", "?"], //
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
            recipe: ["武器屋で購入","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["武器屋<br>アステルリーズ","",""],
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
            name: "トレーニングロッド", //
            type: "杖（武器）", //
            icon: "images/crafting/staff1.png",
            image: "",
            level: "初期 Lv 1~1 (Max Lv: 7)", //
            element: "",
            slotCount: ["スロット数", "?"], //
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
            recipe: ["武器屋で購入","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["武器屋<br>アステルリーズ","",""],
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
            name: "爪牙剣", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword2.png",
            image: "images/crafting/sword2L.png",
            level: "初期 Lv 1~2 (Max Lv: 12)", //
            element: "",
            slotCount: ["スロット数", "?"], //
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
            recipe: ["竜骨の欠片","ランブルボアの牙","長毛草","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・追加調査","ランブルボア<br>アンドラ盆地","採取<br>アンドラ盆地"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Mist Cutter
        { 
            name: "霧払い", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe2.png",
            image: "images/crafting/axe2L.png",
            level: "初期 Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["竜骨の欠片","ランブルボアの牙","長毛草","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・追加調査","ランブルボア<br>アンドラ盆地","採取<br>アンドラ盆地"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Flashwing Bow
        { 
            name: "閃翼の弓", //｀
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow2.png",
            image: "images/crafting/bow2L.png",
            level: "初期 Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["竜骨の欠片","ランブルボアの牙","長毛草","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・追加調査","ランブルボア<br>アンドラ盆地","採取<br>アンドラ盆地"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Ancient Staff
        { 
            name: "往古の杖", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff2.png",
            image: "",
            level: "初期 Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["竜骨の欠片","ランブルボアの牙","長毛草","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・追加調査","ランブルボア<br>アンドラ盆地","採取<br>アンドラ盆地"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 3 Tower's Blade
        { 
            name: "タワーズブレイド", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword3.png",
            image: "images/crafting/sword3L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["集積コア","ハイランドフォックスの爪","バハ鉱石","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・追加調査","ハイランドフォックス<br>神の見守る丘","採取<br>神の見守る丘"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Dual Raster
        { 
            name: "デュアルラスター", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe3.png",
            image: "images/crafting/axe3L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["集積コア","ハイランドフォックスの爪","バハ鉱石","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・追加調査","ハイランドフォックス<br>神の見守る丘","採取<br>神の見守る丘"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Alpha Genesis
        { 
            name: "アルファジェネシス", //
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow3.png",
            image: "images/crafting/bow3L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["集積コア","ホーンゴートの角","煙霧苔","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・追加調査","ホーンゴート<br>神の見守る丘","採取<br>神の見守る丘"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Missionary
        { 
            name: "ミショナリー", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff3.png",
            image: "images/crafting/staff3L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["集積コア","ホーンゴートの角","煙霧苔","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・追加調査","ホーンゴート<br>神の見守る丘","採取<br>神の見守る丘"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 4 Red Steel Blade
        { 
            name: "鋼の赤刃", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword4.png",
            image: "images/crafting/sword4L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["バハマールイエロー","粗末なゴブリンの棍棒","静夜鉱","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・調査","ゴブリン<br>鎮まりの山麓","採取<br>鎮まりの山麓"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Ancient Flame-hardened Axe
        { 
            name: "古代の火打ち斧", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe4.png",
            image: "images/crafting/axe4L.png",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["バハマールイエロー","粗末なゴブリンの棍棒","静夜鉱","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・調査","ゴブリン<br>鎮まりの山麓","採取<br>鎮まりの山麓"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Mechanical Firecarved Bow
        { 
            name: "機跡の炎刻弓", //｀
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow4.png",
            image: "",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["バハマールイエロー","粗末なゴブリンの杖","丸水草","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・調査","エルダーゴブリン<br>鎮まりの山麓","採取<br>鎮まりの山麓"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Blazing Staff
        { 
            name: "焼尽の杖", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff4.png",
            image: "",
            level: "初期 Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["バハマールイエロー","粗末なゴブリンの杖","丸水草","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・調査","エルダーゴブリン<br>鎮まりの山麓","採取<br>鎮まりの山麓"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        
        // 5 Scaleclaw Sword
        { 
            name: "鱗爪剣", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword5.png",
            image: "",
            level: "初期 Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["堅固な竜骨の欠片","オーガの角","隕鉄の欠片","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・上級調査","オーガ<br>夕凪の段丘","採取<br>夕凪の段丘"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Cliff Breaker
        { 
            name: "懸崖崩し", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe5.png",
            image: "images/crafting/axe5L.png",
            level: "初期 Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["堅固な竜骨の欠片","オーガの角","隕鉄の欠片","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・上級調査","オーガ<br>夕凪の段丘","採取<br>夕凪の段丘"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Brilliant Thunderwing Bow
        { 
            name: "雷翼の豪弓", //
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow5.png",
            image: "",
            level: "初期 Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["堅固な竜骨の欠片","タイラントボア・グロウの牙","ブールの実","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・上級調査","タイラントボア・グロウ<br>夕凪の段丘","採取<br>夕凪の段丘"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Old Dragon's Staff
        { 
            name: "古竜の杖", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff5.png",
            image: "",
            level: "初期 Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["堅固な竜骨の欠片","タイラントボア・グロウの牙","ブールの実","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["ダンジョン攻略<br>巨竜の爪痕・上級調査","タイラントボア・グロウ<br>夕凪の段丘","採取<br>夕凪の段丘"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        
        // 6 Bapharia's Guidance
        { 
            name: "バファリアの標", //
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword6.png",
            image: "images/crafting/sword6L.png",
            level: "初期 Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["高性能集積コア","カイザーエルクの角","冷震鋼","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・上級調査","カイザーエルク<br>フィエル嶺水池","採取<br>フィエル嶺水池"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Wild Ice Edge
        { 
            name: "アイスエッジワイルド", //
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe6.png",
            image: "images/crafting/axe6L.png",
            level: "初期 Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["高性能集積コア","カイザーエルクの角","冷震鋼","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・上級調査","カイザーエルク<br>フィエル嶺水池","採取<br>フィエル嶺水池"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Glacial Arch
        { 
            name: "グレイシャルアーチ", //
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow6.png",
            image: "",
            level: "初期 Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["高性能集積コア","装飾されたゴブリンの杖","流木の杖","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・上級調査","ゴブリンセージ<br>フィエル嶺水池","採取<br>フィエル嶺水池"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Retribution
        { 
            name: "リトリビューション", //
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff6.png",
            image: "",
            level: "初期 Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["高性能集積コア","装飾されたゴブリンの杖","流木の杖","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["ダンジョン攻略<br>神懸の御柱・上級調査","ゴブリンセージ<br>フィエル嶺水池","採取<br>フィエル嶺水池"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        
        
        // 7 Sharp Edged Sword
        { 
            name: "鋭刃剣", //鋭刃剣
            type: "剣（武器）", //剣（武器）
            icon: "images/crafting/sword7.png",
            image: "",
            level: "初期 Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["上質なバハマールイエロー","大きなゴブリンの杖","哭竜鉱","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・上級調査","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Ground Edge
        { 
            name: "グラウンドエッジ", //グラウンドエッジ
            type: "斧（武器）", //斧（武器）
            icon: "images/crafting/axe7.png",
            image: "images/crafting/axe7L.png",
            level: "初期 Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["上質なバハマールイエロー","大きなゴブリンの杖","哭竜鉱","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・上級調査","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Groundrunner's Bow
        { 
            name: "地走りの弓", //地走りの弓
            type: "弓（武器）", //弓（武器）
            icon: "images/crafting/bow7.png",
            image: "",
            level: "初期 Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["上質なバハマールイエロー","大きなゴブリンの杖","哭竜鉱","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・上級調査","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Valeed Rod
        { 
            name: "バリードロッド", //バリードロッド
            type: "杖（武器）", //杖（武器）
            icon: "images/crafting/staff7.png",
            image: "",
            level: "初期 Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["スロット数", "?"], //スロット数
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
            recipe: ["上質なバハマールイエロー","大きなゴブリンの杖","哭竜鉱","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["ダンジョン攻略<br>機跡の谷・上級調査","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        
        
        
    ]
    var wepHolderBR = [
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
            recipe: ["Núcelo IC","Garra de Raposa da Terra Alta","Minério de Baja","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Raposa da Terra Alta<br>Colina do Refúgio Divino","Coleta<br>Colina do Refúgio Divino"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
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
            recipe: ["Núcelo IC","Garra de Raposa da Terra Alta","Minério Baja","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Raposa da Terra Alta<br>Colina do Refúgio Divino","Coleta<br>Colina do Refúgio Divino"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
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
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Cabra Chifruda<br>Colina do Refúgio Divino","Coleta<br>Colina do Refúgio Divino"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
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
            tooltipText: ["Complete a Masmorra<br>Pilar da Divindade [Pesquisa Adicional]","Cabra Chifruda<br>Colina do Refúgio Divino","Coleta<br>Colina do Refúgio Divino"],
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
            recipe: ["Amarelo Bajamar","Porrete gasto de Goblin","Pedra da Noite Tranquila","250,000"],
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
            recipe: ["Amarelo Bajamar","Porrete gasto de Goblin","Pedra da Noite Tranquila","250,000"],
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
            recipe: ["Amarelo Bajamar","Cajado gasto de Goblin","Planta Circular Aquática","250,000"],
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
            recipe: ["Amarelo Bajamar","Cajado gasto de Goblin","Planta Circular Aquática","250,000"],
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
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Ogro<br>Terraços da Véspera Tranquila","Coleta<br>Terraços da Véspera Tranquila"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
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
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Ogro<br>Terraços da Véspera Tranquila","Coleta<br>Terraços da Véspera Tranquila"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
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
            recipe: ["Fragmento Firme de Osso de Dragão","Presa de Javali Tirano Incandescente","Fruta Baule","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Javali Tirano Ancião<br>Terraços da Véspera Tranquila","Coleta<br>Terraços da Véspera Tranquila"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
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
            recipe: ["Fragmento Firme de Osso de Dragão","Presa de Javali Tirano Incandescente","Fruta Baule","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Complete a Masmorra<br>Vale Garra do Dragão [Pesquisa Avançada]","Javali Tirano Ancião<br>Terraços da Véspera Tranquila","Coleta<br>Terraços da Véspera Tranquila"],
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
            recipe: ["Amarelo Bajamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
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
            recipe: ["Amarelo Bajamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
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
            recipe: ["Amarelo Bajamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
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
            recipe: ["Amarelo Bajamar de Alta Qualidade","Varinha Grande de Goblin","Minério de Dragão Uivante","2,450,000"],
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
    
    var wepHolder = wepHolderEN;
    
    // Open page
    function openCrafting() {
        
        $("#craftingContainer").css("display","block");
            
        listWeapons(wepHolder);
        dispWeapon(wepHolder);
    }
    
    
    function closeCrafting() {

        $("#craftingContainer").css("display","none");

    }
    
    // Toggle Weapon Level
    $(".wepSlider").click(function(){
        
        // Max lv stats
        if (!$(".wtoggleCheck").is(":checked")) {
            wepLvSelector = 1;
            
            wStats.each(function(index){
                $(this).html(wepHolder[wIndex].stats[(index)]);
                $(this).css("color","crimson");
            });
        }
        
        // Lv 1 stats
        else {
            wepLvSelector = 0;
            
            wStats.each(function(index){
                $(this).html(wepHolder[wIndex].minStats[(index)]);
                $(this).css("color","#343330");
            });
        }

    });
    
    // Display the clicked Weapon
    $(".wlistItem").click(function(){
        wIndex = $(".wlistItem").index(this);
        dispWeapon(wepHolder);
    });
    
    // Populate weapon list
    function listWeapons(holder) {
        
        $(".wlistItem").each(function(index) {
            $(this).find(wListName).html(holder[index].name);
            $(this).find(wType).html(holder[index].type);
            $(this).find(wIcon).attr("src", holder[index].icon);    
        });
        
    }
    
    // Display Weapons
    function dispWeapon(holder) {
        
        listWeapons(wepHolder);
        
        // Basic info
        wName.html(holder[wIndex].name);
        wLevel.html(holder[wIndex].level);
        wEleImg.attr("src",holder[wIndex].element);
        eleDesc.attr("src",holder[wIndex].eleTooltip);
        wImg.attr("src",holder[wIndex].image);
        
        // Stats
        // If lv 1
        if (wepLvSelector == 0) {
            wStats.each(function(index){
                $(this).html(wepHolder[wIndex].minStats[(index)]);
            });
        }
        // If max lv
        else if (wepLvSelector == 1) {
            wStats.each(function(index){
                $(this).html(wepHolder[wIndex].stats[(index)]);
            });
        }
        
        // Recipe
        $(".wrecipeHolder>div").each(function (index){
            $(this).find(wmat).html(holder[wIndex].recipe[(index)]);
            $(this).find(wmatIcon).attr("src", holder[wIndex].iconSrc[(index)]); 
            $(this).find(wmatCount).html(holder[wIndex].amt[(index)]); 
            
            // Tooltips
            $(this).find(".wrecipeToolText").html(holder[wIndex].tooltipText[(index)]); 
            $(this).find(".wrecipeTooltip").css("background",holder[wIndex].tooltipBg[(index)]);
            $(this).find(".wrecipeToolImg").attr("src", holder[wIndex].iconSrc[(index)]);
            $(this).find(".wrecipeToolImg").attr("style", holder[wIndex].tooltipIcn[(index)]);
        });
        wluno.html(holder[wIndex].recipe[(holder[wIndex].recipe.length - 1)]);
        
    }
    
    
    
    
    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    // MAP
    
    var currentMap = "#mapAsterleeds"; // Could set this to "" and then in dispMap remove the else statements
    var newMap = "#mapAsterleeds";
    var tooltip = document.querySelectorAll(".tooltip");
    document.addEventListener('mousemove', trackMouse, false);
    
    // Hover over mapName selectors, only if not the current zone
    $(".mapName").mouseenter(function() {
        if (!$(this).hasClass("currentZone")) {
            $(this).css("opacity","0.8"); 
        }
    });
    $(".mapName").mouseleave(function(){
        if (!$(this).hasClass("currentZone")) {
            $(this).css("opacity","0.6");
        }
    });
    
    // Open page
    function openWorldMap() {

        $("#mapContainer").css("display", "block");
        dispMap();
        
    }
    
    // Close page 
    function closeWorldMap() {
        
        $("#mapContainer").css("display","none");
        
    }
    
    // Write a script to change border color for mapIcons, i.e. if it contains("Exploration Point") it will turn white. Currently have it written inline as border-color for EACH element, an inefficient code that needs to be optimized.
    $(".msqNumber").click(function(){
        $(".msqNumber").each(function(index){
            var pos = $(this).position();
            console.log(index + " TOP " + pos.top + " LEFT " + pos.left); 
        });
    });
    
    
    // Search by typing
    $("#mapSearch").keyup(function(event){
        var input = event.key.toUpperCase();
        console.log("Key: " + input);
        var items = document.querySelectorAll("p.mapListItem");
        
        // Test for input matching
        for (var i = 0; i < items.length; i++){
            
            
            
            // Match found = keep displayed
            if (items[i].textContent.toUpperCase().indexOf(input) > -1) {
                console.log("found: " + items[i].textContent.toUpperCase());
            }
            // No match = hide
            if (items[i].textContent.toUpperCase().indexOf(input) == -1) {
                $(this).toggleClass("display-off");
                console.log("no match: " + items[i].textContent.toUpperCase());
            }
            
            
                
        }
        
        
    });
    
    // Map Tooltip - Mouse Tracker
    function trackMouse(e) {
        for (var i=tooltip.length; i--;) {
            tooltip[i].style.left = e.pageX + 20 + 'px';
            tooltip[i].style.top = e.pageY + 20 + 'px';
        }
    }  
    
    var mapText = [
        
        // ENGLISH
        {
            storage: "Storage",
            memorystand: 
                'Liquid Memory Stand<br><img src="images/liquidmemory%20yellow%20fad459.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Increased chance of higher weapon level when crafting<br><img src="images/liquidmemory%20blue%206ac7cd.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Increased exp when leveling weapon<br><img src="images/liquidmemory%20red%20db516a.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Reduced gathering time<br><img src="images/liquidmemory%20purple%2079389e.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Increased enemy drop rate<br><img src="images/liquidmemory%20green%2045b343.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Reduced prices in npc shops',
            imajhouse: "Imajinn Research Institute",
            classmaster: "Class Master",
            wepshop: "Weapon Shop",
            potshop: "Potion Shop",
            craftmachine: "Crafting Machine",
            reconstructor: "Weapon Reconstructor",
            gcshop: "GC Shop",
            timedquest: "Timed Quest",
            yellow1:
                'Yellow Liquid Memory 1<br><br>Clear Orvis&#39; quest<br>"Haste Makes Waste" (Lv. 24+)<br><br>Retrieve 3 Orvis&#39; Luggage from<br>Glowing Elder Goblins at<br>Dragonclaw Valley [Free Exploration]',
            green1: 
                'Green Liquid Memory 1<br><br>Clear Godo&#39;s quest<br>"Terms of Exchange for an<br>Ominous Odor" (Lv. 19+)<br><br>Defeat a Spooky Goat<br>at Soundless Foothills<br>and report to Godo',
            blue2: [
                'Blue Liquid Memory 2<br><br>Examine the shipwheel behind<br>the performers on the 2nd floor<br> of the Revolving Helm Pavilion',
                    
                '青いリキッドメモリ 2<br><br>廻る舵輪亭の２階で演奏者<br>の後ろにある舵を調べると解放'
            ],
            blue1: 
                'Blue Liquid Memory 1<br><br>Clear Patty&#39;s Quest<br>"Troubled Apprentice" (Lv. 13+)<br><br>Obtain Engram Extractor<br>(clear Pillar of Divinity<br>[Advanced Survey]) and bring it<br>to Hanna outside the Pillar',
            red2: 
                'Red Liquid Memory 2<br><br>Examine the bottles on<br>the counter by the<br>Memory Stand',
            red1: 
                'Red Liquid Memory 1<br><br>Clear quest<br>"Welcome to the Memory Stand!" (Lv. 12+)<br><br>Listen to the Memory Stand<br>attendant&#39;s explanation',
            purple1: 
                'Purple Liquid Memory 1<br><br>Clear Louise&#39;s quest<br>"Calm Researcher&#39;s Latest Work!" (Lv. 28+)<br><br>Bring the following to Louise:<br>5 Full Moon Stones<br>(Calm Eve Terraces/night time/high ground)<br>5 Sunshine Shells<br>(Fiel Pond/day time/river)',
            warpfrontier: 'Warp Gate<br>Frontiering Station',
            warpcoatofarms: 'Warp Gate<br>Coat of Arms Plaza',
            warpcitygate: 'Warp Gate<br>City Gate Square',
            warpbeach: 'Warp Gate<br>Asterleeds Beach',
            warpport: 'Warp Gate<br>Asterleeds Port',
            warpinn: 'Warp Gate<br>The Double-Faced Coin',
            warparena: 'Warp Gate<br>Revolving Helm Pavilion',
            warpshrine: 'Warp Gate<br>Arena Entrance',
            warppavilion: 'Warp Gate<br>Shrine Entrance',
        },
        
        // JAPANESE
        {
            storage: "倉庫",
            memorystand: 
                'リキッドメモリスタンド<br><img src="images/liquidmemory%20yellow%20fad459.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">クラフトで武器Lvが上がりやすい<br><img src="images/liquidmemory%20blue%206ac7cd.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">武器精練の経験値上昇<br><img src="images/liquidmemory%20red%20db516a.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">採取時間の短縮<br><img src="images/liquidmemory%20purple%2079389e.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">エネミー撃破のドロップ率上昇<br><img src="images/liquidmemory%20green%2045b343.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">NPC施設のルーノ値引き',
            imajhouse: "イマジン研究所",
            classmaster: "クラスマスター",
            wepshop: "武器屋",
            potshop: "道具屋",
            craftmachine: "転球練成儀",
            reconstructor: "武器改造師",
            gcshop: "GC交換所",
            timedquest: "時間制限クエスト",
            yellow1: 
                '黄色リキッドメモリ 1<br><br>オービスのサブクエスト<br>「急がば近道！」(Lv. 24+)のクリア報酬<br><br>オービスの荷物を３個取り返すとクリア<br>巨竜の爪痕・自由探索でエルダーゴブリン・グロウを倒すと入手',
            green1: 
                '緑リキッドメモリ 1<br><br>ゴドーのサブクエスト<br>「不気味な香りの交換条件」(Lv. 19+)のクリア報酬<br><br>鎮まりの山麓でスプーキーゴートを倒し<br>ゴドーに報告するとクリア',
            blue2:   
                '青いリキッドメモリ 2<br><br>廻る舵輪亭の２階で演奏者<br>の後ろにある舵を調べると解放',
            blue1:  
                '青いリキッドメモリ 1<br><br>パティのサブクエスト<br>「困った見習い」(Lv. 13+)のクリア報酬<br><br>神殿前にいるハンナに話しかけ<br>神懸の御柱・追加調査をクリアし<br>エングラム分離器をハンナに渡し<br>パティに報告するとクリア',
            red2:   
                '赤いリキッドメモリ 2<br><br>メモリスタンドの横にあるビンを調べると解放',
            red1: 
                '赤いリキッドメモリ 1<br><br>サブクエスト<br>「メモリスタンドへようこそ！」(Lv. 12+)のクリア報酬<br><br>店員の説明を聴いて<br>巨竜の爪痕・自由探索で凍星草とパイルド鉱を採取し<br>店員に報告するとクリア',
            purple1: 
                '紫リキッドメモリ 1<br><br>ルイーゼのサブクエスト<br>「おっとり研究者の最新作」(Lv. 28+)のクリア報酬<br><br>ルイーゼに以下の素材を持っていくとクリア<br>満月石を５個(夜に夕凪の段丘の高地で採取)<br>ニッコウガイを５個(昼にフィエル嶺水地の川で採取)',
            warpfrontier: '空間転送ポータル<br>開拓局前広場',
            warpcoatofarms: '空間転送ポータル<br>天紋広場',
            warpcitygate: '空間転送ポータル<br>アステルリーズ街門広場',
            warpbeach: '空間転送ポータル<br>アステルリーズビーチ',
            warpport: '空間転送ポータル<br>アステルリーズ港',
            warpinn: '空間転送ポータル<br>対面コイン亭前',
            warparena: '空間転送ポータル<br>闘技場前',
            warpshrine: '空間転送ポータル<br>神殿前',
            warppavilion: '空間転送ポータル<br>廻る舵輪亭前',
        }
    ]
    
    
    // Display the map
    function dispMap() {
        
        
        // Asteria Plain
        if (newMap == '#mapAsteriaPlain') {
            
            if (currentMap != "#mapAsteriaPlain") {
                $("#mapAsteriaPlain").css("opacity","0");
                $("#mapAsteriaPlain").css("display","block");
                $(currentMap).stop().animate({opacity: 0}, 300);

                setTimeout(function(){
                    $(currentMap).css("display", "none");
                    currentMap = "#mapAsteriaPlain";
                }, 300);

                $("#mapAsteriaPlain").stop().animate({opacity: 1}, 300);
            } 
            else {
                $(newMap).css("display","block");
            }

        }
        
        
        // Bahamar Highland
        if (newMap == '#mapBahamarHighlands') {
            
            if (currentMap != "#mapBahamarHighlands") {
                $("#mapBahamarHighlands").css("opacity","0");
                $("#mapBahamarHighlands").css("display","block");
                $(currentMap).stop().animate({opacity: 0}, 300);

                setTimeout(function(){
                    $(currentMap).css("display", "none");
                    currentMap = "#mapBahamarHighlands";
                }, 300);

                $("#mapBahamarHighlands").stop().animate({opacity: 1}, 300);
            }
            else {
                $(newMap).css("display","block");
            }
            
        }
        
        
        // Asterleeds
        if (newMap == '#mapAsterleeds') {
            
            if (currentMap != "#mapAsterleeds") {
                $("#mapAsterleeds").css("opacity","0");
                $("#mapAsterleeds").css("display","block");
                $(currentMap).stop().animate({opacity: 0}, 300);
                
                setTimeout(function(){
                    $(currentMap).css("display", "none");
                    currentMap = "#mapAsterleeds";
                }, 300);
                
                $("#mapAsterleeds").stop().animate({opacity: 1}, 300);
                
            }
            else {
                $(newMap).css("display","block");
            }
            

        }
        
        // 0 English 1 Japanese
        $(".text-storage").html(mapText[currentLang].storage);
        $(".text-memorystand").html(mapText[currentLang].memorystand);
        $(".text-imajhouse").html(mapText[currentLang].imajhouse);
        $(".text-classmaster").html(mapText[currentLang].classmaster);
        $(".text-wepshop").html(mapText[currentLang].wepshop);
        $(".text-potshop").html(mapText[currentLang].potshop);
        $(".text-craftmachine").html(mapText[currentLang].craftmachine);
        $(".text-reconstructor").html(mapText[currentLang].reconstructor);
        $(".text-gcshop").html(mapText[currentLang].gcshop);
        $(".text-timedquest").html(mapText[currentLang].timedquest);
        $(".lm-yellow1").html(mapText[currentLang].yellow1);
        $(".lm-green1").html(mapText[currentLang].green1);
        $(".lm-blue2").html(mapText[currentLang].blue2);
        $(".lm-blue1").html(mapText[currentLang].blue1);
        $(".lm-red2").html(mapText[currentLang].red2);
        $(".lm-red1").html(mapText[currentLang].red1);
        $(".lm-purple1").html(mapText[currentLang].purple1);
        $(".warp-frontier").html(mapText[currentLang].warpfrontier);
        $(".warp-coatofarms").html(mapText[currentLang].warpcoatofarms);
        $(".warp-citygate").html(mapText[currentLang].warpcitygate);
        $(".warp-beach").html(mapText[currentLang].warpbeach);
        $(".warp-port").html(mapText[currentLang].warpport);
        $(".warp-inn").html(mapText[currentLang].warpinn);
        $(".warp-arena").html(mapText[currentLang].warparena);
        $(".warp-shrine").html(mapText[currentLang].warpshrine);
        $(".warp-pavilion").html(mapText[currentLang].warppavilion);
        
        
    }
    
    // Map Switcher
    $(".mapListItem").click(function(){
        
        // Reset MAP NAME opacity and color to original values;
        $(".mapName").removeClass("currentZone");
        $(".mapName").css("opacity","0.6");
        
        // Asteria Plains maps
        if ($(this).is(".listAsteriaPlain")){
            
            // Highlight the map name if a specific map is chosen
            if ($(this).is(":contains('Skyquake Fields')")) {
                $(".mapName:contains('Skyquake Fields')").addClass("currentZone");
                $(".mapName:contains('Skyquake Fields')").css("opacity","1");
            } 
            else if ($(this).is(":contains('Minster Hills')")) {
                $(".mapName:contains('Minster Hills')").addClass("currentZone");
                $(".mapName:contains('Minster Hills')").css("opacity","1");
            } 
            else if ($(this).is(":contains('Andra Basin')")) {
                $(".mapName:contains('Andra Basin')").addClass("currentZone");
                $(".mapName:contains('Andra Basin')").css("opacity","1");
            }
            else if ($(this).is(":contains('Calm Eve Terraces')")) {
                $(".mapName:contains('Calm Eve Terraces')").addClass("currentZone");
                $(".mapName:contains('Calm Eve Terraces')").css("opacity","1");
            } 
            else if ($(this).is(":contains('Minsterhorn')")) {
                $(".mapName:contains('Minsterhorn')").addClass("currentZone");
                $(".mapName:contains('Minsterhorn')").css("opacity","1");
            }
            
            // Open the map
            newMap = "#mapAsteriaPlain";
            dispMap();

        }
        
        // Bajamar Highlands maps
        if ($(this).is(".listBahamarHighlands")){
            
            // Highlight the map name if a specific map is chosen
            if ($(this).is(":contains('Divine Haven Hill')")) {
                $(".mapName:contains('Divine Haven Hill')").addClass("currentZone");
                $(".mapName:contains('Divine Haven Hill')").css("opacity","1");
            } 
            else if ($(this).is(":contains('Fiel Pond')")) {
                $(".mapName:contains('Fiel Pond')").addClass("currentZone");
                $(".mapName:contains('Fiel Pond')").css("opacity","1");
            } 
            else if ($(this).is(":contains('Soundless Foothills')")) {
                $(".mapName:contains('Soundless Foothills')").addClass("currentZone");
                $(".mapName:contains('Soundless Foothills')").css("opacity","1");
            }
            else if ($(this).is(":contains('Larpal')")) {
                $(".mapName:contains('Larpal')").addClass("currentZone");
                $(".mapName:contains('Larpal')").css("opacity","1");
            }
            else if ($(this).is(":contains('Bergmahl')")) {
                $(".mapName:contains('Bergmahl')").addClass("currentZone");
                $(".mapName:contains('Bergmahl')").css("opacity","1");
            }
            
            // Open the map
            newMap = "#mapBahamarHighlands";
            dispMap();
        }
        
        // Asterleeds map
        if ($(this).is(".listAsterleeds")){
            newMap = "#mapAsterleeds";
            dispMap();
        }
    });
    
    // Map Icon Toggles
    $(".mapToggles").click(function(){
        
        console.log("X: " + $(this).pageX + $(this).find("+p.tooltip").pageX);
        
        
        // Toggle ON if off
        if ($(this).hasClass("mapToggles-off")) {
            // Restores toggle icon
            $(this).removeClass("mapToggles-off");
            
            if ($(this).is("#toggleWarp")) {
                $(".warpPortal").css("display", "initial");
            }
            if ($(this).is("#toggleClassMaster")) {
                $(".mapClassMaster").css("display", "initial");
            }
            if ($(this).is("#toggleLiquidMemoryStand")) {
                $(".mapLiquidMemoryStand").css("display", "initial");
            }
            if ($(this).is("#toggleExchange")) {
                $(".mapExchange").css("display", "initial");
            }
            if ($(this).is("#togglePotion")) {
                $(".mapPotionShop").css("display", "initial");
            }
            if ($(this).is("#toggleWeapon")) {
                $(".mapWeaponShop").css("display", "initial");
            }
            if ($(this).is("#toggleEliteMonster")) {
                $(".mapEliteMonster").css("display", "initial");
            }
            if ($(this).is("#toggleFreeExp")) {
                $(".mapFreeExp").css("display", "initial");
            }
            if ($(this).is("#toggleRaid")) {
                $(".mapRaid").css("display", "initial");
            }
            if ($(this).is("#toggleMSQ")) {
                $(".mapMSQ").css("display", "initial");
            }
            if ($(this).is("#toggleImajinn")) {
                $(".mapImajinnHouse").css("display", "initial");
            }
            if ($(this).is("#toggleCrafting")) {
                $(".mapCrafting").css("display", "initial");
            }
            if ($(this).is("#toggleReconstructor")) {
                $(".mapReconstructor").css("display", "initial");
            }
            if ($(this).is("#toggleStorage")) {
                $(".mapStorage").css("display", "initial");
            }
            if ($(this).is("#toggleExploration")) {
                $(".mapExploration").css("display", "initial");
            }
            if ($(this).is("#toggleTimedQuest")) {
                $(".mapTimedQuest").css("display", "initial");
            }
            if ($(this).is("#toggleLiquidMemories")) {
                $(".mapLiquidMemories").css("display", "initial");
            }
            
        }
        
        // Toggle OFF if on
        else {
            // Darkens toggle icon
            $(this).addClass("mapToggles-off");
            
            if ($(this).is("#toggleWarp")) {
                $(".warpPortal").css("display", "none");
            }
            if ($(this).is("#toggleClassMaster")) {
                $(".mapClassMaster").css("display", "none");
            }
            if ($(this).is("#toggleLiquidMemoryStand")) {
                $(".mapLiquidMemoryStand").css("display", "none");
            }
            if ($(this).is("#toggleExchange")) {
                $(".mapExchange").css("display", "none");
            }
            if ($(this).is("#togglePotion")) {
                $(".mapPotionShop").css("display", "none");
            }
            if ($(this).is("#toggleWeapon")) {
                $(".mapWeaponShop").css("display", "none");
            }
            if ($(this).is("#toggleEliteMonster")) {
                $(".mapEliteMonster").css("display", "none");
            }
            if ($(this).is("#toggleFreeExp")) {
                $(".mapFreeExp").css("display", "none");
            }
            if ($(this).is("#toggleRaid")) {
                $(".mapRaid").css("display", "none");
            }
            if ($(this).is("#toggleMSQ")) {
                $(".mapMSQ").css("display", "none");
            }
            if ($(this).is("#toggleImajinn")) {
                $(".mapImajinnHouse").css("display", "none");
            }
            if ($(this).is("#toggleCrafting")) {
                $(".mapCrafting").css("display", "none");
            }
            if ($(this).is("#toggleReconstructor")) {
                $(".mapReconstructor").css("display", "none");
            }
            if ($(this).is("#toggleStorage")) {
                $(".mapStorage").css("display", "none");
            }
            if ($(this).is("#toggleExploration")) {
                $(".mapExploration").css("display", "none");
            }
            if ($(this).is("#toggleTimedQuest")) {
                $(".mapTimedQuest").css("display", "none");
            }
            if ($(this).is("#toggleLiquidMemories")) {
                $(".mapLiquidMemories").css("display", "none");
            }
        }
        
    });
    

    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    // IMAJINN
    
    var iiIndex = 0;
    var biIndex = 0;
    var name = $(".i-infoName");
    var vid = $(".i-infoVid");
    var img = $(".i-infoImg");
    var level = $(".i-infoLv");
    var element = $(".i-infoEle");
    var elePower = $(".i-infoElePower");
    var cd = $(".i-infoCD");
    var skill = $(".i-infoSkill");
    var skillPowerTitle = $(".i-infoSkillPwrRow");
    var skillPower = $(".i-infoSkillPower");
    var skillDesc = $("#skillDesc");
    var slotIcon = $(".i-slotIcon");
    var abil = $(".i-infoAbil");
    var abilPower = $(".i-infoAbilPower");
    var statVal = $(".i-infoStatVal");
    var mat = $(".matItem");
    var matIcon = $(".matIcon");
    var matCount = $(".matCount");
    var recipeToolText = $(".recipeToolText");
    var luno = $(".reqLuno");
    var listHolder = biHolder; // The current list being shown
    var statLvSelector = 0;
    var iIndex;
    var spacing1 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var listItemName = document.querySelectorAll(".listItem-name");
    var listItemType = document.querySelectorAll(".listItem-type");
    
    // Battle Imajinn
    var biHolderEN = [
        // Pink Piglet ピンクウリボ
        { 
            name: "Pink Piglet",
            type: "Heal type",
            image: "images/map/pinkpiglet.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Piglet's Tranquility (heal)","effectiveness", "175","67","Summons Pink Piglet's Imagine<br>who creates a healing field around itself"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Pink Piglet's Idea","Ripple Stone","Piglet Skin","2,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["1","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Pink Piglet<br>Skyquake Fields","Gather<br>Skyquake Fields","Piglet<br>Skyquake Fields"],
            tooltipBg: [
                tooltipSkyquake,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Ferocious Beast 猛る獣
        { 
            name: "Ferocious Beast",
            type: "Support type",
            image: "images/map/ferociousbeast.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // アクトクライ・猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Act Cry (support)","effectiveness", "150","150","Summons Ferocious Beast's Imagine<br>who gives the summoner a temporary ATK increase"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Ferocious Beast's Idea","Dawngrass","Rumble Boar's Skin","7,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Ferocious Beast<br>Minster Hills","Gather<br>Minster Hills","Rumble Boar<br>Andra Basin"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,
                tooltipAndra],
            tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
        },
        // Red Splash 赤い飛沫
        { 
            name: "Red Splash",
            type: "Attack type",
            image: "images/map/redsplash.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 兜割り・赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける。
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Helm Splitter (attack)","effectiveness", "422","166","Summons Red Splash's Imagine<br>who targets and strikes the target's head with its club"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Red Splash's Idea","Plateau Lily","Highland Fox Nail","15,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Damage increase (regular attack)","STR increase", "<br>"],
            tooltipText: ["Red Splash<br>Minster Hills","Gather<br>Soundless Foothills","Highland Fox<br>Divine Haven Hill"],
            tooltipBg: [
                tooltipMinster,
                tooltipSoundless,
                tooltipDivine],
            tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Deep Green Fang 深緑の牙
        { 
            name: "Deep Green Fang",
            type: "Attack type",
            image: "images/map/deepgreenfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 猪突猛進・深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Boar Rush (attack)","effectiveness", "514","166","Summons Deep Green Fang's Imagine<br>who performs a charge attack towards the center of the target"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Deep Green Fang's Idea","Asterbass","Tyrant Boar's Skin","17,000"],
            iconSrc: [iElite,iShell,iCombat],
            amt: ["3","3","3"],
            abilList: ["Damage increase (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Deep Green Fang<br>Andra Basin","Gather<br>Minster Hills","Tyrant Boar<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                tooltipAndra,
                tooltipMinster,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Iron Fang 鉄牙
        { 
            name: "Iron Fang",
            type: "Attack type",
            image: "images/map/ironfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // マウンテンスロー・鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Mountain Throw (attack)","effectiveness", "524","169","Summons Iron Fang's Imagine<br>who throws enemies into the air with its large fangs"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Iron Fang's Idea","Beartree Leaf","Goblin Mane","20,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Iron Fang<br>Andra Basin","Gather<br>Divine Haven Hill","Goblin<br>Minster hills"],
            tooltipBg: [
                tooltipAndra,
                tooltipDivine,
                tooltipMinster],
            tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
        },
        // Flame Prison 炎獄
        { 
            name: "Flame Prison",
            type: "Attack type",
            image: "images/map/flamingprison.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // パワースイング・炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Power Swing (attack)","effectiveness", "710","169","Summons Flame Prison's Imagine<br>who swings its club to enemies in front of it"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Flame Prison's Idea","Jasper Stone","Glowing Goblin's Mane","86,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["5","3","3"],
            abilList: ["Reduce cooldown (battle imagine)","Max HP increase", "<br>"],
            tooltipText: ["Flame Prison<br>Calm Eve Terraces","Gather<br>Soundless Foothills","Glowing Goblin<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipSoundless,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Ferocious Gold 猛る金色
        { 
            name: "Ferocious Gold",
            type: "Attack type",
            image: "images/map/ferociousgold.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // デスタックル・猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Death Tackle (attack)","effectiveness", "696","166","Summons Ferocious Gold's Imagine<br>who performs a charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Ferocious Gold's Idea","Nectar Seed","Ferocious Beast's Tail","85,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["5","3","1"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Ferocious Gold<br>Calm Eve Terraces","Gather<br>Fiel Pond","Ferocious Beast<br>Minster Hills"],
            tooltipBg: [tooltipCalmEve,
                        tooltipFiel,
                        tooltipMinster],
            tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
        },
        // Sapphire Trot サファイアトロット
        { 
            name: "Sapphire Trot",
            type: "Attack type",
            image: "images/map/sapphiretrot.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 落石牙・サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Stone Fang Drop (attack)","effectiveness", "483","156","Summons Sapphire Trot's Imagine<br>who lunges at an enemy and bites them"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Sapphire Trot's Idea","Andra Cedar Twig","Elder Goblin's Mane","25,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Crit rate increase","DEX increase", "<br>"],
            tooltipText: ["Sapphire Trot<br>Divine Haven Hill","Gather<br>Minster Hills","Elder Goblin<br>Andra Basin"],
            tooltipBg: [tooltipDivine,
                        tooltipMinster,
                        tooltipAndra],
            tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
        },
        // Flaming Horns 炎角
        { 
            name: "Flaming Horns",
            type: "Attack type",
            image: "images/map/flaminghorns.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // カイザーブラスト・炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Kaiser Blast (attack)","effectiveness", "493","159","Summons Flaming Horns' Imagine<br>who performs a Lightning elemental charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Flaming Horns' Idea","Blesio Nut","Goblin Sage's Mane","26,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Flaming Horns<br>Divine Haven Hill","Gather<br>Divine Haven Hill","Goblin Sage<br>Soundless Foothills"],
            tooltipBg: [tooltipDivineLeft,
                       tooltipDivine,
                       tooltipSoundless],
            tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Spooky Goat スプーキーゴート
        { 
            name: "Spooky Goat",
            type: "Support type",
            image: "images/map/spookygoat.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ゴートヘイスト・スプーキーゴートのイマジンを召喚し召喚者の移動速度を一定時間上昇させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goat Haste (support)","effectiveness", "130","130","Summons Spooky Goat's Imagine<br>who gives the summoner a temporary movement speed increase"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Spooky Goat's Idea","Sunset Cedar Twig","Glowing Tyrant Boar Skin","45,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["4","3","3"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Spooky Goat<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Glowing Tyrant Boar<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipDragonclaw],
            tooltipIcn: ["transform: translate(2.5vw, 4.9vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Evil Healer 悪しき癒し手
        { 
            name: "Evil Healer",
            type: "Heal type",
            image: "images/map/evilhealer.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // エリアヒール・悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Area Heal (heal)","effectiveness", "267","71","Summons Evil Healer's Imagine<br>who heals the HP allies around it"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Evil Healer's Idea","Rimeril Ore","Ogre Bone","56,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Evil Healer<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Ogre<br>Calm Eve Terraces"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipCalmEve],
            tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
        },
        // Trick Elder トリックエルダー
        { 
            name: "Trick Elder",
            type: "Attack type",
            image: "images/map/trickelder.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // エルダークリスタル・トリックエルダーのイマジンを召喚しターゲットに対して氷柱を3発飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Elder Crystal (attack)","effectiveness", "741","156","Summons Trick Elder's Imagine<br>who launches 3 icicles at the target"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Trick Elder's Idea","Dragon Venom","Deep Green Fang's Skin","130,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["3","3","1"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Dragonclaw Valley [Free Exploration]","Deep Green Fang<br>Andra Basin"],
            tooltipBg: [tooltipFiel,
                       tooltipDragonclaw,
                       tooltipAndra],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(5.8vw, 11vw)"]
        },
        // Elder Goblin エルダーゴブリン
        { 
            name: "Elder Goblin",
            type: "Attack type",
            image: "images/map/eldergoblin.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ファイアボール・エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Fireball (attack)","effectiveness", "604","166","Summons Elder Goblin's Imagine<br>who blasts one fireball at the target"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Elder Goblin's Idea","Magna Moss Fossil","Kaiser Elk Fur","43,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Arrogant Conjurer<br>Dragonclaw Valley [Free Exploration]","Gather<br>Calm Eve Terraces","Kaiser Elk<br>Divine Haven Hill"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipCalmEve,
                       tooltipDivine],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Goblin ゴブリン
        { 
            name: "Goblin",
            type: "Attack type",
            image: "images/map/goblin.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ゴブリンスタブ・ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Stab (attack)","effectiveness", "414","163","Summons Goblin's Imagine<br>who stabs the target with its club"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Goblin's Idea","Iron Ore","Land Fox Tail","9,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["2","3","1"],
            abilList: ["Damage increase (tactical skill 1)","STR increase", "<br>"],
            tooltipText: ["Valley Raider<br>Dragonclaw Valley [Free Exploration]","Gather<br>Skyquake Fields","Land Fox<br>Skyquake Fields"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipSkyquake,
                       tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Land Fox ランドフォックス
        { 
            name: "Land Fox",
            type: "Attack type",
            image: "images/map/landfox.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // クラウンストライク・ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Crown Strike (attack)","effectiveness", "669","159","Summons Land Fox's Imagine<br>who performs a leaping tackle at enemies"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Land Fox's Idea","Lamusa Flower","Pink Piglet's Skin","1,500"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["1","3","1"],
            abilList: ["Crit damage increase","DEX increase", "<br>"],
            tooltipText: ["Loudshot<br>Dragonclaw Valley [Free Exploration]","Gather<br>Skyquake Fields","Pink Piglet<br>Skyquake Fields"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
        },
        // Tyrant Boar タイラントボア
        { 
            name: "Tyrant Boar",
            type: "Attack type",
            image: "images/map/tyrantboar.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 猟犬殺し・タイラントボアのイマジンを召喚しターゲットを頭突きで攻撃する
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Hound Killer (attack)","effectiveness", "504","163","Summons Tyrant Boar<br>who attacks the target with a headbutt"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Tyrant Boar's Idea","Sandsilver","Horn Goat's Fur","45,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["2","3","3"],
            abilList: ["Damage increase (battle imagine)","ATK increase", "<br>"],
            tooltipText: ["Clear Arena [C Rank]","Gather<br>Divine Haven Hill","Horned Goat<br>Fiel Pond"],
            tooltipBg: [
                tooltipArena,
                tooltipDivine,
                tooltipFiel],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","visibility: hidden"]
        },
        // Horned Goat ホーンゴート
        { 
            name: "Horned Goat",
            type: "Attack type",
            image: "images/map/horngoat.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ビハインドキック・ホーンゴートのイマジンを召喚しターゲットを後ろ足で蹴り飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Back Kick (attack)","effectiveness", "593","163","Summons Horned Goat's Imagine<br>who kicks back enemies with its rear legs"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Horned Goat's Idea","Silver Ore","Glowing Elder Goblin's Mane","83,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (long-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [B Rank]","Gather<br>Fiel Pond","Glowing Elder Goblin<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Goblin Sage ゴブリンセージ
        { 
            name: "Goblin Sage",
            type: "Heal type",
            image: "images/map/goblinsage.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ゴブリンセージの調律・ゴブリンセージのイマジンを召喚し召喚者のHPを回復させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Sage's Tuning (heal)","effectiveness", "323","74","Summons Goblin Sage's Imagine<br>who heals the HP of the summoner"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Goblin Sage's Idea","Spike Fish","Sapphire Trot's Fang","120,000"],
            iconSrc: [iDung,iShell,iElite],
            amt: ["5","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Clear Arena [A Rank]","Gather<br>Fiel Pond","Sapphire Trot<br>Divine Haven Hill"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDivine],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "Kaiser Elk",
            type: "Attack type",
            image: "images/map/kaiserelk.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // クラッパーホーン・カイザーエルクのイマジンを召喚しターゲットを角で振り払う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Clapper Horn (attack)","effectiveness", "756","159","Summons Kaiser Elk's Imagine<br>who attacks enemies with its horns"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Kaiser Elk's Idea","Longan Flower","Evil Healer's Mane","140,000"],
            iconSrc: [iDung,iFlower,iElite],
            amt: ["7","3","1"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [S Rank]","Gather<br>Dragonclaw Valley [Free Exploration]","Evil Healer<br>Soundless Foothills"],
            tooltipBg: [
                tooltipArena,
                tooltipDragonclaw,
                tooltipSoundless],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
        },
        // Raging Kingfang 荒ぶる牙王
        { 
            name: "Raging Kingfang",
            type: "Attack type",
            image: "images/map/ragingkingfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // タイラントアサルト・荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Tyrant Assault (attack)","effectiveness", "787","166","Summons Raging Kingfang's Imagine<br>who performs a wide-range charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Raging Kingfang's Idea","Shell Fossil","Flame Prison's Bone","190,000"],
            iconSrc: [iElite,iRock,iElite],
            amt: ["7","3","1"],
            abilList: ["Reduce cooldown (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Raging Kingfang<br>Dragonclaw Valley [Free Exploration]","Gather<br>Fiel Pond","Flame Prison<br>Calm Eve Terraces"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipFiel,
                tooltipCalmEve],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
        },
        // Sealed Atrocity 封印されし暴虐
        { 
            name: "Sealed Atrocity",
            type: "Attack type",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // アースクエイク
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Earthquake (attack)","effectiveness", "802","?","Summons Sealed Atrocity's Imagine<br>who performs a large Earth elemental attack with centered around itself"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Obtained as a Quest Reward", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete quest "Collect Battle Imagine! #2"<br><br>After completing "Collect Battle Imagine! #1", craft Deep Green Fang, Iron Fang, Sapphire Trot, and Spooky Goat',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Plidoke プリドーク
        { 
            name: "Plidoke",
            type: "Attack type",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // スライサーアーム・プリドークのイマジンを召喚し前方のターゲットに両手の剣を突き刺す
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Slicer Arm (attack)","effectiveness", "772","?","Summons Plidoke's Imagine<br>who pierces enemies in front of it with its sword arms"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Obtained as a Quest Reward", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete quest "Collect Battle Imagine! #3"<br><br>After completing "Collect Battle Imagine! #2", craft ???',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
    ]
    var biHolderJP = [
        // Pink Piglet ピンクウリボ
        { 
            name: "ピンクウリボ",
            type: "回復タイプ",
            image: "images/map/pinkpiglet.mp4",
            level: "初期 Lv 1~1 (Max Lv: 15)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ウリボの安らぎ / 回復タイプ","効果値", "175","67","ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ピンクウリボのイデア","波紋石","ウリボの毛皮","2,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["1","3","1"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["ピンクウリボ<br>海鳴りの草原","採取<br>海鳴りの草原","ウリボ<br>海鳴りの草原"],
            tooltipBg: [
                tooltipSkyquake,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Ferocious Beast 猛る獣
        { 
            name: "猛る獣",
            type: "補助タイプ",
            image: "images/map/ferociousbeast.mp4",
            level: "初期 Lv 1~1 (Max Lv: 15)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;アクトクライ / 補助タイプ","効果値", "150","150","猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["猛る獣のイデア","あかつき草","ランブルボアの毛皮","7,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["最大STアップ","器用さアップ", "<br>"],
            tooltipText: ["猛る獣<br>ミンスター丘陵","採取<br>ミンスター丘陵","ランブルボア<br>アンドラ盆地"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,
                tooltipAndra],
            tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
        },
        // Red Splash 赤い飛沫
        { 
            name: "赤い飛沫",
            type: "攻撃タイプ",
            image: "images/map/redsplash.mp4",
            level: "初期 Lv 1~1 (Max Lv: 15)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;兜割り / 攻撃タイプ","効果値", "422","166","赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["赤い飛沫のイデア","高原ユリ","ハイランドフォックスの爪","15,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["ダメージアップ・通常攻撃","筋力アップ", "<br>"],
            tooltipText: ["赤い飛沫<br>ミンスター丘陵","採取<br>鎮まりの山麓","ハイランドフォックス<br>神の見守る丘"],
            tooltipBg: [
                tooltipMinster,
                tooltipSoundless,
                tooltipDivine],
            tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Deep Green Fang 深緑の牙
        { 
            name: "深緑の牙",
            type: "攻撃タイプ",
            image: "images/map/deepgreenfang.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;猪突猛進 / 攻撃タイプ","効果値", "514","166","深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["深緑の牙のイデア","アステルバス","タイラントボアの毛皮","17,000"],
            iconSrc: [iElite,iShell,iCombat],
            amt: ["3","3","3"],
            abilList: ["ダメージアップ・ULT","攻撃力アップ", "<br>"],
            tooltipText: ["深緑の牙<br>アンドラ盆地","採取<br>ミンスター丘陵","タイラントボア<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                tooltipAndra,
                tooltipMinster,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Iron Fang 鉄牙
        { 
            name: "鉄牙",
            type: "攻撃タイプ",
            image: "images/map/ironfang.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;マウンテンスロー / 攻撃タイプ","効果値", "524","169","S鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["鉄牙のイデア","ベアツリーの葉","ゴブリンのたてがみ","20,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["ダメージアップ・近接","攻撃力アップ", "<br>"],
            tooltipText: ["鉄牙<br>アンドラ盆地","採取<br>神の見守る丘","ゴブリン<br>ミンスター丘陵"],
            tooltipBg: [
                tooltipAndra,
                tooltipDivine,
                tooltipMinster],
            tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
        },
        // Flame Prison 炎獄
        { 
            name: "炎獄",
            type: "攻撃タイプ",
            image: "images/map/flamingprison.mp4",
            level: "初期 Lv 1~1 (Max Lv: 30)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;パワースイング / 攻撃タイプ","効果値", "710","169","炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["炎獄のイデア","碧玉","ゴブリン・グロウのたてがみ","86,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["5","3","3"],
            abilList: ["インターバル短縮・Bイマジン","最大HPアップ", "<br>"],
            tooltipText: ["炎獄<br>夕凪の段丘","採取<br>鎮まりの山麓","ゴブリン・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipSoundless,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Ferocious Gold 猛る金色
        { 
            name: "猛る金色",
            type: "攻撃タイプ",
            image: "images/map/ferociousgold.mp4",
            level: "初期 Lv 1~1 (Max Lv: 30)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;デスタックル / 攻撃タイプ","効果値", "696","166","猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["猛る金色のイデア","甘露の種","猛る獣の尾","85,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["5","3","1"],
            abilList: ["ダメージアップ・近接","筋力アップ", "<br>"],
            tooltipText: ["猛る金色<br>夕凪の段丘","採取<br>フィエル嶺水地","猛る獣<br>ミンスター丘陵"],
            tooltipBg: [tooltipCalmEve,
                        tooltipFiel,
                        tooltipMinster],
            tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
        },
        // Sapphire Trot サファイアトロット
        { 
            name: "サファイアトロット",
            type: "攻撃タイプ",
            image: "images/map/sapphiretrot.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;落石牙 / 攻撃タイプ","効果値", "483","156","サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["サファイアトロットのイデア","アンドラ杉の小枝","エルダーゴブリンのたてがみ","25,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["会心率アップ","器用さアップ", "<br>"],
            tooltipText: ["サファイアトロット<br>神の見守る丘","採取<br>ミンスター丘陵","エルダーゴブリン<br>アンドラ盆地"],
            tooltipBg: [tooltipDivine,
                        tooltipMinster,
                        tooltipAndra],
            tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
        },
        // Flaming Horns 炎角
        { 
            name: "炎角",
            type: "攻撃タイプ",
            image: "images/map/flaminghorns.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;カイザーブラスト / 攻撃タイプ","効果値", "493","159","炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["炎角のイデア","ブレシオの実","ゴブリンセージのたてがみ","26,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["被ダメージ軽減・近接","防御アップ", "<br>"],
            tooltipText: ["炎角<br>神の見守る丘","採取<br>神の見守る丘","ゴブリンセージ<br>鎮まりの山麓"],
            tooltipBg: [tooltipDivineLeft,
                       tooltipDivine,
                       tooltipSoundless],
            tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Spooky Goat スプーキーゴート
        { 
            name: "スプーキーゴート",
            type: "補助タイプ",
            image: "images/map/spookygoat.mp4",
            level: "初期 Lv 1~1 (Max Lv: 25)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ゴートヘイスト / 補助タイプ","効果値", "130","130","スプーキーゴートのイマジンを召喚し召喚者の移動速度を一定時間上昇させる"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["スプーキーゴートのイデア","斜陽杉の小枝","タイラントボア・グロウの毛皮","45,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["4","3","3"],
            abilList: ["最大STアップ","器用さアップ", "<br>"],
            tooltipText: ["スプーキーゴート<br>鎮まりの山麓","採取<br>夕凪の段丘","タイラントボア・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipDragonclaw],
            tooltipIcn: ["transform: translate(2.5vw, 4.9vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Evil Healer 悪しき癒し手
        { 
            name: "悪しき癒し手",
            type: "回復タイプ",
            image: "images/map/evilhealer.mp4",
            level: "初期 Lv 1~1 (Max Lv: 25)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;エリアヒール / 回復タイプ","効果値", "267","71","悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["悪しき癒し手のイデア","リメリル鉱石","オーガの骨","56,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["悪しき癒し手<br>鎮まりの山麓","採取<br>夕凪の段丘","オーガ<br>夕凪の段丘"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipCalmEve],
            tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
        },
        // Trick Elder トリックエルダー
        { 
            name: "トリックエルダー",
            type: "攻撃タイプ",
            image: "images/map/trickelder.mp4",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;エルダークリスタル / 攻撃タイプ","効果値", "741","156","トリックエルダーのイマジンを召喚しターゲットに対して氷柱を3発飛ばす"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["トリックエルダーのイデア","ドラゴンヴェノム","深緑の牙の毛皮","130,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["3","3","1"],
            abilList: ["ダメージアップ・遠隔","知力アップ", "<br>"],
            tooltipText: ["トリックエルダー<br>フィエル嶺水地","採取<br>巨竜の爪痕・自由探索","深緑の牙<br>アンドラ盆地"],
            tooltipBg: [tooltipFiel,
                       tooltipDragonclaw,
                       tooltipAndra],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(5.8vw, 11vw)"]
        },
        // Elder Goblin エルダーゴブリン
        { 
            name: "エルダーゴブリン",
            type: "攻撃タイプ",
            image: "images/map/eldergoblin.mp4",
            level: "初期 Lv 1~1 (Max Lv: 25)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ファイアボール / 攻撃タイプ","効果値", "604","166","エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["エルダーゴブリンのイデア","マグナ苔の化石","カイザーエルクの毛皮","43,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["ダメージアップ・遠隔","知力アップ", "<br>"],
            tooltipText: ["図に乗った魔術師<br>巨竜の爪痕・自由探索","採取<br>夕凪の段丘","カイザーエルク<br>神の見守る丘"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipCalmEve,
                       tooltipDivine],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Goblin ゴブリン
        { 
            name: "ゴブリン",
            type: "攻撃タイプ",
            image: "images/map/goblin.mp4",
            level: "初期 Lv 1~1 (Max Lv: 15)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ゴブリンスタブ / 攻撃タイプ","効果値", "414","163","ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ゴブリンのイデア","鉄功績","ランドフォックスの尾","9,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["2","3","1"],
            abilList: ["ダメージアップ・T1","筋力アップ", "<br>"],
            tooltipText: ["谷荒らし<br>巨竜の爪痕・自由探索","採取<br>海鳴りの草原","ランドフォックス<br>海鳴りの草原"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipSkyquake,
                       tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Land Fox ランドフォックス
        { 
            name: "ランドフォックス",
            type: "攻撃タイプ",
            image: "images/map/landfox.mp4",
            level: "初期 Lv 1~1 (Max Lv: 30)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;クラウンストライク / 攻撃タイプ","効果値", "669","159","ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ランドフォックス","ラムサの花","ピンクウリボの毛皮","1,500"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["1","3","1"],
            abilList: ["会心力アップ","器用さアップ", "<br>"],
            tooltipText: ["ラウドシャウト<br>巨竜の爪痕・自由探索","採取<br>海鳴りの草原","ピンクウリボ<br>海鳴りの草原"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
        },
        // Tyrant Boar タイラントボア
        { 
            name: "タイラントボア",
            type: "攻撃タイプ",
            image: "images/map/tyrantboar.mp4",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;猟犬殺し / 攻撃タイプ","効果値", "504","163","タイラントボアのイマジンを召喚しターゲットを頭突きで攻撃する"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["タイラントボアのイデア","砂銀","ホーンゴートの毛皮","45,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["2","3","3"],
            abilList: ["ダメージアップ・バトルイマジン","攻撃力アップ", "<br>"],
            tooltipText: ["闘技場・ランクC","採取<br>神の見守る丘","ホーンゴート<br>フィエル嶺水地"],
            tooltipBg: [
                tooltipArena,
                tooltipDivine,
                tooltipFiel],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","visibility: hidden"]
        },
        // Horned Goat ホーンゴート
        { 
            name: "ホーンゴート",
            type: "攻撃タイプ",
            image: "images/map/horngoat.mp4",
            level: "初期 Lv 1~1 (Max Lv: 25)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ビハインドキック / 攻撃タイプ","効果値", "593","163","ホーンゴートのイマジンを召喚しターゲットを後ろ足で蹴り飛ばす"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ホーンゴートのイデア","銀鉱石","エルダーゴブリン・グロウのたてがみ","83,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["3","3","3"],
            abilList: ["被ダメージ軽減・遠隔","防御アップ", "<br>"],
            tooltipText: ["闘技場・ランクB","採取<br>フィエル嶺水地","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Goblin Sage ゴブリンセージ
        { 
            name: "ゴブリンセージ",
            type: "回復タイプ",
            image: "images/map/goblinsage.mp4",
            level: "初期 Lv 1~1 (Max Lv: 30)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;ゴブリンセージの調律 / 回復タイプ","効果値", "323","74","ゴブリンセージのイマジンを召喚し召喚者のHPを回復させる"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ゴブリンセージのイデア","スパイクフィッシュ","サファイアトロットの牙","120,000"],
            iconSrc: [iDung,iShell,iElite],
            amt: ["5","3","1"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["闘技場・ランクA","採取<br>フィエル嶺水地","サファイアトロット<br>神の見守る丘"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDivine],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "カイザーエルク",
            type: "攻撃タイプ",
            image: "images/map/kaiserelk.mp4",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;クラッパーホーン / 攻撃タイプ","効果値", "756","159","カイザーエルクのイマジンを召喚しターゲットを角で振り払う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["カイザーエルクのイデア","竜眼の花","悪しき癒し手のたてがみ","140,000"],
            iconSrc: [iDung,iFlower,iElite],
            amt: ["7","3","1"],
            abilList: ["被ダメージ軽減・近接","防御アップ", "<br>"],
            tooltipText: ["闘技場・ランクS","採取<br>巨竜の爪痕・自由探索","悪しき癒し手<br>鎮まりの山麓"],
            tooltipBg: [
                tooltipArena,
                tooltipDragonclaw,
                tooltipSoundless],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
        },
        // Raging Kingfang 荒ぶる牙王
        { 
            name: "荒ぶる牙王",
            type: "攻撃タイプ",
            image: "images/map/ragingkingfang.mp4",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;タイラントアサルト / 攻撃タイプ","効果値", "787","166","荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["荒ぶる牙王のイデア","貝の化石","炎獄の骨","190,000"],
            iconSrc: [iElite,iRock,iElite],
            amt: ["7","3","1"],
            abilList: ["インターバル短縮・ULT","攻撃力アップ", "<br>"],
            tooltipText: ["荒ぶる牙王<br>巨竜の爪痕・自由探索","採取<br>フィエル嶺水地","炎獄<br>夕凪の段丘"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipFiel,
                tooltipCalmEve],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
        },
        // Sealed Atrocity 封印されし暴虐
        { 
            name: "封印されし暴虐",
            type: "攻撃タイプ",
            image: "",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;アースクエイク / 攻撃タイプ","効果値", "802","?","封印されし暴虐のイマジンを召喚し封印されし暴虐を中心に広範囲に土属性の攻撃を行う"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["クエストの報酬で入手", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['「バトルイマジンの収集２」をクリア<br><br>「バトルイマジンの収集１」を完了させたら深緑の牙、鉄牙、サファイアトロット、スプーキーゴートのイマジンをクラフト',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Plidoke プリドーク
        { 
            name: "プリドーク",
            type: "攻撃タイプ",
            image: "",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["インターバル","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            //
            skill: ["スキル","&nbsp;&nbsp;&nbsp;&nbsp;スライサーアーム / 攻撃タイプ","効果値", "772","?","プリドークのイマジンを召喚し前方のターゲットに両手の剣を突き刺す"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["クエストの報酬で入手", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['「バトルイマジンの収集３」をクリア<br><br>After completing "「バトルイマジンの収集２」を完了させたら???、???、???、???のイマジンをクラフト',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
    ]
    var biHolderBR = [
        // Pink Piglet ピンクウリボ
        { 
            name: "Leitão Rosa",
            type: "Curandeiro",
            image: "images/map/pinkpiglet.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 15)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Tranquilidade do Leitão (cura)","eficácia", "175","67","Invoca o Imajinn do Leitão Rosa<br>que cria um campo de cura ao redor de si"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Grito de Luta (suporte)","eficácia", "150","150","Invoca o Imajinn da Besta Feroz<br>que concede ao invocador um aumento temporário de ATK"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Divisor de Elmo (ataque)","eficácia", "422","166","Invoca o Imajinn do Respingo Vermelho<br>que mira e ataca a cabeça do alvo com o seu porrete"],
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
            abilList: ["Aumento de dano (ataque padrão)","Aumento de STR", "<br>"],
            tooltipText: ["Respingo Vermelho<br>Colinas Minster","Coleta<br>Sopé Silencioso","Raposa da Terra Alta<br>Colina do Refúgio Divino"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Investida do Javali (ataque)","eficácia", "514","166","Invoca o Imajinn do Presa Verde Profundo<br>que executa um ataque de investida direcionado ao centro do alvo"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Arremeço da Montanha (ataque)","eficácia", "524","169","Invoca o Imajinn do Presa de Ferro<br>que arremessa seus inimigos ao ar com suas presas gigantes"],
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
            tooltipText: ["Presa de Ferro<br>Bacia Andra","Coleta<br>Colina do Refúgio Divino","Goblin<br>Colinas Minster"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Golpe Poderoso (ataque)","eficácia", "710","169","Invoca o Imajinn do Prisão Fulgor<br>que golpeia com seu porrete os inimigos à sua frente"],
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
            tooltipText: ["Prisão Fulgor<br>Terraços da Véspera Tranquila","Coleta<br>Sopé Silencioso","Goblin Incandescente<br>Vale Garra do Dragão [Exploração Livre]"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Avanço Mortal (ataque)","eficácia", "696","166","Invoca o Imajinn do Ouro Feroz<br>que executa um ataque de investida em direção ao alvo"],
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
            tooltipText: ["Ouro Feroz<br>Terraços da Véspera Tranquila","Coleta<br>Lago Fiel","Besta Feroz<br>Colinas Minster"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Queda da Presa de Pedra (ataque)","eficácia", "483","156","Invoca o Imajinn do Presa Safira<br>que executa uma investida e morde o alvo"],
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
            tooltipText: ["Presa Safira<br>Colina do Refúgio Divino","Coleta<br>Colinas Minster","Goblin Ancião<br>Bacia Andra"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Explosão do Imperador(ataque)","eficácia", "493","159","Invoca o Imajin do Chifre Flamejante<br>que executa um ataque elemental de investida elétrico em direção ao alvo"],
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
            tooltipText: ["Chifre Flamejante<br>Colina do Refúgio Divino","Coleta<br>Colina do Refúgio Divino","Goblin Sábio<br>Sopé Silencioso"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Pressa da Cabra (suporte)","eficácia", "130","130","Invoca o Imajinn da Cabra Sinistra<br>que concede ao invocador um aumento temporário de velocidade de movimento"],
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
            tooltipText: ["Cabra Sinistra<br>Sopé Silencioso","Coleta<br>Terraços da Véspera Tranquila","Javali Tirano Incandescente<br>Vale Garra do Dragão [Exploração Livre]"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Cura em Área (cura)","eficácia", "267","71","Invoca o Imajinn do Curandeiro Maligno<br>que cura os aliados ao seu redor"],
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
            tooltipText: ["Curandeiro Maligno<br>Sopé Silencioso","Coleta<br>Terraços da Véspera Tranquila","Ogro<br>Terraços da Véspera Tranquila"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Cristal Ancião (ataque)","eficácia", "741","156","Invoca o Imajinn do Ancião Trapaceiro<br>que lança 3 setas de gelo ao alvo"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Bola de Fogo (ataque)","eficácia", "604","166","Invoca o Imajinn do Goblin Ancião<br>que atira uma bola de fogo ao alvo"],
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
            tooltipText: ["Conjurador Arrogante<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Terraços da Véspera Tranquila","Alce Ancião<br>Colina do Refúgio Divino"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Punhalada do Goblin (ataque)","eficácia", "414","163","Invoca o Imajinn do Goblin<br>que perfura o alvo com seu porrete"],
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
            abilList: ["Aumento de dano (habilidade tática 1)","Aumento de STR", "<br>"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Ataque da Coroa(ataque)","eficácia", "669","159","Invoca o Imajinn da Raposa Terrestre<br>que executa um salto de ataque ao alvo"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Caça Mortal (ataque)","eficácia", "504","163","Invoca o Imajinn do Javali Tirano<br>que ataca o alvo com uma cabeçada"],
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
            tooltipText: ["Completar Arena [Rank C]","Coleta<br>Colina do Refúgio Divino","Cabra Chifruda<br>Lago Fiel"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Coice (ataque)","eficácia", "593","163","Invoca o Imajinn da Cabra Chifruda<br>que dá um coice em seus inimigos"],
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
            recipe: ["Ideia da Cabra Chifruda","Minério de Prata","Juba de Goblin Ancião Incandescente","83,000"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Curativo do Goblin Ancião (cura)","eficácia", "323","74","Invoca o Imajinn do Goblin Sábio<br>que cura o invocador"],
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
            tooltipText: ["Completar Arena [Rank A]","Coleta<br>Lago Fiel","Presa Safira<br>Colina do Refúgio Divino"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDivine],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "Alce Ancião",
            type: "Dano",
            image: "images/map/kaiserelk.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // クラッパーホーン・カイザーエルクのイマジンを召喚しターゲットを角で振り払う
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Chifrada (ataque)","eficácia", "756","159","Invoca o Imajinn do Alce Imperador<br>que ataca o alvo com seus chifres"],
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
            name: "Presa Rei Furioso",
            type: "Dano",
            image: "images/map/ragingkingfang.mp4",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;30 seg"],
            // タイラントアサルト・荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Investida Tirana (ataque)","eficácia", "787","166","Invoca o Imajinn do Presa Rei Furioso<br>que executa uma investida de amplo alcance em direção ao alvo"],
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
            recipe: ["Ideia do Presa Rei Furioso","Fóssil de Concha","Osso de Prisão Fulgor","190,000"],
            iconSrc: [iElite,iRock,iElite],
            amt: ["7","3","1"],
            abilList: ["Redução de intervalo (suprema)","Aumento de ATK", "<br>"],
            tooltipText: ["Presa Rei Furioso<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Lago Fiel","Prisão Fulgor<br>Terraços da Véspera Tranquila"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Terremoto (ataque)","eficácia", "802","?","Invoca o Imajinn do Atrocidade Selada<br>que executa um grande ataque elemental de Terra centrado ao redor de si"],
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
            skill: ["habilidade","&nbsp;&nbsp;&nbsp;&nbsp;Braço Cortante (ataque)","eficácia", "772","?","Invoca o Imajinn do Plidoke<br>que perfura os inimigos à sua frente com seus braços-espada"],
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
        },
    ]
    
    // Inner Imajinn
    var iiHolderEN = [
        
        // Dyranks/Dylanx
        { 
            name: "Dyranks (courage)",
            type: "<br>",
            image: "images/crafting/ii1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Courage"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Reikrid Crystal","<br>","<br>","1,000"],
            iconSrc: [iDung,"",""],
            amt: ["1","<br>","<br>"],
            abilList: ["Max HP increase","<br>", "<br>"],
            tooltipText: ["Clear Dungeon<br>Reikrid Tunnels","<br>","<br>"],
            tooltipBg: [
                tooltipSkyquake,"",""],
            tooltipIcn: ["transform: translate(11.4vw, 4.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Corjun/Corsion
        { 
            name: "Corjun (mystery)",
            type: "<br>",
            image: "images/crafting/ii2L.png",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mystery"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Land Fox Nail","Asterium Ore","<br>","9,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["8","15","<br>"],
            abilList: ["ATK increase","<br>", "<br>"],
            tooltipText: ["Land Fox<br>Minster Hills","Gather<br>Minster Hills","<br>"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Mipect
        { 
            name: "Mipect (hope)",
            type: "<br>",
            image: "images/crafting/ii3L.png",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Hope"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Goblin Nail","Jira Crystal","<br>","10,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","10","<br>"],
            abilList: ["Max Stamina increase","<br>", "<br>"],
            tooltipText: ["Goblin<br>Andra Basin","Gather<br>Andra Basin","<br>"],
            tooltipBg: [
                tooltipAndra,
                tooltipAndra,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Proxyx/Procsyx
        { 
            name: "Proxyx (courage)",
            type: "<br>",
            image: "images/crafting/ii4L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Courage"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Horned Goat Bone","Smoky Moss","<br>","60,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["12","20","<br>"],
            abilList: ["Max HP increase","VIT increase", "STR increase"],
            tooltipText: ["Horned Goat<br>Soundless Foothills","Gather<br>Divine Haven Hill","<br>"],
            tooltipBg: [
                tooltipSoundless,
                tooltipDivine,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Latepect/Latepecht
        { 
            name: "Latepect (hope)",
            type: "<br>",
            image: "images/crafting/ii5L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Hope"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Large Fang Fossil","<br>","<br>","85,000"],
            iconSrc: [iRock,"",""],
            amt: ["25","<br>","<br>"],
            abilList: ["Max Stamina increase","INT increase", "MND increase"],
            tooltipText: ["Gather<br>Divine Haven Hill","<br>","<br>"],
            tooltipBg: [
                tooltipDivine,"",""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Carcon
        { 
            name: "Carcon (mystery)",
            type: "<br>",
            image: "images/crafting/ii6L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mystery"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Glowing Goblin's Nail","Pterosaur Fossil","<br>","240,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","35","<br>"],
            abilList: ["ATK increase","STR increase", "DEX increase"],
            tooltipText: ["Glowing Goblin<br>Dragonclaw Valley [Free Exploration]","Gather<br>Dragonclaw Valley [Free Exploration]","<br>"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipDragonclaw,""],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
        },
        // Parbury
        { 
            name: "Parbury (ambition)",
            type: "<br>",
            image: "images/crafting/ii7L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot4.svg","Ambition"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Glowing Tyrant Boar's Fang","Stardust Grass","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["DEF increase","DEX increase", "VIT increase"],
            tooltipText: ["Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces","<br>"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipCalmEve, ""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Sanak'ta
        { 
            name: "Sanak'ta (affection)",
            type: "<br>",
            image: "images/crafting/ii8L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot5.svg","Affection"],
            ability: ["ability", "????","effectiveness", "????"],
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
            recipe: ["Trick Elder's Nail","Welling Water Stone","<br>","900,000"],
            iconSrc: [iElite,iRock,""],
            amt: ["1","50","<br>"],
            abilList: ["Healing increase","MND increase", "INT increase"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Fiel Pond","<br>"],
            tooltipBg: [
                tooltipFiel,
                tooltipFiel,""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ]
    var iiHolderJP = [
        
        // Dyranks/Dylanx
        { 
            name: "ディランクス (勇気)",
            type: "<br>",
            image: "images/crafting/ii1L.png",
            level: "初期 Lv 1~1 (Max Lv: 7)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot1.svg","勇気"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["レイクリッド結晶","<br>","<br>","1,000"],
            iconSrc: [iDung,"",""],
            amt: ["1","<br>","<br>"],
            abilList: ["最大HPアップ","<br>", "<br>"],
            tooltipText: ["ダンジョンクリア<br>レイクリッド坑道","<br>","<br>"],
            tooltipBg: [
                tooltipSkyquake,"",""],
            tooltipIcn: ["transform: translate(11.4vw, 4.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Corjun/Corsion
        { 
            name: "コージュン (神秘)",
            type: "<br>",
            image: "images/crafting/ii2L.png",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot3.svg","神秘"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ランドフォックスの爪","アステリウム鉱石","<br>","9,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["8","15","<br>"],
            abilList: ["攻撃力アップ","<br>", "<br>"],
            tooltipText: ["ランドフォックス<br>ミンスター丘陵","採取<br>ミンスター丘陵","<br>"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Mipect
        { 
            name: "ミペクト (希望)",
            type: "<br>",
            image: "images/crafting/ii3L.png",
            level: "初期 Lv 1~1 (Max Lv: 20)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot2.svg","Hope"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ゴブリンの爪","ジラ輝石","<br>","10,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","10","<br>"],
            abilList: ["最大STアップ","<br>", "<br>"],
            tooltipText: ["ゴブリン<br>アンドラ盆地","採取<br>アンドラ盆地","<br>"],
            tooltipBg: [
                tooltipAndra,
                tooltipAndra,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Proxyx/Procsyx/Prokythyx
        { 
            name: "プロキシクス (勇気)",
            type: "<br>",
            image: "images/crafting/ii4L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot1.svg","勇気"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ホーンゴートの骨","煙霧苔","<br>","60,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["12","20","<br>"],
            abilList: ["最大HPアップ","耐久力アップ", "筋力アップ"],
            tooltipText: ["ホーンゴート<br>鎮まりの山麓","採取<br>神の見守る丘","<br>"],
            tooltipBg: [
                tooltipSoundless,
                tooltipDivine,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Latepect/Latepecht
        { 
            name: "ラテペクト (希望)",
            type: "<br>",
            image: "images/crafting/ii5L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot2.svg","Hope"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["大牙の化石","<br>","<br>","85,000"],
            iconSrc: [iRock,"",""],
            amt: ["25","<br>","<br>"],
            abilList: ["最大STアップ","知力アップ", "精神力アップ"],
            tooltipText: ["採取<br>神の見守る丘","<br>","<br>"],
            tooltipBg: [
                tooltipDivine,"",""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Carcon
        { 
            name: "カーコン (神秘)",
            type: "<br>",
            image: "images/crafting/ii6L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot3.svg","神秘"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["ゴブリン・グロウの爪","翼竜の化石","<br>","240,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","35","<br>"],
            abilList: ["攻撃力アップ","筋力アップ", "器用さアップ"],
            tooltipText: ["ゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索","<br>"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipDragonclaw,""],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
        },
        // Parbury
        { 
            name: "パルブリー (野心)",
            type: "<br>",
            image: "images/crafting/ii7L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot4.svg","Ambition"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["タイラントボア・グロウの大牙","星屑草","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["防御アップ","器用さアップ", "耐久力アップ"],
            tooltipText: ["タイラントボア・グロウ<br>夕凪の段丘","採取<br>夕凪の段丘","<br>"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipCalmEve, ""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Sanak'ta
        { 
            name: "サナクッタ (慈愛)",
            type: "<br>",
            image: "images/crafting/ii8L.png",
            level: "初期 Lv 1~1 (Max Lv: 35)",
            element: ["属性 &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["装着部位","images/crafting/slot5.svg","Affection"],
            ability: ["アビリティ名", "????","効果値", "????"],
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
            recipe: ["トリックエルダーの爪","湧水石","<br>","900,000"],
            iconSrc: [iElite,iRock,""],
            amt: ["1","50","<br>"],
            abilList: ["回復力アップ","精神力アップ", "知力アップ"],
            tooltipText: ["トリックエルダー<br>フィエル嶺水地","採取<br>フィエル嶺水地","<br>"],
            tooltipBg: [
                tooltipFiel,
                tooltipFiel,""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ]
    var iiHolderBR = [
        
        // Dyranks/Dylanx
        { 
            name: "Dyranks (coragem)",
            type: "<br>",
            image: "images/crafting/ii1L.png",
            level: "Nv Inicial 1~1 (Nv Max: 7)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Coragem"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Cristal Reikrid","<br>","<br>","1,000"],
            iconSrc: [iDung,"",""],
            amt: ["1","<br>","<br>"],
            abilList: ["Aumento de HP Max","<br>", "<br>"],
            tooltipText: ["Complete a Masmorra<br>Túneis Reikrid","<br>","<br>"],
            tooltipBg: [
                tooltipSkyquake,"",""],
            tooltipIcn: ["transform: translate(11.4vw, 4.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Corjun/Corsion
        { 
            name: "Corjun (mistério)",
            type: "<br>",
            image: "images/crafting/ii2L.png",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mistério"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Unha de Raposa Terrestre","Minério de Asterium","<br>","9,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["8","15","<br>"],
            abilList: ["Aumento de ATK","<br>", "<br>"],
            tooltipText: ["Raposa Terrestre<br>Colinas Minster","Coleta<br>Colinas Minster","<br>"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Mipect
        { 
            name: "Mipect (esperança)",
            type: "<br>",
            image: "images/crafting/ii3L.png",
            level: "Nv Inicial 1~1 (Nv Max: 20)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Esperança"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Unha de Goblin","Cristal Jira","<br>","10,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","10","<br>"],
            abilList: ["Aumento de Fôlego Max","<br>", "<br>"],
            tooltipText: ["Goblin<br>Bacia Andra","Coleta<br>Bacia Andra","<br>"],
            tooltipBg: [
                tooltipAndra,
                tooltipAndra,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Proxyx/Procsyx
        { 
            name: "Proxyx (coragem)",
            type: "<br>",
            image: "images/crafting/ii4L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Coragem"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Osso de Cabra Chifruda","Musgo Defumado","<br>","60,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["12","20","<br>"],
            abilList: ["Aumento de HP Max","Aumento de VIT", "Aumento de STR"],
            tooltipText: ["Cabra Chifruda<br>Sopé Silencioso","Coleta<br>Colina do Refúgio Divino","<br>"],
            tooltipBg: [
                tooltipSoundless,
                tooltipDivine,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Latepect/Latepecht
        { 
            name: "Latepect (esperança)",
            type: "<br>",
            image: "images/crafting/ii5L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Esperança"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Fóssil de Presa Grande","<br>","<br>","85,000"],
            iconSrc: [iRock,"",""],
            amt: ["25","<br>","<br>"],
            abilList: ["Aumento de Fôlego Max","Aumento de INT", "Aumento de MND"],
            tooltipText: ["Coleta<br>Colina do Refúgio Divino","<br>","<br>"],
            tooltipBg: [
                tooltipDivine,"",""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Carcon
        { 
            name: "Carcon (mistério)",
            type: "<br>",
            image: "images/crafting/ii6L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mistério"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Unha de Goblin Incandescente","Fóssil de Pterossauro","<br>","240,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","35","<br>"],
            abilList: ["Aumento de ATK","Aumento de STR", "Aumento de DEX"],
            tooltipText: ["Goblin Incandescente<br>Vale Garra do Dragão [Exploração Livre]","Coleta<br>Vale Garra do Dragão [Exploração Livre]","<br>"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipDragonclaw,""],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
        },
        // Parbury
        { 
            name: "Parbury (ambição)",
            type: "<br>",
            image: "images/crafting/ii7L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot4.svg","Ambição"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Presa de Javali Tirano Incandescente","Grama de Poeira Estelar","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["Aumento de DEF","Aumento de DEX", "Aumento de VIT"],
            tooltipText: ["Javali Tirano Incandescente<br>Terraços da Véspera Tranquila","Coleta<br>Terraços da Véspera Tranquila","<br>"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipCalmEve, ""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Sanak'ta
        { 
            name: "Sanak'ta (afeto)",
            type: "<br>",
            image: "images/crafting/ii8L.png",
            level: "Nv Inicial 1~1 (Nv Max: 35)",
            element: ["elemento &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["intervalo","&nbsp;&nbsp;&nbsp;&nbsp;60 seg"],
            // 
            slot: ["slot","images/crafting/slot5.svg","Afeto"],
            ability: ["talento", "????","eficácia", "????"],
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
            recipe: ["Unha de Ancião Trapaceiro","Pedra das Águas de Nascente","<br>","900,000"],
            iconSrc: [iElite,iRock,""],
            amt: ["1","50","<br>"],
            abilList: ["Aumento de Cura","Aumento de MND", "Aumento de INT"],
            tooltipText: ["Ancião Trapaceiro<br>Lago Fiel","Coleta<br>Lago Fiel","<br>"],
            tooltipBg: [
                tooltipFiel,
                tooltipFiel,""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ]
    
    var biHolder = biHolderEN;
    var iiHolder = iiHolderEN;
    
    // Show Inner Imajinn
    $(".iiSelImg").click(function(){
        listHolder = iiHolder;
        dispImajinn(listHolder);
    });
    // Show Battle Imajinn
    $(".biSelImg").click(function(){
        listHolder = biHolder;
        dispImajinn(listHolder);
    });
    
    // Select Imajinn to Display from List
    $(".listItem").click(function(){
        
        if (listHolder == biHolder) {
            // Index of the clicked item
            biIndex = $(".biList").index(this);
        }
        else if (listHolder == iiHolder) {
            // Index of the clicked item
            iiIndex = $(".iiList").index(this);
        }

        dispImajinn(listHolder);

    });
    
    // Toggle Imajinn Level
    $(".imajSlider").click(function(){
        
        // Max lv stats
        if (!$(".itoggleCheck").is(":checked")) {
            statLvSelector = 1;
            
            if (listHolder == biHolder) {
                skillPower.html(listHolder[iIndex].skill[3]);
            }
            skillPower.css("color","crimson");
            
            statVal.each(function(index){
                $(this).html(listHolder[iIndex].stats[(index)]);
                $(this).css("color","crimson");
            });
        }
        
        // Lv 1 stats
        else {
            statLvSelector = 0;
            
            if (listHolder == biHolder) {
                skillPower.html(listHolder[iIndex].skill[4]);
            }
            skillPower.css("color","#343330");
            
            statVal.each(function(index){
                $(this).html(listHolder[iIndex].minStats[(index)]);
                $(this).css("color","#343330");
            });
        }

    });
    
    // Display Imajinn
    function dispImajinn(holder) {
        

        // If battle imajinn, hide inner
        if (listHolder == biHolder) {
            
            // Populate list
            $(".biList>.listItem-desc>.nameAndType").each(function(index){
                $(this).find(".listItem-name").html(holder[index].name);
                $(this).find(".listItem-type").html(holder[index].type);
            });
            
            iIndex = biIndex;
            $("#ImajList").css("display", "initial");
            $("#InnerList").css("display", "none");
            
            // display CD, SKILL PWR, VID, SKILL TOOLTIP
            // hide IMG, SLOT ICN
            cd.css("display","initial");
            skillPower.css("display","initial");
            skillDesc.addClass("skillTooltip");
            vid.css("display","block");
            skillPowerTitle.css("display","initial");
            img.css("display","none");
            slotIcon.css("display","none");
            
            
            // Change selector image
            $(".iiSelector").removeClass("listSelected");
            $(".biSelector").addClass("listSelected");
            
            // Send values
            cd.html(holder[iIndex].cooldown[0] + holder[iIndex].cooldown[1]);
            skill.html(holder[iIndex].skill[0] + holder[iIndex].skill[1]);
            skillPowerTitle.html(holder[iIndex].skill[2]); // "Effectiveness"
            
            // Skill power Lv 1
            if (statLvSelector == 0) {
                // Send skill power
                skillPower.html(holder[iIndex].skill[4]);
            }
            // Skill power max level
            else if (statLvSelector == 1) {
                // Send skill power
                skillPower.html(holder[iIndex].skill[3]);
            }
            
            if (vid.attr("src") != holder[iIndex].image) {
                vid.attr("src", holder[iIndex].image);
            }
            
            $(".skillTooltip").html(holder[iIndex].skill[(holder[iIndex].skill.length-1)]);
            
        } // end Battle Imajinn exclusives
        
        // If inner imajinn, hide battle
        if (listHolder == iiHolder) {
            
            // Populate list
            $(".iiList>.listItem-desc>.nameAndType").each(function(index){
                $(this).find(".listItem-name").html(holder[index].name);
                $(this).find(".listItem-type").html(holder[index].type);
            });
            
            iIndex = iiIndex;
            $("#ImajList").css("display", "none");
            $("#InnerList").css("display", "initial");
            
            // display IMG, SLOT ICN
            // hide VID, CD, SKILL PWR, SKILL TOOLTIP
            cd.css("display","none");
            skillPower.css("display","none");
            vid.css("display","none");
            skillPowerTitle.css("display","none");
            skillDesc.removeClass("skillTooltip");
            img.css("display","block");
            slotIcon.css("display","block");
            
            
            // Change selector image
            $(".biSelector").removeClass("listSelected");
            $(".iiSelector").addClass("listSelected");
            
            
            // Send values
            skill.html(holder[iIndex].slot[0] + "&nbsp;&nbsp;&nbsp;&nbsp;");
            img.attr("src", holder[iIndex].image);
            slotIcon.attr("src", holder[iIndex].slot[1])
            $(".slotTooltip").html(holder[iIndex].slot[2]);
            
        } // end Inner Imajinn exclusives
        
        // Lv 1 = send lv 1 stats
        if (statLvSelector == 0) {
            // Send stats
            statVal.each(function(index){
                $(this).html(holder[iIndex].minStats[(index)]);
            });
        } 
        // Max level = send max stats
        else if (statLvSelector == 1) {
            // Send stats
            statVal.each(function(index){
                $(this).html(holder[iIndex].stats[(index)]);
            });
        }
        
        
        // Send stat info
        name.html(holder[iIndex].name);
        level.html(holder[iIndex].level);
        element.html(holder[iIndex].element[0]);
        elePower.html(holder[iIndex].element[1]);
        abil.html(holder[iIndex].ability[0] + spacing1 + holder[iIndex].ability[1]);
        abilPower.html(holder[iIndex].ability[2] + spacing1 + holder[iIndex].ability[3]);

        // Send ability list
        $(".abil").each(function(index){
           $(this).html(holder[iIndex].abilList[(index)]);
        });
        
        
        
        // Recipe
        $(".recipeHolder>div").each(function (index){
            $(this).find(mat).html(holder[iIndex].recipe[(index)]);
            $(this).find(matIcon).attr("src", holder[iIndex].iconSrc[(index)]); 
            $(this).find(matCount).html(holder[iIndex].amt[(index)]); 
            
            // Tooltips
            $(this).find(".recipeToolText").html(holder[iIndex].tooltipText[(index)]); 
            $(this).find(".recipeTooltip").css("background",holder[iIndex].tooltipBg[(index)]);
            $(this).find(".recipeToolImg").attr("src", holder[iIndex].iconSrc[(index)]);
            $(this).find(".recipeToolImg").attr("style", holder[iIndex].tooltipIcn[(index)]);
        });
        luno.html(holder[iIndex].recipe[(holder[iIndex].recipe.length - 1)]);
        
    }
    
    // Open Imajinn Page
    function openImajinn() {
        
        imajInitial = false;
        $("#ImajinnContainer").css("display","block");
        
        dispImajinn(listHolder);
    }
    
    // Close Imajinn Page
    function closeImajinn() {
        
        $("#ImajinnContainer").css("display","none");
        
    }

    
    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    // ABOUT
    
    $("#buttonAbout").click(function(){
        if ($("#pageAbout").css("display")=="none") {
            $("#pageAbout").css("display", "block")
            openTrivia();
        } else {
            $("#pageAbout").css("display", "none");
        }
    });
    
    // Trivia
    // Generate map names and skill names from a list?
    // Automatically generate "what class's skill is __?" and " __ is an ability for what skill? questions?
    var triviaHolder = [
        { // 1
            category: "Technical",
            question: "What is the general name of the company that publishes Blue Protocol?",
            choice: ["Square ENIX", "Bandai Namco", "Sega", "EA"],
            answer: ["Bandai Namco"]
        },
        { // 2
            category: "Technical",
            question: "What is the name of the development team responsible for Blue Protocol?",
            choice: ["Project Blue", "Project Blue Sky" , "Bandai Namco","Project Sky Blue"],
            answer: ["Project Sky Blue"]
        },
        { // 3
            category: "Technical",
            question: "Who is the executive producer of Blue Protocol?",
            choice: ["Soukichi Shimooka" ,"Keisuke Fukuzaki","Takahiro Suzuki", "Kazuto Kirigaya"],
            answer: ["Takahiro Suzuki"]
        },
        { // 4
            category: "Class",
            question: "What was the 5th class added to the game?",
            choice: ["Aegis Fighter", "Twin Striker", "Heavy Smasher", "Spell Caster"],
            answer: ["Heavy Smasher"]
        },
        { // 5
            category: "Lore",
            question: "What is the name of the Aegis Fighter class instructor?",
            choice: ["Lily", "Korz", "Manuel", "Seila"],
            answer: ["Korz"]
        },
        { // 6
            category: "Lore",
            question: "What is the name of the Twin Striker class instructor?",
            choice: ["Manuel", "Lily", "Seila", "Korz"],
            answer: ["Manuel"]
        },
        { // 7
            category: "Lore",
            question: "What is the name of the Blast Archer class instructor?",
            choice: ["Korz", "Lily", "Manuel", "Seila"],
            answer: ["Lily"]
        },
        { // 8
            category: "Lore",
            question: "What is the name of the Spell Caster class instructor?",
            choice: ["Korz", "Manuel", "Seila", "Lily"],
            answer: ["Seila"]
        },
        { // 9
            category: "Class",
            question: "Perfection is an ability for which Twin Striker skill?",
            choice: ["Blood Axe", "Storm Rush", "Burning Rush", "Vortex Impact"],
            answer: ["Burning Rush"]
        },
        { // 10
            category: "Class",
            question: "What class uses the skill War Cry?",
            choice: ["Aegis Fighter", "Twin Striker", "Blast Archer", "Spell Caster"],
            answer: ["Twin Striker"]
        },
        { // 11
            category: "Class",
            question: "What class uses the skill Negative Resonance?",
            choice: ["Blast Archer", "Spell Caster", "Aegis Fighter", "Twin Striker"],
            answer: ["Blast Archer"]
        },
        { // 12
            category: "Class",
            question: "Acceleration is an ability for which Blast Archer skill?",
            choice: ["Charge Arrow", "Riesel Shower", "Hunter Spirit", "Arrow Rush"],
            answer: ["Riesel Shower"]
        },
        { // 13
            category: "Class",
            question: "Blast Archer’s backward + regular attack 1 key results in what?",
            choice: ["Healing Boost Buff", "Movement Speed Buff", "Attack Buff", "Attack Speed Buff"],
            answer: ["Movement Speed Buff"]
        },
        { // 14
            category: "Class",
            question: "Which Spell Caster ability has the same name for two skills?",
            choice: ["Escalation","Element Escalate", "EP Save", "Rapid Charge"],
            answer: ["Escalation"]
        },
        { // 15
            category: "Class",
            question: "Which class uses the skill Engram Charge?",
            choice: ["Aegis Fighter", "Spell Caster", "Twin Striker", "Blast Archer"],
            answer: ["Spell Caster"]
        },
        { // 16
            category: "Class",
            question: "Starlight is an ability for which Aegis Fighter skill?",
            choice: ["Regeneration","Sunrise Charge","Judgement Shield","Celestial Pillar"],
            answer: ["Celestial Pillar"]
        },
        { // 17
            category: "Story",
            question: "Which story character do you meet after defeating an Avalitia for the first time?",
            choice: ["Jake", "Einrain", "Melrophe", "Aerinse"],
            answer: ["Melrophe"]
        },
        { // 18
            category: "Story",
            question: "What is the name of the NPC that gives you a mount imajinn?",
            choice: ["Roger","Dean","Stadst","Quinn"],
            answer: ["Stadst"]
        },
        { // 19
            category: "Story",
            question: "What is the name of the inn that you wake up in after meeting Feste for the first time?",
            choice: ["The Double-Faced Coin", "Black Masked Inn", "Hunter's Breeze", "The Highland Inn"],
            answer: ["The Double-Faced Coin"]
        },
        { // 20
            category: "Story",
            question: "Who is the self-proclaimed “best of the best” adventurer?",
            choice: ["Einrain", "Jake", "Main Character", "Aerinse"],
            answer: ["Jake"]
        },
        { // 21
            category: "Story",
            question: "What is the name of the mysterious girl at the Bapharia Shrine?",
            choice: ["Aylin", "Sophia", "Einrain", "Aerinse"],
            answer: ["Einrain"]
        },
        { // 22
            category: "Story",
            question: "What are you, the player, referred to as by some characters in the story?",
            choice: ["Adventurer","Visitor", "Traveler", "Leaper"],
            answer: ["Visitor"]
        },
        { // 23
            category: "Story",
            question: "What is Aenrinse’s bodyguard’s name?",
            choice: ["Jake", "Einrain", "Feste", "Tyris"],
            answer: ["Tyris"]
        },
        { // 24
            category: "Story",
            question: "What is the name of the NPC at Minsterhorn who tells you to go to the Pillar of Divinity?",
            choice: ["Jake", "Milrain", "Melrophe", "Feste"],
            answer: ["Milrain"]
        },
        { // 25
            category: "Story",
            question: "What is the name of the girl in charge of Adventurer Registration at the Frontiering Station?",
            choice: ["Milrain", "Myulie", "Melroph", "Einrain"],
            answer: ["Myulie"]
        },
        { // 26
            category: "Lore",
            question: "What’s the name of the  town that you start in?",
            choice: ["Bapharia ", "Asterleeds", "Salamzart", "Lapenta"],
            answer: ["Asterleeds"]
        },
        { // 27
            category: "Lore",
            question: "What is the desert-themed town called?",
            choice: ["Ul'dah", "Salamzart", "Death Valley", "Durango"],
            answer: ["Salamzart"]
        },
        { // 28
            category: "Gameplay",
            question: "Which color liquid memory increases enemy drop rate?",
            choice: ["Yellow" , "Red" ,  "Purple" , "Green"],
            answer: ["Purple"]
        },
        { // 29
            category: "Gameplay",
            question: "What is the max amount of attachment slots a weapon can have?",
            choice: ["3", "6", "4" , "5"],
            answer: ["4"]
        },
        { // 30
            category: "Gameplay",
            question: "Which element has “high damage explosion” as a burst effect?",
            choice: ["Light","Dark","Ice","Earth"],
            answer: ["Light"]
        },
        { // 31
            category: "Gameplay",
            question: "How many waves does Arena [S Rank] have?",
            choice: ["30", "100", "25", "70"],
            answer: ["25"]
        },
        { // 32
            category: "Gameplay",
            question: "What is the name for the highest level dungeon difficulty?",
            choice:  ["Final Survey", "Ultra Survey", "Additional Survey", "Advanced Survey"],
            answer: ["Advanced Survey"]
        },
        { // 33
            category: "Gameplay",
            question: "What is the name of the boss in Mechanical Ruin Valley?",
            choice: ["Quad Arm", "Reanimated Terror", "Ancient Android", "Demon Bhor"],
            answer: ["Quad Arm"]
        },
        { // 34
            category: "Gameplay",
            question: "What zone is the town Larpal in?",
            choice: ["Asterleeds", "Fiel Pond", "Andra Basin", "Divine Haven Hill"],
            answer: ["Divine Haven Hill"]
        },
        { // 35
            category: "Gameplay",
            question: "What is the first zone outside of Asterleeds called?",
            choice: ["Divine Haven Hill", "Skyquake Fields", "Andra Basin", "Soundless Foothills"],
            answer: ["Skyquake Fields"]
        },
        { // 36
            category: "Gameplay",
            question: "What zone is the dungeon Dragonclaw Valley [Free Exploration] found in?",
            choice: ["Salamzart", "Minster Hills", "Skyquake fields", "Fiel Pond"],
            answer: ["Minster Hills"]
        },
        { // 37
            category: "Lore",
            question: "What is the world of BLUE PROTOCOL called?",
            choice: ["Asteria", "Bajamar", "Regnus", "Prectus"],
            answer: ["Regnus"]
        },
        { // 38
            category: "Gameplay",
            question: "How many warp portals are in Asterleeds?",
            choice: ["6", "7", "8", "9"],
            answer: ["9"]
        },
        { // 39
            category: "Class",
            question: "Which class has the highest base attack on their weapons?",
            choice: ["Heavy Smasher", "Aegis Fighter", "Spell Caster", "Twin Striker"],
            answer: ["Twin Striker"]
        },
        { // 40
            category: "Gameplay",
            question: "What is the default amount of stamina?",
            choice: ["200", "100", "150", "70"],
            answer: ["100"]
        },
        { // 41
            category: "Gameplay",
            question: "How often do most elite monsters spawn?",
            choice: ["15 minutes", "10 minutes", "7 minutes", "30 minutes"],
            answer: ["15 minutes"]
        },
        { // 42
            category: "Gameplay",
            question: "What is the name of the level 18 raid boss?",
            choice: ["Fiel", "Demidragon", "Undead Prince", "Hydra"],
            answer: ["Demidragon"]
        },
        { // 43
            category: "Gameplay",
            question: "What is the max party size?",
            choice: ["3", "5", "6", "4"],
            answer: ["6"]
        },
        { // 44
            category: "Gameplay",
            question: "How many players can be in a raid?",
            choice: ["15","30","40","20"],
            answer: ["20"]
        },
        { // 45
            category: "Class",
            question: "Which class can equip the weapon Bapharia's Guidance?",
            choice: ["Blast Archer", "Aegis Fighter", "Spell caster", "Twin Striker"],
            answer: ["Aegis Fighter"]
        },
        { // 46
            category: "Class",
            question: "Which class has no heal skills?",
            choice: ["Twin Striker", "Spell Caster", "Aegis Fighter", "Blast Archer"],
            answer: ["Spell Caster"]
        },
        { // 47
            category: "Gameplay",
            question: "What is the strongest battle imajinn called?",
            choice: ["Sealed Tyranny", "Eternal Rage", "Red Splash", "Iron Fangs"],
            answer: ["Sealed Tyranny"]
        },
        { // 48
            category: "Gameplay",
            question: "How many healer-type battle imajinn are there?",
            choice: ["4", "2", "8", "3"],
            answer: ["3"]
        },
        { // 49
            category: "Technical",
            question: "What year did the development of BLUE PROTOCOL begin?",
            choice: ["2014", "2016", "2020", "2021"],
            answer: ["2016"]
        },
        { // 50
            category: "Gameplay",
            question: "How many character voice options can you choose from during character creation?",
            choice: ["7", "1", "5", "3"],
            answer: ["3"]
        },
        { // 51
            category: "Class",
            question: "Which class is often considered the biggest support role?",
            choice: ["Spell Caster", "Blast Archer", "Twin Striker", "Aegis fighter"],
            answer: ["Blast Archer"]
        },
        { // 52
            category: "Gameplay",
            question: "How many Permanent Skills & Tactical Abilities are the same for each class?",
            choice: ["17", "13", "14", "15"],
            answer: ["14"]
        },
        { // 53
            category: "Gameplay",
            question: "How many different inner imajinn slots are there?",
            choice: ["5", "3", "6", "8"],
            answer: ["5"]
        },
        { // 54
            category: "Gameplay",
            question: "How many accessory slots are confirmed by the developers?",
            choice: ["5", "8", "7", "10"],
            answer: ["7"]
        },
        { // 55
            category: "Gameplay",
            question: "How much stamina does evasion consume?",
            choice: ["20", "25", "15", "30"],
            answer: ["25"]
        },
    ]  
    
    function openTrivia() {
        var triviaQuestion = $(".triviaQuestion");
        var triviaCategory = $(".triviaCategory");
        var triviaChoices = $(".triviaChoices");
        var buttonColor = $(".triviaChoices").css("background-color");
        var qIndex = 0;
        
        // Display container
        $("#pageTrivia").css("display","block");
        
        
        // Durstenfeld Shuffle
        function shuffle(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        
        // Shuffle questions
        shuffle(triviaHolder);
        
        function generateQuestion() {
            
            // If finished, shuffle deck and restart
            if (qIndex >= triviaHolder.length) {
                shuffle(triviaHolder);
                qIndex = 0;
            }
            
            // Shuffle choices
            shuffle(triviaHolder[qIndex].choice);
            
            // Send category & question
            triviaCategory.html(triviaHolder[qIndex].category);
            triviaQuestion.html(triviaHolder[qIndex].question);
    
            // Sends each choice once & resets button color
            triviaChoices.each(function(index) {
                $(this).css("background-color", buttonColor);
                $(this).html(triviaHolder[qIndex].choice[(index)]);
            });
            
            // Enable clicking on an option
            triviaChoices.prop("disabled", false);    
                
        }
        
        generateQuestion();
        
        // Check Answer
        triviaChoices.click(function (){
            var myAns = $(this);
            var correctAns = triviaHolder[qIndex].answer[0];
            
            // Disable clicking after choosing an option
            triviaChoices.prop("disabled", true);
            
            // Search choices for correct answer and turn it green; 
            triviaChoices.each(function() {
                if ($(this).text() == correctAns) {
                    $(this).css("background-color", "green");
                }
            });

            // If my answer is wrong turn it red
            if (myAns.text() != correctAns) {
                myAns.css("background-color", "red");
            }

            // Go to next question
            window.setTimeout(generateQuestion, 2000);
            qIndex++;

        });
        
        
        
    } // End Trivia
    
    
    
    
    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    
    
    var skillsAF = [
    
        basic_skills = [

            {  
                name: "Break Slash",
                locked: 0,
                cooldown: 0,
                // Skillpoints, classlevel, tooltip
                skillinfo: [
                    "0,0,Attack multiple times with your sword. Pressing a sideways movement key during the 4th hit will result in a slash attack.",
                    "1,6,New combo option added. Pressing the forward movement key during the 3rd hit will result in a Light elemental attack.",
                    "2,8,New combo option added. Pressing the backwards movement key during the 2nd hit will give you a defense buff."
                ]
            },

            {  
                name: "Shield Guard",
                locked: 0,
                cooldown: 0,
                // Skillpoints, classlevel, tooltip
                skillinfo: [
                    "0,0,Hold button down to guard. While guarding, hold the basic attack button to stance. You will counter attack incoming attacks while stanced.",
                    "2,7,Increases shield gauge recovery speed.",
                    "2,8,Increases max shield gauge value.",
                ]
            }    
        ],
   
        tac1 = [

            {  
                name: "Shield Charge",
                locked: 0,
                cooldown: "12 sec",
                // Skillpoints, classlevel, tooltip
                skillinfo: [
                    "0,0,Charge forward with your shield and stun enemies. Cannot be used during Shield Break.",
                    "3,14,Attack after shield charging to chain a stab attack.",
                    "6,21,Up to 2 attacks can be chained.",
                ],
                alphaname: "Pursuing Blow",
                alphainfo: "3,27,Damage is increased on the slam attack",
                betaname: "Iron Wall",
                betainfo: "3,27,For a limited time, increase your defense",

            },



            {  
                name: "Sunrise Charge",
                locked: 0,
                cooldown: "12 sec",
                // Skillpoints, classlevel, tooltip
                skillinfo: [
                    "2,10,Rush forward with your shield. Hitting an enemy will cause a small Holy damage explosion. Cannot be used during Shield Break.",
                    "3,14,Attack after shield charging to chain a stab attack. The chain will cause a medium Holy damage explosion.",
                    "6,21,Up to 2 attacks can be chained. After attacking, a large Holy explosion will occur.",
                ],
                    alphaname: "Deep Wounds",
                    alphainfo: "3,27,Increases damage against enemies with abnormal status debuffs.",
                    betaname: "Sunlight",
                    betainfo: "3,27,Increases rate of accumulating elemental stacks.",

            },
    ],

        tac2 = [

            {  
                name: "Blow Beat",
                locked: 0,
                cooldown: "10 sec",
                // Skillpoints, classlevel, tooltip			
                skillinfo: [
                    "1,2,Slam your sword into the ground in a full directional attack. Enemies that are hit will be provoked.",
                    "3,15,Can be charged up to level 2, increasing skill power.",
                    "6,22,At max charge, all enemies within range will be pulled to you.",
                ],
                alphaname: "Wide Range",
                alphainfo: "3,28,Increases the effective radius.",
                betaname: "Quick Charge",
                betainfo: "3,28,Decreases the time required to full charge.",

            },

            {  
                name: "Celestial Pillar",
                locked: 0,
                cooldown: "? sec",
                // Skillpoints, classlevel, tooltip	
                skillinfo: [
                    "2,10,Summon a pillar of light on yourself which continuously inflicting Holy damage to affected enemies.",
                    "3,15,Can be charged up to level 2, increasing skill power and elemental stack accumulation.",
                    "6,22,Can be charged up to level 3, increasing skill power and elemental stack accumulation.",
                ],
                alphaname: "Starlight",
                alphainfo: "3,28,Increases rate of accumulating elemental stacks.",
                betaname: "Instant",
                betainfo: "3,28,Decreases the time that the Light pillar remains and increases the number of hits.",

            },
        ],

        tac3 = [

            {  
                name: "Divide Slash",
                locked: 0,
                cooldown: "? sec",
                // Skillpoints, classlevel, tooltip	
                skillinfo: [
                    "1,3,Unleash a slash attack in front of you that penetrates enemies.",
                    "3,16,Slash up to 2 times.",
                    "6,23,Slash up to 3 times.",
                ],
                alphaname: "Sturdy Blade",
                alphainfo: "3,29,Increases skill power, but disables enemy penetration.",
                betaname: "Enlarged Blade",
                betainfo: "3,29,Increases the size of the attack.",

            },

            {  
                name: "Crescent Light",
                locked: 0,
                cooldown: "12 sec",
                // Skillpoints, classlevel, tooltip	
                skillinfo: [
                    "2,10,Perform a Light elemental slash attack in front of you.",
                    "3,16,Slash up to 2 times.",
                    "6,23,Decreases the cooldown of Crescent Light.",
                ],
                alphaname: "Moonlight",
                alphainfo: "3,29,Increases rate of accumulating elemental stacks.",
                betaname: "Gigantic Blade",
                betainfo: "3,29,Increases skill power.",

            },
        ],

        tac4 = [

            {  
                name: "Fortress",
                locked: 0,
                cooldown: "25 sec",
                // Skillpoints, classlevel, tooltip	
                skillinfo: [
                    "1,4,Temporarily apply a shield up status. Cannot be used during shield break.",
                    "3,17,Extends the duration of Fortress.",
                    "6,24,Decreases the cooldown of Fortress.",
                ],
                alphaname: "Redirection",
                alphainfo: "3,30,Increases counter attack damage while Fortress is active.",
                betaname: "Thorns",
                betainfo: "3,30,Upon a successful block, an explosion occurs, dealing Light damage to enemies in range.",

            },

            {  
                name: "Regeneration",
                locked: 0,
                cooldown: "12 sec",
                // Skillpoints, classlevel, tooltip
                skillinfo: [
                    "2,10,For a limited time, continuously regenerate HP.",
                    "3,17,Extends the duration of Regeneration.",
                    "6,24,Decreases cooldown for Regeneration.",
                ],
                alphaname: "Healing Boost",
                alphainfo: "3,30,Increases the amount that Regeneration heals.",
                betaname: "Fortitude",
                betainfo: "3,30,Heals your shield guage.",

            },
        ],

        ult = [
            {
                name: "Judgement Shield",
                locked: 0,
                cooldown: "60 sec",
                // Skillpoints, classlevel, tooltip
                skillinfo: [
                    "2,5,Slam your sword forward, causing a Holy shockwave. Using this skill recovers shield guage. Successful guards will slightly shorten Judgement Shield's cooldown.",
                ]
            }
        ]
        
    ]
    
    
    });