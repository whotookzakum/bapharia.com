// CLASS PAGES

var classIndex = 0;
var classSrcs = "";

function openClasses(currentClass) {
    $("#classContainer").css("display","block");
    $(".contentViewer").css("display","block");



    if (currentClass == "aegisfighter") { classIndex = 0; classSrcs = "images/skills/af/" }
    if (currentClass == "twinstriker") { classIndex = 1; classSrcs = "images/skills/ts/" }
    if (currentClass == "blastarcher") { classIndex = 2; classSrcs = "images/skills/ba/" }
    if (currentClass == "spellcaster") { classIndex = 3; classSrcs = "images/skills/sc/" }
    if (currentClass == "heavysmasher") { classIndex = 4; classSrcs = "images/skills/hs/" }

    var thisClass = classDescriptions[currentLang][classIndex];

    $(".classDesc").html('<span class="className">' + thisClass.name + thisClass.elements + '</span>' + thisClass.text);
    $("#classChart").attr("src", thisClass.chart);
    $("#classIcon").attr("src", thisClass.icon);
    $("#backgroundVideo").attr("src", thisClass.video);

    openSkills();

}

function openSkills (currentClass) {

    // IMAGES

    // reg skills
    //$(".skill01").attr("src", "images/skills/01.png");
    //$(".skill02").attr("src", "images/skills/02.png");

    // tac skills 1
    $(".skill11>.tacSkill>img").attr("src", classSrcs + "11.png");
    $(".skill12>.tacSkill>img").attr("src", classSrcs + "12.png");
    $(".skill11 .abilityA").attr("src", classSrcs + "11a.png");
    $(".skill11 .abilityB").attr("src", classSrcs + "11b.png");
    $(".skill12 .abilityA").attr("src", classSrcs + "12a.png");
    $(".skill12 .abilityB").attr("src", classSrcs + "12b.png");

    // tac skills 2
    $(".skill21>.tacSkill>img").attr("src", classSrcs + "21.png");
    $(".skill22>.tacSkill>img").attr("src", classSrcs + "22.png");
    $(".skill21 .abilityA").attr("src", classSrcs + "21a.png");
    $(".skill21 .abilityB").attr("src", classSrcs + "21b.png");
    $(".skill22 .abilityA").attr("src", classSrcs + "22a.png");
    $(".skill22 .abilityB").attr("src", classSrcs + "22b.png");

    // tac skills 3
    $(".skill31>.tacSkill>img").attr("src", classSrcs + "31.png");
    $(".skill32>.tacSkill>img").attr("src", classSrcs + "32.png");
    $(".skill31 .abilityA").attr("src", classSrcs + "31a.png");
    $(".skill31 .abilityB").attr("src", classSrcs + "31b.png");
    $(".skill32 .abilityA").attr("src", classSrcs + "32a.png");
    $(".skill32 .abilityB").attr("src", classSrcs + "32b.png");

    // tac skills 4
    $(".skill41>.tacSkill>img").attr("src", classSrcs + "41.png");
    $(".skill42>.tacSkill>img").attr("src", classSrcs + "42.png");
    $(".skill41 .abilityA").attr("src", classSrcs + "41a.png");
    $(".skill41 .abilityB").attr("src", classSrcs + "41b.png");
    $(".skill42 .abilityA").attr("src", classSrcs + "42a.png");
    $(".skill42 .abilityB").attr("src", classSrcs + "42b.png");

    // ult
    //$(".skill51").attr("src", "images/skills/51.png");

    // tac abilities
    $(".tacabil5").attr("src", classSrcs + "ta5.png");
    $(".tacabil6").attr("src", classSrcs + "ta6.png");

    // static images, just load them in html
    /* 
    if (classSrcs == "") {
        $("#tacabil1").attr("src", "images/skills/ta1.png");
        $("#tacabil2").attr("src", "images/skills/ta2.png");
        $("#tacabil3").attr("src", "images/skills/ta3.png");
        $("#tacabil4").attr("src", "images/skills/ta4.png");

        // permanent
        $("#passive1").attr("src", "images/skills/p1.png");
        $("#passive2").attr("src", "images/skills/p2.png");
        $("#passive3").attr("src", "images/skills/p3.png");
        $("#passive4").attr("src", "images/skills/p4.png");
        $("#passive5").attr("src", "images/skills/p5.png");
        $("#passive6").attr("src", "images/skills/p6.png");
        $("#passive7").attr("src", "images/skills/p7.png");
        $("#passive8").attr("src", "images/skills/p8.png");
        $("#passive9").attr("src", "images/skills/p9.png");
        $("#passive10").attr("src", "images/skills/p10.png");
    }
    */




    // TOOLTIPS

    var skillIndex = 0;
    var skill = skillHolder[currentLang][classIndex][skillIndex];

    // Reg skills

    /*
    $(".tacskillItem").each(function(index){
        index += 2;
        $(this).children(".tooltip").each(function(i){
            $(this).html(skill[index].title + "<br>" + skill[index].text[i]);
        });
    }); 
    */




    $(".level1").each(function(index){

        // lv 1
        $(this).nextUntil(".tooltip").next().html(
            // skill name + level
            "<p>" + skillHolder[currentLang][classIndex][index].title + " Lv 1" + "<br></p>" + 

            // Req points & req level
            "<div class='skillToolBorder'><p>skill points: " + skillHolder[currentLang][classIndex][index].reqPts[0] + "<br>class level: " + skillHolder[currentLang][classIndex][index].reqLv[0] + "<br></p>" + 

            // spacing
            '<p style="height: 8px;"><br></p>'

            // skill description
            + skillHolder[currentLang][classIndex][index].text[0] + "</div>"
        );

        // lv 2
        $(this).parent().next().children(".tooltip").html(
            // skill name + level
            "<p>" + skillHolder[currentLang][classIndex][index].title + " Lv 2" + "<br></p>" + 

            // Req points & req level
            "<div class='skillToolBorder'><p>skill points: " + skillHolder[currentLang][classIndex][index].reqPts[1] + "<br>class level: " + skillHolder[currentLang][classIndex][index].reqLv[1] + "<br></p>" + 

            // spacing
            '<p style="height: 8px;"><br></p>'

            // skill description
            + skillHolder[currentLang][classIndex][index].text[1] + "</div>"
        );

        // lv 3
        $(this).parent().next().next().children(".tooltip").html(
            // skill name + level
            "<p>" + skillHolder[currentLang][classIndex][index].title + " Lv 3" + "<br></p>" + 

            // Req points & req level
            "<div class='skillToolBorder'><p>skill points: " + skillHolder[currentLang][classIndex][index].reqPts[2] + "<br>class level: " + skillHolder[currentLang][classIndex][index].reqLv[2] + "<br></p>" + 

            // spacing
            '<p style="height: 8px;"><br></p>'

            // skill description
            + skillHolder[currentLang][classIndex][index].text[2] + "</div>"
        );

        if ($(this).parent().hasClass("tacskillItem")) {

            // ability A
            $(this).parent().next().next().children(".skillAbilities").children(".abilityItem").children(".abilAtooltip").html(
                // skill name + level
                "<p>" + skillHolder[currentLang][classIndex][index].abil[0].title + " Lv 1" + "<br></p>" + 

                // Req points & req level
                "<div class='skillToolBorder'><p>skill points: " + skillHolder[currentLang][classIndex][index].abil[0].reqPts + "<br>class level: " + skillHolder[currentLang][classIndex][index].abil[0].reqLv + "<br></p>" + 

                // spacing
                '<p style="height: 8px;"><br></p>'

                // skill description
                + skillHolder[currentLang][classIndex][index].abil[0].text + "</div>"
            );

            // ability B
            $(this).parent().next().next().children(".skillAbilities").children(".abilityItem").children(".abilBtooltip").html(
                // skill name + level
                "<p>" + skillHolder[currentLang][classIndex][index].abil[1].title + " Lv 1" + "<br></p>" + 

                // Req points & req level
                "<div class='skillToolBorder'><p>skill points: " + skillHolder[currentLang][classIndex][index].abil[1].reqPts + "<br>class level: " + skillHolder[currentLang][classIndex][index].abil[1].reqLv + "<br></p>" + 

                // spacing
                '<p style="height: 8px;"><br></p>'

                // skill description
                + skillHolder[currentLang][classIndex][index].abil[1].text + "</div>"
            );


        }


    });


    /*
    $(".level2").each(function(index){

        $(this).nextUntil(".tooltip").next().html(skill[index].title + "<br>" + skill[index].text[1]);

    });
    $(".level3").each(function(index){

        $(this).nextUntil(".tooltip").next().html(skill[index].title + "<br>" + skill[index].text[2]);

    });
    */

    /*
    $(".skill01>.level1+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill01>.level2+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill01>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);

    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill02>.level1+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill02>.level2+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill02>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);

    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill11>.level1+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill11>.level2+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill11>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);
    */
    /*
    $(".abilityA").each(function(index){
        $(this).parent().next().next().html(skillHolder[currentLang][classIndex][skillIndex].abil[index].title);
    });
    */

    /*
    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill12>.level1+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill12>.level2+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill12>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);

    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill21>.level1+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill21>.level2+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill21>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);

    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill22>.level1+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill22>.level2+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill22>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);

    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill31>.level1+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill31>.level2+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill31>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);

    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill32>.level1+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill32>.level2+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill32>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);

    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill41>.level1+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill41>.level2+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill41>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);

    skillIndex += 1; skill = skillHolder[currentLang][classIndex][skillIndex];
    $(".skill42>.level1+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[0]);
    $(".skill42>.level2+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[1]);
    $(".skill42>.level3+.reqPoints+.tooltip").html(skill.title + "<br>" + skill.text[2]);
    */

} // End OpenSkills()



$(".tacSkill").click(function(){
    skillBuild($(this));
});
$(".tacAbil").click(function(){
    skillBuild($(this));
});
$(".permSkill").click(function(){
    skillBuild($(this));
});
$(".regSkill").click(function(){
    skillBuild($(this));
});
$(".ultSkill").click(function(){
    skillBuild($(this));
});
$(".skillAbil").click(function(){
    skillBuild($(this));
});


var remPts = 146;
var reqPts = 0; 

function skillBuild(skill) {

    checkCost(skill);

    if (remPts >= reqPts) {
        if (skill.hasClass("skillSelected")) {
            disableSkills(skill);
        }
        else {
            enableSkills(skill);
        }
    }

    reqPts = 0;

}

function checkCost(skill) {

    // if enabled, restore points and disable
    if (skill.hasClass("skillSelected")) {

        // Level 1
        if (skill.hasClass("level1")) {

            // check lv 2
            if (skill.parent().next().children(".level2").hasClass("skillSelected")) {
                checkCost(skill.parent().next().children(".level2"));
            }

            if (skill.hasClass("tacSkill")) {
                // top row skills req 1 point
                if (skill.parent().hasClass("skill21") || skill.parent().hasClass("skill31") || skill.parent().hasClass("skill41"))  {
                    reqPts -= 1;
                } 
                // bottom row skills req 2 points
                else if (skill.parent().hasClass("skill12") || skill.parent().hasClass("skill22") || skill.parent().hasClass("skill32") || skill.parent().hasClass("skill42"))  {
                    reqPts -= 2;
                }
            }
            else if (skill.hasClass("tacAbil") || skill.hasClass("permSkill")) { reqPts -= 1; }

        }
        // Level 2
        else if (skill.hasClass("level2")) {

            // check lv 3
            if (skill.parent().next().children(".level3").hasClass("skillSelected")) {
                checkCost(skill.parent().next().children(".level3"));
            }

            if (skill.hasClass("regSkill")) {
                if (skill.parent().hasClass("skill01")) { reqPts -= 1; }
                else if (skill.parent().hasClass("skill02")) { reqPts -= 2; }
            }
            else if (skill.hasClass("tacSkill")) { reqPts -= 3; }
            else if (skill.hasClass("tacAbil") || skill.hasClass("permSkill")) { reqPts -= 2; }

        }
        // Level 3
        else if (skill.hasClass("level3")) {

            // check abilities
            if (skill.siblings(".skillAbilities").children(".abilityItem").children(".skillAbil").hasClass("skillSelected")) {
                checkCost(skill.siblings(".skillAbilities").children(".abilityItem").children(".skillAbil"));
            }

            if (skill.hasClass("regSkill")) {
                if (skill.parent().hasClass("skill01")) { reqPts -= 2; }
                else if (skill.parent().hasClass("skill02")) { reqPts -= 3; }
            }
            else if (skill.hasClass("tacSkill")) { reqPts -= 6; }
            else if (skill.hasClass("tacAbil") || skill.hasClass("permSkill")) { reqPts -= 3; }

        }
        // Ult
        else if (skill.hasClass("ultSkill")) { reqPts -= 2; }
        // Skill Ability
        else if (skill.hasClass("skillAbil")) { 
            reqPts -= 3; 
        }

    }
    // if not enabled, consume points and enable
    else {

        // Level 1
        if (skill.hasClass("level1")) {

            if (skill.hasClass("tacSkill")) {
                // top row skills req 1 point
                if (skill.parent().hasClass("skill21") || skill.parent().hasClass("skill31") || skill.parent().hasClass("skill41"))  {
                    reqPts += 1;
                } 
                // bottom row skills req 2 points
                else if (skill.parent().hasClass("skill12") || skill.parent().hasClass("skill22") || skill.parent().hasClass("skill32") || skill.parent().hasClass("skill42"))  {
                    reqPts += 2;
                }
            }
            else if (skill.hasClass("tacAbil") || skill.hasClass("permSkill")) { reqPts += 1; }

        }
        // Level 2
        else if (skill.hasClass("level2")) {

            // check level 1
            if (!skill.parent().prev().children(".level1").hasClass("skillSelected")) {
                checkCost(skill.parent().prev().children(".level1"));
            }

            if (skill.hasClass("regSkill")) {
                if (skill.parent().hasClass("skill01")) { reqPts += 1; }
                else if (skill.parent().hasClass("skill02")) { reqPts += 2; }
            }
            else if (skill.hasClass("tacSkill")) { reqPts += 3; }
            else if (skill.hasClass("tacAbil") || skill.hasClass("permSkill")) { reqPts += 2; }

        }
        // Level 3
        else if (skill.hasClass("level3")) {

            // check level 2
            if (!skill.parent().prev().children(".level2").hasClass("skillSelected")) {
                checkCost(skill.parent().prev().children(".level2"));
            }

            if (skill.hasClass("regSkill")) {
                if (skill.parent().hasClass("skill01")) { reqPts += 2; }
                else if (skill.parent().hasClass("skill02")) { reqPts += 3; }
            }
            else if (skill.hasClass("tacSkill")) { reqPts += 6; }
            else if (skill.hasClass("tacAbil") || skill.hasClass("permSkill")) { reqPts += 3; }

        }
        // Ult
        else if (skill.hasClass("ultSkill")) { reqPts += 2; }
        // Skill Ability
        else if (skill.hasClass("skillAbil")) { 

            reqPts += 3; 
            // check level 3
            if (!skill.parent().parent().siblings(".level3").hasClass("skillSelected")) {
                checkCost(skill.parent().parent().siblings(".level3"));
            }

        }


    }

}

function enableSkills(skill) {

    remPts -= reqPts;
    $(".remSkillPts").html(remPts);
    console.log("COST: " + reqPts);
    reqPts = 0;


    if (skill.hasClass("skillAbil")) {

        enableSkills(skill.parent().parent().siblings(".level3"));

    }
    else if (skill.hasClass("level3")) {
        skill.siblings(".skillAbilities").children(".abilityItem").children(".skillAbil").addClass("skillUnlocked");
        enableSkills(skill.parent().prev().children(".level2"));
    }
    else if (skill.hasClass("level2")) {

        skill.parent().next().children(".level3").addClass("skillUnlocked");
        enableSkills(skill.parent().prev().children(".level1"));
    }
    else if (skill.hasClass("level1")) {
        skill.parent().next().children(".level2").addClass("skillUnlocked");
    }

    // enable
    skill.addClass("skillSelected");

}

function disableSkills(skill) {


    remPts -= reqPts;
    $(".remSkillPts").html(remPts);
    console.log("COST: " + reqPts);
    reqPts = 0;

    // if not a default skill
    if (!(skill.parent().hasClass("skill01") || skill.parent().hasClass("skill02") || skill.parent().hasClass("skill11"))) {

        // disable
        skill.removeClass("skillSelected");

        // lv1 lock -> lv 2 -> lv 3 -> abils
        if (skill.hasClass("level1")) {
            skill.parent().next().children(".level2").removeClass("skillUnlocked");
            disableSkills(skill.parent().next().children(".level2"));
        }

        // lv 2 lock -> lv 3 -> abils
        else if (skill.hasClass("level2")) {
            skill.parent().next().children(".level3").removeClass("skillUnlocked");
            disableSkills(skill.parent().next().children(".level3"));
        }

        // lv 3 lock -> abils
        else if (skill.hasClass("level3")) {
            skill.siblings(".skillAbilities").children(".abilityItem").children(".skillAbil").removeClass("skillUnlocked");
            disableSkills(skill.siblings(".skillAbilities").children(".abilityItem").children(".skillAbil"));
        }
        else if (skill.hasClass("skillAbil")) {
            skill.removeClass("skillSelected");
        }

    }
    // if it IS a default skill, don't remove the default skill but keep functionality for the other levels
    else {
        // lv 2 lock -> lv 3 -> abils
        if (skill.hasClass("level2")) {
            // disable
            skill.removeClass("skillSelected");

            skill.parent().next().children(".level3").removeClass("skillUnlocked");
            disableSkills(skill.parent().next().children(".level3"));
        }

        // lv 3 lock -> abils
        else if (skill.hasClass("level3")) {
            // disable
            skill.removeClass("skillSelected"); 
            skill.siblings(".skillAbilities").children(".abilityItem").children(".skillAbil").removeClass("skillUnlocked");
            disableSkills(skill.siblings(".skillAbilities").children(".abilityItem").children(".skillAbil"));
        }
        else if (skill.hasClass("skillAbil")) {
            skill.removeClass("skillSelected");
        }
    }



}


// default build code 
// af 11 1000 0000 0000 0000 0 000000 0000000000
// ts 33 3000 3b00 3b00 3a00 1 300333 3333333333