<script>
    import EntrySummary from "./EntrySummary.svelte";
    export let data;
</script>

<div class="box" style="max-height: 700px; overflow: auto;">
    <ul id="search-results" role="list" class="unstyled-list">
        <!-- class:list-view={resultsDisplayMode === "list"}
        class:grid-view={resultsDisplayMode === "grid"} -->
        {#each data as entry (entry.name.ja_JP + entry.id)}
            <EntrySummary data={entry} />
        {/each}
    </ul>
</div>

<style lang="scss">
    ul#search-results {
        &.grid-view {
            grid-template-columns: repeat(
                auto-fill,
                minmax(calc(208px + 2rem), 1fr)
            );
        }

        &.list-view {
            gap: 0;
            background: var(--surface1);
            border-radius: 1rem;
        }
    }
</style>
