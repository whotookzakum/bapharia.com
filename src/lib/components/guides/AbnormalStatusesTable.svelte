<script>
    import { assetUrl } from "$lib/utils";
    import ClassIcon from "../ClassIcon.svelte";

    export let type = undefined;

    let tableType = type ?? 1;
    // Names found in /BLUEPROTOCOL/Content/Text/StatusAlimentNotify.uasset
    // Tutorial Descriptions found in /BLUEPROTOCOL/Content/Text/TutorialHelp.uasset (search Attribute and BuffDebuff, and 専用のバフ)

    const statusAilments = {
        2001: [
            -2,
            "Stun",
            "Become stunned for a few sections (actions are disabled)",
            true,
        ],
        2002: [
            1,
            "Stun Immunity",
            "Immunity to stun (existed in CBT but was unused)",
        ],
        2003: [
            -2,
            "Sleep",
            "Sleep for a short period (actions are disabled), waking up upon taking damage; affected players can be freed by allies",
            true,
        ],
        2005: [-2, "Poison", "HP is continuously deducted over time", true],
        2006: [
            -2,
            "Targeted",
            "Targets the player that applied the debuff and increases damage taken by 10%",
            true,
        ], // Provoked, Taunted, Targeted
        2008: [
            -2,
            "Fear",
            "Become immobilized and attempt to separate from the target; affected players can be freed by allies",
        ],
        2010: [-2, "Blind", "Attacks have a chance of missing", true],

        2011: [-2, "Skill Locked", "Tactical skills are disabled"],
        2012: [-2, "Fatigue", "Stamina is reduced to 0"],
        2013: [-2, "Item Locked", "Consumable items are disabled"],
        2014: [
            -2,
            "Nappo",
            "Transform into a Nappo (unable to do anything but move)",
        ],
        2016: [-2, "Bind", "Immobilized (actions are not disabled)", true],
        2017: [
            -2,
            "Paralyzed",
            "Actions are interrupted at regular intervals",
            true,
        ],
        2018: [-2, "HP Leak", "When attacked, the attacker recovers HP", true],

        3002: [-1, "Weak", "Reduces Max HP and movement speed"],
        3003: [
            1,
            "Invincibility",
            "Take no damage (existed in CBT but was unused)",
        ],
        3004: [
            1,
            "Imajinn Triggered",
            "Provides various buffs (differs per Battle Imagine)",
        ], // "Possessed"/"Possession", 憑依状態

        4001: [1, "ATK Up", "Increases damage dealt (max +?%)"],
        4002: [-1, "ATK Down", "Reduces damage dealt (max -80%)"],
        4003: [1, "DEF Up", "Reduces damage received (max +?%)"],
        4004: [-1, "DEF Down", "Increases damage received (max -80%)"],
        4005: [1, "Drain", "Restores a portion of damage dealt as HP"],
        4006: [1, "SP Armor", "Become immune to flinching when hit"],
        4007: [1, "HP Regen", "Regenerates HP over time"],
        4008: [1, "EP Regen", "Regenerates EP over time", 11],
        4009: [
            1,
            "Quick Charge",
            "Reduces charge time for skills that can be charged",
        ],
        4010: [
            -1,
            "Slow Charge",
            "Increases charge time for skills that can be charged",
        ],

        4011: [
            1,
            "Quick Interval",
            "Increase cooldown countdown speed of skills used after this buff is applied (max +?%)",
        ],
        4012: [-1, "Slow Interval", "Increases skill cooldowns (max -?%)"],
        4017: [1, "Speed Up", "Increases movement speed (max +100%)"],
        4018: [-1, "Speed Down", "Reduces movement speed (max -80%)"],
        4019: [1, "Shield Save", "Shield gauge is not consumed by skills", 12],
        4021: [
            1,
            "Follow Bullet",
            "Summon two hovering bullets to attack alongside you",
            11,
        ],

        4050: [
            1,
            "ST Quick Regen",
            "Increases the speed of stamina recovery (max +?%)",
        ],
        4051: [
            -1,
            "ST Slow Regen",
            "Decreases the speed of stamina recovery (max -?%)",
        ],
        4053: [
            1,
            "Critical Ready",
            "The next attack is guaranteed to be a critical hit",
        ],
        4054: [1, "Taunt Mode", "Applies Taunt to applicable attacks", 12], // Provoke?
        4056: [
            1,
            "Rock Body",
            "Gain Super Armor and negate a portion of damage",
            19,
        ],
        4057: [
            1,
            "Mark Trigger",
            "Increase the effectiveness of activated Marks",
            20,
        ],
        4058: [
            1,
            "ST Save",
            "Reduces the amount of stamina consumed (max -100%)",
        ],
        4059: [
            1,
            "Hunting Zone",
            "Escape Leap cooldown is disabled and Leap Shot explodes on impact, pulling in nearby enemies",
        ],

        4061: [1, "Cure Cartridge", "Recover HP when using a cartridge", 19],
        4062: [
            1,
            "Bad Status Immune",
            "Become immune to abnormal status effects",
        ],
        4063: [
            1,
            "Critical Rate Up",
            "Increases the chance of critical hits (max +100%)",
        ],
        4064: [1, "Full Heal", "Heals party members to full health"], // from suppliers
        4065: [
            1,
            "Points Up",
            "Increases the point multiplier in Score Attack",
        ],
        4066: [
            1,
            "Ignition",
            "While active, consume Combo Gauge to boost the damage of attack skills",
            7,
        ],
        4067: [
            1,
            "Hunter's Spirit",
            "Increases the rate at which the Buff Charge Gauge accumulates",
            6,
        ],
        4068: [
            1,
            "Prepare Mode",
            "Once fully activated, increases the damage of all attack Tactical Skills one time",
            20,
        ],
        4069: [
            1,
            "Sagittarius",
            "Basic attacks fire additional arrows and apply DEF Down and Weak Attack damage is increased",
            6,
        ],

        4072: [1, "Heat Up", "Accumulates Heat Gauge over time", 21],
        4073: [
            1,
            "Tension Boost",
            "Increases the rate at which the Heat Gauge accumulates",
            21,
        ],
        4074: [
            1,
            "Power Amplifier",
            "Increase damage of attacks from your amp",
            21,
        ],
        4075: [1, "HPHeal Gain", "Increase amount of healing received"],
        4076: [
            1,
            "Quick Aid",
            "Increase the speed at which you rescue downed players",
        ],
        4077: [
            1,
            "Scape Armor",
            "Provides an HP Shield that provides Super Armor and blocks a portion of damage while active",
        ],
        4078: [-2, "Laceration", "HP is continuously deducted over time", true],
        4079: [
            1,
            "Auto Heal",
            "Automatically heals you when your HP falls below a certain threshold or when the effect expires",
        ],

        4080: [-1, "Down Time", "Unable to use Round Shot's dash attack"],
        4081: [
            1,
            "Bullet Save",
            "Reduce the amount of Cartridges consumed by Tactical Skills",
            19,
        ],
        4082: [1, "Sentinel", "Reduces your aggro"],

        // 40: [1, "Immune"]
        // 40: [1, "Resist"]
        // [-1, "Damage Immune"]
        9999: [
            1,
            "Barrier Ready",
            "Provides a one-time barrier that blocks incoming damage.",
        ],
    };

    const statusAilmentsz = {
        elemental: [
            {
                name: "(Element) DMG Dealt Up",
                icons: [
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4026.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4027.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4028.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4029.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4030.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4031.webp",
                    ),
                ],
                desc: "Increases (Element) damage and elemental charge accumulation",
            },
            {
                name: "(Element) DMG Dealt Down",
                // icons: [
                //     assetUrl("/UI/Icon/StatusAilment/UI_StatusAilment_4032.webp"),
                //     assetUrl("/UI/Icon/StatusAilment/UI_StatusAilment_4033.webp"),
                //     assetUrl("/UI/Icon/StatusAilment/UI_StatusAilment_4034.webp"),
                //     assetUrl("/UI/Icon/StatusAilment/UI_StatusAilment_4035.webp"),
                //     assetUrl("/UI/Icon/StatusAilment/UI_StatusAilment_4036.webp"),
                //     assetUrl("/UI/Icon/StatusAilment/UI_StatusAilment_4037.webp"),
                // ],
                icons: [],
                desc: "Reduces (Element) damage and elemental charge accumulation",
            },
            {
                name: "(Element) Resist Up",
                icons: [
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4038.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4039.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4040.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4041.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4042.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4043.webp",
                    ),
                ],
                desc: "Reduces (Element) damage and elemental charge accumulation received",
            },
            {
                name: "(Element) Resist Down",
                icons: [
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4044.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4045.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4046.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4047.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4048.webp",
                    ),
                    assetUrl(
                        "/UI/Icon/StatusAilment/UI_StatusAilment_4049.webp",
                    ),
                ],
                desc: "Increases (Element) damage and elemental charge accumulation received",
            },
        ],
    };
</script>

<div class="rounded-2xl overflow-hidden">
    {#if type !== -2}
        <div class="box flex gap-4 p-4" style="background: var(--bg)">
            <label>
                <input type="radio" value={1} bind:group={tableType} />
                Buffs
            </label>
            <label>
                <input type="radio" value={-1} bind:group={tableType} />
                Debuffs
            </label>
        </div>
    {/if}

    <table class="stripes surface1">
        <thead>
            <tr>
                <th>Icon(s)</th>
                <th>Status</th>
                <th>Effect</th>
                {#if type === -2}
                    <th>Applied by Players</th>
                {/if}
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(statusAilments) as [id, [type, name, desc, misc]] (id)}
                {#if type === tableType}
                    <tr>
                        <td>
                            {#if [2002, 3003, 4010, 4012].includes(parseInt(id))}
                                <img
                                    src="/images/StatusAilment/UI_StatusAilment_{id}.png"
                                    alt=""
                                    width="26"
                                    height="30"
                                />
                            {:else if id == 9999}
                                <img
                                    src="https://image.swiki.jp/img0/?host=blueprotocol&page=%E3%83%90%E3%83%88%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0&src=%E3%83%AF%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%90%E3%83%AA%E3%82%A2.png"
                                    alt=""
                                    width="26"
                                    height="30"
                                />
                            {:else}
                                <img
                                    src={assetUrl(
                                        `/UI/Icon/StatusAilment/UI_StatusAilment_${id}.webp`,
                                    )}
                                    alt=""
                                    width="26"
                                    height="30"
                                />
                            {/if}
                        </td>
                        <td class="whitespace-nowrap">{name}</td>
                        <td>
                            {#if [-1, 1].includes(type) && misc}
                                <ClassIcon
                                    style="display: inline-block; vertical-align: middle"
                                    id={misc}
                                />
                            {/if}
                            {desc}
                        </td>
                        {#if type === -2}
                            <td>
                                {#if misc}
                                    ✅
                                {/if}
                            </td>
                        {/if}
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    table {
        font-size: var(--step-1);
    }

    td,
    th {
        padding-inline: 1rem;
    }
</style>
