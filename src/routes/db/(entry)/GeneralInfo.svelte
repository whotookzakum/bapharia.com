<script>
    import { userLocale } from "$lib/stores";
    export let data = {};
    export let imgWidth = 256;
    export let imgHeight = 256;

    // TODO: refactor this to split the string and append "L"
    $: imgSrc = data.thumb
        ?.replace("Icon/Item", "Icon/ItemL")
        .replace("Icon/Weapon", "Icon/WeaponL")
        .replace("Imagine/Battle", "Imagine/BattleL")
        .replace("Imagine/Picture", "Imagine/PictureL")
        .replace("/Costume", "/CostumeL")
        .replace("Icon/Token", "Icon/TokenL");

    $: hasValidSalePrice = !data.no_sale_flag && data.price_player_sells
    $: hasValidBuyPrice = data.price_player_buys && data.price_player_buys !== 99999 && data.price_player_buys !== 1 && data.price_player_buys !== 999999999
</script>

<h2>Basic Info</h2>
<div class="box flex g-50">
    <!-- <img
        src={imgSrc}
        on:error={(e) => e.target.src = "/UI/Icon/ItemL/UI_Icon_NoData.png"}
        alt=""
        width={imgWidth}
        height={imgHeight}
        loading="lazy"
    /> -->
    <div class="text-col grid">

        {#if data.sourceDesc && !["-", "非公開"].includes(data.sourceDesc.ja_JP)}
            <h3>Source</h3>
            <p>{data.sourceDesc[$userLocale]}</p>
        {/if}

        {#if data.effectDesc && data.effectDesc.ja_JP !== "-"}
            <h3>Effect</h3>
            <p>{data.effectDesc[$userLocale]}</p>
        {/if}

        {#if data.item_recast_time}
            <h3>Cooldown</h3>
            <p>{data.item_recast_time} seconds</p>
        {/if}

        {#if data.imagine_type === 1}
            <h3>Skill</h3>
            {#if data.imagineSkill.name}
                <strong>{data.imagineSkill.name[$userLocale]}</strong>
            {/if}
            <p>{data.desc[$userLocale]}</p>
        {/if}

        {#if data.desc && data.imagine_type !== 1}
            <h3>Description</h3>
            <blockquote>{data.desc[$userLocale]}</blockquote>
        {/if}

        {#if hasValidSalePrice || hasValidBuyPrice}
            <h3>Price</h3>
        {/if}

        {#if hasValidBuyPrice}
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

        {#if hasValidSalePrice}
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
        {/if}

        <!-- {#if data.item_exp > 0}
            <p>Item EXP {data.item_exp}</p>
        {/if} -->

        {#if data.dungeon_only}
            <p style:color="var(--accent)">Dungeon-only item</p>
        {/if}
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
        font-size: var(--step-0);
        max-inline-size: none;
    }

    h3 {
        font-size: var(--step-1);

        &:first-of-type {
            margin-top: 0;
        }
    }

    blockquote {
        line-height: 1.75;
        // color: var(--text2);
        // font-style: italic;
        margin: 0;
        // background: var(--bg);
        // padding: 1rem;
        // border-radius: 9px;
    }
</style>
