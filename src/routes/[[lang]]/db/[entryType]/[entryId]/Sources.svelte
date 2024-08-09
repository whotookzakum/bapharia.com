<script>
    import uniqBy from "lodash/uniqBy";
    import SourceGroup from "./SourceGroup.svelte";
    export let data;

    const groupedSources = uniqBy(data.sources, (src) => src.sourceType).reduce(
        (acc, { sourceType }) => {
            acc[sourceType] = data.sources.filter(
                (src) => src.sourceType === sourceType,
            );
            return acc;
        },
        {},
    );

    const sortedSources = Object.entries(groupedSources).sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    });
</script>

{#if data.sources?.length > 0}
    <h3>Sources</h3>
    <ul class="unstyled-list grid gap-4" style="grid-template-columns: 1fr">
        {#each sortedSources as [category, sources]}
            <li class="surface1 rounded-2xl">
                <SourceGroup {category} {sources} />
            </li>
        {/each}
    </ul>
{/if}
