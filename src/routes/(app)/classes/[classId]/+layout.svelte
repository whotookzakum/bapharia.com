<script>
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import PagesList from "$lib/components/layout/PagesList.svelte";
    import classes from "../classes.json";
    import TableOfContents from "$lib/components/layout/TableOfContents.svelte";
    import { page } from "$app/stores";
    import SubpageNav from "./SubpageNav.svelte";

    export let data;
</script>

{#if data?.meta?.title}
    <HeroBanner bannerUrl={data.meta.bannerUrl} style="--backdrop-opacity: 0.76">
        <img
            src="/UI/Icon/ClassXL/UI_IconClassXL_{parseInt(
                $page.params.classId
            ) < 10
                ? `0${$page.params.classId}`
                : $page.params.classId}.png"
            alt=""
            width="128"
            height="128"
            loading="lazy"
        />
        <h1>{data.meta.title}</h1>
        <hr />
        <p class="description">{data.meta.description}</p>
        <hr />
        <p class="class-categories flex">
            {data.meta.range}・{data.meta.classType}・
            {#each JSON.parse(data.meta.elements) as element}
                <!-- "/images/elements/UI_IconAttribute_{element}.png" -->
                <img
                    src="/UI/Icon/Attribute/UI_IconAttribute_{element}.png"
                    alt=""
                    width="32"
                    height="32"
                    style:margin-right="0.25rem"
                />
            {/each}
        </p>
    </HeroBanner>
{/if}

<PagesList links={classes} includeUpperRoutes />

<TableOfContents />

<article id="classPage" class="grid">
    <SubpageNav />
    <slot />
</article>

<style lang="scss">
    .class-categories {
        justify-content: center;
        font-size: var(--step-1);
        font-weight: 600;
        align-items: center;
        margin: 0.5rem auto;
        flex-wrap: wrap;
    }

    hr {
        background: var(--text2);
        max-width: 50ch;
        margin: 1rem auto;
    }

    .description {
        color: var(--text2);
    }

    :global(#classPage :where(h2, h3, h4)) {
        scroll-margin-top: 6rem !important;
    }
</style>
