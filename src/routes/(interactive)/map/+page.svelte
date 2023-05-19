<script>
    // https://github.com/ngyewch/svelte-leaflet/issues/3#issuecomment-1170333938
    import { browser } from "$app/environment";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { LeafletMap, ImageOverlay } from "svelte-leafletjs?client";
    import "leaflet/dist/leaflet.css";
    import MapControls from "$lib/components/leaflet/MapControls.svelte";
    import L from "leaflet?client";
    import { page } from "$app/stores";
    import "./styles.scss";
    import { userLocale } from "$lib/stores";
    let leafletMap;
    export let data;
    $: zone = data.zone;

    const bounds = [
        [0, 0],
        [1080, 1920],
    ];

    const mapOptions = {
        crs: browser ? L.CRS.Simple : null,
        center: [bounds[1][0] / 2, bounds[1][1] / 2],
        zoom: 0,
        minZoom: -1,
        maxZoom: 2,
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
{#if browser}
    <MetaTags
        title={`${zone.name[$userLocale]} — Bapharia`}
    />
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
    </LeafletMap>
{/if}
