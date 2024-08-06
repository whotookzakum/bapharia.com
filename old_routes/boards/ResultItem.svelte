<script>
    import { userLocale } from "$lib/stores";
    import MatchedDescriptions from "./MatchedDescriptions.svelte";
    import { assetUrl } from "$lib/utils"

    export let result = {};
    export let type = "";
    export let searchTerm = "";
    export let includeBoardTasks = false;
</script>

<li class="box gap-2">
    {#if type === "board"}
        <img
            src={assetUrl(`/UI/Icon/Adventureboard/UI_Adventureboard_${result.icon_id}.webp`)}
            alt=""
            width="208"
            height="128"
            loading="lazy"
        />
        <a href="/boards/{result.id}" class="styled-link result-name"
            >{result.name[$userLocale]}</a
        >
        {#if includeBoardTasks}
            <MatchedDescriptions {result} {type} {searchTerm} />
        {/if}
    {:else if type === "quest"}
        <img src={result.thumb} alt="" width="64" height="64" />
        <a class="styled-link result-name" href="/db/quests/{result.id}#steps"
            >{result.name[$userLocale]}</a
        >
        <MatchedDescriptions {result} {type} {searchTerm} />
    {/if}
</li>

<style lang="scss">
    img {
        display: block;
        margin: auto;
    }

    .result-name {
        font-size: var(--step-1);
        font-weight: 700;
        line-height: 1.6;
        margin: 0.5rem 0;
        display: block;
        text-align: center;
        font-family: inherit;
    }
</style>
