<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import GeneralInfo from "./GeneralInfo.svelte";
    import Sources from "./Sources.svelte";
    import Header from "./Header.svelte";

    export let data;
    console.log(data);
</script>

<article class="h-main overflow-y-auto p-8">
    <div class="rounded-2xl">
        <!-- <a href="/db">X</a> -->

        {#key data.resolveType + data.id}
            <MetaTags
                title="{data.text.name} — Bapharia"
                description={data.text.desc ?? "No description available."}
                image={data.assets.iconL ?? data.assets.icon}
            />

            <div class="entry-details grid box">
                <Header {data} />
                <div>
                    <GeneralInfo {data} />
                    <Sources {data} />
                </div>
            </div>
        {/key}
    </div>
</article>

<style lang="scss">
    article {
        max-width: 600px;
    }
</style>