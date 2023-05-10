<script>
    import "$lib/styles/_article.scss";
    import PageFooter from "$lib/components/PageFooter.svelte";
    import { page } from "$app/stores";
    let guides = $page.data.guides;
    const categories = [...new Set(guides.map((guide) => guide.meta.category))]; // Get unique categories programmatically, but will reorder categories based on most recent

    // data-sveltekit-reload on <a> ?
</script>

<main class="guide">
    <div class="all-guides-wrapper">
        <a href="/#db">Home</a>
        <span>All Guides</span>
        <hr />
        <nav class="guides-list">
            {#each categories as category}
                <span class="component-label">{category}</span>
                <ol>
                    {#each guides.filter((g) => g.meta.category === category) as guide}
                        <li>
                            <a
                                class:active={$page.url.pathname === guide.path}
                                href={guide.path}>{guide.meta.title}</a
                            >
                        </li>
                    {/each}
                </ol>
            {/each}
        </nav>
    </div>
    <slot />
    <PageFooter />
</main>