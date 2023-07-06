<script>
    export let bannerUrl = "";
</script>

<header
    class="hero-banner full-bleed centered-section"
    style="background-image: url({bannerUrl})"
>
    <slot />
    {#if bannerUrl}
        <div class="backdrop" />
    {/if}
</header>

<style lang="scss">
    header.hero-banner {
        background-position: 50% 50%;
        background-size: cover;
        padding: 20vh 1rem;
        position: relative;
        z-index: 1;
        padding-top: calc(20vh + 62px);
    }

    .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: -1;
    }
</style>
