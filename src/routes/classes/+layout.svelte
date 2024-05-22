<script>
    import { page } from "$app/stores";
    import Tag from "$lib/components/Tag.svelte";

    export let data;

    const SUBLINKS = [
        {
            name: "Overview",
            path: "",
        },
        {
            name: "Skills",
            path: "/skills",
        },
        {
            name: "Meta",
            path: "/meta",
        },
    ];

    const detailsRef = (node) => {
        node.open = $page.url.pathname.includes(node.getAttribute("data-href"));
    };
</script>

<div class="panes">
    <aside class="side-pane">
        <nav class="grid g-100">
            <a
                href="/classes"
                class="styled-link mini-header"
                class:hide-on-phone={$page.url.pathname === "/classes"}
                >Classes</a
            >
            <ul class="unstyled-list">
                {#each data.allClasses as { href, title, isNew }}
                    <li>
                        <details use:detailsRef data-href={href}>
                            <summary>
                                {title}
                                {#if isNew}
                                    <Tag isNew style="margin-left: 0.5rem;"
                                        >New</Tag
                                    >
                                {/if}
                            </summary>
                            <div class="grid g-50">
                                {#each SUBLINKS as { name, path }}
                                    <a
                                        href={href + path}
                                        class="styled-link"
                                        class:active={$page.url.pathname ===
                                            href + path}
                                    >
                                        {name}
                                    </a>
                                {/each}
                            </div>
                        </details>
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>
    <slot />
</div>

<style lang="scss">
    details .grid {
        margin-block: 1rem 1.5rem;
        border-left: 1px solid var(--surface2);
        margin-left: 0.5rem;

        a {
            padding-left: 1rem;
        }

        a.active {
            border-left: 2px solid var(--accent1);
            margin-left: -2px;
        }
    }

    // details .grid {
    //     padding-block: 1rem;
    //     padding-left: 1rem;
    //     border-bottom: 1px solid var(--surface1);
    // }
</style>
