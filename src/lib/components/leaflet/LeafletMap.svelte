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
	// import L from "leaflet";
	import { page } from "$app/stores";
	let searchParams;

	// rewrite as dynamic import
	import MapControls from "./MapControls.svelte";
    import MetaTags from "../MetaTags.svelte";
    import { userLocale } from "$lib/stores";

	let leafletMapElement;
	let leafletMap;
	let mapData = getMapData("Cty001");

	let mapId;

	async function getMapData(id) {
		let result = await import(`./maps/${id}.json`);
		return result
	}

	onMount(async () => {
		// const L = await import("leaflet");
		
		mapData = await import(`./maps/${$page.url.searchParams.get("map")}.json`);

		// https://github.com/whotookzakum/toweroffantasy.info/blob/379d45d042698bf7e9f1c1ad80f6bf49cfca6b9c/scripts/map.js

		const bounds = [
			[0, 0], // padding
			[1080, 1920], // image dimensions
		];

		// L.CRS.Simple is a simple CRS that maps longitude and latitude into `x` and `y` directly. May be used for maps of flat surfaces (e.g. game maps).
		const leafletMapOptions = {
			crs: L.CRS.Simple,
			minZoom: -1, // -1
			maxZoom: 2, // 2  
			maxBounds: bounds,
			maxBoundsViscosity: 1.0,
			zoomControl: false,
		};

		// Create map
		leafletMap = L.map(leafletMapElement, leafletMapOptions);

		// Used to load and display a single image over specific bounds of the map. Extends `Layer`.
		L.imageOverlay(mapData.imgSrc, bounds).addTo(leafletMap);

		// fitBounds() sets a map view that contains the given geographical bounds with the maximum zoom level possible.
		leafletMap.fitBounds(bounds);

		// setView manually sets view to specific coordinates with a specified zoom level
		leafletMap.setView([bounds[1][0] / 2, bounds[1][1] / 2], 0); // zoom level 0

		addMarkers(mapData.markers);
		addLabels(mapData.labels);
	});

	function createMarker({ category, coords, zIndex, description }) {
		const icon = { icon: L.icon(icons[category]) };

		// Rotate 90 deg clockwise (-y, x)
		const convertedCoords = 
			[
				-coords[1] / 70 + 586.5, 
				coords[0] / 70 + 1210.5
			]

		const marker = L.marker(convertedCoords, icon)
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

		return marker;
	}

	function addMarkers(data) {
		if (!data) return;
		const overlayOptions = {};
		const categories = Object.keys(data);

		// Group markers by their category
		categories.forEach((category) => {
			if (data[category].length > 0) {
				// Turn marker data into Leaflet Markers
				const markers = data[category].map((marker) => createMarker(marker));

				// Group markers in category into a single layer with LayerGroup and add to map
				const layer = L.layerGroup(markers).addTo(leafletMap);

				// Add to list of controls
				overlayOptions[category] = layer;
			}
		});

		// Add all layers to layer controls
		L.control.layers(null, overlayOptions).addTo(leafletMap);
	}

	function addLabels(labelList) {
		if (!labelList) return;
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

{#if mapData}
	<!-- <MetaTags title={`${mapData.name[$userLocale]} — Bapharia`} description={`Interactive map for the zone ${mapData.name[$userLocale]} in BLUE PROTOCOL.`} /> -->
{/if}

<SearchParams bind:this={searchParams} />
<MapControls />

<h1>{mapId} {searchParams?.get("map")}</h1>
<div class="leaflet-map" bind:this={leafletMapElement} />

<style lang="scss">
	.leaflet-map {
		height: 100%;
		background-image: url("/images/map/mapbg.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;
		cursor: inherit !important;
		outline: none !important;
	}
</style>
