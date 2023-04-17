<script>
    import { Description, Source, Effect, Price, ItemExp, AdventurerRank, DungeonOnly } from "./sections";

    export let data;
</script>

<Effect text={data.effectDesc} />
<Description text={data.desc} />
<Source text={data.sourceDesc} />
<DungeonOnly isTrue={data.dungeon_only} />
<Price
    no_sale_flag={data.no_sale_flag}
    sellPrice={data.price_player_sells}
    buyPrice={data.price_player_buys}
/>
<ItemExp value={data.item_exp} />
<AdventurerRank value={data.adventurer_rank} />
