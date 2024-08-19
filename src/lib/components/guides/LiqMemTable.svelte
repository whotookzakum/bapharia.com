<script>
    // TODO: revisit these links to make sure they link to the treasure chest markers

    async function getLiquidMemories() {
        const res = await fetch(`/api/liquidmemories?lang=en&publisher=bno`);
        return await res.json();
    }

    // TEMP until translations are complete
    const names = {
        10: "Gathering Speed Up",
        12: "Increased Enemy Drop Rate",
        15: "Shop Discount",
        17: "Increased GC from Missions",
        18: "Increased Team EXP",
        19: "Increased Sale Price",
        20: "Greater Harvest When Gathering",
        21: "Weapon Crafting Luno Discount",
        22: "Increased Enemy EXP",
    };

    // TEMP until API is complete
    const sources = {
        10: [
            {
                name: "Sim-patti-co",
                href: "/db/quests/SQ101_128",
            },
            {
                name: "Treasure Chest", // Olvid Plains
                href: "/map/fld004?marker=fld004_W_BP_TreasureBox_2",
            },
            {
                name: "Treasure Chest", // Borwam Ruins Free Exploration
                href: "/map/pub0201?marker=pub0201_BP_TreasureBox_3",
            },
        ],
        12: [
            {
                name: "The Laid-Back Lab's Latest",
                href: "/db/quests/SQ101_131",
            },
            {
                name: "Treasure Chest", // Melissos River Basin
                href: "/map/fld003?marker=fld003_E_BP_TreasureBox_2",
            },
            {
                name: "Treasure Chest", // 瘴気の廃坑・自由探索
                href: "/map/pub0505?marker=pub0505_BP_TreasureBoxAuthor4_15",
            },
        ],
        15: [
            {
                name: "Waiting for the Goat to Go",
                href: "/db/quests/SQ101_129",
            },
            {
                name: "Treasure Chest", // シュタール海岸
                href: "/map/fld005?marker=fld005_W_BP_TreasureBoxAuthor_2",
            },
            {
                name: "Treasure Chest", // 命樹の零域：宝箱
                href: "/map/fld007?marker=fld007_N_BP_TreasureBoxAuthor_4"
            }
        ],
        17: [
            {
                name: "Back to the Beginning",
                href: "/db/quests/SQ101_140",
            },
            {
                name: "Treasure Chest", // イア・モーレ岩礁
                href: "/map/fld006?marker=fld006_S_BP_TreasureBoxAuthor_S_2",
            },
            {
                name: "Treasure Chest", // トムドルムの隠し鉱山・自由探索：宝箱
                href: "/map/pub0104/?marker=pub0104_BP_TreasureBoxAuthor_4"
            }
        ],
        18: [
            {
                name: "Never Hurts to Doublecheck!",
                href: "/db/quests/SQ102_250",
            },
            {
                name: "Treasure Chest", // 孤影の城下
                href: "/map/fld005?marker=fld005_E_BP_TreasureBoxAuthor_2",
            },
            {
                name: "Treasure Chest", // 呪霊たちの棲家
                href: "/map/pub0805?marker=pub0805_BP_TreasureBoxAuthor_4",
            },
        ],
        19: [
            {
                name: "Revising the Process",
                href: "/db/quests/SQ101_143",
            },
            {
                name: "Treasure Chest", // ともし火の森
                href: "/map/pub0802?marker=pub0802_BP_TreasureBoxAuthor_4",
            },
            {
                name: "Treasure Chest",
                href: "/map/fld007?marker=fld007_S_BP_TreasureBoxAuthor_9"
            }
        ],
        20: [
            {
                name: "When Life Gives You Memories",
                href: "/db/quests/SQ101_127",
            },
            {
                name: "Treasure Chest", // 帰らずの砂塵
                href: "/map/fld004?marker=fld004_N_BP_TreasureBox_2",
            },
            {
                name: "Treasure Chest", // 汐待ち浜
                href: "/map/fld006?marker=fld006_E_BP_TreasureBoxAuthor_E_1",
            },
        ],
        21: [
            {
                name: "Divination Intervention",
                href: "/db/quests/SQ101_141",
            },
            {
                name: "Treasure Chest", // 風止みの荒地
                href: "/map/fld004?marker=fld004_S_BP_TreasureBox_2",
            },
            {
                name: "Treasure Chest", // 月隠しの幽谷
                href: "/map/fld006?marker=fld006_W_BP_TreasureBoxAuthor_W_3",
            },
        ],
        22: [
            {
                name: "The Next Step",
                href: "/db/quests/SQ101_146",
            },
            {
                name: "Treasure Chest", // ラウレーベン古戦場
                href: "/map/fld005?marker=fld005_C_BP_TreasureBoxAuthor_2",
            },
            {
                name: "Treasure Chest",
                href: "/map/pub0904?marker=pub0904_BP_TreasureBoxAuthor_T4"
            }
        ],
    };

    // TEMP
    const refills = {
        10: "Clear Missions (2 per bottle)",
        12: "Gather (200 <b>drops</b> per bottle)",
        15: "Clear Scenario Missions",
        17: "Clear Rush Battle (2 per bottle)",
        18: "Clear Scenario Missions",
        19: "Drink Liquid Memories (20 <b>bottles</b> per bottle, including this one)",
        20: "Defeat Enemies (100 per bottle)",
        21: "Defeat Enemies (200 per bottle)",
        22: "Gather (100 <b>times</b> per bottle)",
    };
</script>

<div class="surface1 p-4 rounded-2xl" style="font-size: var(--step-1)">
    <table>
        <thead>
            <tr>
                <th>Effect & Duration</th>
                <th>Sources</th>
                <th>Refill Condition</th>
            </tr>
        </thead>
        <tbody>
            {#await getLiquidMemories() then memories}
                {#each memories as memory}
                    <tr>
                        <td>
                            <div class="flex gap-4 items-center">
                                <img
                                    src={memory.assets.icon}
                                    alt=""
                                    loading="lazy"
                                    width="64"
                                    height="64"
                                    style="margin: -1rem;"
                                />
                                <div>
                                    <a
                                        class="styled-link"
                                        href="/db/liquidmemories/{memory.id}"
                                        >{names[memory.id]}</a
                                    >
                                    <br />
                                    <small class="text3">
                                        {#each memory.efficacy_parameters as bottle}
                                            {bottle.use_count}{bottle.level < 3
                                                ? "/"
                                                : ""}
                                        {/each}
                                        times,
                                        {#if memory.id === 22}
                                            120% if Lv. &lt; 31/51/71, else 110%
                                        {:else}
                                            {#each memory.efficacy_parameters as bottle}
                                                {#if memory.id === 20}
                                                    +{bottle.efficacy_value}{bottle.level < 3 ? "/" : ""}
                                                {:else}
                                                    {bottle.efficacy_value}%{bottle.level < 3 ? "/" : ""}
                                                {/if}
                                            {/each}
                                            {#if memory.id === 20}
                                                drops
                                            {/if}
                                        {/if}
                                    </small>
                                </div>
                            </div>
                        </td>
                        <td>
                            <ul>
                                {#each sources[memory.id] as { name, href }}
                                    <li>
                                        <a class="styled-link" {href}>{name}</a>
                                    </li>
                                {/each}
                            </ul>
                        </td>
                        <td>{@html refills[memory.id]}</td>
                    </tr>
                {/each}
            {/await}
        </tbody>
    </table>
</div>
<small>More details on <a href="https://blueprotocol.swiki.jp/index.php?%E3%83%AA%E3%82%AD%E3%83%83%E3%83%89%E3%83%A1%E3%83%A2%E3%83%AA" target="_blank" rel="noopener noreferrer nofollow">swiki</a>.</small>