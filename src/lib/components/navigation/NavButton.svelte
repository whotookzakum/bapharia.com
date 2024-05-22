<script>
    // import Popper from "../Popper.svelte";

    export let showing = false;
    export let ariaLabel = "";
    export let tooltip = "";
</script>

<!-- <Popper let:setFocused placement="bottom">
    <button
        aria-label={ariaLabel}
        aria-live="polite"
        class:showing
        on:click={() => {
            showing = !showing;
        }}
    >
        <slot />
    </button>
    <p slot="tooltip" aria-hidden="true" class:hide={showing}>{tooltip}</p>
</Popper> -->

<style lang="scss">
    button {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        pointer-events: auto;
        background: none;
        border: none;
        border-radius: 50%;
        transition: translate 0.15s ease;
        font-size: var(--step-4);
        color: var(--text3);

        &:hover,
        &:focus-visible {
            color: var(--text2);
            background-color: var(--surface1);
        }

        &.showing {
            background-color: var(--surface1);
        }

        &:active {
            translate: 0 1px;
        }
    }
</style>
