<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import Tooltip from "../FloatingUI/Tooltip.svelte";
    import PublisherLink from "./PublisherLink.svelte";
    import LangLink from "./LangLink.svelte";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    // TODO: esc to close; allow <Tooltip> to be a <dialog> ?
    // if (open) then clicking an option will not close the modal, as users may like to edit multiple options without having to reopen the modal

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
                <div class="grid gap-4 tooltip-style" style="min-width: 180px;">
                    <div class="grid gap-1 justify-items-start">
                        <span class="mini-header">Theme</span>
                        <label class:accent1={theme === "light"}>
                            <input
                                type="radio"
                                value="light"
                                bind:group={theme}
                                on:input={(e) => updateTheme(e)}
                            />
                            Light
                        </label>
                        <label class:accent1={theme === "dark"}>
                            <input
                                type="radio"
                                value="dark"
                                bind:group={theme}
                                on:input={(e) => updateTheme(e)}
                            />
                            Dark
                        </label>
                        <label class:accent1={theme === "system"}>
                            <input
                                type="radio"
                                value="system"
                                bind:group={theme}
                                on:input={(e) => updateTheme(e)}
                            />
                            System
                        </label>
                    </div>
                    <div class="grid gap-1 justify-items-start">
                        <span class="mini-header">Publisher</span>
                        <PublisherLink
                            href="/bno"
                            class="styled-link static-link whitespace-nowrap"
                            >Bandai Namco Online</PublisherLink
                        >
                        <PublisherLink
                            href="/ags"
                            class="styled-link static-link whitespace-nowrap"
                            >Amazon Games</PublisherLink
                        >
                    </div>
                    <div class="grid gap-1 justify-items-start">
                        <span class="mini-header">Language</span>
                        <LangLink
                            href="/en"
                            class="styled-link static-link whitespace-nowrap"
                            >English</LangLink
                        >
                        <LangLink
                            href="/ja"
                            class="styled-link static-link whitespace-nowrap"
                            >日本語</LangLink
                        >
                        <LangLink
                            href="/fr"
                            class="styled-link static-link whitespace-nowrap"
                            >Français</LangLink
                        >
                        <LangLink
                            href="/de"
                            class="styled-link static-link whitespace-nowrap"
                            >Deutsch</LangLink
                        >
                        <LangLink
                            href="/es"
                            class="styled-link static-link whitespace-nowrap"
                            >Español</LangLink
                        >
                        <LangLink
                            href="/pt"
                            class="styled-link static-link whitespace-nowrap"
                            >Português</LangLink
                        >
                    </div>
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
</style>
