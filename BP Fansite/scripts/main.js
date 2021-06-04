jQuery(document).ready(function($){

    // MENU BUTTONS 
    
    
    
    //TO DO: Redo navicon:active animation
        
    //TO DO: Animate page background transitions

    
    // Change Background image based on page clicked
    $("img.navicon").click(function() {
        
        $("#background").removeClass("background-animation");
        $("#background").css("opacity", "");
        $("#background").css("opacity", "0");
        
        console.log('OPACITY = ' + $("#background").css("opacity"));
        console.log('ANIMATION = ' + $("#background").css("animation"));
        
        var currentBg = $("#background").css("background-image");
        
        if ($(this).is("#buttonTwin")){
            $("#background").css("opacity", "0");
        } 
        else if ($(this).is("#buttonAegis")) {
            $("#background").css("background-image", "url(images/af.png)");
        }
        else if ($(this).is("#buttonBlast")) {
            $("#background").css("background-image", "url(images/ba.png)");        
        }
        else if ($(this).is("#buttonSpell")) {
            $("#background").css("background-image", "url(images/sc.png)");
        }
        else if ($(this).is("#buttonHeavy")) {
            $("#background").css("background-image", "url(images/0.png)");
        }
        else {
            if (currentBg != "url(images/0.png)") {
                $("#background").css("background-image", "url(images/0.png)");
            }
        }
        
        
        
    });
    /* Alternative
    $("img.navicon").click(function(event) {
        var id = event.target.id;
        console.log('id = ' + id);
        
        if (id === "buttonAegis") {
        $("#background").css("background-image", "url(images/af.png)");
        }
    });
    */


    
    // TRIVIA
    // Generate map names and skill names from a list
    // Automatically generate "what class's skill is__ and __ is an ability for what skill? questions


    var triviaHolder = [
        { // 1
            "category": "Technical",
            "question": "What is the general name of the company that publishes Blue Protocol?",
            "choice": [],
            "answer": ["Bandai Namco"]
        },
        { // 2
            "category": "Technical",
            "question": "What is the name of the development team responsible for Blue Protocol?",
            "choice": [],
            "answer": ["Project Sky Blue"]
        },
        { // 3
            "category": "Technical",
            "question": "Who is the executive producer of Blue Protocol?",
            "choice": [],
            "answer": ["Takahiro Suzuki"]
        },
        { // 4
            "category": "Class",
            "question": "What was the 5th class added to the game?",
            "choice": [],
            "answer": ["Heavy Smasher"]
        },
        { // 5
            "category": "Lore",
            "question": "What is the name of the Aegis Fighter class instructor?",
            "choice": [],
            "answer": ["Korz"]
        },
        { // 6
            "category": "Lore",
            "question": "What is the name of the Twin Striker class instructor?",
            "choice": [],
            "answer": ["Manuel"]
        },
        { // 7
            "category": "Lore",
            "question": "What is the name of the Blast Archer class instructor?",
            "choice": [],
            "answer": ["Lily"]
        },
        { // 8
            "category": "Lore",
            "question": "What is the name of the Spell Caster class instructor?",
            "choice": [],
            "answer": ["Seila"]
        },
        { // 9
            "category": "Class",
            "question": "Perfection is an ability for which Twin Striker skill?",
            "choice": [],
            "answer": ["Burning Rush"]
        },
        { // 10
            "category": "Class",
            "question": "What class uses the skill War Cry?",
            "choice": [],
            "answer": ["Twin Striker"]
        },
        { // 11
            "category": "Class",
            "question": "What class uses the skill Negative Resonance?",
            "choice": [],
            "answer": ["Blast Archer"]
        },
        { // 12
            "category": "Class",
            "question": "Acceleration is an ability for which Blast Archer skill?",
            "choice": [],
            "answer": ["Riesel Shower"]
        },
        { // 13
            "category": "Class",
            "question": "Blast Archer’s backward + regular attack 1 key results in what?",
            "choice": [],
            "answer": ["Movement Speed Buff"]
        },
        { // 14
            "category": "Class",
            "question": "Escalation is an ability for which Spell Caster skill?",
            "choice": [],
            "answer": ["Thunder Mine, Lightning"]
        },
        { // 15
            "category": "Class",
            "question": "Which class uses the skill Engram Charge?",
            "choice": [],
            "answer": ["Spell Caster"]
        },
        { // 16
            "category": "Class",
            "question": "Starlight is an ability for which Aegis Fighter skill?",
            "choice": [],
            "answer": ["Celestial Pillar"]
        },
        { // 17
            "category": "Story",
            "question": "Which story character do you meet after defeating an Avalitia for the first time?",
            "choice": [],
            "answer": ["Melrophe"]
        },
        { // 18
            "category": "Story",
            "question": "What is the name of the NPC that gives you a mount imajinn?",
            "choice": [],
            "answer": ["Stadst"]
        },
        { // 19
            "category": "Story",
            "question": "What is the name of the inn that you wake up in after meeting Feste for the first time?",
            "choice": [],
            "answer": ["The Double-Faced Coin"]
        },
        { // 20
            "category": "Story",
            "question": "Who is the self-proclaimed “best of the best” adventurer?",
            "choice": [],
            "answer": ["Jake"]
        },
        { // 21
            "category": "Story",
            "question": "What is the name of the mysterious girl at the Bapharia Shrine?",
            "choice": [],
            "answer": ["Einrain"]
        },
        { // 22
            "category": "Story",
            "question": "What are you, the player, referred to as by some characters in the story?",
            "choice": [],
            "answer": ["Visitor"]
        },
        { // 23
            "category": "Story",
            "question": "What is Aenrinse’s bodyguard’s name?",
            "choice": [],
            "answer": ["Tyris"]
        },
        { // 24
            "category": "Story",
            "question": "What is the name of the NPC at Minsterhorn who tells you to go to the Pillar of Divinity?",
            "choice": [],
            "answer": ["Millnae"]
        },
        { // 25
            "category": "Story",
            "question": "What is the name of the girl in charge of Adventurer Registration at the Frontiering Station?",
            "choice": [],
            "answer": ["Myulie"]
        },
        { // 26
            "category": "Lore",
            "question": "What’s the name of the main town?",
            "choice": [],
            "answer": ["Asterleeds"]
        },
        { // 27
            "category": "Lore",
            "question": "What is the desert-themed town called?",
            "choice": [],
            "answer": ["Salamzert"]
        },
        { // 28
            "category": "Gameplay",
            "question": "Which color liquid memory increases enemy drop rate?",
            "choice": [],
            "answer": ["Purple"]
        },
        { // 29
            "category": "Gameplay",
            "question": "What is the max amount of attachment slots a weapon can have?",
            "choice": [],
            "answer": ["4"]
        },
        { // 30
            "category": "Gameplay",
            "question": "Which element has “high damage explosion” as a burst effect?",
            "choice": [],
            "answer": ["Fire, Lightning, Light"]
        },
        { // 31
            "category": "Gameplay",
            "question": "How many waves does Arena [S Rank] have?",
            "choice": [],
            "answer": ["25"]
        },
        { // 32
            "category": "Gameplay",
            "question": "What is the name for the highest level dungeon difficulty?",
            "choice": [],
            "answer": ["Advanced Survey"]
        },
        { // 33
            "category": "Gameplay",
            "question": "What is the name of the boss in Mechanical Ruin Valley?",
            "choice": [],
            "answer": ["Quad Arm"]
        },
        { // 34
            "category": "Gameplay",
            "question": "What zone is the town Larpal in?",
            "choice": [],
            "answer": ["Divine Haven Hill"]
        },
        { // 35
            "category": "Gameplay",
            "question": "What is the first zone outside of Asterleeds called?",
            "choice": [],
            "answer": ["Skyquake Fields"]
        },
        { // 36
            "category": "Gameplay",
            "question": "What zone is the dungeon Dragonclaw Valley [Free Exploration] found in?",
            "choice": [],
            "answer": ["Minster Hills"]
        },
        { // 37
            "category": "Lore",
            "question": "What is the world of BLUE PROTOCOL called?",
            "choice": [],
            "answer": ["Regnus"]
        },
        { // 38
            "category": "Gameplay",
            "question": "How many warp portals are in Asterleeds?",
            "choice": [],
            "answer": ["7"]
        },
        { // 39
            "category": "Class",
            "question": "Which class has the highest base attack on their weapons?",
            "choice": [],
            "answer": ["Twin Striker"]
        },
        { // 40
            "category": "Gameplay",
            "question": "What is the default amount of stamina?",
            "choice": [],
            "answer": ["100"]
        },
        { // 41
            "category": "Gameplay",
            "question": "How often do most elite monsters spawn?",
            "choice": [],
            "answer": ["15 minutes"]
        },
        { // 42
            "category": "Gameplay",
            "question": "What is the name of the level 18 raid boss?",
            "choice": [],
            "answer": ["Demidragon"]
        },
        { // 43
            "category": "Gameplay",
            "question": "What is the max party size?",
            "choice": [],
            "answer": ["6"]
        },
        { // 44
            "category": "Gameplay",
            "question": "How many players can be in a raid?",
            "choice": [],
            "answer": ["20"]
        },
        { // 45
            "category": "Class",
            "question": "Which class can equip the weapon Bapharia's Guidance?",
            "choice": [],
            "answer": ["Aegis Fighter"]
        },
        { // 46
            "category": "Class",
            "question": "Which class has no heal skills?",
            "choice": [],
            "answer": ["Spell Caster"]
        },
        { // 47
            "category": "Gameplay",
            "question": "What is the strongest battle imajinn called?",
            "choice": [],
            "answer": ["Sealed Tyranny"]
        },
        { // 48
            "category": "Gameplay",
            "question": "How many healer-type battle imajinn are there?",
            "choice": [],
            "answer": ["3"]
        },
        { // 49
            "category": "Technical",
            "question": "What year did the development of BLUE PROTOCOL begin?",
            "choice": [],
            "answer": ["2016"]
        },
        { // 50
            "category": "Gameplay",
            "question": "How many character voice options can you choose from during character creation?",
            "choice": [],
            "answer": ["3"]
        },
        { // 51
            "category": "Class",
            "question": "Which class is often considered the biggest support role?",
            "choice": [],
            "answer": ["Blast Archer"]
        },
        { // 52
            "category": "Gameplay",
            "question": "How many Permanent Skills & Tactical Abilities are the same for each class?",
            "choice": [],
            "answer": ["14"]
        },
        { // 53
            "category": "Gameplay",
            "question": "How many different inner imajinn slots are there?",
            "choice": [],
            "answer": ["5"]
        },
        { // 54
            "category": "Gameplay",
            "question": "How many accessory slots are confirmed by the developers?",
            "choice": [],
            "answer": ["7"]
        },
    ]
    
    
    // MAP


    // SKILL BUILDER
    
    });
