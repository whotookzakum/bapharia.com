<script>
    // https://github.com/ngyewch/svelte-leaflet/issues/3#issuecomment-1170333938
    import { page } from "$app/stores";

    import "leaflet/dist/leaflet.css";
    import "./leaflet.scss";
    import L from "leaflet?client";
    import {
        LeafletMap,
        ImageOverlay,
        Marker,
        Icon,
        Popup,
        Tooltip,
    } from "svelte-leafletjs?client";
    // import LeafletMap from "$lib/components/leaflet/LeafletMap.svelte";
    import { browser } from "$app/environment";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import MapControls from "$lib/components/leaflet/MapControls.svelte";
    import { userLocale, markersVisibility, mapState } from "$lib/stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let leafletMap;
    // export let data;
    // $: zone = data.zone;

    const loadMap = async () => {
        const mapId = $page.url.searchParams.get("zone") ?? "Cty001";
        const zone = await import(
            `../../../lib/components/leaflet/maps/${mapId}.json`
        );
        return zone
    };

    const bounds = [
        [0, 0],
        [1080, 1920],
    ];

    const mapOptions = {
        crs: browser ? L.CRS.Simple : null,
        center: [bounds[1][0] / 2, bounds[1][1] / 2],
        zoom: 0,
        minZoom: -1,
        maxZoom: 3,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
    };

    const imageOverlayOptions = {
        attribution: "© Bandai Namco Online Inc. © Bandai Namco Studios Inc.",
    };

    // onMount(() => {
    //     const cachedMarker = localStorage.getItem("map-marker")
    //     if (cachedMarker) {
    //         // Make sure marker exists on current zone, i.e. Cty001
    //         // Will not work if duplicate marker names exist on multiple zones, i.e. LockerStorage1 exists in both Cty001 and Cty002. Leaving off at Cty001 and visitng Cty002 the next time would open Cty002's marker.
    //         if (zone.markers.some(marker => marker.id === cachedMarker)) {
    //             $page.url.searchParams.set("marker", cachedMarker)
    //         }
    //         // Remove so that it's not confusing why the marker is open next time, i.e. opening a marker on Cty001, viewing Cty002 but not opening a marker, then next visit starting at Cty001 and seeing the marker open.
    //         else {
    //             localStorage.clear("map-marker")
    //         }
    //     }

    //     const cachedZone = localStorage.getItem("map-zone")
    //     if (cachedZone) {
    //         $page.url.searchParams.set("zone", cachedZone)
    //     } else {
    //         localStorage.setItem("map-zone", $page.url.searchParams.get("zone") || "Cty001")
    //     }

    //     goto(`?${$page.url.searchParams.toString()}`, {
    //         noScroll: true,
    //         replaceState: true,
    //         keepFocus: true,
    //     });
    // })

    function handlePopupOpen(markerId) {
        $mapState.currentMarkerId = markerId;
        $page.url.searchParams.set("marker", $mapState.currentMarkerId);
        goToUpdatedUrl();
    }

    function handlePopupClose() {
        $mapState.currentMarkerId = null;
        $page.url.searchParams.delete("marker");
        goToUpdatedUrl();
    }

    function goToUpdatedUrl() {
        goto(`?${$page.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: true,
            keepFocus: true,
        });
    }

    let allMarkers = {};

    $: $mapState.currentMapId = $page.url.searchParams.get("zone");

    onMount(() => {
        const markerIdFromUrl = $page.url.searchParams.get("marker");
        const markerIdFromStore = $mapState.currentMarkerId;

        if (
            markerIdFromUrl &&
            zone.markers.some((marker) => marker.id === markerIdFromUrl)
        ) {
            allMarkers[markerIdFromUrl].getMarker().openPopup();
        } else if (
            markerIdFromStore &&
            zone.markers.some((marker) => marker.id === markerIdFromStore)
        ) {
            allMarkers[markerIdFromStore].getMarker().openPopup();
        }

        const mapIdFromUrl = $page.url.searchParams.get("zone");
        const mapIdFromStore = $mapState.currentMapId;
        if (mapIdFromStore) {
            $page.url.searchParams.set("zone", mapIdFromStore);
        } else if (mapIdFromUrl) {
            $mapState.currentMapId = mapIdFromUrl;
        }
    });
</script>

<MetaTags
    title={`World Map — Bapharia`}
    description={`Interactive map for BLUE PROTOCOL. Find enemies, locations, quests, treasure chests, gathering spots, and more!`}
/>

<!-- <MapControls markers={zone.markers} /> -->

{#if !browser}
    <h1 class="visually-hidden">World Map</h1>
{/if}

<!-- <LeafletMap /> -->


    
    {#await loadMap() then zone}
    <MetaTags title={`${zone.name[$userLocale]} — Bapharia`} />
    <h1>
        {zone.name[$userLocale]}
        {$mapState.currentMarkerId}
        {$mapState.currentMapId}
    </h1>
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <ImageOverlay
            imageUrl={zone.imgSrc}
            {bounds}
            options={imageOverlayOptions}
        />
        {#each zone.markers as marker}
            {#if $markersVisibility[marker.name.en_US]}
                <Marker
                    latLng={[
                        -marker.coords[1] / 70 + 586.5,
                        marker.coords[0] / 70 + 1210.5,
                    ]}
                    events={["popupopen", "popupclose"]}
                    on:popupopen={() => handlePopupOpen(marker.id)}
                    on:popupclose={() => handlePopupClose(marker.id)}
                    bind:this={allMarkers[marker.id]}
                >
                    {#if marker.iconUrl}
                        <Icon
                            options={{
                                iconUrl: marker.iconUrl,
                                iconSize: [64, 64],
                                iconAnchor: [32, 32],
                                popupAnchor: [0, -16],
                            }}
                        />
                    {/if}

                    <Popup>
                        <small style="color: var(--text2)"
                            >{marker.id}</small
                        ><br />
                        <strong>{marker.name[$userLocale]}</strong><br />
                        <!-- {marker.description} -->
                        <small style="color: var(--text2)"
                            >{marker.coords}</small
                        >
                    </Popup>
                </Marker>
            {/if}
        {/each}
    </LeafletMap>
    {/await}


<style lang="scss">
    h1 {
        position: absolute;
        z-index: 1000;
        margin: 0;
        bottom: 1rem;
        left: 1rem;
        line-height: 1;
        font-size: var(--step-5);
        color: white;
    }
</style>
