// NAVIGATION

// Save current page and close pages
var firstPage = true;
var currentPage;
function closePages() {

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
    if (currentPage == "#classContainer") {
        closeClasses();
    }

}

var imajInitial = true;
var mapInitial = true;

// Navi icons
$("img.navicon").click(function() {
    
    switchLang(currentLang);

    // Class Pages
    if ($(this).is("#buttonTwin")){
        closePages();
        currentPage = "#classContainer";
        classSrcs = "images/skills/ts";
        openClasses("twinstriker");
    } 
    else if ($(this).is("#buttonAegis")) {
        closePages();
        currentPage = "#classContainer";
        classSrcs = "images/skills/af";
        openClasses("aegisfighter");
    }
    else if ($(this).is("#buttonBlast")) {
        closePages();
        currentPage = "#classContainer";
        classSrcs = "images/skills/ba";
        openClasses("blastarcher");
    }
    else if ($(this).is("#buttonSpell")) {
        closePages();
        currentPage = "#classContainer";
        classSrcs = "images/skills/sc";
        openClasses("spellcaster");
    }
    else if ($(this).is("#buttonHeavy")) {
        closePages();
        currentPage = "#classContainer";
        classSrcs = "images/skills/hs";
        openClasses("heavysmasher");
    }
    else {

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
                listHolder = biHolder[currentLang];
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
