<script>
    import { page } from "$app/stores";
    import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS } from "$lib/stores";
    import uniq from "lodash/uniq"

    export let href = "";
    export let publisherLink = false;
    export let langLink = false;

    let newHref;

    $: {
        const combinedPath =
            // 1. Publisher fragment
            `/${langLink ? href : $page.data.publisher}` +
            // 2. Lang fragment
            `/${publisherLink ? href : $page.data.lang}` +
            // 3. Path
            $page.url.pathname;

        // Remove duplicate slashes
        const fixedPath = combinedPath.replaceAll(/\/+/g, "/");

        newHref = uniq(fixedPath.split("/")).join("/")

        // Get unique
        // const pp = 

        // if (path.startsWith(publisherFragment + langFragment)) {
        //     // path = path.replace(publisherFragment + langFragment, "")
        // }
        // if (path.startsWith(publisherFragment)) {
        //     // path = path.replace(publisherFragment, "")
        // }
        // if (path.startsWith(langFragment)) {
        //     // path = path.replace(langFragment, "")
        // }

        // newHref =
        //     `/${langLink ? href : $page.data.lang}/`
        //         .replaceAll(`/${SUPPORTED_PUBLISHERS[0]}/`, "/")
        //         .replaceAll(`/${SUPPORTED_LANGS[0]}/`, "/")
        //         ; // remove duplicate slashes

        // if (newHref.slice(-1) === "/") {
        //     newHref = newHref.slice(0, -1);
        // }
    }

    // $: if (langLink) {
    //     newHref = `/${$page.data.publisher}/${href}/`

    //     // Append the rest of the route (/guides)
    //     newHref += $page.url.pathname.replaceAll(`/${SUPPORTED_PUBLISHERS[0]}/`)
    // }

    // $: if (publisherLink) {
    //     newHref = `${href}/${$page.data.lang}/`
    //         .replaceAll(`/${SUPPORTED_PUBLISHERS[0]}/`, "/")
    //         .replaceAll(`/${SUPPORTED_LANGS[0]}/`, "/")
    //         .replaceAll(/\/+/g, "/"); // remove duplicate slashes

    //     if (newHref.slice(-1) === "/") {
    //         newHref = newHref.slice(0, -1);
    //     }
    // }
</script>

<a href={newHref} {...$$restProps}>
    {newHref}
    <slot />
</a>
