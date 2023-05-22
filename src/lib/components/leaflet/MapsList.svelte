<script>
    import mapsData from "./maps.json";

    const maps = {
        cities: mapsData.filter((map) => map.map_id.includes("Cty")),
        fields: mapsData.filter(
            (map) =>
                map.map_id.includes("Fld") && map.map_id.split("_").length < 2
                && (map.map_id.includes("Fld001") || map.map_id.includes("Fld002"))
        ),
        // dungeons: mapsData.filter(
        //     (map) => map.map_id.includes("dng") || map.map_id.includes("pat")
        // ),
    };

    let selectedTab = "cities";
</script>

<div class="tab-selector flex">
    {#each Object.keys(maps) as category}
        <input
            type="radio"
            class="visually-hidden style-next-label"
            id="toggle-map-{category}"
            value={category}
            bind:group={selectedTab}
        />
        <label for="toggle-map-{category}">{category}</label>
    {/each}
</div>

<ul class="maps-list" role="list">
    {#each maps[selectedTab] as map}
        <li class="selection-box">
            <img
                src="/images/MapImage/UI_{map.mapImages[0].split("UI_")[1]}"
                alt=""
                width="192"
                height="108"
                loading="lazy"
            />
            <a href={`/map?zone=${map.map_id.split("_")[0]}`}>{map.name_en}</a>
        </li>
    {/each}
</ul>

<style lang="scss">
    ul.maps-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
        gap: 0.5rem;

        li.selection-box {
            position: relative;
            gap: 0.5rem;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    a {
        line-height: 1.4;
        border: none;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
        }
    }

    .tab-selector label {
        background: var(--surface2);
        padding: 0.5rem;
    }

    input[type="radio"]:checked + label {
        color: var(--accent);
    }
</style>
