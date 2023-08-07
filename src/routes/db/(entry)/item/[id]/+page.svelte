<script>
    import {
        Description,
        Source,
        Effect,
        Price,
        ItemExp,
        AdventurerRank,
        LargeImage,
        GeneralInfo
    } from "../../../components";
    export let data;
    console.log(data)
</script>



{#if !["-", "非公開"].includes(data.sourceDesc.ja_JP)}
    <Source text={data.sourceDesc} />
{/if}

<h4>Misc</h4>
{#if data.dungeon_only}
    <p class="border-left">Dungeon-only item</p>
{/if}

<Price
    no_sale_flag={data.no_sale_flag}
    sellPrice={data.price_player_sells}
    buyPrice={data.price_player_buys}
/>
{#if data.adventurer_rank > 0}
    <AdventurerRank value={data.adventurer_rank} />
{/if}
{#if data.item_exp > 0}
    <ItemExp value={data.item_exp} />
{/if}


