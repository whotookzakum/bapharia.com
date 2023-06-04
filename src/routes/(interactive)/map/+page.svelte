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
    export let data;
    $: zone = data.zone.default;

    const bounds = [
        [0, 0],
        [1080, 1920],
    ];

    const mapOptions = {
        crs: browser ? L.CRS.Simple : null,
        center: [bounds[1][0] / 2, bounds[1][1] / 2],
        zoom: 0,
        minZoom: -2, // -1
        maxZoom: 3, // 3
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
    };

    const imageOverlayOptions = {
        attribution: "© Bandai Namco Online Inc. © Bandai Namco Studios Inc.",
    };

    let allMarkers = {};

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

    // if zone changes, then currentMarkerId gets reset to null to avoid opening markers of the same ID on different zones
    $: {
        let zoneFromUrl = $page.url.searchParams.get("zone");
        let zoneFromStore = $mapState.currentMapId;
        if (zoneFromUrl !== zoneFromStore) {
            $mapState.currentMarkerId = null;
            $mapState.currentMapId = zoneFromUrl || "Cty001";
        }
    }

    // const mapIdFromUrl = $page.url.searchParams.get("zone");
    // const mapIdFromStore = $mapState.currentMapId;
    // if (mapIdFromStore && !mapIdFromUrl) {
    //     $page.url.searchParams.set("zone", mapIdFromStore);
    //     goToUpdatedUrl()
    // }

    onMount(() => {
        const markerIdFromUrl = $page.url.searchParams.get("marker");
        const markerIdFromStore = $mapState.currentMarkerId;
        // Open marker when visiting URL directly
        if (
            markerIdFromUrl &&
            zone.markers.some((marker) => marker.id === markerIdFromUrl)
        ) {
            allMarkers[markerIdFromUrl]?.getMarker().openPopup();
        }
        // Persist open marker while switching routes
        else if (
            markerIdFromStore &&
            zone.markers.some((marker) => marker.id === markerIdFromStore)
        ) {
            allMarkers[markerIdFromStore]?.getMarker().openPopup();
        }
    });

    function convertCoords(coords) {
        switch (zone.id) {
            case "Cty001":
                return [-coords[1] / 70 + 586.5, coords[0] / 70 + 1210.5];
            case "Cty002":
                return [
                    (-coords[1] / 21.3 + 1185) / 2,
                    (coords[0] / 21.4 + 1735) / 2,
                ];
            case "Fld001":
                return [
                    (-coords[1] / 70 + 10) / 2,
                    (coords[0] / 69.5 + 2610) / 2,
                ];
            case "Fld002":
                return [
                    (-coords[1] / 37 - 700) / 2,
                    (coords[0] / 37 + 2680) / 2,
                ];
            case "Fld003":
                return [
                    (-coords[1] / 55.6 + 1098) / 2, // 55.4 ~ 55.6
                    (coords[0] / 55.6 + 1986) / 2,
                ];
        }
    }
</script>

<MetaTags
    title={`World Map — Bapharia`}
    description={`Interactive map for BLUE PROTOCOL. Find enemies, locations, quests, treasure chests, gathering spots, and more!`}
/>

{#if !browser}
    <h1 class="visually-hidden">World Map</h1>
{/if}

{#if browser}
    <MetaTags title={`${zone.name[$userLocale]} — Bapharia`} />
    <h1>{zone.name[$userLocale]}</h1>
    <MapControls markers={zone.markers} />
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <ImageOverlay
            imageUrl={zone.imgSrc}
            {bounds}
            options={imageOverlayOptions}
        />
        {#each zone.markers as marker}
            {#if $markersVisibility[marker.name.en_US]}
                <Marker
                    latLng={convertCoords(marker.coords)}
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
                        <small style="color: var(--text2)">{marker.id}</small
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
        {#if zone.labels}
            {#each zone.labels as label}
                <Marker latLng={label.coords} opacity={0} zIndexOffset={-100}>
                    <Tooltip
                        options={{
                            direction: "bottom",
                            permanent: true,
                            className: `map-zone-label skip-std ${
                                label.isMini ? "mini" : ""
                            }`,
                            opacity: 1,
                        }}
                    >
                        {label.name[$userLocale]}
                    </Tooltip>
                </Marker>
            {/each}
        {/if}
    </LeafletMap>
{/if}

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
