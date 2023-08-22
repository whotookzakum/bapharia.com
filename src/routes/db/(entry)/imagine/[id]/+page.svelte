<script>
    import { Stats, Abilities, Recipe, GeneralInfo } from "../../index";
    export let data;
</script>

<GeneralInfo {data} imgSrc={data.thumb.replace("Battle", "BattleL").replace("Picture", "PictureL")} />

{#if data.recipe}
    <Recipe recipe={data.recipe} />
{/if}

<Abilities abilities={data.abilities} itemType={data.entryTypes[0]} />

<Stats {data} />