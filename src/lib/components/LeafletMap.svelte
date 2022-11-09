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
				[1080, 1920] // image dimensions
			];

			// L.CRS.Simple is a simple CRS that maps longitude and latitude into `x` and `y` directly. May be used for maps of flat surfaces (e.g. game maps).
			const mapOptions = {
				crs: L.CRS.Simple,
				minZoom: -1,
				maxZoom: 1,
				maxBounds: bounds,
				maxBoundsViscosity: 1.0
			};

			// Create map
			map = L.map(mapElement, mapOptions);

			// Used to load and display a single image over specific bounds of the map. Extends `Layer`.
			L.imageOverlay('/images/map/maps/UI_MapCty001.png', bounds).addTo(map);

			// fitBounds() sets a map view that contains the given geographical bounds with the maximum zoom level possible.
			// map.fitBounds(bounds);

			// setView manually sets view to specific coordinates with a specified zoom level
			map.setView([bounds[1][0] / 2, bounds[1][1] / 2], 0)

			// Define a custom icon
			const iconWarpGate = L.icon({
				iconUrl: '/images/map/markers/UI_Map_12.png',
				iconSize: [64, 64],
				iconAnchor: [32, 32],
				popupAnchor: [0, -24]
			});

			const icons = [
				{
					name: 'Elite Monster',
					iconUrl: '/images/map/markers/UI_Map_04.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Weapon Shop',
					iconUrl: '/images/map/markers/UI_Map_07.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Potion Shop',
					iconUrl: '/images/map/markers/UI_Map_09.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Warp Gate',
					iconUrl: '/images/map/markers/UI_Map_12.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Crafting Machine',
					iconUrl: '/images/map/markers/UI_Map_19.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Exchange',
					iconUrl: '/images/map/markers/UI_Map_20.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Storage',
					iconUrl: '/images/map/markers/UI_Map_40.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Class Master',
					iconUrl: '/images/map/markers/UI_Map_65.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Weapon Reconstructor',
					iconUrl: '/images/map/markers/UI_Map_67.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Unknown_1',
					iconUrl: '/images/map/markers/UI_Map_69.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Imagine Research Institute',
					iconUrl: '/images/map/markers/UI_Map_71.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				},
				{
					name: 'Liquid Memory Stand',
					iconUrl: '/images/map/markers/UI_Map_72.png',
					iconSize: [64, 64],
					iconAnchor: [32, 32],
					popupAnchor: [0, -24]
				}
			];

			const markers = [
				{
					category: 'Warp Gate',
					coords: [550, 829],
					description: 'City Gate Square'
				},
				{
					category: 'Warp Gate',
					coords: [313, 773],
					description: 'Asterleeds Beach'
				},
				{
					category: 'Warp Gate',
					coords: [268, 977],
					description: 'Revolving Helm Pavilion'
				},
				{
					category: 'Warp Gate',
					coords: [492, 1075],
					description: 'Frontiering Station'
				},
				{
					category: 'Warp Gate',
					coords: [370, 1075],
					description: 'The Double-Faced Coin'
				},
				{
					category: 'Warp Gate',
					coords: [352, 1208],
					description: 'Arena Entrance'
				},
				{
					category: 'Warp Gate',
					coords: [547, 1277],
					description: 'Shrine Entrance'
				},
				{
					category: 'Warp Gate',
					coords: [615, 953],
					description: 'Coat of Arms Plaza'
				},
				{
					category: 'Warp Gate',
					coords: [760, 954],
					description: 'Asterleeds Port'
				},
				{
					category: 'Imagine Research Institute',
					coords: [393, 1091]
				},
				{
					category: 'Crafting Machine',
					coords: [620, 1043]
				},
				{
					category: 'Crafting Machine',
					coords: [628, 1051]
				},
				{
					category: 'Weapon Reconstructor',
					coords: [731, 1073]
				},
				{
					category: 'Weapon Reconstructor',
					coords: [449, 1075]
				},
				{
					category: 'Weapon Reconstructor',
					coords: [218, 1011]
				},
				{
					category: 'Class Master',
					coords: [593, 1273]
				},
				{
					category: 'Liquid Memory Stand',
					coords: [347, 798]
				},
				{
					category: 'Liquid Memory Stand',
					coords: [287, 1198]
				},
				{
					category: 'Liquid Memory Stand',
					coords: [663, 988]
				},
				{
					category: 'Exchange',
					coords: [525, 1135],
					zIndex: 140
				},
				{
					category: 'Potion Shop',
					coords: [425, 1217]
				},
				{
					category: 'Weapon Shop',
					coords: [387, 1233]
				},
				{
					category: 'Storage',
					coords: [404, 1085]
				},
				{
					category: 'Storage',
					coords: [488, 1139]
				},
				{
					category: 'Storage',
					coords: [720, 929]
				},
				{
					category: 'Storage',
					coords: [583, 1021]
				},
				{
					category: 'Storage',
					coords: [324, 1088]
				},
				{
					category: 'Storage',
					coords: [228, 980]
				},
				{
					category: 'Unknown_1',
					coords: [522, 1131]
				}
			];

			markers.forEach((marker) => {
				const icon = icons.find((icon) => icon.name === marker.category);

				L.marker(marker.coords, { icon: L.icon(icon) })
					.addTo(map)
					.setZIndexOffset(marker.zIndex)
					.bindPopup(
						`<strong>${marker.category}</strong>
						<br>
						${marker.description || ''}`
					);
			});
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
		cursor: inherit;
	}
	
</style>
