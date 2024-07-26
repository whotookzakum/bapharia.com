<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Icon from "@iconify/svelte";
    export let data;
    $: ({ metadata, html } = data);
</script>

<MetaTags
    title={`${metadata.title} — Bapharia`}
    description={metadata.caption}
    image={metadata.bannerImg}
    bigImage
/>

<article class="main-pane reset-lists">
    <hgroup>
        <p class="mini-header">{metadata.category}</p>
        <h1>{metadata.title}</h1>
        <p>{metadata.caption}</p>
        <div class="attribution flex gap-4 flex-wrap">
            <p class="flex gap-1 align-items-center">
                <Icon
                    icon="ph:fire-bold"
                    style="font-size: var(--step-1); color: var(--accent1)"
                />
                <span>
                    {metadata.readingTime} minute read
                </span>
            </p>
            <p class="flex gap-1 align-items-center">
                <Icon
                    icon="tabler:edit"
                    style="font-size: var(--step-1); color: var(--accent1)"
                />
                <span>
                    Last updated {new Date(metadata.date).toLocaleDateString()}
                </span>
            </p>
        </div>
    </hgroup>
    <svelte:component this={html} />
</article>