<script>
    import _ from "lodash";
    import { userLocale, markersVisibility } from "$lib/stores";
    import MarkerToggle from "./MarkerToggle.svelte";
    import Icon from "@iconify/svelte";

    export let markers;
    let viewType = "list-view";

    // Get all categories unique to this map
    $: markerCategories = _.uniqBy(markers, (m) => m.category).map(
        (m) => m.category
    );

    function toggleCategory(category, value) {
        markers
            .filter((m) => m.category === category)
            .forEach((m) => ($markersVisibility[m.name.en_US] = value));
    }

    function getMarkers(category) {
        const uniqueMarkers = _.uniqBy(markers, (m) => m.name.en_US);

        const sortedMarkers = uniqueMarkers.sort((a, b) => {
            if (a.name.en_US > b.name.en_US) return 1;
            if (b.name.en_US < a.name.en_US) return -1;
            return 0;
        });

        return sortedMarkers.filter((m) => m.category === category);
    }
</script>

<header class="flex">
    <h2>Markers</h2>
    <div class="view-controls flex g-25">
        <input
            type="radio"
            id="radio-list-view"
            class="visually-hidden"
            value="list-view"
            bind:group={viewType}
        />
        <label class="grid" for="radio-list-view">
            <Icon icon="ic:baseline-list" width="24" height="24" />
            <span class="visually-hidden">Grid view</span>
        </label>

        <input
            type="radio"
            id="radio-grid-view"
            class="visually-hidden"
            value="grid-view"
            bind:group={viewType}
        />
        <label class="grid" for="radio-grid-view">
            <Icon icon="ic:outline-grid-view" width="24" height="24" />
            <span class="visually-hidden">Grid view</span>
        </label>
    </div>
</header>

{#each markerCategories as category}
    <div class="category-header flex g-50">
        <span>{category}</span>
        <div class="buttons-wrapper">
            <button
                class="transparent-button"
                on:click={() => toggleCategory(category, true)}>Show all</button
            >
            <button
                class="transparent-button"
                on:click={() => toggleCategory(category, false)}
                >Hide all</button
            >
        </div>
    </div>
    <ul class="markers-list grid g-50 {viewType}">
        {#each getMarkers(category) as marker}
            <li>
                <MarkerToggle name={marker.name} icon={marker.iconUrl} />
            </li>
        {/each}
    </ul>
{/each}

<style lang="scss">
    header {
        padding-bottom: 0.5rem;
        align-items: flex-end;

        h2 {
            font-size: var(--step-2);
            margin: 0;
        }

        .view-controls {
            margin-left: auto;
        }
    }

    .category-header {
        margin-block: var(--step-4) var(--space-3xs);
        align-items: flex-end;

        &:not(:first-of-type) {
            margin-top: var(--step-4);
        }

        span {
            text-transform: capitalize;
            font-size: var(--step-1);
        }

        button {
            font-size: var(--step--1);
            padding: 0.25rem;
            border-radius: 3px;
        }

        .buttons-wrapper {
            margin-left: auto;
        }
    }

    .markers-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
        max-inline-size: unset;
    }

    .grid-view {
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));

        li {
            display: grid;
            --label-padding: 0.5rem;
            --label-text-align: center;
        }
    }

    .list-view {
        grid-template-columns: 1fr 1fr !important;

        li {
            display: flex;
            --label-padding: 0.125rem 0.25rem;
            --label-text-align: left;
            gap: 0.25rem;
        }
    }

    label {
        color: var(--text2);
        padding: 0.5rem;
        border-radius: 5px;
        place-content: center;
    }

    input:focus-visible + label,
    label:hover {
        background: var(--surface2);
        color: var(--text1);
    }

    input:checked + label {
        color: var(--accent);
    }
</style>
