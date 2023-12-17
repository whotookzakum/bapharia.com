<script>
    import shopData from "$bp_server/japan/shop_realmoney_item.json";
    import { currency, platformId } from "./stores";
    import Icon from "@iconify/svelte";
    import InputText from "$lib/components/InputText.svelte";

    export let showDetails;

    let customEntries = [];
    let customPrice, customAmount;
    const todaysDate = new Date().getTime();
    let sortOrder = "ascending";

    $: packs = shopData
        .filter((pack) => pack.platform === $platformId && checkDates(pack))
        .concat(customEntries)
        .sort(sortByPricePerOrb);

    function checkDates(pack) {
        if (!pack.end_date) return true;
        return todaysDate < new Date(pack.end_date).getTime();
    }

    $: sortByPricePerOrb = (a, b) => {
        if (sortOrder === "ascending")
            return getPricePerOrb(a) - getPricePerOrb(b);
        else if (sortOrder === "descending")
            return getPricePerOrb(b) - getPricePerOrb(a);
    };

    $: getPrice = (pack) => {
        return pack.price * $currency.rate;
    };

    $: getPricePerOrb = (pack) => {
        return getPrice(pack) / (pack.amount_paid + pack.amount_free);
    };

    function pushCustomEntry() {
        if (
            customAmount &&
            customPrice &&
            !customAmount.match(/[^0-9]/) &&
            !customPrice.match(/[^0-9]/)
        ) {
            customEntries.push({
                price: parseInt(customPrice / $currency.rate),
                amount_paid: parseInt(customAmount),
                amount_free: 0,
                platform: $platformId,
                isCustom: true,
            });
            customEntries = customEntries;
            customPrice = "";
            customAmount = "";
        }
    }

    function removeCustomEntry(i) {
        if (packs[i].isCustom) {
            const index = customEntries.indexOf(packs[i]);
            console.log(index);
            customEntries.splice(index, 1);
            customEntries = customEntries;
        }
    }
</script>

<div class="box">
    <h2 class="mini-header visually-hidden">Pack Value Comparison Chart</h2>
    <table>
        <thead>
            <th>Rose Orbs</th>
            <th>Price</th>
            <th>Price per orb</th>
        </thead>
        <tbody>
            <tr>
                <td>
                    <InputText
                        bind:value={customAmount}
                        invalid={customAmount?.match(/[^0-9]/)}
                    />
                </td>
                <td class="flex g-50">
                    <InputText
                        bind:value={customPrice}
                        prefix={$currency.symbol}
                        invalid={customPrice?.match(/[^0-9]/)}
                    />
                    <button class="big-button" on:click={pushCustomEntry}>
                        <Icon
                            icon="ph:plus-bold"
                            style="display: flex; font-size: var(--step-2)"
                        />
                        <span class="visually-hidden">Add custom row</span>
                    </button>
                </td>
                <td>
                    {#if customAmount && customPrice}
                        {(
                            (customPrice * $currency.rate) /
                            customAmount
                        ).toFixed(3)}
                    {/if}
                </td>
            </tr>

            {#each packs as pack, i}
                <tr class:custom={pack.isCustom}>
                    <td class="flex g-50" style="align-items: center">
                        <img
                            src="/UI/Gasha/UI_GashaBtnIconRoseOrb.png"
                            alt=""
                            width="20"
                            height="20"
                        />
                        <span>{pack.amount_paid + pack.amount_free}</span>
                        {#if pack.amount_free && showDetails}
                            <small
                                >({pack.amount_paid} + {pack.amount_free})</small
                            >
                        {/if}
                        {#if pack.isCustom}
                            <button
                                style=";"
                                on:click={() => removeCustomEntry(i)}
                            >
                                🞪
                                <span class="visually-hidden"
                                    >Remove custom row</span
                                >
                            </button>
                        {/if}
                    </td>
                    <td>
                        {$currency.symbol +
                            getPrice(pack).toFixed($currency.decimals)}

                        {#if pack.limit_count}
                            <small>Limit: {pack.limit_count}.</small>
                        {/if}
                        {#if pack.end_date && showDetails}
                            <small
                                >Ends {new Date(
                                    pack.end_date + " UTC+09",
                                ).toLocaleDateString("en", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                })}</small
                            >
                        {/if}
                    </td>
                    <td>{$currency.symbol + getPricePerOrb(pack).toFixed(3)}</td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
    <p>
        Some packs give Paid Rose Orbs + Free Rose Orbs. <a
            href="/guides/microtransactions#rose-orbs">Learn more</a
        >.
    </p>
</div>

<style lang="scss">
    table {
        text-align: left;
        width: 100%;
        border-collapse: collapse;

        th,
        td {
            padding: 0.25rem 0.5rem;
        }

        td {
            min-height: 40px;
        }

        .custom {
            color: var(--accent);

            td {
                background: var(--surface3);
            }

            td:first-child {
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
            }

            td:last-child {
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
            }
        }
    }

    .big-button {
        border-radius: 0.5rem;
        min-height: 44px;
        min-width: 44px;
    }

    button {
        font-size: var(--step--1);
        background: var(--bg);
        padding: 0.35rem;
        display: grid;
        place-items: center;
        border-radius: 5px;
        min-width: 32px;
        min-height: 32px;
        color: var(--text1);

        &:hover,
        &:focus-visible {
            color: var(--accent);
        }
    }

    p {
        color: var(--text2);
        font-size: var(--step--1);
        margin: 0.25rem 0 0 0;
    }
</style>
