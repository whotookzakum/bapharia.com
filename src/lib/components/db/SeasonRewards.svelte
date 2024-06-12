<script>
    import Item from "./Item.svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import Icon from "@iconify/svelte";

    export let data;

    let checkedPassTypes = [0, 1, 2];
    let rewardsDisplayMode = "grid";
    let rewardsCondensed = true;

    $: rewards = getRewards(checkedPassTypes, rewardsCondensed, data.id);

    function getRewards(passTypes, condensed) {
        const filteredRewards = data.rewards
            .filter((reward) => passTypes.includes(reward.passType))
            .sort((a, b) => a.rank - b.rank);
        if (!condensed) return filteredRewards;
        const summedRewards = filteredRewards.reduce((acc, curr) => {
            const existingRewardIndex = acc.findIndex(
                (rew) => rew.text.name === curr.text.name,
            );
            if (curr.text.name === "ルーノ") console.log(curr.amount);

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

<div class="flex gap-2 items-baseline mt-8 mb-2">
    <h3 class="m-0">Rewards</h3>
    <div class="flex gap-4 ml-auto" style="font-size: var(--step--1);">
        {#each data.passes as pass}
            <label
                class="select-none whitespace-nowrap"
                aria-describedby="pass{pass.type}"
            >
                <input
                    type="checkbox"
                    on:change={(e) => updatePassSelection(e, pass.type)}
                    checked={checkedPassTypes.includes(pass.type)}
                />
                {pass.text.name.replace(" Pass", "")}
            </label>
        {/each}
    </div>
    <div class="flex mt-1" style="align-self: center">
        <Tooltip tooltipStyle="width: max-content" placement="top">
            <label
                class="nav-button p-2 grid"
                style="width: 34px; height: 34px; margin-block: -0.5rem"
            >
                <input
                    type="radio"
                    value="list"
                    class="visually-hidden"
                    bind:group={rewardsDisplayMode}
                />
                <span class="visually-hidden">Vertical list view</span>
                <Icon
                    icon="fluent:text-bullet-list-16-filled"
                    class={rewardsDisplayMode === "list" ? "accent1" : ""}
                />
            </label>
            <svelte:fragment slot="tooltip">List View</svelte:fragment>
        </Tooltip>
        <Tooltip tooltipStyle="width: max-content" placement="top">
            <label
                class="nav-button p-2 grid"
                style="width: 34px; height: 34px; margin-block: -0.5rem"
            >
                <input
                    type="radio"
                    value="grid"
                    class="visually-hidden"
                    bind:group={rewardsDisplayMode}
                />
                <span class="visually-hidden">Grid view</span>
                <Icon
                    icon="fluent:grid-24-filled"
                    class={rewardsDisplayMode === "grid" ? "accent1" : ""}
                />
            </label>
            <svelte:fragment slot="tooltip">Grid View</svelte:fragment>
        </Tooltip>
        <Tooltip tooltipStyle="width: max-content" placement="top">
            <label
                class="nav-button p-2 grid"
                style="width: 34px; height: 34px; margin-block: -0.5rem"
            >
                <input
                    type="checkbox"
                    class="visually-hidden"
                    bind:checked={rewardsCondensed}
                    on:click={() => (rewardsCondensed = !rewardsCondensed)}
                />
                <span class="visually-hidden">Combine duplicate rewards</span>
                <Icon
                    icon="uim:layer-group"
                    class={rewardsCondensed ? "accent1" : ""}
                />
            </label>
            <svelte:fragment slot="tooltip">Combine Duplicates</svelte:fragment>
        </Tooltip>
    </div>
</div>

{#if rewards.length > 0}
    <ol
        class="grid gap-4 mt-2 mb-4"
        class:item-64-grid={rewardsDisplayMode === "grid"}
    >
        {#each rewards as reward, index (reward.id + index)}
            <li>
                <Item
                    iconOnly={rewardsDisplayMode === "grid"}
                    item={{
                        ...reward,
                        source:
                            "Rank " +
                            (rewardsCondensed
                                ? data.rewards
                                      .filter(
                                          (rew) =>
                                              rew.text.name ===
                                              reward.text.name,
                                      )
                                      .map((rew) => rew.rank)
                                      .join(", ")
                                : reward.rank),
                    }}
                />
            </li>
        {/each}
    </ol>
{:else}
    <span class="text3"
        >No rewards available. Please review selected season pass types.</span
    >
{/if}
