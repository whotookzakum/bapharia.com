<script>
    import { page } from "$app/stores";
    import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS } from "$lib/constants";
    import uniq from "lodash/uniq";

    export let href = "";

    let newHref;
    $: publisherFragment = `/${$page.data.publisher.replace(SUPPORTED_PUBLISHERS[0], "")}`;
    let langFragment = href;

    $: {
        const path =
            publisherFragment +
            langFragment +
            $page.url.pathname
                // Prevent the current lang from being added to this link, resulting in /ja/fr
                .replace(`/${$page.data.lang}`, href)
                // Prevent the default publisher from being added to the link in incorrect order after langFragment such as /ja/ags
                .replace(`/${$page.data.publisher}`, "");

        newHref =
            // Remove duplicates such as /bno/fr/bno/fr
            uniq(path.split("/"))
                .join("/")
                // Prevent the default lang from being added as it is unnecessary
                .replace(`/${SUPPORTED_LANGS[0]}`, "");

        if (newHref.length < 1) newHref = "/"
    }
</script>

<a
    href={newHref}
    class:active={`/${$page.data.lang}` === href}
    {...$$restProps}
>
    <slot />
</a>
