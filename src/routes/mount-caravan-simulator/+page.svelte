<script>
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";

    // 1 select map
    // optional: select reward to filter for
    // optional: select tickets
    // optional: input your mounts

    const itemdata = {
        rate_one: 0.06794,
        rate_two: 0.05469,
        rate_three: 0.02767,
    };

    const selectorValues = ["0", "0", "0", "0", "0"];

    $: totalLuckyChance = selectorValues.reduce((acc, curr) => {
        acc += parseInt(curr[curr.length - 1]);
        return acc;
    }, 0);

    $: totalUniqueMounts = selectorValues.filter((val) =>
        val.includes("unique"),
    ).length;

    let showAllRows = false;
</script>

<MetaTags
    title="Mount Caravan Simulator — Bapharia"
    description="A tool to simulate the Mount Caravan system. Find the optimal party compositions to get the rewards you want!"
    image="/guides/microtransactions/banner.webp"
    bigImage
/>

<HeroBanner bannerUrl="/images/banner_chest.png">
    <h1>Mount Caravan Simulator</h1>
    <p>
        A tool to simulate the Mount Caravan system. Find the optimal party
        compositions to get the rewards you want!
    </p>
</HeroBanner>

<h1>Lucky Chance: {totalLuckyChance}. Unique Mounts: {totalUniqueMounts}</h1>
<div class="box flex gap-4" style="margin-top: 1.5rem">
    <select
        bind:value={selectorValues[0]}
        class="box"
        style="background: var(--bg); flex: 1"
        name=""
        id=""
    >
        <option value="0">None</option>
        <option value="unique1">+0</option>
        <option value="unique2">+1</option>
        <option value="unique3">+2</option>
        <option value="unique4">+3</option>
    </select>
    <select
        bind:value={selectorValues[1]}
        class="box"
        style="background: var(--bg); flex: 1"
        name=""
        id=""
    >
        <option value="0">None</option>
        <optgroup label="Duplicate Mount">
            <option value="duplicate1">+0 (duplicate)</option>
            <option value="duplicate2">+1 (duplicate)</option>
            <option value="duplicate3">+2 (duplicate)</option>
            <option value="duplicate4">+3 (duplicate)</option>
        </optgroup>
        <optgroup label="Unique mount">
            <option value="unique1">+0 (unique)</option>
            <option value="unique2">+1 (unique)</option>
            <option value="unique3">+2 (unique)</option>
            <option value="unique4">+3 (unique)</option>
        </optgroup>
    </select>
    <select
        bind:value={selectorValues[2]}
        class="box"
        style="background: var(--bg); flex: 1"
        name=""
        id=""
    >
        <option value="0">None</option>
        <optgroup label="Duplicate Mount">
            <option value="duplicate1">+0 (duplicate)</option>
            <option value="duplicate2">+1 (duplicate)</option>
            <option value="duplicate3">+2 (duplicate)</option>
            <option value="duplicate4">+3 (duplicate)</option>
        </optgroup>
        <optgroup label="Unique mount">
            <option value="unique1">+0 (unique)</option>
            <option value="unique2">+1 (unique)</option>
            <option value="unique3">+2 (unique)</option>
            <option value="unique4">+3 (unique)</option>
        </optgroup>
    </select>
    <select
        bind:value={selectorValues[3]}
        class="box"
        style="background: var(--bg); flex: 1"
        name=""
        id=""
    >
        <option value="0">None</option>
        <optgroup label="Duplicate Mount">
            <option value="duplicate1">+0 (duplicate)</option>
            <option value="duplicate2">+1 (duplicate)</option>
            <option value="duplicate3">+2 (duplicate)</option>
            <option value="duplicate4">+3 (duplicate)</option>
        </optgroup>
        <optgroup label="Unique mount">
            <option value="unique1">+0 (unique)</option>
            <option value="unique2">+1 (unique)</option>
            <option value="unique3">+2 (unique)</option>
            <option value="unique4">+3 (unique)</option>
        </optgroup>
    </select>
    <select
        bind:value={selectorValues[4]}
        class="box"
        style="background: var(--bg); flex: 1"
        name=""
        id=""
    >
        <option value="0">None</option>
        <optgroup label="Duplicate Mount">
            <option value="duplicate1">+0 (duplicate)</option>
            <option value="duplicate2">+1 (duplicate)</option>
            <option value="duplicate3">+2 (duplicate)</option>
            <option value="duplicate4">+3 (duplicate)</option>
        </optgroup>
        <optgroup label="Unique mount">
            <option value="unique1">+0 (unique)</option>
            <option value="unique2">+1 (unique)</option>
            <option value="unique3">+2 (unique)</option>
            <option value="unique4">+3 (unique)</option>
        </optgroup>
    </select>
</div>

<article style="margin-top: 1rem">
    <table class="box" style="width: 100%;">
        <thead>
            <tr>
                <th>Lucky Chance</th>
                <th>
                    <div class="flex">
                        <img
                            src="/UI/Fang_expedition/UI_Fang_expedition_MarkHeart.png"
                            alt=""
                            width="24"
                            height="24"
                        />
                    </div>
                </th>
                <th>
                    <div class="flex">
                        <img
                            src="/UI/Fang_expedition/UI_Fang_expedition_MarkHeart.png"
                            alt=""
                            width="24"
                            height="24"
                        />
                        <img
                            src="/UI/Fang_expedition/UI_Fang_expedition_MarkHeart.png"
                            alt=""
                            width="24"
                            height="24"
                        />
                    </div>
                </th>
                <th>
                    <div class="flex">
                        <img
                            src="/UI/Fang_expedition/UI_Fang_expedition_MarkHeart.png"
                            alt=""
                            width="24"
                            height="24"
                        />
                        <img
                            src="/UI/Fang_expedition/UI_Fang_expedition_MarkHeart.png"
                            alt=""
                            width="24"
                            height="24"
                        />
                        <img
                            src="/UI/Fang_expedition/UI_Fang_expedition_MarkHeart.png"
                            alt=""
                            width="24"
                            height="24"
                        />
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            {#if showAllRows}
                {#each Array(23) as _, index}
                    <tr>
                        <th>{index + 1}</th>
                        <td
                            class:highlight={totalUniqueMounts === 1 &&
                                index + 1 === totalLuckyChance}
                            >{(
                                (1 - (1 - itemdata.rate_one) ** (index + 1)) *
                                100
                            ).toFixed(3)}%</td
                        >
                        <td
                            class:highlight={totalUniqueMounts === 2 &&
                                index + 1 === totalLuckyChance}
                            >{(
                                (1 - (1 - itemdata.rate_two) ** (index + 1)) *
                                100
                            ).toFixed(3)}%</td
                        >
                        <td
                            class:highlight={totalUniqueMounts >= 3 &&
                                index + 1 === totalLuckyChance}
                            >{(
                                (1 - (1 - itemdata.rate_three) ** (index + 1)) *
                                100
                            ).toFixed(3)}%</td
                        >
                    </tr>
                {/each}
            {:else}
                {#each Array(23) as _, index}
                    {#if index + 1 <= totalLuckyChance}
                    <tr>
                        <th>{index + 1}</th>
                        <td
                            class:highlight={totalUniqueMounts === 1 &&
                                index + 1 === totalLuckyChance}
                            >{(
                                (1 - (1 - itemdata.rate_one) ** (index + 1)) *
                                100
                            ).toFixed(3)}%</td
                        >
                        <td
                            class:highlight={totalUniqueMounts === 2 &&
                                index + 1 === totalLuckyChance}
                            >{(
                                (1 - (1 - itemdata.rate_two) ** (index + 1)) *
                                100
                            ).toFixed(3)}%</td
                        >
                        <td
                            class:highlight={totalUniqueMounts >= 3 &&
                                index + 1 === totalLuckyChance}
                            >{(
                                (1 - (1 - itemdata.rate_three) ** (index + 1)) *
                                100
                            ).toFixed(3)}%</td
                        >
                    </tr>
                    {/if}
                {/each}
            {/if}
        </tbody>
    </table>
</article>

<style lang="scss">
    .highlight {
        background: var(--surface3);
        color: var(--accent1);
        border-radius: 1rem;
    }
</style>
