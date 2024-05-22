<script>
    import Popper from "$lib/components/Popper.svelte";
    import Icon from "@iconify/svelte";
    import Abilities from "./Abilities.svelte";
    import Item from "./Item.svelte";
    import Sockets from "./Sockets.svelte";

    export let sources;

    let selectedTab = "abilities";
</script>

{#each sources as source}
    <div class="grid gap-4">
        <p class="box">
            {source.sources[0].recipeSetName} available from
            {#each source.sources as recipeSource}
                <a href="/db/dungeon/{recipeSource.dungeon_reward_search_name}"
                    >{recipeSource.dungeon_reward_search_name}</a
                >
            {/each}

            {#if source.recipe.adventurer_rank > 0 || source.recipe.difficulty > 0}
                <br />
                <b style="color: var(--accent1)">
                    Requires Adventurer Rank {source.recipe.adventurer_rank ||
                        source.recipe.difficulty} to craft
                </b>
            {/if}
        </p>

        <ul class="unstyled-list grid" role="list">
            {#each source.recipe.materials as material}
                <Item
                    href="/db/items/{material.id}"
                    name={material.text.name}
                    amount="{material.amount || material.need_num}x"
                    source={material.text.source}
                    thumb={material.assets.icon}
                />
            {/each}
            <Item
                name="Luno"
                thumb="/UI/Icon/Reward/UI_Icon_0.png"
                amount={source.recipe.price || source.recipe.use_money}
            />
        </ul>

        <div class="flex gap-4">
            {#if source.recipe.bonus_rate}
                <p class="box" style="padding: 0.5rem 1rem; flex: 1;">
                    Great Success Rate:
                    <b style="color: var(--accent1)"
                        >{source.recipe.bonus_rate}%</b
                    >
                </p>
            {/if}

            {#if source.recipe.great_success_tokens}
                <p
                    class="box flex align-items-center"
                    style="padding: 0.5rem 1rem; flex: 1; justify-content: space-between"
                >
                    <span>
                        <a href="/db/tokens/140000200" style="color: inherit">Tickets</a> Needed:
                        <b style="color: var(--accent1)"
                            >{source.recipe.great_success_tokens}</b
                        >
                    </span>
                    <Popper let:setFocused placement="top">
                        <Icon
                            icon="ph:question"
                            style="font-size: var(--step-1); display: flex; margin-left: auto; color: var(--text2)"
                        />
                        <p slot="tooltip" aria-hidden="true">The number of Great Success Tickets needed to guarantee a great success when crafting.</p>
                    </Popper>
                </p>
            {/if}
        </div>
        <div class="flex gap-4">
            <label>
                <input
                    type="radio"
                    bind:group={selectedTab}
                    value="abilities"
                /> Abilities
            </label>
            <label>
                <input type="radio" bind:group={selectedTab} value="sockets" /> Sockets
            </label>
        </div>

        {#if selectedTab === "abilities"}
            <Abilities abilities={source.abilities} itemType="Weapon" />
        {:else}
            <Sockets data={source.recipe} />
        {/if}
    </div>
{/each}

<style lang="scss">
    .box {
        border-radius: 0.5rem;
    }

    p {
        font-size: inherit;
        max-inline-size: none;
        margin: 0;

        a:not(:last-of-type)::after {
            content: ",";
        }
    }
</style>
