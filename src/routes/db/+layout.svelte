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

    export let data;

    $: searchResults = data.entries.filter((entry) => {
        const queryMatch = $userSearch
            ? entry.text.name.toLowerCase().includes($userSearch.toLowerCase())
            : true;

        return queryMatch;
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

    const myCategories = Object.entries(CATEGORIES[$userLocale]);

    const categoryNames = {
        AdventureBoard: {
            ja_JP: "アドベンチャーボード",
            en_US: "Adventure Boards",
        },
        Item: {
            ja_JP: "アイテム",
            en_US: "Items",
        },
        Weapon: {
            ja_JP: "武器",
            en_US: "Weapons",
        },
        Imagine: {
            ja_JP: "イマジン",
            en_US: "Imagine",
        },
        Enemy: {
            ja_JP: "エネミー",
            en_US: "Enemies",
        },
        Skill: {
            ja_JP: "スキル",
            en_US: "Skills",
        },
        Token: {
            ja_JP: "トークン",
            en_US: "Tickets",
        },
        Map: {
            ja_JP: "マップ",
            en_US: "Maps",
        },
        LiquidMemory: {
            ja_JP: "リキッドメモリ",
            en_US: "Liquid Memories",
        },
        Costume: {
            ja_JP: "コスチューム",
            en_US: "Costumes",
        },
        Emote: {
            ja_JP: "ジェスチャー",
            en_US: "Emotes",
        },
        Stamp: {
            ja_JP: "スタンプ",
            en_US: "Stamps",
        },
        AvatarPart: {
            ja_JP: "アバター部位",
            en_US: "Avatar Parts",
        },
        Quest: {
            ja_JP: "クエスト",
            en_US: "Quests",
        },
    };

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

    const checked = {}

    $: console.log(checked)
</script>

<!-- <h1>Database <a href="/db/weapons/106001201">test link</a></h1> -->

<div class="panes">
    <aside class="side-pane grid">
        <section class="grid gap-2">
            <span class="mini-header">Categories</span>
            {#each Object.entries(CATEGORIES[$userLocale]) as [key, catObj]}
                {#if key !== "SkillType"}
                    <details>
                        <summary>{CATEGORY_NAMES[$userLocale][key]}</summary>
                        <ul>
                            {#each Object.entries(catObj) as [value, text]}
                                {#if Object.values(catObj).length > 1 ? value !== "default" : true}
                                    <li>
                                        <label>
                                            <input type="checkbox" {value} bind:checked={checked[`${key}-${value}`]} />
                                            {text}
                                        </label>
                                    </li>
                                {/if}
                            {/each}
                        </ul>
                    </details>
                {/if}
            {/each}

            <!-- {#each uniqueCategories as uniqueCategory}
                <details open={uniqueCategory === "items"}>
                    <summary>
                        <span>
                            {#if $categories.filter((cat) => cat.param === uniqueCategory && cat.checked).length}
                                <small>
                                    ({$categories.filter(
                                        (cat) =>
                                            cat.param === uniqueCategory &&
                                            cat.checked,
                                    ).length})
                                </small>
                            {/if}
                        </span>
                    </summary>
                    <div class="category-filter-contents grid gap-4">
                        <div class="flex gap-2">
                            <button on:click={() => checkAll(uniqueCategory)}
                                >Select All</button
                            >
                            <button on:click={() => uncheckAll(uniqueCategory)}
                                >Reset</button
                            >
                        </div>
                        <ul class="unstyled-list gap-1">
                            {#each $categories as category}
                                {#if category.param === uniqueCategory}
                                    <li>
                                        <label>
                                            <input
                                                type="checkbox"
                                                bind:checked={category.checked}
                                            />
                                            {category.name[$userLocale]}
                                        </label>
                                    </li>
                                {/if}
                            {/each}
                        </ul>
                    </div>
                </details>
            {/each}
        </section> -->
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
    <article class="main-pane">
        <div class="grid gap-4">
            <div class="grid gap-2">
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
                    <!-- <span class="mini-header">Clear Filters</span> -->
                </div>
                <div class="flex gap-2 items-center">
                    <input
                        class="surface1 p-4 rounded-full flex-1"
                        style="max-height: 44px"
                        type="search"
                        placeholder="Search"
                        bind:value={$userSearch}
                    />
                </div>
            </div>
            <ActiveFiltersList />
            <div class="results-wrapper {resultsDisplayMode}">
                {#each searchResults as item}
                    <div
                        class="result-item area-link-wrapper surface1 hover-surface2 p-4 rounded-2xl relative flex items-center gap-4 text2"
                    >
                        <!-- <img src="/UI/AdventureBoard/UI_AdventureBoardBoardBg_copper.png" alt=""> -->
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
                {/each}
            </div>
        </div>
        <slot />
    </article>
</div>

<style lang="scss">
    .side-pane {
        row-gap: 1.5rem;
    }

    .main-pane {
        grid-template-columns: 1fr 1fr;
        // grid-template-columns: 1fr;
    }

    .results-wrapper {
        display: grid;
        gap: 1rem;

        &.grid {
            grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
        }
    }

    .results-wrapper.grid .result-item {
        display: grid;
        text-align: center;
        align-content: start;

        a {
            font-size: var(--step-0) !important;
        }

        img {
            margin: auto;
        }
    }

    .category-filter-contents {
        font-size: inherit;
        padding-block: 1rem;
        border-bottom: 1px solid var(--surface1);

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

        ul {
            gap: 0.5rem;
            padding-left: 0.5rem;
        }
    }
</style>
