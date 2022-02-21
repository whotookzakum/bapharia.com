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
        dispDung();
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

// Strikethrough main story quests on click
$(".storyChapter p").click(function() {
    $(this).toggleClass("strikethrough");
});

// Get random int from min-max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// ELEMENTS DEMO
var gaugeNumber = 1;
var gaugeWidth1;
var gaugeWidth2;
var gaugeWidth3;
var gaugeOffset;
var ele1 = 1;
var ele2 = 2;
var ele3 = 3;
function getGaugeWidths () {

    // random number between 25 and 45
    // one value has to be the highest value
    // must be at least 100.
    // *overflows into next meter

    gaugeWidth1 = randomInt(25, 45); // 25 to 45
    gaugeWidth2 = randomInt(25, 45);
    gaugeOffset = 0.5;
    gaugeWidth3 = 100 - (gaugeWidth1 + gaugeWidth2);

    // Check to make sure no overlapping buggable values
    // avoid 34 34 32 
    if (gaugeWidth1 > gaugeWidth3 && gaugeWidth1 == gaugeWidth2) {
        gaugeWidth1++;
        gaugeWidth3--;
    }
    // avoid 32 34 34
    else if (gaugeWidth2 > gaugeWidth1 && gaugeWidth2 == gaugeWidth3) {
        gaugeWidth2++;
        gaugeWidth3--;
    }
    // avoid 34 32 34
    else if (gaugeWidth1 > gaugeWidth2 && gaugeWidth1 == gaugeWidth3) {
        gaugeWidth1++;
        gaugeWidth3--;
    }
}
function getStrongestElement() {

    // Add up values if same element
    // fire ice fire
    if (ele1.is(ele3)) {
        gaugeWidth1 = gaugeWidth1 + gaugeWidth3;
    }
    // fire fire ice
    else if (ele1.is(ele2)) {
        gaugeWidth1 = gaugeWidth1 + gaugeWidth2;
    }
    // ice fire fire
    else if (ele2.is(ele3)) {
        gaugeWidth2 = gaugeWidth2 + gaugeWidth3;
    }

    // Gauge 1 is biggest
    if (gaugeWidth1 > gaugeWidth2 && gaugeWidth1 > gaugeWidth3) {

        // Check which element was clicked and apply transformation
        if (ele1.hasClass("eleFire")) {
            $(".eleDemoLv1").css("background-position","-0 -0");
            $(".eleDemoLv2").css("background-position","-2.1615vw -0");
            $(".eleDemoLv3").css("background-position","-4.323vw -0");
        }
        if (ele1.hasClass("eleIce")) {
            $(".eleDemoLv1").css("background-position","-0vw -2.552vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -2.552vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -2.552vw");
        }
        if (ele1.hasClass("eleLightning")) {
            $(".eleDemoLv1").css("background-position","-0vw -5.104vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -5.104vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -5.104vw");
        }
        if (ele1.hasClass("eleEarth")) {
            $(".eleDemoLv1").css("background-position","-0vw -7.656vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -7.656vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -7.656vw");
        }
        if (ele1.hasClass("eleLight")) {
            $(".eleDemoLv1").css("background-position","-0vw -10.208vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -10.208vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -10.208vw");
        }
        if (ele1.hasClass("eleDark")) {
            $(".eleDemoLv1").css("background-position","-0vw -12.76vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -12.76vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -12.76vw");
        }

    }
    // Gauge 2 is biggest
    if (gaugeWidth2 > gaugeWidth1 && gaugeWidth2 > gaugeWidth3) {

        // Check which element was clicked and apply transformation
        if (ele2.hasClass("eleFire")) {
            $(".eleDemoLv1").css("background-position","-0 -0");
            $(".eleDemoLv2").css("background-position","-2.1615vw -0");
            $(".eleDemoLv3").css("background-position","-4.323vw -0");
        }
        if (ele2.hasClass("eleIce")) {
            $(".eleDemoLv1").css("background-position","-0vw -2.552vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -2.552vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -2.552vw");
        }
        if (ele2.hasClass("eleLightning")) {
            $(".eleDemoLv1").css("background-position","-0vw -5.104vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -5.104vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -5.104vw");
        }
        if (ele2.hasClass("eleEarth")) {
            $(".eleDemoLv1").css("background-position","-0vw -7.656vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -7.656vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -7.656vw");
        }
        if (ele2.hasClass("eleLight")) {
            $(".eleDemoLv1").css("background-position","-0vw -10.208vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -10.208vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -10.208vw");
        }
        if (ele2.hasClass("eleDark")) {
            $(".eleDemoLv1").css("background-position","-0vw -12.76vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -12.76vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -12.76vw");
        }

    }
    // Gauge 3 is biggest
    if (gaugeWidth3 > gaugeWidth2 && gaugeWidth3 > gaugeWidth1) {

        // Check which element was clicked and apply transformation
        if (ele3.hasClass("eleFire")) {
            $(".eleDemoLv1").css("background-position","-0 -0");
            $(".eleDemoLv2").css("background-position","-2.1615vw -0");
            $(".eleDemoLv3").css("background-position","-4.323vw -0");
        }
        if (ele3.hasClass("eleIce")) {
            $(".eleDemoLv1").css("background-position","-0vw -2.552vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -2.552vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -2.552vw");
        }
        if (ele3.hasClass("eleLightning")) {
            $(".eleDemoLv1").css("background-position","-0vw -5.104vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -5.104vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -5.104vw");
        }
        if (ele3.hasClass("eleEarth")) {
            $(".eleDemoLv1").css("background-position","-0vw -7.656vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -7.656vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -7.656vw");
        }
        if (ele3.hasClass("eleLight")) {
            $(".eleDemoLv1").css("background-position","-0vw -10.208vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -10.208vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -10.208vw");
        }
        if (ele3.hasClass("eleDark")) {
            $(".eleDemoLv1").css("background-position","-0vw -12.76vw");
            $(".eleDemoLv2").css("background-position","-2.1615vw -12.76vw");
            $(".eleDemoLv3").css("background-position","-4.323vw -12.76vw");
        }

    }

}
// Fill Meters
$(".eleHeader>img").click(function() {

    // Gauge color from clicked element
    var color = $(this).css('color');

    // Get text of element that was clicked
    var element = $(this).next().html();

    // Set color and width
    // Lv 1
    if (gaugeNumber == 1) {

        getGaugeWidths();

        $(".gauge1").css("background-color", color);
        $(".gauge1").css("width", gaugeWidth1 + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth1);

        ele1 = $(this);


    }
    if (gaugeNumber == 2) {

        $(".gauge2").css("background-color", color);
        $(".gauge2").css("width", gaugeWidth2 + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth2);

        ele2 = $(this);


    }
    if (gaugeNumber == 3) {

        $(".gauge3").css("background-color", color);
        $(".gauge3").css("width", gaugeWidth3 - gaugeOffset + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth3);

        ele3 = $(this);

        getStrongestElement();
        $(".eleDemoLv1").css("visibility","visible");
    }

    // Lv 2
    if (gaugeNumber == 4) {
        getGaugeWidths();
        $(".gauge4").css("background-color", color);
        $(".gauge4").css("width", gaugeWidth1 + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth1);

    }
    if (gaugeNumber == 5) {
        $(".gauge5").css("background-color", color);
        $(".gauge5").css("width", gaugeWidth2 + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth2);

    }
    if (gaugeNumber == 6) {
        $(".gauge6").css("background-color", color);
        $(".gauge6").css("width", gaugeWidth3 - gaugeOffset + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth3);

        $(".eleDemoLv2").css("visibility","visible");
    }

    // Lv 3
    if (gaugeNumber == 7) {
        getGaugeWidths();
        $(".gauge7").css("background-color", color);
        $(".gauge7").css("width", gaugeWidth1 + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth1);

    }
    if (gaugeNumber == 8) {
        $(".gauge8").css("background-color", color);
        $(".gauge8").css("width", gaugeWidth2 + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth2);

    }
    if (gaugeNumber == 9) {
        $(".gauge9").css("background-color", color);
        $(".gauge9").css("width", gaugeWidth3 - gaugeOffset + "%");
        $(".eleDemoText").html(element + " +" + gaugeWidth3);

        $(".eleDemoLv3").css("visibility","visible");
    }

    gaugeNumber += 1;


});
// Reset meters
$(".eleDemo button").click(function(){
    gaugeNumber = 1;
    $(".eleDemoText").html("Click an element icon to begin a demo of element charges.");
    $(".gauge1").css("width", "0%");
    $(".gauge2").css("width", "0%");
    $(".gauge3").css("width", "0%");
    $(".gauge4").css("width", "0%");
    $(".gauge5").css("width", "0%");
    $(".gauge6").css("width", "0%");
    $(".gauge7").css("width", "0%");
    $(".gauge8").css("width", "0%");
    $(".gauge9").css("width", "0%");
    $(".eleDemoLv1").css("visibility","hidden");
    $(".eleDemoLv2").css("visibility","hidden");
    $(".eleDemoLv3").css("visibility","hidden");
});


var dungSelector = 0;

// DUNGEON LIST
$(".dungeonListItem").click(function(){

    if ($(this).hasClass("floatingIsland")) {
        dungSelector = 0;
    }
    if ($(this).hasClass("taParty")) {
        dungSelector = 1;
    }


    if ($(this).hasClass("taSolo")) {
        dungSelector = 2;
    }
    if ($(this).hasClass("arenaS")) {
        dungSelector = 3;
    }
    if ($(this).hasClass("arenaA")) {
        dungSelector = 4;
    }
    if ($(this).hasClass("arenaB")) {
        dungSelector = 5;
    }


    if ($(this).hasClass("arenaC")) {
        dungSelector = 6;
    }
    if ($(this).hasClass("mechaHard")) {
        dungSelector = 7;
    }
    if ($(this).hasClass("pillarHard")) {
        dungSelector = 8;
    }
    if ($(this).hasClass("dragonHard")) {
        dungSelector = 9;
    }


    if ($(this).hasClass("mechaEasy")) {
        dungSelector = 10;
    }
    if ($(this).hasClass("pillarMed")) {
        dungSelector = 11;
    }
    if ($(this).hasClass("dragonMed")) {
        dungSelector = 12;
    }
    if ($(this).hasClass("reikridMed")) {
        dungSelector = 13;
    }


    if ($(this).hasClass("pillarEasy")) {
        dungSelector = 14;
    }
    if ($(this).hasClass("gianttowerEasy")) {
        dungSelector = 15;
    }
    if ($(this).hasClass("dragonEasy")) {
        dungSelector = 16;
    }
    if ($(this).hasClass("reikridEasy")) {
        dungSelector = 17;
    }

    dispDung();


});

function dispDung() {

    var dungeon = dungHolder[currentLang][dungSelector];

    // Display images
    $(".dungHeader img").attr("src", dungeon.headerSrc);
    $(".dungImage").attr("src", dungeon.imgSrc);
    $(".dungAllowance").attr("src", dungeon.allowSrc);

    // Display info
    $(".dungName").html(dungeon.name + ' <span style="font-size:0.8vw;">' + dungeon.diff + '</span>');
    $(".dungReqBS").html(dungeon.reqBS);
    $(".dungDescText").html("<p>" + dungeon.description + "</p>")
    $(".dungType").html(dungeon.type);

    // Clear Condition
    $(".dungClearCond>h3").html(dungeon.clearCondition);

    // Max players and time limit
    $(".dungMaxPlayers").html("max players");
    $(".dungMaxPlayersVal").html(dungeon.ptSize);
    $(".dungTimeLimit").html("time limit");
    $(".dungTimeLimitVal").html(dungeon.timer);

    // Enter now button
    $(".dungLink").attr("href", dungeon.videoLink);

    // Rewards
    // hide if no material reward
    if ( dungeon.rewards[0] == "" ) {
        $(".rewardsMatHolder").css("display","none");
    }
    else {
        $(".rewardsMatHolder").css("display","inline-block");
        $(".rewardsMaterial").attr("src", dungeon.rewardsImg[0]);
        $(".rewardsMaterialName").html(dungeon.rewards[0]);
    }
    $(".rewardsLunoAmt").html(dungeon.rewards[1]);
    $(".rewardsEXPAmt").html(dungeon.rewards[2]);
    // hide if no GC reward
    if ( dungeon.rewards[3] == "" || dungeon.rewards[3] == null ) {
        $(".rewardsGC").css("display","none");
    }
    else {
        $(".rewardsGC").css("display","inline-block");
        $(".rewardsGCAmt").html(dungeon.rewards[3]);
    }

    // Allowance supplies
    $("img.allowance1").attr("src", dungeon.allowanceImgs[0]);
    $("img.allowance2").attr("src", dungeon.allowanceImgs[1]);
    $("img.allowance3").attr("src", dungeon.allowanceImgs[2]);
    $("img.allowance4").attr("src", dungeon.allowanceImgs[3]);
    $("p.allowance1").html(dungeon.allowance[0]);
    $("p.allowance2").html(dungeon.allowance[1]);
    $("p.allowance3").html(dungeon.allowance[2]);
    $("p.allowance4").html(dungeon.allowance[3]);

}


// OPTIONS

// Options category buttons
$(".optionsMenuButton").click(function(){

    // Stylize button
    $(".optionsMenuButton").removeClass("optionsMenuClicked");
    $(this).addClass("optionsMenuClicked");

    // Hide all pages
    $(".optionsGeneral").css("display","none");
    $(".optionsControls").css("display","none");
    $(".optionsSound").css("display","none");
    $(".optionsGraphics").css("display","none");
    $(".optionsHUD").css("display","none");

    // Reset container position
    $(".optionsHolder").css("top","7vw");
    $(".optionsHolder").css("height","27vw");

    if ($(this).is(":contains('General')")) {
        $(".optionsGeneral").css("display","block");
    }
    if ($(this).is(":contains('Controls')")) {
        $(".optionsControls").css("display","block");
        // Change container position to account for the dropdown header
        $(".optionsHolder").css("top","9.5vw");
        $(".optionsHolder").css("height","23vw");
    }
    if ($(this).is(":contains('Sound')")) {
        $(".optionsSound").css("display","block");
    }
    if ($(this).is(":contains('Graphics')")) {
        $(".optionsGraphics").css("display","block");
    }
    if ($(this).is(":contains('HUD')")) {
        $(".optionsHUD").css("display","block");
    }

});


// SLIDERS

$("#gamepadSpeedSlider+.rangeVal").html(40); // Default gamepad speed 40
document.getElementById("gamepadSpeedSlider").disabled = true; // gamepad speed is disabled by default

// Value of slider adjusts when input is changed
$(".rangeSlider").on('input', function() {
    $(this).next().html(this.value); // .rangeVal

    // If sound settings slider, adjust the sound icon
    if ($(this).is(".optionSoundSlider")) {
        if (this.value >= 50) {
            $(this).next().next().attr("src","images/sound_max.png");
        }
        else if (this.value > 0) {
            $(this).next().next().attr("src","images/sound_mid.png");
        }
        else if (this.value == 0) {
            $(this).next().next().attr("src","images/sound_min.png");
        }
    }

}).trigger("change");

// game input mode will enable/disable slider for gamepad sensitivity
$(".optionsInputMode").click(function(){

    if ( $(this).is(":contains('Gamepad')") ) {
        document.getElementById("gamepadSpeedSlider").disabled = false;
        $("#gamepadSpeed").removeClass("sliderDisabled");
    }
    else {
        document.getElementById("gamepadSpeedSlider").disabled = true;
        $("#gamepadSpeed").addClass("sliderDisabled");
    }

});

$(".soundImage").click(function(){

    // to do; store original src of each image in an array

    if ($(this).attr("src") != "images/sound_mute.png") {
        $(this).attr("src","images/sound_mute.png");
    }
    else {

        // to do; run through the original src array and pull the value of the index that matches the soundImage that was clicked
        // to do; apply that original src to reset the image to its value before it was clicked
        $(this).attr("src","images/sound_max.png");
    }

});
