jQuery(document).ready(function($){

    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    // NAVIGATION
    
    // Save current page and close pages
    var currentPage = $("#mapContainer");
    function closePages() {
        currentPage.css("display", "none");
        $("#contentViewer").css("display", "none");
    }
    
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
    
    
    
    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
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
    
    
    
    /*--------------------------------------------------------------------------------------------------------------------------------------*/
    
    // MAP
    
    var currentMap = $("#mapAsterleeds");
    var tooltip = document.querySelectorAll(".tooltip");
    document.addEventListener('mousemove', trackMouse, false);
    function openWorldMap(region) {
        $("#mapContainer").css("display", "block");
        $("#contentViewer").css("display", "block");
        region.css("display", "block");
    }
    
    // Write a script to change border color for mapIcons, i.e. if it contains("Exploration Point") it will turn white. Currently have it written inline as border-color for EACH element, an inefficient code that needs to be optimized.
    
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
    var skillPower = $(".i-infoSkillPower");
    var slotIcon = $(".i-slotIcon");
    var abil = $(".i-infoAbil");
    var abilPower = $(".i-infoAbilPower");
    var statVal = $(".i-infoStatVal");
    var mat = $(".matItem");
    var matIcon = $(".matIcon");
    var matCount = $(".matCount");
    var recipeToolText = $(".recipeToolText");
    var luno = $(".reqLuno");
    var abilList = $(".abil");
    var listHolder = biHolder; // The current list being shown
    var statLvSelector = 0;
    var iIndex;
    var spacing1 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var listItemName = document.querySelectorAll(".listItem-name");
    var listItemType = document.querySelectorAll(".listItem-type");
    
    // Battle Imajinn
    var biHolder = [
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["1","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Pink Piglet<br>Skyquake Fields","Gather<br>Skyquake Fields","Piglet<br>Skyquake Fields"],
            tooltipBg: [
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw",
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw",
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Ferocious Beast<br>Minster Hills","Gather<br>Minster Hills","Rumble Boar<br>Andra Basin"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["Damage increase (regular attack)","STR increase", "<br>"],
            tooltipText: ["Red Splash<br>Minster Hills","Gather<br>Soundless Foothills","Highland Fox<br>Divine Haven Hill"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/shell2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Damage increase (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Deep Green Fang<br>Andra Basin","Gather<br>Minster Hills","Tyrant Boar<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Iron Fang<br>Andra Basin","Gather<br>Divine Haven Hill","Goblin<br>Minster hills"],
            tooltipBg: [
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["5","3","3"],
            abilList: ["Reduce cooldown (battle imagine)","Max HP increase", "<br>"],
            tooltipText: ["Flame Prison<br>Calm Eve Terraces","Gather<br>Soundless Foothills","Glowing Goblin<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["5","3","1"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Ferocious Gold<br>Calm Eve Terraces","Gather<br>Fiel Pond","Ferocious Beast<br>Minster Hills"],
            tooltipBg: ["url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                        "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                        "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Crit rate increase","DEX increase", "<br>"],
            tooltipText: ["Sapphire Trot<br>Divine Haven Hill","Gather<br>Minster Hills","Elder Goblin<br>Andra Basin"],
            tooltipBg: ["url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",
                        "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                        "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Flaming Horns<br>Divine Haven Hill","Gather<br>Divine Haven Hill","Goblin Sage<br>Soundless Foothills"],
            tooltipBg: ["url(images/map/moveDivineHavenHill.jpg) no-repeat -70px -80px/39.25vw",
                       "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",
                       "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Spooky Goat<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Glowing Tyrant Boar<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: ["url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                       "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                       "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Evil Healer<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Ogre<br>Calm Eve Terraces"],
            tooltipBg: ["url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                       "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                       "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["3","3","1"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Dragonclaw Valley [Free Exploration]","Deep Green Fang<br>Andra Basin"],
            tooltipBg: ["url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                       "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                       "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Arrogant Conjurer<br>Dragonclaw Valley [Free Exploration]","Gather<br>Calm Eve Terraces","Kaiser Elk<br>Divine Haven Hill"],
            tooltipBg: ["url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                       "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                       "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["Damage increase (tactical skill 1)","STR increase", "<br>"],
            tooltipText: ["Valley Raider<br>Dragonclaw Valley [Free Exploration]","Gather<br>Skyquake Fields","Land Fox<br>Skyquake Fields"],
            tooltipBg: ["url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                       "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw",
                       "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["1","3","1"],
            abilList: ["Crit damage increase","DEX increase", "<br>"],
            tooltipText: ["Loudshot<br>Dragonclaw Valley [Free Exploration]","Gather<br>Skyquake Fields","Pink Piglet<br>Skyquake Fields"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw",
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw"],
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
            iconSrc: ["images/map/dungeon2.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["2","3","3"],
            abilList: ["Damage increase (battle imagine)","ATK increase", "<br>"],
            tooltipText: ["Clear Arena [C Rank]","Gather<br>Divine Haven Hill","Horned Goat<br>Fiel Pond"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw"],
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
            iconSrc: ["images/map/dungeon2.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (long-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [B Rank]","Gather<br>Fiel Pond","Glowing Elder Goblin<br>Dragonclaw Valley [Free Exploration]"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw"],
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
            iconSrc: ["images/map/dungeon2.png","images/map/shell2.svg","images/map/elitemonster.png"],
            amt: ["5","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Clear Arena [A Rank]","Gather<br>Fiel Pond","Sapphire Trot<br>Divine Haven Hill"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw"],
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
            iconSrc: ["images/map/dungeon2.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["7","3","1"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [S Rank]","Gather<br>Dragonclaw Valley [Free Exploration]","Evil Healer<br>Soundless Foothills"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/elitemonster.png"],
            amt: ["7","3","1"],
            abilList: ["Reduce cooldown (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Raging Kingfang<br>Dragonclaw Valley [Free Exploration]","Gather<br>Fiel Pond","Flame Prison<br>Calm Eve Terraces"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw"],
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
            iconSrc: ["images/map/quest2.png","",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete quest "Collect Battle Imagine! #2"<br><br>After completing "Collect Battle Imagine! #1", craft Deep Green Fang, Iron Fang, Sapphire Trot, and Spooky Goat',"<br>","<br>"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -22.917vw -7.292vw/55.25vw","",""],
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
            iconSrc: ["images/map/quest2.png","",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete quest "Collect Battle Imagine! #3"<br><br>After completing "Collect Battle Imagine! #2", craft ???',"<br>","<br>"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -22.917vw -7.292vw/55.25vw","",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
    ]
    
    // Inner Imajinn
    var iiHolder = [
        
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
            iconSrc: ["images/map/dungeon2.png","",""],
            amt: ["1","<br>","<br>"],
            abilList: ["Max HP increase","<br>", "<br>"],
            tooltipText: ["Clear Dungeon<br>Reikrid Tunnels","<br>","<br>"],
            tooltipBg: [
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw","",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["8","15","<br>"],
            abilList: ["ATK increase","<br>", "<br>"],
            tooltipText: ["Land Fox<br>Minster Hills","Gather<br>Minster Hills","<br>"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["10","10","<br>"],
            abilList: ["Max Stamina increase","<br>", "<br>"],
            tooltipText: ["Goblin<br>Andra Basin","Gather<br>Andra Basin","<br>"],
            tooltipBg: [
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw",
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/flower2.svg",""],
            amt: ["12","20","<br>"],
            abilList: ["Max HP increase","VIT increase", "STR increase"],
            tooltipText: ["Horned Goat<br>Soundless Foothills","Gather<br>Divine Haven Hill","<br>"],
            tooltipBg: [
                "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",""],
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
            iconSrc: ["images/map/rock2.svg","",""],
            amt: ["25","<br>","<br>"],
            abilList: ["Max Stamina increase","INT increase", "MND increase"],
            tooltipText: ["Gather<br>Divine Haven Hill","<br>","<br>"],
            tooltipBg: [
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw","",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["10","35","<br>"],
            abilList: ["ATK increase","STR increase", "DEX increase"],
            tooltipText: ["Glowing Goblin<br>Dragonclaw Valley [Free Exploration]","Gather<br>Dragonclaw Valley [Free Exploration]","<br>"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/flower2.svg",""],
            amt: ["15","40","<br>"],
            abilList: ["DEF increase","DEX increase", "VIT increase"],
            tooltipText: ["Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces","<br>"],
            tooltipBg: [
                "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw", ""],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg",""],
            amt: ["1","50","<br>"],
            abilList: ["Healing increase","MND increase", "INT increase"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Fiel Pond","<br>"],
            tooltipBg: [
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ]
    
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
    
    // Select Imajinn from List
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
    $(".slider").click(function(){
        
        // Max lv stats
        if (!$(".toggleCheck").is(":checked")) {
            statLvSelector = 1;
            
            if (listHolder == biHolder) {
                skillPower.html(listHolder[iIndex].skill[2] + spacing1 + listHolder[iIndex].skill[3]);
            }
            
            statVal.each(function(index){
                $(this).html(listHolder[iIndex].stats[(index)]);
            });
        }
        
        // Lv 1 stats
        else {
            statLvSelector = 0;
            
            if (listHolder == biHolder) {
                skillPower.html(listHolder[iIndex].skill[2] + spacing1 + listHolder[iIndex].skill[4]);
            }
            
            statVal.each(function(index){
                $(this).html(listHolder[iIndex].minStats[(index)]);
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
            $("#skillDesc").addClass("skillTooltip");
            vid.css("display","block");
            img.css("display","none");
            slotIcon.css("display","none");
            
            
            // Change selector image
            $(".iiSelector").removeClass("listSelected");
            $(".biSelector").addClass("listSelected");
            
            // Send values
            cd.html(holder[iIndex].cooldown[0] + holder[iIndex].cooldown[1]);
            skill.html(holder[iIndex].skill[0] + holder[iIndex].skill[1]);
            
            // Skill power Lv 1
            if (statLvSelector == 0) {
                // Send skill power
                skillPower.html(holder[iIndex].skill[2] + spacing1 + holder[iIndex].skill[4]);
            }
            // Skill power max level
            else if (statLvSelector == 1) {
                // Send skill power
                skillPower.html(holder[iIndex].skill[2] + spacing1 + holder[iIndex].skill[3]);
            }
            
            
            vid.attr("src", holder[iIndex].image);
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
            $("#skillDesc").removeClass("skillTooltip");
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
        abilList.each(function(index){
           $(this).html(holder[iIndex].abilList[(index)]);
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
        
        // Send recipe tooltip text
        recipeToolText.each(function (index) {
           $(this).html(holder[iIndex].tooltipText[(index)]); 
        });

        // Recipe tooltip backgrounds
        $(".recipeTooltip1").css("background",holder[iIndex].tooltipBg[0]);
        $(".recipeTooltip2").css("background",holder[iIndex].tooltipBg[1]);
        $(".recipeTooltip3").css("background",holder[iIndex].tooltipBg[2]);
        
        // Recipe tooltip icons
        $(".recipeToolImg").each(function(index){
            $(this).attr("src", holder[iIndex].iconSrc[(index)]);
            $(this).attr("style", holder[iIndex].tooltipIcn[(index)]);
        });
        
        
    }
    
    // Open Imajinn Page
    function openImajinn() {
        // if battle or inner imaj page, select that container and display
        $("#ImajinnContainer").css("display", "block");
        $("#contentViewer").css("display", "block");
    
        dispImajinn(listHolder);
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
    
    // JAPANESE TEXT HOLDERS
    
    
    // Change font sizes, change headers like "Req. Luno" to JP
    // Battle Imajinn
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["1","3","1"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["ピンクウリボ<br>海鳴りの草原","採取<br>海鳴りの草原","ウリボ<br>海鳴りの草原"],
            tooltipBg: [
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw",
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw",
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["最大STアップ","器用さアップ", "<br>"],
            tooltipText: ["猛る獣<br>ミンスター丘陵","採取<br>ミンスター丘陵","ランブルボア<br>アンドラ盆地"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["ダメージアップ・通常攻撃","筋力アップ", "<br>"],
            tooltipText: ["赤い飛沫<br>ミンスター丘陵","採取<br>鎮まりの山麓","ハイランドフォックス<br>神の見守る丘"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/shell2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["ダメージアップ・ULT","攻撃力アップ", "<br>"],
            tooltipText: ["深緑の牙<br>アンドラ盆地","採取<br>ミンスター丘陵","タイラントボア<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["ダメージアップ・近接","攻撃力アップ", "<br>"],
            tooltipText: ["鉄牙<br>アンドラ盆地","採取<br>神の見守る丘","ゴブリン<br>ミンスター丘陵"],
            tooltipBg: [
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["5","3","3"],
            abilList: ["インターバル短縮・Bイマジン","最大HPアップ", "<br>"],
            tooltipText: ["炎獄<br>夕凪の段丘","採取<br>鎮まりの山麓","ゴブリン・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["5","3","1"],
            abilList: ["ダメージアップ・近接","筋力アップ", "<br>"],
            tooltipText: ["猛る金色<br>夕凪の段丘","採取<br>フィエル嶺水地","猛る獣<br>ミンスター丘陵"],
            tooltipBg: ["url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                        "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                        "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["会心率アップ","器用さアップ", "<br>"],
            tooltipText: ["サファイアトロット<br>神の見守る丘","採取<br>ミンスター丘陵","エルダーゴブリン<br>アンドラ盆地"],
            tooltipBg: ["url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",
                        "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                        "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["被ダメージ軽減・近接","防御アップ", "<br>"],
            tooltipText: ["炎角<br>神の見守る丘","採取<br>神の見守る丘","ゴブリンセージ<br>鎮まりの山麓"],
            tooltipBg: ["url(images/map/moveDivineHavenHill.jpg) no-repeat -70px -80px/39.25vw",
                       "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",
                       "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["最大STアップ","器用さアップ", "<br>"],
            tooltipText: ["スプーキーゴート<br>鎮まりの山麓","採取<br>夕凪の段丘","タイラントボア・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: ["url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                       "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                       "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["悪しき癒し手<br>鎮まりの山麓","採取<br>夕凪の段丘","オーガ<br>夕凪の段丘"],
            tooltipBg: ["url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                       "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                       "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["3","3","1"],
            abilList: ["ダメージアップ・遠隔","知力アップ", "<br>"],
            tooltipText: ["トリックエルダー<br>フィエル嶺水地","採取<br>巨竜の爪痕・自由探索","深緑の牙<br>アンドラ盆地"],
            tooltipBg: ["url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                       "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                       "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["4","3","3"],
            abilList: ["ダメージアップ・遠隔","知力アップ", "<br>"],
            tooltipText: ["図に乗った魔術師<br>巨竜の爪痕・自由探索","採取<br>夕凪の段丘","カイザーエルク<br>神の見守る丘"],
            tooltipBg: ["url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                       "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                       "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["2","3","1"],
            abilList: ["ダメージアップ・T1","筋力アップ", "<br>"],
            tooltipText: ["谷荒らし<br>巨竜の爪痕・自由探索","採取<br>海鳴りの草原","ランドフォックス<br>海鳴りの草原"],
            tooltipBg: ["url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                       "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw",
                       "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["1","3","1"],
            abilList: ["会心力アップ","器用さアップ", "<br>"],
            tooltipText: ["ラウドシャウト<br>巨竜の爪痕・自由探索","採取<br>海鳴りの草原","ピンクウリボ<br>海鳴りの草原"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw",
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw"],
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
            iconSrc: ["images/map/dungeon2.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["2","3","3"],
            abilList: ["ダメージアップ・バトルイマジン","攻撃力アップ", "<br>"],
            tooltipText: ["闘技場・ランクC","採取<br>神の見守る丘","ホーンゴート<br>フィエル嶺水地"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw"],
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
            iconSrc: ["images/map/dungeon2.png","images/map/rock2.svg","images/map/combat2.svg"],
            amt: ["3","3","3"],
            abilList: ["被ダメージ軽減・遠隔","防御アップ", "<br>"],
            tooltipText: ["闘技場・ランクB","採取<br>フィエル嶺水地","エルダーゴブリン・グロウ<br>巨竜の爪痕・自由探索"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw"],
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
            iconSrc: ["images/map/dungeon2.png","images/map/shell2.svg","images/map/elitemonster.png"],
            amt: ["5","3","1"],
            abilList: ["回復量アップ・バトルイマジン","回復力アップ", "<br>"],
            tooltipText: ["闘技場・ランクA","採取<br>フィエル嶺水地","サファイアトロット<br>神の見守る丘"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw"],
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
            iconSrc: ["images/map/dungeon2.png","images/map/flower2.svg","images/map/elitemonster.png"],
            amt: ["7","3","1"],
            abilList: ["被ダメージ軽減・近接","防御アップ", "<br>"],
            tooltipText: ["闘技場・ランクS","採取<br>巨竜の爪痕・自由探索","悪しき癒し手<br>鎮まりの山麓"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -20.833vw -7.292vw/45.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw"],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg","images/map/elitemonster.png"],
            amt: ["7","3","1"],
            abilList: ["インターバル短縮・ULT","攻撃力アップ", "<br>"],
            tooltipText: ["荒ぶる牙王<br>巨竜の爪痕・自由探索","採取<br>フィエル嶺水地","炎獄<br>夕凪の段丘"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw"],
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
            iconSrc: ["images/map/quest2.png","",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['「バトルイマジンの収集２」をクリア<br><br>「バトルイマジンの収集１」を完了させたら深緑の牙、鉄牙、サファイアトロット、スプーキーゴートのイマジンをクラフト',"<br>","<br>"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -22.917vw -7.292vw/55.25vw","",""],
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
            iconSrc: ["images/map/quest2.png","",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['「バトルイマジンの収集３」をクリア<br><br>After completing "「バトルイマジンの収集２」を完了させたら???、???、???、???のイマジンをクラフト',"<br>","<br>"],
            tooltipBg: [
                "url(images/map/moveAsterleeds.jpg) no-repeat -22.917vw -7.292vw/55.25vw","",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
    ]
    
    // Inner Imajinn
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
            iconSrc: ["images/map/dungeon2.png","",""],
            amt: ["1","<br>","<br>"],
            abilList: ["最大HPアップ","<br>", "<br>"],
            tooltipText: ["ダンジョンクリア<br>レイクリッド坑道","<br>","<br>"],
            tooltipBg: [
                "url(images/map/moveSkyquakeFields.jpg) no-repeat -16.667vw -7.292vw/45.25vw","",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["8","15","<br>"],
            abilList: ["攻撃力アップ","<br>", "<br>"],
            tooltipText: ["ランドフォックス<br>ミンスター丘陵","採取<br>ミンスター丘陵","<br>"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -17.708vw 0px/39.25vw",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["10","10","<br>"],
            abilList: ["最大STアップ","<br>", "<br>"],
            tooltipText: ["ゴブリン<br>アンドラ盆地","採取<br>アンドラ盆地","<br>"],
            tooltipBg: [
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw",
                "url(images/map/moveAndraBasin.jpg) no-repeat -11.198vw -80px/45.25vw",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/flower2.svg",""],
            amt: ["12","20","<br>"],
            abilList: ["最大HPアップ","耐久力アップ", "筋力アップ"],
            tooltipText: ["ホーンゴート<br>鎮まりの山麓","採取<br>神の見守る丘","<br>"],
            tooltipBg: [
                "url(images/map/moveSoundlessFoothills.jpg) no-repeat -21.354vw 0px/39.25vw",
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw",""],
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
            iconSrc: ["images/map/rock2.svg","",""],
            amt: ["25","<br>","<br>"],
            abilList: ["最大STアップ","知力アップ", "精神力アップ"],
            tooltipText: ["採取<br>神の見守る丘","<br>","<br>"],
            tooltipBg: [
                "url(images/map/moveDivineHavenHill.jpg) no-repeat -3.646vw -0px/31.25vw","",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/rock2.svg",""],
            amt: ["10","35","<br>"],
            abilList: ["攻撃力アップ","筋力アップ", "器用さアップ"],
            tooltipText: ["ゴブリン・グロウ<br>巨竜の爪痕・自由探索","採取<br>巨竜の爪痕・自由探索","<br>"],
            tooltipBg: [
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",
                "url(images/map/moveMinsterHills.jpg) no-repeat -32.813vw 0px/55.25vw",""],
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
            iconSrc: ["images/map/combat2.svg","images/map/flower2.svg",""],
            amt: ["15","40","<br>"],
            abilList: ["防御アップ","器用さアップ", "耐久力アップ"],
            tooltipText: ["タイラントボア・グロウ<br>夕凪の段丘","採取<br>夕凪の段丘","<br>"],
            tooltipBg: [
                "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw",
                "url(images/map/moveCalmEveTerraces.jpg) no-repeat -12.760vw -7.292vw/48.25vw", ""],
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
            iconSrc: ["images/map/elitemonster.png","images/map/rock2.svg",""],
            amt: ["1","50","<br>"],
            abilList: ["回復力アップ","精神力アップ", "知力アップ"],
            tooltipText: ["トリックエルダー<br>フィエル嶺水地","採取<br>フィエル嶺水地","<br>"],
            tooltipBg: [
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",
                "url(images/map/moveFielPond.jpg) no-repeat -6.771vw 0px/39.25vw",""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ]
    
    
    
    });