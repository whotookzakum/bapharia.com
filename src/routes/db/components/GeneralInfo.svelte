<script>
    import { userLocale } from "$lib/stores";
    export let data = {};
    export let imgWidth = 256;
    export let imgHeight = 256;

    $: imgSrc = data.thumb
        ?.replace("Item", "ItemL")
        .replace("Weapon", "WeaponL");
</script>

<h2>Basic Info</h2>
<div class="box flex g-50">
    <img
        src={imgSrc}
        alt=""
        width={imgWidth}
        height={imgHeight}
        loading="lazy"
    />
    <div class="text-col grid g-25">
        {#if data.effectDesc && data.effectDesc.ja_JP !== "-"}
            <p>{data.effectDesc[$userLocale]}</p>
            <hr />
        {/if}
        {#if data.price_player_buys && data.price_player_buys !== 99999 && data.price_player_buys !== 1 && data.price_player_buys !== 999999999}
            <p>
                Buy for {data.price_player_buys.toLocaleString()}
                <img
                    src="/UI/Common/UI_CmnMoney1.png"
                    alt="Luno"
                    width="24"
                    height="24"
                    style="margin: -7px -4px; width: unset;"
                />
            </p>
        {/if}
        {#if !data.no_sale_flag && data.price_player_sells}
            <p>
                Sells for {data.price_player_sells.toLocaleString()}
                <img
                    src="/UI/Common/UI_CmnMoney1.png"
                    alt="Luno"
                    width="24"
                    height="24"
                    style="margin: -7px -4px; width: unset;"
                />
            </p>
            <hr />
        {/if}
        <blockquote>{data.desc[$userLocale]}</blockquote>
    </div>
</div>

<style lang="scss">
    .box {
        flex-wrap: wrap;
        align-items: start;
        justify-content: center;
    }

    .text-col {
        flex: 1;
        flex-basis: 30ch;
    }

    p {
        margin: 0;
    }

    blockquote {
        line-height: 1.75;
        color: var(--text2);
        font-size: var(--step-1);
        font-style: italic;
        margin: 0;
    }
</style>
