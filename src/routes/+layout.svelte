<script>
    import "$lib/styles/globals.scss";
    import Navbar from "$lib/components/navigation/Navbar.svelte";
    import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
    import "./three-column.scss";
    import PageFooter from "$lib/components/navigation/PageFooter.svelte";
    import { page } from "$app/stores";
</script>

<GoogleAnalytics properties={["G-WFYTLGB8B9"]} />
<Navbar />

<main
    id="main"
    class="layout"
    tabindex="-1"
    class:three-column={$page.url.pathname.includes("guides/") ||
        $page.url.pathname.includes("classes/")}
>
    <slot />
</main>

{#if !$page.url.pathname.includes("/map")}
    <PageFooter />
{/if}
