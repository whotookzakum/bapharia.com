<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    export let data;
    $: ({ metadata, allGuides, html } = data);
</script>

<MetaTags
    title={`${metadata.title} — Bapharia`}
    description={metadata.caption}
    image={metadata.bannerImg}
    bigImage
/>

<div class="article-layout guide-article">
    <aside class="menu">
        <nav class>
            <ul class="unstyled-list">
                {#each allGuides as { href, title }}
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

    <article>
        <hgroup>
            <p class="mini-header">{metadata.category}</p>
            <h1>{metadata.title}</h1>
            <p>{metadata.caption}</p>
            <p>
                <span class="attribution" style="color: var(--text1)">
                    By {metadata.author}・Last updated {new Date(
                        metadata.date,
                    ).toLocaleDateString()}
                </span>
            </p>
        </hgroup>
        <svelte:component this={html} />
    </article>
</div>
