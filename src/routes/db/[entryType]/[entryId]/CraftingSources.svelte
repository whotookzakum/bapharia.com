<script>
    import Icon from "@iconify/svelte";
    import Abilities from "./Abilities.svelte";
    import Item from "$lib/components/db/Item.svelte";
    import Sockets from "./Sockets.svelte";

    export let sources;

    let selectedTab = "abilities";
</script>

{#each sources as source}
    <div class="grid gap-2">
        <p style="font-size: var(--step--1)">
            {source.sources[0].recipeSetName} available from
            {#each source.sources as recipeSource}
                <a href="/db/dungeon/{recipeSource.dungeon_reward_search_name}"
                    >{recipeSource.dungeon_reward_search_name}</a
                >
            {/each}
        </p>

        {#if source.recipe.adventurer_rank > 0 || source.recipe.difficulty > 0}
            <p class="accent1 font-semibold" style="font-size: var(--step--1)">
                Requires Adventurer Rank {source.recipe.adventurer_rank ||
                    source.recipe.difficulty} to craft
            </p>
        {/if}

        <ul class="unstyled-list grid gap-4" role="list">
            {#each source.recipe.materials as item}
                <li>
                    <Item {item} style="padding: 0" />
                </li>
            {/each}
        </ul>

        {#if source.recipe.bonus_rate}
            <p style="font-size: var(--step--1)">
                Great Success rate:
                <b class="accent1">
                    {source.recipe.bonus_rate}%
                </b>
                {#if source.recipe.great_success_tokens}
                    <span class="text2">
                        (100% with <b class="accent1">4</b>
                        <a href="/db/tokens/140000200" class="text-inherit"
                            >tickets<img
                                src="/UI/Icon/TokenL/UI_Icon_140000200.png"
                                alt=""
                                width="24"
                                height="24"
                                class="inline"
                                style="margin-right: -4px"
                            /></a
                        >)
                    </span>
                {/if}
            </p>
        {/if}

        <div class="flex gap-4 mini-header mt-4">
            <label class="flex gap-1.5 items-center">
                <input
                    type="radio"
                    bind:group={selectedTab}
                    value="abilities"
                /> Abilities
            </label>
            <label class="flex gap-1.5 items-center">
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
    a:not(:last-of-type)::after {
        content: ",";
    }

    label:has(:checked) {
        color: var(--accent1);
    }
</style>
