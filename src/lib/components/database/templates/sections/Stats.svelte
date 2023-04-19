<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";

    export let levelParams;
    export let maxLevel;
    export let battleScoreMultiplier = 1;
    $: sliderValue = maxLevel;
    $: currentLevelStats = levelParams.find((set) => set.level === sliderValue);
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

    $: {
        if (sliderValue > maxLevel) sliderValue = maxLevel;
        else if (sliderValue < 1) sliderValue = 1;
    }
</script>

<div class="flex g-25" style="align-items: baseline; justify-content: space-between; padding-right: 1rem;">
    <h4>Stats</h4>
    <!-- <div>
        Level
        <input
            class="input-level"
            class:not-max={sliderValue !== maxLevel}
            type="number"
            bind:value={sliderValue}
            max={maxLevel}
            min="1"
        />
    </div> -->
</div>
<dl class:not-max={sliderValue !== maxLevel}>
    <div class="row">
        <dt>Level</dt>

        <dd class="flex g-50" style="padding: 0; line-height: 1">
            <input
                type="range"
                bind:value={sliderValue}
                max={maxLevel}
                min="1"
                aria-label="Level selector"
                style="max-width: 100px"
            />
            <input
                class="input-level"
                class:not-max={sliderValue !== maxLevel}
                type="number"
                bind:value={sliderValue}
                max={maxLevel}
                min="1"
            />
        </dd>
    </div>

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
        <dd>{sliderValue * battleScoreMultiplier}</dd>
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
    .not-max.input-level {
        color: #fe5162;
    }

    .input-level {
        border-radius: 5px;
        font: inherit;
        font-weight: 600;
        background: var(--surface2);
        border: 1px solid var(--surface3);
        padding: 0.25rem 0.25rem;
        width: 4.2ch;
        text-align: right;
    }
</style>
