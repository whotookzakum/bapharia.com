<script>
    export let data;
</script>

<main>
    <h1>Tokens</h1>
    {#each data.tokens as token}
        <div class="box surface">
            <div class="flex" style="gap: 0.5rem">
                <img src={token.thumb} alt="" style="align-self: flex-start" />
                <div class="grid">
                    <h5>{token.name}</h5>
                    <div>{token.id}</div>
                </div>
            </div>
            <div>Category {token.category}</div>
            <div>Possession type {token.possession_type}</div>
            <div>Purchase type {token.purchase_type}</div>
            <div>Recovery type {token.recovery_type}</div>
            <div>Recovery amount (stock?) {token.recovery_amount}</div>
            <div>Max amount {token.max_amount}</div>
            <div>Effect value {token.effect_value}</div>
            <div>{token.desc}</div>
        </div>
    {/each}
</main>

<style lang="scss">
    main {
        margin: auto;
        max-width: 65ch;
        display: grid;
        gap: 0.5rem;
    }

    h5 {
        margin: 0;
    }

    h6 {
        font-size: inherit;
        margin-top: 0.5rem;
        color: var(--accent);
    }
</style>
