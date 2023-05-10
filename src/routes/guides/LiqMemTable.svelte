<script>
    const memories = [
        {
            color: "orange",
            alt: "Orange Liquid Memory 1",
            effect: "Gathering speed up",
            refill: "Complete dungeons",
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 2",
            effect: "Increased EXP from enemies",
            refill: "Gather",
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 3",
            effect: "Increased enemy drop rate",
            refill: "Gather",
        },
        {
            color: "orange",
            alt: "Orange Liquid Memory 4",
            effect: "Greater harvest when gathering",
            refill: "Defeat enemies",
        },
        {
            color: "blue",
            alt: "Blue Liquid Memory 1",
            effect: "More GC when completing missions",
            refill: "Participate in Rush Battle",
        },
        {
            color: "purple",
            alt: "Purple Liquid Memory 1",
            effect: "Increased Alliance EXP",
            refill: "Complete story quests",
        },
        {
            color: "green",
            alt: "Green Liquid Memory 1",
            effect: "Cheaper prices from NPC shops",
            refill: "Complete story quests",
        },
        {
            color: "green",
            alt: "Green Liquid Memory 2",
            effect: "Reduced luno cost when crafting weapons",
            refill: "Defeat enemies",
        },
        {
            color: "green",
            alt: "Green Liquid Memory 3",
            effect: "Increased profits when selling",
            refill: "Drink Liquid Memories",
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
                        style=""
                    />
                </td>
                <td>
                    <a href="/?search=&result=#db">{memory.effect}</a>
                </td>
                <td>{memory.refill}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    img {
        margin: -0.5rem -1rem
    }
</style>