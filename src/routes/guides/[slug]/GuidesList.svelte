<script>
    import { page } from "$app/stores";
    export let guides = [];
</script>

<nav class="guides-list grid">
    <a href="/guides" class="btn btn-fadein">Back to Guides</a>
    {#each guides as guide}
        <a
            class="link styled-link"
            class:active={$page.url.pathname === guide.path}
            href={guide.path}>{guide.meta.title}</a
        >
    {/each}
</nav>

<style lang="scss">
    .guides-list {
        grid-column: 1;
        position: sticky;
        max-width: 250px;
        top: 62px;
    }

    .btn {
        font-size: inherit;
        margin: 1rem;
    }

    @media (max-width: 900px) {
        .guides-list {
            grid-column: 2;
            grid-row: 2;
            position: initial;
        }

        a:not(.btn) {
            display: none;
        }

        .btn {
            margin-inline: 0;
        }
    }
</style>
