<script>
    import { page } from "$app/stores";
    let upperPath = $page.url.pathname.split("/")[1]; // "classes" or "guides"
    export let links = [];
    export let includeUpperRoutes = false;
</script>

<nav class="pages-list grid">
    <a href="/{upperPath}" class="btn btn-fadein">Back to {upperPath}</a>
    {#each links as link}
        <a
            class="link styled-link"
            class:active={
                $page.url.pathname === link.path ||
                $page.url.pathname === link.href ||
                includeUpperRoutes && $page.url.pathname.includes(link.href)
            }
            href={link.path || link.href}>{link.meta?.title || link.name}</a
        >
    {/each}
</nav>
