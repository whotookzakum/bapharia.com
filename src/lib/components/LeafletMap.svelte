<!-- 
    MAP MVP

    1. display map
    2. get data: map tiles, markers, i18n
    3. map data from url
        - cache settings locally => load into url if cache exists; if custom URL, overwrite cache?
            {REGION_NAME, [LNG, LAT], CURRENT_MARKER?, FILTERS}
        - defaults to Asterleeds
        - updates based on LNG/LAT, current open marker
            e.g. bapharia.com/map/asterleeds/80.37829,-19.7389/marker-1
        - copy link button
    4. filters
    
 -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let mapElement;
	let map;

	onMount(async () => {
		if (browser) {
			const L = await import('leaflet');

			// https://github.com/whotookzakum/toweroffantasy.info/blob/379d45d042698bf7e9f1c1ad80f6bf49cfca6b9c/scripts/map.js

			const bounds = [
				[0, 0], // padding
				[824, 1634] // image dimensions
			];

			// L.CRS.Simple is a simple CRS that maps longitude and latitude into `x` and `y` directly. May be used for maps of flat surfaces (e.g. game maps).
			const mapOptions = {
				crs: L.CRS.Simple,
				minZoom: -2,
				maxZoom: 1,
				maxBounds: bounds,
				maxBoundsViscosity: 1.0
			};

			// Create map
			map = L.map(mapElement, mapOptions);

			// Used to load and display a single image over specific bounds of the map. Extends `Layer`.
			L.imageOverlay('/images/map/UI_MapCty001.png', [
				[0, 0],
				[824, 1634]
			]).addTo(map);

			// fitBounds() sets a map view that contains the given geographical bounds with the maximum zoom level possible.
			map.fitBounds(bounds);

			// Define a custom icon
			const warpGate = L.icon({
				iconUrl: '/images/map/UI_Map_12.png',
				shadowUrl: '',

				iconSize: [64, 64], // size of the icon
				shadowSize: [50, 64], // size of the shadow
				iconAnchor: [32, 32], // point of the icon which will correspond to marker's location
				shadowAnchor: [4, 62], // the same for the shadow
				popupAnchor: [0, -24] // point from which the popup should open relative to the iconAnchor
			});

			// Add marker
			L.marker([467, 576], {icon: warpGate}).addTo(map)
				// .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
				// .openPopup();

			// Warp points
			L.marker([230, 520], {icon: warpGate}).addTo(map)
			L.marker([185, 724], {icon: warpGate}).addTo(map)
			L.marker([409, 822], {icon: warpGate}).addTo(map)
			L.marker([287, 822], {icon: warpGate}).addTo(map)
			L.marker([269, 955], {icon: warpGate}).addTo(map)
			L.marker([464, 1024], {icon: warpGate}).addTo(map)
			L.marker([532, 700], {icon: warpGate}).addTo(map)
			L.marker([677, 701], {icon: warpGate}).addTo(map)
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<div class="leaflet-map" bind:this={mapElement} />

<style>
	@import 'leaflet/dist/leaflet.css';

	.leaflet-map {
		width: 100%;
		height: 100%;
		background-image: url('/images/map/mapbg.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;
	}
</style>
