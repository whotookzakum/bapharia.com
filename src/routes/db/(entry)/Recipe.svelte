<script>
    import { userLocale } from "$lib/stores";
    import Item from "./Item.svelte";
    export let recipe;
</script>

<h2 id="recipe">Recipe</h2>
<ul class="unstyled-list grid" role="list">
    {#each recipe.materials as material}
        <Item 
            href="/db/item/{material.id}"
            name={material.name}
            number="x{material.amount || material.need_num}"
            source={material.sourceDesc}
            thumb={material.thumb}
        />
    {/each}
    <Item 
        isLuno
        number={recipe.price || recipe.use_money}
    />
</ul>

{#if recipe.bonus_rate}
    <hr />
    <div class="flex align-center g-25">
        <div class="grid" style="width: 64px; height: 64px; place-content: center">
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
    ul {
        grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
    }

    hr {
        margin-top: 1rem;
    }

    .align-center {
        align-items: center;
    }
</style>
