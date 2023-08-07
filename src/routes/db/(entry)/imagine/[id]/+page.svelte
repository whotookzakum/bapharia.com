<script>
    import {
        Stats,
        Abilities,
        Recipe
    } from "../../../components";

    export let data;
</script>

<Recipe recipe={data.recipe} />

<!-- {#if data.imagine_type === 0}
    <LargeImage
        noHeader
        imgSrc={data.thumb.replace("Picture", "FullImage")}
        fullWidth
        width="1920"
        height="1080"
    />
{/if} -->

<Abilities abilities={data.abilities} itemType={data.entryTypes[0]} />

<Stats
    levelParams={data.params}
    battleScoreMultiplier={data.imagine_type === 1 ? 10 : 6}
    maxLevel={data.imagine_max_level}
/>