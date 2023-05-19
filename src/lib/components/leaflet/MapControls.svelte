<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import _ from "lodash";

    // Hide irrelevant markers? i.e. hide city markers when on bahamar highlands map

    const markers = [
        {
            name: "空間転送ポータル",
            imgSrc: "/images/map/markers/UI_Map_12.png",
            type: "general",
        },
        {
            name: "ダンジョン入り口",
            imgSrc: "/images/map/markers/UI_Map_14.png",
            type: "field",
        },
        {
            name: "ネームドエネミー",
            imgSrc: "/images/map/markers/UI_Map_04.png",
            type: "field",
        },
        {
            name: "武器屋",
            imgSrc: "/images/map/markers/UI_Map_07.png",
            type: "city",
        },
        {
            name: "道具屋",
            imgSrc: "/images/map/markers/UI_Map_09.png",
            type: "city",
        },
        {
            name: "転球練成儀",
            imgSrc: "/images/map/markers/UI_Map_19.png",
            type: "city",
        },
        {
            name: "交換所",
            imgSrc: "/images/map/markers/UI_Map_20.png",
            type: "city",
        },
        {
            name: "倉庫",
            imgSrc: "/images/map/markers/UI_Map_40.png",
            type: "city",
        },
        {
            name: "クラスマスター",
            imgSrc: "/images/map/markers/UI_Map_65.png",
            type: "city",
        },
        {
            name: "武器改造師",
            imgSrc: "/images/map/markers/UI_Map_67.png",
            type: "city",
        },
        {
            name: "？？？",
            imgSrc: "/images/map/markers/UI_Map_69.png",
            type: "city",
        },
        {
            name: "イマジン研究所",
            imgSrc: "/images/map/markers/UI_Map_71.png",
            type: "city",
        },
        {
            name: "リキッドメモリースタンド",
            imgSrc: "/images/map/markers/UI_Map_72.png",
            type: "city",
        },
        {
            name: "鉱石系素材",
            imgSrc: "",
            type: "resource",
        },
        {
            name: "植物系素材",
            imgSrc: "",
            type: "resource",
        },
        {
            name: "水産物系素材",
            imgSrc: "",
            type: "resource",
        },
        {
            name: "リキッドメモリー",
            imgSrc: "",
            type: "resource",
        },
    ];

    const maps = [
        {
            name: {
                ja_JP: "交易都市アステルリーズ",
                en_US: "Asterliese",
            },
            icon: "mdi:map-marker",
            href: "/map?map=Cty001"
        },
        {
            name: {
                ja_JP: "アステリア平原",
                en_US: "Asteria Plain",
            },
            icon: "mdi:map-marker",
            href: "/map?map=Fld001"
        },
        {
            name: {
                ja_JP: "バハマール高原",
                en_US: "Bahamar Highlands",
            },
            icon: "mdi:map-marker",
            href: "/map?map=Fld002"
        },
    ];

    let searchQuery = "";

    const categories = _.uniqBy(markers, (m) => m.type).map((m) => m.type);
</script>

<nav class="map-controls">
    <!-- <input
        type="checkbox"
        name=""
        id="show-map-controls"
        class="visually-hidden"
        checked
    />
    <label for="show-map-controls" class="box">
        <Icon icon="mdi:map-marker-radius" width="24" height="24" />
    </label>
    <div class="controls-contents box">
        <h2>Markers</h2>
        {#each categories as category}
            <details>
                <summary>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    <small>({markers.filter(m => m.type === category).length})</small>
                </summary>
                <ul class="marker-toggles-list" role="list">
                    {#each markers.filter((m) => m.type === category) as marker}
                        <li>
                            <label class="marker-toggle">
                                <input
                                    type="checkbox"
                                    class="visually-hidden"
                                    checked
                                />
                                <img
                                    src={marker.imgSrc}
                                    alt=""
                                    width="48"
                                    height="48"
                                />
                                {marker.name}
                            </label>
                        </li>
                    {/each}
                </ul>
            </details>
        {/each}
    </div> -->
    <div>
        <input class="search box" type="text" placeholder="Search for a map" aria-label="Search for a map" bind:value={searchQuery} />
        <ul class="search-results box" role="list">
            {#each maps as map}
                <li>
                    <a class="flex g-50" href={map.href}><Icon icon={map.icon} /> {map.name[$userLocale]}</a> {searchQuery}
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style lang="scss">
    label.box {
        padding: 0.5rem;
    }

    .search {
        width: 30ch;
    }

    .search:focus-visible {
        // box-shadow: none;
        // border-bottom-right-radius: 0;
        // border-bottom-left-radius: 0;
        // outline: none !important;
    }

    .search:not(:focus-visible) + .search-results {
        // display: none;
    }

    .search-results {
        max-inline-size: none;
        list-style-type: none;
        gap: 0;

        a {
            align-items: center;
            border: none;
        }
    }

    nav {
        margin: 1rem;
        position: absolute;
        z-index: 420;
        left: 0;
        top: 0;
        display: grid;
        justify-items: flex-end;
        gap: 0.5rem;

        .controls-contents {
            transition: all 0.4s ease;
        }

        input:not(:checked) ~ .controls-contents {
            transform: translateX(35%);
            opacity: 0;
            visibility: hidden;
        }
    }

    h2 {
        font-size: var(--step-0);
        margin-block: -0rem 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        max-inline-size: unset;
    }

    summary {
        // font-family: "Skip Std";
        // color: var(--accent);
        font-size: var(--step--1);
        font-weight: 600;
        text-transform: uppercase;
    }

    .marker-toggles-list {
        list-style-type: none;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-inline-size: unset;
    }

    .marker-toggle {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
            margin: -1rem;
        }

        input:not(:checked) {
            & ~ img {
                filter: grayscale(1) brightness(0.7);
            }
        }

        &:has(input:not(:checked)) {
            text-decoration: line-through;
            filter: grayscale(1) brightness(0.7);
        }
    }
</style>
