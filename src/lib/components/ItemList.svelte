<script>

</script>

<ol class="item-list">
    <slot/>
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