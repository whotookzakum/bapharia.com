<script>
    export let data;
</script>

<main>
    <h1>Stamps</h1>
    {#each data.stampSets as stampSet}
        <div class="box surface">
            <div class="flex" style="gap: 0.5rem">
                <img src={stampSet.thumb} alt="" style="flex: 0" />
                <div class="grid">
                    <h5>{stampSet.name}</h5>
                    <div>{stampSet.category_id}</div>
                </div>
            </div>
            {#each stampSet.stamp_data as stamp}
                <img
                    src={`/UI/Icon/Stamp/UI_Stamp_${stamp.stamp_id}.png`}
                    alt=""
                    width="90"
                    height="90"
                />
            {/each}
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
