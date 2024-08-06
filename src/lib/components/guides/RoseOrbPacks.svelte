<script>
    import _ from "lodash";
    import { platformId, currency } from "$lib/stores";
    import { assetUrl } from "$lib/utils"

    export let releaseSales = false;

    // shop_realmoney_item.json
    const ALL_PACKS = [
        {
            platform: 1,
            price: 100,
            amount_paid: 10,
            amount_free: 0,
        },
        {
            platform: 1,
            price: 300,
            amount_paid: 30,
            amount_free: 0,
        },
        {
            platform: 1,
            price: 500,
            amount_paid: 50,
            amount_free: 0,
        },
        {
            platform: 1,
            price: 1000,
            amount_paid: 100,
            amount_free: 0,
        },
        {
            platform: 1,
            price: 2000,
            amount_paid: 220,
            amount_free: 10,
        },
        {
            platform: 1,
            price: 3000,
            amount_paid: 330,
            amount_free: 30,
        },
        {
            platform: 1,
            price: 4000,
            amount_paid: 460,
            amount_free: 60,
        },
        {
            platform: 1,
            price: 5000,
            amount_paid: 610,
            amount_free: 90,
        },
        {
            platform: 1,
            price: 10000,
            amount_paid: 1350,
            amount_free: 200,
        },
        {
            platform: 1,
            price: 3000,
            amount_paid: 495,
            amount_free: 45,
            limit_count: 1
        },
        {
            platform: 1,
            price: 5000,
            amount_paid: 915,
            amount_free: 100,
            limit_count: 1
        },
        {
            platform: 1,
            price: 10000,
            amount_paid: 2025,
            amount_free: 200,
            limit_count: 1
        },
    ];

    $: PACKS = ALL_PACKS.filter(
        (pack) =>
            pack.platform === $platformId &&
            (releaseSales ? pack.limit_count : !pack.limit_count)
    );

    $: getPrice = (pack) => {
        return pack.price * $currency.rate;
    };

    $: getPricePerOrb = (pack) => {
        return getPrice(pack) / (pack.amount_paid + pack.amount_free);
    };
</script>

<div class="rose-orb-packs grid full-bleed">
    {#each PACKS as pack}
        <div class="box">
            <div class="amount flex gap-2">
                <img
                    src={assetUrl("/UI/Gasha/UI_GashaBtnIconRoseOrb.webp")}
                    alt="Rose Orb"
                    width="24"
                    height="24"
                />
                {pack.amount_paid}
                {#if pack.amount_free}
                    <small>+{pack.amount_free}</small>
                {/if}
            </div>
            <hr />
            <div class="price">
                {$currency.symbol + getPrice(pack).toFixed($currency.decimals)}
                <sub>{getPricePerOrb(pack).toFixed(3)}/orb</sub>
            </div>
            {#if pack.limit_count}
                <small>Stock: {pack.limit_count}</small>
                <br />
            {/if}
            <!-- {#if pack.end_date}
                <small>
                    Sale end date:
                    {new Date(pack.end_date).toLocaleDateString()}
                </small>
            {/if} -->
        </div>
    {/each}
</div>

<style lang="scss">
    .rose-orb-packs {
        gap: 1rem;
        padding: 0 1rem;
        grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    }

    .amount {
        font-size: var(--step-0);
        align-items: center;
    }

    .price {
        font-size: var(--step-0);
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.5rem;
    }

    sub {
        font-style: italic;

        &::before {
            content: "(";
        }

        &::after {
            content: ")";
        }
    }
</style>
