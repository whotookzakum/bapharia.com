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
        <nav class="grid gap-2">
            <a
                href="/classes"
                class="styled-link mini-header"
                class:hide-on-phone={$page.url.pathname === "/classes"}
                >Classes</a
            >
            <ul>
                {#each data.allClasses as { href, title, isNew }}
                    <li>
                        <details use:detailsRef data-href={href}>
                            <summary class="arrow-discreet">
                                {title}
                                {#if isNew}
                                    <Tag isNew style="margin-left: 0.5rem;"
                                        >New</Tag
                                    >
                                {/if}
                            </summary>
                            <div class="grid mt-2 mb-4">
                                {#each SUBLINKS as { name, path }}
                                    <a
                                        href={href + path}
                                        class="styled-link pl-4"
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
        border-left: 2px solid var(--surface2);
        line-height: 1.75;
    }

    a.active {
        border-left: 2px solid var(--accent1);
        margin-left: -2px;
    }
</style>
