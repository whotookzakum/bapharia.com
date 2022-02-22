jQuery(document).ready(function ($) {
    
    
    $(document).keydown(function (event) {
        if (event.keyCode == 123) { // Prevent F12
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I     
            return false;
        }
    }); 
    
    var currentLang = 0;
    
    // Check for language switch
    $(document).keydown(function (event) {
        
        // keydown E
        if (event.keyCode == 69) {
            currentLang = 0;
        }
        
        // keydown J
        if (event.keyCode == 74) {
            currentLang = 1;
        }
        
        // keydown P 
        if (event.keyCode == 80) {
            currentLang = 2;
        }
        
        // keydown R
        if (event.keyCode == 82) {
            currentLang = 3;
        }
        switchLang(currentLang);

    });
    
    
    // Switch languages
    function switchLang(lang) {
        
        // JAPANESE
        if (lang == 1) {
            
            // Menu Buttons
            $("#buttonImajinn+p").html("イマジン<br><br>");
            $("#buttonCrafting+p").html("クラフト<br><br>");
            $("#buttonWorldMap+p").html("地図<br><br>");
            $("#buttonGuide+p").html("ゲーム<br>ガイド");
            $("#buttonAegis+p").html("イージス<br>ファイター");
            $("#buttonTwin+p").html("ツイン<br>ストライカー");
            $("#buttonBlast+p").html("ブラスト<br>アーチャー");
            $("#buttonSpell+p").html("スペル<br>キャスター");
            $("#buttonHeavy+p").html("ヘヴィ<br>スマッシャー");
            
            // Change crafting and imajinn text regardless of current page
            biHolder = biHolderJP;
            iiHolder = iiHolderJP;
            if (listHolder == biHolderJP || listHolder == biHolderEN || listHolder == biHolderBR || listHolder == biHolderRU) {
                biHolder = biHolderJP;
                iiHolder = iiHolderJP;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderJP || listHolder == iiHolderEN || listHolder == iiHolderBR || listHolder == iiHolderRU) {
                biHolder = biHolderJP;
                iiHolder = iiHolderJP;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("攻撃力 &nbsp;");
            $(".w-infoEle").html("<br>属性");
            $(".w-slotCount").html("スロット数 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("バトル<br>イマジン");
            $(".iiSelector>p").html("インナー<br>イマジン");
            $(".biSelector").css("font-size","0.599vw");
            $(".iiSelector").css("font-size","0.599vw");
            // Crafting and Imajinn 
            $(".reqItemHeader").html("必要アイテム  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;必要数");
            $(".reqLunoHeader").html("必要ルーノ");
            $(".abilityHeader").html("付与アビリティ候補");
            $(".statStr").html("筋力");
            $(".statInt").html("知力");
            $(".statHp").html("最大HP");
            $(".statVit").html("耐久力");
            $(".statMnd").html("精神力");
            $(".statAtk").html("攻撃力");
            $(".statDex").html("器用さ");
            $(".statStr").css("font-size","0.677vw");
            $(".statInt").css("font-size","0.729vw");
            $(".statHp").css("font-size","0.729vw");
            $(".statVit").css("font-size","0.729vw");
            $(".statMnd").css("font-size","0.729vw");
            $(".statAtk").css("font-size","0.729vw");
            $(".statDex").css("font-size","0.729vw");
            $(".matItem").css("font-size","1.146vw");
            $(".levelToggle>p").html("レベル");
            $(".levelToggle>p").css("font-size","0.599vw");
            $(".listItem-reqAR").html("冒険ﾗﾝｸ");

            // Map JP
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn JP
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder); 
            }
        
            // Crafting JP
            if (currentPage == "#craftingContainer") {
                
                listWeapons(wepHolder[currentLang]);
                dispWeapon(wepHolder[currentLang]);
            }

            
        }
        
        // ENGLISH
        else if (lang == 0) {
            
            // Menu Buttons
            $("#buttonImajinn+p").html("Imagine<br><br>");
            $("#buttonCrafting+p").html("Crafting<br><br>");
            $("#buttonWorldMap+p").html("World<br>Map");
            $("#buttonGuide+p").html("Game<br>Guide");
            $("#buttonAegis+p").html("Aegis<br>Fighter");
            $("#buttonTwin+p").html("Twin<br>Striker");
            $("#buttonBlast+p").html("Blast<br>Archer");
            $("#buttonSpell+p").html("Spell<br>Caster");
            $("#buttonHeavy+p").html("Heavy<br>Smasher");
            
            // Change crafting and imajinn text regardless of current page
            biHolder = biHolderEN;
            iiHolder = iiHolderEN;
            if (listHolder == biHolderEN || listHolder == biHolderJP || listHolder == biHolderBR || listHolder == biHolderRU) {
                biHolder = biHolderEN;
                iiHolder = iiHolderEN;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderEN || listHolder == iiHolderJP || listHolder == iiHolderBR || listHolder == iiHolderRU) {
                biHolder = biHolderEN;
                iiHolder = iiHolderEN;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("attack &nbsp;");
            $(".w-infoEle").html("<br>element");
            $(".w-slotCount").html("slots &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("Battle<br>Imagine");
            $(".iiSelector>p").html("Inner<br>Imagine");
            $(".biSelector").css("font-size","0.6775vw");
            $(".iiSelector").css("font-size","0.6775vw");
            // Crafting and Imajinn
            $(".reqItemHeader").html("Required items  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount");
            $(".reqLunoHeader").html("Req. luno");
            $(".abilityHeader").html("Possible abilities");
            $(".statStr").html("str");
            $(".statInt").html("int");
            $(".statHp").html("max hp");
            $(".statVit").html("vit");
            $(".statMnd").html("mnd");
            $(".statAtk").html("atk");
            $(".statDex").html("dex");
            $(".statStr").css("font-size","1.05vw");
            $(".statInt").css("font-size","1.05vw");
            $(".statHp").css("font-size","1.05vw");
            $(".statVit").css("font-size","1.05vw");
            $(".statMnd").css("font-size","1.05vw");
            $(".statAtk").css("font-size","1.05vw");
            $(".statDex").css("font-size","1.05vw");
            $(".levelToggle>p").html("Level");
            $(".listItem-reqAR").html("Req. AR");
            $(".matItem").css("font-size","1.25vw");
            
            
            // Map EN
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn EN
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder);
            }

            // Crafting EN
            if (currentPage == "#craftingContainer") {
                listWeapons(wepHolder[currentLang]);
                dispWeapon(wepHolder[currentLang]);
            }
            
   
        }
        
        // BRAZILIAN PORTUGUESE
        else if (lang == 2) { 

            // Menu Buttons
            $("#buttonImajinn+p").html("Imagine<br><br>");
            $("#buttonCrafting+p").html("Crafting<br><br>");
            $("#buttonWorldMap+p").html("World<br>Map");
            $("#buttonGuide+p").html("Game<br>Guide");
            $("#buttonAegis+p").html("Aegis<br>Fighter");
            $("#buttonTwin+p").html("Twin<br>Striker");
            $("#buttonBlast+p").html("Blast<br>Archer");
            $("#buttonSpell+p").html("Spell<br>Caster");
            $("#buttonHeavy+p").html("Heavy<br>Smasher");
            
            // Change crafting and imajinn text regardless of current page
            biHolder = biHolderBR;
            iiHolder = iiHolderBR;
            if (listHolder == biHolderEN || listHolder == biHolderJP || listHolder == biHolderBR || listHolder == biHolderRU) {
                biHolder = biHolderBR;
                iiHolder = iiHolderBR;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderEN || listHolder == iiHolderJP || listHolder == iiHolderBR || listHolder == iiHolderRU) {
                biHolder = biHolderBR;
                iiHolder = iiHolderBR;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("Ataque &nbsp;");
            $(".w-infoEle").html("<br>elemento");
            $(".w-slotCount").html("slots &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("Imajinn<br>de Batalha");
            $(".iiSelector>p").html("Imajinn<br>Interno");
            $(".biSelector").css("font-size","0.6775vw");
            $(".iiSelector").css("font-size","0.6775vw");
            // Crafting and Imajinn
            $(".reqItemHeader").html("Itens Necessários  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qnt.");
            $(".reqLunoHeader").html("Luno Nec.");
            $(".abilityHeader").html("Possíveis talentos");
            $(".statStr").html("str");
            $(".statInt").html("int");
            $(".statHp").html("max hp");
            $(".statVit").html("vit");
            $(".statMnd").html("mnd");
            $(".statAtk").html("atk");
            $(".statDex").html("dex");
            $(".statStr").css("font-size","1.05vw");
            $(".statInt").css("font-size","1.05vw");
            $(".statHp").css("font-size","1.05vw");
            $(".statVit").css("font-size","1.05vw");
            $(".statMnd").css("font-size","1.05vw");
            $(".statAtk").css("font-size","1.05vw");
            $(".statDex").css("font-size","1.05vw");
            $(".levelToggle>p").html("Nivel");
            $(".listItem-reqAR").html("Nec. AR");
            $(".matItem").css("font-size","1.25vw");
            
            
            // Map PT
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn PT
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder);
            }

            // Crafting PT
            if (currentPage == "#craftingContainer") {
                listWeapons(wepHolder[currentLang]);
                dispWeapon(wepHolder[currentLang]);
            }
        
        }
        
        // RUSSIAN
        else if (lang == 3) {
            
            // Menu Buttons
            $("#buttonImajinn+p").html("Imagine<br><br>");
            $("#buttonCrafting+p").html("Crafting<br><br>");
            $("#buttonWorldMap+p").html("World<br>Map");
            $("#buttonGuide+p").html("Game<br>Guide");
            $("#buttonAegis+p").html("Aegis<br>Fighter");
            $("#buttonTwin+p").html("Twin<br>Striker");
            $("#buttonBlast+p").html("Blast<br>Archer");
            $("#buttonSpell+p").html("Spell<br>Caster");
            $("#buttonHeavy+p").html("Heavy<br>Smasher");
            
            // Change crafting and imajinn text regardless of current page
            biHolder = biHolderRU;
            iiHolder = iiHolderRU;
            if (listHolder == biHolderEN || listHolder == biHolderJP || listHolder == biHolderBR || listHolder == biHolderRU) {
                biHolder = biHolderRU;
                iiHolder = iiHolderRU;
                listHolder = biHolder;
            }
            else if (listHolder == iiHolderEN || listHolder == iiHolderJP || listHolder == iiHolderBR || listHolder == iiHolderRU) {
                biHolder = biHolderRU;
                iiHolder = iiHolderRU;
                listHolder = iiHolder;
            }
            // Crafting
            $(".statAtkL").html("Атака &nbsp;");
            $(".w-infoEle").html("<br>Элемент");
            $(".w-slotCount").html("Ячейки &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?");
            // Imajinn
            $(".biSelector>p").html("Battle<br>Imagine");
            $(".iiSelector>p").html("Inner<br>Imagine");
            $(".biSelector").css("font-size","0.6775vw");
            $(".iiSelector").css("font-size","0.6775vw");
            // Crafting and Imajinn
            $(".reqItemHeader").html("Required items  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount");
            $(".reqLunoHeader").html("Req. luno");
            $(".abilityHeader").html("Possible abilities");
            $(".statStr").html("str");
            $(".statInt").html("int");
            $(".statHp").html("max hp");
            $(".statVit").html("vit");
            $(".statMnd").html("mnd");
            $(".statAtk").html("atk");
            $(".statDex").html("dex");
            $(".statStr").css("font-size","1.05vw");
            $(".statInt").css("font-size","1.05vw");
            $(".statHp").css("font-size","1.05vw");
            $(".statVit").css("font-size","1.05vw");
            $(".statMnd").css("font-size","1.05vw");
            $(".statAtk").css("font-size","1.05vw");
            $(".statDex").css("font-size","1.05vw");
            $(".levelToggle>p").html("Level");
            $(".listItem-reqAR").html("Req. AR");
            $(".matItem").css("font-size","1.25vw");
            
            
            // Map RU
            if (currentPage == "#mapContainer") {
                dispMap();
            }
            
            // Imajinn RU
            if (currentPage == "#ImajinnContainer") {
                dispImajinn(listHolder);
            }

            // Crafting RU
            if (currentPage == "#craftingContainer") {
                listWeapons(wepHolder[currentLang]);
                dispWeapon(wepHolder[currentLang]);
            }
        
        }
        
    }

});