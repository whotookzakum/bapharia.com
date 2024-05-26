<script>
    import { page } from "$app/stores";
    export let data;
</script>

<div class="panes">
    <aside class="side-pane">
        <nav>
            <a href="/guides" class="styled-link mini-header">Guides</a>
            <ul class="unstyled-list">
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
