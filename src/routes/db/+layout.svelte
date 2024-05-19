<script>
    import { userLocale } from "$lib/stores";
    import EntrySummary from "./EntrySummary.svelte";
    import PageControls from "./PageControls.svelte";
    import {
        categories,
        classes,
        elements,
        level,
        ar,
        uniqueCategories,
    } from "./stores";
    import dummydata from "./dummydata.json";
    import { page } from "$app/stores";
    import { Pane, Splitpanes } from "svelte-splitpanes";
    import { userSearch } from "./stores";
    import SearchBar from "./SearchBar.svelte";
    import SearchResults from "./SearchResults.svelte";
    import ActiveFiltersList from "./ActiveFiltersList.svelte";
    import ResultsDisplaySelector from "./ResultsDisplaySelector.svelte";
    import RangeSlider from "svelte-range-slider-pips";
    import Popper from "$lib/components/Popper.svelte";
    import Icon from "@iconify/svelte";
    import { updateSearchParams } from "$lib/utils";
    import Float from "./Float.svelte";
    import InputText from "$lib/components/InputText.svelte";
    import InputNumber from "$lib/components/InputNumber.svelte";

    export let data;

    console.log(data);

    $: searchResults = dummydata.filter((entry) => {
        const queryMatch = $userSearch
            ? entry.name?.en_US
                  ?.toLowerCase()
                  .includes($userSearch.toLowerCase()) ||
              entry.name?.ja_JP
                  ?.toLowerCase()
                  .includes($userSearch.toLowerCase())
            : true;

        return queryMatch;
    });

    $: ({ DBSearchQuery } = data);
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

        updateSearchParams(param, checkedIds);
    });

    const categoryNames = {
        boards: {
            ja_JP: "アドベンチャーボード",
            en_US: "Adventure Boards",
        },
        items: {
            ja_JP: "アイテム",
            en_US: "Items",
        },
        weapons: {
            ja_JP: "武器",
            en_US: "Weapons",
        },
        imagine: {
            ja_JP: "イマジン",
            en_US: "Imagine",
        },
        enemies: {
            ja_JP: "エネミー",
            en_US: "Enemies",
        },
        skills: {
            ja_JP: "スキル",
            en_US: "Skills",
        },
        tickets: {
            ja_JP: "トークン",
            en_US: "Tickets",
        },
        maps: {
            ja_JP: "マップ",
            en_US: "Maps",
        },
        liquidmemories: {
            ja_JP: "リキッドメモリ",
            en_US: "Liquid Memories",
        },
        costumes: {
            ja_JP: "コスチューム",
            en_US: "Costumes",
        },
        emotes: {
            ja_JP: "ジェスチャー",
            en_US: "Emotes",
        },
        stampsets: {
            ja_JP: "スタンプセット",
            en_US: "Stamp Sets",
        },
        avatarparts: {
            ja_JP: "アバター部位",
            en_US: "Avatar Parts",
        },
        quests: {
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
</script>

<div style="margin: 0 1rem">
    <p>
        hello
        
        <Float delay>
            <button aria-label="Filters" on:click={() => console.log("submitted")}>
                This is my button.
            </button>
            <svelte:fragment slot="tooltip">
                This setting requires you to select one of the settings below
                to work properly otherwise it won't work.
            </svelte:fragment>
        </Float>
        <Float delay>
            <label on:input={() => console.log("hi")}>
                <input type="checkbox" class="visually-hidden"> heyy
            </label>
            <svelte:fragment slot="tooltip">
                This setting requires you to select one of the settings below
                to work properly otherwise it won't work.
            </svelte:fragment>
        </Float>
        <input type="checkbox" id="h" class="visually-hidden">
        <label for="h">asdasd</label>
        <InputText value={3} description="heyasdsad" />
        <InputNumber value={7} />
    </p>
    <!-- <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        quidem est consequuntur adipisci eos ad deserunt facilis officiis
        corporis alias ducimus nesciunt harum hic, tempore ut officia sed libero
        aut!
    </p> -->
</div>

<!-- <h1>Database <a href="/db/weapons/106001201">test link</a></h1> -->

<!-- <div class="panes">
    <aside class="side-pane grid">
        <section class="grid g-100">
            <span class="mini-header">Categories</span>
            {#each uniqueCategories as uniqueCategory}
                <details open={uniqueCategory === "items"}>
                    <summary>
                        <span>
                            {categoryNames[uniqueCategory][$userLocale]}
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
                    <div class="category-filter-contents grid g-100">
                        <div class="flex g-50">
                            <button on:click={() => checkAll(uniqueCategory)}
                                >Select All</button
                            >
                            <button on:click={() => uncheckAll(uniqueCategory)}
                                >Reset</button
                            >
                        </div>
                        <ul class="unstyled-list g-25">
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
        <section class="grid g-100">
            <span class="mini-header">Class</span>
            <div class="flex g-25" style="flex-wrap: wrap">
                {#each $classes as job}
                    <Popper let:setFocused placement="bottom">
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
                    </Popper>
                {/each}
            </div>
        </section>
        <section class="grid g-100">
            <span class="mini-header">Element</span>
            <div class="flex g-25" style="flex-wrap: wrap">
                {#each $elements as element}
                    <Popper let:setFocused placement="bottom">
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
                    </Popper>
                {/each}
            </div>
        </section>
    </aside>
    <article class="main-pane" style="grid-column: 1/-1; width: 100%">
        <div class="grid g-100">
            <input
                class="box"
                id="search-box"
                type="search"
                placeholder={placeholderText[$userLocale]}
                bind:value={$userSearch}
                style="width: 100%"
            />
            <ActiveFiltersList />
            <ResultsDisplaySelector />
            <SearchResults data={searchResults} />
        </div>
        <div class="toc">
            <slot />
        </div>
    </article>
</div> -->

<style lang="scss">
    .side-pane {
        row-gap: 1.5rem;
    }

    .main-pane {
        grid-template-columns: 1fr 1fr;
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
