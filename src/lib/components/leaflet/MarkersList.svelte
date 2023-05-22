<script>
    import _ from "lodash";
    import { userLocale, markersVisibility } from "$lib/stores";

    // const markers = [
    //     {
    //         name: "空間転送ポータル",
    //         imgSrc: "/UI/Icon/Map/UI_Map_12.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "ダンジョン入り口",
    //         imgSrc: "/UI/Icon/Map/UI_Map_14.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "ネームドエネミー",
    //         imgSrc: "/UI/Icon/Map/UI_Map_04.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "武器屋",
    //         imgSrc: "/UI/Icon/Map/UI_Map_07.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "道具屋",
    //         imgSrc: "/UI/Icon/Map/UI_Map_09.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "転球練成儀",
    //         imgSrc: "/UI/Icon/Map/UI_Map_19.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     // {
    //     //     name: "交換所",
    //     //     imgSrc: "/UI/Icon/Map/UI_Map_20.png",
    //     //     group: "general",
    //     //     category: "general",
    //     // },
    //     {
    //         name: "倉庫",
    //         imgSrc: "/UI/Icon/Map/UI_Map_40.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "クラスマスター",
    //         imgSrc: "/UI/Icon/Map/UI_Map_65.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "武器改造師",
    //         imgSrc: "/UI/Icon/Map/UI_Map_67.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "イマジン研究所",
    //         imgSrc: "/UI/Icon/Map/UI_Map_71.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "リキッドメモリースタンド",
    //         imgSrc: "/UI/Icon/Map/UI_Map_72.png",
    //         group: "general",
    //         category: "general",
    //     },
    //     {
    //         name: "鉱石系素材",
    //         imgSrc: "/UI/Icon/Gather/UI_IconGatherMineral.png",
    //         group: "mineral",
    //         category: "resources",
    //     },
    //     {
    //         name: "植物系素材",
    //         imgSrc: "/UI/Icon/Gather/UI_IconGatherPlant.png",
    //         group: "plant",
    //         category: "resources",
    //     },
    //     {
    //         name: "水産物系素材",
    //         imgSrc: "/UI/Icon/Gather/UI_IconGatherAquatic.png",
    //         group: "aquatic",
    //         category: "resources",
    //     },
    //     {
    //         name: "リキッドメモリー",
    //         imgSrc: "",
    //         group: "resource",
    //         category: "resources",
    //     },
    // ];

    export let markers;

    const tabs = [
        {
            name: "General",
            category: "general",
            id: "tab-general",
        },
        {
            name: "Enemies",
            category: "enemies",
            id: "tab-enemies",
        },
        {
            name: "Resources",
            category: "resources",
            id: "tab-resources",
        },
        {
            name: "Quests",
            category: "quests",
            id: "tab-quests",
        },
        {
            name: "Liquid Memories",
            category: "liquidMemories",
            id: "tab-memories",
        },
    ];

    let selectedTab = "general";

    // Get all categories unique to this map
    const uniqueCategories = _.uniqBy(markers, (m) => m.category)
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
            <label class="marker-toggle grid" for="marker-{index}">
                <img src={marker.iconUrl} alt="" width="64" height="64" />
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
        font-size: var(--step--1);
        text-align: center;

        li {
            line-height: 1.4;
        }
    }

    label.marker-toggle {
        border-radius: 5px;
        background: var(--surface2);
        place-items: center;
        padding: 0.5rem;
        gap: 0;

        img {
            $icon-size: 64px;
            $icon-size-clipped: 48px;
            $margin-offset: calc(($icon-size - $icon-size-clipped) / 2);
            width: $icon-size-clipped !important;
            height: $icon-size-clipped !important;
            object-fit: none;
            object-position: 50%;
            cursor: inherit !important;
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
        }

        span {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &:hover,
        &:focus-within {
            background: var(--surface3);
        }
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
