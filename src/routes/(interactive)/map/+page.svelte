<script>
    import { browser } from "$app/environment";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { onMount } from "svelte";
    // import LeafletMap from "$lib/components/leaflet/LeafletMap.svelte";
    import { LeafletMap, TileLayer } from "svelte-leafletjs?client";
	import "leaflet/dist/leaflet.css";


    let leafletMap;

    const mapOptions = {
        center: [1.364917, 103.822872],
        zoom: 11,
    };
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19,
        attribution: "© OpenStreetMap contributors",
    };
</script>

<MetaTags
    title={`World Map — Bapharia`}
    description={`Interactive map for BLUE PROTOCOL. Find enemies, locations, quests, treasure chests, gathering spots, and more!`}
/>
<!-- <LeafletMap/> -->

<div class="leaflet-wrapper">
    {#if browser}
        <LeafletMap bind:this={leafletMap} options={mapOptions}>
            <TileLayer url={tileUrl} options={tileLayerOptions} />
        </LeafletMap>
    {/if}
</div>

<style lang="scss">
	.leaflet-wrapper {
		height: 100%;
		background-image: url("/images/map/mapbg.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;
		cursor: inherit !important;
		outline: none !important;
	}
</style>