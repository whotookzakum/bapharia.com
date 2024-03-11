<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { userLocale } from "$lib/stores";
    import EntrySummary from "./EntrySummary.svelte";
    import NewFilters from "./NewFilters.svelte";
    import PageControls from "./PageControls.svelte";
    import { categories, classes, elements, level, ar } from "./stores";
    import dummydata from "./dummydata.json";
    import { page } from "$app/stores";
    import { Pane, Splitpanes } from "svelte-splitpanes";
    import { userSearch } from "./stores";
    import SearchBar from "./SearchBar.svelte";
    import SearchResults from "./SearchResults.svelte";
    import ActiveFiltersList from "./ActiveFiltersList.svelte";
    import ResultsDisplaySelector from "./ResultsDisplaySelector.svelte";

    export let data;

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
</script>

<MetaTags
    title={`Database — Bapharia`}
    description={`Database for BLUE PROTOCOL. Look up items, weapons, echoes, skills, enemies, maps, liquid memories, and more!`}
/>

<h1>Database <a href="/db/weapon/106001201">test link</a></h1>

<div id="db-layout" class="grid g-100">
    <div class="entry">
        <slot />
    </div>
    <div class="search">
        <SearchBar totalEntries={searchResults.length} />
    </div>
    <div class="filters">
        <NewFilters />
    </div>
    <div class="results grid g-100">
        <ActiveFiltersList />
        <ResultsDisplaySelector />
        <SearchResults data={searchResults} />
    </div>
</div>

<style lang="scss">
    .db-wrapper {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        display: grid;
        grid-template-columns: 30ch 1fr;
        align-items: start;
        align-content: start;
    }

    #db-layout {
        grid-template-columns: 30ch 1fr 0.65fr;
        grid-template-areas:
            "filters search entry"
            // "filters active-filters entry"
            "filters results entry";
        align-items: start;
        align-content: start;
        grid-template-rows: 51px auto auto;
    }

    .entry {
        grid-area: entry;
    }

    .search {
        grid-area: search;
    }

    .filters {
        grid-area: filters;
    }

    .active-filters {
        grid-area: active-filters;
    }

    .results {
        grid-area: results;
    }

    @media (max-width: 1150px) {
        h1 {
            margin-top: 62px;
        }
    }
</style>
