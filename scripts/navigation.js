var currentPage = "#mapContainer";
const pages = new Map();
pages.set("buttonWorldMap", "#mapContainer");
pages.set("buttonCrafting", "#craftingContainer");
pages.set("buttonGuide", "#guideContainer");
pages.set("buttonImajinn", "#ImajinnContainer");
pages.set("buttonAegis", "#classContainer");
pages.set("buttonBlast", "#classContainer");
pages.set("buttonTwin", "#classContainer");
pages.set("buttonSpell", "#classContainer");
pages.set("buttonHeavy", "#classContainer");

var imajInitial = true;
var mapInitial = true;

// Navigation buttons
$("img.navicon").click(function() {
    
    // Open new page if the button clicked corresponds to a page different from the current one. 
    if (pages.get($(this).attr("id")) !== currentPage) {
        $(currentPage).css("display","none");
        currentPage = pages.get($(this).attr("id"));
        $(currentPage).css("display","block");
    }

    /*switchLang(currentLang);
    
    // Class Pages 
    if ($(this).is("#buttonTwin")){
        currentPage = "#classContainer";
        classSrcs = "images/skills/ts";
        openClasses("twinstriker");
    }
    
    // IMAJINN
    if ($(this).is("#buttonImajinn") && currentPage !== "#ImajinnContainer") {
        currentPage = "#ImajinnContainer";
        if (imajInitial == true) {
            //listHolder = biHolder[currentLang];
        }
    }*/

});

// About page
var aboutPageOpen = false;
$("#buttonAbout").click(function(){
    if (aboutPageOpen == true) {
        $("#page-about").css("top","130%");
        aboutPageOpen = false;
    }
    else {
        $("#page-about").css("top","20%");
        aboutPageOpen = true;
    }
});

// Menu collapse
var menuOpen = true;
$(".arrow-holder").click(function(){
    if (menuOpen == true) {
        $(".collapsable").width('0px');
        menuOpen = false;
    }
    else {
        $(".collapsable").width('487px');
        menuOpen = true;
    }
    $(".arrow").toggleClass("arrow-right");
    $(".arrow").toggleClass("arrow-left");
});