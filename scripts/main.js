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
        
        // keydown E
        if (event.keyCode == 69) {
            currentLang = 0;
        }
        
        // keydown J
        if (event.keyCode == 74) {
            currentLang = 1;
        }
        
        // keydown P 
        if (event.keyCode == 80) {
            currentLang = 2;
        }
        
        // keydown R
        if (event.keyCode == 82) {
            currentLang = 3;
        }
        switchLang(currentLang);

    });
    
    function switchLang(lang) {
        
        // JAPANESE
        if (lang == 1) {
            
            // Menu Buttons
            $("#buttonImajinn+p").html("イマジン<br><br>");
            $("#buttonCrafting+p").html("クラフト<br><br>");
            $("#buttonWorldMap+p").html("地図<br><br>");
            $("#buttonGuide+p").html("ゲーム<br>ガイド");
            $("#buttonAegis+p").html("イージス<br>ファイター");
            $("#buttonTwin+p").html("ツイン<br>ストライカー");
            $("#buttonBlast+p").html("ブラスト<br>アーチャー");
            $("#buttonSpell+p").html("スペル<br>キャスター");
            $("#buttonHeavy+p").html("ヘヴィ<br>スマッシャー");
            
            // Change crafting and imajinn text regardless of current page
            wepHolder = wepHolderJP;
            biHolder = biHolderJP;
            iiHolder = iiHolderJP;
            if (listHolder == biHolderJP || listHolder == biHolderEN || listHolder == biHolderBR || listHolder == biHolderRU) {
                biHolder = biHolderJP;
                iiHolder = iiHolderJP;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderJP || listHolder == iiHolderEN || listHolder == iiHolderBR || listHolder == iiHolderRU) {
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
            $(".reqItemHeader").html("必要アイテム  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;必要数");
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
            
            // Menu Buttons
            $("#buttonImajinn+p").html("Imagine<br><br>");
            $("#buttonCrafting+p").html("Crafting<br><br>");
            $("#buttonWorldMap+p").html("World<br>Map");
            $("#buttonGuide+p").html("Game<br>Guide");
            $("#buttonAegis+p").html("Aegis<br>Fighter");
            $("#buttonTwin+p").html("Twin<br>Striker");
            $("#buttonBlast+p").html("Blast<br>Archer");
            $("#buttonSpell+p").html("Spell<br>Caster");
            $("#buttonHeavy+p").html("Heavy<br>Smasher");
            
            // Change crafting and imajinn text regardless of current page
            wepHolder = wepHolderEN;
            biHolder = biHolderEN;
            iiHolder = iiHolderEN;
            if (listHolder == biHolderEN || listHolder == biHolderJP || listHolder == biHolderBR || listHolder == biHolderRU) {
                biHolder = biHolderEN;
                iiHolder = iiHolderEN;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderEN || listHolder == iiHolderJP || listHolder == iiHolderBR || listHolder == iiHolderRU) {
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
            $(".reqItemHeader").html("Required items  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount");
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

            // Menu Buttons
            $("#buttonImajinn+p").html("Imagine<br><br>");
            $("#buttonCrafting+p").html("Crafting<br><br>");
            $("#buttonWorldMap+p").html("World<br>Map");
            $("#buttonGuide+p").html("Game<br>Guide");
            $("#buttonAegis+p").html("Aegis<br>Fighter");
            $("#buttonTwin+p").html("Twin<br>Striker");
            $("#buttonBlast+p").html("Blast<br>Archer");
            $("#buttonSpell+p").html("Spell<br>Caster");
            $("#buttonHeavy+p").html("Heavy<br>Smasher");
            
            // Change crafting and imajinn text regardless of current page
            wepHolder = wepHolderBR;
            biHolder = biHolderBR;
            iiHolder = iiHolderBR;
            if (listHolder == biHolderEN || listHolder == biHolderJP || listHolder == biHolderBR || listHolder == biHolderRU) {
                biHolder = biHolderBR;
                iiHolder = iiHolderBR;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderEN || listHolder == iiHolderJP || listHolder == iiHolderBR || listHolder == iiHolderRU) {
                biHolder = biHolderBR;
                iiHolder = iiHolderBR;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("Ataque &nbsp;");
            $(".w-infoEle").html("<br>elemento");
            $(".w-slotCount").html("slots &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("Imajinn<br>de Batalha");
            $(".iiSelector>p").html("Imajinn<br>Interno");
            $(".biSelector").css("font-size","0.6775vw");
            $(".iiSelector").css("font-size","0.6775vw");
            // Crafting and Imajinn
            $(".reqItemHeader").html("Itens Necessários  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qnt.");
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
            
            
            // Map PT
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn PT
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder);
            }

            // Crafting PT
            if (currentPage == "#craftingContainer") {
                listWeapons(wepHolder);
                dispWeapon(wepHolder);
            }
        
        }
        
        // RUSSIAN
        else if (lang == 3) {
            
            // Menu Buttons
            $("#buttonImajinn+p").html("Imagine<br><br>");
            $("#buttonCrafting+p").html("Crafting<br><br>");
            $("#buttonWorldMap+p").html("World<br>Map");
            $("#buttonGuide+p").html("Game<br>Guide");
            $("#buttonAegis+p").html("Aegis<br>Fighter");
            $("#buttonTwin+p").html("Twin<br>Striker");
            $("#buttonBlast+p").html("Blast<br>Archer");
            $("#buttonSpell+p").html("Spell<br>Caster");
            $("#buttonHeavy+p").html("Heavy<br>Smasher");
            
            // Change crafting and imajinn text regardless of current page
            wepHolder = wepHolderRU;
            biHolder = biHolderRU;
            iiHolder = iiHolderRU;
            if (listHolder == biHolderEN || listHolder == biHolderJP || listHolder == biHolderBR || listHolder == biHolderRU) {
                biHolder = biHolderRU;
                iiHolder = iiHolderRU;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderEN || listHolder == iiHolderJP || listHolder == iiHolderBR || listHolder == iiHolderRU) {
                biHolder = biHolderRU;
                iiHolder = iiHolderRU;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("Атака &nbsp;");
            $(".w-infoEle").html("<br>Элемент");
            $(".w-slotCount").html("Ячейки &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("Battle<br>Imagine");
            $(".iiSelector>p").html("Inner<br>Imagine");
            $(".biSelector").css("font-size","0.6775vw");
            $(".iiSelector").css("font-size","0.6775vw");
            // Crafting and Imajinn
            $(".reqItemHeader").html("Required items  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount");
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
            
            
            // Map RU
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn RU
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder);
            }

            // Crafting RU
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
    var newGuide = "";
    // Initial button is automatically highlighted
    $(".guideLiqMem").addClass("guideSelected");
    
    // Change guide pages
    $(".guideMenuButton").click(function(){
        
        // Reset button highlights when click
        $(".guideMenuButton").removeClass("guideSelected");
        // Add button highlight to clicked button
        $(this).addClass("guideSelected");
        // Hide the current page
        
        if ($(this).is(".guideLiqMem") && currentGuide != ".liqMemPage") {
            newGuide = ".liqMemPage";
        }
        if ($(this).is(".guideCombat") && currentGuide != ".combatPage") {
            newGuide = ".combatPage";
        }
        if ($(this).is(".guideElements") && currentGuide != ".elementsPage") {
            newGuide = ".elementsPage";
        }
        if ($(this).is(".guideFusion") && currentGuide != ".fusionPage") {
            newGuide = ".fusionPage";
        }
        if ($(this).is(".guideDungeons") && currentGuide != ".dungeonsPage") {
            newGuide = ".dungeonsPage";
        }
        if ($(this).is(".guideRaids") && currentGuide != ".raidsPage") {
            newGuide = ".raidsPage";
        }
        if ($(this).is(".guideBuffs") && currentGuide != ".buffsPage") {
            newGuide = ".buffsPage";
        }
        if ($(this).is(".guideProgression") && currentGuide != ".progressionPage") {
            newGuide = ".progressionPage";
        }
        if ($(this).is(".guideStory") && currentGuide != ".storyPage") {
            newGuide = ".storyPage";
        }
        if ($(this).is(".guideOptions") && currentGuide != ".optionsPage") {
            newGuide = ".optionsPage";
        }
        
        // Crossfade pages and display
        if (currentGuide != newGuide) {
            crossfade($(currentGuide), $(newGuide), 500);
            currentGuide = newGuide;
            openGuide();
        }

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
    
    // Crossfader function
    function crossfade(itemA, itemB, time=300) {
    // Fade out A while fading in B
        
        if (itemA != itemB) {
            itemB.css("opacity","0");
            itemB.css("display","block");
            itemB.stop().animate({opacity: 1}, time);
            
            itemA.stop().animate({opacity: 0}, time);
            setTimeout(function(){
                itemA.css("display", "none");
            }, time);

        }
        
    }
    // function fadeInOut (item A, itemB, time) {}
    
    $(".storyChapter p").click(function() {
        $(this).toggleClass("strikethrough");
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
            recipe: ["IC Core","Highland Fox Claw","Baha Ore","150,000"],
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
            recipe: ["IC Core","Highland Fox Claw","Baha Ore","150,000"],
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
            recipe: ["Bahamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
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
            recipe: ["Bahamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
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
            recipe: ["Bahamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
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
            recipe: ["Bahamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
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
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
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
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
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
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
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
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
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
            // Asterleeds
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
            timedquest: "",
            yellow1:
                'Yellow Liquid Memory 1<br><br>Clear Orvis&#39; quest<br>"Haste Makes Waste" (Lv. 24+)<br><br>Retrieve 3 Orvis&#39; Luggage from<br>Glowing Elder Goblins at<br>Dragonclaw Valley [Free Exploration]',
            green1: 
                'Green Liquid Memory 1<br><br>Clear Godo&#39;s quest<br>"Terms of Exchange for an<br>Ominous Odor" (Lv. 19+)<br><br>Defeat a Spooky Goat<br>at Soundless Foothills<br>and report to Godo',
            blue2: 
                'Blue Liquid Memory 2<br><br>Examine the shipwheel behind<br>the performers on the 2nd floor<br> of the Revolving Helm Pavilion',
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
            msq1: 'Main Story Quest 1<br>"In Search of Memories"<br><br>Speak with the inn<br>owner on the 1st floor',
            msq2: 'Main Story Quest 2<br>"In Search of Memories"<br><br>Exit the inn',
            msq3: 'Main Story Quest 3<br>"In Search of Memories"<br><br>Buy field-use health potions',
            msq4: 'Main Story Quest 4<br>"In Search of Memories"<br><br>Speak with Feste in<br>front of the storage',
            msq5: 'Main Story Quest 5<br>"In Search of Memories"<br><br>Go to City Gate Square',
            msq6: 'Main Story Quest 6<br>"In Search of Memories"<br><br>Examine the Warp Gate',
            msq7: 'Main Story Quest 7<br>"In Search of Memories"<br><br>Exit the city',
            msq10: 'Main Story Quest 10<br>"In Search of Memories"<br><br>Return to the Frontiering Station',
            msq11: 'Main Story Quest 11<br>"In Search of Memories"<br><br>Speak with Jake at the<br>Frontiering Station',
            msq12: 'Main Story Quest 12<br>"Adventurer Registration"<br><br>Speak with Myulie at the<br>Frontiering Station',
            msq14: 'Main Story Quest 14<br>"Adventurer Registration"<br><br>Craft a field-use<br>health potion',
            msq15: 'Main Story Quest 15<br>"Adventurer Registration"<br><br>Report to Myulie<br>at the Frontiering Station',
            msq16: 'Main Story Quest 16<br>"Raise your Adventure Rank!"<br><br>Speak with Jake in the<br> Frontiering Station<br>(Req. Adventure Rank 2+)',
            msq17: 'Main Story Quest 17<br>"Raise your Adventure Rank!"<br><br>Speak with Feste<br>',
            msq18: 'Main Story Quest 18<br>"Raise your Adventure Rank!"<br><br>Go to the Imagine<br>Research Institute<br>',
            msq20: 'Main Story Quest 20<br>"Raise your Adventure Rank!"<br><br>Go to the Imagine<br>Research Institute<br>',
            msq21: 'Main Story Quest 21<br>"Raise your Adventure Rank!"<br><br>Craft Inner Imagine<br>"Diranks (Courage)"',
            msq22: 'Main Story Quest 22<br>"Raise your Adventure Rank!"<br><br>Level up to Adventure Rank 2<br>(in command menu)',
            msq23: 'Main Story Quest 23<br>"Dragonclaw Valley"<br><br>Speak with Jake as<br>Adventure Rank 2',
            msq26: 'Main Story Quest 26<br>"Dragonclaw Valley"<br><br>Receive rewards from Jake<br>at the Frontiering Station',
            msq27: 'Main Story Quest 27<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Speak with the inn owner<br>at The Double-Faced Coin',
            msq28: 'Main Story Quest 28<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Ask about &#39;visitors&#39;<br>at Bapharia Shrine',
            asterleedsToSkyquake: "To Skyquake Fields",
            asterleedsToSkyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Pink Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">Land Fox<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw">Lamusa Flower<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">Ripple Stone<br>',
            
            
            // Asteria Plain
            skyquakeToAsterleeds: "To Asterleeds",
            // 10 things
            skyquakeToAsterleedsTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate<br><img src="images/map/imajinnHouse.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Imagine Research Institute<br><img src="images/map/crafting.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Crafting Machine<br><img src="images/map/reconstructor.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Weapon Reconstructor<br><img src="images/map/classmaster.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Class Master<br><img src="images/map/liquidmemory.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Liquid Memory Stand<br><img src="images/map/exchange.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">GC Shop<br><img src="images/map/potion.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Potion Shop<br><img src="images/map/weapon.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Weapon Shop<br><img src="images/map/storage.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Storage<br>',
            minsterToDivine: "To Divine Haven Hill",
            // 12 things
            minsterToDivineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate - Larpal<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Sapphire Trot<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Flaming Horns<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Highland Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw; width: 1.823vw;">Horned Goat<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Kaiser Elk<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Smoky Moss<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Blessio Fruit<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Beartree Leaf<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Large Fang Fossil<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Baha Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Sandsilver<br>',
            skyquakeName: "Skyquake Fields",
            // 6 things
            skyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Pink Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Lamusa Flower<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Ripple Stone<br>',
            expSkyquake1: 'Exploration Point<br>Skyquake Fields 1',
            expSkyquake2: 'Exploration Point<br>Skyquake Fields 2',
            expSkyquake3: 'Exploration Point<br>Skyquake Fields 3',
            expSkyquake4: 'Exploration Point<br>Skyquake Fields 4',
            expSkyquake5: 'Exploration Point<br>Skyquake Fields 5',
            emPiglet: 'Elite Monster<br>Pink Piglet',
            
            
            andraName: "Andra Basin",
            // 9 things
            andraTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Deep Green Fang<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Iron Fang<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Rumble Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Andra Cedar Twig<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Long Grass<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Jira Crystal<br>',
            expAndra1: 'Exploration Point<br>Andra Basin 1',
            expAndra2: 'Exploration Point<br>Andra Basin 2',
            expAndra3: 'Exploration Point<br>Andra Basin 3',
            expAndra4: 'Exploration Point<br>Andra Basin 4',
            emIronFang: 'Elite Monster<br>Iron Fang',
            emDeepGreen: 'Elite Monster<br>Deep Green Fang',
            
            calmName: 'Calm Eve Terraces',
            // 14 things
            calmTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Ferocious Gold<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Flame Prison<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Ogre<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Sunset Cedar Twig<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Stardust Grass<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Boule Fruit<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Meteorite Fragment<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Magnamoss Fossil<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Rimeril Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Full Moon Stone<br>',
            expCalm1: 'Exploration Point<br>Calm Eve Terraces 1',
            expCalm2: 'Exploration Point<br>Calm Eve Terraces 2',
            expCalm3: 'Exploration Point<br>Calm Eve Terraces 3',
            emFlamePrison: 'Elite Monster<br>Flame Prison',
            emFerociousGold: 'Elite Monster<br>Ferocious Gold',
            
            minsterName: 'Minster Hills',
            // 12 things
            minsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">Dragonclaw Valley<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate - Minsterhorn<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Ferocious Beast<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Red Splash<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Dawngrass<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Andra Cedar Twig<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Asterium Ore<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Asterbass<br>',
            minsterhornName: 'Minsterhorn',
            minsterhornTool: 'npc Milrain<br>npc Stadst<br>npc Feste<br>',
            warpminsterhorn: 'Warp Gate<br>Minsterhorn',
            expMinster1: "Exploration Point<br>Minster Hills 1",
            expMinster2: "Exploration Point<br>Minster Hills 2",
            expMinster3: "Exploration Point<br>Minster Hills 3",
            expMinster4: "Exploration Point<br>Minster Hills 4",
            expMinster5: "Exploration Point<br>Minster Hills 5",
            expMinster6: "Exploration Point<br>Minster Hills 6",
            expMinster7: "Exploration Point<br>Minster Hills 7",
            expMinster8: "Exploration Point<br>Minster Hills 8",
            emFerociousBeast: 'Elite Monster<br>Ferocious Beast',
            emRedSplash: 'Elite Monster<br>Red Splash',
            
            // 18 things
            dragonclawTool: 'Dragonclaw Valley<br>[Free Exploration]<br><br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Valley Raider<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Arrogant Conjurer<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Loudshout<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Raging Kingfang<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Elder Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Longan Flower<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Dragon Venom<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Frozen Star Grass<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pylud Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Wailing Dragon Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pterosaur Fossil<br>',
            purple2: 'Purple Liquid Memory 2<br><br>Examine the rocks near the open <br>cliff in the deepest area<br>(where Raging Kingfang appears)',
            msq8: 'Main Story Quest 8<br>"In Search of Memories"<br><br>Go to the ruins on the cliff',
            msq9: 'Main Story Quest 9<br>"In Search of Memories"<br><br>Go to where you woke up',
            msq13: 'Main Story Quest 13<br>"Adventurer Registration"<br><br>Collect 3 unidentified<br>plants in Skyquake Fields',
            msq19: 'Main Story Quest 19<br>"Raise your Adventure Rank!"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Obtain Reikrid Crystal',
            msq24: 'Main Story Quest 24<br>"Dragonclaw Valley"<br><br>Meet with Jake at<br>Dragonclaw Valley',
            msq25: 'Main Story Quest 25<br>"Dragonclaw Valley"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Defeat the monsters in<br>Dragonclaw Valley',
            msq29: 'Main Story Quest 29<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Go to Minsterhorn<br>in Minster Hills',
            msq30: 'Main Story Quest 30<br>"What&#39;s a &#39;visitor&#39;..?"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Search for the priest<br>at the giant tower ruins<br>in Andra Basin',
            msq31: 'Main Story Quest 31<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Report back to Milrain',
            msq32: 'Main Story Quest 32<br>"Pillar of Divinity"<br><br>Speak with Feste after<br>reaching Adventure Rank 3',
            
            
            // Bahamar highlands
            divineToMinster: "To Minster Hills",
            divineToMinsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">Dragonclaw Valley<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate - Minsterhorn<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Ferocious Beast<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Red Splash<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Dawngrass<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Andra Cedar Twig<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Asterium Ore<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Asterbass<br>',
            divineName: "Divine Haven Hill",
            divineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate - Larpal<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Sapphire Trot<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Flaming Horns<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Highland Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Horned Goat<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Kaiser Elk<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Smoky Moss<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Blessio Fruit<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Beartree Leaf<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Large Fang Fossil<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Baha Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Sandsilver<br>',
            larpalName: 'Larpal',
            expDivine1: "Exploration Point<br>Divine Haven Hill 1",
            expDivine2: "Exploration Point<br>Divine Haven Hill 2",
            expDivine3: "Exploration Point<br>Divine Haven Hill 3",
            warpLarpal: "Warp Gate<br>Larpal",
            emFlamingHorns: "Elite Monster<br>Flaming Horns",
            emSapphireTrot: "Elite Monster<br>Sapphire Trot",
            
            soundlessName: "Soundless Foothills",
            soundlessTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Spooky Goat<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Evil Healer<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Horned Goat<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Highland Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Sage<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Round Water Plant<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Plateau Lily<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Jasper Stone<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Calm Nightstone<br>',
            bergmahlName: "Bergmahl",
            emSpookyGoat: "Elite Monster<br>Spooky Goat",
            emEvilHealer: "Elite Monster<br>Evil Healer",
            expSoundless1: "Exploration Point<br>Soundless Foothills 1",
            expSoundless2: "Exploration Point<br>Soundless Foothills 2",
            expSoundless3: "Exploration Point<br>Soundless Foothills 3",
            
            fielName: "Fiel Pond",
            fielTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Trick Elder<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Horned Goat<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Highland Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Kaiser Elk<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Sage<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Driftwood Twig<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Aqua Flower<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Nectar Seed<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Welling Water Stone<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Shivering Copper<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Shell Fossil<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Spike Fish<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Sunshine Shell<br>',
            expFiel1: "Exploration Point<br>Fiel Pond 1",
            expFiel2: "Exploration Point<br>Fiel Pond 2",
            emTrickElder: "Elite Monster<br>Trick Elder",
            yellow2: 'Yellow Liquid Memory 2<br><br>Examine the ground between the<br>tents in the goblin settlement',
            msq33: 'Main Story Quest 33<br>"Pillar of Divinity"<br><br>Go to the Pillar of Divinity<br>at Divine Haven Hill',
            msq34: 'Main Story Quest 34<br>"Pillar of Divinity"<br><br>Conduct a strategy<br>meeting in Larpal',
            msq35: 'Main Story Quest 35<br>"Pillar of Divinity"<br><br>Speak with the<br>pilgrims at Bergmahl in<br>Soundless Foothills',
            msq36: 'Main Story Quest 36<br>"Pillar of Divinity"<br><br>Present your permission badge<br>to the guard at the Pillar',
            msq37: 'Main Story Quest 37<br>"Pillar of Divinity"<br><br>Reach the top of the Pillar',
            msq38: 'Main Story Quest 38<br>"Pillar of Divinity"<br><br>Escort Aerinse and<br>the others to Larpal',
            
            // Toggle titles
            togtextWarp: 'Warp Gate',
            togtextMSQ: 'Main Story Quest',
            togtextImaj: 'Imagine Research Institute',
            togtextCraft: 'Crafting Machine',
            togtextReconstructor: 'Weapon Reconstructor',
            togtextClass: 'Class Master',
            togtextMemory: 'Liquid Memory Stand',
            togtextExchange: 'Exchange',
            togtextPotshop: 'Potion Shop',
            togtextWepshop: 'Weapon Shop',
            togtextStorage: 'Storage',
            togtextElite: 'Elite Monster',
            togtextDung: 'Dungeon Entrance',
            togtextRaid: 'Raid Entrance',
            togtextRock: 'Rock Resource',
            togtextPlant: 'Plant Resource',
            togtextOcean: 'Ocean Resource',
            togtextPoint: 'Exploration Point',
            togtextLiquid: 'Liquid Memory',
            togglesHeader: 'Show/Hide',
            
            
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
            searchTitle: 'Search Map or Area Name'
            
            
            
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
            timedquest: "",
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
            msq1: 'メインクエスト 1<br>記憶を求めて<br><br>1階の亭主に挨拶する',
            msq2: 'メインクエスト 2<br>記憶を求めて<br><br>扉から街へ出る',
            msq3: 'メインクエスト 3<br>記憶を求めて<br><br>フィールド専用・回復薬 I を買う',
            msq4: 'メインクエスト 4<br>記憶を求めて<br><br>倉庫番前のフェステに話しかける',
            msq5: 'メインクエスト 5<br>記憶を求めて<br><br>街門広場へ行く',
            msq6: 'メインクエスト 6<br>記憶を求めて<br><br>転送ポータルを調べる',
            msq7: 'メインクエスト 7<br>記憶を求めて<br><br>街の外へ出る',
            msq10: 'メインクエスト 10<br>記憶を求めて<br><br>開拓局へ行く',
            msq11: 'メインクエスト 11<br>記憶を求めて<br><br>開拓局のジェイクに話しかける',
            msq12: 'メインクエスト 12<br>冒険者登録<br><br>開拓局のミューリィに話しかける',
            msq14: 'メインクエスト 14<br>冒険者登録<br><br>フィールド専用・回復薬 I をクラフトする',
            msq15: 'メインクエスト 15<br>冒険者登録<br><br>開拓局のミューリィに報告する',
            msq16: 'メインクエスト 16<br>冒険者のランクアップ！<br><br>ジェイクの依頼を受ける<br>(必要冒険ランク 2以上)',
            msq17: 'メインクエスト 17<br>冒険者のランクアップ！<br><br>開拓局にいるフェステに話しかける<br>',
            msq18: 'メインクエスト 18<br>冒険者のランクアップ！<br><br>イマジン研究所へ行く<br>',
            msq20: 'メインクエスト 20<br>冒険者のランクアップ！<br><br>イマジン研究所へ行く<br>',
            msq21: 'メインクエスト 21<br>冒険者のランクアップ！<br><br>インナーイマジン　ディランクスを作製する',
            msq22: 'メインクエスト 22<br>冒険者のランクアップ！<br><br>冒険楽を２に上げる(コマンドメニューにて)',
            msq23: 'メインクエスト 23<br>巨竜の爪痕<br><br>冒険ランク2でジェイクに話しかける',
            msq26: 'メインクエスト 26<br>巨竜の爪痕<br><br>開拓局でジェイクから報酬をもらう',
            msq27: 'メインクエスト 27<br>来者って何？<br><br>コイン亭の亭主に話しかける',
            msq28: 'メインクエスト 28<br>来者って何？<br><br>神殿で来者の話を聞く',
            asterleedsToSkyquake: "海鳴りの草原へ",
            asterleedsToSkyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">ピンクウリボ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">ウリボ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">ランドフォックス<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw">ラムサの花<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">鉄鉱石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">波紋石<br>',
            
            
            // Asteria Plain
            skyquakeToAsterleeds: "アステルリーズへ",
            // 10 things
            skyquakeToAsterleedsTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">空間転送ポータル<br><img src="images/map/imajinnHouse.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">イマジン研究所<br><img src="images/map/crafting.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">転球練成儀<br><img src="images/map/reconstructor.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">武器改造師<br><img src="images/map/classmaster.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">クラスマスター<br><img src="images/map/liquidmemory.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">リキッドメモリスタンド<br><img src="images/map/exchange.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">GC交換所<br><img src="images/map/potion.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">道具屋<br><img src="images/map/weapon.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">武器屋<br><img src="images/map/storage.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">倉庫<br>',
            minsterToDivine: "神の見守る丘へ",
            // 12 things
            minsterToDivineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">空間転送 - ラルパル<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">サファイアトロット<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">炎角<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ハイランドフォックス<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw; width: 1.823vw;">ホーンゴート<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">カイザーエルク<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">煙霧苔<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">ブレシオの実<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">ベアツリーの葉<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">大牙の化石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">バハ鉱石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">砂銀<br>',
            skyquakeName: "海鳴りの草原",
            // 6 things
            skyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">ピンクウリボ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ウリボ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ランドフォックス<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">ラムサの花<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">鉄鉱石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">波紋石<br>',
            expSkyquake1: '踏破スポット<br>海鳴りの草原 1',
            expSkyquake2: '踏破スポット<br>海鳴りの草原 2',
            expSkyquake3: '踏破スポット<br>海鳴りの草原 3',
            expSkyquake4: '踏破スポット<br>海鳴りの草原 4',
            expSkyquake5: '踏破スポット<br>海鳴りの草原 5',
            emPiglet: 'ネームドエネミー<br>ピンクウリボ',
            
            
            andraName: "アンドラ盆地",
            // 9 things
            andraTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">深緑の牙<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">鉄牙<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">ランブルボア<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">タイラントボア<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">ゴブリン<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">エルダーゴブリン<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">アンドラ杉の小枝<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">長毛草<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">ジラ輝石<br>',
            expAndra1: '踏破スポット<br>アンドラ盆地 1',
            expAndra2: '踏破スポット<br>アンドラ盆地 2',
            expAndra3: '踏破スポット<br>アンドラ盆地 3',
            expAndra4: '踏破スポット<br>アンドラ盆地 4',
            emIronFang: 'ネームドエネミー<br>鉄牙',
            emDeepGreen: 'ネームドエネミー<br>深緑の牙',
            
            calmName: '夕凪の段丘',
            // 14 things
            calmTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">猛る金色<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">炎獄<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリン<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">エルダーゴブリン<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">タイラントボア<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">タイラントボア・グロウ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">オーガ<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">斜陽杉の小枝<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">星屑草<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">ブールの実<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">隕鉄の欠片<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">マグナ苔の化石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">リメリル鉱石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">満月石<br>',
            expCalm1: '踏破スポット<br>夕凪の段丘 1',
            expCalm2: '踏破スポット<br>夕凪の段丘 2',
            expCalm3: '踏破スポット<br>夕凪の段丘 3',
            emFlamePrison: 'ネームドエネミー<br>炎獄',
            emFerociousGold: 'ネームドエネミー<br>猛る金色',
            
            minsterName: 'ミンスター丘陵',
            // 12 things
            minsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">巨竜の爪痕<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">空間転送ポータル - ミンスターホルン<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">猛る獣<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">赤い飛沫<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ウリボ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ランドフォックス<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリン<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">あかつき草<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">アンドラ杉の小枝<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">鉄鉱石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">アステリウム鉱石<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">アステルバス<br>',
            minsterhornName: 'ミンスターホルン',
            minsterhornTool: 'npc ミルレーネ<br>npc スタッズ<br>npc フェステ<br>',
            warpminsterhorn: '空間転送ポータル<br>ミンスターホルン',
            expMinster1: "踏破スポット<br>ミンスター丘陵 1",
            expMinster2: "踏破スポット<br>ミンスター丘陵 2",
            expMinster3: "踏破スポット<br>ミンスター丘陵 3",
            expMinster4: "踏破スポット<br>ミンスター丘陵 4",
            expMinster5: "踏破スポット<br>ミンスター丘陵 5",
            expMinster6: "踏破スポット<br>ミンスター丘陵 6",
            expMinster7: "踏破スポット<br>ミンスター丘陵 7",
            expMinster8: "踏破スポット<br>ミンスター丘陵 8",
            emFerociousBeast: 'ネームドエネミー<br>猛る獣',
            emRedSplash: 'ネームドエネミー<br>赤い飛沫',
            
            // 18 things
            dragonclawTool: '巨竜の爪痕・自由探索<br><br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">谷荒らし<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">図に乗った魔術師<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">ラウドシャウト<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">荒ぶる牙王<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ランドフォックス<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">タイラントボア<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">タイラントボア・グロウ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリン<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリン・グロウ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">エルダーゴブリン<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">エルダーゴブリン・グロウ<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">竜眼の花<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">ドラゴンヴェノム<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">凍星草<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">パイルド鉱<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">哭竜鉱<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">翼竜の化石<br>',
            purple2: '紫リキッドメモリ 2<br><br>ダンジョンの奥で外の崖が<br>見られる側にある岩を調べると解放<br>(荒ぶる牙王が現れるところ)',
            green2: '緑リキッドメモリ 2<br><br>崩れた建物の遺跡を調べると解放',
            msq8: 'メインクエスト 8<br>記憶を求めて<br><br>海鳴りの草原　崖の遺跡に行く',
            msq9: 'メインクエスト 9<br>記憶を求めて<br><br>目覚めた場所へ行く',
            msq13: 'メインクエスト 13<br>冒険者登録<br><br>海鳴りの草原で謎の植物資源を3個採取し鑑定',
            msq19: 'メインクエスト 19<br>冒険のランクアップ！<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">レイクリッド結晶を入手',
            msq24: 'メインクエスト 24<br>巨竜の爪痕<br><br>巨竜の爪痕でジェイクと合流',
            msq25: 'メインクエスト 25<br>巨竜の爪痕<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">巨竜の爪痕のモンスターを倒す',
            msq29: 'メインクエスト 29<br>来者って何？<br><br>ミンスター丘陵　ミンスターホルンへ行く',
            msq30: 'メインクエスト 30<br>来者って何？<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">アンドラ盆地　巨塔の遺跡へ神官を探しに行く<br>',
            msq31: 'メインクエスト 31<br>来者って何？<br><br>ミルレーネに報告しよう',
            msq32: 'メインクエスト 32<br>神懸の御柱<br><br>冒険ランク3で<br>フェステに話しかける',
            
            
            // Bahamar highlands
            divineToMinster: "ミンスター丘陵へ",
            divineToMinsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">巨竜の爪痕<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">空間転送ポータル - ミンスターホルン<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">猛る獣<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">赤い飛沫<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ウリボ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ランドフォックス<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリン<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">あかつき草<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">アンドラ杉の小枝<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">鉄鉱石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">アステリウム鉱石<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">アステルバス<br>',
            divineName: "神の見守る丘",
            divineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">空間転送ポータル - ラルパル<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">サファイアトロット<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">炎角<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ハイランドフォックス<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ホーンゴート<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">カイザーエルク<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">煙霧苔<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">ブレシオの実<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">ベアツリーの葉<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">大牙の化石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">バハ鉱石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">砂銀<br>',
            larpalName: 'ラルパル',
            expDivine1: "踏破スポット<br>神の見守る丘 1",
            expDivine2: "踏破スポット<br>神の見守る丘 2",
            expDivine3: "踏破スポット<br>神の見守る丘 3",
            warpLarpal: "空間転送ポータル<br>ラルパル",
            emFlamingHorns: "ネームドエネミー<br>炎角",
            emSapphireTrot: "ネームドエネミー<br>サファイアトロット",
            
            soundlessName: "鎮まりの山麓",
            soundlessTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">スプーキーゴート<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">悪しき癒し手<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ホーンゴート<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ハイランドフォックス<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリン<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">エルダーゴブリン<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリンセージ<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">丸水草<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">高原ユリ<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">碧玉<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">静夜鉱<br>',
            bergmahlName: "ベルクマール",
            emSpookyGoat: "ネームドエネミー<br>スプーキーゴート",
            emEvilHealer: "ネームドエネミー<br>悪しき癒し手",
            expSoundless1: "踏破スポット<br>鎮まりの山麓 1",
            expSoundless2: "踏破スポット<br>鎮まりの山麓 2",
            expSoundless3: "踏破スポット<br>鎮まりの山麓 3",
            
            fielName: "フィエル嶺水池",
            fielTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">トリックエルダー<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ホーンゴート<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ハイランドフォックス<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">カイザーエルク<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリン<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">ゴブリンセージ<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">エルダーゴブリン<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">流木の枝<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">アクアフラワー<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">甘露の種<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">湧水石<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">冷震銅<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">貝の化石<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">スパイクフィッシュ<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">ニッコウガイ<br>',
            expFiel1: "踏破スポット<br>フィエル嶺水池 1",
            expFiel2: "踏破スポット<br>フィエル嶺水池 2",
            emTrickElder: "ネームドエネミー<br>トリックエルダー",
            yellow2: '黄色リキッドメモリ 2<br><br>ゴブリンの集落でテントの真ん中を調べると解放',
            msq33: 'メインクエスト 33<br>神懸の御柱<br><br>神の見守る丘　神懸の御柱へ行く',
            msq34: 'メインクエスト 34<br>神懸の御柱<br><br>ラルパルで作戦会議をする',
            msq35: 'メインクエスト 35<br>神懸の御柱<br><br>鎮まりの山麓　ベルクマールの巡礼団に話す',
            msq36: 'メインクエスト 36<br>神懸の御柱<br><br>御柱の門番に許可証を見せる',
            msq37: 'メインクエスト 37<br>神懸の御柱<br><br>御柱の頂上を目指す',
            msq38: 'メインクエスト 38<br>神懸の御柱<br><br>ラルパルにエーリンゼたちを連れて行く',
            
            
            // Toggle titles
            togtextWarp: '空間転送ポータル',
            togtextMSQ: 'メインクエスト',
            togtextImaj: 'イマジン研究所',
            togtextCraft: '転球練成儀',
            togtextReconstructor: '武器改造師',
            togtextClass: 'クラスマスター',
            togtextMemory: 'リキッドメモリスタンド',
            togtextExchange: '交換所',
            togtextPotshop: '道具屋',
            togtextWepshop: '武器屋',
            togtextStorage: '倉庫',
            togtextElite: 'ネームドエネミー',
            togtextDung: 'ダンジョン入り口',
            togtextRaid: 'レイド入り口',
            togtextRock: '鉱石系素材',
            togtextPlant: '植物系素材',
            togtextOcean: '水産物系素材',
            togtextPoint: '踏破スポット',
            togtextLiquid: 'リキッドメモリ',
            togglesHeader: '表示・未表示',
            
            
            
            // Search list
            listAndra: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">アンドラ盆地',
            listCalm: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">夕凪の段丘',
            listMinster: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">ミンスター丘陵',
            listMinsterhorn: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">ミンスターホルン',
            listSkyquake: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">海鳴りの草原',
            listAsteria: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 0; width: 1.823vw;">アステリア平原',
            listBahamar: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 0; width: 1.823vw;">バハマール高原',
            listDivine: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">神の見守る丘',
            listLarpal: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">ラルパル',
            listFiel: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">フィエル嶺水池',
            listSoundless: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">鎮まりの山麓',
            listBergmahl: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">ベルクマール',
            listAsterleeds: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.7em 0; width: 1.823vw;">アステルリーズ<br>',
            searchTitle: 'ゾーンやエリア名で検索'
        },
        
        // PORTUGUESE 
        {
            storage: "Armazém",
            memorystand: 
                'Banca de Memória Líquida<br><img src="images/liquidmemory%20yellow%20fad459.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Chance aumentada de construir armas de nível mais alto<br><img src="images/liquidmemory%20blue%206ac7cd.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Aumento de XP recebido para up de armas<br><img src="images/liquidmemory%20red%20db516a.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Redução no tempo de coleta<br><img src="images/liquidmemory%20purple%2079389e.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Aumento na taxa de drop dos inimigos<br><img src="images/liquidmemory%20green%2045b343.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Redução de preço nas lojas de NPCs',
            imajhouse: "Instituto de Pesquisa Imajinn",
            classmaster: "Mestre de Classe",
            wepshop: "Loja de Armas",
            potshop: "Loja de Poções",
            craftmachine: "Máquina de Construção",
            reconstructor: "Reconstrutor de Armas",
            gcshop: "Loja GC",
            timedquest: "",
            yellow1:
                'Memória Líquida Amarela 1<br><br>Complete a Quest de Orvis<br>"Pressa é a Inimiga da Perfeição" (Nv. 24+)<br><br>Recupere 3 Bagagens do Orvis de<br>Goblin Ancião Incandescente em<br>Vale Garra do Dragão [Exploração Livre]',
            green1: 
                'Memória Líquida Verde 1<br><br>Complete a Quest de Godo<br>"Termos de Troca por um<br>Odor Sinistro" (Nv. 19+)<br><br>Derrote uma Cabra Sinistra<br>em Sopé Silencioso<br>e relate a Godo',
            blue2: [
                'Memória Líquida Azul 2<br><br>Examine o Leme atrás<br>do caramanchão no segundo andar<br> do Pavilhão do Leme Giratório',
                    
                '青いリキッドメモリ 2<br><br>廻る舵輪亭の２階で演奏者<br>の後ろにある舵を調べると解放'
            ],
            blue1: 
                'Memória Líquida Azul 1<br><br>Complete a Quest da Patty<br>"Aprendiz Aflito" (Nv. 13+)<br><br>Obtenha um Extrator de Engrama<br>(complete o Pilar da Divindade<br>[Pesquisa Avançada]) e traga para<br>Hanna fora do Pilar',
            red2: 
                'Memória Líquida Vermelha 2<br><br>Examine as garrafas no<br>balcão ao lado da<br>Banca de Memórias',
            red1: 
                'Memória Líquida Vermelha 1<br><br>Complete a Quest<br>"Bem-vindo à Banca de Memórias!" (Nv. 12+)<br><br>Ouça a explicação da<br>atendente da Banca de Memórias',
            purple1: 
                'Memória Líquida Roxa 1<br><br>Complete a Quest de Louise<br>"O último trabalho da pesquisadora!" (Nv. 28+)<br><br>Traga os seguintes itens à Louise:<br>5 Pedras da Lua Cheia<br>(Terraço Vespertino/período noturno/andar de cima)<br>5 Conchas do Raiar do Sol<br>(Lago Fiel/período diurno/rago)',
            warpfrontier: 'Portal de Dobra<br>Estação da Fronteira',
            warpcoatofarms: 'Portal de Dobra<br>Plaza do Brazão',
            warpcitygate: 'Portal de Dobra<br>Praça da Cidade',
            warpbeach: 'Portal de Dobra<br>Praia Asterleeds',
            warpport: 'Portal de Dobra<br>Porto Asterleeds',
            warpinn: 'Portal de Dobra<br>A Moeda de Duas Faces',
            warparena: 'Portal de Dobra<br>Pavilhão do Leme Giratório',
            warpshrine: 'Portal de Dobra<br>Entrada da Arena',
            warppavilion: 'Portal de Dobra<br>Entrada do Santuário',
            msq1: 'Quest da História Principal 1<br>"Em Busca de Memórias"<br><br>Fale com o dono da<br>taverna no primeiro andar',
            msq2: 'Quest da História Principal 2<br>"Em Busca de Memórias"<br><br>Saia da taverna',
            msq3: 'Quest da História Principal 3<br>"Em Busca de Memórias"<br><br>Compre poções de vida para uso em campo',
            msq4: 'Quest da História Principal 4<br>"Em Busca de Memórias"<br><br>Fale com Feste em<br>frente ao Armazém',
            msq5: 'Quest da História Principal 5<br>"Em Busca de Memórias"<br><br>Vá até a Praça da Cidade',
            msq6: 'Quest da História Principal 6<br>"Em Busca de Memórias"<br><br>Examine um Portal de Dobra',
            msq7: 'Quest da História Principal 7<br>"Em Busca de Memórias"<br><br>Saia da cidade',
            msq10: 'Quest da História Principal 10<br>"Em Busca de Memórias"<br><br>Retorne à Estação da Fronteira',
            msq11: 'Quest da História Principal 11<br>"Em Busca de Memórias"<br><br>Fale com Jake na<br>Estação da Fronteira',
            msq12: 'Quest da História Principal 12<br>"Registro do Aventureiro"<br><br>Fale com Myulie na<br>Estação da Fronteira',
            msq14: 'Quest da História Principal 14<br>"Registro do Aventureiro"<br><br>Crie uma poção de vida<br>para uso em campo',
            msq15: 'Quest da História Principal 15<br>"Registro do Aventureiro"<br><br>Relate à Myulie<br>na Estação da Fronteira',
            msq16: 'Quest da História Principal 16<br>"Eleve seu Nível de Aventureiro!"<br><br>Fale com Jake na<br> Estação da Fronteira<br>(Rank de Aventureiro Nec. 2+)',
            msq17: 'Quest da História Principal 17<br>"Eleve seu Nível de Aventureiro!"<br><br>Fale com Feste<br>',
            msq18: 'Quest da História Principal 18<br>"Eleve seu Nível de Aventureiro!"<br><br>Vá ao Instituto<br>de Pesquisa Imajinn<br>',
            msq20: 'Quest da História Principal 20<br>"Eleve seu Nível de Aventureiro!"<br><br>Vá ao Instituto<br>de Pesquisa Imajinn<br>',
            msq21: 'Quest da História Principal 21<br>"Eleve seu Nível de Aventureiro!"<br><br>Crie o Imajinn Interno<br>"Diranks (coragem)"',
            msq22: 'Quest da História Principal 22<br>"Eleve seu Nível de Aventureiro!"<br><br>Alcance o Rank de Aventureiro 2<br>(no menu de opções)',
            msq23: 'Quest da História Principal 23<br>"Vale Garra do Dragão"<br><br>Fale com Jake sendo um<br>Aventureiro Rank 2',
            msq26: 'Quest da História Principal 26<br>"Vale Garra do Dragão"<br><br>Receba as recompensas de Jake<br>na Estação da Fronteira',
            msq27: 'Quest da História Principal 27<br>"O que é um &#39;visitante&#39;..?"<br><br>Fale com o dono da taverna<br>na Moeda de Duas Faces',
            msq28: 'Quest da História Principal 28<br>"O que é um &#39;visitante&#39;..?"<br><br>Pergunte sobre &#39;visitantes&#39;<br>no Santuário Bapharia',
            asterleedsToSkyquake: "Para Campos Tremecéus",
            asterleedsToSkyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Leitão Rosa<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">Leitão<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">Raposa Terrestre<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw">Flor Lamusa<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">Pedra Ondulada<br>',
            
            
            // Asteria Plain
            skyquakeToAsterleeds: "Para Asterleeds",
            // 10 things
            skyquakeToAsterleedsTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate<br><img src="images/map/imajinnHouse.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Instituto de Pesquisa Imajinn<br><img src="images/map/crafting.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Máquina de Construção<br><img src="images/map/reconstructor.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Reconstrutor de Armas<br><img src="images/map/classmaster.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Mestre de Classe<br><img src="images/map/liquidmemory.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Banca de Memória Líquida<br><img src="images/map/exchange.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Loja GC<br><img src="images/map/potion.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Loja de Poções<br><img src="images/map/weapon.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Loja de Armas<br><img src="images/map/storage.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Armazém<br>',
            minsterToDivine: "Para Colina do Santuário",
            // 12 things
            minsterToDivineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Portal de Dobra - Larpal<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Trote Safira<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Chifre Flamejante<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Raposa da Terra Alta<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw; width: 1.823vw;">Cabra Chifruda<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Alce Imperador<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Musgo Defumado<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Fruta Blesio<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Folha de Árvorurso<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Fóssil de Presa Grande<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Minério de Baha<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Areia de Prata<br>',
            skyquakeName: "Campos Tremecéus",
            // 6 things
            skyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Leitão Rosa<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Leitão<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Raposa Terrestre<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Flor Lamusa<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pedra Ondulada<br>',
            expSkyquake1: 'Ponto de Exploração<br>Campos Tremecéus 1',
            expSkyquake2: 'Ponto de Exploração<br>Campos Tremecéus 2',
            expSkyquake3: 'Ponto de Exploração<br>Campos Tremecéus 3',
            expSkyquake4: 'Ponto de Exploração<br>Campos Tremecéus 4',
            expSkyquake5: 'Ponto de Exploração<br>Campos Tremecéus 5',
            emPiglet: 'Monstro Elite<br>Leitão Rosa',
            
            
            andraName: "Bacia Andra",
            // 9 things
            andraTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Presa Verde Profundo<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Presa de Ferro<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Rumble Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Javali Tirano<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Goblin Ancião<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Galho de Cedro Andra<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Grama Alta<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Cristal Jira<br>',
            expAndra1: 'Ponto de Exploração<br>Bacia Andra 1',
            expAndra2: 'Ponto de Exploração<br>Bacia Andra 2',
            expAndra3: 'Ponto de Exploração<br>Bacia Andra 3',
            expAndra4: 'Ponto de Exploração<br>Bacia Andra 4',
            emIronFang: 'Monstro Elite<br>Presa de Ferro',
            emDeepGreen: 'Monstro Elite<br>Presa Verde Profundo',
            
            calmName: 'Terraço Vespertino',
            // 14 things
            calmTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Ouro Feroz<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Flame Prison<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Ancião<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Javali Tirano<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Javali Tirano Incandescente<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Ogre<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Galho de Cedro do Crepúsculo<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Grama de Poeira Estelar<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Fruta Baule<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Fragmento de Meteorito<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Fóssil de Musgo Magna<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Minério de Rimeril<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pedra da Lua Cheia<br>',
            expCalm1: 'Ponto de Exploração<br>Terraço Vespertino 1',
            expCalm2: 'Ponto de Exploração<br>Terraço Vespertino 2',
            expCalm3: 'Ponto de Exploração<br>Terraço Vespertino 3',
            emFlamePrison: 'Monstro Elite<br>Prisão Fulgor',
            emFerociousGold: 'Monstro Elite<br>Ouro Feroz',
            
            minsterName: 'Colinas Minster',
            // 12 things
            minsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">Vale Garra do Dragão<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Portal de Dobra - Minsterhorn<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Besta Feroz<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Respingo Vermelho<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Leitão<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Raposa Terrestre<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Grama da Alvorada<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Galho de Cedro Andra<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Minério de Ferro<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Minério de Asterium<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Achigã<br>',
            minsterhornName: 'Minsterhorn',
            minsterhornTool: 'npc Milrain<br>npc Stadst<br>npc Feste<br>',
            warpminsterhorn: 'Portal de Dobra<br>Minsterhorn',
            expMinster1: "Ponto de Exploração<br>Colinas Minster 1",
            expMinster2: "Ponto de Exploração<br>Colinas Minster 2",
            expMinster3: "Ponto de Exploração<br>Colinas Minster 3",
            expMinster4: "Ponto de Exploração<br>Colinas Minster 4",
            expMinster5: "Ponto de Exploração<br>Colinas Minster 5",
            expMinster6: "Ponto de Exploração<br>Colinas Minster 6",
            expMinster7: "Ponto de Exploração<br>Colinas Minster 7",
            expMinster8: "Ponto de Exploração<br>Colinas Minster 8",
            emFerociousBeast: 'Monstro Elite<br>Besta Feroz',
            emRedSplash: 'Monstro Elite<br>Respingo Vermelho',
            
            // 18 things
            dragonclawTool: 'Vale Garra do Dragão<br>[Exploração Livre]<br><br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Saqueador do Vale<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Conjurador Arrogante<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Berrante<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Presa-rei Furioso<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Raposa Terrestre<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Javali Tirano<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Javali Tirano Incandescente<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Incandescente<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Ancião<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Ancião Incandescente<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Flor Longan<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Veneno de Dragão<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Grama da Estrela Congela<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pylud Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Minério de Dragão Uivante<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Fóssil de Pterossauro<br>',
            purple2: 'Memória Líquida Roxa 2<br><br>Examine as rochas perto do penhasco <br>na área mais profunda<br>(onde o Presa-rei Furioso aparece)',
            msq8: 'Quest da História Principal 8<br>"Em Busca de Memórias"<br><br>Vá até as ruínas do penhasco',
            msq9: 'Quest da História Principal 9<br>"Em Busca de Memórias"<br><br>Vá até o local em que você acordou',
            msq13: 'Quest da História Principal 13<br>"Registro do Aventureiro"<br><br>Colete 3 plantas não<br>identificadas em Campos Tremecéus',
            msq19: 'Quest da História Principal 19<br>"Eleve seu Nível de Aventureiro!"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Obtenha um Cristal Reikrid',
            msq24: 'Quest da História Principal 24<br>"Vale Garra do Dragão"<br><br>Encontre Jack em<br>Vale Garra do Dragão',
            msq25: 'Quest da História Principal 25<br>"Vale Garra do Dragão"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Derrote os monstros em<br>Vale Garra do Dragão',
            msq29: 'Quest da História Principal 29<br>"O que é um &#39;visitante&#39;..?"<br><br>Vá até Minsterhorn<br>em Colinas Minster',
            msq30: 'Quest da História Principal 30<br>"O que é um &#39;visitante&#39;..?"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Procure pelo Padre<br>nas ruínas da Torre Alta<br>em Bacia Andra',
            msq31: 'Quest da História Principal 31<br>"O que é um &#39;visitante&#39;..?"<br><br>Retorne até Milrain e faça um relatório',
            msq32: 'Quest da História Principal 32<br>"Pilar da Divindade"<br><br>Fale com Feste após<br>alcançar Rank de Aventureiro 3',
            
            
            // Bahamar highlands
            divineToMinster: "Para Colinas Minster",
            divineToMinsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">Vale Garra do Dragão<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Portal de Dobra - Minsterhorn<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Besta Feroz<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Respingo Vermelho<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Raposa Terrestre<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Grama do Alvorecer<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Galho de Cedro Andra<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Minério de Asterium<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Achigã<br>',
            divineName: "Colina do Santuário",
            divineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Portal de Dobra - Larpal<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Trote Safira<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Chifre Flamejante<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Raposa da Terra Alta<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Cabra Chifruda<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Alce Imperador<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Musgo Defumado<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Fruta Blesio<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Folha de Árvorurso<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Fóssil de Presa Grande<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Minério de Baha<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Areia de Prata<br>',
            larpalName: 'Larpal',
            expDivine1: "Ponto de Exploração<br>Colina do Santuário 1",
            expDivine2: "Ponto de Exploração<br>Colina do Santuário 2",
            expDivine3: "Ponto de Exploração<br>Colina do Santuário 3",
            warpLarpal: "Portal de Dobra<br>Larpal",
            emFlamingHorns: "Monstro Elite<br>Chifre Flamejante",
            emSapphireTrot: "Monstro Elite<br>Trote Safira",
            
            soundlessName: "Sopé Silencioso",
            soundlessTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Cabra Sinistra<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Curandeiro Maligno<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Cabra Chifruda<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Raposa da Terra Alta<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Ancião<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Góblin Sábio<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Planta Circular Aquática<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Lírio do Planalto<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pedra Jaspe<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pedra da Noite Tranquila<br>',
            bergmahlName: "Bergmahl",
            emSpookyGoat: "Monstro Elite<br>Cabra Sinistra",
            emEvilHealer: "Monstro Elite<br>Curandeiro Maligno",
            expSoundless1: "Ponto de Exploração<br>Sopé Silencioso 1",
            expSoundless2: "Ponto de Exploração<br>Sopé Silencioso 2",
            expSoundless3: "Ponto de Exploração<br>Sopé Silencioso 3",
            
            fielName: "Lago Fiel",
            fielTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Ancião Trapaceiro<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Cabra Chifruda<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Raposa da Terra Alta<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Alce Imperador<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Sábio<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Ancião<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Galho de Madeira Torcida<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Flor Aquática<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Semente de Nectar<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pedra das Águas de Nascente<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Cobre Oscilante<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Fóssil de Concha<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Peixe-expinho<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Concha do Raiar do Sol<br>',
            expFiel1: "Ponto de Exploração<br>Lago Fiel 1",
            expFiel2: "Ponto de Exploração<br>Lago Fiel 2",
            emTrickElder: "Monstro Elite<br>Ancião Trapaceiro",
            yellow2: 'Memória Líquida Amarela 2<br><br>Examine o solo entre as<br>tendas na instalação dos Goblins',
            msq33: 'Quest da História Principal 33<br>"Pilar da Divindade"<br><br>Vá até o Pilar da Divindade<br>na Colina do Santuário',
            msq34: 'Quest da História Principal 34<br>"Pilar da Divindade"<br><br>Conduza uma reunião<br>estratégica em Larpal',
            msq35: 'Quest da História Principal 35<br>"Pilar da Divindade"<br><br>Fale com os<br>peregringos em Bergmahl no<br>Sopé Silencioso',
            msq36: 'Quest da História Principal 36<br>"Pilar da Divindade"<br><br>Apresente seu distintivo de permissão<br>para o guarda no Pilar',
            msq37: 'Quest da História Principal 37<br>"Pilar da Divindade"<br><br>Alcance o topo do Pilar',
            msq38: 'Quest da História Principal 38<br>"Pilar da Divindade"<br><br>Escolte Aerinse e<br>os outros até Larpal',
            
            // Toggle titles
            togtextWarp: 'Portal de Dobra',
            togtextMSQ: 'Quest da História Principal',
            togtextImaj: 'Instituto de Pesquisa Imajinn',
            togtextCraft: 'Máquina de Construção',
            togtextReconstructor: 'Reconstrutor de Armas',
            togtextClass: 'Mestre de Classe',
            togtextMemory: 'Banca de Memória Líquida',
            togtextExchange: 'Troca',
            togtextPotshop: 'Loja de Poções',
            togtextWepshop: 'Loja de Armas',
            togtextStorage: 'Armazém',
            togtextElite: 'Monstro Elite',
            togtextDung: 'Entrada da Masmorra',
            togtextRaid: 'Entrada da Incursão',
            togtextRock: 'Recurso de Pedras',
            togtextPlant: 'Recurso de Plantas',
            togtextOcean: 'Recurso Oceânico',
            togtextPoint: 'Ponto de Exploração',
            togtextLiquid: 'Memória Líquida',
            togglesHeader: 'Alternar',
            
            
            // Search list
            listAndra: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Bacia Andra',
            listCalm: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Terraço Vespertino',
            listMinster: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Colinas Minster',
            listMinsterhorn: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Minsterhorn',
            listSkyquake: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Campos Tremecéus',
            listAsteria: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 0; width: 1.823vw;">Plano Asteria',
            listBahamar: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 0; width: 1.823vw;">Terra Alta de Bahamar',
            listDivine: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Colina do Santuário',
            listLarpal: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Larpal',
            listFiel: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Lago Fiel',
            listSoundless: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Sopé Silencioso',
            listBergmahl: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Bergmahl',
            listAsterleeds: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.7em 0; width: 1.823vw;">Asterleeds<br>',
            searchTitle: 'Pesquise Mapa ou Área'
        },
        
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
        $(".lm-yellow2").html(mapText[currentLang].yellow2);
        $(".lm-green1").html(mapText[currentLang].green1);
        $(".lm-green2").html(mapText[currentLang].green2);
        $(".lm-blue2").html(mapText[currentLang].blue2);
        $(".lm-blue1").html(mapText[currentLang].blue1);
        $(".lm-red2").html(mapText[currentLang].red2);
        $(".lm-red1").html(mapText[currentLang].red1);
        $(".lm-purple1").html(mapText[currentLang].purple1);
        $(".lm-purple2").html(mapText[currentLang].purple2);
        $(".warp-frontier").html(mapText[currentLang].warpfrontier);
        $(".warp-coatofarms").html(mapText[currentLang].warpcoatofarms);
        $(".warp-citygate").html(mapText[currentLang].warpcitygate);
        $(".warp-beach").html(mapText[currentLang].warpbeach);
        $(".warp-port").html(mapText[currentLang].warpport);
        $(".warp-inn").html(mapText[currentLang].warpinn);
        $(".warp-arena").html(mapText[currentLang].warparena);
        $(".warp-shrine").html(mapText[currentLang].warpshrine);
        $(".warp-pavilion").html(mapText[currentLang].warppavilion);
        $(".asterleedsToSkyquake").html(mapText[currentLang].asterleedsToSkyquake);
        $(".asterleedsToSkyquakeTool").html(mapText[currentLang].asterleedsToSkyquakeTool);
        $(".msq1").html(mapText[currentLang].msq1);
        $(".msq2").html(mapText[currentLang].msq2);
        $(".msq3").html(mapText[currentLang].msq3);
        $(".msq4").html(mapText[currentLang].msq4);
        $(".msq5").html(mapText[currentLang].msq5);
        $(".msq6").html(mapText[currentLang].msq6);
        $(".msq7").html(mapText[currentLang].msq7);
        $(".msq8").html(mapText[currentLang].msq8);
        $(".msq9").html(mapText[currentLang].msq9);
        $(".msq10").html(mapText[currentLang].msq10);
        $(".msq11").html(mapText[currentLang].msq11);
        $(".msq12").html(mapText[currentLang].msq12);
        $(".msq13").html(mapText[currentLang].msq13);
        $(".msq14").html(mapText[currentLang].msq14);
        $(".msq15").html(mapText[currentLang].msq15);
        $(".msq16").html(mapText[currentLang].msq16);
        $(".msq17").html(mapText[currentLang].msq17);
        $(".msq18").html(mapText[currentLang].msq18);
        $(".msq19").html(mapText[currentLang].msq19);
        $(".msq20").html(mapText[currentLang].msq20);
        $(".msq21").html(mapText[currentLang].msq21);
        $(".msq22").html(mapText[currentLang].msq22);
        $(".msq23").html(mapText[currentLang].msq23);
        $(".msq24").html(mapText[currentLang].msq24);
        $(".msq25").html(mapText[currentLang].msq25);
        $(".msq26").html(mapText[currentLang].msq26);
        $(".msq27").html(mapText[currentLang].msq27);
        $(".msq28").html(mapText[currentLang].msq28);
        $(".msq29").html(mapText[currentLang].msq29);
        $(".msq30").html(mapText[currentLang].msq30);
        $(".msq31").html(mapText[currentLang].msq31);
        $(".msq32").html(mapText[currentLang].msq32);
        $(".msq33").html(mapText[currentLang].msq33);
        $(".msq34").html(mapText[currentLang].msq34);
        $(".msq35").html(mapText[currentLang].msq35);
        $(".msq36").html(mapText[currentLang].msq36);
        $(".msq37").html(mapText[currentLang].msq37);
        $(".msq38").html(mapText[currentLang].msq38);
        $(".minsterName").html(mapText[currentLang].minsterName);
        $(".minsterTool").html(mapText[currentLang].minsterTool);
        $(".minsterhornName").html(mapText[currentLang].minsterhornName);
        $(".minsterhornTool").html(mapText[currentLang].minsterhornTool);
        $(".skyquakeName").html(mapText[currentLang].skyquakeName);
        $(".skyquakeTool").html(mapText[currentLang].skyquakeTool);
        $(".calmName").html(mapText[currentLang].calmName);
        $(".calmTool").html(mapText[currentLang].calmTool);
        $(".andraName").html(mapText[currentLang].andraName);
        $(".andraTool").html(mapText[currentLang].andraTool);
        $(".dragonclawTool").html(mapText[currentLang].dragonclawTool);
        $(".skyquakeToAsterleeds").html(mapText[currentLang].skyquakeToAsterleeds);
        $(".skyquakeToAsterleedsTool").html(mapText[currentLang].skyquakeToAsterleedsTool);
        $(".minsterToDivine").html(mapText[currentLang].minsterToDivine);
        $(".minsterToDivineTool").html(mapText[currentLang].minsterToDivineTool);
        $(".exp-minster1").html(mapText[currentLang].expMinster1);
        $(".exp-minster2").html(mapText[currentLang].expMinster2);
        $(".exp-minster3").html(mapText[currentLang].expMinster3);
        $(".exp-minster4").html(mapText[currentLang].expMinster4);
        $(".exp-minster5").html(mapText[currentLang].expMinster5);
        $(".exp-minster6").html(mapText[currentLang].expMinster6);
        $(".exp-minster7").html(mapText[currentLang].expMinster7);
        $(".exp-minster8").html(mapText[currentLang].expMinster8);
        $(".exp-andra1").html(mapText[currentLang].expAndra1);
        $(".exp-andra2").html(mapText[currentLang].expAndra2);
        $(".exp-andra3").html(mapText[currentLang].expAndra3);
        $(".exp-andra4").html(mapText[currentLang].expAndra4);
        $(".exp-calm1").html(mapText[currentLang].expCalm1);
        $(".exp-calm2").html(mapText[currentLang].expCalm2);
        $(".exp-calm3").html(mapText[currentLang].expCalm3);
        $(".exp-skyquake1").html(mapText[currentLang].expSkyquake1);
        $(".exp-skyquake2").html(mapText[currentLang].expSkyquake2);
        $(".exp-skyquake3").html(mapText[currentLang].expSkyquake3);
        $(".exp-skyquake4").html(mapText[currentLang].expSkyquake4);
        $(".exp-skyquake5").html(mapText[currentLang].expSkyquake5);
        $(".em-ferociousbeast").html(mapText[currentLang].emFerociousBeast);
        $(".em-ferociousgold").html(mapText[currentLang].emFerociousGold);
        $(".em-flameprison").html(mapText[currentLang].emFlamePrison);
        $(".em-piglet").html(mapText[currentLang].emPiglet);
        $(".em-ironfang").html(mapText[currentLang].emIronFang);
        $(".em-deepgreen").html(mapText[currentLang].emDeepGreen);
        $(".em-redsplash").html(mapText[currentLang].emRedSplash);
        $(".warp-minsterhorn").html(mapText[currentLang].warpminsterhorn);
        $(".em-trickelder").html(mapText[currentLang].emTrickElder);
        $(".em-spookygoat").html(mapText[currentLang].emSpookyGoat);
        $(".em-evilhealer").html(mapText[currentLang].emEvilHealer);
        $(".em-flaminghorns").html(mapText[currentLang].emFlamingHorns);
        $(".em-sapphiretrot").html(mapText[currentLang].emSapphireTrot);
        $(".divineName").html(mapText[currentLang].divineName);
        $(".divineTool").html(mapText[currentLang].divineTool);
        $(".soundlessName").html(mapText[currentLang].soundlessName);
        $(".soundlessTool").html(mapText[currentLang].soundlessTool);
        $(".fielName").html(mapText[currentLang].fielName);
        $(".fielTool").html(mapText[currentLang].fielTool);
        $(".exp-divine1").html(mapText[currentLang].expDivine1);
        $(".exp-divine2").html(mapText[currentLang].expDivine2);
        $(".exp-divine3").html(mapText[currentLang].expDivine3);
        $(".exp-soundless1").html(mapText[currentLang].expSoundless1);
        $(".exp-soundless2").html(mapText[currentLang].expSoundless2);
        $(".exp-soundless3").html(mapText[currentLang].expSoundless3);
        $(".exp-fiel1").html(mapText[currentLang].expFiel1);
        $(".exp-fiel2").html(mapText[currentLang].expFiel2);
        $(".divineToMinster").html(mapText[currentLang].divineToMinster);
        $(".divineToMinsterTool").html(mapText[currentLang].divineToMinsterTool);
        $(".warp-larpal").html(mapText[currentLang].warpLarpal);
        $(".larpalName").html(mapText[currentLang].larpalName);
        $(".bergmahlName").html(mapText[currentLang].bergmahlName);
        
        // Toggles 
        $(".togtextWarp").html(mapText[currentLang].togtextWarp);
        $(".togtextMSQ").html(mapText[currentLang].togtextMSQ);
        $(".togtextImaj").html(mapText[currentLang].togtextImaj);
        $(".togtextCraft").html(mapText[currentLang].togtextCraft);
        $(".togtextReconstructor").html(mapText[currentLang].togtextReconstructor);
        $(".togtextClass").html(mapText[currentLang].togtextClass);
        $(".togtextMemory").html(mapText[currentLang].togtextMemory);
        $(".togtextExchange").html(mapText[currentLang].togtextExchange);
        $(".togtextPotshop").html(mapText[currentLang].togtextPotshop);
        $(".togtextWepshop").html(mapText[currentLang].togtextWepshop);
        $(".togtextStorage").html(mapText[currentLang].togtextStorage);
        $(".togtextElite").html(mapText[currentLang].togtextElite);
        $(".togtextDung").html(mapText[currentLang].togtextDung);
        $(".togtextRaid").html(mapText[currentLang].togtextRaid);
        $(".togtextRock").html(mapText[currentLang].togtextRock);
        $(".togtextPlant").html(mapText[currentLang].togtextPlant);
        $(".togtextOcean").html(mapText[currentLang].togtextOcean);
        $(".togtextPoint").html(mapText[currentLang].togtextPoint);
        $(".togtextLiquid").html(mapText[currentLang].togtextLiquid);
        $(".togglesHeader").html(mapText[currentLang].togglesHeader);
        
        
        // Search
        $("#mapSearch").attr("placeholder", mapText[currentLang].searchTitle);
        $(".listAster").html(mapText[currentLang].listAsterleeds);
        $(".listAsteria").html(mapText[currentLang].listAsteria);
        $(".listAndra").html(mapText[currentLang].listAndra);
        $(".listSkyquake").html(mapText[currentLang].listSkyquake);
        $(".listCalm").html(mapText[currentLang].listCalm);
        $(".listMinster").html(mapText[currentLang].listMinster);
        $(".listMinsterhorn").html(mapText[currentLang].listMinsterhorn);
        $(".listBahamar").html(mapText[currentLang].listBahamar);
        $(".listFiel").html(mapText[currentLang].listFiel);
        $(".listSoundless").html(mapText[currentLang].listSoundless);
        $(".listDivine").html(mapText[currentLang].listDivine);
        $(".listLarpal").html(mapText[currentLang].listLarpal);
        $(".listBergmahl").html(mapText[currentLang].listBergmahl);
        
        
        
    }
    
    // Map Switcher
    $(".mapListItem").click(function(){
        
        // Reset MAP NAME opacity and color to original values;
        $(".mapName").removeClass("currentZone");
        $(".mapName").css("opacity","0.6");
        
        // Asteria Plains maps
        if ($(this).is(".listAsteriaPlain")){
            
            // Highlight the map name if a specific map is chosen
            if ($(this).is(".listSkyquake") || $(this).is(".asterleedsToSkyquake")) {
                $(".skyquakeName").addClass("currentZone");
                $(".skyquakeName").css("opacity","1");
            } 
            else if ($(this).is(".listMinster") || $(this).is(".divineToMinster")) {
                $(".minsterName").addClass("currentZone");
                $(".minsterName").css("opacity","1");
            } 
            else if ($(this).is(".listAndra")) {
                $(".andraName").addClass("currentZone");
                $(".andraName").css("opacity","1");
            }
            else if ($(this).is(".listCalm")) {
                $(".calmName").addClass("currentZone");
                $(".calmName").css("opacity","1");
            } 
            else if ($(this).is(".listMinsterhorn")) {
                $(".minsterhornName").addClass("currentZone");
                $(".minsterhornName").css("opacity","1");
            }
            
            // Open the map
            newMap = "#mapAsteriaPlain";
            dispMap();

        }
        
        // Bajamar Highlands maps
        if ($(this).is(".listBahamarHighlands")){
            
            // Highlight the map name if a specific map is chosen
            if ($(this).is(".listDivine") || $(this).is(".minsterToDivine")) {
                $(".divineName").addClass("currentZone");
                $(".divineName").css("opacity","1");
            } 
            else if ($(this).is(".listFiel")) {
                $(".fielName").addClass("currentZone");
                $(".fielName").css("opacity","1");
            } 
            else if ($(this).is(".listSoundless")) {
                $(".soundlessName").addClass("currentZone");
                $(".soundlessName").css("opacity","1");
            }
            else if ($(this).is(".listLarpal")) {
                $(".larpalName").addClass("currentZone");
                $(".larpalName").css("opacity","1");
            }
            else if ($(this).is(".listBergmahl")) {
                $(".bergmahlName").addClass("currentZone");
                $(".bergmahlName").css("opacity","1");
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
        },
    ]
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
            tooltipText: ["Cabra Chifruda<br>Sopé Silencioso","Coleta<br>Colina do Santuário","<br>"],
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
            tooltipText: ["Coleta<br>Colina do Santuário","<br>","<br>"],
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
            recipe: ["<a style='font-size: 1.146vw'><a style='font-size: 1.146vw'>Presa de Javali Tirano Incandescente</a></a>","Grama de Poeira Estelar","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["Aumento de DEF","Aumento de DEX", "Aumento de VIT"],
            tooltipText: ["Javali Tirano Incandescente<br>Terraço Vespertino","Coleta<br>Terraço Vespertino","<br>"],
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
            choice: ["Asteria", "Bahamar", "Regnus", "Prectus"],
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
    
    /* Elements in Portuguese by Ryuno
    
    EARTH
    Terra

Reduz a velocidade de movimento dos inimigos
Quando acumulado suficiente,
imobiliza e causa dano aos inimigos
    
    FIRE
    Fogo

Causa dano de fogo ao longo do tempo
Quando acumulado suficiente,
uma explosão de alto dano ocorre
    
    DARK
    Trevas

Causa dano ao longo do tempo
Quando acumulado suficiente, 
imobiliza e causa dano aos inimigos

    ICE
    Gelo

Reduz a velocidade de movimento dos inimigos
Quando acumulado suficiente, 
congela inimigos e causa dano
    
    LIGHTNING
    Relâmpago

Causa dano elétrico ao longo do tempo e aumenta o intervalo de skill dos inimigos
Quando acumulado suficiente, 
uma explosão de alto dano ocorre
    
    LIGHT
    Luz

Causa dano de luz ao longo do tempo e empurra inimigos para longe
Quando acumulado suficiente, 
uma explosão de alto dano ocorre
    
    
    */
    
    
    
    
    });