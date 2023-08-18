<script>
    import { checkStringIncludes } from "$lib/utils/string_utils.js";
    import { userLocale } from "$lib/stores";

    export let result = {};
    export let searchTerm = "";
    export let type = "";

    let matches = [];

    $: if (type === "board") {
        matches = result.panels.filter(
            (panel) =>
                checkStringIncludes(panel.quest.name.en_US, searchTerm) ||
                checkStringIncludes(panel.quest.name.ja_JP, searchTerm)
        );
    } else if (type === "quest") {
        matches = result.steps.filter(
            (step) =>
                checkStringIncludes(step.desc.en_US, searchTerm) ||
                checkStringIncludes(step.desc.ja_JP, searchTerm)
        );
    }
</script>

{#if searchTerm && matches.length > 0}
    <hr />
    <ul class="unstyled-list" role="list">
        {#each matches as match}
            <li>
                {#if type === "board"}
                    {match.quest.name[$userLocale]}
                {:else if type === "quest"}
                    {match.desc[$userLocale]} (Step {match.id.replace(
                        "step",
                        ""
                    )})
                {/if}
            </li>
        {/each}
    </ul>
{/if}

<style>
    li {
        color: var(--text2);
        font-size: var(--step--1);
    }
</style>
