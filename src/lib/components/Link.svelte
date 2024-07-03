<script>
    import { page } from "$app/stores"
    import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS } from "$lib/stores"

    export let href = "";

    let newHref;

    $: {
        newHref = `/${$page.data.publisher}/${$page.data.lang}/${href}/`
        .replaceAll(`/${SUPPORTED_PUBLISHERS[0]}/`, "/")
        .replaceAll(`/${SUPPORTED_LANGS[0]}/`, "/")
        .replaceAll(/\/+/g, '/') // remove duplicate slashes

        if (newHref.slice(-1) === "/") {
            newHref = newHref.slice(0, -1)
        }
    }
</script>

<a href={newHref} {...$$restProps}>
    {newHref}
    <slot />
</a>