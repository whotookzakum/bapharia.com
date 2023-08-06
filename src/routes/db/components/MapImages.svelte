<script>
    export let images
</script>

<h4>Map Images</h4>
{#each images as image}
    <img src={image} alt="" width="192" height="108">
{/each}

<style>
    img {
        width: 50%;
        height: auto;
    }
</style>