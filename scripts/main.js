jQuery(document).ready(function($){

    // MAP things
    var currentMap = $("#mapAsterleeds");
    var tooltip = document.querySelectorAll(".tooltip");
    document.addEventListener('mousemove', trackMouse, false);
    
    // Page switching
    var currentPage = $("#mapContainer");
    function closePages() {
        currentPage.css("display", "none");
        $("#contentViewer").css("display", "none");
    }
    
    // BATTLE IMAJINN
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
    var skillPower = $(".i-infoSkillPower");
    var abil = $(".i-infoAbil");
    var abilPower = $(".i-infoAbilPower");
    var statVal = $(".i-infoStatVal");
    var mat = $(".matItem");
    var matIcon = $(".matIcon");
    var matCount = $(".matCount");
    var recipeToolText = $(".recipeToolText");
    var luno = $(".reqLuno");
    var abilList = $(".abil");
    var listHolder = biHolder;
    
    
    // MENU BUTTONS
    // Page change on menu button click
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
        
        // Close open page
        closePages();
        
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
            if ($(this).is("#buttonWorldMap")) {
                currentPage = $("#mapContainer");
                openWorldMap(currentMap);
            }
            // IMAJINN
            if ($(this).is("#buttonImajinn")) {
                listHolder = biHolder;
                currentPage = $("#ImajinnContainer");
                openImajinn();
            }
            // COMBAT
            if ($(this).is("#buttonCombat")) {
                
            }
            // MSQ
            if ($(this).is("#buttonMSQ")) {
                
            }
            // GUIDE
            if ($(this).is("#buttonGuide")) {
                
            }
            // CRAFTING
            if ($(this).is("#buttonCrafting")) {
                openCrafting();
                currentPage = $("#craftingContainer");
            }
            // LIQUID MEMORY
            if ($(this).is("#buttonLiquidMemory")) {
                
            }
        }
    });
    
    
    // CRAFTING 
    function openCrafting() {
        $("#craftingContainer").css("display", "block");
        $("#contentViewer").css("display", "block");
    }
    
    // Change weapon lists
    $(".wepOption").click(function(){
        $("#aegisWeapons").css("display","none");
        $("#twinWeapons").css("display","none");
        $("#blastWeapons").css("display","none");
        $("#spellWeapons").css("display","none");
        $("#heavyWeapons").css("display","none");
        $("#toggleAegisWep").removeClass("listSelected");
        $("#toggleTwinWep").removeClass("listSelected");
        $("#toggleBlastWep").removeClass("listSelected");
        $("#toggleSpellWep").removeClass("listSelected");
        $("#toggleHeavyWep").removeClass("listSelected");
        
        if ($(this).is("#toggleAegisWep")){
            $("#aegisWeapons").css("display","block");
        } 
        if ($(this).is("#toggleTwinWep")){
            $("#twinWeapons").css("display","block");
        }
        if ($(this).is("#toggleBlastWep")){
            $("#blastWeapons").css("display","block");
        } 
        if ($(this).is("#toggleSpellWep")){
            $("#spellWeapons").css("display","block");
        } 
        if ($(this).is("#toggleHeavyWep")){
            $("#heavyWeapons").css("display","block");
        }
        $(this).addClass("listSelected");
        
    });
    
    
   
    
    
    // MAP
    function openWorldMap(region) {
        $("#mapContainer").css("display", "block");
        $("#contentViewer").css("display", "block");
        region.css("display", "block");
    }
    
    // Write a script to change border color for mapIcons, i.e. if it contains("Exploration Point") it will turn white. Currently have it written as border-color for EACH element, an inefficient code that needs to be optimized.
    
    
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
    
    // Map Switcher
    $(".mapListItem").click(function(){
        
        // Reset MAP NAME opacity and color to original values;
        $(".mapName").css({"opacity": "0.6", "background-color": "#c8c8c8"});
        
        // Asteria Plains maps
        if ($(this).is(".listAsteriaPlain")){
            
            // Highlight the map name if a specific map is chosen
            if ($(this).is(":contains('Skyquake Fields')")) {
                $(".mapName:contains('Skyquake Fields')").css({"opacity": "1", "background-color": "#4a9efa"});
            } 
            else if ($(this).is(":contains('Minster Hills')")) {
                $(".mapName:contains('Minster Hills')").css({"opacity": "1", "background-color": "#4a9efa"});
            } 
            else if ($(this).is(":contains('Andra Basin')")) {
                $(".mapName:contains('Andra Basin')").css({"opacity": "1", "background-color": "#4a9efa"});
            }
            else if ($(this).is(":contains('Calm Eve Terraces')")) {
                $(".mapName:contains('Calm Eve Terraces')").css({"opacity": "1", "background-color": "#4a9efa"});
            } 
            else if ($(this).is(":contains('Minsterhorn')")) {
                $(".mapName:contains('Minsterhorn')").css({"opacity": "1", "background-color": "#4a9efa"});
            }
            
            // Open the map
            currentMap.css("display", "none");
            currentMap = $("#mapAsteriaPlain")
            openWorldMap(currentMap);
        }
        
        
        
        // Bajamar Highlands maps
        if ($(this).is(".listBahamarHighlands")){
            
            // Highlight the map name if a specific map is chosen
            if ($(this).is(":contains('Divine Haven Hill')")) {
                $(".mapName:contains('Divine Haven Hill')").css({"opacity": "1", "background-color": "#4a9efa"});
            } 
            else if ($(this).is(":contains('Fiel Pond')")) {
                $(".mapName:contains('Fiel Pond')").css({"opacity": "1", "background-color": "#4a9efa"});
            } 
            else if ($(this).is(":contains('Soundless Foothills')")) {
                $(".mapName:contains('Soundless Foothills')").css({"opacity": "1", "background-color": "#4a9efa"});
            }
            else if ($(this).is(":contains('Larpal')")) {
                $(".mapName:contains('Larpal')").css({"opacity": "1", "background-color": "#4a9efa"});
            }
            else if ($(this).is(":contains('Bergmahl')")) {
                $(".mapName:contains('Bergmahl')").css({"opacity": "1", "background-color": "#4a9efa"});
            }
            
            // Open the map
            currentMap.css("display", "none");
            currentMap = $("#mapBahamarHighlands")
            openWorldMap(currentMap);
        }
        
        
        
        // Asterleeds map
        if ($(this).is(".listAsterleeds")){
            currentMap.css("display", "none");
            currentMap = $("#mapAsterleeds")
            openWorldMap(currentMap);
        }
    });
    
    // Map Icon Toggles
    $(".mapToggles").click(function(){
        
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
    

    var spacing1 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    
    // BATTLE IMAJINN LIST
    var biHolder = [
        // Pink Piglet ピンクウリボ
        { 
            name: "Pink Piglet",
            image: "images/map/pinkpiglet.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ウリボの安らぎ
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Piglet's Tranquility (heal type)","effectiveness", "175"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+18",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+9",
                    /*DEX*/"+2"
                   ],
            recipe: ["Pink Piglet's Idea","Ripple Stone","Piglet Skin","2,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["1","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Pink Piglet<br>Skyquake Fields","Gather<br>Skyquake Fields","Piglet<br>Skyquake Fields"],
            tooltipImg: []
        },
        // Ferocious Beast 猛る獣
        { 
            name: "Ferocious Beast",
            image: "images/map/ferociousbeast.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // アクトクライ
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Act Cry (support type)","effectiveness", "150"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            recipe: ["Ferocious Beast's Idea","Dawngrass","Rumble Boar's Skin","7,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Ferocious Beast<br>Minster Hills","Gather<br>Minster Hills","Rumble Boar<br>Andra Basin"],
            tooltipImg: []
        },
        // Red Splash 赤い飛沫
        { 
            name: "Red Splash",
            image: "images/map/redsplash.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 兜割り
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Helm Splitter (attack type)","effectiveness", "422"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
                   ],
            recipe: ["Red Splash's Idea","Plateau Lily","Highland Fox Nail","15,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["Damage increase (regular attack)","STR increase", "<br>"],
            tooltipText: ["Red Splash<br>Minster Hills","Gather<br>Soundless Foothills","Highland Fox<br>Divine Haven Hill"],
            tooltipImg: []
        },
        // Deep Green Fang 深緑の牙
        { 
            name: "Deep Green Fang",
            image: "images/map/deepgreenfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 猪突猛進
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Boar Rush (attack type)","effectiveness", "514"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
                   ],
            recipe: ["Deep Green Fang's Idea","Asterbass","Tyrant Boar's Skin","17,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/shell2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Damage increase (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Deep Green Fang<br>Andra Basin","Gather<br>Minster Hills","Tyrant Boar<br>Dragonclaw Valley [Free Exploration]"],
            tooltipImg: []
        },
        // Iron Fang 鉄牙
        { 
            name: "Iron Fang",
            image: "images/map/ironfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // マウンテンスロー
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Mountain Throw (attack type)","effectiveness", "524"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
                   ],
            recipe: ["Iron Fang's Idea","Beartree Leaf","Goblin Mane","20,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Iron Fang<br>Andra Basin","Gather<br>Divine Haven Hill","Goblin<br>Minster hills"],
            tooltipImg: []
        },
        // Flame Prison 炎獄
        { 
            name: "Flame Prison",
            image: "images/map/flamingprison.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // パワースイング
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Power Swing (attack type)","effectiveness", "710"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+3",
                    /*HP*/"+31",
                    /*VIT*/"+4",
                    /*MND*/"+3",
                    /*ATK*/"+19",
                    /*DEX*/"+4"
                   ],
            recipe: ["Flame Prison's Idea","Jasper Stone","Glowing Goblin's Mane","86,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["5","3","3"],
            abilList: ["Reduce cooldown (battle imagine)","Max HP increase", "<br>"],
            tooltipText: ["Flame Prison<br>Calm Eve Terraces","Gather<br>Soundless Foothills","Glowing Goblin<br>Dragonclaw Valley [Free Exploration]"],
            tooltipImg: []
        },
        // Ferocious Gold 猛る金色
        { 
            name: "Ferocious Gold",
            image: "images/map/ferociousgold.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // デスタックル
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Death Tackle (attack type)","effectiveness", "696"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+?",
                    /*VIT*/"+5",
                    /*MND*/"+3",
                    /*ATK*/"+18",
                    /*DEX*/"+3"
                   ],
            recipe: ["Ferocious Gold's Idea","Nectar Seed","Ferocious Beast's Tail","85,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["5","3","1"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Ferocious Gold<br>Calm Eve Terraces","Gather<br>Fiel Pond","Ferocious Beast<br>Minster Hills"],
            tooltipImg: []
        },
        // Sapphire Trot サファイアトロット
        { 
            name: "Sapphire Trot",
            image: "images/map/sapphiretrot.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 落石牙
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Stone Fang Drop (attack type)","effectiveness", "483"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+19",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+10",
                    /*DEX*/"+4"
                   ],
            recipe: ["Sapphire Trot's Idea","Andra Cedar Twig","Elder Goblin's Mane","25,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Crit rate increase","DEX increase", "<br>"],
            tooltipText: ["Sapphire Trot<br>Divine Haven Hill","Gather<br>Minster Hills","Elder Goblin<br>Andra Basin"],
            tooltipImg: []
        },
        // Flaming Horns 炎角
        { 
            name: "Flaming Horns",
            image: "images/map/flaminghorns.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // カイザーブラスト
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Kaiser Blast (attack type)","effectiveness", "493"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+23",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+12",
                    /*DEX*/"+4"
                   ],
            recipe: ["Flaming Horns' Idea","Blesio Nut","Goblin Sage's Mane","26,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Flaming Horns<br>Divine Haven Hill","Gather<br>Divine Haven Hill","Goblin Sage<br>Soundless Foothills"],
            tooltipImg: []
        },
        // Spooky Goat スプーキーゴート
        { 
            name: "Spooky Goat",
            image: "images/map/spookygoat.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ゴートヘイスト
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goat Haste (support type)","effectiveness", "130"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+27",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+14",
                    /*DEX*/"+5"
                   ],
            recipe: ["Spooky Goat's Idea","Sunset Cedar Twig","Glowing Tyrant Boar Skin","45,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Spooky Goat<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Glowing Tyrant Boar<br>Dragonclaw Valley [Free Exploration]"],
            tooltipImg: []
        },
        // Evil Healer 悪しき癒し手
        { 
            name: "Evil Healer",
            image: "images/map/evilhealer.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // エリアヒール
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Area Heal (heal type)","effectiveness", "?"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
                   ],
            recipe: ["Evil Healer's Idea","Rimeril Ore","Ogre Bone","56,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Evil Healer<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Ogre<br>Calm Eve Terraces"],
            tooltipImg: []
        },
        // Trick Elder トリックエルダー
        { 
            name: "Trick Elder",
            image: "images/map/trickelder.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // エルダークリスタル
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Elder Crystal (attack type)","effectiveness", "741"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+32",
                    /*VIT*/"+4",
                    /*MND*/"+6",
                    /*ATK*/"+18",
                    /*DEX*/"+6"
                   ],
            recipe: ["Trick Elder's Idea","Dragon Venom","Deep Green Fang's Skin","130,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["3","3","1"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Dragonclaw Valley [Free Exploration]","Deep Green Fang<br>Andra Basin"],
            tooltipImg: []
        },
        // Elder Goblin エルダーゴブリン
        { 
            name: "Elder Goblin",
            image: "images/map/eldergoblin.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ファイアボール
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Fireball (attack type)","effectiveness", "?"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+?",
                    /*INT*/"+?",
                    /*HP*/"+?",
                    /*VIT*/"+?",
                    /*MND*/"+?",
                    /*ATK*/"+?",
                    /*DEX*/"+?"
                   ],
            recipe: ["Elder Goblin's Idea","Magna Moss Fossil","Kaiser Elk Fur","43,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Arrogant Conjurer<br>Dragonclaw Valley [Free Exploration]","Gather<br>Calm Eve Terraces","Kaiser Elk<br>Divine Haven Hill"],
            tooltipImg: []
        },
        // Goblin ゴブリン
        { 
            name: "Goblin",
            image: "images/map/goblin.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ゴブリンスタブ
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Stab (attack type)","effectiveness", "414"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
                   ],
            recipe: ["Goblin's Idea","Iron Ore","Land Fox Tail","9,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["Damage increase (tactical skill 1)","STR increase", "<br>"],
            tooltipText: ["Valley Raider<br>Dragonclaw Valley [Free Exploration]","Gather<br>Skyquake Fields","Land Fox<br>Skyquake Fields"],
            tooltipImg: []
        },
        // Land Fox ランドフォックス
        { 
            name: "Land Fox",
            image: "images/map/landfox.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // クラウンストライク
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Crown Strike (attack type)","effectiveness", "669"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            recipe: ["Land Fox's Idea","Lamusa Flower","Pink Piglet's Skin","1,500"],
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["1","3","1"],
            abilList: ["Crit damage increase","DEX increase", "<br>"],
            tooltipText: ["Loudshot<br>Dragonclaw Valley [Free Exploration]","Gather<br>Skyquake Fields","Pink Piglet<br>Skyquake Fields"],
            tooltipImg: []
        },
        // Tyrant Boar タイラントボア
        { 
            name: "Tyrant Boar",
            image: "images/map/tyrantboar.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 猟犬殺し
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Hound Killer (attack type)","effectiveness", "504"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
                   ],
            recipe: ["Tyrant Boar's Idea","Sandsilver","Horn Goat's Fur","45,000"],
            iconSrc: ["images/map/dungeon2.svg","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["2","3","3"],
            abilList: ["Damage increase (battle imagine)","ATK increase", "<br>"],
            tooltipText: ["Clear Arena [C Rank]","Gather<br>Divine Haven Hill","Horned Goat<br>Fiel Pond"],
            tooltipImg: []
        },
        // Horned Goat ホーンゴート
        { 
            name: "Horned Goat",
            image: "images/map/horngoat.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ビハインドキック
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Back Kick (attack type)","effectiveness", "593"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+3",
                    /*HP*/"+27",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+14",
                    /*DEX*/"+5"
                   ],
            recipe: ["Horned Goat's Idea","Silver Ore","Glowing Elder Goblin's Mane","83,000"],
            iconSrc: ["images/map/dungeon2.svg","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (long-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [B Rank]","Gather<br>Fiel Pond","Glowing Elder Goblin<br>Dragonclaw Valley [Free Exploration]"],
            tooltipImg: []
        },
        // Goblin Sage ゴブリンセージ
        { 
            name: "Goblin Sage",
            image: "images/map/goblinsage.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ゴブリンセージの調律
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Sage's Tuning (heal type)","effectiveness", "323"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+28",
                    /*VIT*/"+3",
                    /*MND*/"+5",
                    /*ATK*/"+16",
                    /*DEX*/"+5"
                   ],
            recipe: ["Goblin Sage's Idea","Spike Fish","Sapphire Trot's Fang","120,000"],
            iconSrc: ["images/map/dungeon2.svg","images/map/shell2.svg","images/map/elitemonster.png"],
            amt: ["5","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Clear Arena [A Rank]","Gather<br>Fiel Pond","Sapphire Trot<br>Divine Haven Hill"],
            tooltipImg: []
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "Kaiser Elk",
            image: "images/map/kaiserelk.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // クラッパーホーン
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Clapper Horn (attack type)","effectiveness", "756"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+35",
                    /*VIT*/"+4",
                    /*MND*/"+6",
                    /*ATK*/"+19",
                    /*DEX*/"+6"
                   ],
            recipe: ["Kaiser Elk's Idea","Longan Flower","Evil Healer's Mane","140,000"],
            iconSrc: ["images/map/dungeon2.svg","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["7","3","1"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [S Rank]","Gather<br>Dragonclaw Valley [Free Exploration]","Evil Healer<br>Soundless Foothills"],
            tooltipImg: []
        },
        // Raging Kingfang 荒ぶる牙王
        { 
            name: "Raging Kingfang",
            image: "images/map/ragingkingfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // タイラントアサルト
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Tyrant Assault (attack type)","effectiveness", "787"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+34",
                    /*VIT*/"+6",
                    /*MND*/"+4",
                    /*ATK*/"+20",
                    /*DEX*/"+4"
                   ],
            recipe: ["Raging Kingfang's Idea","Shell Fossil","Flame Prison's Bone","190,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/elitemonster.png"],
            amt: ["7","3","1"],
            abilList: ["Reduce cooldown (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Raging Kingfang<br>Dragonclaw Valley [Free Exploration]","Gather<br>Fiel Pond","Flame Prison<br>Calm Eve Terraces"],
            tooltipImg: []
        },
        
        // Sealed Atrocity 封印されし暴虐
        { 
            name: "Sealed Atrocity",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // アースクエイク
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Earthquake (attack type)","effectiveness", "802"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+35",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+21",
                    /*DEX*/"+5"
                   ],
            recipe: ["Obtained as a Quest Reward", "<br>", "<br>", "0"],
            iconSrc: ["images/map/quest2.svg","",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete quest "Collect Battle Imagine! #2"<br><br>After completing "Collect Battle Imagine! #1", craft Deep Green Fang, Iron Fang, Sapphire Trot, and Spooky Goat',"<br>","<br>"],
            tooltipImg: []
        },
        // Plidoke プリドーク
        { 
            name: "Plidoke",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // スライサーアーム
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Slicer Arm (attack type)","effectiveness", "772"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+37",
                    /*VIT*/"+6",
                    /*MND*/"+4",
                    /*ATK*/"+20",
                    /*DEX*/"+5"
                   ],
            recipe: ["Obtained as a Quest Reward", "<br>", "<br>", "0"],
            iconSrc: ["images/map/quest2.svg","",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete quest "Collect Battle Imagine! #3"<br><br>After completing "Collect Battle Imagine! #2", craft ',"<br>","<br>"],
            tooltipImg: []
        },
    ]
    
    // INNER IMAJINN LIST
    var iiHolder = [
        
        // Dyranks
        { 
            name: "Dyranks (courage)",
            image: "images/crafting/ii1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","Courage"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+12",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+1"
                   ],
            recipe: ["Reikrid Crystal","<br>","<br>","1,000"],
            iconSrc: ["images/map/dungeon2.svg","",""],
            amt: ["1","<br>","<br>"],
            abilList: ["Max HP increase","<br>", "<br>"],
            tooltipText: ["Clear Dungeon<br>Reikrid Tunnels","<br>","<br>"],
            tooltipImg: []
        },
        // Corjun
        { 
            name: "Corjun (mystery)",
            image: "images/crafting/ii2L.png",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","Mystery"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+5",
                    /*HP*/"+20",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+6",
                    /*DEX*/"+4"
                   ],
            recipe: ["Land Fox Nail","Asterium Ore","<br>","9,000"],
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["8","15","<br>"],
            abilList: ["ATK increase","<br>", "<br>"],
            tooltipText: ["Land Fox<br>Minster Hills","Gather<br>Minster Hills","<br>"],
            tooltipImg: []
        },
        // Mipect
        { 
            name: "Mipect (hope)",
            image: "images/crafting/ii3L.png",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","Hope"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+3",
                    /*HP*/"+25",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+0"
                   ],
            recipe: ["Goblin Nail","Jira Crystal","<br>","10,000"],
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["10","10","<br>"],
            abilList: ["Max Stamina increase","<br>", "<br>"],
            tooltipText: ["Goblin<br>Andra Basin","Gather<br>Andra Basin","<br>"],
            tooltipImg: []
        },
        // Proxyx
        { 
            name: "Proxyx (courage)",
            image: "images/crafting/ii4L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","Courage"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+0",
                    /*HP*/"+36",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+13",
                    /*DEX*/"+4"
                   ],
            recipe: ["Horned Goat Bone","Smoky Moss","<br>","60,000"],
            iconSrc: ["images/map/combat2.svg","images/map/flower2.svg",""],
            amt: ["12","20","<br>"],
            abilList: ["Max HP increase","VIT increase", "STR increase"],
            tooltipText: ["Horned Goat<br>Soundless Foothills","Gather<br>Divine Haven Hill","<br>"],
            tooltipImg: []
        },
        // Latepect
        { 
            name: "Latepect (hope)",
            image: "images/crafting/ii5L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","Hope"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+4",
                    /*HP*/"+38",
                    /*VIT*/"+6",
                    /*MND*/"+5",
                    /*ATK*/"+11",
                    /*DEX*/"+0"
                   ],
            recipe: ["Large Fang Fossil","<br>","<br>","85,000"],
            iconSrc: ["images/map/rock2.svg","",""],
            amt: ["25","<br>","<br>"],
            abilList: ["Max Stamina increase","INT increase", "MND increase"],
            tooltipText: ["Gather<br>Divine Haven Hill","<br>","<br>"],
            tooltipImg: []
        },
        // Carcon
        { 
            name: "Carcon (mystery)",
            image: "images/crafting/ii6L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","Mystery"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+?",
                    /*INT*/"+?",
                    /*HP*/"+?",
                    /*VIT*/"+?",
                    /*MND*/"+?",
                    /*ATK*/"+?",
                    /*DEX*/"+?"
                   ],
            recipe: ["Glowing Goblin's Nail","Pterosaur Fossil","<br>","240,000"],
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["10","35","<br>"],
            abilList: ["ATK increase","STR increase", "DEX increase"],
            tooltipText: ["Glowing Goblin<br>Dragonclaw Valley [Free Exploration]","Gather<br>Dragonclaw Valley [Free Exploration]","<br>"],
            tooltipImg: []
        },
        // Parbury
        { 
            name: "Parbury (ambition)",
            image: "images/crafting/ii7L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","Ambition"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+34",
                    /*VIT*/"+4",
                    /*MND*/"+0",
                    /*ATK*/"+12",
                    /*DEX*/"+6"
                   ],
            recipe: ["Glowing Tyrant Boar's Fang","Stardust Grass","<br>","500,000"],
            iconSrc: ["images/map/combat2.svg","images/map/flower2.svg",""],
            amt: ["15","40","<br>"],
            abilList: ["DEF increase","DEX increase", "VIT increase"],
            tooltipText: ["Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces","<br>"],
            tooltipImg: []
        },
        // Sanak'ta
        { 
            name: "Sanak'ta (affection)",
            image: "images/crafting/ii8L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","Affection"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+5",
                    /*HP*/"+30",
                    /*VIT*/"+0",
                    /*MND*/"+6",
                    /*ATK*/"+10",
                    /*DEX*/"+6"
                   ],
            recipe: ["Trick Elder's Nail","Welling Water Stone","<br>","900,000"],
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg",""],
            amt: ["1","50","<br>"],
            abilList: ["Healing increase","MND increase", "INT increase"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Fiel Pond","<br>"],
            tooltipImg: []
        }
    ]
    
    // Check if battle or inner imajinn was clicked, assign listHolder
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
    
    // Select a battle imajinn
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
    
    
    
    // Display Battle Imajinn
    function dispImajinn(holder) {
        var iIndex;
        
        // If battle imajinn, hide inner
        if (listHolder == biHolder) {
            iIndex = biIndex;
            $("#ImajList").css("display", "initial");
            $("#InnerList").css("display", "none");
            
            // display CD, SKILL, SKILL PWR, VID
            // hide IMG
            cd.css("display","initial");
            skillPower.css("display","initial");
            img.css("display","none");
            vid.css("display","block");
        
            
            // Send values
            cd.html(holder[iIndex].cooldown[0] + holder[iIndex].cooldown[1]);
            skill.html(holder[iIndex].skill[0] + holder[iIndex].skill[1]);
            skillPower.html(holder[iIndex].skill[2] + spacing1 + holder[iIndex].skill[3]);
            vid.attr("src", holder[iIndex].image);
            
        }
        
        // If inner imajinn, hide battle
        if (listHolder == iiHolder) {
            iIndex = iiIndex;
            $("#ImajList").css("display", "none");
            $("#InnerList").css("display", "initial");
            
            // display SLOT, IMG
            // hide VID
            cd.css("display","none");
            skillPower.css("display","none");
            vid.css("display","none");
            img.css("display","block");
            
            
            // Send values
            skill.html(holder[iIndex].slot[0] + "&nbsp;&nbsp;&nbsp;&nbsp;" + holder[iIndex].slot[1]);
            img.attr("src", holder[iIndex].image);
            
        }
        
        
        // Send item info
        name.html(holder[iIndex].name);
        
        level.html(holder[iIndex].level);
        element.html(holder[iIndex].element[0]);
        elePower.html(holder[iIndex].element[1]);
        
        
        abil.html(holder[iIndex].ability[0] + spacing1 + holder[iIndex].ability[1]);
        abilPower.html(holder[iIndex].ability[2] + spacing1 + holder[iIndex].ability[3]);
        
        // Send stats
        statVal.each(function(index){
            $(this).html(holder[iIndex].stats[(index)]);
        });
        
        // Send recipe materials
        mat.each(function (index) {
           $(this).html(holder[iIndex].recipe[(index)]); 
        });
        matIcon.each(function (index) {
           $(this).attr("src", holder[iIndex].iconSrc[(index)]); 
        });
        matCount.each(function (index) {
           $(this).html(holder[iIndex].amt[(index)]); 
        });
        luno.html(holder[iIndex].recipe[(holder[iIndex].recipe.length - 1)]);
        
        // Send recipe hints
        recipeToolText.each(function (index) {
           $(this).html(holder[iIndex].tooltipText[(index)]); 
        });
        
        // Send ability list
        abilList.each(function(index){
           $(this).html(holder[iIndex].abilList[(index)]);
        });
        
    }
    
     // BATTLE IMAJINN
    function openImajinn() {
        // if battle or inner imaj page, select that container and display
        $("#ImajinnContainer").css("display", "block");
        $("#contentViewer").css("display", "block");
    
        dispImajinn(listHolder);
    }

    // TRIVIA
    // Generate map names and skill names from a list
    // Automatically generate "what class's skill is __?" and " __ is an ability for what skill? questions
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
    
    
    // ABOUT
    $("#buttonAbout").click(function(){
        if ($("#pageAbout").css("display")=="none") {
            $("#pageAbout").css("display", "block")
            openTrivia();
        } else {
            $("#pageAbout").css("display", "none");
        }
    });
    

    // SKILL BUILDER
    });