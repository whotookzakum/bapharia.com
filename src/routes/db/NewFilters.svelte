<script>
    import FilterCategories from "./FilterCategories.svelte";
    import RangeSlider from "svelte-range-slider-pips";

    $: level = [0, 100];
    $: ar = [0, 30];
</script>

<div class="grid" style:gap="1rem">
    <div class="box">
        <h3>Categories</h3>
        <div class="grid g-50">
            <FilterCategories />
        </div>
    </div>

    <div class="box">
        <h3>Level</h3>
        <div class:adjusted={level[0] !== 0 || level[1] !== 100}>
            <RangeSlider
                bind:values={level}
                min={0}
                max={100}
                step={1}
                range
                pushy
                float
                pips
                pipstep={10}
                first="label"
                last="label"
            />
        </div>

        <h3 style="margin-top: 4rem">Adventurer Rank</h3>
        <div class:adjusted={ar[0] !== 0 || ar[1] !== 30}>
            <RangeSlider
                bind:values={ar}
                min={0}
                max={30}
                step={1}
                range
                pushy
                float
                pips
                pipstep={3}
                first="label"
                last="label"
            />
        </div>

        <h3 style="margin-top: 4rem">Class</h3>
    </div>
</div>

<style lang="scss">
    h3 {
        margin: 0 0 1rem 0;
        line-height: 1;
        font-size: var(--step--1);
        font-weight: 700;
        color: var(--text2);
        text-transform: uppercase;
    }

    .min-max-inputs {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-areas:
            "tl x tr"
            "bl c br";
        align-items: center;
        column-gap: 0.5rem;
    }

    .tilde {
        grid-area: c;
        justify-self: center;
        font-size: var(--step-2);
    }

    .invalid-input-warning {
        margin: 0.75rem 0 0 0;
        line-height: 1;
        font-size: var(--step--1);
        color: crimson;
    }

    :global(.rangeSlider) {
        margin-bottom: 2.2em !important;

        --range-slider: var(--surface3);

        // --range-handle-inactive: var(--text2);
        --range-handle: var(--accent);
        --range-handle-focus: var(--accent);
        --range-handle-border: var(--accent);

        // --range-range-inactive: var(--text2);
        // --range-range: var(--accent);

        --range-float-inactive: var(--accent);
        --range-float: var(--accent);
        --range-float-text: hsl(220, 0%, 89%);

        --range-pip: hsl(240, 10%, 25%, 0.7);
        --range-pip-text: var(--text2);
        --range-pip-active: var(--text2);
        --range-pip-active-text: var(--text2);
        --range-pip-hover: var(--accent);
        --range-pip-hover-text: var(--accent);
        --range-pip-in-range: var(--text2);
        --range-pip-in-range-text: var(--text2);
    }

    .adjusted {
        --range-handle-inactive: var(--accent);
        // --range-range-inactive: var(--accent);

        --range-pip-active: var(--accent);
        --range-pip-active-text: var(--accent);
        --range-pip-in-range: var(--accent);
        --range-pip-in-range-text: var(--accent);
    }
</style>
