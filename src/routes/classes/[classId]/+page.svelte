<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";

    export let data;
    $: ({ metadata, html } = data);

    const ELEMENT_NAMES = {
        1: "Fire",
        2: "Thunder",
        3: "Ice",
        4: "Earth",
        5: "Light",
        6: "Dark",
    }
</script>

<MetaTags
    title="{metadata.title} — Bapharia"
    description={metadata.caption} 
    image={metadata.bannerImg}
    bigImage
/>
<!-- "All about the {metadata.title} class in BLUE PROTOCOL—unique mechanics, stats, skills, recommended loadouts, and more!" -->
<!-- color="hsla({hues[metadata.internalName]}, 60%, 50%)" -->

<article class="main-pane">
    <hgroup>
        <p class="mini-header">Class Overview</p>
        <div class="flex flex-wrap gap-4" style="align-items: end">
            <h1>{metadata.title}</h1>
            <div>
                {#each JSON.parse(metadata.elements) as element (element)}
                    <!-- "/images/elements/UI_IconAttribute_{element}.png" -->
                    <Tooltip inline>
                        <img
                            src="/UI/Icon/Attribute/UI_IconAttribute_{element}.png"
                            alt={ELEMENT_NAMES[element]}
                            width="48"
                            height="48"
                        />
                    </Tooltip>
                {/each}
            </div>
        </div>
        <p>{metadata.description}</p>
    </hgroup>
    <svelte:component this={html} />
</article>

<style lang="scss">
    :global(.difficulty-box) {
        align-items: center;
        width: fit-content;
    }

    :global(.difficulty-box *:not(span)) {
        color: goldenrod;
        font-size: 20px;
    }

    :global(.difficulty-box span) {
        margin-right: 1rem;
        font-size: var(--step-3);
        font-weight: 800;
    }
</style>
