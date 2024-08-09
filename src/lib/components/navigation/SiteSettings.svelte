<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import Tooltip from "../FloatingUI/Tooltip.svelte";
    import PublisherLink from "./PublisherLink.svelte";
    import LangLink from "./LangLink.svelte";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { SUPPORTED_VERSIONS } from "$lib/constants";
    import LangLink2 from "./LangLink2.svelte";

    // Alternatively, a right side offcanvas could be used for a settings drawer
    // If (open) then clicking an option will not close the modal, as users may like to edit multiple options without having to reopen the modal

    // TODO: esc to close; allow <Tooltip> to be a <dialog> ?
    // TODO: set and cache userLocale from [[lang]]
    // TODO:

    export let currentPublisher = "";
    export let currentLang = "";
    export let availableLangs = [];

    let show = false;
    let open = false;
    let theme = browser && localStorage.getItem("theme-preference");
    let systemTheme;

    if (browser && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        systemTheme = "dark";
    } else {
        systemTheme = "light";
    }

    onMount(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                systemTheme = event.matches ? "dark" : "light";
            });

        // Sync theme across tabs (went with localStorage method since we're already using it to store theme)
        // https://blog.bitsrc.io/4-ways-to-communicate-across-browser-tabs-in-realtime-e4f5f6cbedca
        window.addEventListener("storage", (event) => {
            if (event.storageArea != localStorage) return;
            if (event.key === "theme-preference") {
                theme = event.newValue;
                applyTheme(theme);
            }
        });
    });

    function updateTheme(e) {
        theme = e.target.value;
        applyTheme(theme);
    }

    function applyTheme(theme) {
        if (!browser) return;
        if (theme && theme !== "system") {
            document.documentElement.setAttribute("color-scheme", theme);
        } else {
            document.documentElement.removeAttribute("color-scheme", theme);
        }
        localStorage.setItem("theme-preference", theme);
    }

    const publisherNames = {
        bno: {
            href: "https://bno.bapharia.com",
            name: "Bandai Namco Online",
        },
        ags: {
            href: "https://bapharia.com",
            name: "Amazon Games",
        },
        sg: {
            href: "https://sg.bapharia.com",
            name: "Smilegate",
        },
        ct: {
            href: "https://ct.bapharia.com",
            name: "Cayenne Tech",
        },
    };
</script>

<svelte:head>
    <script>
        cachedTheme = localStorage.getItem("theme-preference") ?? "system";
        applyTheme(cachedTheme);

        function applyTheme(theme) {
            if (theme && theme !== "system") {
                document.documentElement.setAttribute("color-scheme", theme);
            } else {
                document.documentElement.removeAttribute("color-scheme", theme);
            }
            localStorage.setItem("theme-preference", theme);
        }
    </script>
</svelte:head>

<div style="position: relative;">
    <Tooltip
        {show}
        offset={0}
        tooltipStyle="background: none; backdrop-filter: none; filter: none; padding: 0;"
        showTooltipOn={["focus", "focusin"]}
        hideTooltipOn={[]}
        tooltipAriaHidden="false"
        tooltipRole="none"
    >
        <button
            class="nav-button"
            aria-label="Open language selector modal"
            aria-live="polite"
            style={open ? "color: var(--accent1)" : ""}
            on:click={() => {
                open = !open;
                show = open;
            }}
            on:mouseleave={() => {
                if (!open) show = false;
            }}
            on:mouseenter={() => {
                show = true;
            }}
        >
            <Icon icon="material-symbols:settings" style="color: inherit" />
        </button>
        <svelte:fragment slot="tooltip">
            <div
                class="pt-2"
                role="dialog"
                on:mouseenter={() => {
                    show = true;
                }}
                on:mouseleave={() => {
                    if (!open) show = false;
                }}
            >
                <div class="grid gap-3 tooltip-style" style="min-width: 180px;">
                    <div class="grid gap-1 justify-items-start">
                        <span class="mini-header">Theme</span>
                        <label
                            class="hover:underline"
                            class:active={theme === "light"}
                        >
                            <input
                                type="radio"
                                value="light"
                                class="visually-hidden"
                                bind:group={theme}
                                on:input={(e) => updateTheme(e)}
                            />
                            Light
                        </label>
                        <label
                            class="hover:underline"
                            class:active={theme === "dark"}
                        >
                            <input
                                type="radio"
                                value="dark"
                                class="visually-hidden"
                                bind:group={theme}
                                on:input={(e) => updateTheme(e)}
                            />
                            Dark
                        </label>
                        <label
                            class="hover:underline"
                            class:active={theme === "system"}
                        >
                            <input
                                type="radio"
                                value="system"
                                class="visually-hidden"
                                bind:group={theme}
                                on:input={(e) => updateTheme(e)}
                            />
                            System
                        </label>
                    </div>
                    <hr />
                    <div class="grid gap-1 justify-items-start">
                        <span class="mini-header">Publisher</span>
                        {#each SUPPORTED_VERSIONS as ver}
                            <a
                                href={publisherNames[ver.publisher].href}
                                class="styled-link static-link whitespace-nowrap"
                                class:active={ver.publisher ===
                                    currentPublisher}
                                >{publisherNames[ver.publisher].name}</a
                            >
                        {/each}
                    </div>
                    <hr />
                    <div class="grid gap-1 justify-items-start">
                        <span class="mini-header">Language</span>
                        {#each availableLangs as lang}
                            <LangLink2 {lang} {availableLangs} {currentLang} />
                        {/each}
                    </div>
                    <hr />
                    <div class="grid gap-1 justify-items-start">
                        <span class="mini-header">Time Zone</span>
                        <label>
                            <input type="radio" /> Local Time
                        </label>
                        <label>
                            <input type="radio" /> UTC
                        </label>
                        <label>
                            <input type="radio" /> JST
                        </label>
                    </div>
                </div>
            </div>
        </svelte:fragment>
    </Tooltip>
</div>

<style lang="scss">
    hr {
        background: white;
        opacity: 0.2;
        height: 1px;
        border: none;
    }

    .mini-header {
        color: white;
        opacity: 0.6;
        font-size: var(--step--2);
    }
</style>
