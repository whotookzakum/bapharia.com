<script>
    import { userLocale, mapSearchQuery } from "$lib/stores";
    import { checkStringIncludes } from "$lib/utils/string_utils";
    import mapsData from "./maps.json";

    // TODO: Collapsible accordion with each section stacked stickying?
    // // Cities ⌄
    // // Fields ⌄
    // // Dungeons
    // // // Dragon Claw Valley
    // // // Pillar of Divinity
    // // // ...

    const mapCategories = [
        {
            singular: "City",
            name: {
                en_US: "Cities",
                ja_JP: "街",
            },
        },
        {
            singular: "Field",
            name: {
                en_US: "Fields",
                ja_JP: "フィールド",
            },
        },
        {
            singular: "Dungeon",
            name: {
                en_US: "Dungeons",
                ja_JP: "ダンジョン",
            },
        },
    ];

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

<nav class="flex g-50">
    {#each mapCategories as category}
        {#if queriedMaps.filter((map) => map.category === category.singular).length > 0}
            {#each queriedMaps.filter((map) => map.category === category.singular) as map}
                <a
                    class="grid styled-link box"
                    href="/map/{map.map_id.split('_')[0]}"
                >
                    <img
                        class="link-bg-img"
                        src="/UI/Map/MapArea/UI_MapArea_{map.map_id.replace(
                            '00',
                            '0'
                        )}.png"
                        alt=""
                        width="414"
                        height="238"
                        loading="lazy"
                    />
                    <span>{map.name[$userLocale]}</span>
                </a>
            {/each}
        {/if}
    {/each}
    {#each mapCategories as category}
        {#if queriedMaps.filter((map) => map.category === category.singular).length > 0}
            {#each queriedMaps.filter((map) => map.category === category.singular) as map}
                <a
                    class="grid styled-link box"
                    href="/map/{map.map_id.split('_')[0]}"
                >
                    <img
                        class="link-bg-img"
                        src="/UI/Map/MapArea/UI_MapArea_{map.map_id.replace(
                            '00',
                            '0'
                        )}.png"
                        alt=""
                        width="414"
                        height="238"
                        loading="lazy"
                    />
                    <span>{map.name[$userLocale]}</span>
                </a>
            {/each}
        {/if}
    {/each}
</nav>

<style lang="scss">
    nav {
        position: absolute;
        z-index: 1002;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--bg);
        padding: 1rem;
        // flex-wrap: wrap;
        overflow-x: auto;
        
        & > * {
            flex: 1;
            flex-basis: 200px;
        }
    }

    .category-header {
        justify-content: start;
        align-items: center;
    }

    a {
        line-height: 1.4;
        border-radius: 5px;
        padding: 0.5rem;
        position: relative;
        z-index: 1;
        min-height: 100px;
        min-width: 220px;
        font-weight: 700;
        font-size: var(--step-2);
        // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .link-bg-img {
        position: absolute;
        z-index: -1;
        object-fit: cover;
        width: 110%;
        height: 110%;
        filter: brightness(0.4);
        inset: -10px;
    }

    a:where(:hover, :focus-visible) .link-bg-img {
        filter: brightness(0.6);
    }
</style>
