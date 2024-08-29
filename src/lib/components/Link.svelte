<script>
    import { page } from "$app/stores"

    export let href = "";

    let newHref;

    $: {
        // TODO: replace defaults with nothing, i.e. /en => /
        newHref = `/${$page.data.publisher}/${$page.data.lang}/${href}/`
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