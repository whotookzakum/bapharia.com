<script>
    import { page } from "$app/stores";
</script>

<div class="panes">
    <aside class="side-pane">
        <nav>
            <a href="/tools" class="styled-link mini-header">Tools</a>
            <ul class="unstyled-list">
                <li>
                    <a
                        href="/tools/battle-imagine-scheduler"
                        class="styled-link"
                        class:active={$page.url.pathname.includes(
                            "/tools/battle-imagine-scheduler",
                        )}>Battle Imagine Scheduler</a
                    >
                </li>
            </ul>
        </nav>
    </aside>
    <slot />
</div>
