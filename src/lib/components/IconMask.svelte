<script>
    import { assetUrl } from "$lib/utils";

    export let src = "";
    export let width = 32;
    export let height = 32;
</script>

<span
    class="icon-mask"
    style:width="{width}px"
    style:height="{height}px"
    style:mask-image="url('{assetUrl(src)}')"
    style:-webkit-mask-image="url('{assetUrl(src)}')"
    {...$$restProps}
/>

<style lang="scss">
    .icon-mask {
        display: block;
        background-color: var(--text2);
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: 50%;
        -webkit-mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: 50%;
        transition: background-color 0.15s var(--timing1);
    }

    :global(input[type="radio"]:checked + .icon-mask) {
        background-color: var(--accent1);
    }
</style>
