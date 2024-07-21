<script>
    import InputNumber from "$lib/components/InputNumber.svelte";
    import { userLocale } from "$lib/stores";
    import { assetUrl } from "$lib/utils"
    import Icon from "@iconify/svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import TYPES_TEXT from "$api/utils/categories.json";

    // TODO: Figure out Enemy EXP curve
    export let data = {};

    const stats = data.stats;
    const maxLevel =
        data.weapon_max_level || data.imagine_max_level || data.MaxLv || 100;
    const minLevel = data.MinLv || 1; // Enemies can have a higher minLv depending on where they spawn
    const maxLimitBreak = 5;
    const minLimitBreak = 0;
    let selectedLevel = maxLevel;
    let selectedLimitBreak = maxLimitBreak;
    $: if (selectedLevel > maxLevel) selectedLevel = maxLevel;

    let battleScore, currentLevelStats, levelParams;

    // $: if (selectedLevel > 0 && selectedLevel <= maxLevel) {
    //     switch (data.resolveType) {
    //         case "Weapon":
    //             levelParams = data.stats;
    //             battleScore = selectedLevel * 50;
    //             break;
    //         case "Imagine":
    //             levelParams = data.params;
    //             if (data.imagine_type === 0) {
    //                 battleScore = selectedLevel * 6;
    //                 break;
    //             } else if (data.imagine_type === 1) {
    //                 battleScore = selectedLevel * 10;
    //                 break;
    //             }
    //         case "Enemy":
    //             levelParams = data.level_params;
    //             break;
    //     }
    //     currentLevelStats = levelParams?.find(
    //         (set) => set.level === selectedLevel
    //     );

    //     if (type === "Enemy") {
    //         let {
    //             hit_point,
    //             hit_point_factor,
    //             attack_power,
    //             attack_power_factor,
    //             defence_power,
    //             defence_power_factor,
    //         } = levelParams[0];
    //         currentLevelStats = {
    //             hp: hit_point + hit_point_factor * (selectedLevel - 1),
    //             offensive_power:
    //                 attack_power + attack_power_factor * (selectedLevel - 1),
    //             defensive_power:
    //                 defence_power + defence_power_factor * (selectedLevel - 1),
    //         };
    //     }
    // }

    $: isValidLevel =
        selectedLevel <= maxLevel &&
        selectedLevel >= minLevel &&
        typeof selectedLevel === "number";

    $: isValidLimitBreak =
        selectedLimitBreak <= maxLimitBreak &&
        selectedLimitBreak >= minLimitBreak &&
        typeof selectedLimitBreak === "number";

    $: isLevelSynced =
        isValidLevel &&
        data.resolveType !== "Enemy" &&
        selectedLevel < maxLevel;

    const texts = {
        skill: {
            ja_JP: "スキル効果値",
            en_US: "Skill Power",
        },
        battleScore: {
            ja_JP: "バトルスコア",
            en_US: "Battle Score",
        },
        offensive_power: {
            ja_JP: "攻撃力",
            en_US: "Attack",
        },
        attribute_value: {
            ja_JP: "属性攻撃力",
            en_US: "Elemental Attack",
        },
        defensive_power: {
            ja_JP: "防御力",
            en_US: "Defense",
        },
        critical_power: {
            ja_JP: "会心力",
            en_US: "Critical Damage",
        },
        critical_chance: {
            ja_JP: "会心率",
            en_US: "Critical Rate",
        },
        max_hp: {
            ja_JP: "最大HP",
            en_US: "Max HP",
        },
        hp: {
            ja_JP: "HP",
            en_US: "HP",
        },
        str: {
            ja_JP: "筋力",
            en_US: "Strength",
        },
        vit: {
            ja_JP: "耐久力",
            en_US: "Resilience",
        },
        dex: {
            ja_JP: "器用さ",
            en_US: "Dexterity",
        },
        mnd: {
            ja_JP: "精神力",
            en_US: "Spirit",
        },
        int: {
            ja_JP: "知力",
            en_US: "Intellect",
        },
        stamina: {
            ja_JP: "最大ST",
            en_US: "Max ST",
        },
        resist_slash: {
            ja_JP: "斬撃耐性",
            en_US: "Slash Resist",
        },
        resist_thrust: {
            ja_JP: "突き刺し耐性",
            en_US: "Thrust Resist",
        },
        resist_blow: {
            ja_JP: "打撃耐性",
            en_US: "Blow Resist",
        },
        resist_rock: {
            ja_JP: "土耐性",
            en_US: "Earth Resist",
        },
        resist_thunder: {
            ja_JP: "雷耐性",
            en_US: "Thunder Resist",
        },
        resist_fire: {
            ja_JP: "火耐性",
            en_US: "Fire Resist",
        },
        resist_ice: {
            ja_JP: "氷耐性",
            en_US: "Ice Resist",
        },
        resist_light: {
            ja_JP: "光耐性",
            en_US: "Light Resist",
        },
        resist_darkness: {
            ja_JP: "闇耐性",
            en_US: "Dark Resist",
        },
        resist_stun: {
            ja_JP: "スタン耐性",
            en_US: "Stun Resist",
        },
        resist_poison: {
            ja_JP: "毒耐性",
            en_US: "Poison Resist",
        },
        resist_sleep: {
            ja_JP: "スリープ耐性",
            en_US: "Sleep Resist",
        },
        // unconfirmed
        resist_berserk: {
            ja_JP: "挑発耐性 (?)",
            en_US: "Provoke Resist (?)",
        },
        // unconfirmed
        resist_dark: {
            ja_JP: "ブラインド耐性 (?)",
            en_US: "Blind Resist (?)",
        },
        resist_bind: {
            ja_JP: "バインド耐性",
            en_US: "Bind Resist",
        },
        // unconfirmed
        resist_palsy: {
            ja_JP: "麻痺耐性 (?)",
            en_US: "Paralysis Resist (?)",
        },
        // HP leak, or drain..?
        resist_drain: {
            ja_JP: "ドレイン耐性",
            en_US: "Drain Resist",
        },
    };

    const percentValues = ["critical_power", "critical_chance"];

    function getStatValues(level, lb_level) {
        const statObj = stats[level - 1] ?? stats[0];

        return [
            "hp",
            "offensive_power",
            "attribute_value",
            "skill",
            "defensive_power",
            "critical_power",
            "critical_chance",
            "max_hp",
            "str",
            "vit",
            "dex",
            "mnd",
            "int",
            "stamina",
        ].reduce((acc, key) => {
            if (statObj[key] > -1) {
                acc.push({
                    key,
                    name: texts[key][$userLocale],
                    level_value: statObj[key],
                    limitbreak_value: getLimitBreakStatBoost(lb_level, key),
                    ability_value: getAbilityStatBoost(),
                });
            }
            return acc;
        }, []);
    }

    function getLimitBreakStatBoost(lb_level, key) {
        const lbObj = data.limit_break[lb_level - 1] ?? 0;
        return lbObj[key] ?? 0;
    }

    function getAbilityStatBoost(ability, key) {
        return 0;
    }
</script>

<h2>Stats</h2>

<div class="flex flex-wrap gap-4">
    <div class="flex-1">
        <span class="mini-header" class:color-level-sync={isLevelSynced}
            >Level {isLevelSynced ? "Sync ▼" : ""}</span
        >
        <br />
        <span
            id="level-value-description"
            style="font-size: var(--step--1)"
            class="whitespace-nowrap"
            class:invalid-text={!isValidLevel}
        >
            Enter a number between <b>{minLevel}</b> and <b>{maxLevel}</b>
        </span>
        <div class="mt-1" class:color-level-sync={isLevelSynced}>
            <InputNumber
                description="Level"
                prefix="Lv."
                bind:value={selectedLevel}
                initialValue={maxLevel}
                max={maxLevel}
                min={minLevel}
                describedby="level-value-description"
                invalid={!isValidLevel}
                style="background: var(--surface1)"
                editButton
            />
        </div>
    </div>

    <div class="flex-1">
        <span class="mini-header">Limit Break</span>
        <br />
        <span
            id="limit-break-value-description"
            style="font-size: var(--step--1)"
            class="whitespace-nowrap"
            class:invalid-text={!isValidLimitBreak}
        >
            Enter a number between <b>{minLimitBreak}</b> and
            <b>{maxLimitBreak}</b>
        </span>
        <div class="mt-1">
            <InputNumber
                description="Limit break level"
                prefix="+"
                bind:value={selectedLimitBreak}
                initialValue={maxLimitBreak}
                max={maxLimitBreak}
                min={minLimitBreak}
                describedby="limit-break-value-description"
                invalid={!isValidLimitBreak}
                style="background: var(--surface1)"
                inputStyle="margin-left: -0.25rem"
                editButton
            />
        </div>
    </div>
    <div class="flex-1">
        <span class="mini-header">Special Effect</span>
        <br />
        <i style="font-size: var(--step--1)" class="whitespace-nowrap">
            Availability varies by source
        </i>
        <div class="mt-1">
            <select class="surface1 rounded-lg min-h-[44px] w-full"> </select>
        </div>
    </div>
</div>

<table class="lines cut-padding mt-4">
    <thead>
        <tr>
            <th>Stat</th>
            <th>Total</th>
            <th>From Level</th>
            <th>From Limit Break</th>
            <th>From Special Effect</th>
        </tr>
    </thead>
    <tbody>
        {#each getStatValues(selectedLevel, selectedLimitBreak) as stat}
            <tr>
                <th>
                    {#if stat.key === "attribute_value"}
                        <div class="inline-flex gap-1 items-center">
                            <span>{stat.name}</span>
                            <Tooltip tooltipStyle="width: max-content">
                                <img
                                    src={assetUrl(`/UI/Icon/Attribute/UI_IconAttribute_${data.element}.png`)}
                                    alt=""
                                    width="24"
                                    height="24"
                                    class="inline"
                                />
                                <svelte:fragment slot="tooltip"
                                    >{TYPES_TEXT[$userLocale].Element[
                                        data.element
                                    ]}</svelte:fragment
                                >
                            </Tooltip>
                            <Tooltip tooltipStyle="width: max-content">
                                <Icon
                                    icon="ri:question-line"
                                    class="text2 hover-text1"
                                    style="font-size: var(--step-1)"
                                />
                                <svelte:fragment slot="tooltip"
                                    >Elemental Attack is added to your attack
                                    during damage calculation when weapon and
                                    skill elements match.</svelte:fragment
                                >
                            </Tooltip>
                        </div>
                    {:else}
                        <span>{stat.name}</span>
                    {/if}
                </th>
                <td class="font-bold">
                    {stat.level_value +
                        stat.limitbreak_value +
                        stat.ability_value}{percentValues.includes(stat.key)
                        ? "%"
                        : ""}
                </td>
                <td class="text2" class:color-level-sync={isLevelSynced}>
                    {stat.level_value}{percentValues.includes(stat.key)
                        ? "%"
                        : ""}
                </td>
                <td
                    class="text2"
                    style={stat.limitbreak_value > 0
                        ? "color: var(--color-aqua)"
                        : ""}
                >
                    {stat.limitbreak_value}{percentValues.includes(stat.key)
                        ? "%"
                        : ""}
                </td>
                <td class={stat.ability_value > 0 ? "accent1" : "text2"}>
                    {stat.ability_value}{percentValues.includes(stat.key)
                        ? "%"
                        : ""}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<!-- <dl class="unstyled-list gap-1" class:not-max={isLevelSynced} role="list">
        {#each ["attribute_value", "skill"] as stat}
            {#if currentLevelStats[stat]}
                <div class="row">
                    <dt>{texts[stat][$userLocale]}</dt>
                    <dd>{currentLevelStats[stat]}</dd>
                </div>
            {/if}
        {/each}

        {#if battleScore}
            <div class="row">
                <dt>{texts.battleScore[$userLocale]}</dt>
                <dd>{battleScore}</dd>
            </div>
            <hr />
        {/if}

        {#each ["hp", "offensive_power", "defensive_power", "critical_power", "critical_chance", "max_hp", "str", "vit", "dex", "mnd", "int", "stamina"] as stat}
            {#if currentLevelStats[stat] && currentLevelStats[stat] >= 0}
                <div class="row">
                    <dt>{texts[stat][$userLocale]}</dt>
                    <dd>
                        {currentLevelStats[stat]}{stat === "critical_power" ||
                        stat === "critical_chance"
                            ? "%"
                            : ""}
                    </dd>
                </div>
            {/if}
        {/each}

        {#if data.appearance}
            <hr />
            {#each ["resist_slash", "resist_thrust", "resist_blow"] as stat}
                <div class="row">
                    <dt>{texts[stat][$userLocale]}</dt>
                    <dd>
                        {data.appearance[0][stat]}
                    </dd>
                </div>
            {/each}

            <hr />
            {#each ["resist_fire", "resist_ice", "resist_thunder", "resist_rock", "resist_light", "resist_darkness"] as stat}
                <div class="row">
                    <dt>{texts[stat][$userLocale]}</dt>
                    <dd>
                        {data.appearance[0][stat]}
                    </dd>
                </div>
            {/each}

            <hr />
            {#each ["resist_stun", "resist_poison", "resist_sleep", "resist_berserk", "resist_dark", "resist_bind", "resist_palsy", "resist_drain"] as stat}
                <div class="row">
                    <dt>{texts[stat][$userLocale]}</dt>
                    <dd>
                        {data.appearance[0][stat]}
                    </dd>
                </div>
            {/each}
        {/if}
    </dl>
    {#if data.appearance}
        <hr>
        <small>Negative resistance indicates that the enemy is weak against that category.</small>
    {/if} -->

<style lang="scss">
    .color-level-sync {
        color: #fe5162;
    }

    tbody tr:first-of-type {
        border: none !important;
    }
</style>
