<script>
    import { userLocale } from "$lib/stores";
    export let recipe;
</script>

<h2 id="recipe">Recipe</h2>
<ul class="unstyled-list grid" role="list">
    {#each recipe.materials as material}
        <li class="flex box">
            <div class="thumbnail-wrapper">
                <img
                    src={material.thumb}
                    alt=""
                    width="64"
                    height="64"
                    loading="lazy"
                />
                <span class="floaty"
                    >x{material.amount || material.need_num}</span
                >
            </div>
            <div class="grid">
                <a
                    href="/db/item/{material.id}"
                    class="material-name styled-link"
                    >{material.name[$userLocale]}</a
                >
                <span class="material-source"
                    >{material.sourceDesc[$userLocale]}</span
                >
            </div>
        </li>
    {/each}
    <li class="flex box">
        <div class="thumbnail-wrapper">
            <img
                src="/UI/Icon/Reward/UI_Icon_0.png"
                alt=""
                width="64"
                height="64"
                loading="lazy"
            />
            <span class="floaty luno"
                >{recipe.price?.toLocaleString() ||
                    recipe.use_money?.toLocaleString()}</span
            >
        </div>
        <div class="grid">
            <a href="/db/item" class="material-name styled-link">Luno</a>
        </div>
    </li>
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

    li {
        gap: 1rem;
        align-items: center;
        position: relative;
        z-index: 1;
        max-inline-size: none;
    }

    .thumbnail-wrapper {
        position: relative;

        img {
            display: block;
        }
    }

    a.material-name {
        font-size: var(--step-2);
        font-weight: 600;
    }

    .material-source {
        color: var(--text2);
        font-size: var(--step--1);
    }

    .floaty {
        position: absolute;
        right: -8px;
        top: -3px;
        background: linear-gradient(335deg, var(--bg), var(--surface1));
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-weight: 700;
        padding: 0.05rem 0.3rem;
        border-radius: 5px;
        color: var(--accent);

        &.luno {
            font-size: 0.8rem;
            bottom: -10px;
            top: unset;
        }
    }

    hr {
        margin-top: 1rem;
    }

    .align-center {
        align-items: center;
    }
</style>
