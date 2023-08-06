<script>
    import { Description, LargeImage } from "../../../components";
    export let data
</script>

<Description text={data.desc} />
<LargeImage imgSrc={data.thumb.replace("Costume", "CostumeL")} />