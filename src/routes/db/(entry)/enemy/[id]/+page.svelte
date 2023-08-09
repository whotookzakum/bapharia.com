<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { EnemyStats, EnemyDrops, FoundIn, Stats, Item } from "../../index";
    import uniqBy from "lodash/uniqBy";
    import isEqual from "lodash/isEqual";
    import { userLocale } from "$lib/stores";

    export let data;
    console.log(data);

    let uniqueMapsContainingEnemy = uniqBy(
        data.spawnPoints,
        (spawnPoint) => spawnPoint.mapId
    ).map((spawnPoint) => spawnPoint.mapId);

    let selectedMap =
        $page.url.searchParams.get("map") || uniqueMapsContainingEnemy[0];

    $: membersInSelectedMap = data.spawnPoints
        .reduce((acc, spawnPoint) => {
            if (spawnPoint.mapId === selectedMap) {
                acc.push(spawnPoint.Members);
            }
            return acc;
        }, [])
        .flat();

    // If the SpawnPoint's Enemies' Drop Rates are unique, then push the entire Spawn Point
    $: uniqueEnemies = membersInSelectedMap.reduce((acc, member) => {
        if (acc.length < 1) {
            acc.push(member);
        } else {
            acc.forEach((includedMember) => {
                // If the drop_items array is unique, include this member
                if (!isEqual(includedMember.drop_items, member.drop_items)) {
                    acc.push(member);
                }
                // Get the lowest Min Lv and highest Max Lv between all the spawn points
                else {
                    includedMember.MaxLv = Math.max(
                        includedMember.MaxLv,
                        member.MaxLv
                    );
                    includedMember.MinLv = Math.min(
                        includedMember.MinLv,
                        member.MinLv
                    );
                }
            });
        }
        return acc;
    }, []);

    function updateSearchParams(mapId) {
        $page.url.searchParams.set("map", mapId);
        goto(`?${$page.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: true,
            keepFocus: true,
        });
    }
</script>

<h2>{selectedMap}</h2>

<select
    bind:value={selectedMap}
    on:input={(e) => updateSearchParams(e.target.value)}
>
    {#each uniqueMapsContainingEnemy as map, index}
        <option value={map}>{map}</option>
    {/each}
</select>

{#each uniqueEnemies as member}
    <div>{member.enemy_id}</div>
    <div>Lv. {member.MinLv} ~ {member.MaxLv}</div>
    <ul class="unstyled-list">
        {#each member.drop_items as drop}
            <Item 
                name={drop.name}
                thumb={drop.thumb}
                href="/db/item/{drop.item_index}"
                number="{drop.drop_rate / 100}%"
            />
        {/each}
    </ul>

    {#each member.treasureChests as treasures}
        <h3>Normal Chests</h3>
        <img src="/images/normalchest.png" alt="" width="96" height="96" />
        <ul class="unstyled-list">
            {#each treasures.rarity_1_rewards as normalTreasure}
                <Item
                    name={normalTreasure.name}
                    thumb={normalTreasure.thumb}
                    href="/db/item/{normalTreasure.reward_master_id}"
                    number="{(
                        (treasures.drop_rate *
                            treasures.rarity_1_rate *
                            normalTreasure.rate) /
                        10_000_000_000
                    ).toFixed(2)}%"
                />
            {/each}
        </ul>
        <h3>Rare Chests</h3>
        <img src="/images/goldchest.png" alt="" width="96" height="96" />
        <ul class="unstyled-list">
            {#each treasures.rarity_3_rewards as rareTreasure}
                <Item
                    name={rareTreasure.name}
                    thumb={rareTreasure.thumb}
                    href="/db/imagine/{rareTreasure.reward_master_id}"
                    number="{(
                        (treasures.drop_rate *
                            treasures.rarity_3_rate *
                            rareTreasure.rate) /
                        10_000_000_000
                    ).toFixed(2)}%"
                />
                <p>
                    This enemy has a <b>{treasures.drop_rate / 100}%</b> of
                    dropping a chest. The chest has a
                    <b>{treasures.rarity_1_rate / 100}%</b>
                    chance of being a normal chest, and a
                    <b>{treasures.rarity_3_rate / 100}%</b>
                    chance of being a rare chest. The rare chest contains
                    <b>{treasures.rarity_3_rewards.length}</b>
                    items, and the <b>{rareTreasure.name[$userLocale]}</b> has a
                    <b>{rareTreasure.rate / 100}%</b> chance of dropping from the
                    chest.
                </p>
            {/each}
        </ul>
    {/each}
{/each}

<!-- {#if data.found_in.length > 0 && data.found_in.some((location) => location.drops)}
    <EnemyDrops locations={data.found_in} />
{/if}

<Stats {data} /> -->
