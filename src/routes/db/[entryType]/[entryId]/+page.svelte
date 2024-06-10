<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import GeneralInfo from "./GeneralInfo.svelte";
    import Sources from "./Sources.svelte";
    import Header from "./Header.svelte";
    import { DateTime } from "luxon";
    import Item from "./Item.svelte";

    export let data;

    let checkedPassTypes = [0, 1, 2];

    // $: filteredRewards = data.rewards.filter((reward) =>
    //     checkedPassTypes.includes(reward.passType),
    // );

    function rew(passTypes) {
        const filteredRewards = data.rewards.filter((reward) =>
            passTypes.includes(reward.passType),
        );
        const summedRewards = filteredRewards.reduce((acc, curr) => {
            const existingRewardIndex = acc.findIndex((rew) => rew.id === curr.id);
            if (existingRewardIndex !== -1) {
                acc[existingRewardIndex].amount += curr.amount;
            } else {
                acc.push({ ...curr }); // Copy the current reward to avoid mutation
            }
            return acc;
        }, []);
        return summedRewards;
    }

    function updatePassSelection(e, type) {
        if (e.target.checked) {
            checkedPassTypes.push(type);
            checkedPassTypes = checkedPassTypes;
        } else checkedPassTypes = checkedPassTypes.filter((t) => t !== type);
    }
</script>

<MetaTags
    title="{data.text.name} — Bapharia"
    description={data.text.desc ?? "No description available."}
/>
<!-- image={data.assets?.iconL ?? data.assets?.icon} -->

<div class="entry-details grid box">
    <Header {data} />
    <div>
        <GeneralInfo {data} />
        <Sources {data} />
        {checkedPassTypes}
        <label class="select-none">
            <input
                type="checkbox"
                on:change={(e) => updatePassSelection(e, 0)}
                checked={checkedPassTypes.includes(0)}
            /> Basic Pass
        </label>
        <label class="select-none">
            <input
                type="checkbox"
                on:change={(e) => updatePassSelection(e, 1)}
                checked={checkedPassTypes.includes(1)}
            /> Advanced Pass
        </label>
        <label class="select-none">
            <input
                type="checkbox"
                on:change={(e) => updatePassSelection(e, 2)}
                checked={checkedPassTypes.includes(2)}
            /> Royal Pass
        </label>

        <h1>Compact</h1>
        {#if data.rewards}
            <ol class="grid gap-2" style="grid-template-columns: repeat(auto-fill, calc(64px + 2rem));">
                {#each rew(checkedPassTypes) as reward}
                    <!-- <li>{reward.amount}x {reward.text.name} {reward.id}</li> -->
                    <Item
                        iconOnly
                        amount={reward.amount}
                        name={reward.text.name}
                        thumb={reward.assets.icon}
                    />
                {/each}
            </ol>
        {/if}
    </div>
</div>

<style lang="scss">
    article {
        max-width: 600px;
    }
</style>
