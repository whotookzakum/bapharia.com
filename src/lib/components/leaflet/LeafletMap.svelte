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
	import { onMount, onDestroy } from "svelte";
	import icons from "./icons.json";
	import "leaflet/dist/leaflet.css";
	import SearchParams from "./SearchParams.svelte";
	let searchParams;

	// rewrite as dynamic import
	import asterleeds from "./Asterleeds.json";
	import asteriaplain from "./MapFld001.json";
	import bahamarhighlands from "./MapFld002.json";
	import MapControls from "./MapControls.svelte";

	let leafletMapElement;
	let leafletMap;

	onMount(async () => {
		const L = await import("leaflet");



		let selectedMap = await import("./MapFld001.json")

		// https://github.com/whotookzakum/toweroffantasy.info/blob/379d45d042698bf7e9f1c1ad80f6bf49cfca6b9c/scripts/map.js

		const bounds = [
			[0, 0], // padding
			[1080, 1920], // image dimensions
		];

		// L.CRS.Simple is a simple CRS that maps longitude and latitude into `x` and `y` directly. May be used for maps of flat surfaces (e.g. game maps).
		const leafletMapOptions = {
			crs: L.CRS.Simple,
			minZoom: -1,
			maxZoom: 2,
			maxBounds: bounds,
			maxBoundsViscosity: 1.0,
			zoomControl: false,
		};

		// Create map
		leafletMap = L.map(leafletMapElement, leafletMapOptions);

		// Used to load and display a single image over specific bounds of the map. Extends `Layer`.
		L.imageOverlay(selectedMap.imgSrc, bounds).addTo(leafletMap);

		// fitBounds() sets a map view that contains the given geographical bounds with the maximum zoom level possible.
		// leafletMap.fitBounds(bounds);

		// setView manually sets view to specific coordinates with a specified zoom level
		leafletMap.setView([bounds[1][0] / 2, bounds[1][1] / 2], 0);

		addMarkers(selectedMap.markers);
		addLabels(selectedMap.labels);
	});

	function addMarkers(markerList) {
		markerList.forEach(({ category, coords, zIndex, description }) => {
			const icon = icons.find((icon) => icon.name === category);

			const marker = L.marker(coords, { icon: L.icon(icon) })
				.setZIndexOffset(zIndex)
				.bindPopup(
					`<strong>${category}</strong>
						<br>
						${description || ""}`
				)
				.on("popupopen", () => searchParams.set("marker", description))
				.on("popupclose", () => searchParams.clear("marker"))
				.addTo(leafletMap);

			const markerFromUrl = searchParams.get("marker");
			if (description === markerFromUrl) {
				marker.openPopup();
			}
		});
	}

	function addLabels(labelList) {
		labelList.forEach(({ coords, text }) => {
			L.marker(coords, { opacity: 0 })
				.bindTooltip(text, {
					direction: "bottom",
					permanent: true,
					className: "map-zone-label",
					opacity: 1,
				})
				.setZIndexOffset(-100)
				.addTo(leafletMap);
		});
	}

	onDestroy(async () => {
		if (leafletMap) {
			console.log("Unloading Leaflet map.");
			leafletMap.remove();
		}
	});
</script>

<SearchParams bind:this={searchParams} />
<MapControls />

<div class="leaflet-map" bind:this={leafletMapElement} />

<style global lang="scss">
	.leaflet-map {
		width: 100vw;
		height: 100vh;
		background-image: url("/images/map/mapbg.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;
		cursor: inherit !important;
	}
</style>
