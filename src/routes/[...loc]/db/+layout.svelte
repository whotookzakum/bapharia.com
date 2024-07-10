<script>
    import { userLocale } from "$lib/stores";
    import { userSearch } from "./stores";
    import RangeSlider from "svelte-range-slider-pips";
    import Icon from "@iconify/svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import TYPES_TEXT from "$api/utils/categories.json";
    import CATEGORIES_TEXT from "./filtertext-categories.json";
    import isEqual from "lodash/isEqual";
    import Skill from "$lib/components/Skill"

    export let data;
    // TODO save and cache preferences: filters
    // TODO favorite items

    let resultsDisplayMode = "list";

    // separate filters_category from filters_extras etc

    let filters = {
        categories: {},
        ar: {
            default: [0, 30],
            values: [0, 30],
            adjusted: false,
        },
        level: {
            default: [0, 100],
            values: [0, 100],
            adjusted: false,
        },
        extras: {
            boardDeepSearch: true,
        },
    };

    $: filters.level.adjusted =
        filters.level.values[0] > filters.level.default[0] ||
        filters.level.values[1] < filters.level.default[1];

    $: filters.ar.adjusted =
        filters.ar.values[0] > filters.ar.default[0] ||
        filters.ar.values[1] < filters.ar.default[1];

    // Check if a category or subcategory (type) checkbox has been selected.
    // Class and Element are included in the categories object, so omit those. 
    // We only want to know whether any of the checkbox filters have been selected, and consequently filter out entries that aren't of the checked subcategory.
    $: filters.hasCheckboxSelection = Object.entries(filters.categories).reduce(
        (acc, [key, value]) => {
            if (!["Class", "Element"].includes(key) && value.length > 0)
                acc = true;
            return acc;
        },
        false,
    );

    // Remove key "default" if there are more than just the default value.
    Object.entries(TYPES_TEXT).forEach(([locale, categories]) => {
        Object.entries(categories).forEach(([category, types]) => {
            Object.entries(types).forEach(([key, value]) => {
                const defaultKey = TYPES_TEXT[locale][category].default;
                if (Object.entries(types).length > 1 && defaultKey) {
                    delete TYPES_TEXT[locale][category].default;
                }
            });
        });
    });

    $: searchResults = data.entries.filter((entry) => {
        const queryMatch = $userSearch
            ? entry.name.toLowerCase().includes($userSearch.toLowerCase())
            : true;

        let typeMatch = true;
        if (filters.hasCheckboxSelection) {
            typeMatch =
                filters.categories[entry.category]?.length > 0
                    ? filters.categories[entry.category].some((type) =>
                          typeof entry.type !== "undefined"
                              ? type == entry.type
                              : type == "default",
                      )
                    : false;
        }

        const levelMatch = filters.level.adjusted
            ? entry.level &&
              entry.level >= filters.level.values[0] &&
              entry.level <= filters.level.values[1]
            : true;

        const arMatch = filters.ar.adjusted
            ? entry.rank &&
              entry.rank >= filters.ar.values[0] &&
              entry.rank <= filters.ar.values[1]
            : true;

        const classMatch =
            filters.categories.Class?.length > 0
                ? filters.categories.Class.some((job) => job == entry.class)
                : true;

        const elementMatch =
            filters.categories.Element?.length > 0
                ? filters.categories.Element.some((ele) => ele == entry.element)
                : true;

        return (
            queryMatch &&
            typeMatch &&
            levelMatch &&
            arMatch &&
            classMatch &&
            elementMatch
        );
    });

    function checkAll(category) {
        filters.categories[category] = Object.keys(
            TYPES_TEXT[$userLocale][category],
        );
    }

    function uncheckAll(category) {
        filters.categories[category] = [];
    }

    function updateFilters(e, category, value) {
        if (!filters.categories[category]) filters.categories[category] = [];
        if (e.target.checked) {
            filters.categories[category].push(value);
        } else {
            filters.categories[category] = filters.categories[category].filter(
                (type) => type !== value,
            );
        }
        filters = filters;
    }

    function toggleCategoryVisibility(category) {
        filters.extras[`show${category}`] = !filters.extras[`show${category}`];
    }

    function hasAllChecked(category) {
        const totalTypes = Object.keys(
            TYPES_TEXT[$userLocale][category],
        ).length;
        const checkedTypes = filters.categories[category]?.length;
        return totalTypes === checkedTypes;
    }

    function hasSomeChecked(category) {
        const checkedTypes = filters.categories[category]?.length ?? 0;
        return checkedTypes > 0;
    }

    function toggleEntireCategory(category) {
        hasAllChecked(category) ? uncheckAll(category) : checkAll(category);
    }
</script>

<h1 class="visually-hidden">Database</h1>

<div class="db-layout h-main">
    <div class="left-col px-8 overflow-y-auto">
        <h2 id="searchLabel" class="visually-hidden">Search database</h2>
        <div class="search-section grid gap-2 sticky top-0 py-4 z-[2]">
            <input
                class="surface2 py-2 px-4 rounded-full flex-1 w-full"
                type="search"
                placeholder="Search database"
                aria-labelledby="searchLabel"
                aria-describedby="info"
                bind:value={$userSearch}
            />
        </div>

        <div class="grid gap-2">
            <h3 class="mini-header mt-3">Categories</h3>
            {#each Object.entries(CATEGORIES_TEXT[$userLocale]) as [category, text]}
                <fieldset>
                    <div class="flex items-center">
                        <legend class="visually-hidden">{text}</legend>
                        <label
                            class="align-middle select-none text2 hover-text1"
                            style="font-size: var(--step-0)"
                        >
                            <input
                                class="visually-hidden"
                                aria-describedby="{category}-checked-count"
                                type="checkbox"
                                on:change={() => toggleEntireCategory(category)}
                                indeterminate={hasSomeChecked(category)}
                            />

                            {#key filters.categories}
                                {#if hasAllChecked(category)}
                                    <Icon
                                        icon="carbon:checkbox-checked-filled"
                                        class="accent1 align-middle"
                                    />
                                {:else if hasSomeChecked(category)}
                                    <Icon
                                        icon="carbon:checkbox-indeterminate"
                                        class="accent1 align-middle"
                                    />
                                {:else}
                                    <Icon
                                        icon="carbon:checkbox"
                                        class="align-middle"
                                    />
                                {/if}
                            {/key}

                            <span class="visually-hidden">All {text}</span>
                            <span aria-hidden="true" class="align-middle"
                                >{text}</span
                            >
                            {#if filters.categories[category]?.length > 0 && !hasAllChecked(category)}
                                <span
                                    aria-hidden="true"
                                    class="font-bold accent1 align-middle"
                                    style="font-size: var(--step--1)"
                                    >({filters.categories[category]
                                        .length})</span
                                >
                            {/if}
                        </label>
                        <span hidden id="{category}-checked-count">
                            {#if filters.categories[category]?.length > 0 && !hasAllChecked(category)}
                                {filters.categories[category].length} subcategory
                                filters applied
                            {/if}
                        </span>
                        <button
                            on:click={() => toggleCategoryVisibility(category)}
                            class="text3 hover-text1 ml-auto"
                            aria-controls="{category}-subcategories"
                            aria-expanded={Boolean(
                                filters.extras[`show${category}`],
                            )}
                        >
                            <Icon
                                icon={filters.extras[`show${category}`]
                                    ? "tabler:chevron-up"
                                    : "tabler:chevron-down"}
                                style="font-size: var(--step-2)"
                                class={filters.extras[`show${category}`]
                                    ? "accent1"
                                    : ""}
                            />
                            <span class="visually-hidden">Expand {text}</span>
                        </button>
                    </div>
                    {#if filters.extras[`show${category}`]}
                        <div
                            id="{category}-subcategories"
                            class="grid gap-4 pt-2 pb-4 mb-2 pl-5"
                            style="border-bottom: 1px solid var(--surface2)"
                        >
                            <ul class="grid gap-1">
                                {#each Object.entries(TYPES_TEXT[$userLocale][category]) as [type, text]}
                                    <li>
                                        <label
                                            class="flex gap-2 items-center select-none text2 hover-text1"
                                            style="line-height: 1.6;"
                                        >
                                            <input
                                                type="checkbox"
                                                value={type}
                                                checked={filters.categories[
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
                                        class="text2 hover-text1"
                                        checked={filters.extras.boardDeepSearch}
                                    /> Deep search
                                </label>
                            {/if}
                        </div>
                    {/if}
                </fieldset>
            {/each}
        </div>

        <div>
            <h3 class="mini-header">Level</h3>
            <div class:adjusted-range={filters.level.adjusted}>
                <RangeSlider
                    bind:values={filters.level.values}
                    min={filters.level.default[0]}
                    max={filters.level.default[1]}
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
        </div>
        <div>
            <h3 class="mini-header mt-16">Adventurer Rank</h3>
            <div class:adjusted-range={filters.ar.adjusted}>
                <RangeSlider
                    bind:values={filters.ar.values}
                    min={filters.ar.default[0]}
                    max={filters.ar.default[1]}
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
        </div>
        <div class="grid gap-1">
            <h3 class="mini-header">Class</h3>
            <div
                class="grid"
                style="grid-template-columns: repeat(auto-fill, minmax(40px, 1fr))"
            >
                {#each Object.entries(TYPES_TEXT[$userLocale].Class).toSorted( (a, b) => {
                        if (a[1] < b[1]) return -1;
                        if (a[1] > b[1]) return 1;
                        return 0;
                    }, ) as [type, text]}
                    <Tooltip placement="top" tooltipStyle="width: max-content">
                        <label class="nav-button">
                            <input
                                type="checkbox"
                                class="visually-hidden"
                                checked={filters.categories.Class?.includes(
                                    type,
                                )}
                                on:click={(e) =>
                                    updateFilters(e, "Class", type)}
                            />
                            <span class="visually-hidden">{text}</span>
                            <span
                                class="masked"
                                aria-hidden="true"
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
                        <svelte:fragment slot="tooltip">{text}</svelte:fragment>
                    </Tooltip>
                {/each}
            </div>
        </div>
        <div class="grid gap-1 pb-8">
            <h3 class="mini-header">Element</h3>
            <div
                class="grid"
                style="grid-template-columns: repeat(auto-fill, minmax(40px, 1fr))"
            >
                {#each Object.entries(TYPES_TEXT[$userLocale].Element) as [type, text]}
                    <Tooltip placement="top" tooltipStyle="width: max-content">
                        <label class="nav-button">
                            <input
                                type="checkbox"
                                class="visually-hidden"
                                checked={filters.categories.Element?.includes(
                                    type,
                                )}
                                on:click={(e) =>
                                    updateFilters(e, "Element", type)}
                            />
                            <span class="visually-hidden">{text}</span>
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
                        <svelte:fragment slot="tooltip">{text}</svelte:fragment>
                    </Tooltip>
                {/each}
            </div>
        </div>
    </div>

    <div
        class="results-section {resultsDisplayMode} overflow-y-auto grid gap-4 p-4 pt-0 content-start"
    >
        <div
            class="results-section-header flex gap-4 items-center sticky top-0 z-[3]"
        >
            <h2 class="mini-header m-0 flex-1" tabindex="-1">
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
                    >
                        <input
                            type="radio"
                            value="list"
                            class="visually-hidden"
                            bind:group={resultsDisplayMode}
                        />
                        <span class="visually-hidden">Vertical list view</span>
                        <Icon
                            icon="fluent:text-bullet-list-16-filled"
                            class={resultsDisplayMode === "list"
                                ? "accent1"
                                : ""}
                        />
                    </label>
                    <svelte:fragment slot="tooltip">List View</svelte:fragment>
                </Tooltip>
                <Tooltip inline tooltipStyle="width: max-content">
                    <label
                        class="nav-button p-2 grid"
                        style="width: 34px; height: 34px; margin-block: -0.5rem"
                    >
                        <input
                            type="radio"
                            value="grid"
                            class="visually-hidden"
                            bind:group={resultsDisplayMode}
                        />
                        <span class="visually-hidden">Grid view</span>
                        <Icon
                            icon="fluent:grid-24-filled"
                            class={resultsDisplayMode === "grid"
                                ? "accent1"
                                : ""}
                        />
                    </label>
                    <svelte:fragment slot="tooltip">Grid View</svelte:fragment>
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
                        src={item.iconL ??
                            "/UI/Icon/Item/UI_Icon_UnidentifiedItem.png"}
                        alt=""
                        width={item.category === "board" ? "208" : "128"}
                        height="128"
                        loading="lazy"
                        class:board={item.category === "board"}
                    />
                {:else if item.category === "Skill"}
                    <Skill.Icon skill={{
                        skill_type: item.type,
                        assets: {
                            icon: item.icon,
                            iconL: item.iconL,
                            bgIcon: item.bgIcon,
                            frameIcon: item.frameIcon,
                            elementIcon: item.elementIcon,
                        }
                    }} />
                {:else}
                    <img
                        src={item.icon ??
                            "/UI/Icon/Item/UI_Icon_UnidentifiedItem.png"}
                        alt=""
                        width="64"
                        height="64"
                        loading="lazy"
                    />
                {/if}
                <div class="grid">
                    <a
                        href={item.href}
                        class="styled-link area-link"
                        style="font-size: var(--step-1); font-weight: 600; order: 1;"
                        >{item.name}</a
                    >
                    <span
                        class="text3"
                        style="font-size: var(--step--1); font-weight: 600"
                    >
                        <!-- {TYPES_TEXT[$userLocale][item.category][
                            item.type ?? "default"
                        ]} -->
                        {#if item.level}
                            (Lv. {item.level})
                        {/if}
                    </span>
                </div>
            </div>
        {/each}
    </div>
    <article class="overflow-y-auto px-8 main-pane" style="grid-template-columns: 1fr;">
        <slot />
    </article>
</div>

<style lang="scss">
    .db-layout {
        display: grid;
        grid-template-columns: calc(var(--sidepane-width) + 4rem) 1fr 1fr;
    }

    @media (max-width: 1150px) {
        .db-layout {
            grid-template-columns: 1fr;
            height: unset;

            .left-col {
                order: 2;
            }

            .results-section {
                order: 3;
            }
        }

        article {
            order: 1;
        }
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

    .results-section {
        width: 100%;

        & > * {
            width: 100%;
        }
    }

    .results-section-header {
        grid-column: 1/-1;
        background: var(--bg);
        padding-top: 1rem;
        margin-bottom: 0rem;
        box-shadow: 0 0 10px 14px var(--bg);
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

    input:checked ~ .masked {
        background-color: var(--accent1) !important;
    }
</style>
