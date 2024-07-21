<script>
    import { onMount } from "svelte";

    export let skill;

    onMount(() => {
        // Replace links containing "#" and immediately followed by at least 3 digits with a "/db/skills" link on the db pages only.
        // TODO: These routes are not localized (no /ags and /ja). It's likely other routes nested in components/render() from markdown aren't automatically localized either.
        document.querySelectorAll(".db-skill .skill-notes a").forEach(node => {
            const oldValue = node.getAttribute("href")
            if (/#\d{3,}/.test(oldValue)) {
                node.href = "/db/skills/" + oldValue.split("#").pop()
            }
        })
    })
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