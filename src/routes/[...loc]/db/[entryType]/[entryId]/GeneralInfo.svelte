<script>
    import Skill from "$lib/components/Skill"
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

    let loaded = false;

    function handleModelLoaded() {
        loaded = true;
    }

    let selectedAsset = "model";

    function swapModel(e) {
        if (modelViewer.reveal !== "auto") {
            modelViewer.setAttribute("reveal", "auto");
        }
        if (modelViewer.src !== data.assets[e.target.value].Mesh) {
            modelViewer.setAttribute("src", data.assets[e.target.value].Mesh);
        }
    }

    function handleDismissPoster() {
        modelViewer.dismissPoster();
    }
</script>

{#if data.assets}
    <model-viewer
        alt=""
        src={data.assets[selectedAsset]?.Mesh}
        ar
        poster={imgSrc}
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        class="relative w-full min-w-[256px] min-h-[256px] grid overflow-hidden mt-4 mb-4 max-w-full"
        class:resize={data.assets.model?.Mesh}
        style="font-size: var(--step--1);"
        reveal="manual"
        max-field-of-view="60deg"
        min-field-of-view="5deg"
        bind:this={modelViewer}
        on:load={handleModelLoaded}
    >
        {#if data.skill_type}
            <div slot="poster" class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Skill.Icon skill={data} />
            </div>
            {:else}
            <img
                src={imgSrc}
                class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                slot="poster"
                alt=""
                {width}
                {height}
                loading="lazy"
            />
        {/if}
        
        {#if data.assets.model?.Mesh}
            <button
                id="button-load"
                class="absolute right-2 top-2 transition-bob-down"
                slot="poster"
                style="line-height: inherit"
                on:click={handleDismissPoster}>Load 3D Model</button
            >
        {/if}
        {#if loaded}
            <div class="absolute right-2 top-2 grid gap-2">
                <select>
                    <option value="">Animations</option>
                </select>
                {#if data.assets.subweaponModel}
                    <select on:change={swapModel}>
                        <option value="model">Main Weapon</option>
                        <option value="subweaponModel">Sub Weapon</option>
                    </select>
                {/if}
            </div>
        {/if}
    </model-viewer>
{/if}

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
</style>
