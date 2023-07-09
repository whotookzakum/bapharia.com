<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { userLocale, userSearch } from "$lib/stores";

    const placeholderText = {
        ja_JP: "アイテム名かIDで検索",
        en_US: "Search by item name or id",
    };

    $userSearch = $page.url.searchParams.get("search") || ""

    const updateUrl = () => {
        $userSearch
            ? $page.url.searchParams.set("search", $userSearch)
            : $page.url.searchParams.delete("search");

        // Results are pushed to history, but searches are not.
        // To add searches, create a separate function debouncing goto().
        // Without debounce, every letter will be added to history = bad UX.
        // However, as a consequence, the address bar won't update immediately.
        goto(`?${$page.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: true,
            keepFocus: true,
            invalidateAll: true
        });
    };
</script>

<input
    class="box"
    id="search-box"
    type="search"
    placeholder={placeholderText[$userLocale]}
    bind:value={$userSearch}
    on:input={updateUrl}
/>

<style lang="scss">
    #search-box {
        min-width: 30ch;
    }
</style>