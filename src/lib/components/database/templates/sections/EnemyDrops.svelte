<script>
    import { userLocale } from "$lib/stores";
    import _ from "lodash";
    export let drops, treasure_chests;

    const groupedDrops = _.groupBy(drops, (drop) => drop.content_id);
    console.log(groupedDrops);

    console.log(treasure_chests);
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
                        <a href={`?result=${drop.item_index}#db`}
                            >{drop.name[$userLocale]}</a
                        >
                    </td>
                    <td>{drop.drop_rate / 100}%</td>
                </tr>
            {/each}
            {#each treasure_chests.filter((chests) => chests.content_id === mapId) as chest}
                <tr>
                    <td>
                        Treasure Chest
                        <ul>
                            {#each chest.treasure.rarity_rate as chestRates}
                                <li>
                                    Rarity {chestRates.rarity} Chest ({chestRates.rate /
                                        100}%)
                                    <ul>
                                        {#each chestRates.rewards as reward}
                                            <li>
                                                <a
                                                    href={`?result=${reward.reward_master_id}#db`}
                                                    >{reward.name[$userLocale]} ({reward.rate /
                                                        100}%)</a
                                                >
                                            </li>
                                        {/each}
                                    </ul>
                                </li>
                            {/each}
                        </ul>
                    </td>
                    <td style="vertical-align: top">{chest.drop_rate / 100}%</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/each}
