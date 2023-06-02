<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import MarkersList from "./MarkersList.svelte";
    import HotkeysHint from "./HotkeysHint.svelte";
    import MapsList from "./MapsList.svelte";

    export let markers;

    let searchQuery = "";
    let searchElement;
    let mapList;
    let showMapList = true;
    let showMarkers = true;
    let showHotkeys = false;

    $: if (mapList) {
        if (showMapList) {
            mapList.showModal();
        } else {
            mapList.close();
        }
    }

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

<div class="map-controls grid">
    <menu class="flex g-50" role="list">
        <li>
            <input
                class="search box"
                type="text"
                placeholder="Search for a map"
                aria-label="Search for a map"
                bind:value={searchQuery}
                bind:this={searchElement}
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
                value="hey"
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
    {#if showMapList}
        <div class="box">
            <MapsList />
        </div>
    {/if}
    {#if showMarkers}
        <div class="box">
            <MarkersList {markers} />
        </div>
    {/if}
    {#if showHotkeys}
        <div class="box">
            <HotkeysHint />
        </div>
    {/if}
</div>

<style lang="scss">
    .map-controls {
        position: absolute;
        align-content: flex-start;
        z-index: 1001;
        left: 1rem;
        top: 1rem;
        gap: 1rem;
        height: calc(100% - 2rem);
        pointer-events: none;
        max-width: 450px;

        & > div {
            overflow-y: scroll;
        }

        * {
            pointer-events: auto;
        }
    }

    .search {
        width: 30ch;
        max-height: 44px;
    }

    :global(.map-controls header) {
        border-bottom: 1px solid var(--surface3);
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
