<script>
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";

    let clicked = false;

    function copyLinkToClipboard() {
        navigator.clipboard.writeText($page.url.href);
        clicked = true;
        setTimeout(() => clicked = false, 1500)
    }
</script>

<button class="flex" on:click={copyLinkToClipboard}>
    <Icon
        icon={clicked
            ? "line-md:clipboard-twotone-to-clipboard-twotone-check-transition"
            : "line-md:clipboard-list-twotone"}
        width="24"
        height="24"
    />
    <span>{clicked ? "Copied!" : "Copy Link"}</span>
</button>

<style lang="scss">
    button {
        margin: 0;
        align-items: center;
        background: none;
        border: none;
        padding: 0;
        font-size: var(--step--2);

        &:hover,
        &:focus-visible {
            color: var(--accent1);
        }
    }
</style>
