<script>
    import { userLocale, mapSearchQuery, mapListShowZones } from "$lib/stores";
    import { checkStringIncludes } from "$lib/utils/string_utils";
    import MapControlsViews from "./MapControlsViews.svelte";
    import MapLink from "./MapLink.svelte";
    import mapsData from "./maps.json";

    let viewType = "list-view";
    const mapCategories = ["City", "Field", "Dungeon"];

    $: queriedMaps = mapsData.filter(
        (map) =>
            checkStringIncludes(map.name.ja_JP, $mapSearchQuery) ||
            checkStringIncludes(map.name.en_US, $mapSearchQuery) ||
            checkArrayIncludes(map.zones, $mapSearchQuery)
    );

    function checkArrayIncludes(arr, query) {
        let result = false;
        if (arr) {
            for (let el of arr) {
                const isMatch =
                    checkStringIncludes(el.name.ja_JP, query) ||
                    checkStringIncludes(el.name.en_US, query);
                if (isMatch) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    }
</script>

<header class="flex">
    <h2>Maps</h2>
    <MapControlsViews id="maps" bind:viewType />
</header>

{#each mapCategories as category}
    {#if queriedMaps.filter((map) => map.category === category).length > 0}
        <div class="category-header flex g-50">
            <span>{category}</span>
            {#if category === "Field"}
                <label style="font-size: var(--step--1)">
                    <input type="checkbox" bind:checked={$mapListShowZones} />
                    Show zones
                </label>
            {/if}
        </div>
        <!-- {#if category === "Field"}
            <small style=""> Fields contain multiple zones </small>
        {/if} -->
        <ul class="maps-list grid g-50 {viewType}" role="list">
            {#each queriedMaps.filter((map) => map.category === category) as map}
                <li>
                    <MapLink
                        href="/map?zone={map.map_id.split('_')[0]}"
                        name={map.name}
                        icon="/images/MapImage/UI_{map.mapImages[0].split(
                            'UI_'
                        )[1]}"
                        {viewType}
                        zones={map.zones}
                    />
                </li>
            {/each}
        </ul>
    {/if}
{/each}

<style lang="scss">
    small {
        font-size: var(--step--2);
        color: var(--text2);
        margin-block: 0 0.5rem;
        display: block;
    }

    li {
        position: relative;
        gap: 0.25rem;
        --link-padding: 0.5rem;
    }

    .grid-view {
        grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));

        li {
            display: grid;
            --link-text-align: center;
        }
    }

    .list-view {
        grid-template-columns: 1fr 1fr !important;

        li {
            display: flex;
            --link-text-align: left;
            --img-display: none;
        }
    }
</style>
