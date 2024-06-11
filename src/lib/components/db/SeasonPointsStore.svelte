<script>
    import Item from "./Item.svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import Icon from "@iconify/svelte";

    export let data

    let rewardsDisplayMode = "grid";

    function updatePassSelection(e, type) {
        if (e.target.checked) {
            checkedPassTypes.push(type);
            checkedPassTypes = checkedPassTypes;
        } else checkedPassTypes = checkedPassTypes.filter((t) => t !== type);
    }
</script>

<div class="flex gap-2 items-baseline mt-8 mb-2">
    <h2 class="m-0">Season Points Store</h2>
    <div class="flex ml-auto" style="align-self: center">
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
    </div>
</div>

<ol
    class="grid gap-4 mt-2 mb-4"
    class:item-64-grid={rewardsDisplayMode === "grid"}
>
    {#each data.shop as reward, index ((reward.href ?? "") + reward.id + index)}
        <li>
            <Item
                iconOnly={rewardsDisplayMode === "grid"}
                currency=" pts"
                item={{
                    ...reward,
                    price: reward.points,
                    source: reward.points + " pts",
                }}
            />
        </li>
    {/each}
</ol>