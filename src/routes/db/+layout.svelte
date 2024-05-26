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
    import { ScrollArea } from "bits-ui";
    import VList from "./VList.svelte"
    import Scrollable from "./Scrollable.svelte";
    import { Grid } from "svelte-virtual";

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
</script>

<!-- <h1>Database <a href="/db/weapons/106001201">test link</a></h1> -->

<div
    class="panes"
    style="--sidepane-width: calc(220px + 4rem); --gutter-x: 0px; --gutter-y: 0px; --max-content-width: initial; column-gap: 0;"
>
    <aside class="side-pane grid">
        
        <Scrollable viewportStyle="padding-top: 0">
            <div class="grid gap-4">
                <section
                    class="grid gap-2 sticky top-0 pt-8 pb-4 z-[2]"
                    style="background: var(--bg); font-size: var(--step-0)"
                >
                    <div class="flex gap-4 items-center">
                        <span class="mini-header"
                            >{searchResults.length.toLocaleString()} results</span
                        >
                        <div
                            class="flex ml-auto"
                            style="margin-right: -0.5rem"
                        >
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
                                        class={resultsDisplayMode ===
                                        "list"
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
                                        class={resultsDisplayMode ===
                                        "grid"
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
                            style="margin: 0 -0.5rem;"
                            type="search"
                            placeholder="Search database"
                            bind:value={$userSearch}
                        />
                    </div>
                </section>
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
                        class:adjusted-range={$level.values[0] >
                            $level.min || $level.values[1] < $level.max}
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
            </div>
        </Scrollable>
        <!-- <ScrollArea.Root class="relative pane-max-height">
            <ScrollArea.Viewport class="h-full px-8 pb-8">
                <ScrollArea.Content>
                    
                </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                orientation="vertical"
                class="flex h-full w-4 touch-none select-none rounded-full border-l border-l-transparent p-px transition-all hover-w-3 hover-surface1"
            >
                <ScrollArea.Thumb
                    class="relative flex-1 rounded-full surface3 opacity-40 transition-opacity hover:opacity-100"
                />
            </ScrollArea.Scrollbar>
        </ScrollArea.Root> -->
    </aside>

    <article class="main-pane" style="grid-template-columns: {$page.params.entryType ? "1fr 1fr" : "1fr"}">

        <Grid itemCount={searchResults.length} itemHeight={150} itemWidth={200} height={500}>
            <div slot="item" let:index let:style {style}>
                {searchResults[index].text.name}
            </div>
        </Grid>
        {#key resultsDisplayMode}
        <!-- <VList data={searchResults} let:item class="vlist {resultsDisplayMode} h-full p-8">
            <div class="mb-4">
                <div
                    class="result-item area-link-wrapper surface1 hover-surface2 p-4 rounded-2xl relative flex items-center gap-4 text2"
                >
                    {#if resultsDisplayMode === "grid"}
                        <img
                            src={item.assets.iconL}
                            alt=""
                            width="128"
                            height="128"
                            loading="lazy"
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
            </div>
        </VList> -->
        {/key}
        <slot />
    </article>
</div>

<style lang="scss">
    .side-pane {
        row-gap: 1.5rem;
    }

    .main-pane {
        grid-template-rows: 1fr;
        gap: 0 !important;
        // grid-template-columns: 1fr 1fr;
        // grid-template-columns: 1fr;
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
