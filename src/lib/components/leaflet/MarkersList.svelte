<script>
    import _ from "lodash";

    const markers = [
        {
            name: "空間転送ポータル",
            imgSrc: "/UI/Icon/Map/UI_Map_12.png",
            group: "general",
            category: "general",
        },
        {
            name: "ダンジョン入り口",
            imgSrc: "/UI/Icon/Map/UI_Map_14.png",
            group: "general",
            category: "general",
        },
        {
            name: "ネームドエネミー",
            imgSrc: "/UI/Icon/Map/UI_Map_04.png",
            group: "general",
            category: "general",
        },
        {
            name: "武器屋",
            imgSrc: "/UI/Icon/Map/UI_Map_07.png",
            group: "general",
            category: "general",
        },
        {
            name: "道具屋",
            imgSrc: "/UI/Icon/Map/UI_Map_09.png",
            group: "general",
            category: "general",
        },
        {
            name: "転球練成儀",
            imgSrc: "/UI/Icon/Map/UI_Map_19.png",
            group: "general",
            category: "general",
        },
        // {
        //     name: "交換所",
        //     imgSrc: "/UI/Icon/Map/UI_Map_20.png",
        //     group: "general",
        //     category: "general",
        // },
        {
            name: "倉庫",
            imgSrc: "/UI/Icon/Map/UI_Map_40.png",
            group: "general",
            category: "general",
        },
        {
            name: "クラスマスター",
            imgSrc: "/UI/Icon/Map/UI_Map_65.png",
            group: "general",
            category: "general",
        },
        {
            name: "武器改造師",
            imgSrc: "/UI/Icon/Map/UI_Map_67.png",
            group: "general",
            category: "general",
        },
        {
            name: "イマジン研究所",
            imgSrc: "/UI/Icon/Map/UI_Map_71.png",
            group: "general",
            category: "general",
        },
        {
            name: "リキッドメモリースタンド",
            imgSrc: "/UI/Icon/Map/UI_Map_72.png",
            group: "general",
            category: "general",
        },
        {
            name: "鉱石系素材",
            imgSrc: "/UI/Icon/Gather/UI_IconGatherMineral.png",
            group: "mineral",
            category: "resources",
        },
        {
            name: "植物系素材",
            imgSrc: "/UI/Icon/Gather/UI_IconGatherPlant.png",
            group: "plant",
            category: "resources",
        },
        {
            name: "水産物系素材",
            imgSrc: "/UI/Icon/Gather/UI_IconGatherAquatic.png",
            group: "aquatic",
            category: "resources",
        },
        {
            name: "リキッドメモリー",
            imgSrc: "",
            group: "resource",
            category: "resources",
        },
    ];

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

    // const categories = _.uniqBy(markers, (m) => m.tab).map((m) => m.tab);
    // console.log(categories)
</script>

<div class="box">
    <h2>Markers</h2>

    <div class="tab-selector">
        {#each tabs as tab}
            <input
                type="radio"
                class="visually-hidden style-next-label"
                id={tab.id}
                value={tab.category}
                bind:group={selectedTab}
            />
            <label for={tab.id}>{tab.name}</label>
        {/each}
    </div>

    {#each markers.filter((m) => m.category === selectedTab) as marker}
        <img src={marker.imgSrc} alt="" width="48" height="48" />
        <p>{marker.name}</p>
    {/each}

    <!-- {#each categories as category}
        <details open>
            <summary>
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <small
                    >({markers.filter((m) => m.type === category)
                        .length})</small
                >
            </summary>
            <ul class="markers-list g-25" role="list">
                {#each markers.filter((m) => m.tab === category) as marker}
                    <li>
                        <input
                            type="checkbox"
                            class="visually-hidden style-next-label"
                            id={marker.name}
                        />
                        <label for={marker.name} class="marker-toggle flex">
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
    {/each} -->
</div>

<style lang="scss">
    h2 {
        font-size: var(--step-0);
        margin-block: -0rem 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        max-inline-size: unset;
    }

    summary {
        font-size: var(--step--1);
        font-weight: 600;
        text-transform: uppercase;
    }

    ul.markers-list {
        list-style-group: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-inline-size: unset;
        font-size: var(--step--1);
    }

    label.marker-toggle {
        align-items: center;
        justify-content: flex-start;
        border-radius: 5px;
        display: flex;
        background: var(--surface2);

        img {
            // margin: -0.25rem 0;
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

    input:not(:checked) + label {
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
