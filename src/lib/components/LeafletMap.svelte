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
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

			// leaflet
			// 	.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			// 		attribution:
			// 			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			// 	})
			// 	.addTo(map);
            leaflet
                .imageOverlay('/images/map/UI_MapCty001.png', [[0, 0], [1634, 824]])
                .addTo(map);

			leaflet
				.marker([51.5, -0.09])
				.addTo(map)
				.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
				.openPopup();
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
    }
</style>
