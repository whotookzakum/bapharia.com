<script>
    import MetaTags from "$lib/components/MetaTags.svelte";

    import { page } from "$app/stores";
    import EntrySummary from "./EntrySummary.svelte";
    import SearchFilters from "./SearchFilters.svelte";
    import { filterCategoryTypes } from "$lib/stores";
    import PageControls from "./PageControls.svelte";
    import { resultsPerPage } from "$lib/stores";
    import Search from "./Search.svelte";

    export let data;

    $: ({DBSearchQuery} = data)

    // TODO save and cache preferences: filters
    // TODO favorite items

    let userSearchInput = $page.url.searchParams.get("search") || "";

    export let _DBSearchQueryVariables = () => {
        return {
            searchTerm: userSearchInput,
            maxResults: 10,
            categories: JSON.stringify($filterCategoryTypes),
        };
    };

    $: {
        $filterCategoryTypes;
        updateResults();
    }

    const updateResults = () => {
        _DBSearchQueryVariables = () => {
            return {
                searchTerm: userSearchInput,
                maxResults: 10,
                categories: JSON.stringify($filterCategoryTypes),
            };
        };
    };

    

</script>

<MetaTags
    title={`Database — Bapharia`}
    description={`Database for BLUE PROTOCOL. Look up items, weapons, echoes, skills, enemies, maps, liquid memories, and more!`}
/>

<h1>Database</h1>

<form id="search" class="grid" style:gap="1rem">

    <div class="flex g-50">
        <Search />
        <!-- <SearchFilters /> -->
    </div>

    <div class="box">
        <PageControls
            hasPreviousPage={!$DBSearchQuery?.pageInfo?.hasPreviousPage}
            hasNextPage={!$DBSearchQuery?.pageInfo?.hasNextPage}
            totalResults={$DBSearchQuery?.data?.entries.totalResults}
            on:clickPreviousPage={async () => await DBSearchQuery.loadPreviousPage()}
            on:clickNextPage={async () => await DBSearchQuery.loadNextPage()}
        />
        {#if !$DBSearchQuery.fetching}
            <ul id="search-results" role="list">
                {#each $DBSearchQuery.data.entries.edges as entry}
                    <li>
                        <button
                            type="button"
                            
                        >
                            <EntrySummary {userSearchInput} data={entry.node} />
                        </button>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</form>

<style lang="scss">
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

        button {
            padding: 0.8rem;
            user-select: auto;
            width: 100%;
            background: none;
            border: none;
            text-align: left;

            &:hover,
            &:focus-visible {
                background: var(--surface2);
            }

            &:focus-visible {
                border-radius: 5px;
            }
        }
    }
</style>
