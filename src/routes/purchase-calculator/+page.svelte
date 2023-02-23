<script>
    import Icon from "@iconify/svelte";
    import PACKS from "./apiext_shop_realmoney_item.json";
    import _ from "lodash";
    import StickyNote from "$lib/components/StickyNote.svelte";

    const CURRENCIES = [
        {
            name: "Japanese Yen",
            code: "JPY",
            symbol: "¥",
            rate: 1,
            decimals: 0,
        },
        {
            name: "United States Dollar",
            code: "USD",
            symbol: "$",
            rate: 0.0074,
            decimals: 2,
        },
        {
            name: "Euro",
            code: "EUR",
            symbol: "€",
            rate: 0.007,
            decimals: 2,
        },
    ];

    let firstTimePurchase = false;

    let selectedCurrencyCode = "JPY";
    $: selectedCurrency = 
        CURRENCIES.find((c) => c.code === selectedCurrencyCode) 
        || { rate: 1, decimals: 0 };

    

    $: orbPacks = [
        {
            amount: 10,
            bonus: 0,
            price: 100 * selectedCurrency.rate,
        },
        {
            amount: 30,
            bonus: 0,
            price: 300 * selectedCurrency.rate,
        },
        {
            amount: 50,
            bonus: 0,
            price: 500 * selectedCurrency.rate,
        },
        {
            amount: 100,
            bonus: 0,
            price: 1000 * selectedCurrency.rate,
        },
        {
            amount: 220,
            bonus: 10,
            price: 2000 * selectedCurrency.rate,
        },
        {
            amount: 330,
            bonus: 30,
            price: 3000 * selectedCurrency.rate,
        },
        {
            amount: firstTimePurchase ? 495 : 460,
            bonus: firstTimePurchase ? 45 : 60,
            price: 4000 * selectedCurrency.rate,
        },
        {
            amount: firstTimePurchase ? 915 : 610,
            bonus: firstTimePurchase ? 135 : 90,
            price: 5000 * selectedCurrency.rate,
        },
        {
            amount: firstTimePurchase ? 2025 : 1350,
            bonus: firstTimePurchase ? 300 : 200,
            price: 10000 * selectedCurrency.rate,
        },
    ];

    const pricePerOrb = (pack) => {
        const result = pack.price / (pack.amount + pack.bonus);
        return result.toFixed(3);
    };

    const pricePerOrbJP = (pack) => {
        const result = pack.price / (pack.amount_paid + pack.amount_free);
        return result.toFixed(3);
    }
</script>

<main>
    <h1>Purchase Calculator</h1>
    <div class="box">
        {#each CURRENCIES as currency}
            <label>
                <input
                    class="visually-hidde"
                    type="radio"
                    name="currency"
                    value={currency.code}
                    bind:group={selectedCurrencyCode}
                />
                {currency.code}
            </label>
        {/each}
    </div>
    <div class="box">
    </div>

    <div class="rose-orb-packs grid">
        {#each PACKS.filter(pack => pack.platform === 3) as pack}
            <div class="box">
                <div class="amount">
                    <Icon
                        icon="simple-icons:crystal"
                        color="#e72757"
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
                    {selectedCurrency.symbol +
                        pack.price.toFixed(selectedCurrency.decimals)}
                    <sub>{pricePerOrbJP(pack)}/orb</sub>
                </div>
                {#if pack.limit_count}
                    <small>Stock: {pack.limit_count}</small><br/>
                {/if}
                {#if pack.end_date}
                    <small>Sale end date: {new Date(pack.end_date).toLocaleDateString()}</small><br/>
                {/if}
            </div>
        {/each}
    </div>

    <div>
        <h2>Rose Orb Packs</h2>
        <p>Rose orbs are the paid currency in BLUE PROTOCOL. They expire 5 months after you purchase them, on the last day of the month.</p>
        <StickyNote type="note">
            There are payment limits based on age. <br/>
            Ages 0~15: limit 5,000<br/>
            Ages 16~17: limit 20,000<br/>
            Ages 18~999: limit 9,999,999
        </StickyNote>
        
    </div>

    <!-- <div class="rose-orb-packs grid">
        {#each orbPacks as pack}
            <div class="box">
                <div class="amount">
                    <Icon
                        icon="simple-icons:crystal"
                        color="#e72757"
                        width="24"
                        height="24"
                    />
                    {pack.amount}
                    {#if pack.bonus}
                        <small>+{pack.bonus}</small>
                    {/if}
                </div>
                <hr />
                <div class="price">
                    {selectedCurrency.symbol +
                        pack.price.toFixed(selectedCurrency.decimals)}
                    <sub>{pricePerOrb(pack)}/orb</sub>
                </div>
            </div>
        {/each}
    </div> -->

    <h2>PC</h2>
    <div class="rose-orb-packs grid">
        {#each PACKS.filter(pack => pack.platform === 1 && !pack.end_date) as pack}
            <div class="box">
                <div class="amount">
                    <Icon
                        icon="simple-icons:crystal"
                        color="#e72757"
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
                    {selectedCurrency.symbol +
                        pack.price.toFixed(selectedCurrency.decimals)}
                    <sub>{pricePerOrbJP(pack)}/orb</sub>
                </div>
            </div>
        {/each}
    </div>
    <h3>Release Sales</h3>
    <p>
        These deals will be available when the game releases. They can be purchased one time during the sale period.
    </p>
    <div class="rose-orb-packs grid">
        {#each PACKS.filter(pack => pack.platform === 1 && pack.end_date) as pack}
            <div class="box">
                <div class="amount">
                    <Icon
                        icon="simple-icons:crystal"
                        color="#e72757"
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
                    {selectedCurrency.symbol +
                        pack.price.toFixed(selectedCurrency.decimals)}
                    <sub>{pricePerOrbJP(pack)}/orb</sub>
                </div>
                {#if pack.limit_count}
                    <small>Stock: {pack.limit_count}</small><br/>
                {/if}
                {#if pack.end_date}
                    <small>Sale end date: {new Date(pack.end_date).toLocaleDateString()}</small><br/>
                {/if}
            </div>
        {/each}
    </div>

    <h2>PlayStation</h2>
    <div class="rose-orb-packs grid">
        {#each PACKS.filter(pack => pack.platform === 2 && !pack.end_date) as pack}
            <div class="box">
                <div class="amount">
                    <Icon
                        icon="simple-icons:crystal"
                        color="#e72757"
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
                    {selectedCurrency.symbol +
                        pack.price.toFixed(selectedCurrency.decimals)}
                    <sub>{pricePerOrbJP(pack)}/orb</sub>
                </div>
            </div>
        {/each}
    </div>
    <h3>Release Sales</h3>
    <div class="rose-orb-packs grid">
        {#each PACKS.filter(pack => pack.platform === 2 && pack.end_date) as pack}
            <div class="box">
                <div class="amount">
                    <Icon
                        icon="simple-icons:crystal"
                        color="#e72757"
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
                    {selectedCurrency.symbol +
                        pack.price.toFixed(selectedCurrency.decimals)}
                    <sub>{pricePerOrbJP(pack)}/orb</sub>
                </div>
                {#if pack.limit_count}
                    <small>Stock: {pack.limit_count}</small><br/>
                {/if}
                {#if pack.end_date}
                    <small>Sale end date: {new Date(pack.end_date).toLocaleDateString()}</small><br/>
                {/if}
            </div>
        {/each}
    </div>

    <h2>Xbox</h2>
    <div class="rose-orb-packs grid">
        {#each PACKS.filter(pack => pack.platform === 3 && !pack.end_date) as pack}
            <div class="box">
                <div class="amount">
                    <Icon
                        icon="simple-icons:crystal"
                        color="#e72757"
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
                    {selectedCurrency.symbol +
                        pack.price.toFixed(selectedCurrency.decimals)}
                    <sub>{pricePerOrbJP(pack)}/orb</sub>
                </div>
            </div>
        {/each}
    </div>
    <h3>Release Sales</h3>
    <div class="rose-orb-packs grid">
        {#each PACKS.filter(pack => pack.platform === 3 && pack.end_date) as pack}
            <div class="box">
                <div class="amount">
                    <Icon
                        icon="simple-icons:crystal"
                        color="#e72757"
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
                    {selectedCurrency.symbol +
                        pack.price.toFixed(selectedCurrency.decimals)}
                    <sub>{pricePerOrbJP(pack)}/orb</sub>
                </div>
                {#if pack.limit_count}
                    <small>Stock: {pack.limit_count}</small><br/>
                {/if}
                {#if pack.end_date}
                    <small>Sale end date: {new Date(pack.end_date).toLocaleDateString()}</small><br/>
                {/if}
            </div>
        {/each}
    </div>
</main>

<style lang="scss">
    .rose-orb-packs {
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    }

    main {
        max-width: 1400px;
        display: grid;
        // gap: var(--space-xl);
        gap: 1rem;
        padding: 5rem 1em;
        margin: auto;
    }

    .amount {
        font-family: "Skip Std";
        font-size: var(--step-0);
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
