<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Icon from "@iconify/svelte";
    export let data;
    $: ({ metadata, html, readingTime } = data);
</script>

<MetaTags
    title={`${metadata.title} — Bapharia`}
    description={metadata.caption}
    image={metadata.bannerImg}
    bigImage
    readingTime={metadata.readingTime}
/>

<article class="main-pane">
    <hgroup>
        <p class="mini-header">{metadata.category}</p>
        <h1>{metadata.title}</h1>
        <p>{metadata.caption}</p>
        <p
            class="attribution flex g-25"
            style="margin: 0.5rem 0; align-items: center;"
        >
            <Icon icon="ph:fire-bold" style="font-size: var(--step-1); color: var(--accent1)" />
            <span style="margin-right: 1rem">
                {metadata.readingTime} minute read
            </span>
            <Icon icon="tabler:edit" style="font-size: var(--step-1); color: var(--accent1)" />
            <span>
                Last updated {new Date(metadata.date).toLocaleDateString()}
            </span>
        </p>
    </hgroup>
    <svelte:component this={html} />
</article>
