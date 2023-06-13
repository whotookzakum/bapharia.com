<script>
    import _ from "lodash";
    import { userLocale, markersVisibility } from "$lib/stores";
    import MarkerToggle from "./MarkerToggle.svelte";
    import MapControlsViews from "./MapControlsViews.svelte";

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
    <MapControlsViews id="markers" bind:viewType />
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
</style>
