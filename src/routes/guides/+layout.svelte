<script>
    import { page } from "$app/stores";
    import MetaTags from "$lib/components/MetaTags.svelte";
    export let data;
</script>

<div class="panes">
    <aside class="side-pane">
        <nav>
            <ul class="unstyled-list" data-pane-title="Guides">
                {#each data.allGuides as { href, title }}
                    <li>
                        <a
                            {href}
                            class="styled-link"
                            class:active={$page.url.pathname.includes(href)}
                            >{title}</a
                        >
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>
    <slot />
</div>
