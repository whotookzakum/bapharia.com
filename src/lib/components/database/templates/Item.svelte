<script>
    import { Description, Source, Effect, Price, ItemExp, AdventurerRank, DungeonOnly } from "./sections";

    export let data;
</script>

<Price
    no_sale_flag={data.no_sale_flag}
    sellPrice={data.price_player_sells}
    buyPrice={data.price_player_buys}
/>
<Effect text={data.effectDesc} />
<Source text={data.sourceDesc} />
<Description text={data.desc} />
<DungeonOnly isTrue={data.dungeon_only} />
<!-- <ItemExp value={data.item_exp} /> -->
<AdventurerRank value={data.adventurer_rank} />
