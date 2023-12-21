<script>
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import ConversionTool from "./ConversionTool.svelte";
    import Options from "./Options.svelte";
    import PricingChart from "./PricingChart.svelte";

    let showDetails;

    // possibly add conversion rate editor in the future
    // TODO: grab conversion rates from https://github.com/hakanensari/frankfurter
</script>

<MetaTags
    title="Rose Orb Calculator — Bapharia"
    description="A comparison of purchase value between various Rose Orb packages, on all available platforms."
    image="/guides/microtransactions/banner.webp"
    bigImage
/>

<HeroBanner bannerUrl="/aa/2.png">
    <h1>Rose Orb Calculator</h1>
    <p>
        A comparison of purchase value between various Rose Orb packages, on all
        available platforms.
    </p>
</HeroBanner>

<div class="grid g-100" style="margin-top: 1.5rem; max-width: 800px">
    <p style="margin: 0">
        The tools below allow for price-conversion and quick comparison between
        Rose Orb packages that are currently available in the shop. Dates are
        converted to your local time zone.
    </p>
    <p style="margin:0">
        Learn more about Rose Orbs in <a
            href="/guides/microtransactions#rose-orbs">this guide</a
        >.
    </p>
    <Options bind:showDetails />
    <ConversionTool />
    <PricingChart bind:showDetails />
</div>