<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Icon from "@iconify/svelte";
    export let data;
    $: ({ metadata, html } = data);
</script>

<MetaTags
    title={`${metadata.title} — Bapharia`}
    description=""
/>

<article class="main-pane">
    <hgroup>
        <p class="mini-header">{metadata.chapter}</p>
        <h1>{metadata.title}</h1>
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
        </div>
    </hgroup>
    <svelte:component this={html} />
</article>