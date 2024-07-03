<script>
    export let skill;
</script>

{#if skill.notes}
    <span class="mini-header block mt-8 mb-2">Notes</span>
    <div class="skill-notes">
        <svelte:component this={skill.notes} />
    </div>
{/if}

<style lang="scss">
    // For some reason rehype-toc places a nav.toc with the skill notes markdown
    :global(.skill .toc) {
        display: none;
    }

    // 2nd child because the .toc is the first child...
    :global(.skill-notes *:nth-child(2)) {
        margin-top: 0 !important;
    }

    :global(.skill-notes p) {
        max-inline-size: none !important;
    }
</style>