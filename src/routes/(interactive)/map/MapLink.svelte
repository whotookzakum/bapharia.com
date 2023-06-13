<script>
    import { mapListShowZones, userLocale } from "$lib/stores";
    export let name = {
        ja_JP: "-",
        en_US: "-",
    };
    export let href = "/map";
    export let icon = "";
    export let zones = [];
    export let viewType = "";
</script>

<a {href}>
    {#if viewType === "grid-view"}
        <img src={icon} alt="" width="192" height="108" loading="lazy" />
    {/if}
    <span>{name[$userLocale]}</span>
    {#if $mapListShowZones && zones && zones.length > 0}
        <hr />
        <ul class="zones-list">
            {#each zones as zone}
                <li>{zone.name[$userLocale]}</li>
            {/each}
        </ul>
    {/if}
</a>

<style lang="scss">
    a {
        display: inherit;
        line-height: 1.4;
        border: none;
        border-radius: 5px;
        background: var(--surface2);
        place-items: center;
        text-align: var(--link-text-align);
        padding: var(--link-padding);
        font-size: var(--step--1);
        flex-grow: 1;
        gap: inherit;
        flex-wrap: wrap;
        align-content: start;

        &:hover,
        &:focus-within {
            background: var(--surface3);
            color: inherit;
        }

        * {
            width: 100%;
        }
    }

    hr {
        margin: 0;
    }

    .zones-list {
        padding: 0 1rem;
        gap: 0;
        font-size: var(--step--1);
        text-align: left;
        max-inline-size: none;
        color: var(--text2);
    }

    img {
        display: var(--img-display);
        height: auto;
    }

    input:not(:checked) + label,
    input:disabled + label {
        filter: brightness(0.6);
        img {
            filter: brightness(1) grayscale(1);
        }
    }

    :global([color-scheme="light"] .marker-toggle-input:not(:checked) + label) {
        filter: brightness(1.2) contrast(0.5) !important;
    }
</style>
