<script>
    export let sellPrice, buyPrice, no_sale_flag;
</script>

{#if !no_sale_flag && sellPrice}
    <div>
        Sells for {sellPrice}
        <img
            src="/UI/Common/UI_CmnMoney1.png"
            alt=""
            width="24"
            height="24"
            style="margin: -7px -4px"
        />
    </div>
{/if}

{#if buyPrice && buyPrice !== 99999 && buyPrice !== 1}
    <div>
        Buy for {buyPrice}
        <img
            src="/UI/Common/UI_CmnMoney1.png"
            alt=""
            width="24"
            height="24"
            style="margin: -7px -4px"
        />
    </div>
{/if}
