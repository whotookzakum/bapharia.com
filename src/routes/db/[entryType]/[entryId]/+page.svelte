<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import GeneralInfo from "./GeneralInfo.svelte";
    import Sources from "./Sources.svelte";
    import Header from "./Header.svelte";

    export let data;
</script>

{#key data.resolveType + data.id}
    <MetaTags
        title="{data.text.name} — Bapharia"
        description={data.text.desc ?? "No description available."}
        image={data.assets.iconL ?? data.assets.icon}
    />

    <div class="entry-details grid box">
        <Header {data} />
        <article>
            <GeneralInfo {data} />
            <Sources {data} />
        </article>
    </div>
{/key}
