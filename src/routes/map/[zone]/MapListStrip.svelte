<script>
    import { userLocale, mapSearchQuery, mapControls } from "$lib/stores";
    import { checkStringIncludes, katakanaToHiragana } from "$lib/utils/string_utils";
    import { fly } from "svelte/transition";
    import mapsData from "$bp_client/maps.json";
    import uniqBy from "lodash/uniqBy";
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";

    // TODO: Collapsible accordion with each section stacked stickying?
    // // Cities ⌄
    // // Fields ⌄
    // // Dungeons
    // // // Dragon Claw Valley
    // // // Pillar of Divinity
    // // // ...

    // TODO: Should the labels be anchor links that just scroll to the section?

    // TODO: Dungeons

    let selectedCategory = "All";
    let expanded = false;

    const mapCategories = [
        {
            singular: {
                en_US: "All",
                ja_JP: "全部",
            },
            name: {
                en_US: "All",
                ja_JP: "全部",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_HomeTown.png",
        },
        {
            singular: {
                en_US: "City",
                ja_JP: "街",
            },
            name: {
                en_US: "Cities",
                ja_JP: "街",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_HomeTown.png",
        },
        {
            singular: {
                en_US: "Field",
                ja_JP: "フィールド",
            },
            name: {
                en_US: "Fields",
                ja_JP: "フィールド",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_Other.png",
        },
        {
            singular: {
                en_US: "Exploration",
                ja_JP: "自由探索",
            },
            name: {
                en_US: "Exploration",
                ja_JP: "自由探索",
            },
            iconSrc: "/UI/Map/UI_MapBtnSubIcon_Other.png",
        },
        {
            singular: {
                en_US: "Dungeon",
                ja_JP: "ダンジョン",
            },
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

    function highlightMatchedTerm(entryName) {
        // Every language other than Japanese
        if ($userLocale !== "ja_JP") {
            return entryName.replace(
                new RegExp($mapSearchQuery, "gi"),
                (match) => `<mark>${match}</mark>`
            );
        }
        // User locale and search term are both JP, otherwise it messes up names like Jake's Letter
        else if ($mapSearchQuery.match(/[\u3041-\u30f6]/g)) {
            const startIndex = katakanaToHiragana(entryName)
                .toLowerCase()
                .indexOf(katakanaToHiragana($mapSearchQuery).toLowerCase());
            const beforeMatch = entryName.slice(0, startIndex);
            const match = entryName.slice(
                startIndex,
                startIndex + $mapSearchQuery.length
            );
            const afterMatch = entryName.slice(startIndex + $mapSearchQuery.length);
            return `${beforeMatch}<mark>${match}</mark>${afterMatch}`;
        }
        // User locale is JP but search term is English
        else {
            return entryName;
        }
    }
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
                    value={category.singular.en_US}
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
        <label style="margin-left: auto;">
            <input
                class="visually-hidden"
                type="checkbox"
                bind:checked={expanded}
            />
            <span class="flex box rounded g-25" style="padding-left: 1rem">
                <Icon
                    icon={expanded
                        ? "mdi:arrow-down-bold"
                        : "mdi:arrow-up-bold"}
                    width="20"
                    height="20"
                />
                <span class="visually-hidden">Expand maps list</span>
            </span>
        </label>
    </div>
    <div class="track-wrapper" class:expanded>
        {#if $mapSearchQuery}
            <div class="search-reminder" style="padding: 1rem 1rem 0 1rem;">
                Showing results for "<b>{$mapSearchQuery}</b>"
            </div>
        {/if}
        <nav
            class="flex"
            on:wheel={(event) =>
                (event.currentTarget.scrollLeft += event.deltaY)}
        >
            {#each mapCategories as category, index}
                {#if queriedMaps.filter((map) => map.category === category.singular.en_US).length > 0}
                    <h3 class="expanded-category-text">
                        {category.name[$userLocale]}
                    </h3>
                    {#each queriedMaps.filter((map) => map.category === category.singular.en_US) as map}
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
                                <span class="map-name"
                                    >{@html highlightMatchedTerm(map.name[$userLocale])}</span
                                >
                                {#if $mapSearchQuery && map.zones}
                                    {#each map.zones as zone}
                                        {#if checkStringIncludes(zone.name.ja_JP, $mapSearchQuery) || checkStringIncludes(zone.name.en_US, $mapSearchQuery)}
                                            <span>{@html highlightMatchedTerm(zone.name[$userLocale])}</span>
                                        {/if}
                                    {/each}
                                {/if}
                                <span
                                    class="category-pill {category.singular
                                        .en_US}"
                                    >{category.singular[$userLocale]}</span
                                >
                            </a>
                        </div>
                    {/each}
                    {#if categoriesInQuery.includes(mapCategories[index + 1]?.singular.en_US)}
                        <hr aria-hidden="true" />
                    {/if}
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
        // width: fit-content;
        flex-wrap: wrap;
        margin-inline: 1rem;
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

        .search-reminder b {
            font-weight: 700;
        }
    }

    .expanded-category-text {
        display: none;
        width: 100%;
        font-weight: normal;
        font-size: var(--step-1);
        line-height: 1.4;

        &:first-of-type {
            margin: 0;
        }
    }

    .expanded {
        height: 80vh;

        nav {
            overflow: initial;
            flex-wrap: wrap;
        }

        hr {
            display: none;
        }

        .expanded-category-text {
            display: block;
        }

        .decal-right {
            display: none;
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
        width: 220px;
        // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

        .map-name {
            font-weight: 700;
            font-size: var(--step-2);
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

        .category-pill {
            font-weight: 300;
            font-size: var(--step--2);
            width: fit-content;
            align-self: end;
            padding: 0.25rem 0.5rem;
            border-radius: 3rem;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
        }

        .City {
            background: rgb(4, 92, 151);
        }

        .Field {
            background: rgb(0, 128, 64);
        }

        .Exploration {
            background: rgb(87, 0, 128);
        }

        .Dungeon {
            background: rgb(128, 105, 0);
        }
    }

    a:where(:hover, :focus-visible) {
        text-decoration: none;

        .link-bg-img {
            filter: brightness(0.6);
        }

        .map-name {
            text-decoration: underline;
        }
    }

    hr {
        flex-shrink: 0;
        width: 1px;
        height: 85px;
        background: var(--surface3);
        margin: 0;
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
