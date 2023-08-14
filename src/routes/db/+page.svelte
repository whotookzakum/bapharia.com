<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import EntrySummary from "./EntrySummary.svelte";
    import Filters from "./Filters.svelte";
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

<div class="db-wrapper">
    <div class="filters">
        <Filters />
    </div>
    <div class="search-and-results grid">
        <Search />
        <div class="results box">
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
    </div>
</div>

<style lang="scss">
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
