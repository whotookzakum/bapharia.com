<script>
    import { userLocale, markersVisibility } from "$lib/stores";
    export let name = {
        ja_JP: "-",
        en_US: "-",
    };
    export let icon = "";
    const id = `toggle${name.en_US.replace(" ", "")}`;
</script>

<input
    type="checkbox"
    class="marker-toggle-input visually-hidden"
    {id}
    bind:checked={$markersVisibility[name.en_US]}
/>
<label for={id}>
    <img class="marker-icon" src={icon} alt="" width="48" height="48" />
    <span>{name[$userLocale]}</span>
</label>

<style lang="scss">
    label {
        display: inherit;
        border-radius: 5px;
        background: var(--surface1);
        place-items: center;
        text-align: var(--label-text-align);
        padding: var(--label-padding);
        user-select: none;
        font-size: var(--step--1);
        flex-grow: 1;
        gap: inherit;

        &:hover,
        &:focus-within {
            background: var(--surface2);
        }

        span {
            line-height: 1.4;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    input:not(:checked) + label,
    input:disabled + label {
        filter: brightness(0.7);
        mix-blend-mode: luminosity; 

        // background: var(--bg);
        img {
            filter: brightness(1) grayscale(1);
        }
    }

    :global([color-scheme="light"] .marker-toggle-input:not(:checked) + label) {
        // filter: brightness(1.2) contrast(0.5) !important;
    }
</style>
