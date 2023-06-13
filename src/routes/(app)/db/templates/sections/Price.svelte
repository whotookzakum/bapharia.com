<script>
    import LunoIcon from "./LunoIcon.svelte";

    export let sellPrice = null;
    export let buyPrice = null;
    export let no_sale_flag = null;
</script>

<div class="grid">
    {#if !no_sale_flag && sellPrice}
        <p class="border-left">Sells for {sellPrice} <LunoIcon /></p>
    {/if}
    {#if buyPrice && buyPrice !== 99999 && buyPrice !== 1 && buyPrice !== 999999999}
        <p class="border-left">Buy for {buyPrice} <LunoIcon /></p>
    {/if}
</div>
