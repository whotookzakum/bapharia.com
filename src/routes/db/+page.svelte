<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { userLocale } from "$lib/stores";
    import EntrySummary from "./EntrySummary.svelte";
    import NewFilters from "./NewFilters.svelte";
    import PageControls from "./PageControls.svelte";
    import Search from "./Search.svelte";
    import { categories, classes, elements, level, ar } from "./stores";
    import dummydata from "./dummydata.json"
    console.log(dummydata.length)
    export let data;

    $: ({ DBSearchQuery } = data);
    // TODO save and cache preferences: filters
    // TODO favorite items

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

<MetaTags
    title={`Database — Bapharia`}
    description={`Database for BLUE PROTOCOL. Look up items, weapons, echoes, skills, enemies, maps, liquid memories, and more!`}
/>

<h1>Database</h1>

<div class="db-wrapper">
    <div class="filters">
        <NewFilters />
        <!-- <Filters /> -->
    </div>
    <div class="search-and-results grid">
        <Search totalEntries={dummydata.length} />
        {#if [...$categories, ...$classes, ...$elements].filter((c) => c.checked).length > 0 || $level.values[0] > $level.min || $level.values[1] < $level.max || $ar.values[0] > $ar.min || $ar.values[1] < $ar.max}
            <div
                class="flex g-50"
                style="flex-wrap: wrap; margin-block: -0.25rem;"
            >
                <button class="filter-bubble reset" on:click={resetAllFilters}
                    >Remove all filters</button
                >
                {#each $categories as store}
                    {#if store.checked}
                        <label class="filter-bubble">
                            <input
                                class="visually-hidden"
                                type="checkbox"
                                bind:checked={store.checked}
                            />
                            {store.name[$userLocale]}
                        </label>
                    {/if}
                {/each}
                {#if $level.values[0] > $level.min || $level.values[1] < $level.max}
                    <button class="filter-bubble" on:click={resetLevel}
                        >Level {$level.values[0]}-{$level.values[1]}</button
                    >
                {/if}
                {#if $ar.values[0] > $ar.min || $ar.values[1] < $ar.max}
                    <button class="filter-bubble" on:click={resetAR}
                        >Adventurer Rank {$ar.values[0]}-{$ar.values[1]}</button
                    >
                {/if}
                {#each $classes as store}
                    {#if store.checked}
                        <label class="filter-bubble">
                            <input
                                class="visually-hidden"
                                type="checkbox"
                                bind:checked={store.checked}
                            />
                            {store.name[$userLocale]}
                        </label>
                    {/if}
                {/each}
                {#each $elements as store}
                    {#if store.checked}
                        <label class="filter-bubble">
                            <input
                                class="visually-hidden"
                                type="checkbox"
                                bind:checked={store.checked}
                            />
                            {store.name[$userLocale]}
                        </label>
                    {/if}
                {/each}
            </div>
        {/if}

        <ul id="search-results" role="list" class="grid">
            {#each dummydata as entry}
                <EntrySummary data={entry} />
            {/each}
        </ul>

        <!-- <div class="results box">
            
            <PageControls
                hasPreviousPage={$DBSearchQuery?.data?.entries.hasPreviousPage}
                hasNextPage={$DBSearchQuery?.data?.entries.hasNextPage}
                totalResults={$DBSearchQuery?.data?.entries.totalResults}
            />
            {#if $DBSearchQuery.data}
                <ul id="search-results" role="list" class="grid">
                    {#each $DBSearchQuery.data.entries.results as entry}
                        <li class="flex">
                            <EntrySummary data={entry} />
                        </li>
                    {/each}
                </ul>
            {/if}
            <PageControls
                hasPreviousPage={$DBSearchQuery?.data?.entries.hasPreviousPage}
                hasNextPage={$DBSearchQuery?.data?.entries.hasNextPage}
                totalResults={$DBSearchQuery?.data?.entries.totalResults}
            />
        </div> -->
    </div>
</div>

<style lang="scss">
    .filter-bubble {
        display: flex;
        gap: 0.35rem;
        align-items: baseline;
        border: 2px solid var(--surface1);
        border-radius: 2rem;
        background: var(--surface1);
        padding: 0.5rem 1rem 0.5rem 0.75rem;
        color: var(--text2);
        font-size: var(--step--1);
        user-select: none;

        &:not(.reset)::before {
            content: "🞪";
            margin-block: -5px;
        }

        &:not(.reset):hover {
            color: var(--accent);
        }
    }

    .reset {
        padding: 0.5rem 1rem;
        align-items: last baseline;
        border-color: crimson;
        color: crimson;
        font-weight: 600;

        &:hover,
        &:focus-visible {
            color: var(--accent);
            border-color: var(--accent);
        }

        &:focus-visible {
            outline: none !important;
        }
    }

    .db-wrapper {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        // margin: auto;
        // width: fit-content;
        // max-width: 1400px;
    }

    .filters {
        flex-basis: 30ch;
    }

    .search-and-results {
        flex: 1;
        align-content: start;
        gap: 1rem;
        flex-basis: 70ch;
    }

    ul#search-results {
        list-style-type: none;
        padding: 0;
        overflow: visible;
        max-inline-size: none;
        margin: 0;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-template-columns: repeat(auto-fill, minmax(calc(208px + 2rem), 1fr));

        li {
            max-inline-size: none;

            &:not(:last-child) {
                // border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
        }
    }

    @media (max-width: 1150px) {
        h1 {
            margin-top: 62px;
        }
    }
</style>
