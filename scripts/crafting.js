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


// Open page
function openCrafting() {

    $("#craftingContainer").css("display","block");

    listWeapons(wepHolder[currentLang]);
    dispWeapon(wepHolder[currentLang]);
}

// Toggle Weapon Level
$(".wepSlider").click(function(){

    // Max lv stats
    if (!$(".wtoggleCheck").is(":checked")) {
        wepLvSelector = 1;

        wStats.each(function(index){
            $(this).html(wepHolder[currentLang][wIndex].stats[(index)]);
            $(this).css("color","crimson");
        });
    }

    // Lv 1 stats
    else {
        wepLvSelector = 0;

        wStats.each(function(index){
            $(this).html(wepHolder[currentLang][wIndex].minStats[(index)]);
            $(this).css("color","#343330");
        });
    }

});

// Display the clicked Weapon
$(".wlistItem").click(function(){
    wIndex = $(".wlistItem").index(this);
    dispWeapon(wepHolder[currentLang]);
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

    listWeapons(wepHolder[currentLang]);

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
            $(this).html(wepHolder[currentLang][wIndex].minStats[(index)]);
        });
    }
    // If max lv
    else if (wepLvSelector == 1) {
        wStats.each(function(index){
            $(this).html(wepHolder[currentLang][wIndex].stats[(index)]);
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


