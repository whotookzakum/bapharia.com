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

<div class="hi"></div>

<style lang="scss">
    .hi {
        // Blob style
        background: radial-gradient(
                140% 173% at 70% 65%,
                rgba(20, 161, 255, 0.055),
                transparent 30%
            ),
            radial-gradient(
                100% 140% at 30% 45%,
                rgba(255, 20, 145, 0.035),
                transparent 30%
            ),
            radial-gradient(
                180% 140% at 52.3% 31%,
                rgba(0, 162, 255, 0.033),
                transparent 30%
            ),
            radial-gradient(
                180% 140% at 52.3% 31%,
                rgba(20, 255, 118, 0.035),
                transparent 30%
            );

        // Ambient spotlight
        background: radial-gradient(
                140% 173% at 70% 65%,
                hsla(308, 57%, 19%, 0.5),
                transparent 30%
            ),
            radial-gradient(
                100% 140% at 30% 45%,
                hsla(269, 45%, 23%, 0.5),
                transparent 30%
            ),
            radial-gradient(
                180% 140% at 100% 100%,
                hsla(248, 46%, 27%, 0.5),
                transparent 30%
            ),
            radial-gradient(
                180% 140% at 0% 0%,
                hsla(227, 61%, 26%, 0.5),
                transparent 30%
            );

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        animation: 2.4s ease 1 forwards fadein;
    }

    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
