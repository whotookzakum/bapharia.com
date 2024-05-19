<script>
    // TODO: revisit these links to make sure they link to the treasure chest markers

    const memories = [
        {
            color: "orange",
            alt: "Orange Liquid Memory 1",
            effect: "Gathering speed up",
            refill: "Complete missions",
            href: "/db?result=LiquidMemory10&search=採取時間短縮",
            sources: [
                {
                    name: "Sim-patti-co",
                    href: "/db/quest/SQ101_128"
                },
                {
                    name: "Treasure Chest", // Olvid Plains
                    href: "/map/fld004?marker=fld004_W_BP_TreasureBox_2",
                },
                {
                    name: "Treasure Chest", // Borwam Ruins Free Exploration
                    href: "/map/pub0201?marker=pub0201_BP_TreasureBox_3",
                },
            ]
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 2",
            effect: "Increased EXP from enemies",
            refill: "Gather",
            href: "/db?result=LiquidMemory22&search=エネミー経験値増加",
            sources: [
                {
                    name: "The Next Step",
                    href: "/db/quest/SQ101_146"
                },
                {
                    name: "Treasure Chest", // ラウレーベン古戦場
                    href: "/map/fld005?marker=fld005_C_BP_TreasureBoxAuthor_2",
                },
            ]
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 3",
            effect: "Increased enemy drop rate",
            refill: "Gather",
            href: "/db?result=LiquidMemory12&search=エネミーからのドロップ率増加",
            sources: [
                {
                    name: "The Laid-Back Lab's Latest",
                    href: "/db/quest/SQ101_131"
                },
                {
                    name: "Treasure Chest", // Melissos River Basin
                    href: "/map/fld003?marker=fld003_E_BP_TreasureBox_2",
                },
                {
                    name: "Treasure Chest", // 瘴気の廃坑・自由探索
                    href: "/map/pub0505?marker=pub0505_BP_TreasureBoxAuthor4_15",
                },
            ]
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 4",
            effect: "Greater harvest when gathering",
            refill: "Defeat enemies",
            href: "/db?result=LiquidMemory20&search=採取個数増加",
            sources: [
                {
                    name: "When Life Gives You Memories",
                    href: "/db/quest/SQ101_127",
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
        },
        {
            color: "blue",
            alt: "Blue Liquid Memory 1",
            effect: "More GC when completing missions",
            refill: "Participate in Rush Battle",
            href: "/db?result=LiquidMemory17&search=ミッション報酬のGC増加",
            sources: [
                {
                    name: "Back to the Beginning",
                    href: "/db/quest/SQ101_140"
                },
                {
                    name: "Treasure Chest", // イア・モーレ岩礁
                    href: "/map/fld006?marker=fld006_S_BP_TreasureBoxAuthor_S_2",
                },
            ]
        },
        {
            color: "purple",
            alt: "Purple Liquid Memory 1",
            effect: "Increased Alliance EXP",
            refill: "Complete story quests",
            href: "/db?result=LiquidMemory18&search=チーム経験値増加",
            sources: [
                {
                    name: "Never Hurts to Doublecheck!",
                    href: "/db/quest/SQ102_250"
                },
                {
                    name: "Treasure Chest", // 孤影の城下
                    href: "/map/fld005?marker=fld005_E_BP_TreasureBoxAuthor_2",
                },
                {
                    name: "Treasure Chest", // 呪霊たちの棲家
                    href: "/map/pub0805?marker=pub0805_BP_TreasureBoxAuthor_4",
                },
            ]
        },
        {
            color: "green",
            alt: "Green Liquid Memory 1",
            effect: "Cheaper prices from NPC shops",
            refill: "Complete story quests",
            href: "/db?result=LiquidMemory15&search=商業施設の費用割引",
            sources: [
                {
                    name: "Waiting for the Goat to Go",
                    href: "/db/quest/SQ101_129"
                },
                {
                    name: "Treasure Chest", // シュタール海岸
                    href: "/map/fld005?marker=fld005_W_BP_TreasureBoxAuthor_2",
                },
            ]
        },
        {
            color: "green",
            alt: "Green Liquid Memory 2",
            effect: "Reduced luno cost when crafting weapons",
            refill: "Defeat enemies",
            href: "/db?result=LiquidMemory21&search=武器クラフトルーノ割引",
            sources: [
                {
                    name: "Divination Intervention",
                    href: "/db/quest/SQ101_141"
                },
                {
                    name: "Treasure Chest", // 風止みの荒地
                    href: "/map/fld004?marker=fld004_S_BP_TreasureBox_2",
                },
                {
                    name: "Treasure Chest", // 月隠しの幽谷
                    href: "/map/fld006?marker=fld006_W_BP_TreasureBoxAuthor_W_3",
                },
            ]
        },
        {
            color: "green",
            alt: "Green Liquid Memory 3",
            effect: "Increased profits when selling",
            refill: "Drink Liquid Memories",
            href: "/db?result=LiquidMemory19&search=アイテム売却額増加",
            sources: [
                {
                    name: "Revising the Process",
                    href: "/db/quest/SQ101_143"
                },
                {
                    name: "Treasure Chest", // ともし火の森
                    href: "/map/pub0802?marker=pub0802_BP_TreasureBoxAuthor_4",
                },
            ]
        },
    ];
</script>

<table>
    <thead>
        <tr>
            <th>Effect</th>
            <th>Sources</th>
            <th>Refill condition</th>
        </tr>
    </thead>
    <tbody>
        {#each memories as memory}
            <tr>
                <td>
                    <div class="flex g-100 align-items-center">
                        <img
                            src={`/images/liquidMemory/${memory.color}.png`}
                            alt=""
                            loading="lazy"
                            width="64"
                            height="64"
                        />
                        <a href={memory.href}>{memory.effect}</a>
                    </div>
                </td>
                <td>
                    <ul>
                        {#each memory.sources as { name, href }}
                            <li>
                                <a {href}>{name}</a>
                            </li>
                        {/each}
                    </ul>
                </td>
                <td>{memory.refill}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    img {
        margin: -0.5rem -1rem;
    }
</style>
