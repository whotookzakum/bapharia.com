<script>
    import { userLocale } from "$lib/stores";
    import LunoIcon from "./LunoIcon.svelte";
    export let recipe;
</script>

<h4>Recipe</h4>
<table>
    <thead>
        <tr>
            <th>素材</th>
            <th>必要数</th>
        </tr>
    </thead>
    <tbody>
        {#each recipe.materials as material}
            <tr>
                <td>
                    <details>
                        <summary>
                            <a href={`?result=${material.id}`}>
                                {material.name[$userLocale]}
                            </a>
                            <img
                                class="hint-icon"
                                src="/UI/Common/UI_CmnIconInfo.png"
                                alt="Hint"
                                width="28"
                                height="28"
                                style="margin: -9px 0"
                            />
                        </summary>
                        <p class="hint-text">
                            {material.sourceDesc[$userLocale]}
                        </p>
                    </details>
                </td>
                <td>{material.amount || material.need_num}</td>
            </tr>
        {/each}
        <tr>
            <td colspan="1">Luno</td>
            <td>{recipe.price || recipe.use_money} <LunoIcon /></td>
        </tr>
    </tbody>
</table>
{#if recipe.bonus_rate}
    <p>Great Success rate: <b>{recipe.bonus_rate}%</b></p>
{/if}
{#if recipe.great_success_tokens}
    <p>
        Tickets needed to guarantee Great Success: <b
            >{recipe.great_success_tokens}</b
        >
    </p>
{/if}

<style lang="scss">
    details {
        img.hint-icon:hover {
            filter: brightness(0.7);
        }

        &::marker {
            display: none;
        }

        summary {
            list-style: none;
            width: fit-content;
        }

        p.hint-text {
            color: var(--text2);
            font-size: var(--step--1);
            margin: 0;
        }
    }
</style>
