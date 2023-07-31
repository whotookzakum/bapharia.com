<script>
    import { userLocale, mapSearchQuery, mapControls } from "$lib/stores";
    import MarkersList from "./MarkersList.svelte";
    import HotkeysHint from "./HotkeysHint.svelte";
    import MapsList from "./MapsList.svelte";
    import MapSearchBar from "./MapSearchBar.svelte";
    import { fly } from "svelte/transition";
    import MapStrip from "./MapStrip.svelte";

    export let markers;
</script>

<MapSearchBar />

{#if $mapControls.showMapList || $mapControls.showMarkers || $mapControls.showHotkeys}
    <div class="map-sidebar grid" transition:fly={{ x: "-50px" }}>
        {#if $mapControls.showMapList}
            <MapsList />
        {/if}
        {#if $mapControls.showMarkers}
            <MarkersList {markers} />
        {/if}
        {#if $mapControls.showHotkeys}
            <div class="box panel desktop-only">
                <HotkeysHint />
            </div>
        {/if}
    </div>
{/if}
<MapStrip />

<style lang="scss">
    .map-sidebar {
        width: 400px;
        overflow-y: scroll;
        align-items: start;
        gap: 1rem;
        position: absolute;
        inset: 0;
        z-index: 1000;
        padding: calc(44px + 2rem) 1rem 0 1rem;
        background: var(--bg);
    }

    :global(.map-sidebar header) {
        display: flex;
        border-bottom: 1px solid var(--surface2);
        padding-bottom: 0.5rem;
        align-items: center;
        
    }

    :global(.map-sidebar header:not(:first-of-type)) {
        margin-top: 1rem;
    }

    :global(.map-sidebar h2) {
        font-size: var(--step-2);
        margin: 0;
        font-weight: 700;
        line-height: 1.4;
    }
</style>
