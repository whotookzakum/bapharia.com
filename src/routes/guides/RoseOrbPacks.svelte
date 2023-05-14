<script>
    import ALL_PACKS from "./apiext_shop_realmoney_item.json";
    import _ from "lodash";
    import { platformId, currency } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import CurrencyOptions from "./CurrencyOptions.svelte";
    import PlatformOptions from "./PlatformOptions.svelte";

    export let releaseSales = false;

    $: PACKS = ALL_PACKS.filter(
        (pack) =>
            pack.platform === $platformId &&
            (releaseSales ? pack.end_date : !pack.end_date)
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
            <div class="amount skip-std flex g-50">
                <img
                    src="/UI/Gasha/UI_GashaBtnIconRoseOrb.png"
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
            {#if pack.end_date}
                <small>
                    Sale end date:
                    {new Date(pack.end_date).toLocaleDateString()}
                </small>
            {/if}
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
