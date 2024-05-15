<script>
    import { categories, classes, elements, level, ar } from "./stores";
    import { userLocale } from "$lib/stores";

    $: isLevelFilterActive =
        $level.values[0] > $level.min || $level.values[1] < $level.max;
    $: isArFilterActive = $ar.values[0] > $ar.min || $ar.values[1] < $ar.max;
    $: isCategoryFilterActive =
        [...$categories, ...$classes, ...$elements].filter((c) => c.checked)
            .length > 0;
    $: isAnyFilterActive =
        isLevelFilterActive || isArFilterActive || isCategoryFilterActive;

    function resetLevel() {
        $level.values[0] = $level.min;
        $level.values[1] = $level.max;
    }

    function resetAR() {
        $ar.values[0] = $ar.min;
        $ar.values[1] = $ar.max;
    }

    function resetAllFilters() {
        resetAR();
        resetLevel();
        $categories = $categories.map((job) => ({ ...job, checked: false }));
        $elements = $elements.map((job) => ({ ...job, checked: false }));
        $classes = $classes.map((job) => ({ ...job, checked: false }));
    }
</script>

<div
    class:flex={isAnyFilterActive}
    class="active-filters-wrapper flex g-50 show-on-mobile"
    style="flex-wrap: wrap; margin-block: -0.25rem;"
>
    <button
        class:flex={isAnyFilterActive}
        class="filter-bubble reset"
        on:click={resetAllFilters}
    >
        Remove all filters
    </button>

    {#each $categories as store}
        <label class:flex={store.checked} class="filter-bubble show-x">
            <input
                class="visually-hidden"
                type="checkbox"
                bind:checked={store.checked}
            />
            <span class="visually-hidden">Remove Filter: </span>
            {store.name[$userLocale]}
        </label>
    {/each}

    <button
        class:flex={isLevelFilterActive}
        class="filter-bubble show-x"
        on:click={resetLevel}
    >
        <span class="visually-hidden">Remove Filter: </span>
        Level {$level.values[0]}-{$level.values[1]}
    </button>

    <button
        class:flex={isArFilterActive}
        class="filter-bubble show-x"
        on:click={resetAR}
    >
        <span class="visually-hidden">Remove Filter: </span>
        Adventurer Rank {$ar.values[0]}-{$ar.values[1]}
    </button>

    {#each $classes as store}
        <label class:flex={store.checked} class="filter-bubble show-x">
            <input
                class="visually-hidden"
                type="checkbox"
                bind:checked={store.checked}
            />
            <span class="visually-hidden">Remove Filter: </span>
            {store.name[$userLocale]}
        </label>
    {/each}

    {#each $elements as store}
        <label class:flex={store.checked} class="filter-bubble show-x">
            <input
                class="visually-hidden"
                type="checkbox"
                bind:checked={store.checked}
            />
            <span class="visually-hidden">Remove Filter: </span>
            {store.name[$userLocale]}
        </label>
    {/each}
</div>

<style lang="scss">
    .active-filters-wrapper:not(.flex) {
        display: none;
    }

    .filter-bubble {
        gap: 0.35rem;
        align-items: baseline;
        border: 2px solid var(--surface1);
        border-radius: 2rem;
        background: var(--surface1);
        padding: 0.5rem 1rem 0.5rem 0.75rem;
        color: var(--text2);
        font-size: var(--step--1);
        user-select: none;

        &:not(.flex) {
            display: none;
        }

        &.show-x::before {
            content: "🞪";
            margin-block: -5px;
        }

        &:not(.reset):hover {
            color: var(--accent1);
        }
    }

    .reset {
        padding: 0.5rem 1rem;
        align-items: last baseline;
        font-weight: 600;
        border-color: crimson;
        color: crimson;

        &:hover,
        &:focus-visible {
            color: var(--accent1);
            border-color: var(--accent1);
        }

        &:focus-visible {
            outline: none !important;
        }
    }
</style>
