<script>
    import maps from "$lib/maps.json";
</script>

<main>
    <h1>Maps</h1>
    {#each maps as map}
        <div class="box surface">
            <div class="grid">
                <h5>{map.name_en || map.name_translated}</h5>
                <div>{map.id} {map.map_id}</div>
            </div>
            {#if map.mapImage}
                <img src={map.mapImage} alt="" class="map-image">
            {/if}
            {#if map.mapImages}
                {#each map.mapImages as mapImage}
                    <img src={mapImage} alt="" class="map-image">
                {/each}
            {/if}
        </div>
    {/each}
</main>

<style lang="scss">
    main {
        margin: auto;
        max-width: 65ch;
        display: grid;
        gap: 0.5rem;
    }

    .map-image {
        max-width: 100%;
    }

    h5 {
        margin: 0;
    }
</style>
