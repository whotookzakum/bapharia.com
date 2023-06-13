<script>
    import { userLocale, mapSearchQuery, mapControls } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import MarkersList from "./MarkersList.svelte";
    import HotkeysHint from "./HotkeysHint.svelte";
    import MapsList from "./MapsList.svelte";

    export let markers;
    let searchElement;
    let keys = {};

    function handleKeydown(e) {
        keys[e.key] = true;
        if (keys.Control && keys.k) {
            e.preventDefault();
            openSearch()
        }
        if (keys.Control && keys["'"]) {
            e.preventDefault();
            $mapControls.showMarkers = !$mapControls.showMarkers;
        }
        if (keys.Control && keys[";"]) {
            e.preventDefault();
            $mapControls.showMapList = !$mapControls.showMapList;
        }
        if (keys.Control && keys["/"]) {
            e.preventDefault();
            $mapControls.showHotkeys = !$mapControls.showHotkeys;
        }
    }

    function handleKeyup(e) {
        keys[e.key] = false;
    }

    function openSearch() {
        searchElement.focus();
        $mapControls.showMapList = true
    }
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div class="map-controls grid">
    <menu class="flex g-50" role="list">
        <li class="search-wrapper">
            <input
                class="search box"
                type="text"
                placeholder="Search for a map"
                aria-label="Search for a map"
                on:click={openSearch}
                bind:value={$mapSearchQuery}
                bind:this={searchElement}
            />
        </li>
        <li>
            <input
                type="checkbox"
                id="toggle-map-list"
                class="visually-hidden"
                bind:checked={$mapControls.showMapList}
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
                bind:checked={$mapControls.showMarkers}
            />
            <label class="flex box" for="toggle-marker-list">
                <span class="visually-hidden">Markers</span>
                <Icon icon="mdi:map-marker-radius" width="24" height="24" />
            </label>
        </li>
        <li class="desktop-only">
            <input
                type="checkbox"
                id="toggle-hotkeys-hint"
                class="visually-hidden"
                bind:checked={$mapControls.showHotkeys}
            />
            <label class="flex box" for="toggle-hotkeys-hint">
                <span class="visually-hidden">Markers</span>
                <Icon icon="mingcute:hotkey-fill" width="24" height="24" />
                <!-- material-symbols:keyboard-alt-outline-rounded -->
            </label>
        </li>
    </menu>
    {#if $mapControls.showMapList}
        <div class="box panel">
            <MapsList />
        </div>
    {/if}
    {#if $mapControls.showMarkers}
        <div class="box panel">
            <MarkersList {markers} />
        </div>
    {/if}
    {#if $mapControls.showHotkeys}
        <div class="box panel desktop-only">
            <HotkeysHint />
        </div>
    {/if}
</div>

<style lang="scss">
    .map-controls {
        margin: 1rem;
        position: absolute;
        align-content: flex-start;
        z-index: 1001;
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

    @media (max-width: 850px) {
        .search {
            width: 100%;
        }
    }

    :global(.map-controls header) {
        border-bottom: 1px solid var(--surface3);
    }

    menu {
        list-style: none;
        margin: 0;
        padding: 0;
        // flex-wrap: wrap;
        align-items: center;

        & > * {
            flex-shrink: 1;
        }
    }

    .panel {
        padding-top: 0;
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
