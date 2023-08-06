<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { userLocale } from "$lib/stores.js";

    export let data;
</script>

<MetaTags title="{data.name[$userLocale]} — Bapharia" />

<h1>{data.name[$userLocale]}</h1>
<slot />
