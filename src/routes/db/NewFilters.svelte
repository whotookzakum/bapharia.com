<script>
    import FilterCategories from "./FilterCategories.svelte";
    import RangeSlider from "svelte-range-slider-pips";
    import { userLocale } from "$lib/stores";
    import { classes, elements, level, ar } from "./stores";
</script>

<div class="grid" style:gap="1rem">
    <div class="box">
        <h3 class="mini-header">Categories</h3>
        <div class="grid g-50">
            <FilterCategories />
        </div>
    </div>

    <div class="box">
        <h3 class="mini-header">Level</h3>
        <div
            class:adjusted={$level.values[0] > $level.min ||
                $level.values[1] < $level.max}
        >
            <RangeSlider
                bind:values={$level.values}
                min={$level.min}
                max={$level.max}
                step={1}
                range
                pushy
                float
                pips
                pipstep={$level.max / 10}
                first="label"
                last="label"
            />
        </div>

        <h3 class="mini-header">Adventurer Rank</h3>
        <div
            class:adjusted={$ar.values[0] > $ar.min || $ar.values[1] < $ar.max}
        >
            <RangeSlider
                bind:values={$ar.values}
                min={$ar.min}
                max={$ar.max}
                step={1}
                range
                pushy
                float
                pips
                pipstep={$ar.max / 10}
                first="label"
                last="label"
            />
        </div>

        <h3 class="mini-header">Class</h3>
        <div class="flex g-25" style="flex-wrap: wrap">
            {#each $classes as job}
                <input
                    id="class-{job.id}"
                    type="checkbox"
                    class="visually-hidden"
                    bind:checked={job.checked}
                />
                <label for="class-{job.id}">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_{job.id < 10
                            ? '0' + job.id
                            : job.id}.png"
                        alt={job.name[$userLocale]}
                        width="32"
                        height="32"
                    />
                </label>
            {/each}
        </div>

        <h3 class="mini-header" style="margin-top: 1.25rem">Element</h3>
        <div class="flex g-25" style="flex-wrap: wrap">
            {#each $elements as element}
                <input
                    id="element-{element.id}"
                    type="checkbox"
                    class="visually-hidden"
                    bind:checked={element.checked}
                />
                <label for="element-{element.id}">
                    <img
                        src="/UI/Icon/Attribute/UI_IconAttribute_{element.id > 0
                            ? element.id
                            : 'Empty'}.png"
                        alt={element.name[$userLocale]}
                        width="32"
                        height="32"
                    />
                </label>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    :global(.rangeSlider) {
        margin-block: 1.25rem 4rem !important;

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
    }

    :global(:root) {
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

        --range-pip-active: var(--accent);
        // --range-pip-active-text: var(--accent);
        --range-pip-in-range: var(--accent);
        // --range-pip-in-range-text: var(--accent);
    }

    label {
        display: flex;
        justify-content: center;
        padding: 0.25rem;
        border-radius: 5px;
    }

    input:checked + label {
        background: var(--surface3);
        outline: 2px solid var(--accent);
    }
</style>
