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
    console.log("OPENING IMAJINN...");
    imajInitial = false;
    $("#ImajinnContainer").css("display","block");

    dispImajinn(listHolder);
}

