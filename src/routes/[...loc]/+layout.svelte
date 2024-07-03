<script>
    import "$lib/styles/globals.scss";
    import Navbar from "$lib/components/navigation/Navbar.svelte";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    import PageFooter from "$lib/components/navigation/PageFooter.svelte";
    import { page } from "$app/stores";

    export let data;
    $: ({ publisher, lang } = data)
</script>

<GoogleAnalytics properties={["G-WFYTLGB8B9"]} />
<Navbar {publisher} {lang} />

<main id="main" class="layout" tabindex="-1">
    <slot />
</main>

{#if !$page.url.pathname.includes("/map")}
    <!-- <PageFooter /> -->
{/if}

<!-- <div class="ambience" /> -->
