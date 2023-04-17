<script>
    import { userLocale } from "$lib/stores";
    export let recipe;
</script>

<h4>Recipe</h4>
<div>Req. Adventurer rank {recipe.adventurer_rank} to craft</div>
{#each recipe.materials as material}
    <div>
        <a href={`?result=${material.id}`}>
            {material.name[$userLocale]}
        </a>
        x{material.amount} ({material.sourceDesc[$userLocale]})
    </div>
{/each}
<div>Luno {recipe.price}</div>
