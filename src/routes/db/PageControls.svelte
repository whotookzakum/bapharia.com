<script>
    import Icon from "@iconify/svelte";
    import { resultsPerPage, userSearch, currentPage } from "./stores";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { browser } from "$app/environment";

    export let hasPreviousPage = false;
    export let hasNextPage = false;
    export let totalResults = 0;

    // TODO: Back to search button should restore currentPage

    $: totalPages = Math.ceil(totalResults / $resultsPerPage);
    $: if ($currentPage > totalPages && totalPages > 0)
        $currentPage = totalPages;
    $: if ($currentPage < 1) $currentPage = 1;
    $: currentItemsIndex = {
        min: $resultsPerPage * $currentPage - $resultsPerPage + 1,
        max:
            $resultsPerPage * $currentPage > totalResults
                ? totalResults
                : $resultsPerPage * $currentPage,
    };

    $: if (browser) {
        $resultsPerPage;
        $currentPage;
        updateUrl();
    }

    // Reset current page to 1 if new search or changed # of shown items
    $: {
        $userSearch;
        $resultsPerPage;
        $currentPage = 1;
    }

    const loadPreviousPage = () => {
        $currentPage--;
    };

    const loadNextPage = () => {
        $currentPage++;
    };

    function updateUrl() {
        if ($resultsPerPage === 10) {
            $page.url.searchParams.delete("show");
        } else {
            $page.url.searchParams.set("show", $resultsPerPage);
        }

        if ($currentPage === 1) {
            $page.url.searchParams.delete("page");
        } else {
            $page.url.searchParams.set("page", $currentPage);
        }

        goto(`?${$page.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: false,
            keepFocus: true,
            invalidateAll: true,
        });
    }
</script>

<div class="search-result-controls flex gap-2">
    <div class="page-buttons flex gap-2">
        <button
            disabled={!hasPreviousPage}
            on:click={loadPreviousPage}
            type="button"
        >
            <Icon icon={"mdi:chevron-left"} width="24" height="24" />
        </button>

        <button disabled={!hasNextPage} on:click={loadNextPage} type="button">
            <Icon icon={"mdi:chevron-right"} width="24" height="24" />
        </button>
        <span>Page {$currentPage} of {totalPages}</span>
    </div>

    <div class="flex gap-2">
        <span
            >{currentItemsIndex.min}-{currentItemsIndex.max} of {totalResults}</span
        >
        <select
            class="box"
            style="background: var(--bg);"
            bind:value={$resultsPerPage}
        >
            <option value={10}>10 Items</option>
            <option value={25}>25 Items</option>
            <option value={50}>50 Items</option>
            <!-- <option value={100}>100 Items</option> -->
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
    }

    button {
        background: var(--bg);
        border: none;
        border-radius: 50%;
        width: 44px;
        height: 44px;
        display: grid;
        place-content: center;
        color: var(--accent1);
        transition: all 0.05s ease;

        &:where(:hover, :focus-visible):not(:disabled) { background: var(--surface2); }

        &:disabled {
            filter: saturate(0) brightness(0.9);
            color: gray;
        }
    }
</style>
