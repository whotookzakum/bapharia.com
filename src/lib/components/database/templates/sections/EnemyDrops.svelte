<script>
    import { userLocale } from "$lib/stores";
    import _ from "lodash";
    export let drops;

    const groupedDrops = _.groupBy(drops, (drop) => drop.content_id);
    console.log(groupedDrops);
</script>

<h4>Drops</h4>
{#each Object.entries(groupedDrops) as [mapId, drops]}
    <!-- <h6>{dropArrays[0]}</h6> -->
    <div class="skip-std">{mapId}</div>
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Drop Rate</th>
            </tr>
        </thead>
        <tbody>
            {#each drops as drop}
                <tr>
                    <td>
                        <a href={`?result=${drop.item_index}#db`}>{drop.name[$userLocale]}</a>
                    </td>
                    <td>{drop.drop_rate / 100}%</td>

                    {#if drop.treasure?.rarity_rate}
                        <td>
                            <ul>
                                {#each drop.treasure?.rarity_rate as chest}
                                    <li>
                                        <div>
                                            Rarity {chest.rarity} chest ({chest.rate /
                                                100}%)
                                        </div>
                                        {#each drop.treasure.lot_rate.filter((lot) => lot.rarity_min === chest.rarity) as lot}
                                            <div>
                                                {lot.reward_master_id}
                                                {lot.rate / 100}%
                                            </div>
                                        {/each}
                                    </li>
                                {/each}
                            </ul>
                        </td>
                    {/if}
                </tr>
            {/each}
        </tbody>
    </table>
{/each}
