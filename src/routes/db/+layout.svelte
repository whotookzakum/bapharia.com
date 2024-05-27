<script>
    import { userLocale } from "$lib/stores";
    import { userSearch } from "./stores";
    import RangeSlider from "svelte-range-slider-pips";
    import Icon from "@iconify/svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import CATEGORIES from "$scripts/utils/categories.json";
    import filtertext_categories from "./filtertext-categories.json";

    export let data;
    // TODO save and cache preferences: filters
    // TODO favorite items

    let resultsDisplayMode = "list";
    let filters = {
        AR: [0, 30],
        Level: [0, 100],
        boardDeepSearch: true,
    };

    // Remove default keys if there are more than just the default value.
    Object.entries(CATEGORIES).forEach(([locale, categories]) => {
        Object.entries(categories).forEach(([category, types]) => {
            Object.entries(types).forEach(([key, value]) => {
                const defaultKey = CATEGORIES[locale][category].default;
                if (Object.entries(types).length > 1 && defaultKey) {
                    delete CATEGORIES[locale][category].default;
                }
            });
        });
    });

    $: searchResults = data.entries.filter((entry) => {
        const queryMatch = $userSearch
            ? entry.name.toLowerCase().includes($userSearch.toLowerCase())
            : true;

        const typeMatch =
            filters[entry.category]?.length > 0
                ? filters[entry.category].some((type) => type == entry.type)
                : true;

        return queryMatch & typeMatch;
    });

    function checkAll(category) {
        filters[category] = Object.keys(CATEGORIES[$userLocale][category]);
    }

    function uncheckAll(category) {
        filters[category] = [];
    }

    function updateFilters(e, category, value) {
        if (!filters[category]) filters[category] = [];
        if (e.target.checked) {
            filters[category].push(value);
        } else {
            filters[category] = filters[category].filter(
                (type) => type !== value,
            );
        }
        filters = filters;
    }

    $: console.log(filters);

    function toggleCategoryVisibility(category) {
        filters[`show${category}`] = !filters[`show${category}`];
    }

    function hasAllChecked(category) {
        const totalTypes = Object.keys(
            CATEGORIES[$userLocale][category],
        ).length;
        const checkedTypes = filters[category]?.length;
        return totalTypes === checkedTypes;
    }

    function hasSomeChecked(category) {
        const checkedTypes = filters[category]?.length ?? 0;
        return checkedTypes > 0;
    }

    function toggleCategoryTypes(category) {
        hasSomeChecked(category) ? uncheckAll(category) : checkAll(category);
    }
</script>

<h1 class="visually-hidden">Database</h1>

<div class="db-layout">
    <div class="left-col px-8 h-main overflow-y-auto">
        <h2 id="searchLabel" class="visually-hidden">Search database</h2>
        <div class="search-section grid gap-2 sticky top-0 py-4 z-[2]">
            <input
                class="surface2 py-2 px-4 rounded-full flex-1"
                type="search"
                placeholder="Search database"
                aria-labelledby="searchLabel"
                aria-describedby="info"
                bind:value={$userSearch}
            />
        </div>

        <div class="grid gap-2">
            <h3 class="mini-header mt-3">Categories</h3>
            {#each Object.entries(filtertext_categories[$userLocale]) as [category, text]}
                <div>
                    <div class="flex gap-2 items-center">
                        <label
                            class="flex select-none"
                            style="font-size: var(--step-1)"
                        >
                            <input
                                type="checkbox"
                                class="visually-hidden"
                                on:click={() => toggleCategoryTypes(category)}
                            />

                            {#key filters}
                                {#if hasAllChecked(category)}
                                    <Icon
                                        icon="carbon:checkbox-checked-filled"
                                        class="accent1"
                                    />
                                {:else if hasSomeChecked(category)}
                                    <Icon
                                        icon="carbon:checkbox-indeterminate-filled"
                                        class="accent1"
                                    />
                                {:else}
                                    <Icon
                                        icon="carbon:checkbox"
                                        class="text2 hover-text1"
                                    />
                                {/if}
                            {/key}
                        </label>
                        <button
                            on:click={() => toggleCategoryVisibility(category)}
                            class="hover-text1 arrow-faded"
                            class:text2={!filters[`show${category}`]}
                            aria-pressed={Boolean(filters[`show${category}`])}
                        >
                            <span class="visually-hidden"
                                >Show {text} filters ({filters[category]
                                    ?.length ?? 0} selected)</span
                            >
                            <span aria-hidden="true">
                                {text}
                                {#if filters[category]?.length > 0}
                                    <small class="accent1 font-bold"
                                        >({filters[category].length})</small
                                    >
                                {/if}
                            </span>
                        </button>
                    </div>
                    {#if filters[`show${category}`]}
                        <div
                            class="grid gap-4 pt-2 pb-4 mb-2 pl-5"
                            style="border-bottom: 1px solid var(--surface2)"
                        >
                            <ul class="grid gap-1">
                                {#each Object.entries(CATEGORIES[$userLocale][category]) as [type, text]}
                                    <li>
                                        <label
                                            class="flex gap-2 items-center select-none"
                                            style="line-height: 1.6;"
                                        >
                                            <input
                                                type="checkbox"
                                                value={type}
                                                checked={filters[
                                                    category
                                                ]?.includes(type)}
                                                on:click={(e) =>
                                                    updateFilters(
                                                        e,
                                                        category,
                                                        type,
                                                    )}
                                            />
                                            <span>{text}</span>
                                        </label>
                                    </li>
                                {/each}
                            </ul>
                            {#if category === "AdventureBoard"}
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={filters.boardDeepSearch}
                                    /> Deep search
                                </label>
                            {/if}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>

        <div class="grid gap-6 pt-4">
            <section>
                <span class="mini-header">Level</span>
                <div
                    class:adjusted-range={filters.Level[0] > 0 ||
                        filters.Level[1] < 100}
                >
                    <RangeSlider
                        bind:values={filters.Level}
                        min={0}
                        max={100}
                        step={1}
                        range
                        pushy
                        float
                        pips
                        pipstep={100 / 10}
                        first="label"
                        last="label"
                    />
                </div>
            </section>
            <section>
                <span class="mini-header">Adventurer Rank</span>
                <div
                    class:adjusted-range={filters.AR[0] > 0 ||
                        filters.AR[1] < 30}
                >
                    <RangeSlider
                        bind:values={filters.AR}
                        min={0}
                        max={30}
                        step={1}
                        range
                        pushy
                        float
                        pips
                        pipstep={30 / 10}
                        first="label"
                        last="label"
                    />
                </div>
            </section>
            <section class="grid gap-1">
                <span class="mini-header">Class</span>
                <div
                    class="grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(40px, 1fr))"
                >
                    {#each Object.entries(CATEGORIES[$userLocale].Class).toSorted( (a, b) => {
                            if (a[1] < b[1]) return -1;
                            if (a[1] > b[1]) return 1;
                            return 0;
                        }, ) as [type, text]}
                        <Tooltip
                            placement="top"
                            tooltipStyle="width: max-content"
                        >
                            <label class="nav-button" aria-label={text}>
                                <input
                                    type="checkbox"
                                    class="visually-hidden"
                                    checked={filters.Class?.includes(type)}
                                    on:click={(e) =>
                                        updateFilters(e, "Class", type)}
                                />
                                <span
                                    class="masked"
                                    style:mask-image="url('/UI/Icon/Class/UI_IconClass_{type.padStart(
                                        2,
                                        "0",
                                    )}.png')"
                                    style:-webkit-mask-image="url('/UI/Icon/Class/UI_IconClass_{type.padStart(
                                        2,
                                        "0",
                                    )}.png')"
                                />
                            </label>
                        </Tooltip>
                    {/each}
                </div>
            </section>
            <section class="grid gap-1 pb-8">
                <span class="mini-header">Element</span>
                <div
                    class="grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(40px, 1fr))"
                >
                    {#each Object.entries(CATEGORIES[$userLocale].Element) as [type, text]}
                        <Tooltip
                            placement="top"
                            tooltipStyle="width: max-content"
                        >
                            <label class="nav-button" aria-label={text}>
                                <input
                                    type="checkbox"
                                    class="visually-hidden"
                                    checked={filters.Element?.includes(type)}
                                    on:click={(e) =>
                                        updateFilters(e, "Element", type)}
                                />
                                {#if type === "0"}
                                    <span
                                        class="masked"
                                        style:mask-image="url('/UI/Icon/Attribute/UI_IconAttribute_Empty.png')"
                                        style:-webkit-mask-image="url('/UI/Icon/Attribute/UI_IconAttribute_Empty.png')"
                                    />
                                {:else}
                                    <span
                                        class="masked"
                                        style:mask-image="url('/images/elements/UI_IconAttribute_{type}.png')"
                                        style:-webkit-mask-image="url('/images/elements/UI_IconAttribute_{type}.png')"
                                    />
                                {/if}
                            </label>
                        </Tooltip>
                    {/each}
                </div>
            </section>
        </div>
    </div>

    <!--
    text to indicate how this UI works. 
    it must be associated with the text field.
  -->

    <!-- 
    empty, unstyled live region just waiting for no results
    to be displayed.  
  -->

    <!-- 
    markup for rendering search results goes here. 
    it's whatever you need it to be.
  -->

    <div
        class="results-section {resultsDisplayMode} h-main overflow-y-auto grid gap-4 p-4 pt-0 content-start"
        style="display: none"
    >
        <div
            class="flex gap-4 items-center sticky top-0 z-[3] py-4"
            style="background: var(--bg); margin-bottom: -1rem; grid-column: 1/-1"
        >
            <h2 class="mini-header m-0" tabindex="-1">
                {searchResults.length.toLocaleString()} results
                {#if $userSearch}
                    for "{$userSearch}"
                {/if}
            </h2>
            <div id="info" class="visually-hidden">
                Results will update as you type.
            </div>
            <span class="mini-header ml-auto">Sort by</span>
            <div class="flex">
                <Tooltip inline tooltipStyle="width: max-content">
                    <label
                        class="nav-button p-2 grid"
                        style="width: 34px; height: 34px; margin-block: -0.5rem"
                        aria-label="List View"
                    >
                        <input
                            type="radio"
                            value="list"
                            class="visually-hidden"
                            bind:group={resultsDisplayMode}
                        />
                        <Icon
                            icon="fluent:text-bullet-list-16-filled"
                            class={resultsDisplayMode === "list"
                                ? "accent1"
                                : ""}
                        />
                    </label>
                </Tooltip>
                <Tooltip inline tooltipStyle="width: max-content">
                    <label
                        class="nav-button p-2 grid"
                        style="width: 34px; height: 34px; margin-block: -0.5rem"
                        aria-label="Grid View"
                    >
                        <input
                            type="radio"
                            value="grid"
                            class="visually-hidden"
                            bind:group={resultsDisplayMode}
                        />
                        <Icon
                            icon="fluent:grid-24-filled"
                            class={resultsDisplayMode === "grid"
                                ? "accent1"
                                : ""}
                        />
                    </label>
                </Tooltip>
            </div>
        </div>

        {#if searchResults.length < 1}
            <div
                aria-live="assertive"
                aria-atomic="true"
                class="visually-hidden"
            >
                No results for {$userSearch}.
            </div>
        {/if}

        {#each searchResults as item (item.href)}
            <div
                class="result-item area-link-wrapper surface1 hover-surface2 p-4 rounded-2xl relative flex items-center gap-4 text2"
            >
                {#if resultsDisplayMode === "grid"}
                    <img
                        src={item.iconL}
                        alt=""
                        width={item.category === "board" ? "208" : "128"}
                        height="128"
                        loading="lazy"
                        class:board={item.category === "board"}
                    />
                {:else}
                    <img
                        src={item.icon}
                        alt=""
                        width="64"
                        height="64"
                        loading="lazy"
                    />
                {/if}
                <div class="grid">
                    <span
                        class="text3"
                        style="font-size: var(--step--1); font-weight: 600"
                        >{CATEGORIES["en_US"][item.category][item.type]}
                        {item.element}</span
                    >
                    <a
                        href={item.href}
                        class="styled-link area-link"
                        style="font-size: var(--step-1); font-weight: 600;"
                        >{item.name}</a
                    >
                </div>
            </div>
        {/each}
    </div>
    <slot />
</div>

<style lang="scss">
    .db-layout {
        display: grid;
        grid-template-columns: calc(var(--sidepane-width) + 4rem) 1fr;
    }

    .left-col {
        grid-column: 1;
    }

    .search-section {
        background: var(--bg);
        margin: 0 -0.5rem;
        box-shadow: 0 0 10px 14px var(--bg);
        border-bottom: 1px solid var(--surface1);
    }

    .results-section:not(.list) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(calc(208px + 2rem), 1fr)
        );

        .result-item {
            display: grid;
            text-align: center;
        }

        .board {
            background-image: url("/UI/AdventureBoard/UI_AdventureBoardBoardBg_copper.png");
        }

        img {
            justify-self: center;
        }

        a {
            font-size: var(--step-0) !important;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .result-item {
        content-visibility: auto;
        width: 100%;
    }

    .masked {
        width: 32px;
        height: 32px;
        display: block;
        background-color: var(--text2);
        mask-size: contain;
        -webkit-mask-size: contain;
        transition: background-color 0.15s var(--timing1);
    }

    input:checked + .masked {
        background-color: var(--accent1) !important;
    }
</style>
