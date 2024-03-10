<script>
    export let style = "";
    export let bg = false;
</script>

<i class="flex g-25" class:bg {style}>
    <slot />
</i>

<style lang="scss">
    i {
        font-size: var(--step--1);
        font-style: normal;
        align-items: center;
        font-weight: 600; // 600 or 700
        padding: 2px 0.3rem;
        min-height: 24px;
        border-radius: 5px;
    }

    .bg {
        color: white;
        background: linear-gradient(335deg, var(--surface1), var(--surface3));
        border: 1px solid var(--surface3);
        // background: linear-gradient(335deg, rgba(0, 0, 0, 0.9), rgba(22, 24, 51, 0.9));
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>