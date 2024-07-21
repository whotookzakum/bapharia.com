<script>
    export let min = 1;
    export let max = 1;
    export let step;
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
    export let placeholder = "";
    export let inputFunction;
</script>

<label class="input-wrapper" {style} class:disabled class:invalid>
    <span class="visually-hidden">{description}</span>
    {#if prefix}
        <span aria-hidden="true" class="prefix">{prefix}</span>
    {/if}
    <input
        {id}
        class="input"
        type="text"
        inputmode="numeric"
        bind:value
        {max}
        {min}
        {step}
        aria-describedby={describedby}
        {disabled}
        style:text-align={textAlign}
        {placeholder}
        on:input={inputFunction}
    />
    {#if suffix}
        <span aria-hidden="true" class="suffix">{suffix}</span>
    {/if}
</label>

<style lang="scss">
    label.input-wrapper {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: var(--bg);
        border-radius: 0.5rem;
        padding-inline: 0.8rem;
        font: inherit;
        font-weight: 600;
        min-height: 44px;
        min-width: 44px;

        &:has(:disabled) {
            color: var(--text2);
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
        }
    }

    @supports not selector(:has(*)) {
        .input-wrapper.disabled {
            color: var(--text2);
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
        }
    }

    input.input {
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        width: 100%;
        height: 100%;
    }

    .prefix, .suffix {
        white-space: nowrap;
        // color: var(--text2);
    }
</style>
