<script>
    import { userLocale } from "$lib/stores";
    import { userSearch } from "./stores";
    import RangeSlider from "svelte-range-slider-pips";
    import Icon from "@iconify/svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import CATEGORIES from "$scripts/utils/categories.json";
    import filtertext_categories from "./filtertext-categories.json";

    export let data;

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

    // TODO save and cache preferences: filters
    // TODO favorite items

    let resultsDisplayMode = "list";

    function checkAll(category) {
        filters[category] = Object.keys(CATEGORIES[$userLocale][category]);
    }

    function uncheckAll(category) {
        filters[category] = [];
    }

    function quickToggle(e, category) {
        if (e.ctrlKey) {
            e.preventDefault();

            if (
                filters[category]?.length ===
                Object.keys(CATEGORIES[$userLocale][category]).length
            ) {
                uncheckAll(category);
            } else {
                checkAll(category);
            }
        }
    }

    let filters = {
        AR: [0, 30],
        Level: [0, 100],
    };

    function updateFilters(e, type, value) {
        if (!filters[type]) filters[type] = [];
        if (e.target.checked) {
            filters[type].push(value);
        } else {
            filters[type] = filters[type].filter((id) => id !== value);
        }
        filters = filters;
    }

    $: console.log(filters);

    let innerHeight;
</script>

<!-- <h1>Database <a href="/db/weapons/106001201">test link</a></h1> -->

<svelte:window bind:innerHeight />

<div class="db-layout">
    <div class="left-col px-8 h-main overflow-y-auto">
        <div class="search-section grid gap-2 sticky top-0 py-4 z-[2]">
            <input
                class="surface2 py-2 px-4 rounded-full flex-1"
                type="search"
                placeholder="Search database"
                aria-label="Search database"
                aria-describedby=""
                bind:value={$userSearch}
            />
        </div>

        

        <aside class="grid gap-6 pt-4 h-full">
            <section class="grid gap-2">
                <span class="mini-header">Categories</span>
                {#each Object.entries(filtertext_categories[$userLocale]) as [category, text]}
                <!-- <button aria-pressed="false">Hey</button> -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
                    <details
                        class="arrow"
                        on:click={(e) => quickToggle(e, category)}
                    >
                        <summary class="gap-1">
                            <input type="checkbox" class="mr-1">
                            {text}
                            {#if filters[category]?.length > 0}
                                <small>({filters[category].length})</small>
                            {/if}
                        </summary>
                        <div class="grid gap-2 mt-2 mb-4 pl-4">
                            <!-- <div
                                class="flex gap-2 text3"
                                style="font-size: var(--step--1);"
                            >
                                <button
                                    class="surface1 px-2 py-1 flex-1 rounded-full text2 hover-text1 active-text2 active-shrink-fast font-semibold"
                                    on:click={() => checkAll(category)}
                                    >Select All</button
                                >
                                <button
                                    class="surface1 px-2 py-1 flex-1 rounded-full text2 hover-text1 active-text2 active-shrink-fast font-semibold"
                                    on:click={() => uncheckAll(category)}
                                    >Reset</button
                                >
                            </div> -->
                            <ul>
                                {#each Object.entries(CATEGORIES[$userLocale][category]) as [type, text]}
                                    <!-- Don't show "default" if there are actual options to use -->
                                    {#if Object.values(CATEGORIES[$userLocale][category]).length > 1 ? type !== "default" : true}
                                        <li>
                                            <label
                                                class="flex gap-2 items-center"
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
                                    {/if}
                                {/each}
                            </ul>
                        </div>
                    </details>
                {/each}
            </section>
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
                    {#each Object.entries(CATEGORIES[$userLocale].Class) as [type, text]}
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
        </aside>
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
    >
        <div class="flex gap-4 items-center sticky top-0 z-[3] py-4" style="background: var(--bg); margin-bottom: -1rem; grid-column: 1/-1">
            <h2 class="mini-header m-0" tabindex="-1">
                {searchResults.length.toLocaleString()} results
                {#if $userSearch}
                    for "{$userSearch}"
                {/if}
            </h2>
            <div id="info" class="visually-hidden">Results will update as you type.</div>
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
            <div aria-live="assertive" aria-atomic="true" class="visually-hidden">
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
