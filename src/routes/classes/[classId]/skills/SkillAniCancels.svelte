<script>
    import Icon from "@iconify/svelte";

    export let data = [];

    const cancels = data.filter((id) => typeof id === "number");
    const recommended = data
        .filter((id) => typeof id === "string")
        .map((id) => parseInt(id));

    const techniques = [
        {
            type: 1,
            text: "Dodge",
        },
        {
            type: 2,
            text: "Jump",
        },
        {
            type: 3,
            text: "Class Action",
        },
        {
            type: 4,
            text: "Springboard Jump",
        },
        {
            type: 5,
            text: "Battle Imagine",
        },
        {
            type: 6,
            text: "Ultimate Skill",
        },
        {
            type: 7,
            text: "Treasure Chest",
        },
        {
            type: 8,
            text: "Supplier",
        },
    ];
</script>

<h3 class="mini-header">Animation Cancels</h3>
<ul class="mini-header">
    {#each techniques as technique}
        <li
            class:recommended={recommended.includes(technique.type)}
            class:enabled={cancels.includes(technique.type)}
        >
            <Icon
                icon={recommended.includes(technique.type)
                    ? "mdi:checkbox-marked-circle-auto-outline"
                    : cancels.includes(technique.type)
                      ? "mdi:checkbox-marked-circle-outline"
                      : "mdi:checkbox-blank-circle-outline"}
                style="font-size: var(--step-1)"
            />
            {technique.text}
        </li>
    {/each}
</ul>
<div class="flex gap-4 flex-wrap">
    <small class="flex items-center gap-1 text3 font-semibold">
        <Icon icon="mdi:checkbox-blank-circle-outline" /> No known cancels
    </small>
    <small class="flex items-center gap-1 text1 font-semibold">
        <Icon icon="mdi:checkbox-marked-circle-outline" /> Cancel available
    </small>
    <small
        class="flex items-center gap-1 font-semibold"
        style="color: var(--success);"
    >
        <Icon icon="mdi:checkbox-marked-circle-auto-outline" /> Recommended cancel
    </small>
</div>

<style lang="scss">
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-block: 0.5rem 1rem;
    }

    li {
        padding: 0.5rem 0.75rem;
        background: var(--surface2);
        border-radius: 0.5rem;
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .enabled {
        color: var(--text1);
        background: var(--surface3);
    }

    .recommended {
        background: var(--surface3);
        color: var(--success);
    }

    // .enabled, .recommended {
    //     outline: 2px solid currentColor;
    // }
</style>
