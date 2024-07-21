<script>
    import { page } from "$app/stores";
    export let data;
</script>

<div class="panes">
    <aside class="side-pane">
        <nav>
            <a href="/story" class="styled-link mini-header">Story</a>
            <ul class="unstyled-list">
                <li>
                    <a
                        href="/story/characters"
                        class="styled-link"
                        class:active={$page.url.pathname.includes(
                            "/story/characters",
                        )}>Characters</a
                    >
                </li>
                <li>
                    <a
                        href="/story/timeline"
                        class="styled-link"
                        class:active={$page.url.pathname.includes(
                            "/story/timeline",
                        )}>Timeline</a
                    >
                </li>
                {#each data.allPosts as { href, chapter }}
                    <li>
                        <a
                            {href}
                            class="styled-link"
                            class:active={$page.url.pathname.includes(href)}
                            >{chapter}</a
                        >
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>
    <slot />
</div>
