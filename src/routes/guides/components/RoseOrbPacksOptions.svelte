<script>
    import { currency, platformId } from "$lib/stores";

    const PLATFORMS = [
        {
            id: 1,
            name: "PC",
        },
        // {
        //     id: 2,
        //     name: "PlayStation",
        // },
        // {
        //     id: 3,
        //     name: "Xbox",
        // },
    ];

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
            rate: 0.0072,
            decimals: 2,
        },
        {
            name: "Euro",
            code: "EUR",
            symbol: "€",
            rate: 0.0067,
            decimals: 2,
        },
    ];

    let selected = "JPY";

    $: currency.set(CURRENCIES.find((c) => c.code === selected));
</script>

<div class="full-bleed">
    <div class="options box">
        <div>
            <div class="component-label">Currency</div>
            <div>
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
        </div>
        <div>
            <div class="component-label">Platform</div>
            <div>
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
        </div>
    </div>
</div>

<style lang="scss">
    .full-bleed {
        padding: 0 1rem;
    }
    
    .options {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(27ch, 1fr));
    }
</style>
