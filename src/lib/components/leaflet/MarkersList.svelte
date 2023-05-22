<script>
    import _ from "lodash";
    import { userLocale, markersVisibility } from "$lib/stores";

    export let markers;
    let selectedTab = "general";

    // Get all categories unique to this map
    $: uniqueCategories = _.uniqBy(markers, (m) => m.category)
        .map((m) => m.category)
        .sort((a, b) => {
            if (a > b) return 1;
            if (b < a) return -1;
            return 0;
        });

    // Get all markers that fall under the selected category
    $: markersInSelectedCategory = markers.filter(
        (marker) => marker.category === selectedTab
    );

    // Return only 1 of each unique marker
    $: markerToggles = _.uniqBy(
        markersInSelectedCategory,
        (m) => m.name.en_US
    ).sort((a, b) => {
        if (a.name.en_US > b.name.en_US) return 1;
        if (b.name.en_US < a.name.en_US) return -1;
        return 0;
    });

    function toggleAllMarkers(value) {
        markerToggles.forEach(
            (marker) => ($markersVisibility[marker.name.en_US] = value)
        );
    }
</script>

<h2>Markers</h2>

<div class="tab-selector flex">
    {#each uniqueCategories as category}
        <input
            type="radio"
            class="visually-hidden style-next-label"
            id="toggle-{category}"
            value={category}
            bind:group={selectedTab}
        />
        <label for="toggle-{category}">{category}</label>
    {/each}
</div>

<button on:click={() => toggleAllMarkers(true)}>Show all</button>
<button on:click={() => toggleAllMarkers(false)}>Hide all</button>

<ul class="markers-list grid g-50">
    {#each markerToggles as marker, index}
        <li class="grid">
            <input
                type="checkbox"
                class="style-next-label visually-hidden"
                id="marker-{index}"
                bind:checked={$markersVisibility[marker.name.en_US]}
            />
            <label class="selection-box" for="marker-{index}">
                <img
                    class="marker-icon"
                    src={marker.iconUrl}
                    alt=""
                    width="64"
                    height="64"
                />
                <span>{marker.name[$userLocale]}</span>
            </label>
        </li>
    {/each}
</ul>

<style lang="scss">
    ul.markers-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        max-inline-size: unset;
    }

    label.selection-box span {
        line-height: 1.4;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .style-next-label:not(:checked) + label {
        filter: brightness(1.2) contrast(0.5);
    }

    :global([color-scheme*="dark"] .style-next-label:not(:checked) + label) {
        filter: brightness(0.6) !important;
    }

    input:not(:checked) + label,
    input:disabled + label {
        img {
            filter: brightness(1) grayscale(1);
        }
    }

    .tab-selector label {
        background: var(--surface2);
        padding: 0.5rem;
    }

    input[type="radio"]:checked + label {
        color: var(--accent);
    }
</style>
