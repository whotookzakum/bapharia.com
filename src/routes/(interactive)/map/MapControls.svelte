<script>
    import { userLocale, mapSearchQuery, mapControls } from "$lib/stores";
    import MarkersList from "./MarkersList.svelte";
    import HotkeysHint from "./HotkeysHint.svelte";
    import MapSearchBar from "./MapSearchBar.svelte";
    import { fly } from "svelte/transition";
    import MapListStrip from "./MapListStrip.svelte";

    export let markers;
</script>

<MapSearchBar />

{#if $mapControls.showMarkers || $mapControls.showHotkeys}
    <div class="map-sidebar-wrapper" transition:fly={{ x: "-50px" }}>
        <div class="sidebar-contents grid">
            {#if $mapControls.showMarkers}
                <MarkersList {markers} />
            {/if}
            {#if $mapControls.showHotkeys}
                <div class="box panel desktop-only">
                    <HotkeysHint />
                </div>
            {/if}
        </div>
        <div class="decals-wrapper">
            <img
                class="decal-top"
                src="/UI/CommandMenu/UI_CommandMenuBgCorner.png"
                alt=""
                width="390"
                height="200"
            />
            <img
                class="decal-bottom"
                src="/UI/CommandMenu/UI_CommandMenuBgCorner.png"
                alt=""
                width="390"
                height="200"
            />
        </div>
    </div>
{/if}
{#if $mapControls.showMapList}
    <MapListStrip />
{/if}

<style lang="scss">
    :root {
        --sidebar-width: 400px;
    }

    .map-sidebar-wrapper {
        width: var(--sidebar-width);
        position: absolute;
        inset: 0;
        z-index: 1000;
        background: var(--bg);

        &::before {
            content: "";
            background: linear-gradient(var(--bg) 50%, transparent);
            position: absolute;
            height: 100px;
            width: 100%;
            pointer-events: none;
        }
    }

    .sidebar-contents {
        height: 100%;
        overflow-y: scroll;
        align-items: start;
        gap: 1rem;
        padding: calc(44px + 2rem) 1rem 0 1rem;
    }

    :global(.sidebar-contents header) {
        display: flex;
        border-bottom: 1px solid var(--surface2);
        padding-bottom: 0.5rem;
        align-items: center;
    }

    :global(.sidebar-contents header:not(:first-of-type)) {
        margin-top: 1rem;
    }

    :global(.sidebar-contents h2) {
        font-size: var(--step-2);
        margin: 0;
        font-weight: 700;
        line-height: 1.4;
    }

    .decals-wrapper {
        position: absolute;
        display: grid;
        inset: 0;
        // top: 60px;
        width: var(--sidebar-width);
        z-index: -1;
        pointer-events: none;
        overflow: hidden;

        img {
            position: absolute;
            z-index: -1;
            opacity: 0.15;
        }

        .decal-bottom {
            bottom: 0;
            left: 0;
            transform: rotate(180deg) scaleX(-100%);
        }

        .decal-top {
            right: 0;
            top: 0;
            transform: scaleX(-100%);
        }
    }
</style>
