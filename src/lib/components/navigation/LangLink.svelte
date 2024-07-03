<script>
    import { page } from "$app/stores";
    import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS } from "$lib/stores";
    import uniq from "lodash/uniq";

    export let href = "";

    let newHref;
    let publisherFragment = `/${$page.data.publisher.replace(SUPPORTED_PUBLISHERS[0], "")}`;
    let langFragment = href;

    $: {
        const path =
            publisherFragment +
            langFragment +
            $page.url.pathname
                // Prevent the current lang from being added to this link, resulting in /ja/fr
                .replace(`/${$page.data.lang}`, href)
                // Prevent the default publisher from being added to the link in incorrect order after langFragment such as /ja/ags
                .replace(`/${SUPPORTED_PUBLISHERS[0]}`, "");

        newHref =
            // Remove duplicates such as /bno/fr/bno/fr
            uniq(path.split("/"))
                .join("/")
                // Prevent the default lang from being added as it is unnecessary
                .replace(`/${SUPPORTED_LANGS[0]}`, "");
    }
</script>

<a href={newHref} class:active={newHref === $page.url.pathname.split("#")[0]} {...$$restProps}>
    <slot />
</a>
