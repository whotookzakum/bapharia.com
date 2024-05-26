<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import GeneralInfo from "./GeneralInfo.svelte";
    import Sources from "./Sources.svelte";
    import Header from "./Header.svelte";
    import Scrollable from "../../Scrollable.svelte";

    export let data;
    console.log(data);
</script>

<Scrollable rootClasses="col-2" viewportStyle="">
    <div class="surface1 p-4 rounded-2xl">
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
    </div>
</Scrollable>
