<script>
    export let data;
</script>

<main>
    <h1>Costumes</h1>
    {#each data.costumes as costume}
        <div class="box surface">
            <div class="flex" style="gap: 0.5rem">
                {#if costume.thumb}
                    <img src={costume.thumb} alt="" style="flex: 0" />
                {/if}
                <div class="grid">
                    <h5>{costume.name}</h5>
                    <div>{costume.id}</div>
                </div>
            </div>
            <div>{costume.desc}</div>
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
