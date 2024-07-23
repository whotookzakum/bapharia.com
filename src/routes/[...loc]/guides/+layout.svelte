<script>
    import { page } from "$app/stores";
    export let data;
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
</svelte:head>

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
