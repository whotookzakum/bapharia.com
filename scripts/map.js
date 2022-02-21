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