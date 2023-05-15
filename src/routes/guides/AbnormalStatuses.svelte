<script>
    export let category = "";

    // Names found in /BLUEPROTOCOL/Content/Text/StatusAlimentNotify.uasset
    const statusAilments = [
        {
            category: "debuff",
            name: "Fire Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1000.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Fire Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1001.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "First Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1002.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Ice Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1003.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Ice Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1004.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Ice Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1005.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Thunder Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1006.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Thunder Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1007.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Thunder Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1008.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Earth Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1009.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Earth Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1010.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Earth Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1011.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Light Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1012.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Light Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1013.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Light Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1014.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Dark Lv. 1",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1015.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Dark Lv. 2",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1016.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Dark Burst",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_1017.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Stun",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2001.png",
            desc: "Stuns target for a short period",
        },
        {
            category: "debuff",
            name: "Sleep",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2003.png",
            desc: "Sleeps target, disabling their actions",
        },
        {
            category: "debuff",
            name: "Poison",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2005.png",
            desc: "Drains target's HP over time",
        },
        {
            category: "debuff",
            name: "Targeted",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2006.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Fear",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2008.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Blind",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2010.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Skill Locked",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2011.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Fatigue",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2012.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Item Locked",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2013.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Nappo",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2014.png",
            desc: "Transformed into a Nappo",
        },
        {
            category: "debuff",
            name: "Bind",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2016.png",
            desc: "Immobilizes target without disabling attacks",
        },
        {
            category: "debuff",
            name: "Paralyzed",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2017.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Drained",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_2018.png",
            desc: "",
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
            desc: "Increases ATK",
        },
        {
            category: "debuff",
            name: "ATK Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4002.png",
            desc: "Reduces ATK",
        },
        {
            category: "buff",
            name: "DEF Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4003.png",
            desc: "Increases DEF",
        },
        {
            category: "debuff",
            name: "DEF Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4004.png",
            desc: "Reduces DEF",
        },
        {
            category: "buff",
            name: "Drain",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4005.png",
            desc: "Restores a portion of damage dealt as HP",
        },
        {
            category: "buff",
            name: "SP Armor",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4006.png",
            desc: "Immunity to stagger",
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
            desc: "Reduces skill charge time",
        },
        {
            category: "debuff",
            name: "Slow Charge",
            imgSrc: "/images/StatusAilment/UI_StatusAilment_4010.png",
            desc: "Increases skill charge time",
        },
        {
            category: "buff",
            name: "Quick Interval",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4011.png",
            desc: "Reduces skill cooldown",
        },
        {
            category: "debuff",
            name: "Slow Interval",
            imgSrc: "/images/StatusAilment/UI_StatusAilment_4012.png",
            desc: "Increases skill cooldown",
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
            desc: "", // might be wrong: Shield gauge is not consumed when used in skills
        },
        {
            category: "buff",
            name: "Follow Bullet",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4021.png",
            desc: "",
        },
        {
            category: "buff",
            name: "Stun Immunity (OLD)",
            imgSrc: "/images/StatusAilment/UI_StatusAilment_2002.png", // prev. 2002
            desc: "Immunity to stun",
        },
        {
            category: "buff",
            name: "Invincibility (OLD)",
            imgSrc: "/images/StatusAilment/UI_StatusAilment_3003.png", // prev. 3003
            desc: "Take no damage",
        },
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
            desc: "",
        },
        {
            category: "debuff",
            name: "Ice Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4045.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Thunder Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4046.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Earth Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4047.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Light Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4048.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "Dark Resist Down",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4049.png",
            desc: "",
        },
        {
            category: "buff",
            name: "ST Quick Regen",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4050.png",
            desc: "",
        },
        {
            category: "debuff",
            name: "ST Slow Regen",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4051.png",
            desc: "",
        },
        {
            category: "buff",
            name: "ST Save",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4058.png", // not sure
            desc: "",
        },
        // {
        //     category: "buff",
        //     name: "Barrier Ready",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4053.png",
        //     desc: "",
        // },
        {
            category: "buff",
            name: "Critical Ready",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4063.png",
            desc: "",
        },
        {
            category: "buff",
            name: "Taunt Mode",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4054.png", // not sure
            desc: "",
        },
        {
            category: "buff",
            name: "Rock Body",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4056.png",
            desc: "",
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
            desc: "",
        },
        // {
        //     category: "buff",
        //     name: "Resist",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_40.png",
        //     desc: "",
        // },
        // {
        //     category: "buff",
        //     name: "Critical Rate Up",
        //     imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_40.png", // not sure
        //     desc: "",
        // },
        {
            category: "buff",
            name: "Points Up",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4065.png",
            desc: "",
        },
        {
            category: "buff",
            name: "Cure Cartridge",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4061.png",
            desc: "",
        },
        {
            category: "buff",
            name: "Ignition",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4066.png",
            desc: "",
        },
        {
            category: "buff",
            name: "Hunter Spirit",
            imgSrc: "/UI/Icon/StatusAilment/UI_StatusAilment_4067.png",
            desc: "",
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
