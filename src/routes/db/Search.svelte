<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { userLocale } from "$lib/stores";
    import { userSearch } from "./stores"

    // const placeholderText = {
    //     ja_JP: "アイテム名かIDで検索",
    //     en_US: "Search by item name or id",
    // };
    export let totalEntries = 0;

    const placeholderText = {
        ja_JP: `${totalEntries.toLocaleString()}件を検索`,
        en_US: `Search ${totalEntries.toLocaleString()} entries`,
    };

    $userSearch = $userSearch || $page.url.searchParams.get("search") || ""

    if ($userSearch) {
        $page.url.searchParams.set("search", $userSearch)
    }

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
        width: 100%;
    }
</style>