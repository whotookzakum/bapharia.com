<script>
    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from 'svelte';
    import { resultsPerPage, userSearch } from "$lib/stores";

    export let hasPreviousPage = false;
    export let hasNextPage = false;
    export let totalResults = 0;
    
    const dispatch = createEventDispatcher();

    let pageNumber = 1;
    $: totalPages = Math.ceil(totalResults / $resultsPerPage);
    $: if (pageNumber > totalPages && totalPages > 0) pageNumber = totalPages;
    $: currentItemsIndex = {
        min: $resultsPerPage * pageNumber - $resultsPerPage + 1,
        max: $resultsPerPage * pageNumber > totalResults ? totalResults : $resultsPerPage * pageNumber
    }

    $: {
        pageNumber = 1
        $userSearch;
    }

    const loadPreviousPage = async () => {
        dispatch('clickPreviousPage');
        pageNumber--;
    };

    const loadNextPage = async () => {
        dispatch('clickNextPage');
        pageNumber++;
    };
</script>

<div class="search-result-controls flex g-50">
    <div class="page-buttons flex g-50">
        <button disabled={hasPreviousPage} on:click={loadPreviousPage}>
            <Icon icon={"mdi:chevron-left"} width="18" height="18" />
        </button>

        <button disabled={hasNextPage} on:click={loadNextPage}>
            <Icon icon={"mdi:chevron-right"} width="18" height="18" />
        </button>
        <span>Page {pageNumber} of {totalPages}</span>
    </div>

    <div class="flex g-50">
        <span>{currentItemsIndex.min}-{currentItemsIndex.max} of {totalResults}</span>
        <select class="box" style="background: var(--bg);" bind:value={$resultsPerPage}>
            <option value={10}>10 Items</option>
            <option value={25}>25 Items</option>
            <option value={50}>50 Items</option>
            <option value={100}>100 Items</option>
        </select>
    </div>
</div>

<style lang="scss">
    .search-result-controls {
        justify-content: space-between;
        align-items: center;

        & > .flex {
            align-items: center;
        }

        button {
            background: var(--bg);
            border: none;
            border-radius: 50%;
            width: 44px;
            height: 44px;
            display: grid;
            place-content: center;
        }
    }
</style>
