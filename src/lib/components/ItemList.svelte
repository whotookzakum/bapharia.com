<script>
	import Item from "./Item.svelte";
    export let items;
</script>

<ol class="item-list">
    {#each items as item}
        <Item data={item} />
    {/each}
</ol>

<style lang="scss">
    .item-list {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: var(--space-2xs);
        max-width: 420px;
    }
</style>