<script>
    export let min = 1;
    export let max = 1;
    export let id = null;
    export let style = null;
    export let value = null;
    export let prefix = "";
    export let description = null;
    export let describedby = null;
    export let disabled = false;
    export let invalid = false;
    export let suffix = "";
    export let textAlign = "left";
</script>

<label class="input-level-wrapper" {style} class:disabled class:invalid>
    <span class="visually-hidden">{description}</span>
    {#if prefix}
        <span aria-hidden="true" class="prefix">{prefix}</span>
    {/if}
    <input
        {id}
        class="input-level"
        type="number"
        inputmode="numeric"
        bind:value
        {max}
        {min}
        aria-describedby={describedby}
        {disabled}
        style:text-align={textAlign}
    />
    {#if suffix}
        <span aria-hidden="true" class="suffix">{suffix}</span>
    {/if}
</label>

<style lang="scss">
    label.input-level-wrapper {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: var(--bg);
        border-radius: 5px;
        padding-inline: 0.8rem;
        font: inherit;
        font-weight: 600;
        min-height: 44px;
        min-width: 44px;

        &:has(:focus-visible) {
            outline: 2px solid var(--accent);
        }

        &:has(:disabled) {
            color: var(--text2);
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
        }
    }

    @supports not selector(:has(*)) {
        .input-level-wrapper:focus-within {
            outline: 2px solid var(--accent);
        }

        .input-level-wrapper.disabled {
            color: var(--text2);
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
        }
    }

    .invalid {
        outline: 2px solid crimson !important;
    }

    input.input-level {
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        width: 100%;
        height: 100%;

        &:focus,
        &:focus-visible {
            outline: none !important;
        }
    }

    .prefix, .suffix {
        white-space: nowrap;
        // color: var(--text2);
    }
</style>
