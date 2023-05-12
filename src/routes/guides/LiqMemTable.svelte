<script>
    const memories = [
        {
            color: "orange",
            alt: "Orange Liquid Memory 1",
            effect: "Gathering speed up",
            refill: "Complete missions",
            href: "/?result=10&search=採取時間短縮#db"
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 2",
            effect: "Increased EXP from enemies",
            refill: "Gather",
            href: "/?result=22&search=エネミー経験値増加#db"
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 3",
            effect: "Increased enemy drop rate",
            refill: "Gather",
            href: "/?result=12&search=エネミーからのドロップ率増加#db"
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 4",
            effect: "Greater harvest when gathering",
            refill: "Defeat enemies",
            href: "/?result=20&search=採取個数増加#db"
        },
        {
            color: "blue",
            alt: "Blue Liquid Memory 1",
            effect: "More GC when completing missions",
            refill: "Participate in Rush Battle",
            href: "/?result=17&search=ミッション報酬のGC増加#db"
        },
        {
            color: "purple",
            alt: "Purple Liquid Memory 1",
            effect: "Increased Alliance EXP",
            refill: "Complete story quests",
            href: "/?result=18&search=チーム経験値増加#db"
        },
        {
            color: "green",
            alt: "Green Liquid Memory 1",
            effect: "Cheaper prices from NPC shops",
            refill: "Complete story quests",
            href: "/?result=15&search=商業施設の費用割引#db"
        },
        {
            color: "green",
            alt: "Green Liquid Memory 2",
            effect: "Reduced luno cost when crafting weapons",
            refill: "Defeat enemies",
            href: "/?result=21&search=武器クラフトルーノ割引#db"
        },
        {
            color: "green",
            alt: "Green Liquid Memory 3",
            effect: "Increased profits when selling",
            refill: "Drink Liquid Memories",
            href: "/?result=19&search=アイテム売却額増加#db"
        },
    ];
</script>

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Effect</th>
            <th>Refill condition</th>
        </tr>
    </thead>
    <tbody>
        {#each memories as memory}
            <tr>
                <td>
                    <img
                        src={`/images/liquidMemory/${memory.color}.png`}
                        alt={memory.alt}
                        loading="lazy"
                        width="64"
                        height="64"
                    />
                </td>
                <td>
                    <a href={memory.href}>{memory.effect}</a>
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