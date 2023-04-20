<script>
    import LunoIcon from "./LunoIcon.svelte";

    export let sellPrice = null;
    export let buyPrice = null;
    export let no_sale_flag = null;
</script>

<div class="grid g-25">
    {#if !no_sale_flag && sellPrice}
        <p>Sells for {sellPrice} <LunoIcon /></p>
    {/if}
    {#if buyPrice && buyPrice !== 99999 && buyPrice !== 1 && buyPrice !== 999999999}
        <p>Buy for {buyPrice} <LunoIcon /></p>
    {/if}
</div>

<style lang="scss">
    .grid {
        margin: 0.25rem 0;
        padding: 0 1rem;
        border-left: 6px solid var(--surface3);
    }
</style>
