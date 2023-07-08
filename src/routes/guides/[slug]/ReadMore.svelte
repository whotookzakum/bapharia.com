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

<footer>
    <h2 class="toc-exclude">Up next..</h2>
    <div class="up-next grid">
        {#each Array(3) as _, index}
            {#if index > 0 && guides.length - currentGuideIndex > index}
                <div class="up-next-option grid g-50">
                    <a href="/" class="toc-exclude">{guides[currentGuideIndex + index].meta.title}</a>
                    <p>{guides[currentGuideIndex + index].meta.caption}</p>
                </div>
            {/if}
        {/each}
    </div>
</footer>

<style lang="scss">
    footer {
        grid-column: 2;
        border-top: 1px solid var(--surface2);
        padding: 1rem 0;
        margin: 1rem auto;
        max-width: 900px;
    }

    .up-next {
        margin: 1rem 0;
        gap: 1rem;
        grid-template-columns: 1fr 1fr;
    }

    h2,
    p {
        margin: 0;
    }

    p {
        line-height: 1.4;
        font-size: var(--step-0);
    }

    .up-next-option {
        flex: 1;
        background: var(--surface1);
        padding: 1rem;
        border-radius: 1rem;
        color: var(--text2);
        position: relative;
        overflow: hidden;
        align-content: start;

        a {
            font-size: var(--step-3);
        }

        &:not(:where(:hover, :focus-within)) a {
            text-decoration: none;
        }

        &:hover,
        &:focus-within {
            background: var(--surface2);
        }
    }

    a::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
    }
</style>
