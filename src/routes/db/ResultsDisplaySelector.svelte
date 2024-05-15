<script>
    import Popper from "$lib/components/Popper.svelte";
    import { resultsViewMode } from "./stores";
    import "iconify-icon";
</script>

<div class="wrapper flex">
    <Popper let:setFocused placement="bottom">
        <input
            type="radio"
            id="results-view-list"
            value="list"
            bind:group={$resultsViewMode}
            class="visually-hidden"
            on:focus={() => setFocused(true)}
            on:blur={() => setFocused(false)}
            on:click={() => setFocused(false)}
        />
        <label class="grid first" for="results-view-list">
            <span class="visually-hidden">List View</span>
            <iconify-icon icon="fluent:text-bullet-list-16-filled" />
        </label>
        <p slot="tooltip" aria-hidden="true">List View</p>
    </Popper>
    <Popper let:setFocused placement="bottom">
        <input
            type="radio"
            id="results-view-grid"
            value="grid"
            bind:group={$resultsViewMode}
            class="visually-hidden"
            on:focus={() => setFocused(true)}
            on:blur={() => setFocused(false)}
            on:click={() => setFocused(false)}
        />
        <label class="grid" for="results-view-grid">
            <span class="visually-hidden">Grid View</span>
            <iconify-icon icon="bi:grid-fill" />
        </label>
        <p slot="tooltip" aria-hidden="true">Grid View</p>
    </Popper>
    <Popper let:setFocused placement="bottom">
        <input
            type="radio"
            id="results-view-table"
            value="table"
            bind:group={$resultsViewMode}
            class="visually-hidden"
            on:focus={() => setFocused(true)}
            on:blur={() => setFocused(false)}
            on:click={() => setFocused(false)}
        />
        <label class="grid last" for="results-view-table">
            <span class="visually-hidden">Table View</span>
            <iconify-icon icon="ri:table-view" />
        </label>
        <p slot="tooltip" aria-hidden="true">Table View</p>
    </Popper>
</div>

<style lang="scss">
    .wrapper {
        // margin-left: auto;
        border-radius: 0.5rem;
        margin-block: -0.25rem;
    }

    label {
        min-width: 36px;
        min-height: 36px;
        place-content: center;
        color: var(--text2);
        background: var(--surface1);

        &.first {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
        }

        &.last {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }
    }

    input:focus-visible + label, label:hover {
        color: var(--text1);
        background: var(--surface2);
        position: relative;
        z-index: 2;
    }

    input:checked + label {
        color: var(--accent1);
    }
</style>
