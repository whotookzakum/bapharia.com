<script>
    import { Description, LargeImage } from "./sections";
    export let data
</script>

<Description text={data.desc} />
<LargeImage imgSrc={data.thumb.replace("Token", "TokenL")} />