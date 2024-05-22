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

<article class="main-pane">
    <hgroup>
        <p class="mini-header">{metadata.category}</p>
        <h1>{metadata.title}</h1>
        <p>{metadata.caption}</p>
        <div class="attribution flex g-100 flex-wrap">
            <p class="flex g-25 align-items-center">
                <Icon
                    icon="ph:fire-bold"
                    style="font-size: var(--step-1); color: var(--accent1)"
                />
                <span>
                    {metadata.readingTime} minute read
                </span>
            </p>
            <p class="flex g-25 align-items-center">
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

<style lang="scss">
    .attribution {
        margin: 0.5rem 0;
    }

    .attribution p {
        font: inherit;
        color: inherit;
        letter-spacing: inherit;
    }
</style>