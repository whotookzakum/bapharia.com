<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import EntrySummary from "./EntrySummary.svelte";
    import Filters from "./Filters.svelte";
    import DatabaseLayout from "./DatabaseLayout.svelte";
    import PageControls from "./PageControls.svelte";
    import Search from "./Search.svelte";

    export let data;

    $: ({ DBSearchQuery } = data);

    // TODO save and cache preferences: filters
    // TODO favorite items
</script>

<MetaTags
    title={`Database — Bapharia`}
    description={`Database for BLUE PROTOCOL. Look up items, weapons, echoes, skills, enemies, maps, liquid memories, and more!`}
/>

<h1>Database</h1>

<DatabaseLayout>
    <Filters slot="filters" />

    <Search slot="searchBar" />

    <div slot="searchResults" class="results box">
        <PageControls
            hasPreviousPage={$DBSearchQuery?.data?.entries.hasPreviousPage}
            hasNextPage={$DBSearchQuery?.data?.entries.hasNextPage}
            totalResults={$DBSearchQuery?.data?.entries.totalResults}
        />
        {#if $DBSearchQuery.data}
            <ul id="search-results" role="list">
                {#each $DBSearchQuery.data.entries.results as entry}
                    <li>
                        <EntrySummary data={entry} />
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
    
    <slot slot="entryDetails" />
</DatabaseLayout>


<style lang="scss">
    // form#search {
    //     align-items: start;
    //     grid-template-rows: auto 1fr;
    //     grid-template-columns: 30ch 1fr 1fr;
    //     grid-template-areas:
    //         'filters search search'
    //         'filters results results';

    //     // grid-template-columns: 1fr 1fr 30ch;
    //     // grid-template-areas:
    //     //     'search search filters'
    //     //     'results results filters';
    // }

    // .search {
    //     grid-area: search;
    // }

    // .filters {
    //     grid-area: filters;
    // }

    // .results {
    //     grid-area: results;
    // }

    ul#search-results {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: block;
        overflow: visible;
        max-inline-size: none;

        li {
            max-inline-size: none;

            &:not(:last-child) {
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
        }
    }
</style>
