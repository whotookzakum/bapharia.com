<script>
    export let data
</script>

<h2>Stamps</h2>
{#each data.stamp_data as stamp}
    <img
        src={`/UI/Icon/Stamp/UI_Stamp_${stamp.stamp_id}.png`}
        alt={`Stamp ${stamp.stamp_id}`}
        width="90"
        height="90"
    />
{/each}