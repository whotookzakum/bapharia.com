<script>
    import InputNumber from "$lib/components/InputNumber.svelte";
    import { userLocale } from "$lib/stores";

    export let levelParams;
    export let maxLevel = 1;
    export let battleScoreMultiplier = 1;
    $: sliderValue = maxLevel;
    let currentLevelStats, battleScore;
    $: {
        if (sliderValue > maxLevel) {
            sliderValue = maxLevel;
        }
        if (sliderValue > 0) {
            currentLevelStats = levelParams.find(
                (set) => set.level === sliderValue
            );
            battleScore = sliderValue * battleScoreMultiplier;
        }
    }
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
            en_US: "",
        },
        max_hp: {
            ja_JP: "最大HP",
            en_US: "Max HP",
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
    <div class="level-section grid g-50" class:not-max={sliderValue !== maxLevel}>
        <div>
            <h5 class="level-text">
                Level {sliderValue !== maxLevel ? "Sync ▼" : ""}
            </h5>
            {#if levelParams.length > 1}
                <p class="level-hint" id="level-sync-description">
                    Enter a level between <b>1</b> and <b>{maxLevel}</b>
                </p>
            {/if}
        </div>
        <div class="level-controls grid g-50">
            <InputNumber
                description="Level"
                prefix="LV."
                bind:value={sliderValue}
                max={maxLevel}
                min="1"
                disabled={levelParams.length <= 1}
                describedby="level-sync-description"
            />
            <button
                class="box reset-level"
                on:click={() => (sliderValue = maxLevel)}
                disabled={levelParams.length <= 1}
            >
                Reset
            </button>
        </div>
        <hr />
    </div>
    
    <dl class="unstyled-list g-25" class:not-max={sliderValue !== maxLevel}>
        {#each ["attribute_value", "skill"] as stat}
            {#if currentLevelStats[stat]}
                <div class="row">
                    <dt>{texts[stat][$userLocale]}</dt>
                    <dd>{currentLevelStats[stat]}</dd>
                </div>
            {/if}
        {/each}
        <div class="row">
            <dt>{texts.battleScore[$userLocale]}</dt>
            <dd>{battleScore}</dd>
        </div>
        <hr />
        {#each ["offensive_power", "defensive_power", "critical_power", "critical_chance", "max_hp", "str", "vit", "dex", "mnd", "int", "stamina"] as stat}
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
    .not-max h5 {
        color: #fe5162;
    }

    h5.level-text {
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

        &:disabled:hover,
        &:disabled {
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
        }
    }
</style>
