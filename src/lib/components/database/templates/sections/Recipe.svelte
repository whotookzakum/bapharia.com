<script>
    import { userLocale } from "$lib/stores";
    import LunoIcon from "./LunoIcon.svelte";
    export let recipe;
</script>

<h4>Recipe</h4>
<!-- <dl>
    <div class="row">
        <dt>Req. Adventurer Rank</dt>
        <dd>{recipe.adventurer_rank || recipe.difficulty}</dd>
    </div>
    <hr />
    {#each recipe.materials as material}
        <div class="row">
            <dt>
                <a href={`?result=${material.id}`}>
                    {material.name[$userLocale]}
                </a>
            </dt>
            <dd>{material.amount || material.need_num}</dd>
            <dd>({material.sourceDesc[$userLocale]})</dd>
        </div>
    {/each}
    <hr />
    <div class="row">
        <dt>Luno</dt>
        <dd>{recipe.price || recipe.use_money} <LunoIcon /></dd>
    </div>
</dl> -->

<table>
    <thead>
        <tr>
            <th>Item</th>
            <th>Hint</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody>
        {#each recipe.materials as material}
            <tr>
                <td>
                    <a href={`?result=${material.id}`}>
                        {material.name[$userLocale]}
                    </a>
                </td>
                <td>{material.sourceDesc[$userLocale]}</td>
                <td>{material.amount || material.need_num}</td>
            </tr>
        {/each}
        <tr>
            <td colspan="2">Luno</td>
            
            <td>{recipe.price || recipe.use_money} <LunoIcon /></td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    dl {
        max-inline-size: none;
        gap: 0.25rem;
        margin: 0.25rem 0;
        padding: 0 1rem;
        border-left: 6px solid var(--surface3);
    }

    .row {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
    }

    dt {
        font-weight: normal;
    }
</style>
