<script>
    // https://github.com/ngyewch/svelte-leaflet/issues/3#issuecomment-1170333938
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
    import { userLocale, showMarkersStore } from "$lib/stores";

    let leafletMap;
    export let data;
    $: zone = data.zone;

    $: if (leafletMap) {
        console.log(leafletMap?.getMap()._layers)
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
        // zoomControl: false,
    };

    const imageOverlayOptions = {
        attribution: "© Bandai Namco Online Inc. © Bandai Namco Studios Inc.",
    };
</script>

<MetaTags
    title={`World Map — Bapharia`}
    description={`Interactive map for BLUE PROTOCOL. Find enemies, locations, quests, treasure chests, gathering spots, and more!`}
/>

<MapControls />
<!-- <LeafletMap /> -->
{#if browser}
    <MetaTags title={`${zone.name[$userLocale]} — Bapharia`} />
    <LeafletMap
        bind:this={leafletMap}
        options={mapOptions}
        class="leaflet-wrapper"
    >
        <ImageOverlay
            imageUrl={zone.imgSrc}
            {bounds}
            options={imageOverlayOptions}
        />

        {#if $showMarkersStore}
            {#each zone.markers as marker}
                <Marker
                    latLng={[
                        -marker.coords[1] / 70 + 586.5,
                        marker.coords[0] / 70 + 1210.5,
                    ]}
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
                        <strong>{marker.name.en_US}</strong><br />
                        <!-- {marker.description} -->
                        <small style="color: var(--text2)"
                            >{marker.coords}</small
                        >
                    </Popup>
                </Marker>
            {/each}
        {/if}
    </LeafletMap>
{/if}
