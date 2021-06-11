var aegis_skills = [
    
    basic_skills = [
        
        {  
			name: "Break Slash",
			locked: 0,
            cooldown: 0,
            // Skillpoints, classlevel, tooltip
			skillinfo: [
                "0,0,Attack multiple times with your sword. Pressing a sideways movement key during the 4th hit will result in a slash attack.",
                "1,6,New combo option added. Pressing the forward movement key during the 3rd hit will result in a Light elemental attack.",
                "2,8,New combo option added. Pressing the backwards movement key during the 2nd hit will give you a defense buff."
			]
        },
           
        {  
			name: "Shield Guard",
            locked: 0,
            cooldown: 0,
            // Skillpoints, classlevel, tooltip
			skillinfo: [
                "0,0,Hold button down to guard. While guarding, hold the basic attack button to stance. You will counter attack incoming attacks while stanced.",
                "2,7,Increases shield gauge recovery speed.",
                "2,8,Increases max shield gauge value.",
			]
        }    
    ],
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tac1 = [
        
        {  
			name: "Shield Charge",
            locked: 0,
            cooldown: "12 sec",
            // Skillpoints, classlevel, tooltip
			skillinfo: [
                "0,0,Charge forward with your shield and stun enemies. Cannot be used during Shield Break.",
                "3,14,Attack after shield charging to chain a stab attack.",
                "6,21,Up to 2 attacks can be chained.",
            ],
            alphaname: "Pursuing Blow",
            alphainfo: "3,27,Damage is increased on the slam attack",
            betaname: "Iron Wall",
            betainfo: "3,27,For a limited time, increase your defense",
               
        },
            
            
            
        {  
			name: "Sunrise Charge",
            locked: 0,
            cooldown: "12 sec",
            // Skillpoints, classlevel, tooltip
			skillinfo: [
                "2,10,Rush forward with your shield. Hitting an enemy will cause a small Holy damage explosion. Cannot be used during Shield Break.",
                "3,14,Attack after shield charging to chain a stab attack. The chain will cause a medium Holy damage explosion.",
                "6,21,Up to 2 attacks can be chained. After attacking, a large Holy explosion will occur.",
            ],
                alphaname: "Deep Wounds",
                alphainfo: "3,27,Increases damage against enemies with abnormal status debuffs.",
                betaname: "Sunlight",
                betainfo: "3,27,Increases rate of accumulating elemental stacks.",

        },
],
    
    tac2 = [
        
        {  
			name: "Blow Beat",
            locked: 0,
            cooldown: "10 sec",
            // Skillpoints, classlevel, tooltip			
            skillinfo: [
                "1,2,Slam your sword into the ground in a full directional attack. Enemies that are hit will be provoked.",
                "3,15,Can be charged up to level 2, increasing skill power.",
                "6,22,At max charge, all enemies within range will be pulled to you.",
			],
            alphaname: "Wide Range",
            alphainfo: "3,28,Increases the effective radius.",
            betaname: "Quick Charge",
            betainfo: "3,28,Decreases the time required to full charge.",
            
        },
        
        {  
			name: "Celestial Pillar",
            locked: 0,
            cooldown: "? sec",
            // Skillpoints, classlevel, tooltip	
			skillinfo: [
                "2,10,Summon a pillar of light on yourself which continuously inflicting Holy damage to affected enemies.",
                "3,15,Can be charged up to level 2, increasing skill power and elemental stack accumulation.",
                "6,22,Can be charged up to level 3, increasing skill power and elemental stack accumulation.",
			],
            alphaname: "Starlight",
            alphainfo: "3,28,Increases rate of accumulating elemental stacks.",
            betaname: "Instant",
            betainfo: "3,28,Decreases the time that the Light pillar remains and increases the number of hits.",
            
        },
    ],

    tac3 = [
        
        {  
			name: "Divide Slash",
            locked: 0,
            cooldown: "? sec",
            // Skillpoints, classlevel, tooltip	
			skillinfo: [
                "1,3,Unleash a slash attack in front of you that penetrates enemies.",
                "3,16,Slash up to 2 times.",
                "6,23,Slash up to 3 times.",
			],
            alphaname: "Sturdy Blade",
            alphainfo: "3,29,Increases skill power, but disables enemy penetration.",
            betaname: "Enlarged Blade",
            betainfo: "3,29,Increases the size of the attack.",
            
        },
        
        {  
			name: "Crescent Light",
            locked: 0,
            cooldown: "12 sec",
            // Skillpoints, classlevel, tooltip	
			skillinfo: [
                "2,10,Perform a Light elemental slash attack in front of you.",
                "3,16,Slash up to 2 times.",
                "6,23,Decreases the cooldown of Crescent Light.",
			],
            alphaname: "Moonlight",
            alphainfo: "3,29,Increases rate of accumulating elemental stacks.",
            betaname: "Gigantic Blade",
            betainfo: "3,29,Increases skill power.",
            
        },
    ],

    tac4 = [
        
        {  
			name: "Fortress",
            locked: 0,
            cooldown: "25 sec",
            // Skillpoints, classlevel, tooltip	
			skillinfo: [
                "1,4,Temporarily apply a shield up status. Cannot be used during shield break.",
                "3,17,Extends the duration of Fortress.",
                "6,24,Decreases the cooldown of Fortress.",
			],
            alphaname: "Redirection",
            alphainfo: "3,30,Increases counter attack damage while Fortress is active.",
            betaname: "Thorns",
            betainfo: "3,30,Upon a successful block, an explosion occurs, dealing Light damage to enemies in range.",
    
        },
        
        {  
			name: "Regeneration",
            locked: 0,
            cooldown: "12 sec",
            // Skillpoints, classlevel, tooltip
			skillinfo: [
                "2,10,For a limited time, continuously regenerate HP.",
                "3,17,Extends the duration of Regeneration.",
                "6,24,Decreases cooldown for Regeneration.",
			],
            alphaname: "Healing Boost",
            alphainfo: "3,30,Increases the amount that Regeneration heals.",
            betaname: "Fortitude",
            betainfo: "3,30,Heals your shield guage.",
            
        },
    ],

    ult = [
        {
            name: "Judgement Shield",
            locked: 0,
            cooldown: "60 sec",
            // Skillpoints, classlevel, tooltip
			skillinfo: [
                "2,5,Slam your sword forward, causing a Holy shockwave. Using this skill recovers shield guage. Successful guards will slightly shorten Judgement Shield's cooldown.",
			]
        }
    ]
]