<script>
    import { currency, platformId } from "./stores";

    const PLATFORMS = [
        {
            id: 1,
            name: "PC",
        },
        {
            id: 2,
            name: "PlayStation",
        },
        {
            id: 3,
            name: "Xbox",
        },
    ];

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
            rate: 0.007,
            decimals: 2,
        },
        {
            name: "Euro",
            code: "EUR",
            symbol: "€",
            rate: 0.0064,
            decimals: 2,
        },
    ];

    let selected = $currency.code;
    export let showDetails = true;

    $: currency.set(CURRENCIES.find((c) => c.code === selected));
</script>

<div class="flex gap-4">
    <div class="box">
        <h2 class="mini-header visually-hidden">Currency</h2>
        {#each CURRENCIES as c}
            <label>
                <input
                    type="radio"
                    name="currency"
                    value={c.code}
                    bind:group={selected}
                />
                {c.code}
            </label>
        {/each}
    </div>
    <div class="box">
        <h2 class="mini-header visually-hidden">Platform</h2>
        {#each PLATFORMS as platform}
            <label>
                <input
                    type="radio"
                    name="platform"
                    value={platform.id}
                    bind:group={$platformId}
                />
                {platform.name}
            </label>
        {/each}
    </div>
    <div class="box">
        <label>
            <input type="checkbox" bind:checked={showDetails} /> Show details
        </label>
    </div>
</div>
