<script>
    import { userLocale } from "$lib/stores";
    import mapsData from "./maps.json";

    const mapCategories = ["City", "Field", "Dungeon"];

    function getMaps(category) {
        return mapsData.filter((map) => map.category === category);
    }
</script>

{#each mapCategories as category}
    {#if getMaps(category).length > 0}
        <span>{category}</span>
        <ul class="maps-list" role="list">
            {#each getMaps(category) as map}
                <li class="selection-box">
                    <!-- <img
                        src="/images/MapImage/UI_{map.mapImages[0].split('UI_')[1]}"
                        alt=""
                        width="192"
                        height="108"
                        loading="lazy"
                    /> -->
                    <a href={`/map?zone=${map.map_id.split("_")[0]}`}>{map.name[$userLocale]}</a>
                </li>
            {/each}
        </ul>
    {/if}
{/each}



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

    span {
        text-transform: capitalize;
        font-size: var(--step-1);
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
</style>
