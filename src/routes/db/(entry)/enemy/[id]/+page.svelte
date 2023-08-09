<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { EnemyStats, EnemyDrops, FoundIn, Stats } from "../../index";
    import uniqBy from "lodash/uniqBy";
    import isEqual from "lodash/isEqual";

    export let data;
    console.log(data)

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
                    includedMember.MaxLv = Math.max(includedMember.MaxLv, member.MaxLv)
                    includedMember.MinLv = Math.min(includedMember.MinLv, member.MinLv)
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

<ul>
    {#each uniqueEnemies as member}
        <li>
            <div>{member.enemy_id}</div>
            <div>Lv. {member.MinLv} ~ {member.MaxLv}</div>
            <ul>
                {#each member.drop_items as drop}
                    <li>{drop.item_index} {drop.drop_rate / 100}%</li>
                {/each}
            </ul>
        </li>
    {/each}
</ul>

<!-- {#if data.found_in.length > 0 && data.found_in.some((location) => location.drops)}
    <EnemyDrops locations={data.found_in} />
{/if}

<Stats {data} /> -->
