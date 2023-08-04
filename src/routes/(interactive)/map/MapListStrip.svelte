<script>
    import { userLocale, mapSearchQuery, mapControls } from "$lib/stores";
    import { checkStringIncludes } from "$lib/utils/string_utils";
    import { fly } from "svelte/transition";
    import mapsData from "./maps.json";
    import uniqBy from "lodash/uniqBy";
    import { page } from "$app/stores";

    // TODO: Collapsible accordion with each section stacked stickying?
    // // Cities ⌄
    // // Fields ⌄
    // // Dungeons
    // // // Dragon Claw Valley
    // // // Pillar of Divinity
    // // // ...

    // TODO: Should the labels be anchor links that just scroll to the section?

    // TODO: Dungeons
    // {
    //     "id": 300400,
    //     "name": {
    //         "ja_JP": "音無き都",
    //         "en_US": "Soundless City"
    //     },
    //     "map_id": "dng004",
    //     "mapImages": [
    //         "/UI/Map/MapImage/dng004/UI_Mapdng004_1F.png",
    //         "/UI/Map/MapImage/dng004/UI_Mapdng004_2F.png",
    //         "/UI/Map/MapImage/dng004/UI_Mapdng004_3F.png",
    //         "/UI/Map/MapImage/dng004/UI_Mapdng004_4F.png"
    //     ]
    // },
    // {
    //     "id": 300900,
    //     "name": {
    //         "ja_JP": "巨竜の爪痕",
    //         "en_US": "Dragon's Rive"
    //     },
    //     "map_id": "dng009",
    //     "category": "Dungeon",
    //     "mapImages": [
    //         "/UI/Map/MapImage/dng009/UI_Mapdng009.png"
    //     ],
    //     "bgImg": "/images/map/dragon.png"
    // },
    // {
    //     "id": 3080100,
    //     "name": {
    //         "ja_JP": "木漏れ日射す林道",
    //         "en_US": "Sunlit Timberpath"
    //     },
    //     "map_id": "pat0801",
    //     "category": "Dungeon",
    //     "mapImages": [
    //         "/UI/Map/MapImage/pat0801/UI_Mappat0801.png"
    //     ],
    //     "bgImg": "/images/map/sunlit.png"
    // },
    // {
    //     "id": 3080200,
    //     "name": {
    //         "ja_JP": "ともし火の森",
    //         "en_US": "Torchlight Thickets"
    //     },
    //     "map_id": "pat0802",
    //     "category": "Dungeon",
    //     "mapImages": [
    //         "/UI/Map/MapImage/pat0802/UI_Mappat0802.png"
    //     ],
    //     "bgImg": "/images/map/torchlight.png"
    // },
    // {
    //     "id": 3020100,
    //     "name": {
    //         "ja_JP": "ボルオム遺跡",
    //         "en_US": "Ruins of Borwam"
    //     },
    //     "map_id": "pat0201",
    //     "category": "Dungeon",
    //     "mapImages": [
    //         "/UI/Map/MapImage/pat0201/UI_Mappat0201_F1.png",
    //         "/UI/Map/MapImage/pat0201/UI_Mappat0201_F2.png"
    //     ],
    //     "bgImg": "/images/map/borwam.png"
    // },
    // {
    //     "id": 300700,
    //     "name": {
    //         "ja_JP": "枷神の産屋",
    //         "en_US": "Chained One's Spawnery"
    //     },
    //     "map_id": "dng007",
    //     "category": "Dungeon",
    //     "mapImages": [
    //         "/UI/Map/MapImage/dng007/UI_Mapdng007.png"
    //     ],
    //     "bgImg": "/images/map/spawnery.jpg"
    // },
    // {
    //     "id": 3080300,
    //     "name": {
    //         "ja_JP": "雨止まぬ森",
    //         "en_US": "Everfall Forest"
    //     },
    //     "map_id": "pat0803",
    //     "category": "Dungeon",
    //     "mapImages": [
    //         "/UI/Map/MapImage/pat0803/UI_Mappat0803.png"
    //     ],
    //     "bgImg": "/images/map/everfall.png"
    // }

    let selectedCategory = "All";

    const mapCategories = [
        {
            singular: "All",
            name: {
                en_US: "All",
                ja_JP: "全部",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_HomeTown.png",
        },
        {
            singular: "City",
            name: {
                en_US: "Cities",
                ja_JP: "街",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_HomeTown.png",
        },
        {
            singular: "Field",
            name: {
                en_US: "Fields",
                ja_JP: "フィールド",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_Other.png",
        },
        {
            singular: "Free Exploration",
            name: {
                en_US: "Exploration",
                ja_JP: "自由探索",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_Other.png",
        },
        {
            singular: "Dungeon",
            name: {
                en_US: "Dungeons",
                ja_JP: "ダンジョン",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_Other.png",
        },
    ];

    $: queriedMaps = mapsData
        .filter((map) => {
            if (selectedCategory === "All") return true;
            return map.category === selectedCategory;
        })
        .filter(
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

    $: categoriesInQuery = uniqBy(queriedMaps, (m) => m.category).reduce(
        (acc, mapData) => {
            if (mapData.category) acc.push(mapData.category);
            return acc;
        },
        []
    );
</script>

<div
    class="strip-wrapper grid"
    transition:fly={{ y: "50px" }}
    class:offset-left={$mapControls.showMarkers}
>
    <div class="category-toggles flex g-25">
        {#each mapCategories as category}
            <label>
                <input
                    class="visually-hidden"
                    type="radio"
                    value={category.singular}
                    bind:group={selectedCategory}
                />
                <span class="flex box rounded g-25">
                    <i
                        class="icon"
                        aria-hidden="true"
                        style:mask-image="url('{category.iconSrc}')"
                        style:-webkit-mask-image="url('{category.iconSrc}')"
                    />
                    {category.name[$userLocale]}
                </span>
            </label>
        {/each}
        {#if $mapSearchQuery}
            <div class="search-reminder">
                Showing results for "<b>{$mapSearchQuery}</b>"
            </div>
        {/if}
    </div>
    <div class="track-wrapper">
        <nav
            class="flex"
            on:wheel={(event) =>
                (event.currentTarget.scrollLeft += event.deltaY)}
        >
            {#each categoriesInQuery as category, index}
                {#each queriedMaps.filter((map) => map.category === category) as map}
                    <div class="link-wrapper">
                        {#if $page.params.zone === map.map_id}
                            <img
                                class="pin"
                                src="/UI/Map/UI_MapPin3Normal.png"
                                alt="You are here"
                                width="32"
                                height="44"
                            />
                        {/if}
                        <a
                            class="grid styled-link box"
                            href="/map/{map.map_id.split('_')[0]}"
                        >
                            <img
                                class="link-bg-img"
                                src={map.thumbImage}
                                alt=""
                                width="414"
                                height="238"
                                loading="lazy"
                            />
                            <span>{map.name[$userLocale]}</span>
                        </a>
                    </div>
                {/each}
                {#if categoriesInQuery.length > 1 && index < categoriesInQuery.length - 1}
                    <hr aria-hidden="true" />
                {/if}
            {/each}
        </nav>
        <img
            class="decal-right"
            src="/UI/ShopCommon/UI_ShopCommon_CraftHeaderBGRight.png"
            alt=""
            width="650"
            height="130"
        />
    </div>
</div>

<style lang="scss">
    .strip-wrapper {
        position: absolute;
        z-index: 1002;
        left: 0;
        bottom: 0;
        right: 0;
        gap: 0.5rem;
        // transition: left 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    }

    .offset-left {
        left: var(--sidebar-width);
    }

    .category-toggles {
        width: fit-content;
        flex-wrap: wrap;
        margin-left: 1rem;
        font-size: var(--step--1);
        color: var(--text2);
        align-items: center;

        span {
            align-items: center;
            padding: 0.5rem 1rem 0.5rem 0.75rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            // inset 0 -8px 8px rgba(0, 0, 0, 0.3);
            user-select: none;
        }

        .icon {
            width: 24px;
            aspect-ratio: 1/1;
            mask-size: cover;
            -webkit-mask-size: cover;
            background-color: var(--text2);
            margin: -2px;
        }

        input:checked + span {
            color: var(--accent);
            background: var(--surface2);

            .icon {
                background: var(--accent);
            }
        }

        label:where(:hover, :focus-within) span {
            color: var(--text1);
            background-color: var(--surface2);

            .icon {
                background: var(--text1);
            }
        }

        label:focus-within span {
            outline: 2px solid var(--accent);
        }

        .search-reminder {
            padding: 0 0.5rem;
            color: var(--text1);
        }

        b {
            font-weight: 700;
        }
    }

    .track-wrapper {
        position: relative;
        overflow-x: hidden;
        z-index: 1;
        background: var(--bg);

        &::after {
            content: "";
            position: absolute;
            background: linear-gradient(to right, transparent, var(--bg));
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 1;
            width: 44px;
            pointer-events: none;
        }
    }

    nav {
        overflow-x: auto;
        padding: 1rem;
        align-items: center;
        gap: 1rem;
        position: relative;
    }

    .link-wrapper {
        position: relative;
    }

    .pin {
        position: absolute;
        top: -15px;
        right: 0;
        z-index: 10;
    }

    a {
        flex-shrink: 1;
        flex-basis: 200px;
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

    hr {
        flex-shrink: 0;
        width: 1px;
        height: 85px;
        background: var(--surface3);
        margin: 0;
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

    .decal-right {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
        width: auto;
        z-index: -1;
        opacity: 0.1;
    }
</style>
