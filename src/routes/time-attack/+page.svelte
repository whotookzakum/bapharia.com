<script>
    import { DateTime } from "luxon";
    import timeAttacksRaw from "./time-attack.json";
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";

    // TODO: get EN name from the map names file that I translated
    const timeAttacks = timeAttacksRaw.filter((ta) => !ta.rerun);

    let selectedTaId = timeAttacks[0].id;
    $: selectedTa = timeAttacks.find((ta) => ta.id == selectedTaId);

    function getDate(str) {
        return DateTime.fromISO(str)
            .setZone("Asia/Tokyo")
            .toLocaleString(DateTime.DATE_MED);
    }

    const totalCrowns = timeAttacks.reduce((acc, curr) => {
        Object.values(curr.records)
            .flat()
            .forEach(({ rank, playerName }) => {
                if (rank === 1 && acc[playerName]) acc[playerName] += 1;
                else if (rank === 1) acc[playerName] = 1;
            });
        return acc;
    }, {});

    console.log(totalCrowns);
</script>

<h1>Time Attack</h1>
<p>
    A catalogue of Time Attack videos for reference. Player ranking is based on
    final placement, whereas time and provided videos showcase the best
    available video. For example, a player may have uploaded a 1:30 run, but
    later achieved a time of 1:25. Their final rank will reflect the 1:25 run,
    though the time listed will match their best time on video.
</p>
<p>Records may vary from in-game rankings based on when the record was inputted. Some players get banned afterwards, increasing ranks of those below them.</p>

<select bind:value={selectedTaId}>
    {#each timeAttacks as ta}
        <option value={ta.id}>{ta.name[$userLocale]}</option>
    {/each}
</select>

<h2>
    <a
        href={selectedTa.link}
        target="_blank"
        rel="noreferrer noopener nofollow"
        class="styled-link">{selectedTa.name[$userLocale]}</a
    >
</h2>
<small>{getDate(selectedTa.startDate)} — {getDate(selectedTa.endDate)}</small>

<table class="box">
    <thead>
        <tr>
            <th>
                <div class="flex g-25 align-items-center">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_12.png"
                        alt=""
                        width="24"
                        height="24"
                    />
                    Aegis Fighter
                </div>
            </th>
            <th>
                <div class="flex g-25 align-items-center">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_06.png"
                        alt=""
                        width="24"
                        height="24"
                    />
                    Blast Archer
                </div>
            </th>
            <th>
                <div class="flex g-25 align-items-center">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_20.png"
                        alt=""
                        width="24"
                        height="24"
                    />
                    Blitz Lancer
                </div>
            </th>
            <th>
                <div class="flex g-25 align-items-center">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_19.png"
                        alt=""
                        width="24"
                        height="24"
                    />
                    Heavy Smasher
                </div>
            </th>
            <!-- <th>Performer</th> -->
            <th>
                <div class="flex g-25 align-items-center">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_11.png"
                        alt=""
                        width="24"
                        height="24"
                    />
                    Spell Caster
                </div>
            </th>
            <th>
                <div class="flex g-25 align-items-center">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_07.png"
                        alt=""
                        width="24"
                        height="24"
                    />
                    Twin Striker
                </div>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            {#each [12, 6, 20, 19, 11, 7] as classId}
                <td>
                    {#if selectedTa.records[classId]}
                        <ol class="unstyled-list g-50">
                            {#each selectedTa.records[classId]?.sort((a, b) => a.rank - b.rank) as record}
                                <li>
                                    <b>#{record.rank}</b>
                                    {record.playerName} ({record.time})
                                    {#each record.links as link}
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noreferrer noopener nofollow"
                                        >
                                            {#if link.includes("youtube.com")}
                                                <span class="visually-hidden"
                                                    >YouTube</span
                                                >
                                                <Icon
                                                    icon="logos:youtube-icon"
                                                    style="margin-bottom: -2px"
                                                />
                                            {:else if link.includes("twitter.com") || link.includes("x.com")}
                                                <span class="visually-hidden"
                                                    >X</span
                                                >
                                                <Icon
                                                    icon="logos:twitter"
                                                    style="margin-bottom: -2px"
                                                />
                                            {:else}
                                                <span class="visually-hidden"
                                                    >Link</span
                                                >
                                                <Icon
                                                    icon="tabler:external-link"
                                                    style="margin-block: -4px -3px"
                                                    width="18"
                                                />
                                            {/if}
                                        </a>
                                    {/each}

                                    <br />
                                </li>
                            {/each}
                        </ol>
                    {/if}
                </td>
            {/each}
        </tr>
    </tbody>
</table>

<style lang="scss">
    table {
        text-align: left;
        border-collapse: collapse;
    }

    thead {
        background: var(--surface3);
    }

    th,
    td {
        padding: 1rem;
    }

    td {
        font-size: var(--step--1);
        vertical-align: top;

        a {
            text-decoration: none;
            color: inherit;
            margin-left: 0.2ch;
        }

        b {
            font-weight: 800;
            color: var(--accent);
        }
    }
</style>
