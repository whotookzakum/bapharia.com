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
            href: "/map?zone=Cty001",
        },
        {
            name: {
                ja_JP: "アステリア平原",
                en_US: "Asteria Plain",
            },
            icon: "mdi:map-marker",
            href: "/map?zone=Fld001",
        },
        {
            name: {
                ja_JP: "バハマール高原",
                en_US: "Bahamar Highlands",
            },
            icon: "mdi:map-marker",
            href: "/map?zone=Fld002",
        },
        {
            name: {
                ja_JP: "test",
                en_US: "Salamzahd Oasis",
            },
            icon: "mdi:map-marker",
            href: "/map?zone=Cty002",
        },
    ];

    let searchQuery = "";

    const categories = _.uniqBy(markers, (m) => m.type).map((m) => m.type);
</script>

<nav class="map-controls">
    <!-- <div class="controls-contents box">
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
    <menu class="flex g-50" role="list">
        <li>
            <input
                class="search box"
                type="text"
                placeholder="Search for a map"
                aria-label="Search for a map"
                bind:value={searchQuery}
            />
        </li>
        <li>
            <input
                type="checkbox"
                id="toggle-marker-list"
                class="visually-hidden"
            />
            <label class="flex box" for="toggle-marker-list">
                <span class="visually-hidden">Markers</span>
                <Icon icon="mdi:map-marker-radius" width="24" height="24" />
            </label>
        </li>
        <li>
            <input
                type="checkbox"
                id="toggle-map-list"
                class="visually-hidden"
            />
            <label class="flex box" for="toggle-map-list">
                <span class="visually-hidden">Markers</span>
                <Icon icon="ph:map-trifold-fill" width="24" height="24" />
            </label>
        </li>
        <li>
            <input
                type="checkbox"
                id="toggle-hotkeys-hint"
                class="visually-hidden"
            />
            <label class="flex box" for="toggle-hotkeys-hint">
                <span class="visually-hidden">Markers</span>
                <Icon icon="mingcute:hotkey-fill" width="24" height="24" />
                <!-- material-symbols:keyboard-alt-outline-rounded -->
            </label>
        </li>
    </menu>
    <!-- <div>
        <input
            class="search box"
            type="text"
            placeholder="Search for a map"
            aria-label="Search for a map"
            bind:value={searchQuery}
        />
        <ul class="search-results box" role="list">
            {#each maps as map}
                <li>
                    <a class="flex g-50" href={map.href}
                        ><Icon icon={map.icon} /> {map.name[$userLocale]}</a
                    >
                    {searchQuery}
                </li>
            {/each}
        </ul>
    </div> -->
</nav>

<style lang="scss">
    .search {
        width: 30ch;
        // padding: 0;
        max-height: 44px;
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
        gap: 0.5rem;

        // .controls-contents {
        //     transition: all 0.4s ease;
        // }

        // input:not(:checked) ~ .controls-contents {
        //     transform: translateX(35%);
        //     opacity: 0;
        //     visibility: hidden;
        // }
    }

    // h2 {
    //     font-size: var(--step-0);
    //     margin-block: -0rem 0.5rem;
    //     border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    //     max-inline-size: unset;
    // }

    // summary {
    //     font-size: var(--step--1);
    //     font-weight: 600;
    //     text-transform: uppercase;
    // }

    // .marker-toggles-list {
    //     list-style-type: none;
    //     padding: 0;
    //     display: grid;
    //     grid-template-columns: 1fr 1fr;
    //     max-inline-size: unset;
    // }

    // .marker-toggle {
    //     display: flex;
    //     align-items: center;
    //     gap: 0.5rem;

    //     img {
    //         margin: -1rem;
    //     }

    //     input:not(:checked) {
    //         & ~ img {
    //             filter: grayscale(1) brightness(0.7);
    //         }
    //     }

    //     &:has(input:not(:checked)) {
    //         text-decoration: line-through;
    //         filter: grayscale(1) brightness(0.7);
    //     }
    // }

    input:checked + label {
        color: var(--accent);
    }

    menu {
        list-style: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        align-items: center;
    }

    label {
        display: grid;
        place-content: center;
        min-height: 44px;
        min-width: 44px;
        padding: 0;
        color: var(--text2);

        &:hover {
            color: var(--text1);
        }
    }

    input:focus-visible + label {
        // outline: var(--accent);
    }
</style>
