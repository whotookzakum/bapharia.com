<script>
    import Recipe from "../../Recipe.svelte";
    import { GeneralInfo } from "../../index";
    export let data;
    // TODO: Add data.adventurer_rank
</script>

<GeneralInfo {data} imgSrc={data.thumb.replace("Item", "ItemL")} />

{#if data.recipe}
    <Recipe recipe={data.recipe} />
{/if}
