<script>
    let tableType = "buffs";
    // Names found in /BLUEPROTOCOL/Content/Text/StatusAlimentNotify.uasset
    // Tutorial Descriptions found in /BLUEPROTOCOL/Content/Text/TutorialHelp.uasset (search Attribute and BuffDebuff, and 専用のバフ)
    const statusAilments = {
        debuffs: [
            {
                name: "ATK Down",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4002.webp"],
                desc: "Reduces damage dealt",
            },
            {
                name: "DEF Down",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4004.webp"],
                desc: "Increases damage received",
            },
            {
                name: "Slow Charge",
                icons: ["/images/StatusAilment/UI_StatusAilment_4010.webp"],
                desc: "Increases charge time for skills that can be charged",
            },
            {
                name: "Slow Interval",
                icons: ["/images/StatusAilment/UI_StatusAilment_4012.webp"],
                desc: "Increases skill cooldowns",
            },
            {
                name: "Speed Down",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4018.webp"],
                desc: "Reduces movement speed",
            },
            {
                name: "ST Slow Regen",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4051.webp"],
                desc: "Decreases the speed of stamina recovery", //
            },
            {
                name: "HP Leak", // Drained
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2018.webp"],
                desc: "When attacked, the attacker recovers HP",
            },
            {
                name: "Fatigue",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2012.webp"],
                desc: "Stamina is reduced to 0",
            },

            {
                name: "Stun",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2001.webp"],
                desc: "Become stunned for a few sections (actions are disabled)",
            },
            {
                name: "Sleep",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2003.webp"],
                desc: "Sleep for a short period (actions are disabled)",
            },
            {
                name: "Poison",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2005.webp"],
                desc: "HP is continuously deducted over time",
            },
            {
                name: "Taunted", // Provoked, Taunted, "Targeted"
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2006.webp"],
                desc: "Specifically become the target for enemy attacks. Increases damage taken by 10%?",
            },
            {
                name: "Fear",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2008.webp"],
                desc: "Become immobilized and attempt to separate from the target",
            },
            {
                name: "Blind",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2010.webp"],
                desc: "Attacks have a chance of missing",
            },
            {
                name: "Skill Locked",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2011.webp"],
                desc: "Skills cannot be used",
            },
            {
                name: "Item Locked",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2013.webp"],
                desc: "Items cannot be used",
            },
            {
                name: "Nappo",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2014.webp"],
                desc: "Transform into a Nappo (unable to do anything but move)",
            },
            {
                name: "Bind",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2016.webp"],
                desc: "Immobilized (actions are not disabled)",
            },
            {
                name: "Paralyzed",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_2017.webp"],
                desc: "Actions are interrupted at regular intervals",
            },

            {
                name: "Weak",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_3002.webp"],
                desc: "Reduces Max HP and movement speed",
            },
            // {
            //
            //     name: "Damage Immune",
            //     icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_.webp"],
            //     desc: "",
            // },
        ],
        buffs: [
            {
                name: "ATK Up",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4001.webp"],
                desc: "Increases damage dealt",
            },
            {
                name: "DEF Up",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4003.webp"],
                desc: "Reduces damage received",
            },
            {
                name: "Quick Charge",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4009.webp"],
                desc: "Reduces charge time for skills that can be charged",
            },
            {
                name: "Quick Interval",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4011.webp"],
                desc: "Reduces skill cooldowns",
            },
            {
                name: "Speed Up",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4017.webp"],
                desc: "Increases movement speed",
            },
            {
                name: "ST Quick Regen",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4050.webp"],
                desc: "Increases the speed of stamina recovery",
            },
            {
                name: "Drain",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4005.webp"],
                desc: "Restores a portion of damage dealt as HP",
            },
            {
                name: "ST Save",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4058.webp"],
                desc: "Reduces the amount of stamina consumed",
            },
            {
                name: "SP Armor", // Super Armor
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4006.webp"],
                desc: "Become immune to flinching when hit",
            },
            {
                name: "HP Regen",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4007.webp"],
                desc: "Regenerates HP over time",
            },
            {
                name: "Barrier Ready",
                icons: [
                    "https://image.swiki.jp/img0/?host=blueprotocol&page=%E3%83%90%E3%83%88%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0&src=%E3%83%AF%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%90%E3%83%AA%E3%82%A2.png",
                ],
                desc: "Provides a one-time barrier that blocks incoming damage.",
            },
            {
                name: "Critical Ready",
                icons: [
                    "https://image.swiki.jp/img0/?host=blueprotocol&page=%E3%83%90%E3%83%88%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0&src=%E3%83%AF%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%AF%E3%83%AA%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB.png",
                ],
                desc: "The next attack is guaranteed to be a critical hit",
            },
            {
                name: "Bad Status Immune",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4062.webp"], // not sure, but based on BA's refresh area
                desc: "Become immune to abnormal status effects",
            },

            {
                name: "Full Heal",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4064.webp"],
                desc: "Heals party members' health to full", // from Suppliers
            },
            {
                name: "Critical Rate Up",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4063.webp"],
                desc: "Increases the chance of critical hits",
            },
            {
                name: "Points Up",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4065.webp"],
                desc: "Increases the amount of points gained in Score Attack", // Increases point multiplier
            },
            {
                name: "Posession", // 憑依状態
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_3004.webp"],
                desc: "Provides various buffs (differs per Battle Imagine)", // Increases point multiplier
            },
            {
                asterisk: 1,
                name: "Stun Immunity",
                icons: ["/images/StatusAilment/UI_StatusAilment_2002.webp"],
                desc: "Immunity to stun",
            },
            {
                asterisk: 1,
                name: "Invincibility",
                icons: ["/images/StatusAilment/UI_StatusAilment_3003.webp"],
                desc: "Take no damage",
            },
            // {
            //
            //     name: "Immune",
            //     icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_40.webp"],
            //     desc: "",
            // },
            // {
            //
            //     name: "Resist",
            //     icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_40.webp"],
            //     desc: "",
            // },
        ],
        classBuffs: [
            {
                name: "Hunter's Spirit",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4067.webp"],
                desc: "Increases the rate at which the Buff Charge gauge accumulates",
            },
            {
                name: "Ignition",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4066.webp"],
                desc: "While this skill is active, consume combo gauge to boost the damage of other skills",
            },
            {
                name: "EP Regen",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4008.webp"],
                desc: "Regenerates EP over time",
            },
            {
                name: "Follow Bullet",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4021.webp"],
                desc: "Summon two hovering bullets to attack alongside you",
            },
            {
                name: "Shield Save",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4019.webp"],
                desc: "Shield gauge is not consumed by skills",
            },
            {
                name: "Taunt Mode",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4054.webp"],
                desc: "Applies Taunt to some attacks", // 一部の攻撃に状態異常『挑発』を\n付与します
            },
            {
                name: "Rock Body",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4056.webp"],
                desc: "Gain Super Armor and negate a portion of damage",
            },
            {
                name: "Cure Cartridge",
                icons: ["/UI/Icon/StatusAilment/UI_StatusAilment_4061.webp"],
                desc: "Recover HP when using a cartridge",
            },
        ],
        elemental: [
            {
                name: "(Element) DMG Dealt Up",
                icons: [
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4026.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4027.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4028.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4029.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4030.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4031.webp",
                ],
                desc: "Increases (Element) damage and elemental charge accumulation",
            },
            {
                name: "(Element) DMG Dealt Down",
                // icons: [
                //     "/UI/Icon/StatusAilment/UI_StatusAilment_4032.webp",
                //     "/UI/Icon/StatusAilment/UI_StatusAilment_4033.webp",
                //     "/UI/Icon/StatusAilment/UI_StatusAilment_4034.webp",
                //     "/UI/Icon/StatusAilment/UI_StatusAilment_4035.webp",
                //     "/UI/Icon/StatusAilment/UI_StatusAilment_4036.webp",
                //     "/UI/Icon/StatusAilment/UI_StatusAilment_4037.webp",
                // ],
                icons: [],
                desc: "Reduces (Element) damage and elemental charge accumulation",
            },
            {
                name: "(Element) Resist Up",
                icons: [
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4038.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4039.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4040.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4041.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4042.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4043.webp",
                ],
                desc: "Reduces (Element) damage and elemental charge accumulation received",
            },
            {
                name: "(Element) Resist Down",
                icons: [
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4044.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4045.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4046.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4047.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4048.webp",
                    "/UI/Icon/StatusAilment/UI_StatusAilment_4049.webp",
                ],
                desc: "Increases (Element) damage and elemental charge accumulation received",
            },
        ],
    };
</script>

<div class="box flex gap-4">
    <label>
        <input type="radio" value="buffs" bind:group={tableType} />
        Buffs
    </label>
    <label>
        <input type="radio" value="debuffs" bind:group={tableType} />
        Debuffs
    </label>
    <label>
        <input type="radio" value="classBuffs" bind:group={tableType} />
        Class Buffs
    </label>
    <label>
        <input type="radio" value="elemental" bind:group={tableType} />
        Elemental
    </label>
</div>

<table>
    <thead>
        <tr>
            <th>Icon(s)</th>
            <th>Status</th>
            <th>Effect</th>
        </tr>
    </thead>
    <tbody>
        {#each statusAilments[tableType] as status (status.name)}
            <tr>
                <td>
                    <div class="flex gap-1">
                        {#each status.icons as img}
                            <img src={img} alt="" width="26" height="30" />
                        {/each}
                    </div>
                </td>
                <td style="white-space: nowrap">
                    {status.name}{#if status.asterisk === 1}<strong>※</strong
                        >{/if}
                </td>
                <td>{status.desc}</td>
            </tr>
        {/each}
    </tbody>
    {#if tableType === "buffs"}
        <caption style="text-align: left">
            <strong>※ Existed in the Closed Beta Test (unused).</strong>
        </caption>
    {/if}
</table>

<style lang="scss">
    td {
        padding-block: 0.5rem;
        line-height: 1.7;
    }

    tr:nth-of-type(even) > * {
        background: rgba(255, 255, 255, 0.02);
    }

    tr:last-of-type > * {
        &:first-of-type {
            border-bottom-left-radius: 1rem;
        }

        &:last-of-type {
            border-bottom-right-radius: 1rem;
        }
    }
</style>
