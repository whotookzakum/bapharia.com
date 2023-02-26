<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    function goToUpdatedUrl() {
        goto(`?${$page.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: true,
            keepFocus: true,
        });
    }

    export function set(param, value) {
        $page.url.searchParams.set(param, value)
        goToUpdatedUrl()
    }

    export function clear(param) {
        $page.url.searchParams.delete(param)
        goToUpdatedUrl()
    }
</script>
