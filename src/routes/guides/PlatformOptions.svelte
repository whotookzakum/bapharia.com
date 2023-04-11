<script>
    import { platformId } from "$lib/stores";

    const PLATFORMS = [
        {
            id: 1,
            name: "PC",
        },
        {
            id: 2,
            name: "PlayStation",
        },
        {
            id: 3,
            name: "Xbox",
        },
    ];
</script>

<div class="box">
    {#each PLATFORMS as platform}
        <label>
            <input
                type="radio"
                name="platform"
                value={platform.id}
                bind:group={$platformId}
            />
            {platform.name}
        </label>
    {/each}
</div>