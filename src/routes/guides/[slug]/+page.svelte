<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    export let data;
    $: ({ metadata, html } = data);
</script>

<MetaTags
    title={`${metadata.title} — Bapharia`}
    description={metadata.caption}
    image={metadata.bannerImg}
    bigImage
/>

<article class="main-pane">
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
