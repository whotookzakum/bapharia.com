<script>
    export let bannerUrl = "";
    export let style = ""
</script>

<header
    class="hero-banner full-bleed centered-section"
    style:background-image="url({bannerUrl})"
    {style}
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
    }

    .backdrop {
        position: absolute;
        inset: 0;
        background: linear-gradient(rgba(0, 0, 0, 0.4), var(--bg) 90%);
        background: rgba(0, 0, 0, var(--backdrop-opacity, 0.8));
        z-index: -1;
    }

    @media (max-width: 1150px) {
        // Full screen on mobile version
        // header.hero-banner {
        //     display: grid;
        //     place-items: center;
        // 	place-content: center;
		// 	min-height: 690px;
		// }

        // Padding version
        header.hero-banner {
            padding-top: calc(20vh + 62px);
        }
    }
</style>
