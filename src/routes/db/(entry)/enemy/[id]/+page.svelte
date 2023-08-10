<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { EnemyStats, EnemyDrops, FoundIn, Stats, Item } from "../../index";
    import uniqBy from "lodash/uniqBy";
    import isEqual from "lodash/isEqual";
    import { userLocale } from "$lib/stores";
    import maps from "../../../../map/[zone]/maps.json"

    export let data;

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

    const allZones = maps.map(map => map.zones).filter(map => map).flat()

    function getZoneName(mapId) {
        const zoneData = allZones.find(zone => zone.map_id.toLowerCase() === mapId.toLowerCase())
        return zoneData.name
    }
</script>

<select
    class="box hover"
    bind:value={selectedMap}
    on:input={(e) => updateSearchParams(e.target.value)}
>
    {#each uniqueMapsContainingEnemy as map, index}
        <option value={map}>{getZoneName(map)[$userLocale]}</option>
    {/each}
</select>
<!-- <hr /> -->
<p style="font-size: var(--step-0); color: var(--text2)">Enemies are sorted based on map. The same enemy on different maps can have different drops and stats.</p>


{#each uniqueEnemies as member}
    <h2>
        {data.name[$userLocale]}
        <span style="font-size: var(--step-2)">(Lv. {member.MinLv} ~ {member.MaxLv})</span>
    </h2>

    <div class="member-details flex">
        <div>
            <h3>Drops</h3>
            <ul class="unstyled-list">
                {#each member.drop_items as drop}
                    <Item
                        name={drop.name}
                        thumb={drop.thumb}
                        href="/db/item/{drop.item_index}"
                        number="{drop.drop_rate / 100}%"
                    />
                {/each}

                {#each member.treasureChests as treasures}
                    {#if treasures.rarity_1_rewards}
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
                                source={{
                                    ja_JP: "宝箱報酬",
                                    en_US: "Obtained in a Treasure Chest",
                                }}
                                chest="normalchest"
                            />
                        {/each}
                    {/if}
                    {#if treasures.rarity_3_rewards}
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
                                source={{
                                    ja_JP: "宝箱報酬",
                                    en_US: "Obtained in a Treasure Chest",
                                }}
                                chest="goldchest"
                            />
                            <!-- <p>
                                This enemy has a <b
                                    >{treasures.drop_rate / 100}%</b
                                >
                                of dropping a chest. The chest has a
                                <b>{treasures.rarity_1_rate / 100}%</b>
                                chance of being a normal chest, and a
                                <b>{treasures.rarity_3_rate / 100}%</b>
                                chance of being a rare chest. The rare chest contains
                                <b>{treasures.rarity_3_rewards.length}</b>
                                items, and the
                                <b>{rareTreasure.name[$userLocale]}</b>
                                has a
                                <b>{rareTreasure.rate / 100}%</b> chance of dropping
                                from the chest.
                            </p> -->
                        {/each}
                    {/if}
                {/each}
            </ul>
        </div>
        <div>
            <Stats
                data={{ ...member, entryTypes: ["Enemy"] }}
                style="max-width: unset; flex: 1; flex-basis: 30ch;"
                h3
            />
        </div>
    </div>

    <!-- Should be h3 here not h2 -->
{/each}

<style lang="scss">
    .member-details {
        gap: 1rem;
        flex-wrap: wrap;

        & > * {
            flex: 1;
            flex-basis: 30ch;
        }
    }

    .chest-rewards {
        gap: 1rem;
        flex-wrap: wrap;

        & > div {
            flex: 1;
            flex-basis: 30ch;
        }
    }

    .chest-drops-header {
        align-items: center;
        margin-block: 3rem 1rem;

        h4 {
            margin: 0;
        }
    }
</style>
