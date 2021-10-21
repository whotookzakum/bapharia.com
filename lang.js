// Skills
// Translate TITLE, TEXT and ABIL TITLE, ABIL TEXT

var skillHolder = [
        // ENGLISH
        [
            // Aegis Fighter 0
            [
                // 0 Reg Skill LEFT
                {
                    title: "Break Slash",
                    reqPts: ["0","1","2"],
                    reqLv: ["0","6","8"],
                    text: [
                            "Normal combo attacks that utilize a sword<br>Alternate to a spin attack by pressing a sideways directional key during the 4th attack", 
                            "Adds an attack variation<br>Alternate to a Light elemental attack by pressing the forward directional key during the 3rd attack", 
                            "Adds an attack variation<br>Alternate to a DEF UP self buff by pressing the backwards directional key during the 2nd attack"
                    ]
                },
                
                // 1 Reg Skill RIGHT
                {
                    title: "Shield Guard",
                    reqPts: ["0","2","3"],
                    reqLv: ["0","7","9"],
                    text: [
                            "Hold down the key to Guard<br>Holding normal attack while guarding will prepare your sword, and being attacked in this state will initiate a counter attack", 
                            "Increases the shield gauge's rate of recovery", 
                            "Increases the maximum limit of the shield gauge"
                    ]
                },
                
                // 2 Tac Skill 1 TOP
                {
                    title: "Shield Charge",
                    reqPts: ["0","3","6"],
                    reqLv: ["0","14","21"],
                    text: [
                            "Rush forward with your shield, stunning all enemies that are hit<br>Can't be used during Guard Break", 
                            "Adds the ability to chain an attack after the rush", 
                            "Adds the ability to chain up to 2 attacks"
                    ],
                    abil: [
                        {
                            title: "Pursuit",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increase damage of the downward attack"
                        },
                        {
                            title: "Iron Wall",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Temporarily increase your DEF"
                        }
                    ]
                },
                
                // 3 Tac Skill 1 BOTTOM
                {
                    title: "Sunrise Charge",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","14","21"],
                    text: [
                            "Rush forward with your shield, successful attacks will release small Light elemental explosions<br>Can't be used during Guard Break", 
                            "Adds the ability to chain an attack after the rush<br>After the attack, a medium-sized Light elemental explosion will occur", 
                            "Adds the ability to chain up to 2 attacks<br>After the attack, a large-sized Light elemental explosion will occur"
                    ],
                    abil: [
                        {
                            title: "Deep Cuts",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases damage against enemies with elemental status ailments"
                        },
                        {
                            title: "Sunlight",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases the rate of elemental charge accumulation"
                        }
                    ]
                },
                
                // 4 Tac Skill 2 TOP
                {
                    title: "Blow Beat",
                    reqPts: ["1","3","6"],
                    reqLv: ["2","15","22"],
                    text: [
                            "An all-directional shockwave attack centered around yourself<br>Enemies that are hit will be provoked", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill power", 
                            "When charged to the max, enemies that are hit will be drawn in towards you"],
                    abil: [
                        {
                            title: "Wide Range",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Increases the skill's effective area"
                        },
                        {
                            title: "Quick Charge",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Reduces the time required to reach max charge"
                        }
                    ]
                },
                
                // 5 Tac Skill 2 BOTTOM
                {
                    title: "Celestial Pillar",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","15","22"],
                    text: [
                            "Summons a pillar of light centered on you<br>Continuously applies Light elemental damage to enemies within the skill's range", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation"
                    ],
                    abil: [
                        {
                            title: "Starlight",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Increases the rate of Light elemental charge accumulation"
                        },
                        {
                            title: "Instantaneous",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Reduces the duration of the Light pillars and increases hit count"
                        }
                    ]
                },
                
                // 6 Tac Skill 3 TOP
                {
                    title: "Divide Slash",
                    reqPts: ["1","3","6"],
                    reqLv: ["3","16","23"],
                    text: [
                            "A slash attack that pierces enemies in front of you", 
                            "Adds the ability to slash up to 2 times", 
                            "Adds the ability to slash up to 3 times"
                    ],
                    abil: [
                        {
                            title: "Tempered Blade",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases skill power but slashes no longer pierce enemies"
                        },
                        {
                            title: "Extended Sword",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases slash range"
                        }
                    ]
                },
                
                // 7 Tac Skill 3 BOTTOM
                {
                    title: "Crescent Light",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","16","23"],
                    text: [
                            "A Light elemental slash attack in the forward direction", 
                            "Adds the ability to slash up to 2 times", 
                            "Reduces skill cooldown"
                    ],
                    abil: [
                        {
                            title: "Moonlight",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases rate of elemental charge accumulation"
                        },
                        {
                            title: "Gigablade",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases skill power"
                        }
                    ]
                },
                
                // 8 Tac Skill 4 TOP
                {
                    title: "Fortress",
                    reqPts: ["1","3","6"],
                    reqLv: ["4","17","24"],
                    text: [
                            "Temporarily apply the Shield Up status effect<br>Can't be used during Guard Break", 
                            "Increases skill duration", 
                            "Reduces skill cooldown"
                    ],
                    abil: [
                        {
                            title: "Unison",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Increases counter attack power while skill is in effect"
                        },
                        {
                            title: "Thorns",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Successful guards while the skill is in effect will cause an explosion, applying Light elemental damage to surrounding enemies"
                        }
                    ]
                },
                
                // 9 Tac Skill 4 BOTTOM
                {
                    title: "Regeneration",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","17","24"],
                    text: [
                            "Continuously recover HP over a period of time", 
                            "Increases skill duration", 
                            "Reduces skill cooldown"
                    ],
                    abil: [
                        {
                            title: "Healing Boost",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Increases the HP recovered by Regeneration"
                        },
                        {
                            title: "Fortify",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Recover your shield gauge along with HP"
                        }
                    ]
                },
                
                // 10 ULT Skill
                {
                    title: "Judgement Shield",
                    reqPts: "2",
                    reqLv: "5",
                    text: "A Light elemental shockwave attack that hits an area in front of you<br>Shield Gauge is recovered upon use<br>Successful guards slightly reduce ULT skill cooldown"
                },
                
                // 11 Tac Abil 5
                {
                    title: "Shield Gauge Efficiency",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "Reduces the amount of shield gauge consumed after a successful block", 
                            "Reduces the amount of shield gauge consumed after a successful block", 
                            "Reduces the amount of shield gauge consumed after a successful block"
                    ]
                },
                
                // 12 Tac Abil 6
                {
                    title: "Shield Gauge Recovery Speed",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "Increases the recovery rate of the Shield Gauge", 
                            "Increases the recovery rate of the Shield Gauge", 
                            "Increases the recovery rate of the Shield Gauge"
                    ]
                }

                
            ],
            // Twin Striker 1
            [
                // 0 Reg Skill LEFT
                {
                    title: "Beast Swing",
                    reqPts: ["0","1","2"],
                    reqLv: ["0","6","8"],
                    text: [
                            "Normal combo attack that utilizes axes<br>Alternate to a wide range attack by pressing a sideways directional key at the 4th stage", 
                            "Adds an attack variation<br>Alternate to a fire elemental attack by pressing the forward directional key during the 3rd attack", 
                            "Adds an attack variation<br>Alternate to an ATK UP self buff by pressing the backwards directional key during the 2nd attack"
                    ]
                },
                
                // 1 Reg Skill RIGHT
                {
                    title: "Axe Tornado",
                    reqPts: ["0","2","3"],
                    reqLv: ["0","7","9"],
                    text: [
                            "Perform a spinning attack<br>During the attack you are immune to flinching and incoming damage is reduced", 
                            "Enemies are more likely to be knocked back when hit", // Enemies that are hit are more likely to be knocked back... (by successive attacks or only this one..?)
                            "Adds the ability to chain a spinning attack after the uppercut" // might be incorrect
                    ]
                },
                
                // 2 Tac Skill 1 TOP
                {
                    title: "Brutal Blow",
                    reqPts: ["0","3","6"],
                    reqLv: ["0","14","21"],
                    text: [
                            "A wide ranged spin attack in the forward direction", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill power", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases skill power"
                    ],
                    abil: [
                        {
                            title: "Absorber",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Recover a portion of the damage dealt as HP"
                        },
                        {
                            title: "Fighting Spirit",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Consumes combo gauge when the skill is used to increase skill power"
                        }
                    ]
                },
                
                // 3 Tac Skill 1 BOTTOM
                {
                    title: "Crimson Blow",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","14","21"],
                    text: [
                            "A fire elemental spin attack<br>Can hit up to 3 times", 
                            "Reduces skill damage but increases maximum hits to 5 and increases the rate of elemental charge accumulation", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power and rate of elemental charge accumulation"
                    ],
                    abil: [
                        {
                            title: "Rush Up",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases the rate of combo gauge accumulation"
                        },
                        {
                            title: "Trance",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases the rate of elemental charge accumulation"
                        }
                    ]
                },
                
                // 4 Tac Skill 2 TOP
                {
                    title: "Fall Impact",
                    reqPts: ["1","3","6"],
                    reqLv: ["2","15","22"],
                    text: [
                            "A large forward-leap attack<br>Upon landing, shockwaves will damage the surrounding area", 
                            "Enemies that are hit are more likely to get knocked down", // will BECOME easier to knock down (by successive hits) ..?
                            "Increases the shockwave's effective area and skill power"],
                    abil: [
                        {
                            title: "Overswing",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Increases skill's effective area"
                        },
                        {
                            title: "Fatal Hit",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Increases the damage of the down attack"
                        }
                    ]
                },
                
                // 5 Tac Skill 2 BOTTOM
                {
                    title: "Lava Impact",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","15","22"],
                    text: [
                            "A forward-leap attack imbued with fire<br>Causes the ground around the impact to catch on fire, dealing continuous damage", 
                            "Leap up to 2 times<br>After both attacks, the ground will catch fire", 
                            "Leap up to 3 times<br>After all 3 attacks, the ground will catch fire"
                    ],
                    abil: [
                        {
                            title: "Pinpoint Attack",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Decreases the ground fire's size but increases its damage"
                        },
                        {
                            title: "Progress",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Increases the duration of the ground fire"
                        }
                    ]
                },
                
                // 6 Tac Skill 3 TOP
                {
                    title: "Storm Rush",
                    reqPts: ["1","3","6"],
                    reqLv: ["3","16","23"],
                    text: [
                            "A wide range 2-hit combo attack to enemies in front of you", 
                            "Maximum hits increases to 4", 
                            "Maximum hits increases to 6"
                    ],
                    abil: [
                        {
                            title: "Violation",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases the damage of the down attack"
                        },
                        {
                            title: "Combo Accel",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases the rate of combo gauge accumulation"
                        }
                    ]
                },
                
                // 7 Tac Skill 3 BOTTOM
                {
                    title: "Burning Rush",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","16","23"],
                    text: [
                            "A 2-hit fire elemental combo attack to enemies in front of you", 
                            "Maximum hits increases to 4", 
                            "Maximum hits increases to 6"
                    ],
                    abil: [
                        {
                            title: "Sensibility",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases the rate of elemental charge accumulation"
                        },
                        {
                            title: "Perfection",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Reduces Burning Rush's cooldown if all attacks successfully hit"
                        }
                    ]
                },
                
                // 8 Tac Skill 4 TOP
                {
                    title: "Warcry",
                    reqPts: ["1","3","6"],
                    reqLv: ["4","17","24"],
                    text: [
                            "Temporarily applies the Super Armor self buff<br>(You will not flinch when hit)", 
                            "Increases skill duration", 
                            "Reduces skill cooldown"
                    ],
                    abil: [
                        {
                            title: "Berserk",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Applies Warcry to self and nearby party members"
                        },
                        {
                            title: "Unbreakable Spirit",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Recover HP when the skill is used"
                        }
                    ]
                },
                
                // 9 Tac Skill 4 BOTTOM
                {
                    title: "Blood Axe",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","17","24"],
                    text: [
                            "Temporarily applies an HP Drain self buff<br>(A portion of damage dealt will be restored as HP)", 
                            "Increases skill duration", 
                            "Reduces skill cooldown"
                    ],
                    abil: [
                        {
                            title: "Inspire",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Applies Blood Axe to self and nearby party members"
                        },
                        {
                            title: "Selfish",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Increases the amount of HP recovered when damaging enemies"
                        }
                    ]
                },
                
                // 10 ULT Skill
                {
                    title: "Vortex Impact",
                    reqPts: "2",
                    reqLv: "5",
                    text: "Lift enemies in front of you, then slam down the area on the ground"
                },
                
                // 11 Tac Abil 5
                {
                    title: "Combo Gauge Filler",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "Increases the rate at which the Combo Gauge fills", 
                            "Increases the rate at which the Combo Gauge fills", 
                            "Increases the rate at which the Combo Gauge fills"
                    ]
                },
                
                // 12 Tac Abil 6
                {
                    title: "Max Combo Gauge Bonus",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "Further increases your damage when the combo gauge is full", 
                            "Further increases your damage when the combo gauge is full", 
                            "Further increases your damage when the combo gauge is full"
                    ]
                }
            ],
            // Blast Archer 2 
            [
                // 0 Reg Skill LEFT
                {
                    title: "Arrow Rush",
                    reqPts: ["0","1","2"],
                    reqLv: ["0","6","8"],
                    text: [
                            "Chain up to 4 longe ranged attacks using a bow and arrow<br>Perform a 5-way cone shaped attack in front of you by holding the key during the 2nd attack", 
                            "Alternate to an earth elemental area attack by holding the key during the 3rd attack", 
                            "Hold the key during the first attack to apply a Speed Up status effect to nearby players in front of you"
                    ]
                },
                
                // 1 Reg Skill RIGHT
                {
                    title: "Slalom Shot",
                    reqPts: ["0","2","3"],
                    reqLv: ["0","7","9"],
                    text: [
                            "Consume stamina to attack in a straight line while moving<br>Can't be used with insufficient stamina", 
                            "Increases movement distance", 
                            "Reduces stamina consumption"
                    ]
                },
                
                // 2 Tac Skill 1 TOP
                {
                    title: "Strike Arrow",
                    reqPts: ["0","3","6"],
                    reqLv: ["0","14","21"],
                    text: [
                            "Fire a high-damage arrow in a straight line", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
                    ],
                    abil: [
                        {
                            title: "Concentration",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Reduces the time required to reach max charge"
                        },
                        {
                            title: "Full Power Shot",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases skill power but also increases time required to reach max charge"
                        }
                    ]
                },
                
                // 3 Tac Skill 1 BOTTOM
                {
                    title: "Hypno Blast",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","14","21"],
                    text: [
                            "Fire an arrow that puts enemies to sleep, inflicting the Sleep status ailment", 
                            "Adds piercing effect", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power"
                    ],
                    abil: [
                        {
                            title: "Damage Boost",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases skill power, but loses piercing effect"
                        },
                        {
                            title: "Quick Drive",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Reduces the time required to reach max charge"
                        }
                    ]
                },
                
                // 4 Tac Skill 2 TOP
                {
                    title: "Stampede Arrow",
                    reqPts: ["1","3","6"],
                    reqLv: ["2","15","22"],
                    text: [
                            "Fires 4 homing arrows at nearby enemies", 
                            "Number of arrows increases to 6", 
                            "Adds the ability to fire an additional arrow straight ahead after the homing arrows"],
                    abil: [
                        {
                            title: "Poisonic",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Applies poison to enemies"
                        },
                        {
                            title: "Penetration",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Adds piercing effect"
                        }
                    ]
                },
                
                // 5 Tac Skill 2 BOTTOM
                {
                    title: "Negative Resonance",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","15","22"],
                    text: [
                            "Fire a straight shot arrow<br>If the enemies that are hit have an elemental status ailment, the status ailment will be spread to nearby enemies", 
                            "Increases the range that the elemental status ailment can be spread", 
                            "Adds the ability to chain an additional attack after the first"
                    ],
                    abil: [
                        {
                            title: "Range Attack",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Successfully spreading elemental status ailments will deal additional damage"
                        },
                        {
                            title: "Chain Infection",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Adds piercing effect"
                        }
                    ]
                },
                
                // 6 Tac Skill 3 TOP
                {
                    title: "Lethal Shower",
                    reqPts: ["1","3","6"],
                    reqLv: ["3","16","23"],
                    text: [
                            "Rains down arrows at the designated spot<br>Continuously damages enemies within the skill's effective area", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases skill's effective area and skill power", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases skill's effective area and skill power"
                    ],
                    abil: [
                        {
                            title: "Concentrated Rainstorm",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Reduces the skill's effective area but increases skill power"
                        },
                        {
                            title: "Acceleration",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Reduces the time required to reach max charge"
                        }
                    ]
                },
                
                // 7 Tac Skill 3 BOTTOM
                {
                    title: "Dust Force",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","16","23"],
                    text: [
                            "Launch an area attack at a designated spot<br>Continuously deals earth elemental damage and strengthens status ailments", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the duration of the damaging area", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the duration of the damaging area"
                    ],
                    abil: [
                        {
                            title: "Tempered Agility",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Reduces the time required to reach max charge"
                        },
                        {
                            title: "Delay",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Applies the Speed Down status effect to enemies"
                        }
                    ]
                },
                
                // 8 Tac Skill 4 TOP
                {
                    title: "Healing Arrow",
                    reqPts: ["1","3","6"],
                    reqLv: ["4","17","24"],
                    text: [
                            "Generates a healing field at the designated spot", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill's effective area and HP recovery amount", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill's effective area and HP recovery amount"
                    ],
                    abil: [
                        {
                            title: "Scale Up",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Increases the skill's effective area"
                        },
                        {
                            title: "Snipe Heal",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Reduces the skill's effective area but increases HP recovery"
                        }
                    ]
                },
                
                // 9 Tac Skill 4 BOTTOM
                {
                    title: "Hunter's Spirit",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","17","24"],
                    text: [
                            "Temporarily applies the Quick Interval status effect on yourself<br>(Reduces regular/tactical skill cooldowns)", 
                            "Increases skill duration", 
                            "Reduces skill cooldown"
                    ],
                    abil: [
                        {
                            title: "Signal Flare",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Applies Hunter's Spirit to nearby party members"
                        },
                        {
                            title: "Sharpness",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Temporarily apply the ATK UP status effect"
                        }
                    ]
                },
                
                // 10 ULT Skill
                {
                    title: "Mortal Gravity",
                    reqPts: "2",
                    reqLv: "5",
                    text: "Draw in nearby enemies to the point of impact<br>Continuously damage enemies within the skill's range"
                },
                
                // 11 Tac Abil 5
                {
                    title: "Rescue Up",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "Reduces the time required to rescue a player", 
                            "Reduces the time required to rescue a player", 
                            "Reduces the time required to rescue a player"
                    ]
                },
                
                // 12 Tac Abil 6
                {
                    title: "Recovery Up",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "Increases the effect of self-healing actions", 
                            "Increases the effect of self-healing actions", 
                            "Increases the effect of self-healing actions"
                    ]
                }
            ],
            // Spell Caster 3
            [
                // 0 Reg Skill LEFT
                {
                    title: "Trinity Shot",
                    reqPts: ["0","1","2"],
                    reqLv: ["0","6","8"],
                    text: [
                            "Attack up to 3 times from range using engram bullets<br>Alternate to a knockback attack by pressing a sideways directional key during the 3rd attack", 
                            "Alternate to an attack that applies Speed Down by pressing the forward directional key during the 3rd attack", 
                            "Apply a Quick Charge self buff by pressing the backwards directional key during the 3rd attack"
                    ]
                },
                
                // 1 Reg Skill RIGHT
                {
                    title: "Engram Charge",
                    reqPts: ["0","2","3"],
                    reqLv: ["0","7","9"],
                    text: [
                            "When activated, recover EP<br>Holding the key down will continuously recover EP", 
                            "Increases the amount of EP recovered while holding the key down", 
                            "Increases the amount of EP recovered while the skill is active"
                    ]
                },
                
                // 2 Tac Skill 1 TOP
                {
                    title: "Fire Blast",
                    reqPts: ["0","3","6"],
                    reqLv: ["0","14","21"],
                    text: [
                            "A single long range fire elemental attack", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
                    ],
                    abil: [
                        {
                            title: "Quick Charge",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Reduces the time required to reach max charge"
                        },
                        {
                            title: "Element Up",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases the rate of elemental charge accumulation"
                        }
                    ]
                },
                
                // 3 Tac Skill 1 BOTTOM
                {
                    title: "Flame Grenade",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","14","21"],
                    text: [
                            "Launches a fire elemental bomb that explodes on impact", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill power", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill power"
                    ],
                    abil: [
                        {
                            title: "Burst Plus",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases the skill's effective area"
                        },
                        {
                            title: "Ignition",
                            reqPts: "3",
                            reqLv: "27",
                            text: "Increases the rate of elemental charge accumulation"
                        }
                    ]
                },
                
                // 4 Tac Skill 2 TOP
                {
                    title: "",
                    reqPts: ["1","3","6"],
                    reqLv: ["2","15","22"],
                    text: [
                            "A lightning elemental attack that hits straight ahead<br>Fires 3 lightning strikes that pierce enemies", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of lightning strikes", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of lightning strikes"],
                    abil: [
                        {
                            title: "Escalation",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Increases EP consumption and skill power"
                        },
                        {
                            title: "EP Saver",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Reduces amount of EP consumed"
                        }
                    ]
                },
                
                // 5 Tac Skill 2 BOTTOM
                {
                    title: "Thunder Mine",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","15","22"],
                    text: [
                            "Fire thunder mines that chase down nearby enemies<br>When the mines hit, deals area-of-effect lightning damage", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of thunder mines", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of thunder mines"
                    ],
                    abil: [
                        {
                            title: "Spread Out",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Increases the skill's effective area"
                        },
                        {
                            title: "Escalation",
                            reqPts: "3",
                            reqLv: "28",
                            text: "Increases EP consumption and skill power"
                        }
                    ]
                },
                
                // 6 Tac Skill 3 TOP
                {
                    title: "Blizzard",
                    reqPts: ["1","3","6"],
                    reqLv: ["3","16","23"],
                    text: [
                            "Summons a gale of ice at the designated spot<br>Applies ice damage to enemies within the skill's range", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the skill's effective area and duration", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the skill's effective area and duration"
                    ],
                    abil: [
                        {
                            title: "Rapid Charge",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Reduces the time required to reach max charge"
                        },
                        {
                            title: "Long Range",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases the skill's effective area"
                        }
                    ]
                },
                
                // 7 Tac Skill 3 BOTTOM
                {
                    title: "Frigid Crush",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","16","23"],
                    text: [
                            "Drops an ice block at the designated spot<br>Applies ice damage to enemies within the skill's range", 
                            "Adds the ability to charge to 2nd stage<br>Charging to higher stages increases the number of ice blocks", 
                            "Adds the ability to charge to 3rd stage<br>Charging to higher stages increases the number of ice blocks"
                    ],
                    abil: [
                        {
                            title: "Wide Range",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Increases the skill's effective area"
                        },
                        {
                            title: "Pierce Cast",
                            reqPts: "3",
                            reqLv: "29",
                            text: "Reduces the skill's effective area but increases skill power"
                        }
                    ]
                },
                
                // 8 Tac Skill 4 TOP
                {
                    title: "Concentration",
                    reqPts: ["1","3","6"],
                    reqLv: ["4","17","24"],
                    text: [
                            "Continuously recover EP over a period of time", 
                            "Increases skill duration", 
                            "Reduces skill cooldown"
                    ],
                    abil: [
                        {
                            title: "Regain",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Continuously recover HP over a period of time"
                        },
                        {
                            title: "Energy Charge",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Recover EP when the skill is used"
                        }
                    ]
                },
                
                // 9 Tac Skill 4 BOTTOM
                {
                    title: "Follow Bullet",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","17","24"],
                    text: [
                            "Temporarily summons engram bullets that float around you<br>When using a tactical skill, the bullets will fire with the respective element", 
                            "Increases skill duration", 
                            "Reduces skill cooldown"
                    ],
                    abil: [
                        {
                            title: "Element Force",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Increases the damage of the engram bullets"
                        },
                        {
                            title: "Element Escalate",
                            reqPts: "3",
                            reqLv: "30",
                            text: "Increases rate of elemental charge accumulation from the engram bullets "
                        }
                    ]
                },
                
                // 10 ULT Skill
                {
                    title: "Meteor Inferno",
                    reqPts: "2",
                    reqLv: "5",
                    text: "Drops a meteorite at the designated spot"
                },
                
                // 11 Tac Abil 5
                {
                    title: "Max EP Increase",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "Increases Max EP", 
                            "Increases Max EP", 
                            "Increases Max EP"
                    ]
                },
                
                // 12 Tac Abil 6
                {
                    title: "Resolution",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "Temporarily grants super armor when beginning to charge a tactical skill<br>The duration of Resolution increases based on its skill level", 
                            "Temporarily grants super armor when beginning to charge a tactical skill<br>The duration of Resolution increases based on its skill level", 
                            "Temporarily grants super armor when beginning to charge a tactical skill<br>The duration of Resolution increases based on its skill level"
                    ]
                }
            ],
            // Heavy Smasher 4
            [
                // 0 Reg Skill LEFT
                {
                    title: "",
                    reqPts: ["0","1","2"],
                    reqLv: ["0","6","8"],
                    text: [
                            "", 
                            "", 
                            ""
                    ]
                },
                
                // 1 Reg Skill RIGHT
                {
                    title: "",
                    reqPts: ["0","2","3"],
                    reqLv: ["0","7","9"],
                    text: [
                            "", 
                            "", 
                            ""
                    ]
                },
                
                // 2 Tac Skill 1 TOP
                {
                    title: "",
                    reqPts: ["0","3","6"],
                    reqLv: ["0","14","21"],
                    text: [
                            "", 
                            "", 
                            ""
                    ],
                    abil: [
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "27",
                            text: ""
                        },
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "27",
                            text: ""
                        }
                    ]
                },
                
                // 3 Tac Skill 1 BOTTOM
                {
                    title: "",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","14","21"],
                    text: [
                            "", 
                            "", 
                            ""
                    ],
                    abil: [
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "27",
                            text: ""
                        },
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "27",
                            text: ""
                        }
                    ]
                },
                
                // 4 Tac Skill 2 TOP
                {
                    title: "",
                    reqPts: ["1","3","6"],
                    reqLv: ["2","15","22"],
                    text: [
                            "", 
                            "", 
                            ""],
                    abil: [
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "28",
                            text: ""
                        },
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "28",
                            text: ""
                        }
                    ]
                },
                
                // 5 Tac Skill 2 BOTTOM
                {
                    title: "",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","15","22"],
                    text: [
                            "", 
                            "", 
                            ""
                    ],
                    abil: [
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "28",
                            text: ""
                        },
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "28",
                            text: ""
                        }
                    ]
                },
                
                // 6 Tac Skill 3 TOP
                {
                    title: "",
                    reqPts: ["1","3","6"],
                    reqLv: ["3","16","23"],
                    text: [
                            "", 
                            "", 
                            ""
                    ],
                    abil: [
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "29",
                            text: ""
                        },
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "29",
                            text: ""
                        }
                    ]
                },
                
                // 7 Tac Skill 3 BOTTOM
                {
                    title: "",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","16","23"],
                    text: [
                            "", 
                            "", 
                            ""
                    ],
                    abil: [
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "29",
                            text: ""
                        },
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "29",
                            text: ""
                        }
                    ]
                },
                
                // 8 Tac Skill 4 TOP
                {
                    title: "",
                    reqPts: ["1","3","6"],
                    reqLv: ["4","17","24"],
                    text: [
                            "", 
                            "", 
                            ""
                    ],
                    abil: [
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "30",
                            text: ""
                        },
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "30",
                            text: ""
                        }
                    ]
                },
                
                // 9 Tac Skill 4 BOTTOM
                {
                    title: "",
                    reqPts: ["2","3","6"],
                    reqLv: ["10","17","24"],
                    text: [
                            "", 
                            "", 
                            ""
                    ],
                    abil: [
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "30",
                            text: ""
                        },
                        {
                            title: "",
                            reqPts: "3",
                            reqLv: "30",
                            text: ""
                        }
                    ]
                },
                
                // 10 ULT Skill
                {
                    title: "",
                    reqPts: "2",
                    reqLv: "5",
                    text: ""
                },
                
                // 11 Tac Abil 5
                {
                    title: "",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "", 
                            "", 
                            ""
                    ]
                },
                
                // 12 Tac Abil 6
                {
                    title: "",
                    reqPts: ["2","3","4"],
                    reqLv: ["12","19","25"],
                    text: [
                            "", 
                            "", 
                            ""
                    ]
                }
            ]
        ],
        
    ]





// Dungeons
// Translate NAME, TYPE, CLEARCONDITION, REWARDS, DESCRIPTION, ALLOWANCE
var dungHolder = [
        
        // ENGLISH
        [
            
            // 1 Island In The Sky 虚空の浮島
            {
                name: "Island of the Void", //
                type: "RAID BATTLE",
                // difficulty
                diff: "",
                reqBS: "10+",
                timer: "30:00",
                ptSize: "20",
                imgSrc: "images/dungeons/raid_island.png",
                headerSrc: "images/dungeons/header_raid.png",
                allowSrc: "images/dungeons/allowance_raid.png",
                clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["","40,000","18,000","1,000"], // Luno, EXP, GC
                rewardsImg: [""],
                description: "The mysterious 'Starpulse Crevice' suddenly appears in Bahamar Highland. Adventurers were sent to investigate, but what they saw was...<br><br>・Defeat the massive boss within the time limit<br>・Running out of time will result in a mission failure<br>・Receive bonus rewards by ranking in the top", // バハマール高原に突如現れた謎の「星脈孔」\n調査に向かった冒険者たちが見たものは・・・\n\n・巨大なボスエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・ランキング上位入賞で報酬にボーナス
                // starvein starpulse starchain slit crevice hole crack
                allowance: ["Health Potion II", "Health Potion III", "ATK Up Serum","DEF Up Serum",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/health potion iii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png"],
                videoLink: "https://www.youtube.com/watch?v=a35O6OFwuAE&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=14"
            },
            
            // 2 Time attack party
            {
                name: "Time Attack | party",
                type: "DUNGEON",
                diff: "",
                reqBS: "19+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/ta_party.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Rush to defeat the boss within the time limit!", // 制限時間内にすばやくボスエネミーを討伐せよ！
                rewards: ["","40,000","20,000"], // ?, luno, exp
                rewardsImg: [""],
                description: "A competition designed to test the might of adventurers!<br>Those who aim to be the fastest continue to push themselves to the limit.<br><br>[Stage] Dragon Claw Valley<br>・Timer will continue until the boss at the end is defeated<br>・Receive rewards based on clear time<br>・Clear faster than anyone else and aim for the top rankings!", //冒険者の力量を測るために用意されたクリアタイムを競う競技。<br>最速を目指す者たちが、日夜己の限界を挑み続けている。<br><br>【舞台】巨竜の爪痕<br>・最奥部まで進み、ボスエネミー討伐までのタイムを競え<br>・クリアタイムに応じて報酬を獲得<br>・誰よりも早くクリアし、ランキング入りを狙え
                allowance: ["Health Potion II", "","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
                videoLink: "https://www.youtube.com/watch?v=EdvmzeFmS4Q"
            },
            
            // 3 Time attack solo
            {
                name: "Time Attack | solo",
                type: "DUNGEON",
                diff: "",
                reqBS: "19+",
                timer: "30:00",
                ptSize: "1",
                imgSrc: "images/dungeons/ta_solo.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Rush to defeat the boss within the time limit!", // 制限時間内にすばやくボスエネミーを討伐せよ！
                rewards: ["","40,000","20,000"], // ?, luno, exp
                rewardsImg: [""],
                // some other rewards for first time ranking in a tier
                description: "A competition designed to test the might of adventurers!<br>Those who aim to be the fastest continue to push themselves to the limit.<br><br>[Stage] Dragon Claw Valley<br>・Timer will continue until the boss at the end is defeated<br>・Receive rewards based on clear time<br>・Clear faster than anyone else and aim for the top rankings!", //冒険者の力量を測るために用意されたクリアタイムを競う競技。<br>最速を目指す者たちが、日夜己の限界を挑み続けている。<br><br>【舞台】巨竜の爪痕<br>・最奥部まで進み、ボスエネミー討伐までのタイムを競え<br>・クリアタイムに応じて報酬を獲得<br>・誰よりも早くクリアし、ランキング入りを狙え
                allowance: ["Health Potion II", "","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
                videoLink: "https://www.youtube.com/watch?v=mMqJ6N0Pwc8"
            },
            
            // 4 Arena S
            {
                name: "Arena | S rank",
                type: "ARENA",
                diff: "",
                reqBS: "28+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/arena_s.png",
                headerSrc: "images/dungeons/header_arena.png",
                allowSrc: "images/dungeons/allowance_arena.png",
                clearCondition: "Defeat 100 enemies!", //100体のエネミーを討伐せよ！
                rewards: ["Kaiser Elk's Idea","142,000","64,000","300"], // Item, Luno, Exp, GC
                rewardsImg: ["images/dungeons/imagine idea.png"],
                description: "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
                allowance: ["Health Potion II", "","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
                videoLink: "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12"
            },
            
            // 5 Arena A
            {
                name: "Arena | A rank",
                type: "ARENA",
                diff: "",
                reqBS: "23+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/arena_a.png",
                headerSrc: "images/dungeons/header_arena.png",
                allowSrc: "images/dungeons/allowance_arena.png",
                clearCondition: "Defeat 75 enemies!", //75体のエネミーを討伐せよ！
                rewards: ["Goblin Sage's Idea","118,200","53,300","250"], // Item, Luno, Exp, GC
                rewardsImg: ["images/dungeons/imagine idea.png"],
                description: "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
                allowance: ["Health Potion II", "","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
                videoLink: "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12"
            },
            
            // 6 Arena B
            {
                name: "Arena | B rank",
                type: "ARENA",
                diff: "",
                reqBS: "18+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/arena_b.png",
                headerSrc: "images/dungeons/header_arena.png",
                allowSrc: "images/dungeons/allowance_arena.png",
                clearCondition: "Defeat 50 enemies!", //50体のエネミーを討伐せよ！
                rewards: ["Horned Goat's Idea","83,300","37,500","200"], // Item, Luno, Exp, GC
                rewardsImg: ["images/dungeons/imagine idea.png"],
                description: "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
                allowance: ["Health Potion II", "","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
                videoLink: "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12"
            },
            
            // 7 Arena C
            {
                name: "Arena | C rank",
                type: "ARENA",
                diff: "",
                reqBS: "11+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/arena_c.png",
                headerSrc: "images/dungeons/header_arena.png",
                allowSrc: "images/dungeons/allowance_arena.png",
                clearCondition: "Defeat 25 enemies!", //25体のエネミーを討伐せよ！
                rewards: ["Tyrant Boar's Idea","44,600","20,000","150"], // Item, Luno, Exp, GC
                rewardsImg: ["images/dungeons/imagine idea.png"],
                description: "[Party Recommended]<br>Day and night, the arena filled with intense battles.<br>Demonstrate your strength by challenging the rules imposed on you.<br><br>・Defeat waves of enemies within the time limit<br>・Running out of time will result in a mission failure<br>・Clearing challenges will give you benefits during battle", // 【パーティ推奨】\n日夜激しい戦いが広げられる闘技場。\n課されたルールに挑み、その力を示せ。\n\n・次々と現れるエネミーを制限時間内に倒せ \n・時間切れになるとミッション失敗 \n・チャレンジをクリアすると戦闘が有利になる効果が発動
                allowance: ["Health Potion II", "","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
                videoLink: "https://www.youtube.com/watch?v=INRLDaYaUzk&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=12"
            },
            
            // 8 Mecha Hard
            {
                name: "Valley of Machines",
                type: "DUNGEON",
                diff: "advanced survey",
                reqBS: "25+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_mecha%20advanced.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["High Quality Bahamar Yellow","132,920","59,940"], // ?, Luno, Exp
                rewardsImg: ["images/dungeons/high quality bahamar yellow.png"],
                description: "[Party Recommended]<br>The burial site of a Bapharian civilization-era city,<br>most of the remains have submerged among the surrounding terrain.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.",　// 【パーティ推奨】\nバファリア文明時代の街が埋もれ、\n周辺の地形と一体化してできた遺跡の谷。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
                allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
                videoLink: "https://www.youtube.com/watch?v=jctyzo_PWaQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=11"
            },
            
            // 9 Pillar Hard
            {
                name: "Pillar of Divinity",
                type: "DUNGEON",
                diff: "advanced survey",
                reqBS: "20+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_pillar%20advanced.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["High Performance IC Core","92,490","41,650"], // ?, Luno, Exp
                rewardsImg: ["images/dungeons/high performance ic core.png"],
                description: "[Party Recommended]<br>One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
                allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
                videoLink: "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10"
            },
            
            // 10 Dragon Hard
            {
                name: "Dragon Claw Valley",
                type: "DUNGEON",
                diff: "advanced survey",
                reqBS: "14+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_dragonclaw%20advanced.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["Firm Dragon Bone Fragment","59,280","26,730"],
                rewardsImg: ["images/dungeons/firm dragon bone frag.png"],
                description: "[Party Recommended]<br>A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>As you will encounter more powerful enemies in your additional surveys of the area, the rewards will also become more valuable.", // 【パーティ推奨】ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n追加調査は強大なエネミーと遭遇するため、難易度が高い。\nその分、成功報酬によって強力な武器をクラフトすることが可能。
                allowance: ["Health Potion II", "ATK Up Serum","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","",""],
                videoLink: "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9"
            },
            
            // 11 Mecha Easy
            {
                name: "Valley of Machines",
                type: "DUNGEON",
                diff: "survey",
                reqBS: "10+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_mecha%20survey.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["Bahamar Yellow","38,040","17,130"], // ?, Luno, Exp
                rewardsImg: ["images/dungeons/bahamar yellow.png"],
                description: "[Party Recommended]<br>The burial site of a Bapharian civilization-era city,<br>most of the remains have submerged among the surrounding terrain.<br>The legacy of Bapharia remains through its machines which will attack intruders on sight.",　// 【パーティ推奨】\nバファリア文明時代の街が埋もれ、\n周辺の地形と一体化してできた遺跡の谷。\nバファリアの遺産である機械類が今もこの地を守っており、\n侵入者を迎え撃つ。
                allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
                videoLink: "https://www.youtube.com/watch?v=jctyzo_PWaQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=11"
            },
            
            // 12 Pillar Med
            {
                name: "Pillar of Divinity",
                type: "DUNGEON",
                diff: "additional survey",
                reqBS: "8+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_pillar%20additional.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["IC Core","25,170","11,310"], // ?, Luno, Exp
                rewardsImg: ["images/dungeons/ic core.png"],
                description: "[Party Recommended]<br>One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>On the outside, it remains a magnificent sight to behold.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\nその外観は、どれほどの年月が経っても美しく壮麗なままである。
                allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
                videoLink: "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10"
            },
            
            // 13 Dragon Med
            {
                name: "Dragon Claw Valley",
                type: "DUNGEON",
                diff: "additional survey",
                reqBS: "3+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_dragonclaw%20additional.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["Dragon Bone Fragment","7,380","3,280"], // ?, Luno, Exp
                rewardsImg: ["images/dungeons/dragon bone frag.png"],
                description: "A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>Waterfalls violently cascading down the cliffs have been said to resemble the fierce power of dragons.", // ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n崖を流れ落ちる滝は迫力に満ちて荒々しく\nそれこそ竜の姿に例えられている。
                allowance: ["Health Potion II", "ATK Up Serum","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","",""],
                videoLink: "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9"
            },
            
            // 14 Reikrid Med
            {
                name: "Reikrid Tunnels",
                type: "DUNGEON",
                diff: "additional survey",
                reqBS: "1+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_reikrid.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the boss within the time limit!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["Reikrid Crystal","1,390","2,670"], // Reikrid Crystal, 1,390 Luno, 2,670 EXP
                rewardsImg: ["images/dungeons/reikrid crystal.png"],
                description: "A tunnel that is the source of Reikrid Crystals.<br>Although mining operations have ceased, the occasional adventurer will come in search of materials.<br>It is said that monsters have started to live here.", // 「レイクリッド結晶」などの産地として使われていた坑道の一角。\nすでに役目を終え、大規模な採掘は行われていないが、\nたまに冒険者が素材を求めてやってくる。\n最近、モンスターが棲みついてしまったらしい。
                allowance: ["Health Potion II", "","","",""], // Dungeon-use Health Potion
                allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
                videoLink: "https://www.youtube.com/watch?v=X06wIcNYhxc"
            },
            
            // 15 Pillar Easy
            {
                name: "Pillar of Divinity",
                type: "DUNGEON",
                diff: "",
                reqBS: "6+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_pillar%20additional.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Reach the top floor!", //最上階へ到達せよ！
                rewards: ["IC Core","18,040","16,230"], // ?, Luno, Exp
                rewardsImg: ["images/dungeons/ic core.png"],
                description: "One of the largest ruins of the Bapharia civilization.<br>It is said to be the location where the founder of the Bapharian religion had descended, and is still shrouded in mystery.<br>On the outside, it remains a magnificent sight to behold.", // 【パーティ推奨】\nバファリア文明最大の遺跡の一つ。\nバファリア教の開祖が降り立った場所としても伝えられ、\nいまだ数多くの謎に包まれている。\nその外観は、どれほどの年月が経っても美しく壮麗なままである。
                allowance: ["Health Potion II", "ATK Up Serum","DEF Up Serum","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","images/dungeons/def up serum.png",""],
                videoLink: "https://www.youtube.com/watch?v=NLNFD7y8i3Q&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=10"
            },
            
            // 16 Giant Tower Easy
            {
                name: "Giant Tower Ruins",
                type: "DUNGEON",
                diff: "",
                reqBS: "1+",
                timer: "5:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_giant%20tower%20ruins.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat all enemies within the time limit!", //　制限時間内に全てのエネミーを討伐せよ！
                rewards: ["","&nbsp","&nbsp",""], //none
                rewardsImg: [""],
                description: "Ancient ruins that bring memories of the crumbled giant tower to mind.<br>Priest Walkin, who's said to be knowledgeable about 'visitors' set out to investigate the land and hasn't returned.<br>Hopefully nothing bad has happened... ", //崩れ落ちた巨塔を思わせる古代遺跡。<br>『来者』について詳しいという神官ワールキンが<br>ここに調査に赴いたまま、帰ってこないらしい。<br>なにごともなければ良いのだが・・・・・。
                allowance: "", //none
                allowanceImgs: ["","","",""],
                videoLink: "https://youtu.be/I0yaHHpQRpw?t=5670"
            },
            
            // 17 Dragon Easy
            {
                name: "Dragon Claw Valley",
                type: "DUNGEON",
                diff: "",
                reqBS: "2+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_dragonclaw%20additional.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the powerful enemy!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["Dragon Bone Fragment","3,770","6,880"], // ?, Luno, Exp
                rewardsImg: ["images/dungeons/dragon bone frag.png"],
                description: "A deep canyon that appears as if it was carved out by the claws of a dragon.<br>The intricate valleys obstruct the adventurer's path.<br>Waterfalls violently cascading down the cliffs have been said to resemble the fierce power of dragons.", // ドラゴンの爪で抉られたかのような深い峡谷地帯。\n複雑に入り組んだ谷が冒険者の行く手を阻む。\n崖を流れ落ちる滝は迫力に満ちて荒々しく\nそれこそ竜の姿に例えられている。
                allowance: ["Health Potion II", "ATK Up Serum","","",""],
                allowanceImgs: ["images/dungeons/health potion ii.png","images/dungeons/atk up serum.png","",""],
                videoLink: "https://www.youtube.com/watch?v=Szktg70ozpQ&list=PLNSBX7eCSneT2nLcY4P0d_x4BaiYxYi2C&index=9"
            },
            
            // 18 Reikrid Easy
            {
                name: "Reikrid Tunnels",
                type: "DUNGEON",
                diff: "",
                reqBS: "1+",
                timer: "30:00",
                ptSize: "6",
                imgSrc: "images/dungeons/dungeon_reikrid.png",
                headerSrc: "images/dungeons/header_dungeon.png",
                allowSrc: "images/dungeons/allowance_dungeon.png",
                clearCondition: "Defeat the powerful enemy!", //制限時間内にボスエネミーを討伐せよ！
                rewards: ["Reikrid Crystal","1,390","2,670"], // Reikrid Crystal, 1,390 Luno, 2,670 EXP
                rewardsImg: ["images/dungeons/reikrid crystal.png"],
                description: "A tunnel that is the source of Reikrid Crystals.<br>Although mining operations have ceased, the occasional adventurer will come in search of materials.<br>It is said that monsters have started to live here.", // 「レイクリッド結晶」などの産地として使われていた坑道の一角。\nすでに役目を終え、大規模な採掘は行われていないが、\nたまに冒険者が素材を求めてやってくる。\n最近、モンスターが棲みついてしまったらしい。
                allowance: ["Health Potion II", "","","",""], // Dungeon-use Health Potion
                allowanceImgs: ["images/dungeons/health potion ii.png","","",""],
                videoLink: "https://www.youtube.com/watch?v=X06wIcNYhxc"
            }
            
        ]
        
    ]
    



// Weapons
// Translate NAME, TYPE, LEVEL, SLOTCOUNT, RECIPE, TOOLTIPTEXT
var wepHolderEN = [
        // 1 Novice Sword
        { 
            name: "Novice Sword", //ノービスソード
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword1.png",
            image: "images/crafting/sword1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+77",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+14",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Battle Axe
        { 
            name: "Battle Axe", //バトルアックス
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe1.png",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+85",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+13",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Hunter Bow
        { 
            name: "Hunter Bow", //ハンターボウ
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow1.png",
            image: "images/crafting/bow1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+60",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 1 Training Rod
        { 
            name: "Training Rod", //トレーニングロッド
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff1.png",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 7)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+78",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+12",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Purchase at weapon shop","<br>","<br>","0"],
            // Icon to show on tooltip
            iconSrc: ["images/map/weapon.png","",""],
            amt: ["","",""],
            tooltipText: ["Weapon Shop<br>Asterleeds","",""],
            tooltipBg: [
                tooltipWepShop,
                "",
                ""],
            // The transformation
            tooltipIcn: ["transform: translate(7.2vw, 7.6vw)","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 2 Fanged Sword
        { 
            name: "Fanged Sword", //爪牙剣
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword2.png",
            image: "images/crafting/sword2L.png",
            level: "Starting Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+103",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+18",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Mist Cutter
        { 
            name: "Mist Cutter", //霧払い
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe2.png",
            image: "images/crafting/axe2L.png",
            level: "Starting Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Flashwing Bow
        { 
            name: "Flashwing Bow", //閃翼の弓｀
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow2.png",
            image: "images/crafting/bow2L.png",
            level: "Starting Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+93",
                    /*STR*/"+4",
                    /*VIT*/"+0",
                    /*DEX*/"+3",
                    /*INT*/"+0",
                    /*MND*/"+2",
                    /*HP*/"+16",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 2 Ancient Staff
        { 
            name: "Ancient Staff", //往古の杖
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff2.png",
            image: "",
            level: "Starting Lv 1~2 (Max Lv: 12)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["Dragon Bone Fragment","Rumble Boar Fang","Long Grass","25,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["3","10","5"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Additional Survey]","Rumble Boar<br>Andra Basin","Gather<br>Andra Basin"],
            tooltipBg: [
                "",
                tooltipAndra,
                tooltipAndra],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 3 Tower's Blade
        { 
            name: "Tower's Blade", //タワーズブレイド
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword3.png",
            image: "images/crafting/sword3L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            recipe: ["IC Core","Highland Fox Claw","Baha Ore","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Highland Fox<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Dual Raster
        { 
            name: "Dual Raster", //デュアルラスター
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe3.png",
            image: "images/crafting/axe3L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["IC Core","Highland Fox Claw","Baha Ore","150,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Highland Fox<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Alpha Genesis
        { 
            name: "Alpha Genesis", //アルファジェネシス｀
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow3.png",
            image: "images/crafting/bow3L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["IC Core","Horned Goat's Horn","Smoky Moss","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Horned Goat<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        // 3 Missionary
        { 
            name: "Missionary", //ミショナリー
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff3.png",
            image: "images/crafting/staff3L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
            element: "",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["IC Core","Horned Goat's Horn","Smoky Moss","150,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Additional Survey]","Horned Goat<br>Divine Haven Hill","Gather<br>Divine Haven Hill"],
            tooltipBg: [
                "",
                tooltipDivine,
                tooltipDivine],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: ""
        },
        
        // 4 Red Steel Blade
        { 
            name: "Red Steel Blade", //鋼の赤刃
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword4.png",
            image: "images/crafting/sword4L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+143",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["Bahamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Ancient Flame-hardened Axe
        { 
            name: "Ancient Flame-hardened Axe", //古代の火打ち斧
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe4.png",
            image: "images/crafting/axe4L.png",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+158",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+25",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["Bahamar Yellow","Shabby Goblin Club","Calm Nightstone","250,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Mechanical Firecarved Bow
        { 
            name: "Mechanical Firecarved Bow", //機跡の炎刻弓｀
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow4.png",
            image: "",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+129",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+24",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["Bahamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Elder Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        // 4 Blazing Staff
        { 
            name: "Blazing Staff", //焼尽の杖
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff4.png",
            image: "",
            level: "Starting Lv 1~4 (Max Lv: 20)", //初期
            element: "images/crafting/fire.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+?",
                    /*STR*/"+?",
                    /*VIT*/"+?",
                    /*DEX*/"+?",
                    /*INT*/"+?",
                    /*MND*/"+?",
                    /*HP*/"+?",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["Bahamar Yellow","Shabby Goblin Staff","Round Water Plant","250,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["5","20","7"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Survey]","Elder Goblin<br>Soundless Foothills","Gather<br>Soundless Foothills"],
            tooltipBg: [
                "",
                tooltipSoundless,
                tooltipSoundless],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/firetooltip.png"
        },
        
        // 5 Scaleclaw Sword
        { 
            name: "Scaleclaw Sword", //鋼の赤刃
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword5.png",
            image: "",
            level: "Starting Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+169",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+30",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+8",
                   ],
            recipe: ["Firm Dragon Bone Fragment","Ogre Horn","Meteorite Fragment","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Ogre<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Cliff Breaker
        { 
            name: "Cliff Breaker", //懸崖崩し
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe5.png",
            image: "images/crafting/axe5L.png",
            level: "Starting Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+188",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+28",
                   ],
            minStats: [
                    /*ATK*/"+52",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+7",
                   ],
            recipe: ["Firm Dragon Bone Fragment","Ogre Horn","Meteorite Fragment","500,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["6","5","10"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Ogre<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Brilliant Thunderwing Bow
        { 
            name: "Brilliant Thunderwing Bow", //雷翼の豪弓
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow5.png",
            image: "",
            level: "Starting Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+153",
                    /*STR*/"+5",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+27",
                   ],
            minStats: [
                    /*ATK*/"+43",
                    /*STR*/"+3",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+0",
                    /*MND*/"+1",
                    /*HP*/"+6",
                   ],
            recipe: ["Firm Dragon Bone Fragment","Glowing Tyrant Boar Fang","Boule Fruit","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        // 5 Old Dragon's Staff
        { 
            name: "Old Dragon's Staff", //古竜の杖
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff5.png",
            image: "",
            level: "Starting Lv 1~5 (Max Lv: 25)", //初期
            element: "images/crafting/lightning.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+174",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+3",
                    /*HP*/"+26",
                   ],
            minStats: [
                    /*ATK*/"+48",
                    /*STR*/"+0",
                    /*VIT*/"+0",
                    /*DEX*/"+2",
                    /*INT*/"+3",
                    /*MND*/"+1",
                    /*HP*/"+5",
                   ],
            recipe: ["Firm Dragon Bone Fragment","Glowing Tyrant Boar Fang","Boule Fruit","500,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["6","10","10"],
            tooltipText: ["Clear Dungeon<br>Dragon Claw Valley [Advanced Survey]","Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces"],
            tooltipBg: [
                "",
                tooltipCalmEve,
                tooltipCalmEve],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/lightningtooltip.png"
        },
        
        // 6 Bapharia's Guidance
        { 
            name: "Bapharia's Guidance", //バファリアの標
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword6.png",
            image: "images/crafting/sword6L.png",
            level: "Starting Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+190",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+10",
                   ],
            recipe: ["High Performance IC Core","Kaiser Elk Horn","Shivering Copper","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Kaiser Elk<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Wild Ice Edge
        { 
            name: "Wild Ice Edge", //アイスエッジワイルド
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe6.png",
            image: "images/crafting/axe6L.png",
            level: "Starting Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+211",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+50",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+9",
                   ],
            recipe: ["High Performance IC Core","Kaiser Elk Horn","Shivering Copper","1,200,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["7","15","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Kaiser Elk<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Glacial Arch
        { 
            name: "Glacial Arch", //グレイシャルアーチ
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow6.png",
            image: "",
            level: "Starting Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+172",
                    /*STR*/"+3",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+5",
                    /*HP*/"+34",
                   ],
            minStats: [
                    /*ATK*/"+41",
                    /*STR*/"+1",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+0",
                    /*MND*/"+3",
                    /*HP*/"+8",
                   ],
            recipe: ["High Performance IC Core","Decorated Goblin's Staff","Driftwood Twig","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Goblin Sage<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        // 6 Retribution
        { 
            name: "Retribution", //リトリビューション
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff6.png",
            image: "",
            level: "Starting Lv 1~6 (Max Lv: 30)", //初期
            element: "images/crafting/ice.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+195",
                    /*STR*/"+0",
                    /*VIT*/"+4",
                    /*DEX*/"+0",
                    /*INT*/"+3",
                    /*MND*/"+5",
                    /*HP*/"+33",
                   ],
            minStats: [
                    /*ATK*/"+46",
                    /*STR*/"+0",
                    /*VIT*/"+2",
                    /*DEX*/"+0",
                    /*INT*/"+1",
                    /*MND*/"+3",
                    /*HP*/"+7",
                   ],
            recipe: ["High Performance IC Core","Decorated Goblin's Staff","Driftwood Twig","1,200,000"],
            iconSrc: [iDung,iCombat,iFlower],
            amt: ["7","10","15"],
            tooltipText: ["Clear Dungeon<br>Pillar of Divinity [Advanced Survey]","Goblin Sage<br>Fiel Pond","Gather<br>Fiel Pond"],
            tooltipBg: [
                "",
                tooltipFiel,
                tooltipFiel],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/icetooltip.png"
        },
        
        
        // 7 Sharp Edged Sword
        { 
            name: "Sharp Edged Sword", //鋭刃剣
            type: "Sword", //剣（武器）
            icon: "images/crafting/sword7.png",
            image: "",
            level: "Starting Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+218",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+41",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+9",
                   ],
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Ground Edge
        { 
            name: "Ground Edge", //グラウンドエッジ
            type: "Axe", //斧（武器）
            icon: "images/crafting/axe7.png",
            image: "images/crafting/axe7L.png",
            level: "Starting Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+242",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+39",
                   ],
            minStats: [
                    /*ATK*/"+51",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+8",
                   ],
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Groundrunner's Bow
        { 
            name: "Groundrunner's Bow", //地走りの弓
            type: "Bow", //弓（武器）
            icon: "images/crafting/bow7.png",
            image: "",
            level: "Starting Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+197",
                    /*STR*/"+5",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+37",
                   ],
            minStats: [
                    /*ATK*/"+42",
                    /*STR*/"+2",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+0",
                    /*MND*/"+0",
                    /*HP*/"+7",
                   ],
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        // 7 Valeed Rod
        { 
            name: "Valeed Rod", //バリードロッド
            type: "Staff", //杖（武器）
            icon: "images/crafting/staff7.png",
            image: "",
            level: "Starting Lv 1~7 (Max Lv: 35)", //初期
            element: "images/crafting/earth.png",
            slotCount: ["Slots", "?"], //スロット数
            stats: [/*ATK*/"+224",
                    /*STR*/"+0",
                    /*VIT*/"+6",
                    /*DEX*/"+4",
                    /*INT*/"+5",
                    /*MND*/"+0",
                    /*HP*/"+36",
                   ],
            minStats: [
                    /*ATK*/"+47",
                    /*STR*/"+0",
                    /*VIT*/"+3",
                    /*DEX*/"+1",
                    /*INT*/"+2",
                    /*MND*/"+0",
                    /*HP*/"+6",
                   ],
            recipe: ["High Quality Bahamar Yellow","Large Goblin Wand","Wailing Dragon Ore","2,450,000"],
            iconSrc: [iDung,iCombat,iRock],
            amt: ["8","5","20"],
            tooltipText: ["Clear Dungeon<br>Valley of Machines [Advanced Survey]","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                "",
                tooltipDragonclaw,
                tooltipDragonclaw],
            tooltipIcn: ["visibility:hidden","visibility: hidden","visibility: hidden"],
            eleTooltip: "images/crafting/earthtooltip.png"
        },
        
        
        
    ]




// Map
// Translate all non-code text in this. The code makes it very confusing so it might be easier to look at the website for reference, ctrl+f one word you want to translate, and then replace all instances of that word.
var mapText = [
        
        // ENGLISH
        {
            // Asterleeds
            storage: "Storage",
            memorystand: 
                'Liquid Memory Stand<br><img src="images/liquidmemory%20yellow%20fad459.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Increased chance of higher weapon level when crafting<br><img src="images/liquidmemory%20blue%206ac7cd.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Increased exp when leveling weapon<br><img src="images/liquidmemory%20red%20db516a.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Reduced gathering time<br><img src="images/liquidmemory%20purple%2079389e.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Increased enemy drop rate<br><img src="images/liquidmemory%20green%2045b343.svg" draggable="false" style="transform: scale(0.6); margin: -0.3em 0 -0.8em 0;">Reduced prices in npc shops',
            imajhouse: "Imajinn Research Institute",
            classmaster: "Class Master",
            wepshop: "Weapon Shop",
            potshop: "Potion Shop",
            craftmachine: "Crafting Machine",
            reconstructor: "Weapon Reconstructor",
            gcshop: "GC Shop",
            timedquest: "",
            yellow1:
                'Yellow Liquid Memory 1<br><br>Clear Orvis&#39; quest<br>"Haste Makes Waste" (Lv. 24+)<br><br>Retrieve 3 Orvis&#39; Luggage from<br>Glowing Elder Goblins at<br>Dragon Claw Valley [Free Exploration]',
            green1: 
                'Green Liquid Memory 1<br><br>Clear Godot&#39;s quest<br>"Terms of Exchange for an<br>Ominous Odor" (Lv. 19+)<br><br>Defeat a Spooky Goat<br>at Soundless Foothills<br>and report to Godot',
            blue2: 
                'Blue Liquid Memory 2<br><br>Examine the shipwheel behind<br>the performers on the 2nd floor<br> of the Revolving Helm Pavilion',
            blue1: 
                'Blue Liquid Memory 1<br><br>Clear Patti&#39;s Quest<br>"Troubled Apprentice" (Lv. 13+)<br><br>Obtain Engram Extractor<br>(clear Pillar of Divinity<br>[Advanced Survey]) and bring it<br>to Hanna outside the Pillar',
            red2: 
                'Red Liquid Memory 2<br><br>Examine the bottles on<br>the counter by the<br>Memory Stand',
            red1: 
                'Red Liquid Memory 1<br><br>Clear quest<br>"Welcome to the Memory Stand!" (Lv. 12+)<br><br>Listen to the Memory Stand<br>attendant&#39;s explanation',
            purple1: 
                'Purple Liquid Memory 1<br><br>Clear Luise&#39;s quest<br>"Calm Researcher&#39;s Latest Work!" (Lv. 28+)<br><br>Bring the following to Luise:<br>5 Full Moon Stones<br>(Calm Eve Terraces/night time/high ground)<br>5 Sunshine Shells<br>(Fiel Pond/day time/river)',
            warpfrontier: 'Warp Gate<br>Frontiering Station',
            warpcoatofarms: 'Warp Gate<br>Coat of Arms Plaza',
            warpcitygate: 'Warp Gate<br>City Gate Square',
            warpbeach: 'Warp Gate<br>Asterleeds Beach',
            warpport: 'Warp Gate<br>Asterleeds Port',
            warpinn: 'Warp Gate<br>The Double-Faced Coin',
            warparena: 'Warp Gate<br>Revolving Helm Pavilion',
            warpshrine: 'Warp Gate<br>Arena Entrance',
            warppavilion: 'Warp Gate<br>Shrine Entrance',
            msq1: 'Main Story Quest 1<br>"In Search of Memories"<br><br>Speak with the inn<br>owner on the 1st floor',
            msq2: 'Main Story Quest 2<br>"In Search of Memories"<br><br>Exit the inn',
            msq3: 'Main Story Quest 3<br>"In Search of Memories"<br><br>Buy field-use health potions',
            msq4: 'Main Story Quest 4<br>"In Search of Memories"<br><br>Speak with Feste in<br>front of the storage',
            msq5: 'Main Story Quest 5<br>"In Search of Memories"<br><br>Go to City Gate Square',
            msq6: 'Main Story Quest 6<br>"In Search of Memories"<br><br>Examine the Warp Gate',
            msq7: 'Main Story Quest 7<br>"In Search of Memories"<br><br>Exit the city',
            msq10: 'Main Story Quest 10<br>"In Search of Memories"<br><br>Return to the Frontiering Station',
            msq11: 'Main Story Quest 11<br>"In Search of Memories"<br><br>Speak with Jake at the<br>Frontiering Station',
            msq12: 'Main Story Quest 12<br>"Adventurer Registration"<br><br>Speak with Murrie at the<br>Frontiering Station',
            msq14: 'Main Story Quest 14<br>"Adventurer Registration"<br><br>Craft a field-use<br>health potion',
            msq15: 'Main Story Quest 15<br>"Adventurer Registration"<br><br>Report to Murrie<br>at the Frontiering Station',
            msq16: 'Main Story Quest 16<br>"Raise your Adventure Rank!"<br><br>Speak with Jake in the<br> Frontiering Station<br>(Req. Adventure Rank 2+)',
            msq17: 'Main Story Quest 17<br>"Raise your Adventure Rank!"<br><br>Speak with Feste<br>',
            msq18: 'Main Story Quest 18<br>"Raise your Adventure Rank!"<br><br>Go to the Imagine<br>Research Institute<br>',
            msq20: 'Main Story Quest 20<br>"Raise your Adventure Rank!"<br><br>Go to the Imagine<br>Research Institute<br>',
            msq21: 'Main Story Quest 21<br>"Raise your Adventure Rank!"<br><br>Craft Inner Imagine<br>"Diranks (Courage)"',
            msq22: 'Main Story Quest 22<br>"Raise your Adventure Rank!"<br><br>Level up to Adventure Rank 2<br>(in command menu)',
            msq23: 'Main Story Quest 23<br>"Dragon Claw Valley"<br><br>Speak with Jake as<br>Adventure Rank 2',
            msq26: 'Main Story Quest 26<br>"Dragon Claw Valley"<br><br>Receive rewards from Jake<br>at the Frontiering Station',
            msq27: 'Main Story Quest 27<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Speak with the inn owner<br>at The Double-Faced Coin',
            msq28: 'Main Story Quest 28<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Ask about &#39;visitors&#39;<br>at Bapharia Shrine',
            asterleedsToSkyquake: "To Skyquake Fields",
            asterleedsToSkyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Pink Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw">Land Fox<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw">Lamusa Flower<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw" draggable="false">Ripple Stone<br>',
            
            
            // Asteria Plain
            skyquakeToAsterleeds: "To Asterleeds",
            // 10 things
            skyquakeToAsterleedsTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate<br><img src="images/map/imajinnHouse.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Imagine Research Institute<br><img src="images/map/crafting.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Crafting Machine<br><img src="images/map/reconstructor.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Weapon Reconstructor<br><img src="images/map/classmaster.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Class Master<br><img src="images/map/liquidmemory.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Liquid Memory Stand<br><img src="images/map/exchange.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">GC Shop<br><img src="images/map/potion.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Potion Shop<br><img src="images/map/weapon.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Weapon Shop<br><img src="images/map/storage.png" style="transform: scale(0.5); margin: -0.3em -0.1em -0.9em -0.4em; width: 1.875vw;">Storage<br>',
            minsterToDivine: "To Divine Haven Hill",
            // 12 things
            minsterToDivineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate - Larpal<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Sapphire Trot<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Flaming Horns<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Highland Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw; width: 1.823vw;">Horned Goat<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Kaiser Elk<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Smoky Moss<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Blessio Fruit<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Beartree Leaf<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Large Fang Fossil<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Baha Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Sandsilver<br>',
            skyquakeName: "Skyquake Fields",
            // 6 things
            skyquakeTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Pink Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Lamusa Flower<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Ripple Stone<br>',
            expSkyquake1: 'Exploration Point<br>Skyquake Fields 1',
            expSkyquake2: 'Exploration Point<br>Skyquake Fields 2',
            expSkyquake3: 'Exploration Point<br>Skyquake Fields 3',
            expSkyquake4: 'Exploration Point<br>Skyquake Fields 4',
            expSkyquake5: 'Exploration Point<br>Skyquake Fields 5',
            emPiglet: 'Elite Monster<br>Pink Piglet',
            
            
            andraName: "Andra Basin",
            // 9 things
            andraTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Deep Green Fang<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Iron Fang<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Rumble Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.78em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Andra Cedar Twig<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Long Grass<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Jira Crystal<br>',
            expAndra1: 'Exploration Point<br>Andra Basin 1',
            expAndra2: 'Exploration Point<br>Andra Basin 2',
            expAndra3: 'Exploration Point<br>Andra Basin 3',
            expAndra4: 'Exploration Point<br>Andra Basin 4',
            emIronFang: 'Elite Monster<br>Iron Fang',
            emDeepGreen: 'Elite Monster<br>Deep Green Fang',
            
            calmName: 'Calm Eve Terraces',
            // 14 things
            calmTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Ferocious Gold<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Flame Prison<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Ogre<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Sunset Cedar Twig<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Stardust Grass<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Boule Fruit<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Meteorite Fragment<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Magnamoss Fossil<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Rimeril Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Full Moon Stone<br>',
            expCalm1: 'Exploration Point<br>Calm Eve Terraces 1',
            expCalm2: 'Exploration Point<br>Calm Eve Terraces 2',
            expCalm3: 'Exploration Point<br>Calm Eve Terraces 3',
            emFlamePrison: 'Elite Monster<br>Flame Prison',
            emFerociousGold: 'Elite Monster<br>Ferocious Gold',
            
            minsterName: 'Minster Hills',
            // 12 things
            minsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">Dragon Claw Valley<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate - Minsterhorn<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Ferocious Beast<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Red Splash<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Dawngrass<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Andra Cedar Twig<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Asterium Ore<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Asterbass<br>',
            minsterhornName: 'Minsterhorn',
            minsterhornTool: 'npc Milene<br>npc Studs<br>npc Feste<br>',
            warpminsterhorn: 'Warp Gate<br>Minsterhorn',
            expMinster1: "Exploration Point<br>Minster Hills 1",
            expMinster2: "Exploration Point<br>Minster Hills 2",
            expMinster3: "Exploration Point<br>Minster Hills 3",
            expMinster4: "Exploration Point<br>Minster Hills 4",
            expMinster5: "Exploration Point<br>Minster Hills 5",
            expMinster6: "Exploration Point<br>Minster Hills 6",
            expMinster7: "Exploration Point<br>Minster Hills 7",
            expMinster8: "Exploration Point<br>Minster Hills 8",
            emFerociousBeast: 'Elite Monster<br>Ferocious Beast',
            emRedSplash: 'Elite Monster<br>Red Splash',
            
            // 18 things
            dragonclawTool: 'Dragon Claw Valley<br>[Free Exploration]<br><br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Valley Raider<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Arrogant Conjurer<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Loudshout<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Raging Kingfang<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Tyrant Boar<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Glowing Elder Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Longan Flower<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Dragon Venom<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Frozen Star Grass<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pylud Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Wailing Dragon Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Pterosaur Fossil<br>',
            purple2: 'Purple Liquid Memory 2<br><br>Examine the rocks near the open <br>cliff in the deepest area<br>(where Raging Kingfang appears)',
            msq8: 'Main Story Quest 8<br>"In Search of Memories"<br><br>Go to the ruins on the cliff',
            msq9: 'Main Story Quest 9<br>"In Search of Memories"<br><br>Go to where you woke up',
            msq13: 'Main Story Quest 13<br>"Adventurer Registration"<br><br>Collect 3 unidentified<br>plants in Skyquake Fields',
            msq19: 'Main Story Quest 19<br>"Raise your Adventure Rank!"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Obtain Reikrid Crystal',
            msq24: 'Main Story Quest 24<br>"Dragon Claw Valley"<br><br>Meet with Jake at<br>Dragon Claw Valley',
            msq25: 'Main Story Quest 25<br>"Dragon Claw Valley"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Defeat the monsters in<br>Dragon Claw Valley',
            msq29: 'Main Story Quest 29<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Go to Minsterhorn<br>in Minster Hills',
            msq30: 'Main Story Quest 30<br>"What&#39;s a &#39;visitor&#39;..?"<br><br><img src="images/map/freexploration.png" style="margin: 0 0.2em -0.3em -0.2em;">Search for the priest<br>at the giant tower ruins<br>in Andra Basin',
            msq31: 'Main Story Quest 31<br>"What&#39;s a &#39;visitor&#39;..?"<br><br>Report back to Milene',
            msq32: 'Main Story Quest 32<br>"Pillar of Divinity"<br><br>Speak with Feste after<br>reaching Adventure Rank 3',
            
            
            // Bahamar highlands
            divineToMinster: "To Minster Hills",
            divineToMinsterTool: '<img src="images/map/freexploration.png" style="transform: scale(0.7); margin: -0.5em 0.1em -0.6em -0.18em; width: 1.510vw;">Dragon Claw Valley<br><img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate - Minsterhorn<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Ferocious Beast<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Red Splash<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Piglet<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Land Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Dawngrass<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Andra Cedar Twig<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Iron Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Asterium Ore<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Asterbass<br>',
            divineName: "Divine Haven Hill",
            divineTool: '<img src="images/map/warpPortal.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.9em -0.5em; width: 2.031vw;">Warp Gate - Larpal<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Sapphire Trot<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Flaming Horns<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Highland Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Horned Goat<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Kaiser Elk<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Smoky Moss<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Blessio Fruit<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Beartree Leaf<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Large Fang Fossil<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Baha Ore<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Sandsilver<br>',
            larpalName: 'Larpal',
            expDivine1: "Exploration Point<br>Divine Haven Hill 1",
            expDivine2: "Exploration Point<br>Divine Haven Hill 2",
            expDivine3: "Exploration Point<br>Divine Haven Hill 3",
            warpLarpal: "Warp Gate<br>Larpal",
            emFlamingHorns: "Elite Monster<br>Flaming Horns",
            emSapphireTrot: "Elite Monster<br>Sapphire Trot",
            
            soundlessName: "Soundless Foothills",
            soundlessTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Spooky Goat<br><img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Evil Healer<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Horned Goat<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Highland Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Sage<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Round Water Plant<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Plateau Lily<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Jasper Stone<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Calm Nightstone<br>',
            bergmahlName: "Bergmahl",
            emSpookyGoat: "Elite Monster<br>Spooky Goat",
            emEvilHealer: "Elite Monster<br>Evil Healer",
            expSoundless1: "Exploration Point<br>Soundless Foothills 1",
            expSoundless2: "Exploration Point<br>Soundless Foothills 2",
            expSoundless3: "Exploration Point<br>Soundless Foothills 3",
            
            fielName: "Fiel Pond",
            fielTool: '<img src="images/map/elitemonster.png" style="transform: scale(0.5); margin: -0.5em -0.2em -0.91em -0.5em; width: 2.083vw;">Trick Elder<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Horned Goat<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Highland Fox<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Kaiser Elk<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Goblin Sage<br><img src="images/combat.svg" style="transform: scale(0.45); margin: -0.3em -0.1em -0.7em -0.3em; width: 1.823vw;">Elder Goblin<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Driftwood Twig<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Aqua Flower<br><img src="images/map/flower.svg" style="transform: scale(0.45); margin: -0.3em 0.2em -0.78em -0.1em; width: 1.354vw;">Nectar Seed<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Welling Water Stone<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Shivering Copper<br><img src="images/map/rock.svg" style="transform: scale(0.45); margin: -0.3em 0.1em -0.78em -0.2em; width: 1.510vw;">Shell Fossil<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Spike Fish<br><img src="images/map/shell.svg" style="transform: scale(0.45); margin: -0.3em -0.2em -0.6em -0.44em; width: 2.031vw;">Sunshine Shell<br>',
            expFiel1: "Exploration Point<br>Fiel Pond 1",
            expFiel2: "Exploration Point<br>Fiel Pond 2",
            emTrickElder: "Elite Monster<br>Trick Elder",
            yellow2: 'Yellow Liquid Memory 2<br><br>Examine the ground between the<br>tents in the goblin settlement',
            msq33: 'Main Story Quest 33<br>"Pillar of Divinity"<br><br>Go to the Pillar of Divinity<br>at Divine Haven Hill',
            msq34: 'Main Story Quest 34<br>"Pillar of Divinity"<br><br>Conduct a strategy<br>meeting in Larpal',
            msq35: 'Main Story Quest 35<br>"Pillar of Divinity"<br><br>Speak with the<br>pilgrims at Bergmahl in<br>Soundless Foothills',
            msq36: 'Main Story Quest 36<br>"Pillar of Divinity"<br><br>Present your permission badge<br>to the guard at the Pillar',
            msq37: 'Main Story Quest 37<br>"Pillar of Divinity"<br><br>Reach the top of the Pillar',
            msq38: 'Main Story Quest 38<br>"Pillar of Divinity"<br><br>Escort Aerinse and<br>the others to Larpal',
            
            // Toggle titles
            togtextWarp: 'Warp Gate',
            togtextMSQ: 'Main Story Quest',
            togtextImaj: 'Imagine Research Institute',
            togtextCraft: 'Crafting Machine',
            togtextReconstructor: 'Weapon Reconstructor',
            togtextClass: 'Class Master',
            togtextMemory: 'Liquid Memory Stand',
            togtextExchange: 'Exchange',
            togtextPotshop: 'Potion Shop',
            togtextWepshop: 'Weapon Shop',
            togtextStorage: 'Storage',
            togtextElite: 'Elite Monster',
            togtextDung: 'Dungeon Entrance',
            togtextRaid: 'Raid Entrance',
            togtextRock: 'Rock Resource',
            togtextPlant: 'Plant Resource',
            togtextOcean: 'Ocean Resource',
            togtextPoint: 'Exploration Point',
            togtextLiquid: 'Liquid Memory',
            togglesHeader: 'Show/Hide',
            
            
            // Search list
            listAndra: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Andra Basin',
            listCalm: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Calm Eve Terraces',
            listMinster: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Minster Hills',
            listMinsterhorn: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Minsterhorn',
            listSkyquake: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Skyquake Fields',
            listAsteria: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 0; width: 1.823vw;">Asteria Plain',
            listBahamar: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 0; width: 1.823vw;">Bahamar Highland',
            listDivine: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Divine Haven Hill',
            listLarpal: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Larpal',
            listFiel: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Fiel Pond',
            listSoundless: '<img src="images/combat.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 1.5em; width: 1.823vw;">Soundless Foothills',
            listBergmahl: '<img src="images/map/village1.svg" style="transform: scale(0.6); margin: -5em 0 -0.68em 3em; width: 1.823vw;">Bergmahl',
            listAsterleeds: '<img src="images/map2.svg" style="transform: scale(0.6); margin: -5em 0 -0.7em 0; width: 1.823vw;">Asterleeds<br>',
            searchTitle: 'Search Map or Area Name'
            
            
            
        }
    ]






// Inner Imajinn
// Translate NAME, LEVEL, ELEMENT, COOLDOWN, SLOT, ABILITY, RECIPE, ABILLIST, TOOLTIPTEXT
var iiHolderEN = [
        
        // Dyranks/Dylanx
        { 
            name: "Dyranks (courage)",
            type: "<br>",
            image: "images/crafting/ii1L.png",
            level: "Starting Lv 1~1 (Max Lv: 7)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Courage"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+12",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+1"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["Reikrid Crystal","<br>","<br>","1,000"],
            iconSrc: [iDung,"",""],
            amt: ["1","<br>","<br>"],
            abilList: ["Max HP increase","<br>", "<br>"],
            tooltipText: ["Clear Dungeon<br>Reikrid Tunnels","<br>","<br>"],
            tooltipBg: [
                tooltipSkyquake,"",""],
            tooltipIcn: ["transform: translate(11.4vw, 4.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Corjun/Corsion
        { 
            name: "Corjun (mystery)",
            type: "<br>",
            image: "images/crafting/ii2L.png",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mystery"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+5",
                    /*HP*/"+20",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+6",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["Land Fox Nail","Asterium Ore","<br>","9,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["8","15","<br>"],
            abilList: ["ATK increase","<br>", "<br>"],
            tooltipText: ["Land Fox<br>Minster Hills","Gather<br>Minster Hills","<br>"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Mipect
        { 
            name: "Mipect (hope)",
            type: "<br>",
            image: "images/crafting/ii3L.png",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Hope"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+3",
                    /*HP*/"+25",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["Goblin Nail","Jira Crystal","<br>","10,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","10","<br>"],
            abilList: ["Max Stamina increase","<br>", "<br>"],
            tooltipText: ["Goblin<br>Andra Basin","Gather<br>Andra Basin","<br>"],
            tooltipBg: [
                tooltipAndra,
                tooltipAndra,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Proxyx/Procsyx
        { 
            name: "Proxyx (courage)",
            type: "<br>",
            image: "images/crafting/ii4L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot1.svg","Courage"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+0",
                    /*HP*/"+36",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+13",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+0",
                    /*HP*/"+8",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+3",
                    /*DEX*/"+1"
                   ],
            recipe: ["Horned Goat Bone","Smoky Moss","<br>","60,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["12","20","<br>"],
            abilList: ["Max HP increase","VIT increase", "STR increase"],
            tooltipText: ["Horned Goat<br>Soundless Foothills","Gather<br>Divine Haven Hill","<br>"],
            tooltipBg: [
                tooltipSoundless,
                tooltipDivine,""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Latepect/Latepecht
        { 
            name: "Latepect (hope)",
            type: "<br>",
            image: "images/crafting/ii5L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot2.svg","Hope"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+4",
                    /*HP*/"+38",
                    /*VIT*/"+6",
                    /*MND*/"+5",
                    /*ATK*/"+11",
                    /*DEX*/"+0"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+1",
                    /*HP*/"+9",
                    /*VIT*/"+3",
                    /*MND*/"+2",
                    /*ATK*/"+2",
                    /*DEX*/"+0"
                   ],
            recipe: ["Large Fang Fossil","<br>","<br>","85,000"],
            iconSrc: [iRock,"",""],
            amt: ["25","<br>","<br>"],
            abilList: ["Max Stamina increase","INT increase", "MND increase"],
            tooltipText: ["Gather<br>Divine Haven Hill","<br>","<br>"],
            tooltipBg: [
                tooltipDivine,"",""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Carcon
        { 
            name: "Carcon (mystery)",
            type: "<br>",
            image: "images/crafting/ii6L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot3.svg","Mystery"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+0",
                    /*INT*/"+6",
                    /*HP*/"+32",
                    /*VIT*/"+5",
                    /*MND*/"+6",
                    /*ATK*/"+9",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+0",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+2"
                   ],
            recipe: ["Glowing Goblin's Nail","Pterosaur Fossil","<br>","240,000"],
            iconSrc: [iCombat,iRock,""],
            amt: ["10","35","<br>"],
            abilList: ["ATK increase","STR increase", "DEX increase"],
            tooltipText: ["Glowing Goblin<br>Dragon Claw Valley [Free Exploration]","Gather<br>Dragon Claw Valley [Free Exploration]","<br>"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipDragonclaw,""],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","transform: translate(11.4vw, 4.4vw)","visibility: hidden"]
        },
        // Parbury
        { 
            name: "Parbury (ambition)",
            type: "<br>",
            image: "images/crafting/ii7L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot4.svg","Ambition"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+34",
                    /*VIT*/"+4",
                    /*MND*/"+0",
                    /*ATK*/"+12",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+0",
                    /*ATK*/"+2",
                    /*DEX*/"+3"
                   ],
            recipe: ["Glowing Tyrant Boar's Fang","Stardust Grass","<br>","500,000"],
            iconSrc: [iCombat,iFlower,""],
            amt: ["15","40","<br>"],
            abilList: ["DEF increase","DEX increase", "VIT increase"],
            tooltipText: ["Glowing Tyrant Boar<br>Calm Eve Terraces","Gather<br>Calm Eve Terraces","<br>"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipCalmEve, ""],
            tooltipIcn: ["visibility: hidden","visibility: hidden","visibility: hidden"]
        },
        // Sanak'ta
        { 
            name: "Sanak'ta (affection)",
            type: "<br>",
            image: "images/crafting/ii8L.png",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // 
            slot: ["slot","images/crafting/slot5.svg","Affection"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+5",
                    /*HP*/"+30",
                    /*VIT*/"+0",
                    /*MND*/"+6",
                    /*ATK*/"+10",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+2",
                    /*HP*/"+5",
                    /*VIT*/"+0",
                    /*MND*/"+3",
                    /*ATK*/"+1",
                    /*DEX*/"+3"
                   ],
            recipe: ["Trick Elder's Nail","Welling Water Stone","<br>","900,000"],
            iconSrc: [iElite,iRock,""],
            amt: ["1","50","<br>"],
            abilList: ["Healing increase","MND increase", "INT increase"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Fiel Pond","<br>"],
            tooltipBg: [
                tooltipFiel,
                tooltipFiel,""],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","visibility: hidden","visibility: hidden"]
        }
    ]







// Battle Imajinn
// Translate NAME, TYPE, LEVEL, ELEMENT, COOLDOWN, SKILL, ABILITY, RECIPE, ABILLIST, TOOLTIPTEXT
var biHolderEN = [
        // Pink Piglet ピンクウリボ
        { 
            name: "Pink Piglet",
            type: "Heal type",
            image: "images/map/pinkpiglet.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ウリボの安らぎ・ピンクウリボのイマジンを召喚しピンクウリボの周囲に回復エリアを生成する
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Piglet's Tranquility (heal)","effectiveness", "175","67","Summons Pink Piglet's Imagine<br>who creates a healing field around itself"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+18",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+9",
                    /*DEX*/"+2"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+3",
                    /*MND*/"+1",
                    /*ATK*/"+4",
                    /*DEX*/"+1"
                   ],
            recipe: ["Pink Piglet's Idea","Ripple Stone","Piglet Skin","2,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["1","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Pink Piglet<br>Skyquake Fields","Gather<br>Skyquake Fields","Piglet<br>Skyquake Fields"],
            tooltipBg: [
                tooltipSkyquake,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(7vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Ferocious Beast 猛る獣
        { 
            name: "Ferocious Beast",
            type: "Support type",
            image: "images/map/ferociousbeast.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // アクトクライ・猛る獣のイマジンを召喚し召喚者の攻撃力を一定時間上昇させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Act Cry (support)","effectiveness", "150","150","Summons Ferocious Beast's Imagine<br>who gives the summoner a temporary ATK increase"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Ferocious Beast's Idea","Dawngrass","Rumble Boar's Skin","7,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Ferocious Beast<br>Minster Hills","Gather<br>Minster Hills","Rumble Boar<br>Andra Basin"],
            tooltipBg: [
                tooltipMinster,
                tooltipMinster,
                tooltipAndra],
            tooltipIcn: ["transform: translate(7.4vw, 8vw)","visibility: hidden","visibility: hidden"]
        },
        // Red Splash 赤い飛沫
        { 
            name: "Red Splash",
            type: "Attack type",
            image: "images/map/redsplash.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 兜割り・赤い飛沫のイマジンを召喚しターゲットの頭上を目掛けて棍棒を叩きつける。
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Helm Splitter (attack)","effectiveness", "422","166","Summons Red Splash's Imagine<br>who targets and strikes the target's head with its club"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+6",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Red Splash's Idea","Plateau Lily","Highland Fox Nail","15,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["2","3","1"],
            abilList: ["Damage increase (regular attack)","STR increase", "<br>"],
            tooltipText: ["Red Splash<br>Minster Hills","Gather<br>Soundless Foothills","Highland Fox<br>Divine Haven Hill"],
            tooltipBg: [
                tooltipMinster,
                tooltipSoundless,
                tooltipDivine],
            tooltipIcn: ["transform: translate(9.2vw, 2.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Deep Green Fang 深緑の牙
        { 
            name: "Deep Green Fang",
            type: "Attack type",
            image: "images/map/deepgreenfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 猪突猛進・深緑の牙のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Boar Rush (attack)","effectiveness", "514","166","Summons Deep Green Fang's Imagine<br>who performs a charge attack towards the center of the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+3",
                    /*MND*/"+1",
                    /*ATK*/"+4",
                    /*DEX*/"+1"
                   ],
            recipe: ["Deep Green Fang's Idea","Asterbass","Tyrant Boar's Skin","17,000"],
            iconSrc: [iElite,iShell,iCombat],
            amt: ["3","3","3"],
            abilList: ["Damage increase (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Deep Green Fang<br>Andra Basin","Gather<br>Minster Hills","Tyrant Boar<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                tooltipAndra,
                tooltipMinster,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(5.8vw, 11vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Iron Fang 鉄牙
        { 
            name: "Iron Fang",
            type: "Attack type",
            image: "images/map/ironfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // マウンテンスロー・鉄牙のイマジンを召喚し大きな牙でターゲットをすくい上げで打ち上げる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Mountain Throw (attack)","effectiveness", "524","169","Summons Iron Fang's Imagine<br>who throws enemies into the air with its large fangs"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+3",
                    /*MND*/"+1",
                    /*ATK*/"+4",
                    /*DEX*/"+1"
                   ],
            recipe: ["Iron Fang's Idea","Beartree Leaf","Goblin Mane","20,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Iron Fang<br>Andra Basin","Gather<br>Divine Haven Hill","Goblin<br>Minster hills"],
            tooltipBg: [
                tooltipAndra,
                tooltipDivine,
                tooltipMinster],
            tooltipIcn: ["transform: translate(2vw, 3.1vw)","visibility: hidden","visibility: hidden"]
        },
        // Flame Prison 炎獄
        { 
            name: "Flame Prison",
            type: "Attack type",
            image: "images/map/flamingprison.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // パワースイング・炎獄のイマジンを召喚し前方に棍棒を振り払う攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Power Swing (attack)","effectiveness", "710","169","Summons Flame Prison's Imagine<br>who swings its club to enemies in front of it"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+3",
                    /*HP*/"+31",
                    /*VIT*/"+4",
                    /*MND*/"+3",
                    /*ATK*/"+19",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+1",
                    /*HP*/"+7",
                    /*VIT*/"+2",
                    /*MND*/"+1",
                    /*ATK*/"+5",
                    /*DEX*/"+2"
                   ],
            recipe: ["Flame Prison's Idea","Jasper Stone","Glowing Goblin's Mane","86,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["5","3","3"],
            abilList: ["Reduce cooldown (battle imagine)","Max HP increase", "<br>"],
            tooltipText: ["Flame Prison<br>Calm Eve Terraces","Gather<br>Soundless Foothills","Glowing Goblin<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                tooltipCalmEve,
                tooltipSoundless,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(0.5vw, 9.5vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Ferocious Gold 猛る金色
        { 
            name: "Ferocious Gold",
            type: "Attack type",
            image: "images/map/ferociousgold.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // デスタックル・猛る金色のイマジンを召喚しターゲットを中心に突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Death Tackle (attack)","effectiveness", "696","166","Summons Ferocious Gold's Imagine<br>who performs a charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+?",
                    /*VIT*/"+5",
                    /*MND*/"+3",
                    /*ATK*/"+18",
                    /*DEX*/"+3"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+3",
                    /*MND*/"+1",
                    /*ATK*/"+4",
                    /*DEX*/"+1"
                   ],
            recipe: ["Ferocious Gold's Idea","Nectar Seed","Ferocious Beast's Tail","85,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["5","3","1"],
            abilList: ["Damage increase (close-range)","ATK increase", "<br>"],
            tooltipText: ["Ferocious Gold<br>Calm Eve Terraces","Gather<br>Fiel Pond","Ferocious Beast<br>Minster Hills"],
            tooltipBg: [tooltipCalmEve,
                        tooltipFiel,
                        tooltipMinster],
            tooltipIcn: ["transform: translate(4.8vw, 8.2vw)","visibility: hidden","transform: translate(7.4vw, 8vw)"]
        },
        // Sapphire Trot サファイアトロット
        { 
            name: "Sapphire Trot",
            type: "Attack type",
            image: "images/map/sapphiretrot.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 落石牙・サファイアトロットのイマジンを召喚しターゲットに飛び掛かり噛みつく
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Stone Fang Drop (attack)","effectiveness", "483","156","Summons Sapphire Trot's Imagine<br>who lunges at an enemy and bites them"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+19",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+10",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Sapphire Trot's Idea","Andra Cedar Twig","Elder Goblin's Mane","25,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Crit rate increase","DEX increase", "<br>"],
            tooltipText: ["Sapphire Trot<br>Divine Haven Hill","Gather<br>Minster Hills","Elder Goblin<br>Andra Basin"],
            tooltipBg: [tooltipDivine,
                        tooltipMinster,
                        tooltipAndra],
            tooltipIcn: ["transform: translate(4.7vw, 10.8vw)","visibility: hidden","visibility: hidden"]
        },
        // Flaming Horns 炎角
        { 
            name: "Flaming Horns",
            type: "Attack type",
            image: "images/map/flaminghorns.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // カイザーブラスト・炎角のイマジンを召喚しターゲットを中心に雷属性の突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Kaiser Blast (attack)","effectiveness", "493","159","Summons Flaming Horns' Imagine<br>who performs a Lightning elemental charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+23",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+12",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+4",
                    /*DEX*/"+3"
                   ],
            recipe: ["Flaming Horns' Idea","Blesio Nut","Goblin Sage's Mane","26,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Flaming Horns<br>Divine Haven Hill","Gather<br>Divine Haven Hill","Goblin Sage<br>Soundless Foothills"],
            tooltipBg: [tooltipDivineLeft,
                       tooltipDivine,
                       tooltipSoundless],
            tooltipIcn: ["transform: translate(0.8vw, 7.7vw)","visibility: hidden","visibility: hidden"]
        },
        // Spooky Goat スプーキーゴート
        { 
            name: "Spooky Goat",
            type: "Support type",
            image: "images/map/spookygoat.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ゴートヘイスト・スプーキーゴートのイマジンを召喚し召喚者の移動速度を一定時間上昇させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goat Haste (support)","effectiveness", "130","130","Summons Spooky Goat's Imagine<br>who gives the summoner a temporary movement speed increase"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+27",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+14",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+4",
                    /*DEX*/"+3"
                   ],
            recipe: ["Spooky Goat's Idea","Sunset Cedar Twig","Glowing Tyrant Boar Skin","45,000"],
            iconSrc: [iElite,iFlower,iCombat],
            amt: ["4","3","3"],
            abilList: ["Max stamina increase","DEX increase", "<br>"],
            tooltipText: ["Spooky Goat<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Glowing Tyrant Boar<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipDragonclaw],
            tooltipIcn: ["transform: translate(2.5vw, 4.9vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Evil Healer 悪しき癒し手
        { 
            name: "Evil Healer",
            type: "Heal type",
            image: "images/map/evilhealer.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // エリアヒール・悪しき癒し手のイマジンを召喚し悪しき癒し手の周囲の味方のHPを回復
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Area Heal (heal)","effectiveness", "267","71","Summons Evil Healer's Imagine<br>who heals the HP allies around it"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+6",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Evil Healer's Idea","Rimeril Ore","Ogre Bone","56,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Evil Healer<br>Soundless Foothills","Gather<br>Calm Eve Terraces","Ogre<br>Calm Eve Terraces"],
            tooltipBg: [tooltipSoundless,
                       tooltipCalmEve,
                       tooltipCalmEve],
            tooltipIcn: ["transform: translate(6vw, 10vw)","visibility: hidden","visibility: hidden"]
        },
        // Trick Elder トリックエルダー
        { 
            name: "Trick Elder",
            type: "Attack type",
            image: "images/map/trickelder.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // エルダークリスタル・トリックエルダーのイマジンを召喚しターゲットに対して氷柱を3発飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Elder Crystal (attack)","effectiveness", "741","156","Summons Trick Elder's Imagine<br>who launches 3 icicles at the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+32",
                    /*VIT*/"+4",
                    /*MND*/"+6",
                    /*ATK*/"+18",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+6",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Trick Elder's Idea","Dragon Venom","Deep Green Fang's Skin","130,000"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["3","3","1"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Trick Elder<br>Fiel Pond","Gather<br>Dragon Claw Valley [Free Exploration]","Deep Green Fang<br>Andra Basin"],
            tooltipBg: [tooltipFiel,
                       tooltipDragonclaw,
                       tooltipAndra],
            tooltipIcn: ["transform: translate(8.8vw, 8.2vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(5.8vw, 11vw)"]
        },
        // Elder Goblin エルダーゴブリン
        { 
            name: "Elder Goblin",
            type: "Attack type",
            image: "images/map/eldergoblin.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ファイアボール・エルダーゴブリンのイマジンを召喚しターゲットに火球を1発飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Fireball (attack)","effectiveness", "604","166","Summons Elder Goblin's Imagine<br>who blasts one fireball at the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+24",
                    /*VIT*/"+3",
                    /*MND*/"+5",
                    /*ATK*/"+13",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+6",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Elder Goblin's Idea","Magna Moss Fossil","Kaiser Elk Fur","43,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["4","3","3"],
            abilList: ["Damage increase (long-range)","INT increase", "<br>"],
            tooltipText: ["Arrogant Conjurer<br>Dragon Claw Valley [Free Exploration]","Gather<br>Calm Eve Terraces","Kaiser Elk<br>Divine Haven Hill"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipCalmEve,
                       tooltipDivine],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Goblin ゴブリン
        { 
            name: "Goblin",
            type: "Attack type",
            image: "images/map/goblin.mp4",
            level: "Starting Lv 1~1 (Max Lv: 15)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ゴブリンスタブ・ゴブリンのイマジンを召喚しターゲットを棍棒で突進状態で突く
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Stab (attack)","effectiveness", "414","163","Summons Goblin's Imagine<br>who stabs the target with its club"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+17",
                    /*VIT*/"+2",
                    /*MND*/"+4",
                    /*ATK*/"+8",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+6",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Goblin's Idea","Iron Ore","Land Fox Tail","9,000"],
            iconSrc: [iElite,iRock,iCombat],
            amt: ["2","3","1"],
            abilList: ["Damage increase (tactical skill 1)","STR increase", "<br>"],
            tooltipText: ["Valley Raider<br>Dragon Claw Valley [Free Exploration]","Gather<br>Skyquake Fields","Land Fox<br>Skyquake Fields"],
            tooltipBg: [tooltipDragonclaw,
                       tooltipSkyquake,
                       tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","visibility: hidden"]
        },
        // Land Fox ランドフォックス
        { 
            name: "Land Fox",
            type: "Attack type",
            image: "images/map/landfox.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // クラウンストライク・ランドフォックスのイマジンを召喚しターゲットに飛び掛かりタックルを行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Crown Strike (attack)","effectiveness", "669","159","Summons Land Fox's Imagine<br>who performs a leaping tackle at enemies"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+4",
                    /*HP*/"+16",
                    /*VIT*/"+3",
                    /*MND*/"+4",
                    /*ATK*/"+7",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+2",
                    /*INT*/"+3",
                    /*HP*/"+6",
                    /*VIT*/"+2",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Land Fox's Idea","Lamusa Flower","Pink Piglet's Skin","1,500"],
            iconSrc: [iElite,iFlower,iElite],
            amt: ["1","3","1"],
            abilList: ["Crit damage increase","DEX increase", "<br>"],
            tooltipText: ["Loudshot<br>Dragon Claw Valley [Free Exploration]","Gather<br>Skyquake Fields","Pink Piglet<br>Skyquake Fields"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipSkyquake,
                tooltipSkyquake],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(7vw, 7.7vw)"]
        },
        // Tyrant Boar タイラントボア
        { 
            name: "Tyrant Boar",
            type: "Attack type",
            image: "images/map/tyrantboar.mp4",
            level: "Starting Lv 1~1 (Max Lv: 20)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // 猟犬殺し・タイラントボアのイマジンを召喚しターゲットを頭突きで攻撃する
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Hound Killer (attack)","effectiveness", "504","163","Summons Tyrant Boar<br>who attacks the target with a headbutt"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+4",
                    /*INT*/"+3",
                    /*HP*/"+22",
                    /*VIT*/"+4",
                    /*MND*/"+2",
                    /*ATK*/"+13",
                    /*DEX*/"+2"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+3",
                    /*MND*/"+1",
                    /*ATK*/"+4",
                    /*DEX*/"+1"
                   ],
            recipe: ["Tyrant Boar's Idea","Sandsilver","Horn Goat's Fur","45,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["2","3","3"],
            abilList: ["Damage increase (battle imagine)","ATK increase", "<br>"],
            tooltipText: ["Clear Arena [C Rank]","Gather<br>Divine Haven Hill","Horned Goat<br>Fiel Pond"],
            tooltipBg: [
                tooltipArena,
                tooltipDivine,
                tooltipFiel],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","visibility: hidden"]
        },
        // Horned Goat ホーンゴート
        { 
            name: "Horned Goat",
            type: "Attack type",
            image: "images/map/horngoat.mp4",
            level: "Starting Lv 1~1 (Max Lv: 25)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // ビハインドキック・ホーンゴートのイマジンを召喚しターゲットを後ろ足で蹴り飛ばす
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Back Kick (attack)","effectiveness", "593","163","Summons Horned Goat's Imagine<br>who kicks back enemies with its rear legs"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+3",
                    /*INT*/"+3",
                    /*HP*/"+27",
                    /*VIT*/"+4",
                    /*MND*/"+5",
                    /*ATK*/"+14",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+4",
                    /*DEX*/"+3"
                   ],
            recipe: ["Horned Goat's Idea","Silver Ore","Glowing Elder Goblin's Mane","83,000"],
            iconSrc: [iDung,iRock,iCombat],
            amt: ["3","3","3"],
            abilList: ["Reduce damage taken (long-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [B Rank]","Gather<br>Fiel Pond","Glowing Elder Goblin<br>Dragon Claw Valley [Free Exploration]"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDragonclaw],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(11.4vw, 4.4vw)"]
        },
        // Goblin Sage ゴブリンセージ
        { 
            name: "Goblin Sage",
            type: "Heal type",
            image: "images/map/goblinsage.mp4",
            level: "Starting Lv 1~1 (Max Lv: 30)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;60 sec"],
            // ゴブリンセージの調律・ゴブリンセージのイマジンを召喚し召喚者のHPを回復させる
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Goblin Sage's Tuning (heal)","effectiveness", "323","74","Summons Goblin Sage's Imagine<br>who heals the HP of the summoner"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+28",
                    /*VIT*/"+3",
                    /*MND*/"+5",
                    /*ATK*/"+16",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+6",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+3",
                    /*DEX*/"+3"
                   ],
            recipe: ["Goblin Sage's Idea","Spike Fish","Sapphire Trot's Fang","120,000"],
            iconSrc: [iDung,iShell,iElite],
            amt: ["5","3","1"],
            abilList: ["Increased healing (battle imagine)","Increased healing", "<br>"],
            tooltipText: ["Clear Arena [A Rank]","Gather<br>Fiel Pond","Sapphire Trot<br>Divine Haven Hill"],
            tooltipBg: [
                tooltipArena,
                tooltipFiel,
                tooltipDivine],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","visibility: hidden","transform: translate(4.7vw, 10.8vw)"]
        },
        // Kaiser Elk カイザーエルク
        { 
            name: "Kaiser Elk",
            type: "Attack type",
            image: "images/map/kaiserelk.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // クラッパーホーン・カイザーエルクのイマジンを召喚しターゲットを角で振り払う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Clapper Horn (attack)","effectiveness", "756","159","Summons Kaiser Elk's Imagine<br>who attacks enemies with its horns"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+35",
                    /*VIT*/"+4",
                    /*MND*/"+6",
                    /*ATK*/"+19",
                    /*DEX*/"+6"
                   ],
            minStats: [
                    /*STR*/"+1",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+1",
                    /*MND*/"+3",
                    /*ATK*/"+4",
                    /*DEX*/"+3"
                   ],
            recipe: ["Kaiser Elk's Idea","Longan Flower","Evil Healer's Mane","140,000"],
            iconSrc: [iDung,iFlower,iElite],
            amt: ["7","3","1"],
            abilList: ["Reduce damage taken (close-range)","DEF increase", "<br>"],
            tooltipText: ["Clear Arena [S Rank]","Gather<br>Dragon Claw Valley [Free Exploration]","Evil Healer<br>Soundless Foothills"],
            tooltipBg: [
                tooltipArena,
                tooltipDragonclaw,
                tooltipSoundless],
            tooltipIcn: ["transform: translate(6.38vw, 8.3vw)","transform: translate(11.4vw, 4.4vw)","transform: translate(6vw, 10vw)"]
        },
        // Raging Kingfang 荒ぶる牙王
        { 
            name: "Raging Kingfang",
            type: "Attack type",
            image: "images/map/ragingkingfang.mp4",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // タイラントアサルト・荒ぶる牙王のイマジンを召喚しターゲットを中心に広範囲の突進攻撃を行う
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Tyrant Assault (attack)","effectiveness", "787","166","Summons Raging Kingfang's Imagine<br>who performs a wide-range charge attack towards the target"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+5",
                    /*HP*/"+34",
                    /*VIT*/"+6",
                    /*MND*/"+4",
                    /*ATK*/"+20",
                    /*DEX*/"+4"
                   ],
            minStats: [
                    /*STR*/"+3",
                    /*INT*/"+2",
                    /*HP*/"+7",
                    /*VIT*/"+3",
                    /*MND*/"+1",
                    /*ATK*/"+4",
                    /*DEX*/"+1"
                   ],
            recipe: ["Raging Kingfang's Idea","Shell Fossil","Flame Prison's Bone","190,000"],
            iconSrc: [iElite,iRock,iElite],
            amt: ["7","3","1"],
            abilList: ["Reduce cooldown (ultimate)","ATK increase", "<br>"],
            tooltipText: ["Raging Kingfang<br>Dragon Claw Valley [Free Exploration]","Gather<br>Fiel Pond","Flame Prison<br>Calm Eve Terraces"],
            tooltipBg: [
                tooltipDragonclaw,
                tooltipFiel,
                tooltipCalmEve],
            tooltipIcn: ["transform: translate(11.4vw, 4.4vw)","visibility: hidden","transform: translate(0.5vw, 9.5vw)"]
        },
        // Sealed Atrocity 封印されし暴虐
        { 
            name: "Sealed Atrocity",
            type: "Attack type",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // アースクエイク
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Earthquake (attack)","effectiveness", "802","?","Summons Sealed Atrocity's Imagine<br>who performs a large Earth elemental attack with centered around itself"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+6",
                    /*INT*/"+4",
                    /*HP*/"+35",
                    /*VIT*/"+5",
                    /*MND*/"+4",
                    /*ATK*/"+21",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+?",
                    /*INT*/"+?",
                    /*HP*/"+?",
                    /*VIT*/"+?",
                    /*MND*/"+?",
                    /*ATK*/"+?",
                    /*DEX*/"+?"
                   ],
            recipe: ["Obtained as a Quest Reward", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete quest "Collect Battle Imagine! #2"<br><br>After completing "Collect Battle Imagine! #1", craft Deep Green Fang, Iron Fang, Sapphire Trot, and Spooky Goat',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
        // Plidoke プリドーク
        { 
            name: "Plidoke",
            type: "Attack type",
            image: "",
            level: "Starting Lv 1~1 (Max Lv: 35)",
            element: ["element &nbsp;&nbsp;&nbsp;-","&nbsp;"],
            cooldown: ["cooldown","&nbsp;&nbsp;&nbsp;&nbsp;30 sec"],
            // スライサーアーム・プリドークのイマジンを召喚し前方のターゲットに両手の剣を突き刺す
            skill: ["skill","&nbsp;&nbsp;&nbsp;&nbsp;Slicer Arm (attack)","effectiveness", "772","?","Summons Plidoke's Imagine<br>who pierces enemies in front of it with its sword arms"],
            ability: ["ability", "????","effectiveness", "????"],
            stats: [/*STR*/"+5",
                    /*INT*/"+4",
                    /*HP*/"+37",
                    /*VIT*/"+6",
                    /*MND*/"+4",
                    /*ATK*/"+20",
                    /*DEX*/"+5"
                   ],
            minStats: [
                    /*STR*/"+?",
                    /*INT*/"+?",
                    /*HP*/"+?",
                    /*VIT*/"+?",
                    /*MND*/"+?",
                    /*ATK*/"+?",
                    /*DEX*/"+?"
                   ],
            recipe: ["Obtained as a Quest Reward", "<br>", "<br>", "0"],
            iconSrc: [iQuest,"",""],
            amt: ["<br>","<br>","<br>"],
            abilList: ["-","<br>", "<br>"],
            tooltipText: ['Complete quest "Collect Battle Imagine! #3"<br><br>After completing "Collect Battle Imagine! #2", craft ???',"<br>","<br>"],
            tooltipBg: [
                tooltipFrontier,"",""],
            tooltipIcn: ["transform: translate(7.4vw, 5.5vw)","visibility: hidden","visibility: hidden"]
        },
    ]




// Other guide pages to be added