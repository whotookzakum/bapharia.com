<main id="main" tabindex="-1">
    <slot />
</main>

<style>
    main {
        position: relative;
    }

    @media (max-width: 850px) {
        main {
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            position: relative;
        }
    }
</style>
