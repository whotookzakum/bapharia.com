<script>
    import { userLocale } from "$lib/stores";
    export let recipe;
</script>

<h4>Recipe</h4>
<div>
    Req. Adventurer rank {recipe.adventurer_rank || recipe.difficulty} to craft
</div>
{#each recipe.materials as material}
    <div>
        <a href={`?result=${material.id}`}>
            {material.name[$userLocale]}
        </a>
        x{material.amount || material.need_num}
        ({material.sourceDesc[$userLocale]})
    </div>
{/each}
<div>
    Luno {recipe.price || recipe.use_money}
    <img
        src="/UI/Common/UI_CmnMoney1.png"
        alt=""
        width="24"
        height="24"
        style="margin: -7px -4px"
    />
</div>
