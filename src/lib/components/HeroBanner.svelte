<script>
    export let bannerUrl = "";
</script>

<header
    class="hero-banner full-bleed centered-section"
    class:backdrop={bannerUrl}
    
>
    {#if bannerUrl}
        <img class="bg-img" src={bannerUrl} alt="" loading="lazy" />
    {/if}
    <slot />
</header>

<style lang="scss">
    header.hero-banner {
        background-position: 50% 50%;
        background-size: cover;
        padding: 20vh 1rem;
        position: relative;
    }

    .backdrop::after {
        content: "";
        position: absolute;
        inset: 0;
        background: black;
        z-index: -1;
        opacity: 0.8;
    }

    .bg-img {
        position: absolute;
        inset: 0;
        z-index: -2;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
