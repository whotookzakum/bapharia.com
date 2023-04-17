<script>
    import { userLocale } from "$lib/stores";
    export let sources
</script>

{#if sources.length > 0}
    <h4>Treasure Chests</h4>
    {#each sources as source}
        <div>
            {source.name[$userLocale]}
            {source.probability / 100}% <a href={`/?result=${source.location.id}`}>{source.location.name[$userLocale]}</a>
        </div>
    {/each}
{/if}
