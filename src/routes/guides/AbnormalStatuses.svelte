<script>
    export let category = "";

    // Names found in /BLUEPROTOCOL/Content/Text/StatusAlimentNotify.uasset 
    // Tutorial Descriptions found in /BLUEPROTOCOL/Content/Text/TutorialHelp.uasset (search Attribute and BuffDebuff, and 専用のバフ)
    const statusAilments = [
        {
            category: "debuff",
            name: "Fire Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1000.png",
            desc: "Become engulfed in flames, continuously losing HP",
        },
        {
            category: "debuff",
            name: "Fire Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1001.png",
            desc: "Become engulfed in flames, continuously losing HP",
        },
        {
            category: "debuff",
            name: "Fire Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1002.png",
            desc: "Fire Burst causes a small explosion, and Burst Finish causes a large explosion dealing great damage",
        },
        {
            category: "debuff",
            name: "Ice Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1003.png",
            desc: "Start to freeze over, reducing movement speed",
        },
        {
            category: "debuff",
            name: "Ice Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1004.png",
            desc: "Start to freeze over, reducing movement speed",
        },
        {
            category: "debuff",
            name: "Ice Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1005.png",
            desc: "Ice Burst freezes the target, and Burst Finish explodes the ice, dealing great damage",
        },
        {
            category: "debuff",
            name: "Thunder Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1006.png",
            desc: "Electricity surges throughout the target's body, periodically interrupting actions",
        },
        {
            category: "debuff",
            name: "Thunder Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1007.png",
            desc: "Electricity surges throughout the target's body, periodically interrupting actions",
        },
        {
            category: "debuff",
            name: "Thunder Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1008.png",
            desc: "Thunder Burst causes a small explosion, and Burst Finish causes a large explosion dealing great damage while inflicting Paralyze",
        },
        {
            category: "debuff",
            name: "Earth Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1009.png",
            desc: "Clumps of earth stick to the target, increasing damage received",
        },
        {
            category: "debuff",
            name: "Earth Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1010.png",
            desc: "Clumps of earth stick to the target, increasing damage received",
        },
        {
            category: "debuff",
            name: "Earth Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1011.png",
            desc: "Earth Burst petrifies the target, immobilizing them, and Burst Finish explodes the rock, dealing great damage",
        },
        {
            category: "debuff",
            name: "Light Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1012.png",
            desc: "Become covered by Light, dealing less damage",
        },
        {
            category: "debuff",
            name: "Light Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1013.png",
            desc: "Become covered by Light, dealing less damage",
        },
        {
            category: "debuff",
            name: "Light Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1014.png",
            desc: "Light Burst generates a small explosion, and Burst Finish causes a large explosion dealing great damage while granting HP Regen to nearby players",
        },
        {
            category: "debuff",
            name: "Dark Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1015.png",
            desc: "Shrouded in darkness, attacks have a chance to miss",
        },
        {
            category: "debuff",
            name: "Dark Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1016.png",
            desc: "Shrouded in darkness, attacks have a chance to miss",
        },
        {
            category: "debuff",
            name: "Dark Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1017.png",
            desc: "Dark Burst causes a small explosion, and Burst Finish causes a large explosion dealing great damage while inflicting Drained",
        },
        {
            category: "debuff",
            name: "Stun",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2001.png",
            desc: "Become stunned for a few sections (actions are disabled)",
        },
        {
            category: "debuff",
            name: "Sleep",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2003.png",
            desc: "Sleep for a short period (actions are disabled)",
        },
        {
            category: "debuff",
            name: "Poison",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2005.png",
            desc: "HP is continuously deducted over time",
        },
        {
            category: "debuff",
            name: "Targeted",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2006.png",
            desc: "Specifically become the target for enemy attacks",
        },
        {
            category: "debuff",
            name: "Fear",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2008.png",
            desc: "Become immobilized and attempt to separate from the target",
        },
        {
            category: "debuff",
            name: "Blind",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2010.png",
            desc: "Attacks have a chance of missing",
        },
        {
            category: "debuff",
            name: "Skill Locked",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2011.png",
            desc: "Skills cannot be used",
        },
        {
            category: "debuff",
            name: "Fatigue",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2012.png",
            desc: "Stamina is reduced to 0",
        },
        {
            category: "debuff",
            name: "Item Locked",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2013.png",
            desc: "Items cannot be used",
        },
        {
            category: "debuff",
            name: "Nappo",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2014.png",
            desc: "Transform into a Nappo",
        },
        {
            category: "debuff",
            name: "Bind",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2016.png",
            desc: "Immobilized (actions are not disabled)",
        },
        {
            category: "debuff",
            name: "Paralyzed",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2017.png",
            desc: "Actions are periodically interrupted", // Actions get cancelled at regular intervals
        },
        {
            category: "debuff",
            name: "Drained",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2018.png",
            desc: "When attacked, the attacker recovers HP",
        },
        {
            category: "debuff",
            name: "Weak",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_3002.png",
            desc: "Reduces Max HP and movement speed",
        },
        // {
        //     category: "debuff",
        //     name: "Damage Immune",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_.png",
        //     desc: "",
        // },
        {
            category: "buff",
            name: "ATK Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4001.png",
            desc: "Increases damage dealt",
        },
        {
            category: "debuff",
            name: "ATK Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4002.png",
            desc: "Reduces damage dealt",
        },
        {
            category: "buff",
            name: "DEF Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4003.png",
            desc: "Reduces damage received",
        },
        {
            category: "debuff",
            name: "DEF Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4004.png",
            desc: "Increases damage received",
        },
        {
            category: "buff",
            name: "Drain",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4005.png",
            desc: "Restores a portion of damage dealt as HP",
        },
        {
            category: "buff",
            name: "SP Armor", // Super Armor
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4006.png",
            desc: "Become immune to flinching when hit",
        },
        {
            category: "buff",
            name: "HP Regen",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4007.png",
            desc: "Regenerates HP over time",
        },
        {
            category: "buff",
            name: "EP Regen",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4008.png",
            desc: "Regenerates EP over time",
        },
        {
            category: "buff",
            name: "Quick Charge",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4009.png",
            desc: "Reduces charge time for skills that can be charged",
        },
        {
            category: "debuff",
            name: "Slow Charge",
            imgSrc: "/images/StatusAilment/UI_StatusAilment_4010.png",
            desc: "Increases charge time for skills that can be charged",
        },
        {
            category: "buff",
            name: "Quick Interval",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4011.png",
            desc: "Reduces skill cooldowns",
        },
        {
            category: "debuff",
            name: "Slow Interval",
            imgSrc: "/images/StatusAilment/UI_StatusAilment_4012.png",
            desc: "Increases skill cooldowns",
        },
        {
            category: "buff",
            name: "Speed Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4017.png",
            desc: "Increases movement speed",
        },
        {
            category: "debuff",
            name: "Speed Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4018.png",
            desc: "Reduces movement speed",
        },
        {
            category: "buff",
            name: "Shield Save",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4019.png",
            desc: "Shield gauge is not consumed by skills",
        },
        {
            category: "buff",
            name: "Follow Bullet",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4021.png",
            desc: "Summon two hovering bullets to attack alongside you",
        },
        // {
        //     category: "buff",
        //     name: "Stun Immunity (OLD)",
        //     imgSrc: "/images/StatusAilment/UI_StatusAilment_2002.png",
        //     desc: "Immunity to stun",
        // },
        // {
        //     category: "buff",
        //     name: "Invincibility (OLD)",
        //     imgSrc: "/images/StatusAilment/UI_StatusAilment_3003.png",
        //     desc: "Take no damage",
        // },
        {
            category: "buff",
            name: "Fire DMG Dealt Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4026.png",
            desc: "Increases Fire damage",
        },
        {
            category: "buff",
            name: "Ice DMG Dealt Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4027.png",
            desc: "Increases Ice damage",
        },
        {
            category: "buff",
            name: "Lightning DMG Dealt Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4028.png",
            desc: "Increases Lightning damage",
        },
        {
            category: "buff",
            name: "Earth DMG Dealt Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4029.png",
            desc: "Increases Earth damage",
        },
        {
            category: "buff",
            name: "Light DMG Dealt Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4030.png",
            desc: "Increases Light damage",
        },
        {
            category: "buff",
            name: "Dark DMG Dealt Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4031.png",
            desc: "Increases Dark damage",
        },
        // {
        //     category: "debuff",
        //     name: "Fire DMG Dealt Down",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4032.png",
        //     desc: "",
        // },
        // {
        //     category: "debuff",
        //     name: "Ice DMG Dealt Down",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4033.png",
        //     desc: "",
        // },
        // {
        //     category: "debuff",
        //     name: "Thunder DMG Dealt Down",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4034.png",
        //     desc: "",
        // },
        // {
        //     category: "debuff",
        //     name: "Earth DMG Dealt Down",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4035.png",
        //     desc: "",
        // },
        // {
        //     category: "debuff",
        //     name: "Light DMG Dealt Down",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4036.png",
        //     desc: "",
        // },
        // {
        //     category: "debuff",
        //     name: "Dark DMG Dealt Down",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4037.png",
        //     desc: "",
        // },
        {
            category: "buff",
            name: "Fire Resist Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4038.png",
            desc: "Increases defense against Fire damage",
        },
        {
            category: "buff",
            name: "Ice Resist Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4039.png",
            desc: "Increases defense against Ice damage",
        },
        {
            category: "buff",
            name: "Thunder Resist Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4040.png",
            desc: "Increases defense against Thunder damage",
        },
        {
            category: "buff",
            name: "Earth Resist Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4041.png",
            desc: "Increases defense against Earth damage",
        },
        {
            category: "buff",
            name: "Light Resist Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4042.png",
            desc: "Increases defense against Light damage",
        },
        {
            category: "buff",
            name: "Dark Resist Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4043.png",
            desc: "Increases defense against Dark damage",
        },
        {
            category: "debuff",
            name: "Fire Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4044.png",
            desc: "Reduces defense against Fire damage",
        },
        {
            category: "debuff",
            name: "Ice Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4045.png",
            desc: "Reduces defense against Ice damage",
        },
        {
            category: "debuff",
            name: "Thunder Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4046.png",
            desc: "Reduces defense against Thunder damage",
        },
        {
            category: "debuff",
            name: "Earth Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4047.png",
            desc: "Reduces defense against Earth damage",
        },
        {
            category: "debuff",
            name: "Light Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4048.png",
            desc: "Reduces defense against Light damage",
        },
        {
            category: "debuff",
            name: "Dark Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4049.png",
            desc: "Reduces defense against Dark damage",
        },
        {
            category: "buff",
            name: "ST Quick Regen",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4050.png",
            desc: "Increases the speed of stamina recovery",
        },
        {
            category: "debuff",
            name: "ST Slow Regen",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4051.png",
            desc: "Decreases the speed of stamina recovery", // 
        },
        {
            category: "buff",
            name: "ST Save",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4058.png", // not sure
            desc: "Reduces the amount of stamina consumed",
        },
        // {
        //     category: "buff",
        //     name: "Barrier Ready",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4053.png",
        //     desc: "",
        // },
        // {
        //     category: "buff",
        //     name: "Critical Ready",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_40.png",
        //     desc: "The next attack is guaranteed to be a critical hit",
        // },
        {
            category: "buff",
            name: "Taunt Mode",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4054.png", // not sure
            desc: "Some attacks with Taunt enemies", // 一部の攻撃に状態異常『挑発』を\n付与します
        },
        {
            category: "buff",
            name: "Rock Body",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4056.png",
            desc: "Gain Super Armor and negate a portion of damage",
        },
        // {
        //     category: "buff",
        //     name: "Immune",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_40.png",
        //     desc: "",
        // },
        {
            category: "buff",
            name: "Bad Status Immune",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4062.png", // not sure, but based on BA's refresh area
            desc: "Become immune to abnormal status effects",
        },
        // {
        //     category: "buff",
        //     name: "Resist",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_40.png",
        //     desc: "",
        // },
        {
            category: "buff",
            name: "Heal?",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4064.png",
            desc: "",
        },
        {
            category: "buff",
            name: "Critical Rate Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4063.png",
            desc: "Increases the chance of critical hits",
        },
        {
            category: "buff",
            name: "Points Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4065.png",
            desc: "Increases the amount of points gained in Score Attack",
        },
        {
            category: "buff",
            name: "Cure Cartridge",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4061.png",
            desc: "Recover HP when using a cartridge",
        },
        {
            category: "buff",
            name: "Ignition",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4066.png",
            desc: "While this skill is active, consume combo gauge to boost the damage of other skills",
        },
        {
            category: "buff",
            name: "Hunter Spirit",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4067.png",
            desc: "Increases the rate at which the Buff Charge gauge accumulates", // BCゲージの上昇率がアップします
        },
    ];

    // st quick regen
    // st slow regen
    // st save
    // barrier ready
    // critical ready
    // taunt mode
    // rock body
    // immune
    // bad status immune
    // resist
    // critical rate up
    // Points up
    // cure cartridge
    // ignition
    // hunter spirit
</script>

<table>
    <thead>
        <tr>
            <th>Icon</th>
            <th>Status</th>
            <th>Effect</th>
        </tr>
    </thead>
    <tbody>
        {#each statusAilments as status}
            {#if status.category === category}
                <tr>
                    <td>
                        <img
                            src={status.imgSrc}
                            alt=""
                            width="26"
                            height="30"
                        />
                    </td>
                    <td>{status.name}</td>
                    <td>{status.desc}</td>
                </tr>
            {/if}
        {/each}
    </tbody>
</table>
