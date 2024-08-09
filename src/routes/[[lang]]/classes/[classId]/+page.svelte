<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import TYPES_TEXT from "$api/utils/categories.json";
    import { userLocale } from "$lib/stores"
    import { assetUrl } from "$lib/utils"

    export let data;
    $: ({ metadata, html } = data);
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
                    <Tooltip inline>
                        <img
                            src={assetUrl(`/UI/Icon/Attribute/UI_IconAttribute_${element}.webp`)}
                            alt={TYPES_TEXT[$userLocale].Element[element]}
                            width="48"
                            height="48"
                        />
                        <svelte:fragment slot="tooltip">{TYPES_TEXT[$userLocale].Element[element]}</svelte:fragment>
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
