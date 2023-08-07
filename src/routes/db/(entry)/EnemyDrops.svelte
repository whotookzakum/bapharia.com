<script>
    import { userLocale } from "$lib/stores";
    export let locations;
</script>

<h4>Drops</h4>
{#each locations as location}
    {#if location.id}
        <div class="skip-std">
            <a href={`/db?result=${location.id}`}
                >{location.name[$userLocale]}</a
            >
        </div>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Drop Rate</th>
                </tr>
            </thead>
            <tbody>
                {#each location.drops as drop}
                    <tr>
                        <td>
                            {#if drop.is_treasure_chest}
                                <div>{drop.name[$userLocale]}</div>
                                <ul>
                                    {#if drop.rarity_1_rate}
                                        <li>
                                            Normal Chest ({drop.rarity_1_rate /
                                                100}%)
                                            <ul>
                                                {#each drop.rarity_1_rewards as reward}
                                                    <li>
                                                        <a
                                                            href={`/db?result=${reward.reward_master_id}`}
                                                            >{reward.name[
                                                                $userLocale
                                                            ]}</a
                                                        >
                                                        ({reward.rate / 100}%)
                                                    </li>
                                                {/each}
                                            </ul>
                                        </li>
                                    {/if}
                                    {#if drop.rarity_3_rate}
                                        <li>
                                            Gold Chest ({drop.rarity_3_rate /
                                                100}%)
                                            <ul>
                                                {#each drop.rarity_3_rewards as reward}
                                                    <li>
                                                        <a
                                                            href={`/db?result=${reward.reward_master_id}`}
                                                            >{reward.name[
                                                                $userLocale
                                                            ]}</a
                                                        >
                                                        ({reward.rate / 100}%)
                                                    </li>
                                                {/each}
                                            </ul>
                                        </li>
                                    {/if}
                                </ul>
                            {:else}
                                <a href={`/db?result=${drop.item_index}`}
                                    >{drop.name[$userLocale]}</a
                                >
                            {/if}
                        </td>
                        <td style="vertical-align: top"
                            >{drop.drop_rate / 100}%</td
                        >
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
{/each}
