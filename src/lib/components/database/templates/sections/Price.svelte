<script>
    import LunoIcon from "./LunoIcon.svelte";

    export let sellPrice, buyPrice;
    export let no_sale_flag = null;
</script>

<div class="grid g-50">
    {#if !no_sale_flag && sellPrice}
        <div>Sells for {sellPrice} <LunoIcon /></div>
    {/if}
    {#if buyPrice && buyPrice !== 99999 && buyPrice !== 1 && buyPrice !== 999999999}
        <div>Buy for {buyPrice} <LunoIcon /></div>
    {/if}
</div>

<style lang="scss">
    .grid {
        grid-template-columns: 1fr 1fr;
        // padding-bottom: 1rem;
        // border-bottom: 1px solid var(--surface3);
    }
</style>
