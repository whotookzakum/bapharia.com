<script>
    export let stamps;
</script>

<h4>Stamps</h4>
{#each stamps as stamp}
    <img
        src={`/UI/Icon/Stamp/UI_Stamp_${stamp.stamp_id}.png`}
        alt={`Stamp ${stamp.stamp_id}`}
        width="90"
        height="90"
    />
{/each}
