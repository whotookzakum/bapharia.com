<script>
    import { page } from "$app/stores";

    export let lang = "";
    export let availableLangs = [];
    export let currentLang = ""

    const langNames = {
        en: {
            href: "/en",
            name: "English",
        },
        ja: {
            href: "/ja",
            name: "日本語",
        },
        fr: {
            href: "/fr",
            name: "Français",
        },
        de: {
            href: "/de",
            name: "Deutsch",
        },
        es: {
            href: "/es",
            name: "Español",
        },
        pt: {
            href: "/pt",
            name: "Português",
        },
    };

    let href;

    $: {
        href = langNames[lang].href.replace("/" + availableLangs[0], "") + $page.url.pathname.replace("/" + currentLang, "")
        if (href.endsWith("/")) href = href.substring(0, href.length - 1)
        if (href.length < 1) href = "/"
    }
</script>

<a
    {href}
    class="styled-link static-link whitespace-nowrap"
    class:active={lang === currentLang}
    >{langNames[lang].name}</a
>
