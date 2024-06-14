<script>
    import Icon from "@iconify/svelte";
    import Tooltip from "./FloatingUI/Tooltip.svelte";

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
    export let initialValue = null;
    export let editButton = false;
    export let inputStyle = "";
    let inputElement;

    $: resetBtnEnabled = initialValue && value !== initialValue;
</script>

<div></div>

<label
    class="input-wrapper"
    {style}
    class:disabled
    class:invalid
    class:invalid-text={invalid}
>
    <span class="visually-hidden">{description}</span>
    {#if prefix}
        <span aria-hidden="true" class="prefix">{prefix}</span>
    {/if}
    <input
        {id}
        class="input"
        type="number"
        inputmode="numeric"
        bind:this={inputElement}
        bind:value
        {max}
        {min}
        {step}
        aria-describedby={describedby}
        {disabled}
        style={inputStyle}
        style:text-align={textAlign}
    />
    {#if suffix}
        <span aria-hidden="true" class="suffix">{suffix}</span>
    {/if}

    {#if editButton && !resetBtnEnabled}
        <Tooltip placement="top">
            <button
                class="accent1 active:opacity-80"
                on:click={() => inputElement.focus()}
            >
                <Icon
                    icon="mingcute:edit-2-line"
                    style="font-size: var(--step-1)"
                />
                <span class="visually-hidden">Edit</span>
            </button>
            <svelte:fragment slot="tooltip">Edit</svelte:fragment>
        </Tooltip>
    {:else}
        <Tooltip placement="top">
            <button
                class="accent1 active:opacity-80"
                on:click={() => (value = initialValue)}
                disabled={!resetBtnEnabled}
            >
                <Icon icon="mi:undo" style="font-size: var(--step-1)" />
                <span class="visually-hidden">Reset</span>
            </button>
            <svelte:fragment slot="tooltip">Reset</svelte:fragment>
        </Tooltip>
    {/if}
</label>

<style lang="scss">
    $margin: 0.4375rem;
    $reset-btn-size: calc(44px - ($margin * 2));

    label.input-wrapper {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: var(--bg);
        border-radius: 0.5rem;
        padding-left: 0.8rem;
        padding-right: $margin;
        font: inherit;
        font-weight: 600;
        min-height: 44px;
        min-width: 44px;
        position: relative;

        &:has(input:disabled) {
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

    .prefix,
    .suffix {
        white-space: nowrap;
    }

    .suffix {
        margin-right: 0.25rem;
    }

    button {
        border-radius: 0.25rem;
        height: $reset-btn-size;
        aspect-ratio: 1/1;
        transition: all 0.15s var(--timing1);
    }

    button:disabled {
        color: var(--text3);
        opacity: 0.8;
    }
</style>
