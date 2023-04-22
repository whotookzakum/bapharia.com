<script>
    import { userLocale } from "$lib/stores";

    export let levelParams;
    export let maxLevel = 1;
    let sliderValue = 1;
    let currentLevelStats;
    $: {
        if (sliderValue > maxLevel) {
            sliderValue = maxLevel;
        }
        if (sliderValue > 0) {
            currentLevelStats = levelParams[0]
            // UNCONFIRMED THEORY: 
            // multiply level by level factor, i.e.
            // HP + (Enemy Level * HP Factor)
        }
    }
    const texts = {
        hit_point: {
            ja_JP: "HP",
            en_US: "HP",
        },
        hit_point_factor: {
            ja_JP: "HP ファクター",
            en_US: "HP Factor",
        },
        attack_power: {
            ja_JP: "攻撃力",
            en_US: "Attack",
        },
        attack_power_factor: {
            ja_JP: "攻撃力ファクター",
            en_US: "Attack Factor",
        },
        defence_power: {
            ja_JP: "防御力",
            en_US: "Defense",
        },
        defence_power_factor: {
            ja_JP: "防御力ファクター",
            en_US: "Defense Factor",
        },
        exp_lv1: {
            ja_JP: "経験値 (Lv. 1)",
            en_US: "EXP (Lv. 1)",
        },
        exp_lv100: {
            ja_JP: "経験値 (Lv. 100)",
            en_US: "EXP (Lv. 100)",
        },
        exp_crv: {
            ja_JP: "経験値カーブ",
            en_US: "EXP Curve",
        },
    };
</script>

<h4>Stats</h4>

<div class="level-section grid g-50">
    <div>
        <h5 class="level-text">Level</h5>
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
    <hr />
</div>

<dl>
    {#each ["hit_point", "hit_point_factor", "attack_power", "attack_power_factor", "defence_power", "defence_power_factor", "exp_lv1", "exp_lv100", "exp_crv"] as stat}
        {#if currentLevelStats[stat]}
            <div class="row">
                <dt>{texts[stat][$userLocale]}</dt>
                <dd>{currentLevelStats[stat]}</dd>
            </div>
        {/if}
    {/each}
</dl>

<style lang="scss">
    dl,
    .level-section {
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

        &:has(:focus-visible) {
            outline: 2px solid var(--accent);
        }

        &:has(:disabled) {
            color: var(--text2);
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
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

        &:disabled:hover,
        &:disabled {
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
        }
    }
</style>
