<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { EnemyStats, EnemyDrops, FoundIn, Stats, Item } from "../../index";
    import uniqBy from "lodash/uniqBy";
    import isEqual from "lodash/isEqual";
    import { userLocale } from "$lib/stores";
    import maps from "../../../../map/[zone]/maps.json";

    export let data;
    
    let uniqueMapsContainingEnemy = 
        uniqBy(data.enemyVariants, (variant) => variant.mapId)
        .map(uniqueMap => uniqueMap.mapId)
        .sort((a, b) => b.includes("dng"))
        .sort((a, b) => b.includes("fld"))

    let selectedMap =
        $page.url.searchParams.get("map") || uniqueMapsContainingEnemy[0];

    $: enemiesInSelectedMap = data.enemyVariants.filter(variant => variant.mapId === selectedMap)

    // Reduce duplicate variants to only show another variant if drop rate is different
    // TODO: Add some extra logic so that multi-stage mobs don't get grouped (map osd001, arena wave mobs, etc)
    $: uniqueEnemies = enemiesInSelectedMap.reduce((acc, enemy) => {
        if (acc.length < 1) {
            acc.push(enemy);
        } else {
            acc.forEach((includedEnemy) => {
                // If this enemy's drop_items array is unique, include this enemy
                if (!isEqual(includedEnemy.drop_items, enemy.drop_items)) {
                    acc.push(enemy);
                }
                // Get the lowest Min Lv and highest Max Lv between all the spawn points
                else {
                    includedEnemy.MaxLv = Math.max(
                        includedEnemy.MaxLv,
                        enemy.MaxLv
                    );
                    includedEnemy.MinLv = Math.min(
                        includedEnemy.MinLv,
                        enemy.MinLv
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

    const allZones = maps
        .map((map) => map.zones)
        .filter((map) => map)
        .flat();

    function getZoneName(mapId) {
        const zoneData = allZones.find(
            (zone) => zone.map_id.toLowerCase() === mapId.toLowerCase()
        );
        return zoneData?.name || { ja_JP: mapId, en_US: mapId };
    }

    // For a specific habitat (spawn point), return the min and max level of the enemy that appears in the spawn point
    function getMinMaxLevels(habitatName) {
        const maxLevel = enemiesInSelectedMap
            .filter(enemy => enemy.habitats.some(habitat => habitat.Name === habitatName))
            .map((enemy) => enemy.MaxLv)
            .reduce((acc, level) => Math.max(acc, level));
        const minLevel = enemiesInSelectedMap
            .filter(enemy => enemy.habitats.some(habitat => habitat.Name === habitatName))
            .map((enemy) => enemy.MinLv)
            .reduce((acc, level) => Math.min(acc, level));
        return `Lv. ${minLevel} ~ ${maxLevel}`;
    }

    // TODO: Should habitats display other enemies as well? i.e. if a Goblin spawn point has Seashell Goblins in it, should the Seashell Goblins be shown as well? Might be useful to know if a Lv 40 mob spawns in the same location as level 20 ones, though I think this is unlikely..
</script>


<select
    class="box hover"
    bind:value={selectedMap}
    on:input={(e) => updateSearchParams(e.target.value)}
>
    {#each uniqueMapsContainingEnemy as map}
        <option value={map}>{getZoneName(map)[$userLocale]}</option>
    {/each}
</select>

<p style="font-size: var(--step-0); color: var(--text2)">
    Enemies are sorted based on map. The same enemy on different maps can have
    different drops and stats.
</p>

{#each uniqueEnemies as enemy}
    <h2>
        {data.name[$userLocale]}
        <span style="font-size: var(--step-2)"
            >(Lv. {enemy.MinLv} ~ {enemy.MaxLv})</span
        >
    </h2>

    <div class="member-details flex">
        <div>
            <h3>Drops</h3>
            <ul class="unstyled-list" role="list">
                {#each enemy.drop_items as drop}
                    <Item
                        name={drop.name}
                        thumb={drop.thumb}
                        href="/db/item/{drop.item_index}"
                        rate="{drop.drop_rate / 100}%"
                    />
                {/each}
                <!-- TODO: Named enemy chests often have a chance of dropping 1 or 2 ideas, so put all possible rolls -->
                {#each enemy.treasureChests as treasures}
                    {#if treasures.rarity_1_rewards}
                        {#each treasures.rarity_1_rewards as normalTreasure}
                            <Item
                                name={normalTreasure.name}
                                thumb={normalTreasure.thumb}
                                href="/db/item/{normalTreasure.reward_master_id}"
                                rate="{(
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
                                rate="{(
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
                data={{ ...enemy, entryTypes: ["Enemy"] }}
                style="max-width: unset; flex: 1; flex-basis: 30ch;"
                h3
            />
        </div>
    </div>

    <h3>Spawn points</h3>
    <ul class="spawn-points unstyled-list" role="list">
        {#each enemiesInSelectedMap as enemy}
            {#each enemy.habitats as habitat}
                <li class="grid box">
                    <strong>{getMinMaxLevels(habitat.Name)}</strong>
                    <!-- <p style="color: var(--text2); font-size: var(--step--1);">{habitat.Name}</p> -->
                    <p>
                        Amount: {enemy.EnemyNum}
                    </p>
                    <!-- <p>Spawn density: {habitat.Density}</p> -->
                    <p>
                        Respawn time: {habitat.RespawnTime}
                    </p>
                    <a
                        class="styled-link"
                        style:color="var(--link)"
                        href="/map/{selectedMap
                            .replace('fld', 'Fld')
                            .replace('cty', 'Cty')
                            .split('_')[0]}?marker={habitat.Name}"
                        >View on map</a
                    >
                </li>
            {/each}
        {/each}
    </ul>
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

    .spawn-points {
        grid-template-columns: repeat(auto-fill, minmax(22ch, 1fr));
        font-size: var(--step-0);

        p {
            font-size: inherit;
            margin: 0;
        }
    }
</style>
