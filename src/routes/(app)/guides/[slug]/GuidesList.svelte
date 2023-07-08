<script>
    import { page } from "$app/stores";
    export let guides = [];
    console.log(guides)
</script>

<nav class="pages-list grid">
    <a href="/guides" class="btn btn-fadein">Back to Guides</a>
    {#each guides as guide}
        <a
            class="link styled-link"
            class:active={$page.url.pathname === guide.path}
            href={guide.path}>{guide.meta.title}</a
        >
    {/each}
</nav>