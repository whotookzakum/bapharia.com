<script>
    import { userLocale } from "$lib/stores";
    export let imgSrc

    const texts = {
        "1": {
            ja_JP: "三葉",
            en_US: "Trileaf"
        },
        "2": {
            ja_JP: "山岳",
            en_US: "Summit" // Mountain Chain
        },
        "3": {
            ja_JP: "矢尻",
            en_US: "Arrowhead"
        },
        "4": {
            ja_JP: "風車",
            en_US: "Windmill"
        },
        "5": {
            ja_JP: "水瓶",
            en_US: "Vessel" // Water jug,
        }
    }
    $: slotId = texts[imgSrc.split("Icon2_").pop().split(".png")[0]]
</script>

<h4>Slot</h4>
<div class="border-left flex g-50">
    <img src={imgSrc} alt="" width="32" height="32" />
    <p>{slotId[$userLocale]}</p>
</div>

<style lang="scss">
    .border-left {
        margin: 0.25rem 0;
        padding: 0 1rem;
        border-left: 6px solid var(--surface3);
        align-items: center;
    }
</style>