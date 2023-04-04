<script>
    export let data;
</script>

<main>
    <h1>Gestures</h1>
    {#each data.gestures as gesture}
        <div class="box surface">
            <div class="flex" style="gap: 0.5rem">
                <img src={gesture.thumb} alt="" style="flex: 0" />
                <div class="grid">
                    <h5>{gesture.name}</h5>
                    <div>{gesture.id}</div>
                </div>
            </div>
        </div>
    {/each}
</main>

<style lang="scss">
    main {
        margin: auto;
        max-width: 65ch;
        display: grid;
        gap: 0.5rem;
    }

    h5 {
        margin: 0;
    }

    h6 {
        font-size: inherit;
        margin-top: 0.5rem;
        color: var(--accent);
    }
</style>
