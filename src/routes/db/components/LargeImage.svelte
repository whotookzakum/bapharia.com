<script>
    export let imgSrc
    export let width = 256
    export let height = 256
    export let fullWidth = false;
    export let noHeader = false;
</script>

{#if !noHeader}
    <h4>Graphic</h4>
{/if}
<img class:fullWidth src={imgSrc} alt="" {width} {height}>

<style lang="scss">
    img {
        margin: auto;
        display: block;
    }
    .fullWidth {
        width: 100%;
        height: auto;
    }
</style>