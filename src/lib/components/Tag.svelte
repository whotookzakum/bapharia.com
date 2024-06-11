<script>
    export let style = "";
    export let bg = false;
    export let isNew = false;
    export let blur = false;
</script>

<i class="flex gap-1" class:bg class:backdrop-blur-md={blur} {style} class:new={isNew}>
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
        color: var(--text1);
        min-width: 2ch; 
        justify-content: center;
    }

    .bg {
        color: white;
        background: linear-gradient(335deg, var(--surface1), var(--surface3));
        border: 1px solid var(--surface3);
        // background: linear-gradient(335deg, rgba(0, 0, 0, 0.9), rgba(22, 24, 51, 0.9));
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .new {
        background: orange;
        color: white !important;
        font-size: var(--step--1);
        text-shadow: 0 0 8px var(--surface3);
        box-shadow: 0 2px 8px var(--surface3);
        box-shadow: 0 2px 8px rgba(255, 166, 0, 0.3);
        padding: 0.3em 0.4em;
        line-height: 1;
        min-height: unset;
        text-transform: uppercase;
    }
</style>
