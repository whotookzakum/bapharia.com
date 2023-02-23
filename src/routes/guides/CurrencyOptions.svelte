<script>
    import { currency } from "$lib/stores";

    export const CURRENCIES = [
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

    let selected = "JPY";
    
    $: currency.set(CURRENCIES.find(c => c.code === selected))

</script>

<div class="box">
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