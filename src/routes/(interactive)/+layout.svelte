<main id="main" tabindex="-1">
    <slot />
</main>

<style>
    main {
        height: calc(100vh - 62px);
    }

    @media (max-width: 1150px) {
        main {
            height: 100vh;
        }
    }
</style>