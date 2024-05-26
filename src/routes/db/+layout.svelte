<script>
    import { userLocale } from "$lib/stores";
    import {
        categories,
        classes,
        elements,
        level,
        ar,
        uniqueCategories,
    } from "./stores";
    import { page } from "$app/stores";
    import { userSearch } from "./stores";
    import ActiveFiltersList from "./ActiveFiltersList.svelte";
    import RangeSlider from "svelte-range-slider-pips";
    import Icon from "@iconify/svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import CATEGORIES from "$scripts/utils/categories.json";
    import CATEGORY_NAMES from "$scripts/utils/categoryNames.json";
    import Grid from "./Grid.svelte";

    export let data;

    $: searchResults = data.entries.filter((entry) => {
        const queryMatch = $userSearch
            ? entry.text.name.toLowerCase().includes($userSearch.toLowerCase())
            : true;

        const filterMatch =
            Object.values(filters).flat().length > 0
                ? filters[entry.resolveType]?.includes(entry.category)
                : true;

        return queryMatch & filterMatch;
    });

    // TODO save and cache preferences: filters
    // TODO favorite items

    $: subroute = $page.url.pathname.split("/").pop() !== "db";

    let resultsDisplayMode = "list";

    $: placeholderText = {
        ja_JP: `${searchResults?.length.toLocaleString()}件を検索`,
        en_US: `Search ${searchResults?.length.toLocaleString()} entries`,
    };

    // Whenever $categories is updated, update the URL search param with the checked ids for that param
    $: uniqueCategories.forEach((param) => {
        const checkedIds = $categories
            .filter((cat) => cat.checked && cat.param === param)
            .flatMap((cat) => cat.ids)
            .join(" ");

        // updateSearchParams(param, checkedIds);
    });

    function checkAll(category) {
        $categories = $categories.map((cat) => ({
            ...cat,
            checked: cat.param === category || cat.checked,
        }));
    }

    function uncheckAll(category) {
        $categories = $categories.map((cat) => ({
            ...cat,
            checked: cat.param === category ? false : cat.checked,
        }));
    }

    const checked = {};

    let filters = {};

    function updateFilters(e, type, value) {
        if (!filters[type]) filters[type] = [];
        if (e.target.checked) {
            filters[type].push(parseInt(value));
        } else {
            filters[type] = filters[type].filter(
                (id) => id !== parseInt(value),
            );
        }
        filters = filters;
    }

    let innerHeight;
</script>

<!-- <h1>Database <a href="/db/weapons/106001201">test link</a></h1> -->

<svelte:window bind:innerHeight />

<div class="db-layout">
    <div class="left-col px-8 pb-8 h-main overflow-y-auto">
        <div class="search-section grid gap-2 sticky top-0 pt-8 pb-4 z-[2]">
            <div class="flex gap-4 items-center">
                <span class="mini-header"
                    >{searchResults.length.toLocaleString()} results</span
                >
                <div class="flex ml-auto">
                    <Tooltip inline>
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
                    <Tooltip inline>
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
            <div class="flex gap-2 items-center">
                <input
                    class="surface2 py-2 px-4 rounded-full flex-1"
                    type="search"
                    placeholder="Search database"
                    bind:value={$userSearch}
                />
            </div>
        </div>

        <aside class="grid gap-4 pt-4 h-full">
            <section class="grid gap-2">
                <span class="mini-header">Categories</span>
                {#each Object.entries(CATEGORY_NAMES[$userLocale]) as [type, text]}
                    <details class="arrow-discreet">
                        <summary>{text}</summary>
                        <div class="details-body mt-2 mb-4">
                            <ul>
                                {#each Object.entries(CATEGORIES[$userLocale][type]) as [value, text]}
                                    {#if Object.values(CATEGORIES[$userLocale][type]).length > 1 ? value !== "default" : true}
                                        <li>
                                            <label
                                                class="flex gap-2 items-center"
                                                style="line-height: 1.6;"
                                            >
                                                <input
                                                    type="checkbox"
                                                    {value}
                                                    on:click={(e) =>
                                                        updateFilters(
                                                            e,
                                                            type,
                                                            value,
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
                    class:adjusted-range={$level.values[0] > $level.min ||
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
            </section>
            <section>
                <span class="mini-header">Adventurer Rank</span>
                <div
                    class:adjusted-range={$ar.values[0] > $ar.min ||
                        $ar.values[1] < $ar.max}
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
            </section>
            <section class="grid gap-4">
                <span class="mini-header">Class</span>
                <div class="flex gap-1" style="flex-wrap: wrap">
                    {#each $classes as job}
                        <!-- <Popper let:setFocused placement="bottom">
                          <input
                              id="class-{job.id}"
                              type="checkbox"
                              class="visually-hidden"
                              bind:checked={job.checked}
                              on:focus={() => setFocused(true)}
                              on:blur={() => setFocused(false)}
                              on:click={() => setFocused(false)}
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
                          <p slot="tooltip" aria-hidden="true">
                              {job.name[$userLocale]}
                          </p>
                      </Popper> -->
                    {/each}
                </div>
            </section>
            <section class="grid gap-4">
                <span class="mini-header">Element</span>
                <div class="flex gap-1" style="flex-wrap: wrap">
                    {#each $elements as element}
                        <!-- <Popper let:setFocused placement="bottom">
                          <input
                              id="element-{element.id}"
                              type="checkbox"
                              class="visually-hidden"
                              bind:checked={element.checked}
                              on:focus={() => setFocused(true)}
                              on:blur={() => setFocused(false)}
                              on:click={() => setFocused(false)}
                          />
                          <label for="element-{element.id}">
                              <img
                                  src="/UI/Icon/Attribute/UI_IconAttribute_{element.id >
                                  0
                                      ? element.id
                                      : 'Empty'}.png"
                                  alt={element.name[$userLocale]}
                                  width="32"
                                  height="32"
                              />
                          </label>
                          <p slot="tooltip" aria-hidden="true">
                              {element.name[$userLocale]}
                          </p>
                      </Popper> -->
                    {/each}
                </div>
            </section>
        </aside>
    </div>

    <div
        class="results-section {resultsDisplayMode} h-main  overflow-y-auto grid gap-4 p-8"
    >
        {#each searchResults as item}
            <div
                class="result-item area-link-wrapper surface1 hover-surface2 p-4 rounded-2xl relative flex items-center gap-4  text2"
            >
                {#if resultsDisplayMode === "grid"}
                    <img
                        src={item.assets.iconL}
                        alt=""
                        width={item.resolveType === "board" ? "208" : "128"}
                        height="128"
                        loading="lazy"
                        class:board={item.resolveType === "board"}
                    />
                {:else}
                    <img
                        src={item.assets.icon}
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
                        >{CATEGORIES["en_US"][item.resolveType][
                            item.category
                        ]}</span
                    >
                    <a
                        href={item.href}
                        class="styled-link area-link"
                        style="font-size: var(--step-1); font-weight: 600;"
                        >{item.text.name}</a
                    >
                </div>
            </div>
        {/each}
        <!-- <Grid
            itemCount={searchResults.length}
            itemHeight={150}
            itemWidth={200}
            height={innerHeight - 62}
        >
            <div slot="item" class="surface1" marginLeft="80px" let:index let:style {style}>
                <a href={searchResults[index].href}>{searchResults[index].text.name}</a>
            </div>
        </Grid> -->
        <!-- <VList data={searchResults} let:item class="vlist {resultsDisplayMode} h-full p-8">
            <div class="mb-4">
                
            </div>
        </VList> -->
    </div>

    <article class="h-main overflow-y-auto p-8">
        <slot>Select a database entry to see its details!</slot>
    </article>
</div>

<style lang="scss">
    .db-layout {
        display: grid;
        grid-template-columns: calc(var(--sidepane-width) + 4rem) 1fr;
    }

    article {
        max-width: 600px;
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

    .details-body {
        font-size: inherit;

        button {
            font-size: var(--step--1);
            letter-spacing: inherit;
            flex: 1;
            font-weight: 600;
            color: var(--text3);

            &:hover {
                color: var(--text1);
                background: var(--surface2);
            }

            &:active {
                color: var(--text2);
                scale: 0.98;
            }
        }
    }
</style>
