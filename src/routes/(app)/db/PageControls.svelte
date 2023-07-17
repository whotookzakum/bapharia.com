<script>
    import Icon from "@iconify/svelte";
    import { resultsPerPage, userSearch, currentPage } from "./stores";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { browser } from "$app/environment";

    export let hasPreviousPage = true;
    export let hasNextPage = true;
    export let totalResults = 0;

    $currentPage = $page.url.searchParams.get("page") || 1;

    $: totalPages = Math.ceil(totalResults / $resultsPerPage);
    $: if ($currentPage > totalPages && totalPages > 0)
        $currentPage = totalPages;
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
        }
        else {
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

<div class="search-result-controls flex g-50">
    <div class="page-buttons flex g-50">
        <div disabled={$currentPage <= 1} on:click={loadPreviousPage}>
            <Icon icon={"mdi:chevron-left"} width="18" height="18" />
        </div>

        <div  on:click={loadNextPage}>
            <Icon icon={"mdi:chevron-right"} width="18" height="18" />
        </div>
        <span>Page {$currentPage} of {totalPages}</span>
    </div>

    <div class="flex g-50">
        <span>{currentItemsIndex.min}-{currentItemsIndex.max} of {totalResults}</span>
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

        &:disabled {
            background: red;
        }
    }
</style>
