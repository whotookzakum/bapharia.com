<script>
    import { MapImages } from "./sections";
    export let data
</script>

<!-- <a href={`/map?map=${data.id.split("_")[0]}`}>View on map</a> -->
<MapImages images={data.mapImages} />