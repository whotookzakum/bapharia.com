<script>
    import Item from "./Item.svelte";
    export let recipe;
</script>

<h2 id="recipe">Recipe</h2>

{#if recipe.adventurer_rank > 0 || recipe.difficulty > 0}
    <p class="ar-req">Requires Adventurer Rank {recipe.adventurer_rank || recipe.difficulty} to craft</p>
{/if}

<ul class="unstyled-list grid" role="list">
    {#each recipe.materials as material}
        <Item
            href="/db/item/{material.id}"
            name={material.name}
            amount="x{material.amount || material.need_num}"
            source={material.sourceDesc}
            thumb={material.thumb}
        />
    {/each}
    <Item
        name={{
            ja_JP: "ルーノ",
            en_US: "Luno",
        }}
        thumb="/UI/Icon/Reward/UI_Icon_0.png"
        href="/db"
        amount={recipe.price || recipe.use_money}
        smallTag
    />
</ul>

{#if recipe.bonus_rate}
    <hr />
    <div class="flex align-center g-25">
        <div
            class="grid"
            style="width: 64px; height: 64px; place-content: center"
        >
            <img
                src="/images/crafting.svg"
                alt="Great success ticket"
                width="48"
                height="48"
            />
        </div>
        <p>Great Success rate: <strong>{recipe.bonus_rate}%</strong></p>
    </div>
{/if}

{#if recipe.great_success_tokens}
    <div class="flex align-center g-25">
        <img
            src="/UI/Icon/Token/UI_Icon_140000200.png"
            alt="Great success ticket"
            width="64"
            height="64"
        />
        <p>
            Tickets needed to guarantee Great Success: <strong
                >{recipe.great_success_tokens}</strong
            >
        </p>
    </div>
{/if}

<style lang="scss">
    .ar-req {
        margin: 0;
        color: var(--accent);
        font-weight: 600;
        font-size: var(--step-0);
    }

    ul {
        grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
        margin: 1rem 0;
    }

    hr {
        margin-top: 1rem;
    }

    .align-center {
        align-items: center;
    }
</style>
