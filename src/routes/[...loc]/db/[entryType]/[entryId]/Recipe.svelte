<script>
    import Item from "./Item.svelte";
    import { assetUrl } from "$lib/utils"
    export let recipe;
</script>

<h2 id="recipe">Recipe</h2>

{#if recipe.adventurer_rank > 0 || recipe.difficulty > 0}
    <span style="color: var(--accent1); font-weight: 600">
        Requires Adventurer Rank {recipe.adventurer_rank || recipe.difficulty} to
        craft
    </span>
{/if}

<ul class="unstyled-list grid" role="list">
    {#each recipe.materials as material}
        <Item
            href="/db/item/{material.id}"
            name={material.name}
            amount="{material.amount || material.need_num}x"
            source={material.sourceDesc}
            thumb={material.thumb}
        />
    {/each}
    <Item
        name="Luno"
        thumb="/UI/Icon/Reward/UI_Icon_0.png"
        href="/db"
        amount={recipe.price || recipe.use_money}
        smallTag
    />
</ul>

<div class="grid gap-1" style="color: var(--text2)">
    {#if recipe.bonus_rate}
        <div class="flex align-center gap-1">
            <div
                class="grid"
                style="width: 32px; height: 32px; place-content: center"
            >
                <img
                    src="/images/crafting.svg"
                    alt="Great success ticket"
                    width="24"
                    height="24"
                />
            </div>
            <span>Great Success rate: {recipe.bonus_rate}%</span>
        </div>
    {/if}

    {#if recipe.great_success_tokens}
        <div class="flex align-center gap-1">
            <img
                src={assetUrl("/UI/Icon/Token/UI_Icon_140000200.png")}
                alt="Great success ticket"
                width="32"
                height="32"
            />
            <span>
                Tickets needed to guarantee Great Success: {recipe.great_success_tokens}
            </span>
        </div>
    {/if}
</div>

<style lang="scss">
    ul {
        // grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
        margin: 1rem 0;
    }

    hr {
        margin-top: 1rem;
    }

    .align-center {
        align-items: center;
    }
</style>
