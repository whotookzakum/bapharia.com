<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";

    export let levelParams;
    export let maxLevel;
    export let battleScoreMultiplier = 1;
    $: sliderValue = maxLevel;
    let currentLevelStats, battleScore;
    $: {
        // also works: Math.max(Math.min(sliderValue, maxLevel), 1)
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

<h4>Stats</h4>

<div class="level-section grid g-50" class:not-max={sliderValue !== maxLevel}>
    <div>
        <h5 class="level-text">
            Level {sliderValue !== maxLevel ? "Sync ▼" : ""}
        </h5>
        <p class="level-hint" id="level-sync-description">
            Enter a level between <b>1</b> and <b>{maxLevel}</b>
        </p>
    </div>
    <div class="level-controls grid g-50">
        <label class="input-level-wrapper">
            <span class="visually-hidden">Level</span>
            <span aria-hidden="true">Lv.</span>
            <input
                class="input-level"
                type="number"
                bind:value={sliderValue}
                max={maxLevel}
                min="1"
                aria-describedby="level-sync-description"
            />
        </label>
        <button
            class="box reset-level"
            on:click={() => (sliderValue = maxLevel)}
        >
            Reset
        </button>
    </div>
    <hr>
</div>

<dl class:not-max={sliderValue !== maxLevel}>
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
        {#if currentLevelStats[stat] >= 0}
            <div class="row">
                <dt>{texts[stat][$userLocale]}</dt>
                <dd>{currentLevelStats[stat]}</dd>
            </div>
        {/if}
    {/each}
</dl>

<style lang="scss">
    dl, .level-section {
        max-inline-size: none;
        gap: 0.25rem;
        margin: 0;
        padding: 0 1rem;
        border-left: 6px solid var(--surface3);
    }

    dl {
        margin-bottom: 0.5rem;
    }

    .level-section {
        margin-top: 0.5rem;
    }

    .row {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
    }

    dt {
        font-weight: normal;
    }

    .not-max dd,
    .not-max .input-level-wrapper,
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

    label.input-level-wrapper {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: var(--bg);
        border-radius: 5px;
        padding-left: 0.8rem;
        font: inherit;
        font-weight: 600;
        text-transform: uppercase;
        min-height: 44px;
        min-width: 44px;
    }

    @supports selector(:has(*)) {
        .input-level-wrapper:has(:focus-visible) {
            outline: 2px solid var(--accent);
        }
    }

    @supports not selector(:has(*)) {
        .input-level-wrapper:focus-within {
            outline: 2px solid var(--accent);
        }
    }

    input.input-level {
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        width: 100%;
        height: 100%;

        &:focus,
        &:focus-visible {
            outline: none !important;
        }
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