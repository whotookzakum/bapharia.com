<script>
    import { userLocale } from "$lib/stores";
    import { userSearch } from "./stores";

    export let totalEntries = 0;

    const placeholderText = {
        ja_JP: `${totalEntries.toLocaleString()}件を検索`,
        en_US: `Search ${totalEntries.toLocaleString()} entries`,
    };
</script>

<input
    class="box"
    id="search-box"
    type="search"
    placeholder={placeholderText[$userLocale]}
    bind:value={$userSearch}
    style="width: 100%"
/>
