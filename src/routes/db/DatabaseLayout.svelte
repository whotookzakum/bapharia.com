
<slot name="entryDetails" />

<div class="db-wrapper">
    <div class="filters">
        <slot name="filters" />
    </div>
    <div class="search-and-results grid">
        <slot name="searchBar" />
        <slot name="searchResults" />
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
</style>