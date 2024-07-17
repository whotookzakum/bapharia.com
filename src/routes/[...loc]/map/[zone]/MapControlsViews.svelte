<script>
    import Icon from "@iconify/svelte";
    export let viewType = "list-view";
    export let id = "";
</script>

<div class="view-controls flex gap-1">
    <input
        type="radio"
        id="{id}RadioListView"
        class="visually-hidden"
        value="list-view"
        bind:group={viewType}
    />
    <label class="grid" for="{id}RadioListView">
        <Icon icon="ic:baseline-list" width="24" height="24" />
        <span class="visually-hidden">Grid view</span>
    </label>

    <input
        type="radio"
        id="{id}RadioGridView"
        class="visually-hidden"
        value="grid-view"
        bind:group={viewType}
    />
    <label class="grid" for="{id}RadioGridView">
        <Icon icon="ic:outline-grid-view" width="24" height="24" />
        <span class="visually-hidden">Grid view</span>
    </label>
</div>

<style lang="scss">
    label {
        color: var(--text2);
        width: 36px;
        aspect-ratio: 1/1;
        border-radius: 5px;
        place-content: center;
    }

    input:focus-visible + label,
    label:hover {
        background: var(--surface2);
        color: var(--text1);
    }

    input:checked + label {
        color: var(--accent1);
    }
</style>
