<script>
    import InputNumber from "$lib/components/InputNumber.svelte";
    import { userLocale } from "$lib/stores";

    // TODO: Figure out Enemy EXP curve
    export let data = {};

    $: maxLevel = data.weapon_max_level || data.imagine_max_level || 100;

    $: selectedLevel = maxLevel;
    // $: if (selectedLevel > maxLevel) selectedLevel = maxLevel;

    let battleScore, currentLevelStats, levelParams;
    let type = data.entryTypes[0];

    $: if (selectedLevel > 0 && selectedLevel <= maxLevel) {
        switch (type) {
            case "Weapon":
                levelParams = data.stats;
                battleScore = selectedLevel * 50;
                break;
            case "Imagine":
                levelParams = data.params;
                if (data.imagine_type === 0) {
                    battleScore = selectedLevel * 6;
                    break;
                } else if (data.imagine_type === 1) {
                    battleScore = selectedLevel * 10;
                    break;
                }
            case "Enemy":
                levelParams = data.level_params;
                break;
        }
        currentLevelStats = levelParams?.find(
            (set) => set.level === selectedLevel
        );

        if (type === "Enemy") {
            let {
                hit_point,
                hit_point_factor,
                attack_power,
                attack_power_factor,
                defence_power,
                defence_power_factor,
            } = levelParams[0];
            currentLevelStats = {
                hp:
                    hit_point + hit_point_factor * (selectedLevel - 1),
                offensive_power:
                    attack_power + attack_power_factor * (selectedLevel - 1),
                defensive_power:
                    defence_power + defence_power_factor * (selectedLevel - 1),
            };
        }
    }

    $: isValidInput =
        selectedLevel <= maxLevel &&
        selectedLevel >= 1 &&
        typeof selectedLevel === "number";

    $: isLevelSynced =
        isValidInput &&
        type !== "Enemy" &&
        typeof selectedLevel === "number" &&
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
            en_US: "Elemental Power",
        },
        defensive_power: {
            ja_JP: "防御力",
            en_US: "Defense",
        },
        critical_power: {
            ja_JP: "会心力",
            en_US: "Critical Power",
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
    };
</script>

<h2>Stats</h2>

<div class="box">
    <div class="level-section grid g-50" class:not-max={isLevelSynced}>
        <div>
            <h3 class="level-text">
                Level {isLevelSynced ? "Sync ▼" : ""}
            </h3>
            <p
                class="level-hint"
                id="level-sync-description"
                class:invalid={!isValidInput}
            >
                Enter a level between <b>1</b> and <b>{maxLevel}</b>
            </p>
        </div>
        <div class="level-controls grid g-50">
            <InputNumber
                description="Level"
                prefix="LV."
                bind:value={selectedLevel}
                max={maxLevel}
                min="1"
                describedby="level-sync-description"
                invalid={!isValidInput}
            />
            <button
                class="box reset-level"
                on:click={() => (selectedLevel = maxLevel)}
            >
                Reset
            </button>
        </div>
        <hr />
    </div>

    <dl class="unstyled-list g-25" class:not-max={isLevelSynced}>
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
    </dl>
</div>

<style lang="scss">
    .box {
        max-width: 30ch;
    }

    .level-section {
        margin-top: 0.5rem;
    }

    .row {
        display: flex;
        column-gap: 0.5rem;
        justify-content: space-between;
        font-weight: 600;
        flex-wrap: wrap;
    }

    dd {
        margin: 0;
    }

    dt {
        font-weight: normal;
    }

    .not-max dd,
    :global(.not-max .input-level-wrapper),
    .not-max .level-text {
        color: #fe5162;
    }

    .level-text {
        font: inherit;
        margin: 0;
        line-height: 1.4;
    }

    .level-hint {
        font-weight: normal;
        margin: 0;
        color: var(--text2) !important;
        font-size: var(--step--1);
        line-height: 1.4;

        b {
            color: var(--text1);
            font-weight: 700;
        }

        &.invalid,
        &.invalid b {
            color: crimson !important;
        }
    }

    .level-controls {
        grid-template-columns: auto auto;
    }

    button.reset-level {
        border-radius: 5px;
        padding: 0.5rem;
        color: var(--accent);
        background: var(--surface2);
        border: 1px solid var(--surface3);
        box-shadow: none;

        &:hover,
        &:focus-visible {
            background: var(--surface3);
        }

        &:active {
            filter: brightness(0.9);
        }
    }
</style>
