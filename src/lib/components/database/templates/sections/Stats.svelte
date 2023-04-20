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
<dl class:not-max={sliderValue !== maxLevel}>
    <div class="grid g-50">
        <div>
            <dt>
                <h5 class="level-text">Level {sliderValue !== maxLevel ? "Sync ▼" : ""}</h5>
            </dt>
            <dd class="level-hint">
                Enter a value between <b>1</b> and <b>{maxLevel}</b>
            </dd>
        </div>
        <div class="flex g-25" style="grid-template-columns: 70% 30%">
            <input
                class="input-level"
                class:not-max={sliderValue !== maxLevel}
                type="number"
                bind:value={sliderValue}
                max={maxLevel}
                min="1"
            />
            <button
                class="box reset-level"
                on:click={() => (sliderValue = maxLevel)}
            >
                Reset
            </button>
        </div>
    </div>
    <hr />

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
    dl {
        max-inline-size: none;
        gap: 0.25rem;
        margin: 0.25rem 0;
        padding: 0 1rem;
        border-left: 6px solid var(--surface3);
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
    .not-max.input-level,
    .not-max h5 {
        color: #fe5162;
    }

    .input-level {
        border-radius: 5px;
        font: inherit;
        font-weight: 600;
        font-size: 1.1rem;
        background: var(--bg);
        border: none;
        padding: 0.4rem 0.4rem;
        min-height: 44px;
        min-width: 44px;
        width: 7ch;
    }

    h5.level-text {
        font: inherit;
        margin: 0;
    }

    .level-hint {
        font-weight: normal;
        margin: 0;
        color: var(--text2) !important;
        font-size: var(--step--1);
        line-height: 1;

        b {
            color: var(--text1);
        }
    }

    button.reset-level {
        border-radius: 5px;
        font-size: var(--step--1);
        padding: 0.25rem 0.5rem;
        color: var(--accent);
        background: var(--surface2);
        border: 1px solid var(--surface3);
        box-shadow: none;

        &:hover,
        &:focus-visible {
            background: var(--surface3);
        }
    }
</style>
