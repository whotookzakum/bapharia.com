<script>
    import { userLocale } from "$lib/stores";
    export let data = {};
    let imgSrc; // = "/UI/Icon/ItemL/UI_Icon_NoData.png";
    let width = 256,
        height = 256;

    if (data.assets?.iconL) {
        imgSrc = data.assets.iconL;
    } else if (data.assets?.icon) {
        imgSrc = data.assets.icon;
        width = 64;
        height = 64;
    }

    $: hasValidSalePrice = !data.no_sale_flag && data.price_player_sells;
    $: hasValidBuyPrice =
        data.price_player_buys &&
        data.price_player_buys !== 99999 &&
        data.price_player_buys !== 1 &&
        data.price_player_buys !== 999999999;

    let modelViewer;
</script>

<model-viewer
    alt=""
    src="/Game/Character/Weapon/WP/WP05/SK_CH_WP05_AF01/Model/SK_CH_WP05_AF01.gltf"
    ar
    poster={imgSrc}
    shadow-intensity="1"
    camera-controls
    touch-action="pan-y"
    style=""
    class="surface rounded-2xl relative w-full grid resize min-w-[300px] min-h-[300px] overflow-hidden mt-4 max-w-full"
    reveal="manual"
    bind:this={modelViewer}
>
    <img
        src={imgSrc}
        class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        slot="poster"
        alt=""
        {width}
        {height}
        loading="lazy"
    />
    <button
        id="button-load"
        class="surface2 text2 hover-text1 hover-surface3 active-surface1 py-1 px-2 rounded-md transition-bob-down absolute right-2 top-2 font-semibold"
        style="font-size: var(--step--1)"
        slot="poster"
        on:click={() => modelViewer.dismissPoster()}>Load 3D Model</button
    >
</model-viewer>

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

    {#if data.text.desc && data.imagine_type !== 1}
        <h3>Description</h3>
        <p>{data.text.desc}</p>
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
                class="inline"
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
                class="inline"
            />
        </p>
    {/if}

    <!-- {#if data.item_exp > 0}
            <p>Item EXP {data.item_exp}</p>
        {/if} -->

    {#if data.dungeon_only}
        <p style:color="var(--accent1)">Dungeon-only item</p>
    {/if}
</div>

<style lang="scss">
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
        margin: 0;
        // color: var(--text2);
        // font-style: italic;
        // background: var(--bg);
        // padding: 1rem;
    }

    // Model viewer

    #lazy-load-poster {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: url("../../assets/poster-damagedhelmet.webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
