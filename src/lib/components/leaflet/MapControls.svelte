<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import { fly } from "svelte/transition";
    import MarkersList from "./MarkersList.svelte";
    import HotkeysHint from "./HotkeysHint.svelte";
    import { browser } from "$app/environment";
    import mapsData from "./maps.json";

    // Hide irrelevant markers? i.e. hide city markers when on bahamar highlands map

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
    let searchElement;
    let mapList;
    let showMapList = false;
    let showMarkers = false;
    let showHotkeys = false;

    $: if (mapList) {
        if (showMapList) {
            mapList.showModal();
        } else {
            mapList.close();
        }
    }

    function handleClick() {}

    let keys = {};

    function handleKeydown(e) {
        keys[e.key] = true;
        if (keys.Control && keys.k) {
            e.preventDefault();
            searchElement.focus();
        }
        if (keys.Control && keys["'"]) {
            e.preventDefault();
            showMarkers = !showMarkers;
        }
        if (keys.Control && keys[";"]) {
            e.preventDefault();
            showMapList = !showMapList;
        }
        if (keys.Control && keys["/"]) {
            e.preventDefault();
            showHotkeys = !showHotkeys;
        }
    }

    function handleKeyup(e) {
        keys[e.key] = false;
    }
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div class="map-controls grid g-50">
    <menu class="flex g-50" role="list">
        <li>
            <input
                class="search box"
                type="text"
                placeholder="Search for a map"
                aria-label="Search for a map"
                bind:value={searchQuery}
                bind:this={searchElement}
                on:click|stopPropagation|preventDefault={handleClick}
            />
        </li>
        <li>
            <input
                type="checkbox"
                id="toggle-map-list"
                class="visually-hidden"
                bind:checked={showMapList}
            />
            <label class="flex box" for="toggle-map-list">
                <span class="visually-hidden">Markers</span>
                <Icon icon="ph:map-trifold-fill" width="24" height="24" />
            </label>
        </li>
        <li>
            <input
                type="checkbox"
                id="toggle-marker-list"
                class="visually-hidden"
                bind:checked={showMarkers}
            />
            <label class="flex box" for="toggle-marker-list">
                <span class="visually-hidden">Markers</span>
                <Icon icon="mdi:map-marker-radius" width="24" height="24" />
            </label>
        </li>
        <li>
            <input
                type="checkbox"
                id="toggle-hotkeys-hint"
                class="visually-hidden"
                bind:checked={showHotkeys}
            />
            <label class="flex box" for="toggle-hotkeys-hint">
                <span class="visually-hidden">Markers</span>
                <Icon icon="mingcute:hotkey-fill" width="24" height="24" />
                <!-- material-symbols:keyboard-alt-outline-rounded -->
            </label>
        </li>
    </menu>
    <div class="control-panels grid g-50">
        <!-- <ul class="search-results box" role="list">
            {#each maps as map}
                <li>
                    <a class="flex g-50" href={map.href}
                        ><Icon icon={map.icon} /> {map.name[$userLocale]}</a
                    >
                    {searchQuery}
                </li>
            {/each}
        </ul> -->
        {#if showHotkeys}
            <HotkeysHint />
        {/if}
        {#if showMarkers}
            <!-- <MarkersList /> -->
        {/if}
        <!-- <dialog bind:this={mapList} transition:fly>
            hi
        </dialog> -->

        {#if showMapList}
        <nav class="box">
            <ul>
                {#each mapsData as map}
                    <li>
                        <a href={`/map?zone=${map.map_id.split("_")[0]}`}>{map.name_en}</a>
                    </li>
                {/each}
            </ul>
        </nav>
        {/if}
    </div>
</div>

<style lang="scss">
    dialog {
        &::backdrop {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    .search {
        width: 30ch;
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
        margin: 0;

        a {
            align-items: center;
            border: none;
        }
    }

    .control-panels {
        // max-width: 30ch;
    }

    .map-controls {
        margin: 1rem;
        position: absolute;
        z-index: 420;
        left: 0;
        top: 0;
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

    input:checked + label {
        color: var(--accent);
    }
</style>
