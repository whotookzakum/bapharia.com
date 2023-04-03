<script>
    export let data;
</script>

<main>
    <h1>Items</h1>
    {#each data.items as item}
        <div class="box surface">
            <div class="flex" style="gap: 0.5rem">
                <img src={item.thumb} alt="" style="flex: 0" />
                <div class="grid">
                    <h5>{item.name}</h5>
                    <div>{item.id}</div>
                </div>
            </div>
            <div>{item.categoryName}</div>
            <!-- {#if item.can_use}
                <div>(Consumable)</div>
            {/if} -->
            {#if item.dungeon_only}
                <div>(Dungeon-only)</div>
            {/if}
            <div>Lv. {item.item_level}</div>
            <div>Item EXP {item.item_exp}</div>
            <div>Adventurer Rank {item.adventurer_rank}</div>
            
            {#if !item.no_sale_flag}
                <div>
                    Sells for {item.price_player_sells}
                    <img
                        src="/UI/Common/UI_CmnMoney1.png"
                        alt=""
                        width="24"
                        height="24"
                        style="margin: -7px -4px"
                    />
                </div>
            {/if}
            {#if item.price_player_buys !== 99999 && item.price_player_buys !== 1}
                <div>
                    Buy for {item.price_player_buys}
                    <img
                        src="/UI/Common/UI_CmnMoney1.png"
                        alt=""
                        width="24"
                        height="24"
                        style="margin: -7px -4px"
                    />
                </div>
            {/if}
            {#if item.source}
                <div>Source: {item.source}</div>
            {/if}
            {#if item.effectDesc}
                <div>Effect: {item.effectDesc}</div>
            {/if}
            <hr />
            <div>{item.desc}</div>
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
