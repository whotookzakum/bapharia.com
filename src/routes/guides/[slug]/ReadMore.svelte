<script>
    import { page } from "$app/stores";
    export let guides = [];
    let currentGuide, currentGuideIndex;

    $: {
        currentGuide = guides.find((guide) =>
            $page.url.pathname.includes(guide.path)
        );
        currentGuideIndex = guides.indexOf(currentGuide);
    }
</script>

<footer class="grid">
    {#if guides[currentGuideIndex - 1]}
        <div class="option">
            <span class="component-label">PREVIOUS</span>
            <a href={guides[currentGuideIndex - 1].path} class="styled-link"
                >{guides[currentGuideIndex - 1].meta.title}</a
            >
        </div>
    {/if}
    {#if guides[currentGuideIndex + 1]}
        <div class="option" style="text-align: right;">
            <span class="component-label">NEXT</span>
            <a href={guides[currentGuideIndex + 1].path} class="styled-link"
                >{guides[currentGuideIndex + 1].meta.title}</a
            >
        </div>
    {/if}
</footer>

<style lang="scss">
    footer {
        grid-column: 2;
        border-top: 1px solid var(--surface2);
        padding-block: 1.5rem 1rem;
        margin-top: 2rem;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(25ch, 1fr));
    }

    .option {
        color: var(--text2);

        .component-label {
            display: block;
            user-select: none;
        }

        a {
            font-size: var(--step-1);
            color: var(--accent1);
        }
    }
</style>
