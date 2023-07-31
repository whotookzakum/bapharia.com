<script>
    import { userLocale, mapSearchQuery, mapControls } from "$lib/stores";
    import Icon from "@iconify/svelte";

    let searchElement;
    let keys = {};

    function handleKeydown(e) {
        keys[e.key] = true;
        if (keys.Control && keys.k) {
            e.preventDefault();
            openSearch();
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
        $mapControls.showMapList = true;
    }
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div class="topbar flex">
    <input
        class="search"
        type="text"
        placeholder="Search the map"
        aria-label="Search the map"
        on:click={openSearch}
        bind:value={$mapSearchQuery}
        bind:this={searchElement}
    />
    <hr aria-hidden="true" />
    <div class="flex">
        <input
            type="checkbox"
            id="toggle-map-list"
            class="visually-hidden"
            bind:checked={$mapControls.showMapList}
        />
        <label class="grid" for="toggle-map-list">
            <span class="visually-hidden">Markers</span>
            <Icon icon="ph:map-trifold-fill" width="24" height="24" />
        </label>
        <input
            type="checkbox"
            id="toggle-marker-list"
            class="visually-hidden"
            value="hey"
            bind:checked={$mapControls.showMarkers}
        />
        <label class="grid" for="toggle-marker-list">
            <span class="visually-hidden">Markers</span>
            <Icon icon="mdi:map-marker-radius" width="24" height="24" />
        </label>
    </div>
</div>

<style lang="scss">
    .topbar {
        margin: 1rem;
        position: absolute;
        z-index: 1001;
        width: calc(var(--sidebar-width) - 2rem);
        height: 44px;
        background: var(--surface1);
        border-radius: 5px;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

        .search {
            flex: 1;
            border: none;
            background: none;
            height: 100%;
            width: 100%;
            padding: 0 1rem;

            &:focus-visible {
                outline: none !important;
            }
        }

        .flex {
            padding: 0 0.25rem;
            height: 100%;
        }

        &:has(.search:focus-visible) {
            outline: 2px solid var(--accent);
        }
    }

    .panel {
        padding-top: 0;
    }

    label {
        place-content: center;
        height: 100%;
        aspect-ratio: 1/1;
        color: var(--text2);

        &:hover {
            color: var(--text1);
        }
    }

    input:checked + label {
        color: var(--accent);
    }

    hr {
        width: 1px;
        height: 75%;
        background: var(--surface2);
    }
</style>
