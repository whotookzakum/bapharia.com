<script>
    import { page } from "$app/stores";
    import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS } from "$lib/stores";
    import uniq from "lodash/uniq";

    export let href = "";

    let newHref;
    let publisherFragment = `/${href.replace(SUPPORTED_PUBLISHERS[0], "")}`;
    let langFragment = `/${$page.data.lang.replace(SUPPORTED_LANGS[0], "")}`;

    $: {
        const path =
            publisherFragment +
            langFragment +
            $page.url.pathname
                // Prevent the current publisher from being added to the link
                .replace(`/${$page.data.publisher}`, href)
                // Prevent the default publisher from being added to the link in incorrect order after langFragment such as /ja/ags
                .replace(`/${SUPPORTED_PUBLISHERS[0]}`, "");

        newHref =
            // Remove duplicates such as /bno/fr/bno/fr
            uniq(path.split("/")).join("/");

        if (newHref.length < 1) newHref = "/"
    }
</script>

<a
    href={newHref}
    class:active={newHref === $page.url.pathname.split("#")[0]}
    {...$$restProps}
>
    {newHref}
    <slot />
</a>
